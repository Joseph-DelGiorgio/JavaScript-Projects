Wallet_Secret= //(insert private key here)
INFURA_URL=https://goerli.infura.io/v3/13b402e7dd634ac0b51c46c2ac73fdc2;

const wallet= new ethers.Wallet(Wallet_Secret)
const provider= new ethers.providers.JsonRpcProvider(INFURA_URL)

const signer= wallet.connect(provider)

params={
    tokenIn: TOKEN0,
    tokenOut: TOKEN1,
    fee: 3000,
    recipient: signer2.address,
    deadline: DEADLINE,
    amountIn: ethers.utils.parseEther("0.25")
}

const tx1= await swapRouterContract.connect(signer).exactInputSingle(params, {gasLimit: GAS_LIMIT})

const tx2= await signer.sendTransaction(txArg)
