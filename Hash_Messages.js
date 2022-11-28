const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
    return keccak256(utf8ToBytes(message));
}

module.exports = hashMessage;

//Test.js:

const hashMessage = require('../hashMessage');
const { assert } = require('chai');
const { toHex } = require("ethereum-cryptography/utils");

const helloWorldHex = '47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad';

describe('Hash Message', () => {
    it('should return the keccak256 hash of hello world', () => {
        const messageHash = hashMessage('hello world');

        assert.equal(toHex(messageHash), helloWorldHex);
    });
});
