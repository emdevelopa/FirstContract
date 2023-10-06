// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "contracts/SimpleStorage.sol";

contract FactroryStorgage{
    SimpleContract[] public simple;

    function createSimpStorContr() public{
       SimpleContract simpl = new SimpleContract();

        simple.push(simpl);
    }
}