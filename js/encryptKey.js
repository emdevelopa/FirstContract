const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {

    const wallet =  new ethers.Wallet(process.env.PRIVATE_KEY);

    const encrypTedData = await wallet.encrypt(
      process.env.PRIVATE_KEY_PWD
    );
  
  fs.writeFileSync("./.encryptedkey.json", encrypTedData);

    console.log(encrypTedData);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
