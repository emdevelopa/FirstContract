// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract FundMe{
    uint256 public minUSD = 50;

    function fundme() public payable {

        require(msg.value / 1e18 >= minUSD, "Send more than 1 eth");
    }
}