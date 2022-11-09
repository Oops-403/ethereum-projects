import { ContractInterface, utils, BigNumber, BigNumberish, ContractTransaction } from 'ethers'

const ERC20ABI: Exclude<ContractInterface, utils.Interface> = [
  {
    'constant': true,
    'inputs': [],
    'name': 'name',
    'outputs': [
      {
        'name': '',
        'type': 'string'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_spender',
        'type': 'address'
      },
      {
        'name': '_value',
        'type': 'uint256'
      }
    ],
    'name': 'approve',
    'outputs': [
      {
        'name': 'success',
        'type': 'bool'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'totalSupply',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_from',
        'type': 'address'
      },
      {
        'name': '_to',
        'type': 'address'
      },
      {
        'name': '_value',
        'type': 'uint256'
      }
    ],
    'name': 'transferFrom',
    'outputs': [
      {
        'name': 'success',
        'type': 'bool'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'decimals',
    'outputs': [
      {
        'name': '',
        'type': 'uint8'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'version',
    'outputs': [
      {
        'name': '',
        'type': 'string'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_owner',
        'type': 'address'
      }
    ],
    'name': 'balanceOf',
    'outputs': [
      {
        'name': 'balance',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'symbol',
    'outputs': [
      {
        'name': '',
        'type': 'string'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_to',
        'type': 'address'
      },
      {
        'name': '_value',
        'type': 'uint256'
      }
    ],
    'name': 'transfer',
    'outputs': [
      {
        'name': 'success',
        'type': 'bool'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_spender',
        'type': 'address'
      },
      {
        'name': '_value',
        'type': 'uint256'
      },
      {
        'name': '_extraData',
        'type': 'bytes'
      }
    ],
    'name': 'approveAndCall',
    'outputs': [
      {
        'name': 'success',
        'type': 'bool'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_owner',
        'type': 'address'
      },
      {
        'name': '_spender',
        'type': 'address'
      }
    ],
    'name': 'allowance',
    'outputs': [
      {
        'name': 'remaining',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'inputs': [
      {
        'name': '_initialAmount',
        'type': 'uint256'
      },
      {
        'name': '_tokenName',
        'type': 'string'
      }, {
        'name': '_decimalUnits',
        'type': 'uint8'
      },
      {
        'name': '_tokenSymbol',
        'type': 'string'
      }
    ],
    'type': 'constructor'
  },
  {
    'payable': false,
    'type': 'fallback'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': '_from',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': '_to',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': '_value',
        'type': 'uint256'
      }
    ],
    'name': 'Transfer',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': '_owner',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': '_spender',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': '_value',
        'type': 'uint256'
      }
    ],
    'name': 'Approval',
    'type': 'event'
  }
]

// EIP-20: Token Standard
const enum ERC20Functions {
  Name = 'name',
  Symbol = 'symbol',
  Version = 'version',
  Decimals = 'decimals',
  TotalSupply = 'totalSupply',
  Transfer = 'transfer',
  TransferFrom = 'transferFrom',
  BalanceOf = 'balanceOf',
  Approve = 'approve',
  Allowance = 'allowance',
}

// EIP-20: Token Standard
const enum ERC20Events {
  Transfer = 'Transfer',
  Approval = 'Approval',
}

// EIP-20: Token Standard
interface BaseERC20Interface {
  name(): Promise<string>;
  symbol(): Promise<string>;
  decimals(): Promise<number>;
  totalSupply(): Promise<BigNumber>;
  balanceOf(owner: string): Promise<BigNumber>;
  allowance(owner: string, spender: string): Promise<BigNumber>;
  transfer(to: string, value: BigNumberish): Promise<ContractTransaction>;
  transferFrom(from: string, to: string, value: BigNumberish): Promise<ContractTransaction>;
  approve(spender: string, value: BigNumberish): Promise<ContractTransaction>;
}

export {
  ERC20ABI,
  ERC20Functions,
  ERC20Events,
  BaseERC20Interface
}