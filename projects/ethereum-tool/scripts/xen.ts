import { ethers } from "ethers";
// import { } from "ethereumjs-util";

/*
(() => {
    function block() {
        setInterval(() => {
            if (
                window.outerHeight - window.innerHeight > 200 ||
                window.outerWidth - window.innerWidth > 200
            ) {
                window.location.href = 'https://twitter.com/CryptoCellLabs'
            }
        }, 500)
        setInterval(() => {
            (function () {
                return false;
            }
            ["constructor"]("debugger")
            ["call"]());
        }, 100);
    }
    try {
        block();
    } catch (err) { }
})();
*/

/*
1: {
    tokenAddress: "0x06450dEe7FD2Fb8E39061434BAbCFC05599a6Fb8",
    tokenName: "XEN",
    tokenDecimals: 18,
    xen: "0x06450dee7fd2fb8e39061434babcfc05599a6fb8",
    proxy: "0x0de8bf93da2f7eecb3d9169422413a9bef4ef628",
    clone: "0x0de8bf93da2f7eecb3d9169422413a9bef4ef628",
    maxNumber: 128,
    claimMaxNumber: 240
},
56: {
    tokenAddress: "0x2AB0e9e4eE70FFf1fB9D67031E44F6410170d00e",
    tokenName: "XEN",
    tokenDecimals: 18,
    xen: "0x2ab0e9e4ee70fff1fb9d67031e44f6410170d00e",
    proxy: "0x7ff11e5b256c9EB67F4dEa2FacECEd5De1CD691F",
    clone: "0x7ff11e5b256c9EB67F4dEa2FacECEd5De1CD691F",
    maxNumber: 128,
    claimMaxNumber: 240
},
137: {
    tokenAddress: "0x2AB0e9e4eE70FFf1fB9D67031E44F6410170d00e",
    tokenName: "XEN",
    tokenDecimals: 18,
    xen: "0x2AB0e9e4eE70FFf1fB9D67031E44F6410170d00e",
    proxy: "0xdf6fEE057222d2F7933C215C11e5150bD2efc53E",
    clone: "0xdf6fEE057222d2F7933C215C11e5150bD2efc53E",
    maxNumber: 128,
    claimMaxNumber: 240
},
43114: {
    tokenAddress: "0xC0C5AA69Dbe4d6DDdfBc89c0957686ec60F24389",
    tokenName: "XEN",
    tokenDecimals: 18,
    xen: "0xC0C5AA69Dbe4d6DDdfBc89c0957686ec60F24389",
    proxy: "0x9Ec1C3DcF667f2035FB4CD2eB42A1566fd54d2B7",
    clone: "0x9Ec1C3DcF667f2035FB4CD2eB42A1566fd54d2B7",
    maxNumber: 138,
    claimMaxNumber: 79
},
10001: {
    tokenAddress: "0x2AB0e9e4eE70FFf1fB9D67031E44F6410170d00e",
    tokenName: "XEN",
    tokenDecimals: 18,
    xen: "0x2AB0e9e4eE70FFf1fB9D67031E44F6410170d00e",
    proxy: "0x3f551334112f5E0FC134A9027A2eA2EFebfB6127",
    clone: "0x3f551334112f5E0FC134A9027A2eA2EFebfB6127",
    maxNumber: 120,
    claimMaxNumber: 120
},
9001: {
    tokenAddress: "0x2AB0e9e4eE70FFf1fB9D67031E44F6410170d00e",
    tokenName: "XEN",
    tokenDecimals: 18,
    xen: "0x2AB0e9e4eE70FFf1fB9D67031E44F6410170d00e",
    proxy: "0x9Ec1C3DcF667f2035FB4CD2eB42A1566fd54d2B7",
    clone: "0x9Ec1C3DcF667f2035FB4CD2eB42A1566fd54d2B7",
    maxNumber: 100,
    claimMaxNumber: 240
},
1284: {
    tokenAddress: "0xb564a5767a00ee9075cac561c427643286f8f4e1",
    tokenName: "XEN",
    tokenDecimals: 18,
    xen: "0xb564a5767a00ee9075cac561c427643286f8f4e1",
    proxy: "0x9Ec1C3DcF667f2035FB4CD2eB42A1566fd54d2B7",
    clone: "0x9Ec1C3DcF667f2035FB4CD2eB42A1566fd54d2B7",
    maxNumber: 60,
    claimMaxNumber: 100
},
250: {
    tokenAddress: "0xeF4B763385838FfFc708000f884026B8c0434275",
    tokenName: "XEN",
    tokenDecimals: 18,
    xen: "0xeF4B763385838FfFc708000f884026B8c0434275",
    proxy: "0x82487dF5b4cF19DB597A092c8103759466Be9e5a",
    clone: "0x82487dF5b4cF19DB597A092c8103759466Be9e5a",
    maxNumber: 40,
    claimMaxNumber: 70
},
2e3: {
    tokenAddress: "0x948eed4490833D526688fD1E5Ba0b9B35CD2c32e",
    tokenName: "XEN",
    tokenDecimals: 18,
    xen: "0x948eed4490833D526688fD1E5Ba0b9B35CD2c32e",
    proxy: "0x9Ec1C3DcF667f2035FB4CD2eB42A1566fd54d2B7",
    clone: "0x9Ec1C3DcF667f2035FB4CD2eB42A1566fd54d2B7",
    maxNumber: 80,
    claimMaxNumber: 240
}
*/

