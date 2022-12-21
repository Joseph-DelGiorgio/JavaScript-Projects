//Getter.js

function getValue(contract) {
    return contract.value();
}

module.exports = getValue;


//Setter.js

function setValue(contract) {
    return contract.modify(6);
}

module.exports = setValue;



//Transfer.js

function transfer(contract, friend) {
    return contract.transfer(friend, 1000);
}

module.exports = transfer;



//Signer.js

function setMessage(contract, signer) {
    return contract.connect(signer).modify("Hello World!");
}

module.exports = setMessage;



//Deposit.js

const ethers = require('ethers');

function deposit(contract) {
    return contract.deposit({ value: ethers.utils.parseEther("1") });
}

module.exports = deposit;



//Tests.js

const { assert } = require('chai');
const deposit = require('../index');

describe('Contract', function () {
    let contract;
    before(async () => {
        const Contract = await ethers.getContractFactory("Contract");
        contract = await Contract.deploy();
        await contract.deployed();
    });

    it('should deposit at least 1 ether', async () => {
        await deposit(contract);
        const balance = await ethers.provider.getBalance(contract.address);
        assert(balance.gte(ethers.utils.parseEther("1")));
    });
});
