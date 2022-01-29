/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 28/01/2022 - 20:52:28
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 28/01/2022
 * - Author          : Michael
 * - Modification    :
 **/
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/3MHS8K1cuNd8mRm1TZ6tFUnKHEOp_zQl`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};
