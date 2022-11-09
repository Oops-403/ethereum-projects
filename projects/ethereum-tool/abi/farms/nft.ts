import { utils, ContractInterface } from 'ethers'

const NFTFarmABI: Exclude<ContractInterface, utils.Interface> = [
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_firstRewardPeriod',
        'type': 'uint256'
      }
    ],
    'name': 'FirstRewardPeriodChanged',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'address',
        'name': '_hrSigner',
        'type': 'address'
      }
    ],
    'name': 'HrSignerChanged',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_maxHalvingYears',
        'type': 'uint256'
      }
    ],
    'name': 'MaxHalvingYearsChanged',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_oneYearBlockNum',
        'type': 'uint256'
      }
    ],
    'name': 'OneYearBlockNumChanged',
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
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_periodFinishHeight',
        'type': 'uint256'
      }
    ],
    'name': 'PeriodFinishHeightChanged',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_rewardPerToken',
        'type': 'uint256'
      }
    ],
    'name': 'RewardPerTokenChanged',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_rewardStartHeight',
        'type': 'uint256'
      }
    ],
    'name': 'RewardStartHeightChanged',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'address',
        'name': '_rewardToken',
        'type': 'address'
      }
    ],
    'name': 'RewardTokenChanged',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_manager',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'bool',
        'name': 'flag',
        'type': 'bool'
      }
    ],
    'name': 'SetManager',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_manager',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'bool',
        'name': 'flag',
        'type': 'bool'
      }
    ],
    'name': 'SetNftWhite',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_singleNFTMaxHashRate',
        'type': 'uint256'
      }
    ],
    'name': 'SingleNFTMaxHashRateChanged',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'address',
        'name': '_vmyt',
        'type': 'address'
      }
    ],
    'name': 'VMYTChanged',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_user',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'rewardUser',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_user',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_tokenContract',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': '_tokenId',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_hashrate',
        'type': 'uint256'
      }
    ],
    'name': 'stake1155NFT',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_user',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_tokenContract',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': '_tokenId',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_hashrate',
        'type': 'uint256'
      }
    ],
    'name': 'stake721NFT',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_user',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_tokenContract',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_tokenId',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_hashRate',
        'type': 'uint256'
      }
    ],
    'name': 'updateHashRate',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_user',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_tokenContract',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': '_tokenId',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_hashrate',
        'type': 'uint256'
      }
    ],
    'name': 'withdraw1155NFT',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_user',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_tokenContract',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': '_tokenId',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_hashrate',
        'type': 'uint256'
      }
    ],
    'name': 'withdraw721NFT',
    'type': 'event'
  },
  {
    'inputs': [],
    'name': 'ERC1155InterfaceId',
    'outputs': [
      {
        'internalType': 'bytes4',
        'name': '',
        'type': 'bytes4'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'ERC721InterfaceId',
    'outputs': [
      {
        'internalType': 'bytes4',
        'name': '',
        'type': 'bytes4'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'HashRate_CALL_HASH_TYPE',
    'outputs': [
      {
        'internalType': 'bytes32',
        'name': '',
        'type': 'bytes32'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'UpdateHashRate_CALL_HASH_TYPE',
    'outputs': [
      {
        'internalType': 'bytes32',
        'name': '',
        'type': 'bytes32'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'boost',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_user',
        'type': 'address'
      }
    ],
    'name': 'boostByVMYT',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'firstRewardPeriod',
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
    'name': 'getDomainSeparatorV4',
    'outputs': [
      {
        'internalType': 'bytes32',
        'name': '',
        'type': 'bytes32'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'getNFTFarmsInfo',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': 'nftRewardStartHeight',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'nftPeriodFinishHeight',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'nftInitRewardPerBlock',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'nftFirstRewardPeriod',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'nftOneYearBlockNum',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'nftRewardPerBlock',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'nftActualRewardPerBlock',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'nftTotalHashRate',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'nftSingleNFTMaxHashRate',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'nftSendRewards',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': 'nftRewardToken',
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
        'name': '_tokenContract',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '_tokenId',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_vNonceValue',
        'type': 'uint256'
      },
      {
        'internalType': 'bytes32',
        'name': '_r',
        'type': 'bytes32'
      },
      {
        'internalType': 'bytes32',
        'name': '_s',
        'type': 'bytes32'
      }
    ],
    'name': 'getNFTHashRate',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': 'value',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_signTime',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_totalRewardRatio',
        'type': 'uint256'
      },
      {
        'components': [
          {
            'internalType': 'address',
            'name': 'tokenContract',
            'type': 'address'
          },
          {
            'internalType': 'uint256',
            'name': 'tokenId',
            'type': 'uint256'
          },
          {
            'internalType': 'uint256',
            'name': 'hashRate',
            'type': 'uint256'
          }
        ],
        'internalType': 'struct HashRateUpgradeable.NftNewHashRate[]',
        'name': '_nftsHashRates',
        'type': 'tuple[]'
      },
      {
        'components': [
          {
            'internalType': 'address',
            'name': 'creator',
            'type': 'address'
          },
          {
            'internalType': 'uint256',
            'name': 'rewardRatio',
            'type': 'uint256'
          }
        ],
        'internalType': 'struct HashRateUpgradeable.NftCreatorReward[]',
        'name': '_nftCreatorRewards',
        'type': 'tuple[]'
      },
      {
        'internalType': 'bytes',
        'name': '_signatures',
        'type': 'bytes'
      }
    ],
    'name': 'getReward',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'getRewardPerBlock',
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
        'name': '_user',
        'type': 'address'
      }
    ],
    'name': 'getUserNftFarmsInfo',
    'outputs': [
      {
        'components': [
          {
            'internalType': 'address',
            'name': 'tokenContract',
            'type': 'address'
          },
          {
            'internalType': 'uint256',
            'name': 'tokenId',
            'type': 'uint256'
          },
          {
            'internalType': 'uint256',
            'name': 'hashRate',
            'type': 'uint256'
          }
        ],
        'internalType': 'struct HashRateUpgradeable.NftNewHashRate[]',
        'name': 'userStakedNfts',
        'type': 'tuple[]'
      },
      {
        'internalType': 'uint256',
        'name': 'vMYTBalance',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'claimableRewards',
        'type': 'uint256'
      },
      {
        'internalType': 'uint128',
        'name': 'currentPercent',
        'type': 'uint128'
      },
      {
        'internalType': 'uint128',
        'name': 'soltNum',
        'type': 'uint128'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_account',
        'type': 'address'
      }
    ],
    'name': 'getWeightByVMYT',
    'outputs': [
      {
        'internalType': 'uint128',
        'name': '',
        'type': 'uint128'
      },
      {
        'internalType': 'uint128',
        'name': '',
        'type': 'uint128'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'hrSigner',
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
    'inputs': [],
    'name': 'initRewardPerBlock',
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
        'name': '_myt',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': '_vmyt',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': '_hrSigner',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '_startHeight',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_rewardPerBlock',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_initRewardPerBlock',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_firstRewardPeriod',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_maxHalvingYears',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_oneYearBlockNum',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_singleNFTMaxHashRate',
        'type': 'uint256'
      }
    ],
    'name': 'initialize',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'lastUpdateHeight',
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
    'name': 'latestHeightReward',
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
    'name': 'maxHalvingYears',
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
        'name': '',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'nftNonceMap',
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
        'name': '',
        'type': 'address'
      }
    ],
    'name': 'nftWhiteMap',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
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
        'name': '',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      },
      {
        'internalType': 'uint256[]',
        'name': '',
        'type': 'uint256[]'
      },
      {
        'internalType': 'uint256[]',
        'name': '',
        'type': 'uint256[]'
      },
      {
        'internalType': 'bytes',
        'name': '',
        'type': 'bytes'
      }
    ],
    'name': 'onERC1155BatchReceived',
    'outputs': [
      {
        'internalType': 'bytes4',
        'name': '',
        'type': 'bytes4'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      },
      {
        'internalType': 'bytes',
        'name': '',
        'type': 'bytes'
      }
    ],
    'name': 'onERC1155Received',
    'outputs': [
      {
        'internalType': 'bytes4',
        'name': '',
        'type': 'bytes4'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      },
      {
        'internalType': 'bytes',
        'name': '',
        'type': 'bytes'
      }
    ],
    'name': 'onERC721Received',
    'outputs': [
      {
        'internalType': 'bytes4',
        'name': '',
        'type': 'bytes4'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'oneYearBlockNum',
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
        'name': '_user',
        'type': 'address'
      }
    ],
    'name': 'pendingReward',
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
    'name': 'periodFinishHeight',
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
    'inputs': [],
    'name': 'rewardPerBlock',
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
    'name': 'rewardPerTokenStored',
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
    'name': 'rewardStartHeight',
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
    'name': 'rewardToken',
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
        'name': '_hrSigner',
        'type': 'address'
      }
    ],
    'name': 'setHashRateSigner',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address[]',
        'name': '_nfts',
        'type': 'address[]'
      },
      {
        'internalType': 'bool',
        'name': 'flag',
        'type': 'bool'
      }
    ],
    'name': 'setNFTWhiteMap',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_firstRewardPeriod',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_maxHalvingYears',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_oneYearBlockNum',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_periodFinishHeight',
        'type': 'uint256'
      }
    ],
    'name': 'setRewardConfig',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_rewardPerBlock',
        'type': 'uint256'
      }
    ],
    'name': 'setRewardPerBlock',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_rewardStartHeight',
        'type': 'uint256'
      }
    ],
    'name': 'setRewardStartHeight',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_rewardToken',
        'type': 'address'
      }
    ],
    'name': 'setRewardToken',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_singleNFTMaxHashRate',
        'type': 'uint256'
      }
    ],
    'name': 'setSingleNFTMaxHashRate',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_vMYT',
        'type': 'address'
      }
    ],
    'name': 'setVMYTToken',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'singleNFTMaxHashRate',
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
        'name': '_contract',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '_tokenId',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_vNonceValue',
        'type': 'uint256'
      },
      {
        'internalType': 'bytes32',
        'name': '_r',
        'type': 'bytes32'
      },
      {
        'internalType': 'bytes32',
        'name': '_s',
        'type': 'bytes32'
      }
    ],
    'name': 'stake',
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
      },
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'stakedNFTInfoMap',
    'outputs': [
      {
        'internalType': 'address',
        'name': 'owner',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'hashrate',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
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
  },
  {
    'inputs': [],
    'name': 'totalHashRate',
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
    'inputs': [
      {
        'internalType': 'contract IERC20Upgradeable',
        'name': 'tokenAddress',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': 'to',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'transferToken',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'components': [
          {
            'internalType': 'address',
            'name': 'owner',
            'type': 'address'
          },
          {
            'components': [
              {
                'internalType': 'address',
                'name': 'tokenContract',
                'type': 'address'
              },
              {
                'internalType': 'uint256',
                'name': 'tokenId',
                'type': 'uint256'
              },
              {
                'internalType': 'uint256',
                'name': 'hashRate',
                'type': 'uint256'
              }
            ],
            'internalType': 'struct HashRateUpgradeable.NftNewHashRate[]',
            'name': 'nftsHashRates',
            'type': 'tuple[]'
          }
        ],
        'internalType': 'struct HashRateUpgradeable.UserHashRateParams[]',
        'name': '_userNewHashRates',
        'type': 'tuple[]'
      }
    ],
    'name': 'updateAllHashRate',
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
    'name': 'userLatestClaimSignTime',
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
        'name': '',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'userNFTs',
    'outputs': [
      {
        'internalType': 'address',
        'name': 'tokenContract',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'tokenId',
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
    'name': 'userRewardInfoMap',
    'outputs': [
      {
        'internalType': 'uint128',
        'name': 'userHashrateFixed',
        'type': 'uint128'
      },
      {
        'internalType': 'uint128',
        'name': 'userTotalHashRate',
        'type': 'uint128'
      },
      {
        'internalType': 'uint128',
        'name': 'userRewardPerTokenPaid',
        'type': 'uint128'
      },
      {
        'internalType': 'uint128',
        'name': 'userReward',
        'type': 'uint128'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'vMYT',
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
        'name': '_contract',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '_tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'withdraw',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }
]

const enum NFTFarmFunctions {
  ADD = 'add',
  CALCREDEMPTIONFEE = 'calcRedemptionFee',
  DEPOSIT = 'deposit',
  GETLPFARMSINFO = 'getLPFarmsInfo',
  GETREWARD = 'getReward',
  GETREWARDPERBLOCK = 'getRewardPerBlock',
  GETUSERINFO = 'getUserInfo',
  INITIALIZE = 'initialize',
  ONEYEARBLOCKNUM = 'oneYearBlockNum',
  PENDINGREWARD = 'pendingReward',
  POOLINFO = 'poolInfo',
  POOLLENGTH = 'poolLength',
  REDEMPTIONFEERATE = 'redemptionFeeRate',
  REWARDPERBLOCK = 'rewardPerBlock',
  REWARDTOKEN = 'rewardToken',
  STARTBLOCK = 'startBlock',
  TOTALALLOCPOINT = 'totalAllocPoint',
  WITHDRAW = 'withdraw'
}

const enum NFTFarmEvents {
  FirstRewardPeriodChanged = 'FirstRewardPeriodChanged',
  HrSignerChanged = 'HrSignerChanged',
  MaxHalvingYearsChanged = 'MaxHalvingYearsChanged',
  OneYearBlockNumChanged = 'OneYearBlockNumChanged',
  OwnershipTransferred = 'OwnershipTransferred',
  PeriodFinishHeightChanged = 'PeriodFinishHeightChanged',
  RewardPerTokenChanged = 'RewardPerTokenChanged',
  RewardStartHeightChanged = 'RewardStartHeightChanged',
  RewardTokenChanged = 'RewardTokenChanged',
  SetNftWhite = 'SetNftWhite',
  SetManager = 'SetManager',
  SingleNFTMaxHashRateChanged = 'SingleNFTMaxHashRateChanged',
  VMYTChanged = 'VMYTChanged',
  RewardUser = 'rewardUser',
  Stake1155NFT = 'stake1155NFT',
  Stake721NFT = 'stake721NFT',
  UpdateHashRate = 'updateHashRate',
  Withdraw1155NFT = 'withdraw1155NFT',
  Withdraw721NFT = 'withdraw721NFT',
}

export {
  NFTFarmABI,
  NFTFarmFunctions,
  NFTFarmEvents
}
