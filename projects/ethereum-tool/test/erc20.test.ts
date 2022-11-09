import { BaseERC20Contract } from '../contracts/erc/base-erc20'
import { URL_INFURA_RINKEBY, CONTRACT_TOKEN_WETH, CONTRACT_TOKEN_USDC } from '../config'
import { providers, Wallet } from 'ethers'

// privateKey from address: 0xa3a0Dfd91E8De58aE73dCd6Ea24734D9363CF5b2
const privateKey = 'd40f5520d78169ad3a4117b86c82a6107a772cec7beb843459f5ef7a963cc427'

const json_provider = new providers.JsonRpcProvider(URL_INFURA_RINKEBY)

const wallet = new Wallet(privateKey, json_provider)

const contract = new BaseERC20Contract({
  addressOrName: CONTRACT_TOKEN_USDC,
  signerOrProvider: json_provider
})

const test_erc20_properties = async () => {
  const name = await contract.name()
  console.log('name: ' + name)

  const symbol = await contract.symbol()
  console.log('symbol: ' + symbol)

  const decimals = await contract.decimals()
  console.log('decimals: ' + decimals)

  const totalSupply = await contract.totalSupply()
  console.log('totalSupply: ' + totalSupply)

  // const balances = await contract.balanceOf('0xB619c74d2FB961AeDF5b3a706D2A1AF62b948492')
  const balances = await contract.balanceOf('0xa3a0Dfd91E8De58aE73dCd6Ea24734D9363CF5b2')
  console.log('balances: ' + balances)
}

const test_erc20_functions = async () => {
  // const bool1 = await contract.getRawContract().connect(wallet).transfer('0xB619c74d2FB961AeDF5b3a706D2A1AF62b948492', '100')
  const res = await contract.transfer('0xB619c74d2FB961AeDF5b3a706D2A1AF62b948492', '100')
  console.log(res.gasPrice)
}

async function main() {
  // test_erc20_properties()
  test_erc20_functions()
}

main().catch(e => console.log(e))