// a : "0x3d602d80600a3d3981f3363d3d373d3d3d363d730de8bf93da2f7eecb3d9169422413a9bef4ef6285af43d82803e903d91602b57fd5bf3"
// e : "0x0de8bf93da2f7eecb3d9169422413a9bef4ef628"
// i : undefined
// n : ƒ (t,e,s)
// o : 1
// r : undefined
// s : "0x51f92552b230e7ea3dd4591d4704b5083d1f3c10"
// t : "0x0de8bf93da2f7eecb3d9169422413a9bef4ef628"
// method: userMints => params: [e.getCreate2Address(e.proxy, e.clone, e.userAddress, p)],
// 0x0de8bf93da2f7eecb3d9169422413a9bef4ef628,0x0de8bf93da2f7eecb3d9169422413a9bef4ef628
// function getCreate2Address(t, e, s, o) {
    // let n = function (t: any, e: any, s: any) {
    //         const str1 = ["ff", t, e, b.a.utils.sha3(s)].map((function (t) { return t.replace(/0x/, "") })).join("")
    //         const str2 = b.a.utils.sha3("0x".concat(str1)).slice(-40)
    //         return "0x".concat(str2).toLowerCase()
    // }
//     let a = "0x3d602d80600a3d3981f3363d3d373d3d3d363d73".concat(e.toLowerCase().replace("0x", ""), "5af43d82803e903d91602b57fd5bf3")
//     let i = y["a"].utils.keccak256(y["a"].utils.solidityPack(["bytes", "uint256", "address"], [this.salt, o, s]))
//     let r = n(t, i, a);
//     return r
// }
// keccak256(0xff ++ senderAddress ++ salt ++ keccak256(init_code))[12:]

const getCTProxyAddress = (ctAddress: string, userAddress: string, o = 1) => {
    const bytecode = "0x3d602d80600a3d3981f3363d3d373d3d3d363d73".concat(ctAddress.toLowerCase().replace("0x", ""), "5af43d82803e903d91602b57fd5bf3")
    const salt = "0x01"
    const calldata = ethers.utils.keccak256(ethers.utils.solidityPack(["bytes", "uint256", "address"], [salt, o, userAddress]))

    const str1 = ["ff", ctAddress, calldata, ethers.utils.sha256(bytecode)].map((function (t) { return t.replace(/0x/, "") })).join("")
    const str2 = ethers.utils.sha256("0x".concat(str1)).slice(-40)
    const address = "0x".concat(str2).toLowerCase()
    console.log(address)
}




// https://api.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=0xbc78ab8a9e9a0bca7d0321a27b2c03addeae08ba81ea98b03cd3dd237eabed44&apikey=KHVQX7AM5KEX17SFFSJ1YI3SYTE97G1AKT

