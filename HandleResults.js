
//HandleResults.js

const { getResults } = require('./lab');
const { sendResults } = require('./messaging');
const { logResponse, logError } = require('./logs');

async function handleResults(patientId) {
    try {
        const results = await getResults(patientId);
        const response = await sendResults(patientId, results);
        await logResponse(response);
    }
    catch(ex) {
        logError(ex);
    }
}

module.exports = handleResults;





//Logs.js

const __calls = [];
const __errors = [];

function logResponse(...args) {
    __calls.push(args);
    return new Promise((resolve, reject) => {
        resolve();
    });
}

function logError(...args) {
    __errors.push(args);
}

module.exports = {
    __calls,
    __errors,
    logResponse,
    logError,
};


//Messaging.js
const __calls = [];
const __response = { recieved: true };

function sendResults(...args) {
    __calls.push(args);
    return new Promise((resolve, reject) => {
        resolve(__response);
    });
}

module.exports = {
    __calls,
    __response,
    sendResults,
};








//Lab.js

const __calls = [];
const __results = { negative: true };
const __reset = () => { __calls.length = 0; }
const __error = new Error("Results are not ready");

function getResults(...args) {
    __calls.push(args);
    return new Promise((resolve, reject) => {
        if (args[0] === 1) {
            resolve(__results);
        }
        else {
            reject(__error);
        }
    });
}

module.exports = {
    __calls,
    __reset,
    __results,
    __error,
    getResults,
};







//Test.js

const lab = require('../lab');
const messaging = require('../messaging');
const logs = require('../logs');
const handleResults = require('../handleResults');
const { assert } = require('chai');

describe('Lab Results', () => {
    describe('first patient', () => {
        const patientId = 2;
        before(async () => {
            await handleResults(patientId);
        });

        describe('calling the lab', () => {
            it('should make one call', () => {
                assert.equal(lab.__calls.length, 1);
            });
            it('should send one argument', () => {
                assert.equal(lab.__calls[0].length, 1);
            });
            it('should send the patient id', () => {
                assert.equal(lab.__calls[0][0], patientId);
            });
        });

        describe('logging the error', () => {
            it('should make one call', () => {
                assert.equal(logs.__errors.length, 1);
            });
            it('should send one argument', () => {
                assert.equal(logs.__errors[0].length, 1);
            });
            it('should send the error', () => {
                assert.equal(logs.__errors[0][0], lab.__error);
            });
        });
    });

    describe('second patient', () => {
        const patientId = 1;
        before(async () => {
            lab.__reset();
            await handleResults(patientId);
        });

        describe('calling the lab', () => {
            it('should make one call', () => {
                assert.equal(lab.__calls.length, 1);
            });
            it('should send one argument', () => {
                assert.equal(lab.__calls[0].length, 1);
            });
            it('should send the patient id', () => {
                assert.equal(lab.__calls[0][0], patientId);
            });
        });

        describe('sending the results', () => {
            it('should make one call', () => {
                assert.equal(messaging.__calls.length, 1);
            });
            it('should send two arguments', () => {
                assert.equal(messaging.__calls[0].length, 2);
            });
            it('should send the patient id and lab results', () => {
                assert.equal(messaging.__calls[0][0], patientId);
                assert.equal(messaging.__calls[0][1], lab.__results);
            });
        });

        describe('logging the response', () => {
            it('should make one call', () => {
                assert.equal(logs.__calls.length, 1);
            });
            it('should send one argument', () => {
                assert.equal(logs.__calls[0].length, 1);
            });
            it('should send the response', () => {
                assert.equal(logs.__calls[0][0], messaging.__response);
            });
        });
    });
});
