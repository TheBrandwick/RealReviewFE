// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
import hre from "hardhat";

const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  const contract = await hre.ethers.getContractFactory('RealReview');
  const ourContract = await contract.deploy();
  await ourContract.deployed();

  console.table({
      'Contract Owner': deployer.address,
      'Account Balance': accountBalance.toString(),
      "Contract Address": ourContract.address
  });
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
      console.error(error);
      process.exit(1);
  });
