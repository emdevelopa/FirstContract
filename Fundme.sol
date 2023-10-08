// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract FundMe{
    uint256 public minUSD = 50;

    function fundme() public payable {

        require(msg.value / 1e18 >= minUSD, "Send more than 1 eth");
    }

    // Address: 0x694AA1769357215DE4FAC081bf1f309aDC325306
    function getPrice() public view returns(uint256){
        AggregatorV3Interface priceFeed =AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);

        (,int256 answer,,,)=priceFeed.latestRoundData();

        return uint256(answer * 1e10);
        
    }
}