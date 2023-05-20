const ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "addAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_aadhar",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_daag",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_prevDaag",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_district",
        type: "string",
      },
      {
        internalType: "string",
        name: "_block_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_total_land_size",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_owner_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_phone",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_valuation",
        type: "uint256",
      },
    ],
    name: "addLand",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "administrator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_aadhar",
        type: "uint256",
      },
    ],
    name: "getDaagFromAadhar",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_daag",
        type: "uint256",
      },
    ],
    name: "getLandFromDaag",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_daag",
        type: "uint256",
      },
    ],
    name: "getPrevTransactions",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "prev_owner",
            type: "string",
          },
          {
            internalType: "string",
            name: "new_owner",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "valuation",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct LandRegistry.Transactions[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_aadhar",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_daag",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_owner_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_phone",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_valuation",
        type: "uint256",
      },
    ],
    name: "transferLand",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export default ABI;
