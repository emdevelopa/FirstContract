// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract SimpleContract{
    uint256 favNum;

    struct Data {
        uint256 id;
        string name;
    }

    mapping(string => uint256) public nameToFavNum;

    Data[] public data;

    function store(uint256 _favNum) public  virtual  {
        favNum = _favNum;
        
    }

    function addData(string memory _name, uint256 id) public{
        data.push(Data(id, _name));
        nameToFavNum[_name] = id; 
    }

    function retrieve() public view returns(uint256){
        return favNum;
    }

    

} 