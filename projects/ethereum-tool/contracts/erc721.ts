import { BigNumberish, BigNumber, Contract, ContractTransaction, utils } from 'ethers'
import { ERC721ABI } from '../abi/erc721'
import { ReadableProvider, WriteableProvider } from '../types'

export const enum ERC721Functions {
  Name = 'name',
  Version = 'version',
  Symbol = 'symbol',
  TotalSupply = 'totalSupply',
  BalanceOf = 'balanceOf',
  OwnerOf = 'ownerOf',
  Exists = 'exists',
  Approve = 'approve',
  SafeTransferFrom = 'safeTransferFrom',
  TransferFrom = 'transferFrom',
  Transfer = 'transfer',
  SetApprovalForAll = 'setApprovalForAll',
  GetApproved = 'getApproved',
  IsApprovedForAll = 'isApprovedForAll',
  TokenByIndex = 'tokenByIndex',
  TokenURI = 'tokenURI'
}

export type ERC721Property = ERC721Functions.Name | ERC721Functions.Symbol | ERC721Functions.Version | ERC721Functions.TotalSupply

declare class ERC721Contract extends Contract {
  name: () => Promise<string>;
  version: () => Promise<string>;
  symbol: () => Promise<string>;
  totalSupply: () => Promise<BigNumber>;
  balanceOf: (owner: string) => Promise<BigNumber>;
  ownerOf: (tokenId: BigNumberish) => Promise<string>;
  exists: (tokenId: BigNumberish) => Promise<boolean>;
  isApprovedForAll: (owner: string, operator: string) => Promise<boolean>;
  tokenURI: (tokenId: BigNumberish) => Promise<string>;
  tokenByIndex?: (index: BigNumberish) => Promise<BigNumber>;
  getApproved: (tokenId: BigNumberish) => Promise<string>;
  safeTransferFrom: (from: string, to: string, tokenId: BigNumberish, data?: string) => Promise<ContractTransaction>;
  transferFrom: (from: string, to: string, tokenId: BigNumberish) => Promise<ContractTransaction>;
  transfer: (to: string, tokenId: BigNumberish) => Promise<ContractTransaction>;
  approve: (spender: string, tokenId: BigNumberish) => Promise<ContractTransaction>;
  setApprovalForAll: (operator: string, approved: boolean) => Promise<ContractTransaction>;
}

export interface ERC721ContractConfig {
  contractAddress: string;
  gasIncreaseFactor: number;
}

export class ERC721Model {
  private config: ERC721ContractConfig;
  private interface = new utils.Interface(ERC721ABI)

  constructor(config: ERC721ContractConfig) {
    this.config = config
  }

  // Read contract data, need not sign
  private getContractFun<T extends ERC721Functions>(provider: ReadableProvider, fn: T) {
    return new ERC721Contract(this.config.contractAddress, [this.interface.getFunction(fn)], provider)[fn]
  }

  // some contract function need sign and estimate gas fee
  private getContract<T extends ERC721Functions>(provider: WriteableProvider, fn: T) {
    return new ERC721Contract(this.config.contractAddress, [this.interface.getFunction(fn)], provider)
  }

  public async getERC721Property(provider: ReadableProvider, fn: ERC721Property) {
    return this.getContractFun(provider, fn)()
  }
}