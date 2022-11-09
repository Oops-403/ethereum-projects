import { Contract, BigNumber, ContractInterface, utils } from 'ethers'

const PrivatePlacementABI: Exclude<ContractInterface, utils.Interface> = [
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_claimBeginTime',
        'type': 'uint256'
      }
    ],
    'name': 'ClaimBeginTimeChanged',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_claimEndTime',
        'type': 'uint256'
      }
    ],
    'name': 'ClaimEndTimeChanged',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'address',
        'name': '_claimToken',
        'type': 'address'
      }
    ],
    'name': 'ClaimTokenChanged',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_owner',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': '_claimedAmount',
        'type': 'uint256'
      }
    ],
    'name': 'ClaimedAmount',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_owner',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': '_initialAmount',
        'type': 'uint256'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': '_remainingAmount',
        'type': 'uint256'
      }
    ],
    'name': 'InitialAmountChanged',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'previousOwner',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'newOwner',
        'type': 'address'
      }
    ],
    'name': 'OwnershipTransferred',
    'type': 'event'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_endTime',
        'type': 'uint256'
      }
    ],
    'name': 'changeEndTime',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_startTime',
        'type': 'uint256'
      }
    ],
    'name': 'changeStartTime',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'claim',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'claimBeginTime',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'claimEndTime',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'claimToken',
    'outputs': [
      {
        'internalType': 'contract IERC20Upgradeable',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'name': 'claimedAmount',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_claimer',
        'type': 'address'
      }
    ],
    'name': 'getClaimable',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': 'claimable',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_claimer',
        'type': 'address'
      }
    ],
    'name': 'getUserClaimInfo',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': 'totalAmount',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'claimed',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'remaining',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'lastClaimedTime',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'name': 'initialAmount',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_claimToken',
        'type': 'address'
      },
      {
        'internalType': 'address[]',
        'name': '_users',
        'type': 'address[]'
      },
      {
        'internalType': 'uint256[]',
        'name': '_amounts',
        'type': 'uint256[]'
      }
    ],
    'name': 'initialize',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'name': 'latestClaimedTime',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'owner',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'name': 'remainingAmount',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'renounceOwnership',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address[]',
        'name': '_users',
        'type': 'address[]'
      },
      {
        'internalType': 'uint256[]',
        'name': '_amounts',
        'type': 'uint256[]'
      }
    ],
    'name': 'setClaimAmount',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_newClaimToken',
        'type': 'address'
      }
    ],
    'name': 'setClaimToken',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'newOwner',
        'type': 'address'
      }
    ],
    'name': 'transferOwnership',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'unlockTime',
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
]

const enum PrivatePlacementFunctions {
  Claim = 'claim',
  ClaimBeginTime = 'claimBeginTime',
  ClaimEndTime = 'claimEndTime',
  ClaimedAmount = 'claimedAmount',
  GetClaimable = 'getClaimable',
  GetuserClaimInfo = 'getUserClaimInfo',
  LatestClaimedTime = 'latestClaimedTime',
  RemainingAmount = 'remainingAmount',
}

interface UserClaimInfo {
  totalAmount: BigNumber;
  claimed: BigNumber;
  remaining: BigNumber;
  lastClaimedTime: BigNumber;
}

const enum PrivatePlacementEvents {
  ClaimedAmount = 'ClaimedAmount',
  InitialAmountChanged = 'InitialAmountChanged',
}

declare class PrivatePlacementContract extends Contract {
  claim: () => Promise<any>;
  claimBeginTime: () => Promise<BigNumber>;
  claimEndTime: () => Promise<BigNumber>;
  claimedAmount: (userAddress: string) => Promise<BigNumber>;
  getClaimable: (userAddress: string) => Promise<BigNumber>;
  getUserClaimInfo: (userAddress: string) => Promise<UserClaimInfo>;
  latestClaimedTime: (userAddress: string) => Promise<BigNumber>;
  remainingAmount: (userAddress: string) => Promise<BigNumber>;
}
