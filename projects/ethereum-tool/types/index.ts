import { providers } from 'ethers'

export type ReadableProvider = providers.JsonRpcProvider | providers.Web3Provider

export type WriteableProvider = providers.Web3Provider

/**
 * ethereum network
 */
enum Network {
  Main = 'Main',
  Rinkeby = 'Rinkeby'
}

export {
  Network
}