// https://api.etherscan.io/api?module=proxy&action=eth_getTransactionReceipt&txhash=0x6df09fafb102c97a799c7a05cfcc10879e391ad9a2d8f3ef5d5fce3c36880d75&apikey=YourApiKeyToken
//  ethers.js => getTransactionReceipt ( transactionHash ) 
/*
{
    "jsonrpc":"2.0",
    "id":1,
    "result":{
        "blockHash":"0xc9ab6dc6eaf7358040a7ae911a8d766ca34d082b41fcacbad3c6ceb65aede543",
        "blockNumber":"0xf2cc9a",
        "contractAddress":null,
        "cumulativeGasUsed":"0x276c83",
        "effectiveGasPrice":"0x4c2662f64",
        "from":"0x5e374bd8aac7325a6c024f381506b93b3d982194",
        "gasUsed":"0xf87e9",
        "logs":[
            {
                "address":"0x06450dee7fd2fb8e39061434babcfc05599a6fb8",
                "topics":[
                    "0xe9149e1b5059238baed02fa659dbf4bd932fbcf760a431330df4d934bc942f37",
                    "0x00000000000000000000000014b8bb2cdbd3403cbc4c465608077ec739557545"
                ],
                "data":"0x000000000000000000000000000000000000000000000000000000000000012c00000000000000000000000000000000000000000000000000000000002142b9",
                "blockNumber":"0xf2cc9a",
                "transactionHash":"0x6df09fafb102c97a799c7a05cfcc10879e391ad9a2d8f3ef5d5fce3c36880d75",
                "transactionIndex":"0x20",
                "blockHash":"0xc9ab6dc6eaf7358040a7ae911a8d766ca34d082b41fcacbad3c6ceb65aede543",
                "logIndex":"0x1f",
                "removed":false
            },
            {
                "address":"0x06450dee7fd2fb8e39061434babcfc05599a6fb8",
                "topics":[
                    "0xe9149e1b5059238baed02fa659dbf4bd932fbcf760a431330df4d934bc942f37",
                    "0x0000000000000000000000004c163879bbadcb42ff1210b18f4f545e1166e1e7"
                ],
                "data":"0x000000000000000000000000000000000000000000000000000000000000012c00000000000000000000000000000000000000000000000000000000002142ba",
                "blockNumber":"0xf2cc9a",
                "transactionHash":"0x6df09fafb102c97a799c7a05cfcc10879e391ad9a2d8f3ef5d5fce3c36880d75",
                "transactionIndex":"0x20",
                "blockHash":"0xc9ab6dc6eaf7358040a7ae911a8d766ca34d082b41fcacbad3c6ceb65aede543",
                "logIndex":"0x20",
                "removed":false
            },
            {
                "address":"0x06450dee7fd2fb8e39061434babcfc05599a6fb8",
                "topics":[
                    "0xe9149e1b5059238baed02fa659dbf4bd932fbcf760a431330df4d934bc942f37",
                    "0x000000000000000000000000bf31ebb8edd0c92ae0b73f3c903376efed003efa"
                ],
                "data":"0x000000000000000000000000000000000000000000000000000000000000012c00000000000000000000000000000000000000000000000000000000002142bb",
                "blockNumber":"0xf2cc9a",
                "transactionHash":"0x6df09fafb102c97a799c7a05cfcc10879e391ad9a2d8f3ef5d5fce3c36880d75",
                "transactionIndex":"0x20",
                "blockHash":"0xc9ab6dc6eaf7358040a7ae911a8d766ca34d082b41fcacbad3c6ceb65aede543",
                "logIndex":"0x21",
                "removed":false
            },
            {
                "address":"0x06450dee7fd2fb8e39061434babcfc05599a6fb8",
                "topics":[
                    "0xe9149e1b5059238baed02fa659dbf4bd932fbcf760a431330df4d934bc942f37",
                    "0x000000000000000000000000b1aa4c66203d9ef87b7cea27e978ff54c443d70f"
                ],
                "data":"0x000000000000000000000000000000000000000000000000000000000000012c00000000000000000000000000000000000000000000000000000000002142bc",
                "blockNumber":"0xf2cc9a",
                "transactionHash":"0x6df09fafb102c97a799c7a05cfcc10879e391ad9a2d8f3ef5d5fce3c36880d75",
                "transactionIndex":"0x20",
                "blockHash":"0xc9ab6dc6eaf7358040a7ae911a8d766ca34d082b41fcacbad3c6ceb65aede543",
                "logIndex":"0x22",
                "removed":false
            },
            {
                "address":"0x06450dee7fd2fb8e39061434babcfc05599a6fb8",
                "topics":[
                    "0xe9149e1b5059238baed02fa659dbf4bd932fbcf760a431330df4d934bc942f37",
                    "0x00000000000000000000000077bf76a155bd8c2621194f657e62e1e148b44846"
                ],
                "data":"0x000000000000000000000000000000000000000000000000000000000000012c00000000000000000000000000000000000000000000000000000000002142bd",
                "blockNumber":"0xf2cc9a",
                "transactionHash":"0x6df09fafb102c97a799c7a05cfcc10879e391ad9a2d8f3ef5d5fce3c36880d75",
                "transactionIndex":"0x20",
                "blockHash":"0xc9ab6dc6eaf7358040a7ae911a8d766ca34d082b41fcacbad3c6ceb65aede543",
                "logIndex":"0x23",
                "removed":false
            }
        ],
        "logsBloom":"0x00000000010010000800000000001000000000000000000004000000080000000000000000000000000002000000000000000000000000000000080000000000000000100040000000000000400000000000002000000200000000000040000000000000000000000000000000000000000000000000010000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002008010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000800000000000000000",
        "status":"0x1",
        "to":"0x2f848984984d6c3c036174ce627703edaf780479",
        "transactionHash":"0x6df09fafb102c97a799c7a05cfcc10879e391ad9a2d8f3ef5d5fce3c36880d75",
        "transactionIndex":"0x20",
        "type":"0x2"
    }
}
*/