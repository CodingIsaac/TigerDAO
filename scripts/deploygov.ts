import { ethers } from "hardhat";

const TOKEN_CONTRACT_ADDRESS = "0x2786eB646D71DD7579A5982d9347196D702E098D"

async function main() {
 const govToken = await ethers.getContractFactory("TIGRESS");

 const mygov = await govToken.deploy(TOKEN_CONTRACT_ADDRESS);
 await mygov.deployed()

 console.log("Governance Token successsfully deployed to this address:", mygov.address);
}

// npx hardhat run scripts/deploygov.ts 
// --network goerli
// Governance Token successsfully deployed to this address: 0x91eD48d5A3124CAe95D23C89956548da28D6e41E

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
