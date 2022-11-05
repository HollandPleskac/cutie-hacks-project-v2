// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "./_Signature.sol";

contract EmploymentLetter{
    // contains the actual letter for employment proof
    string _letter;

    // signature from employee

    // signature from employer 

    // date signed 
    string _date;

    constructor(string memory letter, string memory date){
        _letter = letter;
        _date = date;
    }

    function getLetter() public view returns(string memory){
        return _letter;
    }

    function getDate() public view returns(string memory){
        return _date;
    }    
}
