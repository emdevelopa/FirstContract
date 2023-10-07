// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "contracts/SimpleStorage.sol";

contract FactroryStorgage{
    SimpleContract[] public simple;

    function createSimpStorContr() public{
       SimpleContract simpl = new SimpleContract();

        simple.push(simpl);
    }

    function sfStore(uint256 simpleStorageIndex, uint256 simpleStorageNumber) public {
        simple[simpleStorageIndex].store(simpleStorageNumber);
    }

    function sfGet(uint256 simpleStorageIndex) public view returns(uint256){
        return simple[simpleStorageIndex].retrieve();
    }
}