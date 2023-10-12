const { ethers } = require("hardhat")
require("@nomiclabs/hardhat-etherscan");
// async function (main)
async function main() {
  
  const SimpleStorageFact = await ethers.deployContract("SimpleStorage");
  // const simpleStorage = await SimpleStorageFact.waitForDeployment(); 
  console.log("Deploying contract....");
  

  console.log("Dployed to ", await SimpleStorageFact.getAddress());
  
}
// Invoking async Function

main().then(() => {
  process.exit(0);
}).catch((err) => {
  console.log(err);
  process.exit(1);
})