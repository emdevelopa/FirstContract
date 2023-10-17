const {run} = require("hardhat")

const Verify = async (contractAddress, args) => {
  console.log("Verifying please wait...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.log(e);
    }
  }
}

module.exports = {Verify}