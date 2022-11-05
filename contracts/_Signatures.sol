// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract VerifySignautre {
    function verify(address _signer, string memory _message, bytes memory _sig) external pure returns(bool) {
        bytes32 hashMessage = getHashMessage(_message);
        bytes32 ethSignedHashMessage = getEthSignedHashMessage(hashMessage);

        return recover(ethSignedHashMessage, _sig) == _signer;  // sig is a pointer to where the actual signature is stored in memory
    }

    function getHashMessage(string memory message) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(message));
    }

    function getEthSignedHashMessage(bytes32 hashMessage) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(
            "\x19Ethereum Signed Signature:\n32",
            hashMessage));
    }

    function recover(bytes32 ethSignedHashMessage, bytes memory sig) public pure returns(address){
        (bytes32 r, bytes32 s, uint8 v) = splitSignature(sig);
        return ecrecover(ethSignedHashMessage, v, r, s);
    }

    function splitSignature(bytes memory sig) private pure returns(bytes32 r, bytes32 s, uint8 v){
        require (sig.length == 65, "invalid sig length");

        // the add function is skipping x amounts of bytes of the signature to get to y memory of the signature
        assembly {
            r:=mload(add(sig, 32))
            s:=mload(add(sig, 64))
            v:=byte(0, mload(add(sig, 96))) // gets the first byte of the next 32
        }

    }
}
