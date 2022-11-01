import { ethers } from "hardhat";

async function main() {
 const tigerToken = await ethers.getContractFactory("Tiger");

 const tokenTIger = await tigerToken.deploy();
 await tokenTIger.deployed()

 console.log("Contract successsfully deployed to this address:", tokenTIger.address);
}
// Contract successsfully deployed to this address: 0x2786eB646D71DD7579A5982d9347196D702E098D

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
