/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FxERC721RootTunnel,
  FxERC721RootTunnelInterface,
} from "../FxERC721RootTunnel";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_checkpointManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_fxRoot",
        type: "address",
      },
      {
        internalType: "address",
        name: "_fxERC721Token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "rootToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "FxDepositERC721",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "rootToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "childToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "FxWithdrawERC721",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "rootToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "childToken",
        type: "address",
      },
    ],
    name: "TokenMappedERC721",
    type: "event",
  },
  {
    inputs: [],
    name: "DEPOSIT",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAP_TOKEN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SEND_MESSAGE_EVENT_SIG",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "checkpointManager",
    outputs: [
      {
        internalType: "contract ICheckpointManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "childTokenTemplateCodeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "bytecodeHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "deployer",
        type: "address",
      },
    ],
    name: "computedCreate2Address",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "rootToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fxChildTunnel",
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
    inputs: [],
    name: "fxRoot",
    outputs: [
      {
        internalType: "contract IFxStateSender",
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
        internalType: "address",
        name: "rootToken",
        type: "address",
      },
    ],
    name: "mapToken",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "processedExits",
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
        internalType: "bytes",
        name: "inputData",
        type: "bytes",
      },
    ],
    name: "receiveMessage",
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
    name: "rootToChildTokens",
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
        internalType: "address",
        name: "_fxChildTunnel",
        type: "address",
      },
    ],
    name: "setFxChildTunnel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200303738038062003037833981016040819052620000349162000109565b600180546001600160a01b038086166001600160a01b03199283161790925560008054928516929091169190911790556200006f8162000084565b8051602090910120600555506200018f915050565b604051606090693d602d80600a3d3981f360b01b9069363d3d373d3d3d363d7360b01b9084841b906e5af43d82803e903d91602b57fd5bf360881b90620000d690859085908590859060200162000152565b6040516020818303038152906040529450505050505b919050565b80516001600160a01b0381168114620000ec57600080fd5b6000806000606084860312156200011e578283fd5b6200012984620000f1565b92506200013960208501620000f1565b91506200014960408501620000f1565b90509250925092565b6001600160b01b0319948516815292909316600a8301526001600160601b03191660148201526001600160881b0319909116602882015260370190565b612e98806200019f6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063972c492811610097578063de9b771f11610066578063de9b771f146101c8578063e9c670ad146101d0578063f4a120f7146101e3578063f953cec7146101f6576100f5565b8063972c49281461019b578063aea4e49e146101a3578063c0857ba0146101b8578063d81c8e52146101c0576100f5565b806369914b3e116100d357806369914b3e146101585780637337957f14610160578063886a69ba1461018057806388e7006814610188576100f5565b80630e387de6146100fa578063150b7a0214610118578063607f2d4214610138575b600080fd5b610102610209565b60405161010f91906127ba565b60405180910390f35b61012b610126366004612321565b61022d565b60405161010f91906127dc565b61014b610146366004612425565b610257565b60405161010f91906127af565b61010261026c565b61017361016e36600461243d565b610272565b60405161010f9190612683565b6101026102b3565b610173610196366004612285565b6102d7565b6101736102ff565b6101b66101b1366004612285565b61031b565b005b6101736103bb565b6101026103d7565b6101736103fb565b6101b66101de3660046123bb565b610417565b6101b66101f1366004612285565b6105cd565b6101b66102043660046124c1565b61088c565b7f8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b03681565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b60036020526000908152604090205460ff1681565b60055481565b60008060ff60f81b83868660405160200161029094939291906125c9565b60408051601f1981840301815291905280516020909101209150505b9392505050565b7f2cef46a936bdc5b7e6e8c71aa04560c41cf7d88bb26901a7e7f4936ff02accad81565b60046020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60025473ffffffffffffffffffffffffffffffffffffffff1681565b60025473ffffffffffffffffffffffffffffffffffffffff1615610374576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036b90612866565b60405180910390fd5b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b7f87a7811f4bfedea3d341ad165680ae306b01aaeacc205d227629cf157dd9f82181565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b73ffffffffffffffffffffffffffffffffffffffff8481166000908152600460205260409020541661044c5761044c846105cd565b6040517fb88d4fde00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063b88d4fde906104a49033903090879087906004016126f6565b600060405180830381600087803b1580156104be57600080fd5b505af11580156104d2573d6000803e3d6000fd5b5050505060007f87a7811f4bfedea3d341ad165680ae306b01aaeacc205d227629cf157dd9f82185338686866040516020016105129594939291906126a4565b60408051601f198184030181529082905261053092916020016127c3565b604051602081830303815290604052905061054a816108a6565b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167f6027944915fe4eed24b493e60b41ddaea5f543d0cfc0f0357f1cdef7a2ad3379866040516105be91906127ba565b60405180910390a45050505050565b73ffffffffffffffffffffffffffffffffffffffff818116600090815260046020526040902054161561062c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036b90612809565b600081905060008173ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b15801561067957600080fd5b505afa15801561068d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106b59190810190612527565b905060008273ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b1580156106ff57600080fd5b505afa158015610713573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261073b9190810190612527565b905060007f2cef46a936bdc5b7e6e8c71aa04560c41cf7d88bb26901a7e7f4936ff02accad8584846040516020016107759392919061276e565b60408051601f198184030181529082905261079392916020016127c3565b60405160208183030381529060405290506107ad816108a6565b6000856040516020016107c09190612599565b60408051601f19818403018152919052805160209091012060055460025491925060009161080591849173ffffffffffffffffffffffffffffffffffffffff16610272565b73ffffffffffffffffffffffffffffffffffffffff88811660008181526004602052604080822080547fffffffffffffffffffffffff000000000000000000000000000000000000000016948616948517905551939450919290917fac7bdfd1c9797163cad973ce9aca20e24ed965aaf4613f777293bffc303562d091a350505050505050565b600061089782610937565b90506108a281610bca565b5050565b6000546002546040517fb472047700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9283169263b47204779261090292911690859060040161273f565b600060405180830381600087803b15801561091c57600080fd5b505af1158015610930573d6000803e3d6000fd5b5050505050565b6060600061094483610d64565b9050600061095182610d94565b9050600061095e83610dd1565b905060008161096c84610e08565b6109758661102e565b6040516020016109879392919061263b565b60408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff16156109e9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036b90612920565b600081815260036020526040812080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055610a2985611058565b90506000610a3682611166565b9050610a41816111f5565b60025473ffffffffffffffffffffffffffffffffffffffff908116911614610a95576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036b90612ab6565b6000610aa08761122c565b9050610abe610aae84611256565b87610ab88a61125d565b84611287565b610af4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036b906128c3565b610b2285610b0189611586565b610b0a8a6115b0565b84610b148c6115da565b610b1d8d611604565b61162e565b506000610b2e83611776565b90507f8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b036610b64610b5f8360006117b9565b6117f3565b14610b9b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036b90612a7f565b6000610ba68461186e565b806020019051810190610bb991906124f4565b99505050505050505050505b919050565b600080600080600085806020019051810190610be691906122a1565b73ffffffffffffffffffffffffffffffffffffffff858116600090815260046020526040902054959a5093985091965094509250858116911614610c56576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036b90612a22565b6040517fb88d4fde00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86169063b88d4fde90610cae9030908790879087906004016126f6565b600060405180830381600087803b158015610cc857600080fd5b505af1158015610cdc573d6000803e3d6000fd5b505050508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fdf709ff47fc84022ec81f28321525a93cfb41fac4318bf8a368d685c6f3ea69185604051610d5491906127ba565b60405180910390a4505050505050565b610d6c612177565b6000610d7f610d7a84611898565b6118bd565b60408051602081019091529081529392505050565b6060610dcb8260000151600881518110610dbe57634e487b7160e01b600052603260045260246000fd5b60200260200101516119e3565b92915050565b6000610dcb8260000151600281518110610dfb57634e487b7160e01b600052603260045260246000fd5b60200260200101516117f3565b60408051602081019091526000815281516060919015610dcb57600080610e30600086611a8e565b60f81c90506001811480610e4757508060ff166003145b15610f2357600185516002610e5c9190612ce5565b610e669190612d22565b67ffffffffffffffff811115610e8c57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610eb6576020820181803683370190505b5092506000610ec6600187611a8e565b90508084600081518110610eea57634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506001925050610f95565b600285516002610f339190612ce5565b610f3d9190612d22565b67ffffffffffffffff811115610f6357634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610f8d576020820181803683370190505b509250600091505b60ff82165b835181101561102557610fc4610fb360ff851683612d22565b610fbe906002612b65565b87611a8e565b848281518110610fe457634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508061101d81612d8c565b915050610f9a565b50505092915050565b6000610dcb8260000151600981518110610dfb57634e487b7160e01b600052603260045260246000fd5b61106061218a565b6110888260000151600681518110610dbe57634e487b7160e01b600052603260045260246000fd5b6020820181905260009061109b90611898565b90506110a681611b2b565b156110bb576110b4816118bd565b8252611152565b602082015180516000906110d190600190612d22565b67ffffffffffffffff8111156110f757634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611121576020820181803683370190505b50905060008083602101915082602001905061113f82828551611b65565b61114b610d7a84611898565b8652505050505b61115b8361102e565b604083015250919050565b61116e6121ab565b60006111a5836000015160038151811061119857634e487b7160e01b600052603260045260246000fd5b60200260200101516118bd565b8360400151815181106111c857634e487b7160e01b600052603260045260246000fd5b6020026020010151905060405180604001604052808281526020016111ec836118bd565b90529392505050565b6000610dcb826020015160008151811061121f57634e487b7160e01b600052603260045260246000fd5b6020026020010151611bdf565b6000610dcb8260000151600581518110610dfb57634e487b7160e01b600052603260045260246000fd5b6020015190565b6060610dcb8260000151600781518110610dbe57634e487b7160e01b600052603260045260246000fd5b60008061129384611898565b905060006112a0826118bd565b9050606080856000806112b28b610e08565b90508051600014156112ce57600097505050505050505061157e565b60005b86518110156115755781518311156112f45760009850505050505050505061157e565b61132487828151811061131757634e487b7160e01b600052603260045260246000fd5b6020026020010151611bf9565b9550858051906020012084146113455760009850505050505050505061157e565b61136887828151811061119857634e487b7160e01b600052603260045260246000fd5b94508451601114156114675781518314156113d8578c805190602001206113a986601081518110610dbe57634e487b7160e01b600052603260045260246000fd5b8051906020012014156113c75760019850505050505050505061157e565b60009850505050505050505061157e565b60008284815181106113fa57634e487b7160e01b600052603260045260246000fd5b016020015160f81c9050601081111561141f576000995050505050505050505061157e565b611452868260ff168151811061144557634e487b7160e01b600052603260045260246000fd5b6020026020010151611c88565b945061145f600185612b65565b935050611563565b8451600214156113c75760006114a161149a87600081518110610dbe57634e487b7160e01b600052603260045260246000fd5b8486611cb6565b83519091506114b08286612b65565b1415611513578d805190602001206114e287600181518110610dbe57634e487b7160e01b600052603260045260246000fd5b805190602001201415611501576001995050505050505050505061157e565b6000995050505050505050505061157e565b8061152a576000995050505050505050505061157e565b6115348185612b65565b935061155a8660018151811061144557634e487b7160e01b600052603260045260246000fd5b94506115639050565b8061156d81612d8c565b9150506112d1565b50505050505050505b949350505050565b6000610dcb8260000151600381518110610dfb57634e487b7160e01b600052603260045260246000fd5b6000610dcb8260000151600481518110610dfb57634e487b7160e01b600052603260045260246000fd5b6000610dcb8260000151600081518110610dfb57634e487b7160e01b600052603260045260246000fd5b6060610dcb8260000151600181518110610dbe57634e487b7160e01b600052603260045260246000fd5b6001546040517f41539d4a00000000000000000000000000000000000000000000000000000000815260009182918291829173ffffffffffffffffffffffffffffffffffffffff909116906341539d4a9061168d9089906004016127ba565b60a06040518083038186803b1580156116a557600080fd5b505afa1580156116b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116dd9190612475565b5093505092509250611733828b6116f49190612d22565b84878d8d8d8d60405160200161170d9493929190612668565b60405160208183030381529060405280519060200120611e19909392919063ffffffff16565b611769576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036b906129eb565b9998505050505050505050565b61177e612177565b60405180602001604052806117b1846020015160018151811061119857634e487b7160e01b600052603260045260246000fd5b905292915050565b6117c16121cb565b82518051839081106117e357634e487b7160e01b600052603260045260246000fd5b6020026020010151905092915050565b80516000901580159061180857508151602110155b61181157600080fd5b60006118208360200151611f61565b905060008184600001516118349190612d22565b90506000808386602001516118499190612b65565b905080519150602083101561186557826020036101000a820491505b50949350505050565b6060610dcb8260200151600281518110610dbe57634e487b7160e01b600052603260045260246000fd5b6118a06121cb565b506040805180820190915281518152602082810190820152919050565b60606118c882611b2b565b6118d157600080fd5b60006118dc83611fe6565b905060008167ffffffffffffffff81111561190757634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561194057816020015b61192d6121cb565b8152602001906001900390816119255790505b50905060006119528560200151611f61565b85602001516119619190612b65565b90506000805b848110156119d85761197883612069565b91506040518060400160405280838152602001848152508482815181106119af57634e487b7160e01b600052603260045260246000fd5b60209081029190910101526119c48284612b65565b9250806119d081612d8c565b915050611967565b509195945050505050565b80516060906119f157600080fd5b6000611a008360200151611f61565b90506000818460000151611a149190612d22565b905060008167ffffffffffffffff811115611a3f57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611a69576020820181803683370190505b5090506000816020019050611865848760200151611a879190612b65565b828561212b565b6000611a9b600284612dc5565b15611ae357601082611aae600286612b7d565b81518110611acc57634e487b7160e01b600052603260045260246000fd5b0160200151611ade919060f81c612dd9565b611b21565b601082611af1600286612b7d565b81518110611b0f57634e487b7160e01b600052603260045260246000fd5b0160200151611b21919060f81c612b91565b60f81b9392505050565b8051600090611b3c57506000610bc5565b6020820151805160001a9060c0821015611b5b57600092505050610bc5565b5060019392505050565b80611b6f57611bda565b60208110611ba75782518252611b86602084612b65565b9250611b93602083612b65565b9150611ba0602082612d22565b9050611b6f565b60006001611bb6836020612d22565b611bc290610100612bf9565b611bcc9190612d22565b845184518216911916178352505b505050565b8051600090601514611bf057600080fd5b610dcb826117f3565b60606000826000015167ffffffffffffffff811115611c2857634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611c52576020820181803683370190505b509050805160001415611c66579050610bc5565b6000816020019050611c81846020015182866000015161212b565b5092915050565b8051600090602114611c9957600080fd5b60008083602001516001611cad9190612b65565b51949350505050565b60008080611cc386610e08565b90506000815167ffffffffffffffff811115611cef57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611d19576020820181803683370190505b509050845b8251611d2a9087612b65565b811015611de9576000878281518110611d5357634e487b7160e01b600052603260045260246000fd5b01602001517fff000000000000000000000000000000000000000000000000000000000000001690508083611d888985612d22565b81518110611da657634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350508080611de190612d8c565b915050611d1e565b50808051906020012082805190602001201415611e095781519250611e0e565b600092505b509095945050505050565b600060208251611e299190612dc5565b15611e60576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036b9061297d565b600060208351611e709190612b7d565b9050611e7d816002612bf9565b8510611eb5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036b906129b4565b60008660205b85518111611f5357858101519250611ed4600289612dc5565b611f08578183604051602001611eeb92919061262d565b604051602081830303815290604052805190602001209150611f34565b8282604051602001611f1b92919061262d565b6040516020818303038152906040528051906020012091505b611f3f600289612b7d565b9750611f4c602082612b65565b9050611ebb565b509094149695505050505050565b8051600090811a6080811015611f7b576000915050610bc5565b60b8811080611f96575060c08110801590611f96575060f881105b15611fa5576001915050610bc5565b60c0811015611fda57611fba600160b8612d39565b611fc79060ff1682612d22565b611fd2906001612b65565b915050610bc5565b611fba600160f8612d39565b8051600090611ff757506000610bc5565b6000806120078460200151611f61565b84602001516120169190612b65565b905060008460000151856020015161202e9190612b65565b90505b808210156120605761204282612069565b61204c9083612b65565b91508261205881612d8c565b935050612031565b50909392505050565b80516000908190811a60808110156120845760019150611c81565b60b88110156120aa57612098608082612d22565b6120a3906001612b65565b9150611c81565b60c08110156120d75760b78103600185019450806020036101000a85510460018201810193505050611c81565b60f88110156120eb5761209860c082612d22565b60019390930151602084900360f7016101000a90049092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0a0192915050565b8061213557611bda565b6020811061216d578251825261214c602084612b65565b9250612159602083612b65565b9150612166602082612d22565b9050612135565b80611ba757611bda565b6040518060200160405280606081525090565b60405180606001604052806060815260200160608152602001600081525090565b60405180604001604052806121be6121cb565b8152602001606081525090565b604051806040016040528060008152602001600081525090565b60006121f86121f384612b3d565b612b13565b905082815283838301111561220c57600080fd5b6102ac836020830184612d5c565b600082601f83011261222a578081fd5b81356122386121f382612b3d565b81815284602083860101111561224c578283fd5b816020850160208301379081016020019190915292915050565b600082601f830112612276578081fd5b6102ac838351602085016121e5565b600060208284031215612296578081fd5b81356102ac81612e3d565b600080600080600060a086880312156122b8578081fd5b85516122c381612e3d565b60208701519095506122d481612e3d565b60408701519094506122e581612e3d565b60608701516080880151919450925067ffffffffffffffff811115612308578182fd5b61231488828901612266565b9150509295509295909350565b600080600080600060808688031215612338578081fd5b853561234381612e3d565b9450602086013561235381612e3d565b935060408601359250606086013567ffffffffffffffff80821115612376578283fd5b818801915088601f830112612389578283fd5b813581811115612397578384fd5b8960208285010111156123a8578384fd5b9699959850939650602001949392505050565b600080600080608085870312156123d0578384fd5b84356123db81612e3d565b935060208501356123eb81612e3d565b925060408501359150606085013567ffffffffffffffff81111561240d578182fd5b6124198782880161221a565b91505092959194509250565b600060208284031215612436578081fd5b5035919050565b600080600060608486031215612451578283fd5b8335925060208401359150604084013561246a81612e3d565b809150509250925092565b600080600080600060a0868803121561248c578081fd5b8551945060208601519350604086015192506060860151915060808601516124b381612e3d565b809150509295509295909350565b6000602082840312156124d2578081fd5b813567ffffffffffffffff8111156124e8578182fd5b61157e8482850161221a565b600060208284031215612505578081fd5b815167ffffffffffffffff81111561251b578182fd5b61157e84828501612266565b600060208284031215612538578081fd5b815167ffffffffffffffff81111561254e578182fd5b8201601f8101841361255e578182fd5b61157e848251602084016121e5565b60008151808452612585816020860160208601612d5c565b601f01601f19169290920160200192915050565b60609190911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016815260140190565b7fff0000000000000000000000000000000000000000000000000000000000000094909416845260609290921b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001660018401526015830152603582015260550190565b918252602082015260400190565b60008482528351612653816020850160208801612d5c565b60209201918201929092526040019392505050565b93845260208401929092526040830152606082015260800190565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b600073ffffffffffffffffffffffffffffffffffffffff8088168352808716602084015280861660408401525083606083015260a060808301526126eb60a083018461256d565b979650505050505050565b600073ffffffffffffffffffffffffffffffffffffffff808716835280861660208401525083604083015260806060830152612735608083018461256d565b9695505050505050565b600073ffffffffffffffffffffffffffffffffffffffff841682526040602083015261157e604083018461256d565b600073ffffffffffffffffffffffffffffffffffffffff851682526060602083015261279d606083018561256d565b8281036040840152612735818561256d565b901515815260200190565b90815260200190565b60008382526040602083015261157e604083018461256d565b7fffffffff0000000000000000000000000000000000000000000000000000000091909116815260200190565b60208082526022908201527f4678455243373231526f6f7454756e6e656c3a20414c52454144595f4d41505060408201527f4544000000000000000000000000000000000000000000000000000000000000606082015260800190565b6020808252602a908201527f467842617365526f6f7454756e6e656c3a204348494c445f54554e4e454c5f4160408201527f4c52454144595f53455400000000000000000000000000000000000000000000606082015260800190565b60208082526023908201527f4678526f6f7454756e6e656c3a20494e56414c49445f524543454950545f505260408201527f4f4f460000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526024908201527f4678526f6f7454756e6e656c3a20455849545f414c52454144595f50524f434560408201527f5353454400000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526014908201527f496e76616c69642070726f6f66206c656e677468000000000000000000000000604082015260600190565b60208082526015908201527f4c65616620696e64657820697320746f6f206269670000000000000000000000604082015260600190565b6020808252601c908201527f4678526f6f7454756e6e656c3a20494e56414c49445f48454144455200000000604082015260600190565b6020808252602b908201527f4678455243373231526f6f7454756e6e656c3a20494e56414c49445f4d41505060408201527f494e475f4f4e5f45584954000000000000000000000000000000000000000000606082015260800190565b6020808252601f908201527f4678526f6f7454756e6e656c3a20494e56414c49445f5349474e415455524500604082015260600190565b60208082526025908201527f4678526f6f7454756e6e656c3a20494e56414c49445f46585f4348494c445f5460408201527f554e4e454c000000000000000000000000000000000000000000000000000000606082015260800190565b60405181810167ffffffffffffffff81118282101715612b3557612b35612e27565b604052919050565b600067ffffffffffffffff821115612b5757612b57612e27565b50601f01601f191660200190565b60008219821115612b7857612b78612dfb565b500190565b600082612b8c57612b8c612e11565b500490565b600060ff831680612ba457612ba4612e11565b8060ff84160491505092915050565b80825b6001808611612bc55750612bf0565b818704821115612bd757612bd7612dfb565b80861615612be457918102915b9490941c938002612bb6565b94509492505050565b60006102ac7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484600082612c30575060016102ac565b81612c3d575060006102ac565b8160018114612c535760028114612c5d57612c8a565b60019150506102ac565b60ff841115612c6e57612c6e612dfb565b6001841b915084821115612c8457612c84612dfb565b506102ac565b5060208310610133831016604e8410600b8410161715612cbd575081810a83811115612cb857612cb8612dfb565b6102ac565b612cca8484846001612bb3565b808604821115612cdc57612cdc612dfb565b02949350505050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612d1d57612d1d612dfb565b500290565b600082821015612d3457612d34612dfb565b500390565b600060ff821660ff841680821015612d5357612d53612dfb565b90039392505050565b60005b83811015612d77578181015183820152602001612d5f565b83811115612d86576000848401525b50505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612dbe57612dbe612dfb565b5060010190565b600082612dd457612dd4612e11565b500690565b600060ff831680612dec57612dec612e11565b8060ff84160691505092915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff81168114612e5f57600080fd5b5056fea2646970667358221220a56f8ea5ad87af89de03c6be624e0e6bb27938aa21f1578b04b58a6d36fb4a5764736f6c63430008000033";

export class FxERC721RootTunnel__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _checkpointManager: string,
    _fxRoot: string,
    _fxERC721Token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FxERC721RootTunnel> {
    return super.deploy(
      _checkpointManager,
      _fxRoot,
      _fxERC721Token,
      overrides || {}
    ) as Promise<FxERC721RootTunnel>;
  }
  getDeployTransaction(
    _checkpointManager: string,
    _fxRoot: string,
    _fxERC721Token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _checkpointManager,
      _fxRoot,
      _fxERC721Token,
      overrides || {}
    );
  }
  attach(address: string): FxERC721RootTunnel {
    return super.attach(address) as FxERC721RootTunnel;
  }
  connect(signer: Signer): FxERC721RootTunnel__factory {
    return super.connect(signer) as FxERC721RootTunnel__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FxERC721RootTunnelInterface {
    return new utils.Interface(_abi) as FxERC721RootTunnelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FxERC721RootTunnel {
    return new Contract(address, _abi, signerOrProvider) as FxERC721RootTunnel;
  }
}
