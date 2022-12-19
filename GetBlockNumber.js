const provider = require('./provider');

async function getBlockNumber() {
    const response = await provider.send({
        jsonrpc: "2.0",
        id: 1,
        method: "eth_blockNumber",
    });
    
    return response.result;
}

module.exports = getBlockNumber;






//Promisfy.js

function promisfy(fn) {
    const _prev = fn;
    return (...args) => {
        return new Promise((resolve, reject) => {
            _prev(...args, (err, response) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(response);
                }
            })
        })
    }
}

module.exports = promisfy;






//Test.js

const { assert } = require('chai');
const getBlockNumber = require('../getBlockNumber');
const provider = require('../provider');

describe('getBlockNumber', function () {
    it('should get the current block number', async () => {
        const blockNumber = await getBlockNumber();
        assert.equal(blockNumber, 0);
    });

    describe('after mining a block', () => {
        before(() => {
            return provider.send({ id: 1, jsonrpc: "2.0", method: "evm_mine" });
        });

        it('should get the latest block number', async () => {
            const blockNumber = await getBlockNumber();
            assert.equal(blockNumber, 1);
        });
    });
});


//Provider.js

const ganache = require("ganache-core");
const promisfy = require("./promisfy");

const provider = ganache.provider();

provider.send = promisfy(provider.send);

module.exports = provider;
