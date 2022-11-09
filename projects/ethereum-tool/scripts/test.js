import { ethers } from "ethers";

// 0xd4b950d8293b52Ed20734Fd3ccBcD5EbD9BE5C77
// 0xb60ca5330a8CE4E08C468b19bA0c24b14950A2Bc
const ctAddress = "0x0de8bf93da2f7eecb3d9169422413a9bef4ef628"
const userAddress = "0x51F92552B230e7Ea3dd4591D4704b5083d1f3C10"
const salt = "0x01"

const getCreate2Address = function(t = "0x0de8bf93da2f7eecb3d9169422413a9bef4ef628", e = "0x0de8bf93da2f7eecb3d9169422413a9bef4ef628", s = "0x51F92552B230e7Ea3dd4591D4704b5083d1f3C10", o = 4) {
    const n = function(t, i, a) {
        // return "0x".concat(b.a.utils.sha3("0x".concat(["ff", t, i, b.a.utils.sha3(a)].map((function(t) {
        return "0x".concat(ethers.utils.keccak256("0x".concat(["ff", t, i, ethers.utils.keccak256(a)].map((function(t) {
            return t.replace(/0x/, "")
           }
        )).join(""))).slice(-40)).toLowerCase()
    }
    const a = "0x3d602d80600a3d3981f3363d3d373d3d3d363d73".concat(e.toLowerCase().replace("0x", ""), "5af43d82803e903d91602b57fd5bf3")
    const i = ethers.utils.keccak256(ethers.utils.solidityPack(["bytes", "uint256", "address"], [salt, o, s]))
    const r = n(t, i, a);
    console.log(r)
}

getCreate2Address()

/*
// const eth = require('ethereumjs-util')
// 0xff ++ deployingAddress is fixed:
var string1 = '0xffca4dfd86a86c48c5d9c228bedbeb7f218a29c94b'

// Hash of the bytecode is fixed. Calculated with eth.keccak256():
var string2 = '4670da3f633e838c2746ca61c370ba3dbd257b86b28b78449f4185480e2aba51'

// In each loop, i is the value of the salt we are checking
for (var i = 0; i < 10; i++) {
   // 1. Convert i to hex, and it pad to 32 bytes:
   var saltToBytes = i.toString(16).padStart(64, '0')

   // 2. Concatenate this between the other 2 strings
   var concatString = string1.concat(saltToBytes).concat(string2)

   // 3. Hash the resulting string
   var hashed = eth.bufferToHex(eth.keccak256(concatString))

   // 4. Remove leading 0x and 12 bytes
   // 5. Check if the result contains badc0de
   if (hashed.substr(26).includes('badc0de')) {
      console.log(saltToBytes)
      break
   }
}
*/