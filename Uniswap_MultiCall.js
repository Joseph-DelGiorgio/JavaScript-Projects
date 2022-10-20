const {ethers}= require ('ethers')

require('dotenv').config()
WALLET_ADDRESS = process.env.WALLET_ADDRESS
WALLET_SECRET = process.env.WALLET_SECRET
INFURA_TEST_URL = process.env.INFURA_TEST_URL

const { abi: V3SwapRouterABI } = require('@uniswap/v3-periphery/artifacts/contracts/interfaces/ISwapRouter.sol/ISwapRouter.json')
const { abi: PeripheryPaymentsABI } = require("@uniswap/v3-periphery/artifacts/contracts/interfaces/IPeripheryPayments.sol/IPeripheryPayments.json");
const { abi: MulticallABI } = require("@uniswap/v3-periphery/artifacts/contracts/interfaces/IMulticall.sol/IMulticall.json");

const V3SwapRouterAddress = '0xE592427A0AEce92De3Edee1F18E0157C05861564'
const WETHAddress = '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6';
const USDCAddress = '0x07865c6E87B9F70255377e024ace6630C1Eaa37F';
const UNIADDRESS = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984';

const V3SwapRouterContract = new ethers.Contract(
    V3SwapRouterAddress,
    V3SwapRouterABI.concat(PeripheryPaymentsABI).concat(MulticallABI)
)

const provider = new ethers.providers.JsonRpcProvider(INFURA_TEST_URL)
const wallet= new ethers.Wallet(WALLET_SECRET)
const signer = walet.connect(provider)

async function main(){

    const deadline= Math.floor(Date.new()/1000) + (60 *10)

    const params1= {
        tokenIn: WETHAddress,
        tokenOut: USDCAddress,
        fee: 3000
        recipient: WALLET_ADDRESS,
        deadline: '',
        amountIn: ethers.utils.parseEther(0.0001),
        amountOutMinimum: 0,
        sqrtPriceLimitX96: 0,
    }

    const encData1= V3SwapRouterContract.interface.encodeFunctionData("exactInputSingle", [params1])


    const params2= {
        tokenIn: WETHAddress,
        tokenOut: UNIAddress,
        fee: 3000
        recipient: WALLET_ADDRESS,
        deadline: '',
        amountIn: ethers.utils.parseEther(0.0001),
        amountOutMinimum: 0,
        sqrtPriceLimitX96: 0,
    }

    const encData2= V3SwapRouterContract.interface.encodeFunctionData("exactInputSingle", [params2])

    const calls= [encData1, encData2]
    const encMultiCall= swapRouterContract.interface.encodeFunctionData("multicall", [calls])

    const txArgs={
        to: V3SwapRouterAddress,
        from: WALLET_ADDRESS,
        data: encMultiCall
    }

    const tx= await signer.sendTransaction(txArgs)
    console.log('tx', tx)
    const receipt = await tx.wait()
}

main()
