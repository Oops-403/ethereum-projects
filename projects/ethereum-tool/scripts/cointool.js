import { ethers } from "ethers";

const proxys = [
    "0xd4b950d8293b52Ed20734Fd3ccBcD5EbD9BE5C77".toLowerCase(),
    "0xb60ca5330a8CE4E08C468b19bA0c24b14950A2Bc".toLowerCase()
]

const ctAddress = "0x0de8bf93da2f7eecb3d9169422413a9bef4ef628"
const userAddress = "0x51F92552B230e7Ea3dd4591D4704b5083d1f3C10"

const getCreate2Address = function(deployAddress, userAddress, index) {
    const fun = function(deployAddress, salt, bytecode) {
        // proxy = keccak256(0xff ++ senderAddress ++ salt ++ keccak256(init_code))[12:]
        return "0x".concat(ethers.utils.keccak256("0x".concat(["ff", deployAddress, salt, ethers.utils.keccak256(bytecode)].map((function(t) {
            return t.replace(/0x/, "")
           }
        )).join(""))).slice(-40)).toLowerCase()
    }
    const bytecode = "0x3d602d80600a3d3981f3363d3d373d3d3d363d73".concat(deployAddress.toLowerCase().replace("0x", ""), "5af43d82803e903d91602b57fd5bf3")

    const salt = ethers.utils.keccak256(ethers.utils.solidityPack(["bytes", "uint256", "address"], ["0x01", index, userAddress]))
    const proxy = fun(deployAddress, salt, bytecode);

    console.log(proxy, proxy == proxys[index - 1])
}

getCreate2Address(ctAddress, userAddress, 1)
