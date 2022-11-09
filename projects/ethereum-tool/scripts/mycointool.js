import { ethers } from "ethers";

const mctAddress = "0x2f848984984d6c3c036174ce627703edaf780479"

const userProxys = [
    "0x14B8bB2cDBd3403cBc4C465608077Ec739557545",
    "0x4C163879BBaDCb42Ff1210B18f4f545E1166e1E7",
    "0xBf31eBb8eDD0C92AE0b73f3C903376EFED003efA",
    "0xB1aA4c66203d9ef87b7CEa27e978Ff54C443D70F",
    "0x77BF76a155BD8C2621194F657e62e1e148b44846"
].map(item => item.toLowerCase())

const userAddress = "0x5e374bd8aac7325a6c024f381506b93b3d982194"


const getCreate2Address = function(deployAddress, userAddress, index) {
    const fun = function(deployAddress, salt, bytecode) {
        // proxy = keccak256(0xff ++ senderAddress ++ salt ++ keccak256(init_code))[12:]
        return "0x".concat(ethers.utils.keccak256("0x".concat(["ff", deployAddress, salt, ethers.utils.keccak256(bytecode)].map((function(t) {
            return t.replace(/0x/, "")
           }
        )).join(""))).slice(-40)).toLowerCase()
    }
    // const bytecode = "0x3d602d80600a3d3981f3363d3d373d3d3d363d73".concat(deployAddress.toLowerCase().replace("0x", ""), "5af43d82803e903d91602b57fd5bf3")
    const bytecode = "0x3d602d80600a3d3981f3363d3d373d3d3d363d731bc8f124e7e320c71a6394de0458e8d7ea27623e5af43d82803e903d91602b57fd5bf3"

    // var42001
    // 0x1bc8f124e7e320c71a6394de0458e8d7ea27623e
    const salt = ethers.utils.keccak256(ethers.utils.solidityPack(["bytes", "uint256", "address"], ["0x01", index, userAddress]))
    // const salt = ethers.utils.keccak256(ethers.utils.solidityPack(["uint256", "address"], [index, userAddress]))

    // const salt = ethers.utils.keccak256(ethers.utils.solidityPack(["bytes", "address", "uint256"], ["0x01", userAddress, index]))
    // const salt = ethers.utils.keccak256(ethers.utils.solidityPack(["uint256", "address"], [index, userAddress]))
    // const salt = ethers.utils.keccak256(ethers.utils.solidityPack(["address", "uint256"], [userAddress, index]))

    const proxy = fun(deployAddress, salt, bytecode);

    console.log(proxy, proxy == userProxys[index - 1])
}

getCreate2Address(mctAddress, userAddress, 1)