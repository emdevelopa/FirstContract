const { ethers, run, network } = require("hardhat")

// async function (main)
async function main() {
  
  const SimpleStorageFact = await ethers.getContractFactory("SimpleStorage");


  console.log("Deploying contract....");
  const simpleStorage = await SimpleStorageFact.deploy(); 
  await simpleStorage.deploymentTransaction().wait(1)
  console.log("Deployed to ", simpleStorage.target);
  // console.log(simpleStorage.interface);
  

  // if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
  //   await simpleStorage.deploymentTransaction().wait(2);
  //   Verify(simpleStorage.target, []);
  // }

    const currentValue = await simpleStorage.retrieve();
    console.log("Current value is = ", currentValue);


  const txRes = await simpleStorage.store(9);
  await txRes.wait(1)

  const updatedValue = await simpleStorage.retrieve();
  console.log("value is now = ", updatedValue);
  }

// Verify function
async function Verify(contractAddress, args) {
  console.log("Verifying please wait...");
  try {
    await run("verify:verify", {
    address: contractAddress,
    constructorArguments: args
  })
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.log(e);
    }
  }
  
}

// Invoking async Function
main().then(() => {
  process.exit(0);
}).catch((err) => {
  console.log(err);
  process.exit(1);
})