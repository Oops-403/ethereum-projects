
export const supportsInterfaceABI = {
  'inputs': [
    {
      'internalType': 'bytes4',
      'name': 'interfaceId',
      'type': 'bytes4'
    }
  ],
  'name': 'supportsInterface',
  'outputs': [
    {
      'internalType': 'bool',
      'name': '',
      'type': 'bool'
    }
  ],
  'stateMutability': 'view',
  'type': 'function'
}

export const balanceOf20ABI = {
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
}

export const balanceOf1155ABI = {
  'inputs': [
    {
      'internalType': 'address',
      'name': '_user',
      'type': 'address'
    },
    {
      'internalType': 'uint256',
      'name': '_id',
      'type': 'uint256'
    }
  ],
  'name': 'balanceOf',
  'outputs': [
    {
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }
  ],
  'stateMutability': 'view',
  'type': 'function'
}

export const ownerOf721ABI = {
  'constant': true,
  'inputs': [
    {
      'name': '_tokenId',
      'type': 'uint256'
    }
  ],
  'name': 'ownerOf',
  'outputs': [
    {
      'name': '',
      'type': 'address'
    }
  ],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}

export const semiOrNonFungibleApproveABI = [
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_account',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': '_operator',
        'type': 'address'
      }
    ],
    'name': 'isApprovedForAll',
    'outputs': [
      {
        'internalType': 'bool',
        'name': 'isOperator',
        'type': 'bool'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'operator',
        'type': 'address'
      },
      {
        'internalType': 'bool',
        'name': 'approved',
        'type': 'bool'
      }
    ],
    'name': 'setApprovalForAll',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }
]

export const proxyABI: any = {
  'constant': false,
  'inputs': [
    {
      'name': 'dest',
      'type': 'address'
    },
    {
      'name': 'howToCall',
      'type': 'uint8'
    },
    {
      'name': 'calldata',
      'type': 'bytes'
    }
  ],
  'name': 'proxy',
  'outputs': [
    {
      'name': 'success',
      'type': 'bool'
    }
  ],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}

export const proxyAssertABI: any = {
  'constant': false,
  'inputs': [
    {
      'name': 'dest',
      'type': 'address'
    },
    {
      'name': 'howToCall',
      'type': 'uint8'
    },
    {
      'name': 'calldata',
      'type': 'bytes'
    }
  ],
  'name': 'proxyAssert',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}
