//This code shows 2 different ways the main function could estimate gas. The first method is commented out below, 
//the second method is simplier and active if you were to deploy this code as is.

const {ethers, BigNumber} = require('ethers')

require('dotenv').config()

const WETHADDRESS= '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
const {abi: WETHABI} = require('./WETH9.json')

const provider= new ethers.providers.JsonRpcProvider(process.env.INFURA_MAINNET_URL)

async function main(){
    //const wethContract= new ethers.Contract(WETHADDRESS, WETHABI, provider)

    //const encodeFunction= wethContract.interface.encodeFunctionData('withdraw', [ethers.utils.parseEther('1')])
    //const gas1= await provider.estimateGas({
        //to: WETHADDRESS,
        //data: encodedFunction,
    //})
   //console.log(gas1.toNumber())

    const gas2= await wethContract.estimateGas.withdraw(ethers.utils.parseEther('1'))
    console.log(gas2.toNumber())
}

main()
