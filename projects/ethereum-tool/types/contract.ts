import { ContractInterface, Signer, providers } from 'ethers'

export interface BaseContractConfig {
  addressOrName: string;
  contractInterface?: ContractInterface;
  signerOrProvider: Signer | providers.Web3Provider | providers.JsonRpcProvider;
}