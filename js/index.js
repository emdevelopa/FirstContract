
const ethers = require("ethers");
const fs = require("fs-extra");
const prompt = require("prompt-sync")();
require("dotenv").config();

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);


  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  // const dataToDecrypt = fs.readFileSync(
  //   "./.encryptedkey.json",
  //   "utf8"
  // );

  
  // let wallet = ethers.Wallet.fromEncryptedJsonSync(
  //   dataToDecrypt,
  //   process.env.PRIVATE_KEY_PWD
  // );

  // wallet = await wallet.connect(provider);

  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleContract.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleContract.bin",
    "utf8"
  );

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying Please Wait....");
  const deployContract = await contractFactory.deploy();
  await deployContract.deploymentTransaction().wait(1);
  console.log('Contract Address', await deployContract.getAddress());

  // console.log("Getting Favourite_Number.....");
  const retrieve = await deployContract.retrieve();
  console.log("FavNumber = ", retrieve.toString());

  // console.log("Updating fav Number");
  const storeFavNum = await deployContract.store("9");
  // console.log(storeFavNum);
  const txReciept = await storeFavNum.wait(1)

  // console.log("Getting Favourite_Number.....");
  const getUpdatedFavNum = await deployContract.retrieve();
  console.log(getUpdatedFavNum.toString());

  // console.log(deploymentReciept);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
