import { BigNumberish, BigNumber, Contract, ContractTransaction } from 'ethers'

export const enum ERC1155Functions {
  Name = 'name',
  Symbol = 'symbol',
  TemplateURI = 'templateURI',
  BalanceOf = 'balanceOf',
  CurrentSupply = 'currentSupply',
  GetBalance = 'getBalance',
  GetIdCreator = 'getIdCreator',
  Uri = 'uri',
  IsApprovedForAll = 'isApprovedForAll',
  MaxSupply = 'maxSupply',
  Mint = 'mint',
  MusiciansWhiteList = 'musiciansWhiteList',
  OpenMintTime = 'openMintTime',
  ProxyRegistryAddress = 'proxyRegistryAddress',
  SafeTransferFrom = 'safeTransferFrom',
  SetApprovalForAll = 'setApprovalForAll',
  SupportsInterface = 'supportsInterface'
}

export type ERC721Property = ERC1155Functions.Name | ERC1155Functions.Symbol | ERC1155Functions.TemplateURI | ERC1155Functions.CurrentSupply

export const enum ERC1155Events {
  ApprovalForAll = 'ApprovalForAll', /* account, operator, bool */
  CreatorChanged = 'CreatorChanged', /* tokenId, creatorAddress */
  OwnershipTransferred = 'OwnershipTransferred', /* previousOwner, newOwner */
  SetMusician = 'SetMusician', /* musician: address, flag: boolean */
  SetOpenTime = 'SetOpenTime', /* openTime */
  TransferBatch = 'TransferBatch', /* operator, from, to, tokenIds, values */
  TransferSingle = 'TransferSingle', /* operator, from, to, tokenId, value */
  URI = 'URI' /* value, tokenId */
}

export declare class ERC1155Contract extends Contract {
  // balanceOfBatch, batchMint, safeBatchTransferFrom, setCreatorForIds
  name: () => Promise<string>;
  symbol: () => Promise<string>;
  templateURI: () => Promise<string>;
  uri: (tokenId: BigNumberish) => Promise<string>;
  balanceOf: (owner: string, tokenId: BigNumberish) => Promise<BigNumber>;
  currentSupply: (tokenId: BigNumberish) => Promise<BigNumber>;
  getBalance: (owner: string, tokenId: BigNumberish) => Promise<BigNumber>;
  getIdCreator: (tokenId: BigNumberish) => Promise<string>;
  isApprovedForAll: (owner: string, operator: string) => Promise<boolean>;
  maxSupply: (id: BigNumberish) => Promise<BigNumber>;
  mint: (to: string, id: BigNumberish, quantity: BigNumberish, data: string) => Promise<ContractTransaction>;
  musiciansWhiteList?: (address: string) => Promise<boolean>;
  openMintTime?: () => Promise<BigNumber>;
  proxyRegistryAddress?: () => Promise<string>;
  safeTransferFrom: (from: string, to: string, tokenId: BigNumberish, amount: BigNumberish, data: string) => Promise<ContractTransaction>;
  setApprovalForAll: (operator: string, bool: boolean) => Promise<ContractTransaction>;
  supportsInterface: (interfaceId: string) => Promise<boolean>;
}
