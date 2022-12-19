//TotalTransactions.js

const provider = require('./provider');

async function getTotalTransactions(blockNumber) {
    const { result } = await provider.send({
        jsonrpc: "2.0",
        id: 1,
        method: "eth_getBlockByNumber",
        params: [ 
            "0x" + blockNumber.toString(16), 
            false
        ],
    });
    
    return result.transactions.length;
}

module.exports = getTotalTransactions;



//GetTotalBalance.js

const provider = require('./provider');

async function getTotalBalance(addresses) {
    const responses = await provider.send(addresses.map(addr => ({
        jsonrpc: "2.0",
        id: 1,
        method: "eth_getBalance",
        params: [addr, "latest"],
    })));

    return responses.reduce((p,c) => p + parseInt(c.result), 0);
}

module.exports = getTotalBalance;
