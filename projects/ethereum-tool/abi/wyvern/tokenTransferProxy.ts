import { ContractInterface, utils } from 'ethers'

const WyvernTokenTransferProxyABI: Exclude<ContractInterface, utils.Interface> = [
  {
    'constant': false,
    'inputs': [
      {
        'name': 'token',
        'type': 'address'
      },
      {
        'name': 'from',
        'type': 'address'
      },
      {
        'name': 'to',
        'type': 'address'
      },
      {
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'transferFrom',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'registry',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'name': 'registryAddr',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'constructor'
  }
]

const enum WyvernTokenTransferProxyFunctions {
  REGISTRY = 'registry',
  TRANSFERFROM = 'transferFrom',
}

export {
  WyvernTokenTransferProxyABI,
  WyvernTokenTransferProxyFunctions
}