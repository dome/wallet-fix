const registrarController = [
  {
    constant: false,
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'bytes32'
      }
    ],
    name: 'commitments',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'MIN_REGISTRATION_DURATION',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'minCommitmentAge',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [
      {
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'isOwner',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'maxCommitmentAge',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'transferOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        name: '_base',
        type: 'address'
      },
      {
        name: '_prices',
        type: 'address'
      },
      {
        name: '_minCommitmentAge',
        type: 'uint256'
      },
      {
        name: '_maxCommitmentAge',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'name',
        type: 'string'
      },
      {
        indexed: true,
        name: 'label',
        type: 'bytes32'
      },
      {
        indexed: true,
        name: 'owner',
        type: 'address'
      },
      {
        indexed: false,
        name: 'cost',
        type: 'uint256'
      },
      {
        indexed: false,
        name: 'expires',
        type: 'uint256'
      }
    ],
    name: 'NameRegistered',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'name',
        type: 'string'
      },
      {
        indexed: true,
        name: 'label',
        type: 'bytes32'
      },
      {
        indexed: false,
        name: 'cost',
        type: 'uint256'
      },
      {
        indexed: false,
        name: 'expires',
        type: 'uint256'
      }
    ],
    name: 'NameRenewed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'oracle',
        type: 'address'
      }
    ],
    name: 'NewPriceOracle',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    constant: true,
    inputs: [
      {
        name: 'name',
        type: 'string'
      },
      {
        name: 'duration',
        type: 'uint256'
      }
    ],
    name: 'rentPrice',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: 'name',
        type: 'string'
      }
    ],
    name: 'valid',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: 'name',
        type: 'string'
      }
    ],
    name: 'available',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: 'name',
        type: 'string'
      },
      {
        name: 'owner',
        type: 'address'
      },
      {
        name: 'secret',
        type: 'bytes32'
      }
    ],
    name: 'makeCommitment',
    outputs: [
      {
        name: '',
        type: 'bytes32'
      }
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: 'name',
        type: 'string'
      },
      {
        name: 'owner',
        type: 'address'
      },
      {
        name: 'secret',
        type: 'bytes32'
      },
      {
        name: 'resolver',
        type: 'address'
      },
      {
        name: 'addr',
        type: 'address'
      }
    ],
    name: 'makeCommitmentWithConfig',
    outputs: [
      {
        name: '',
        type: 'bytes32'
      }
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'commitment',
        type: 'bytes32'
      }
    ],
    name: 'commit',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'name',
        type: 'string'
      },
      {
        name: 'owner',
        type: 'address'
      },
      {
        name: 'duration',
        type: 'uint256'
      },
      {
        name: 'secret',
        type: 'bytes32'
      }
    ],
    name: 'register',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'name',
        type: 'string'
      },
      {
        name: 'owner',
        type: 'address'
      },
      {
        name: 'duration',
        type: 'uint256'
      },
      {
        name: 'secret',
        type: 'bytes32'
      },
      {
        name: 'resolver',
        type: 'address'
      },
      {
        name: 'addr',
        type: 'address'
      }
    ],
    name: 'registerWithConfig',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'name',
        type: 'string'
      },
      {
        name: 'duration',
        type: 'uint256'
      }
    ],
    name: 'renew',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_prices',
        type: 'address'
      }
    ],
    name: 'setPriceOracle',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_minCommitmentAge',
        type: 'uint256'
      },
      {
        name: '_maxCommitmentAge',
        type: 'uint256'
      }
    ],
    name: 'setCommitmentAges',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [],
    name: 'withdraw',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: 'interfaceID',
        type: 'bytes4'
      }
    ],
    name: 'supportsInterface',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function'
  }
];

export default registrarController;
