import { Contract, BigNumberish, BigNumber, Signer, providers, ContractTransaction } from 'ethers'
import { ERC20ABI as defaultERC20ABI, BaseERC20Interface } from '../../abi/erc20'
import { BaseContractConfig } from '../../types/contract'

export class BaseERC20Contract implements BaseERC20Interface {
  readonly token: Contract
  readonly signer: Signer | null
  readonly provider: providers.Provider | null

  constructor({ addressOrName, contractInterface, signerOrProvider }: BaseContractConfig) {
    if (Signer.isSigner(signerOrProvider)) {
      this.signer = signerOrProvider
      this.provider = signerOrProvider.provider || null
    } else if (providers.Provider.isProvider(signerOrProvider)) {
      this.provider = signerOrProvider
      this.signer = signerOrProvider.getSigner && signerOrProvider.getSigner()
    } else {
      this.signer = null
      this.provider = null
      throw 'a provider or signer is needed'
    }

    this.token = new Contract(addressOrName, contractInterface || defaultERC20ABI, signerOrProvider)
  }

  name(): Promise<string> {
    return this.token.name()
  }

  symbol(): Promise<string> {
    return this.token.symbol()
  }

  decimals(): Promise<number> {
    return this.token.decimals()
  }

  totalSupply(): Promise<BigNumber> {
    return this.token.totalSupply()
  }

  balanceOf(owner: string): Promise<BigNumber> {
    return this.token.balanceOf(owner)
  }

  allowance(owner: string, spender: string): Promise<BigNumber> {
    return this.token.allowance(owner, spender)
  }

  async transfer(to: string, value: BigNumberish): Promise<ContractTransaction> {
    if(!this.signer) {
      throw "invalid signer or provider"
    }
    return this.token.connect(this.signer).transfer(to, value)
  }

  transferFrom(from: string, to: string, value: BigNumberish): Promise<ContractTransaction> {
    if(!this.signer) {
      throw "invalid signer or provider"
    }
    return this.token.connect(this.signer).transferFrom(from, to, value)
  }

  approve(spender: string, value: BigNumberish): Promise<ContractTransaction> {
    if(!this.signer) {
      throw "invalid signer or provider"
    }
    return this.token.connect(this.signer).approve(spender, value)
  }

  getRawContract(): Contract {
    return this.token
  }
}