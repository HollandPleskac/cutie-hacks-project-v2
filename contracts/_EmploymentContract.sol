// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "./_Signature.sol";

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract EmploymentLetter {

    // Start date 
    string _startDate;

    // End date
    string _endDate;

    // Compensation amount
    string _compensation;

    // Exempt or not expempt bool for overtime pay
    bool _exempt;

    // At will employee boolean, can be dismissed for any reason 
    bool _atWillEmployee;

    constructor(string memory startDate, string memory endDate, string memory compensation,bool exempt, bool atWillEmployee){
        // stores start date
        _startDate = startDate;

        // stores end date 
        _endDate = endDate;

        // stores compensation amounts
        _compensation = compensation;

        // stores exempt
        _exempt = exempt;

        // stores at will employee
        _atWillEmployee = atWillEmployee;

        // crypto signiture for employee 

        // crypto signiture for employer
    }


    // getters
    function retrieveStartDate() public view returns (string memory){
        return _startDate;
    }

    function retrieveEndDate() public view returns (string memory){
        return _endDate;
    }

    function retrieveCompensation() public view returns (string memory){
        return _compensation;
    }

    function retrieveExemption() public view returns (bool){
        return _exempt;
    }

    function retrieveAtWillEmployee() public view returns (bool){
        return _atWillEmployee;
    }
    
}

// compilation parameters 1/1/2020, 1/1/2021, 100.00, true, true
