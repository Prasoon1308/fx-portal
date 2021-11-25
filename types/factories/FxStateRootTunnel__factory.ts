/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FxStateRootTunnel,
  FxStateRootTunnelInterface,
} from "../FxStateRootTunnel";

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
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    inputs: [],
    name: "latestData",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
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
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "sendMessageToChild",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x60806040523480156200001157600080fd5b506040516200252538038062002525833981016040819052620000349162000083565b600180546001600160a01b039384166001600160a01b03199182161790915560008054929093169116179055620000ba565b80516001600160a01b03811681146200007e57600080fd5b919050565b6000806040838503121562000096578182fd5b620000a18362000066565b9150620000b16020840162000066565b90509250929050565b61245b80620000ca6000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063972c492811610076578063c0857ba01161005b578063c0857ba014610138578063de9b771f14610140578063f953cec714610148576100a3565b8063972c492814610110578063aea4e49e14610125576100a3565b80630e387de6146100a8578063142bc2ae146100c65780634c09e6e8146100db578063607f2d42146100f0575b600080fd5b6100b061015b565b6040516100bd9190611e1a565b60405180910390f35b6100ce61017f565b6040516100bd9190611e23565b6100ee6100e9366004611c33565b61020d565b005b6101036100fe366004611bcf565b610219565b6040516100bd9190611e0f565b61011861022e565b6040516100bd9190611dbf565b6100ee610133366004611bb3565b61024a565b6101186102ea565b610118610306565b6100ee610156366004611c33565b610322565b7f8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b03681565b6004805461018c9061231d565b80601f01602080910402602001604051908101604052809291908181526020018280546101b89061231d565b80156102055780601f106101da57610100808354040283529160200191610205565b820191906000526020600020905b8154815290600101906020018083116101e857829003601f168201915b505050505081565b6102168161033c565b50565b60036020526000908152604090205460ff1681565b60025473ffffffffffffffffffffffffffffffffffffffff1681565b60025473ffffffffffffffffffffffffffffffffffffffff16156102a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029a90611e36565b60405180910390fd5b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b600061032d826103cd565b90506103388161067e565b5050565b6000546002546040517fb472047700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9283169263b472047792610398929116908590600401611de0565b600060405180830381600087803b1580156103b257600080fd5b505af11580156103c6573d6000803e3d6000fd5b5050505050565b606060006103da83610691565b905060006103e7826106c1565b905060006103f4836106fe565b905060008161040284610735565b61040b8661095b565b60405160200161041d93929190611d77565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291815281516020928301206000818152600390935291205490915060ff161561049d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029a90611ef0565b600081815260036020526040812080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556104dd85610985565b905060006104ea82610a93565b90506104f581610b22565b60025473ffffffffffffffffffffffffffffffffffffffff908116911614610549576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029a90612029565b600061055487610b59565b905061057261056284610b83565b8761056c8a610b8a565b84610bb4565b6105a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029a90611e93565b6105d6856105b589610eb3565b6105be8a610edd565b846105c88c610f07565b6105d18d610f31565b610f5b565b5060006105e2836110a3565b90507f8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b0366106186106138360006110e6565b611120565b1461064f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029a90611ff2565b600061065a8461119b565b80602001905181019061066d9190611cac565b99505050505050505050505b919050565b8051610338906004906020840190611aac565b610699611b30565b60006106ac6106a7846111c5565b6111ea565b60408051602081019091529081529392505050565b60606106f882600001516008815181106106eb57634e487b7160e01b600052603260045260246000fd5b6020026020010151611310565b92915050565b60006106f8826000015160028151811061072857634e487b7160e01b600052603260045260246000fd5b6020026020010151611120565b604080516020810190915260008152815160609190156106f85760008061075d6000866113bb565b60f81c9050600181148061077457508060ff166003145b15610850576001855160026107899190612276565b61079391906122b3565b67ffffffffffffffff8111156107b957634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156107e3576020820181803683370190505b50925060006107f36001876113bb565b9050808460008151811061081757634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060019250506108c2565b6002855160026108609190612276565b61086a91906122b3565b67ffffffffffffffff81111561089057634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156108ba576020820181803683370190505b509250600091505b60ff82165b8351811015610952576108f16108e060ff8516836122b3565b6108eb9060026120f6565b876113bb565b84828151811061091157634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508061094a81612352565b9150506108c7565b50505092915050565b60006106f8826000015160098151811061072857634e487b7160e01b600052603260045260246000fd5b61098d611b43565b6109b582600001516006815181106106eb57634e487b7160e01b600052603260045260246000fd5b602082018190526000906109c8906111c5565b90506109d381611458565b156109e8576109e1816111ea565b8252610a7f565b602082015180516000906109fe906001906122b3565b67ffffffffffffffff811115610a2457634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610a4e576020820181803683370190505b509050600080836021019150826020019050610a6c82828551611492565b610a786106a7846111c5565b8652505050505b610a888361095b565b604083015250919050565b610a9b611b64565b6000610ad28360000151600381518110610ac557634e487b7160e01b600052603260045260246000fd5b60200260200101516111ea565b836040015181518110610af557634e487b7160e01b600052603260045260246000fd5b602002602001015190506040518060400160405280828152602001610b19836111ea565b90529392505050565b60006106f88260200151600081518110610b4c57634e487b7160e01b600052603260045260246000fd5b602002602001015161150c565b60006106f8826000015160058151811061072857634e487b7160e01b600052603260045260246000fd5b6020015190565b60606106f882600001516007815181106106eb57634e487b7160e01b600052603260045260246000fd5b600080610bc0846111c5565b90506000610bcd826111ea565b905060608085600080610bdf8b610735565b9050805160001415610bfb576000975050505050505050610eab565b60005b8651811015610ea2578151831115610c2157600098505050505050505050610eab565b610c51878281518110610c4457634e487b7160e01b600052603260045260246000fd5b6020026020010151611526565b955085805190602001208414610c7257600098505050505050505050610eab565b610c95878281518110610ac557634e487b7160e01b600052603260045260246000fd5b9450845160111415610d94578151831415610d05578c80519060200120610cd6866010815181106106eb57634e487b7160e01b600052603260045260246000fd5b805190602001201415610cf457600198505050505050505050610eab565b600098505050505050505050610eab565b6000828481518110610d2757634e487b7160e01b600052603260045260246000fd5b016020015160f81c90506010811115610d4c5760009950505050505050505050610eab565b610d7f868260ff1681518110610d7257634e487b7160e01b600052603260045260246000fd5b60200260200101516115b5565b9450610d8c6001856120f6565b935050610e90565b845160021415610cf4576000610dce610dc7876000815181106106eb57634e487b7160e01b600052603260045260246000fd5b84866115e3565b8351909150610ddd82866120f6565b1415610e40578d80519060200120610e0f876001815181106106eb57634e487b7160e01b600052603260045260246000fd5b805190602001201415610e2e5760019950505050505050505050610eab565b60009950505050505050505050610eab565b80610e575760009950505050505050505050610eab565b610e6181856120f6565b9350610e8786600181518110610d7257634e487b7160e01b600052603260045260246000fd5b9450610e909050565b80610e9a81612352565b915050610bfe565b50505050505050505b949350505050565b60006106f8826000015160038151811061072857634e487b7160e01b600052603260045260246000fd5b60006106f8826000015160048151811061072857634e487b7160e01b600052603260045260246000fd5b60006106f8826000015160008151811061072857634e487b7160e01b600052603260045260246000fd5b60606106f882600001516001815181106106eb57634e487b7160e01b600052603260045260246000fd5b6001546040517f41539d4a00000000000000000000000000000000000000000000000000000000815260009182918291829173ffffffffffffffffffffffffffffffffffffffff909116906341539d4a90610fba908990600401611e1a565b60a06040518083038186803b158015610fd257600080fd5b505afa158015610fe6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061100a9190611be7565b5093505092509250611060828b61102191906122b3565b84878d8d8d8d60405160200161103a9493929190611da4565b60405160208183030381529060405280519060200120611748909392919063ffffffff16565b611096576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029a90611fbb565b9998505050505050505050565b6110ab611b30565b60405180602001604052806110de8460200151600181518110610ac557634e487b7160e01b600052603260045260246000fd5b905292915050565b6110ee611b84565b825180518390811061111057634e487b7160e01b600052603260045260246000fd5b6020026020010151905092915050565b80516000901580159061113557508151602110155b61113e57600080fd5b600061114d8360200151611890565b9050600081846000015161116191906122b3565b905060008083866020015161117691906120f6565b905080519150602083101561119257826020036101000a820491505b50949350505050565b60606106f882602001516002815181106106eb57634e487b7160e01b600052603260045260246000fd5b6111cd611b84565b506040805180820190915281518152602082810190820152919050565b60606111f582611458565b6111fe57600080fd5b60006112098361191b565b905060008167ffffffffffffffff81111561123457634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561126d57816020015b61125a611b84565b8152602001906001900390816112525790505b509050600061127f8560200151611890565b856020015161128e91906120f6565b90506000805b84811015611305576112a58361199e565b91506040518060400160405280838152602001848152508482815181106112dc57634e487b7160e01b600052603260045260246000fd5b60209081029190910101526112f182846120f6565b9250806112fd81612352565b915050611294565b509195945050505050565b805160609061131e57600080fd5b600061132d8360200151611890565b9050600081846000015161134191906122b3565b905060008167ffffffffffffffff81111561136c57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611396576020820181803683370190505b50905060008160200190506111928487602001516113b491906120f6565b8285611a60565b60006113c860028461238b565b15611410576010826113db60028661210e565b815181106113f957634e487b7160e01b600052603260045260246000fd5b016020015161140b919060f81c61239f565b61144e565b60108261141e60028661210e565b8151811061143c57634e487b7160e01b600052603260045260246000fd5b016020015161144e919060f81c612122565b60f81b9392505050565b805160009061146957506000610679565b6020820151805160001a9060c082101561148857600092505050610679565b5060019392505050565b8061149c57611507565b602081106114d457825182526114b36020846120f6565b92506114c06020836120f6565b91506114cd6020826122b3565b905061149c565b600060016114e38360206122b3565b6114ef9061010061218a565b6114f991906122b3565b845184518216911916178352505b505050565b805160009060151461151d57600080fd5b6106f882611120565b60606000826000015167ffffffffffffffff81111561155557634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561157f576020820181803683370190505b509050805160001415611593579050610679565b60008160200190506115ae8460200151828660000151611a60565b5092915050565b80516000906021146115c657600080fd5b600080836020015160016115da91906120f6565b51949350505050565b600080806115f086610735565b90506000815167ffffffffffffffff81111561161c57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611646576020820181803683370190505b509050845b825161165790876120f6565b81101561171657600087828151811061168057634e487b7160e01b600052603260045260246000fd5b01602001517fff0000000000000000000000000000000000000000000000000000000000000016905080836116b589856122b3565b815181106116d357634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535050808061170e90612352565b91505061164b565b50808051906020012082805190602001201415611736578151925061173b565b600092505b50909150505b9392505050565b600060208251611758919061238b565b1561178f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029a90611f4d565b60006020835161179f919061210e565b90506117ac81600261218a565b85106117e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029a90611f84565b60008660205b855181116118825785810151925061180360028961238b565b61183757818360405160200161181a929190611d69565b604051602081830303815290604052805190602001209150611863565b828260405160200161184a929190611d69565b6040516020818303038152906040528051906020012091505b61186e60028961210e565b975061187b6020826120f6565b90506117ea565b509094149695505050505050565b8051600090811a60808110156118aa576000915050610679565b60b88110806118c5575060c081108015906118c5575060f881105b156118d4576001915050610679565b60c0811015611909576118e9600160b86122ca565b6118f69060ff16826122b3565b6119019060016120f6565b915050610679565b6118e9600160f86122ca565b50919050565b805160009061192c57506000610679565b60008061193c8460200151611890565b846020015161194b91906120f6565b905060008460000151856020015161196391906120f6565b90505b80821015611995576119778261199e565b61198190836120f6565b91508261198d81612352565b935050611966565b50909392505050565b80516000908190811a60808110156119b957600191506115ae565b60b88110156119df576119cd6080826122b3565b6119d89060016120f6565b91506115ae565b60c0811015611a0c5760b78103600185019450806020036101000a855104600182018101935050506115ae565b60f8811015611a20576119cd60c0826122b3565b60019390930151602084900360f7016101000a90049092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0a0192915050565b80611a6a57611507565b60208110611aa25782518252611a816020846120f6565b9250611a8e6020836120f6565b9150611a9b6020826122b3565b9050611a6a565b806114d457611507565b828054611ab89061231d565b90600052602060002090601f016020900481019282611ada5760008555611b20565b82601f10611af357805160ff1916838001178555611b20565b82800160010185558215611b20579182015b82811115611b20578251825591602001919060010190611b05565b50611b2c929150611b9e565b5090565b6040518060200160405280606081525090565b60405180606001604052806060815260200160608152602001600081525090565b6040518060400160405280611b77611b84565b8152602001606081525090565b604051806040016040528060008152602001600081525090565b5b80821115611b2c5760008155600101611b9f565b600060208284031215611bc4578081fd5b813561174181612403565b600060208284031215611be0578081fd5b5035919050565b600080600080600060a08688031215611bfe578081fd5b855194506020860151935060408601519250606086015191506080860151611c2581612403565b809150509295509295909350565b600060208284031215611c44578081fd5b813567ffffffffffffffff811115611c5a578182fd5b8201601f81018413611c6a578182fd5b8035611c7d611c78826120b0565b612086565b818152856020838501011115611c91578384fd5b81602084016020830137908101602001929092525092915050565b600060208284031215611cbd578081fd5b815167ffffffffffffffff811115611cd3578182fd5b8201601f81018413611ce3578182fd5b8051611cf1611c78826120b0565b818152856020838501011115611d05578384fd5b611d168260208301602086016122ed565b95945050505050565b60008151808452611d378160208601602086016122ed565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b918252602082015260400190565b60008482528351611d8f8160208501602088016122ed565b60209201918201929092526040019392505050565b93845260208401929092526040830152606082015260800190565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b600073ffffffffffffffffffffffffffffffffffffffff8416825260406020830152610eab6040830184611d1f565b901515815260200190565b90815260200190565b6000602082526117416020830184611d1f565b6020808252602a908201527f467842617365526f6f7454756e6e656c3a204348494c445f54554e4e454c5f4160408201527f4c52454144595f53455400000000000000000000000000000000000000000000606082015260800190565b60208082526023908201527f4678526f6f7454756e6e656c3a20494e56414c49445f524543454950545f505260408201527f4f4f460000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526024908201527f4678526f6f7454756e6e656c3a20455849545f414c52454144595f50524f434560408201527f5353454400000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526014908201527f496e76616c69642070726f6f66206c656e677468000000000000000000000000604082015260600190565b60208082526015908201527f4c65616620696e64657820697320746f6f206269670000000000000000000000604082015260600190565b6020808252601c908201527f4678526f6f7454756e6e656c3a20494e56414c49445f48454144455200000000604082015260600190565b6020808252601f908201527f4678526f6f7454756e6e656c3a20494e56414c49445f5349474e415455524500604082015260600190565b60208082526025908201527f4678526f6f7454756e6e656c3a20494e56414c49445f46585f4348494c445f5460408201527f554e4e454c000000000000000000000000000000000000000000000000000000606082015260800190565b60405181810167ffffffffffffffff811182821017156120a8576120a86123ed565b604052919050565b600067ffffffffffffffff8211156120ca576120ca6123ed565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b60008219821115612109576121096123c1565b500190565b60008261211d5761211d6123d7565b500490565b600060ff831680612135576121356123d7565b8060ff84160491505092915050565b80825b60018086116121565750612181565b818704821115612168576121686123c1565b8086161561217557918102915b9490941c938002612147565b94509492505050565b60006117417fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846000826121c157506001611741565b816121ce57506000611741565b81600181146121e457600281146121ee5761221b565b6001915050611741565b60ff8411156121ff576121ff6123c1565b6001841b915084821115612215576122156123c1565b50611741565b5060208310610133831016604e8410600b841016171561224e575081810a83811115612249576122496123c1565b611741565b61225b8484846001612144565b80860482111561226d5761226d6123c1565b02949350505050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156122ae576122ae6123c1565b500290565b6000828210156122c5576122c56123c1565b500390565b600060ff821660ff8416808210156122e4576122e46123c1565b90039392505050565b60005b838110156123085781810151838201526020016122f0565b83811115612317576000848401525b50505050565b60028104600182168061233157607f821691505b6020821081141561191557634e487b7160e01b600052602260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612384576123846123c1565b5060010190565b60008261239a5761239a6123d7565b500690565b600060ff8316806123b2576123b26123d7565b8060ff84160691505092915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff8116811461021657600080fdfea264697066735822122041542bfe0f28cbb2eb15029e3016ca2d93270ed8868006588d260e5fbc93f95364736f6c63430008000033";

export class FxStateRootTunnel__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FxStateRootTunnel> {
    return super.deploy(
      _checkpointManager,
      _fxRoot,
      overrides || {}
    ) as Promise<FxStateRootTunnel>;
  }
  getDeployTransaction(
    _checkpointManager: string,
    _fxRoot: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _checkpointManager,
      _fxRoot,
      overrides || {}
    );
  }
  attach(address: string): FxStateRootTunnel {
    return super.attach(address) as FxStateRootTunnel;
  }
  connect(signer: Signer): FxStateRootTunnel__factory {
    return super.connect(signer) as FxStateRootTunnel__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FxStateRootTunnelInterface {
    return new utils.Interface(_abi) as FxStateRootTunnelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FxStateRootTunnel {
    return new Contract(address, _abi, signerOrProvider) as FxStateRootTunnel;
  }
}
