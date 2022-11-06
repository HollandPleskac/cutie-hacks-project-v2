// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */

contract PayStubs {
    

    string _employeeName;
    
    string _employeeAddress;

    /* string _employeeBasePayRate;

    string _employeeNumber;

    string _employeeEarnings; 

    string _employeeHours;

    string _employeeYTDHours; */

    string _employeeAmount;

    // string _employeeYTDAmount;

    string _employerName;

    string _employerAddress;

    string _payPeriod;

    string _payFrequency;

   /* string _checkDate; 

    string _checkNumber;

    string _filingStatusFederal;

    string _filingStatusState;

    string _federalTaxAmount;
    
    string _federalTaxAmountYTD;

    string _stateTaxAmount;

    string _stateTaxAmountYTD;

    string _ficaTaxAmount;
    
    string _ficaTaxAmountYTD; */


    constructor(string memory employeeName, string memory employeeAddress, string memory employeeAmount, string memory employerName, 
    string memory employerAddress, string memory payPeriod, string memory payFrequency) {
        
        _employeeName = employeeName;
        
        _employeeAddress = employeeAddress;

        _employeeAmount = employeeAmount;

        _employerName = employerName;

        _employerAddress = employerAddress;
       
        _payPeriod = payPeriod;

        _payFrequency = payFrequency;

    }
    
    /* constructor(string memory employeeName, string memory employeeAddress, string memory employeeBasePayRate, string memory employeeNumber, 
    string memory employeeEarnings, string memory employeeHours, string memory employeeYTDHours, string memory employeeAmount, 
    string memory employerName, string memory employerAddress, string memory payPeriod, string memory payFrequency, string memory checkDate, 
    string memory checkNumber, string memory filingStatusFederal, string memory filingStatusState, string memory federalTaxAmount, 
    string memory federalTaxAmountYTD, string memory stateTaxAmount, string memory stateTaxAmountYTD, string memory ficaTaxAmount, 
    string memory ficaTaxAmountYTD) { 
        
            _employeeName = employeeName;
        
            _employeeAddress = employeeAddress;

            _employeeBasePayRate = employeeBasePayRate;

            _employeeNumber = employeeNumber;

            _employeeEarnings = employeeEarnings;

            _employeeHours = employeeHours;

            _employeeYTDHours = employeeYTDHours;

            _employeeAmount = employeeAmount;

            _employeeYTDAmount = _employeeYTDAmount;
        
            _employerName = employerName;

            _employerAddress = employerAddress;
       
            _payPeriod = payPeriod;

            _payFrequency = payFrequency;
        
            _checkDate = checkDate;

            _checkNumber = checkNumber;
       
            _filingStatusFederal = filingStatusFederal;

            _filingStatusState = filingStatusState;
       
            _federalTaxAmount = federalTaxAmount;
        
            _federalTaxAmountYTD = federalTaxAmountYTD;

            _stateTaxAmount = stateTaxAmount;

            _stateTaxAmountYTD = stateTaxAmountYTD;

            _ficaTaxAmount = ficaTaxAmount;
        
            _ficaTaxAmountYTD = ficaTaxAmountYTD;
        } */


        // crypto signature for employee

        // crypto signature for employer

    


    function retrieveEmployeeName () public view returns (string memory) {
        return _employeeName;
    }

    function retrieveEmployeeAddress () public view returns (string memory) {
        return _employeeAddress;
    }

    /*
    function retrieveEmployeeBasePayRate () public view returns (string memory) {
        return _employeeBasePayRate;
    }

    function retrieveEmployeeNumber () public view returns (string memory) {
        return _employeeNumber;
    }

    function retrieveEmployeeEarnings () public view returns (string memory) {
        return _employeeEarnings;
    }

    function retrieveEmployeeHours () public view returns (string memory) {
        return _employeeHours;
    }

    function retrieveEmployeeYTDHours () public view returns (string memory) {
        return _employeeYTDHours;
    }
    */

    function retrieveEmployeeAmount () public view returns (string memory) {
        return _employeeAmount;
    }

    /* function retrieveEmployeeYTDAmount () public view returns (string memory) {
        return _employeeYTDAmount;
    }
    */
    function retrieveEmployerName () public view returns (string memory) {
        return _employerName;
    }

    function retrieveEmployerAddress () public view returns (string memory) {
        return _employerAddress;
    }

    function retrievePayPeriod () public view returns (string memory) {
        return _payPeriod;
    }

    function retrievePayFrequency () public view returns (string memory) {
        return _payFrequency;
    }
    /*
    function retrieveCheckDate () public view returns (string memory) {
        return _checkDate;
    }

    function retrieveCheckNumber () public view returns (string memory) {
        return _checkNumber;
    }

    function retrieveFilingStatusFederal () public view returns (string memory) {
        return _filingStatusFederal;
    }

    function retrieveFilingStatusState () public view returns (string memory) {
        return _filingStatusState;
    }

    function retrieveFederalTaxAmount () public view returns (string memory) {
        return _federalTaxAmount;
    }

    function retrieveFederalTaxAmountYTD () public view returns (string memory) {
        return _federalTaxAmountYTD;
    }

    function retrieveStateTaxAmount () public view returns (string memory) {
        return _stateTaxAmount;
    }

    function retrieveStateTaxAmountYTD () public view returns (string memory) {
        return _stateTaxAmountYTD;
    }

    function retrieveFicaTaxAmount () public view returns (string memory) {
        return _ficaTaxAmount;
    }

    function retrieveFicaTaxAmountYTD () public view returns (string memory) {
        return _ficaTaxAmountYTD;
    } */
}



