//SPDX-License-Identifier: MIT

pragma solidity 0.8.16;

contract LandRegistry{

    address public owner;

    constructor(){
        owner= msg.sender;
    }

    struct LandDetails{
        string district;
        string block_name;
        uint total_land_size;
        string owner_name;
        string phone;
        uint transactionIndex;
        uint prevDaag;
        uint aadhar;
        uint daag;
        mapping(uint=> Transactions) prev_transactions;
    }
    struct Transactions{
        string prev_owner;
        string new_owner;
        uint valuation;
        uint timestamp;
    }

    mapping(uint=> uint) aadharToDaag ; //Aadhar -> Daag
    mapping(uint=> LandDetails) daagToLand; // Daag-> Land Details
    mapping(address=> bool) public administrator;

    modifier onlyOwner(){
        require(msg.sender==owner, "You are not the Owner");
        _;
    }

    modifier onlyAdmin(){
        require(administrator[msg.sender], "You are not the Administrator");
        _;
    }

    modifier landRegistered(uint _daag){
        require(daagToLand[_daag].daag!=0, "Please Register land First");
        _;
    }

    function addAdmin(address _admin) public onlyOwner{
        administrator[_admin]=true;
    }


    function addLand(uint _aadhar,uint _daag,uint _prevDaag, string memory _district, string memory _block_name,uint _total_land_size,string memory _owner_name,string memory _phone,uint _valuation) public onlyAdmin{
        Transactions memory newTransaction = Transactions("",_owner_name,_valuation, block.timestamp);
        // LandDetails memory newland = LandDetails();
        daagToLand[_daag].district=_district;
        daagToLand[_daag].block_name =_block_name;
        daagToLand[_daag].total_land_size = _total_land_size;
        daagToLand[_daag].phone = _phone;
        daagToLand[_daag].aadhar= _aadhar;
        daagToLand[_daag].daag= _daag;
        daagToLand[_daag].prevDaag= _prevDaag;
        daagToLand[_daag].owner_name= _owner_name;
        daagToLand[_daag].prev_transactions[daagToLand[_daag].transactionIndex] = newTransaction; 
        daagToLand[_daag].transactionIndex++; 
        aadharToDaag[_aadhar] = _daag;
    }

    function transferLand(uint _aadhar,uint _daag,string memory _owner_name,string memory _phone,uint _valuation) public onlyAdmin landRegistered(_daag){
        Transactions memory newTransaction = Transactions(daagToLand[_daag].owner_name,_owner_name,_valuation, block.timestamp);
        // LandDetails memory newland = LandDetails();
        daagToLand[_daag].phone = _phone;
        daagToLand[_daag].aadhar= _aadhar;
        daagToLand[_daag].daag= _daag;
        daagToLand[_daag].owner_name= _owner_name;
        daagToLand[_daag].prev_transactions[daagToLand[_daag].transactionIndex] = newTransaction; 
        daagToLand[_daag].transactionIndex++; 
        aadharToDaag[_aadhar] = _daag;
    }

    function getDaagFromAadhar(uint _aadhar) public view returns(uint){
        return aadharToDaag[_aadhar];
    }
    
    function getLandFromDaag(uint _daag) public view returns(uint , uint, string memory, string memory,uint,string memory,string memory){
        return (daagToLand[_daag].aadhar,daagToLand[_daag].daag,daagToLand[_daag].district,daagToLand[_daag].block_name,daagToLand[_daag].total_land_size,daagToLand[_daag].owner_name,daagToLand[_daag].phone);
    }

    function getPrevTransactions(uint _daag) public view returns(Transactions[] memory){
        LandDetails storage landdetails= daagToLand[_daag];
        Transactions[] memory transactions = new Transactions[](landdetails.transactionIndex);
        for (uint i = 0; i < landdetails.transactionIndex; i++) {
           transactions[i] = landdetails.prev_transactions[i];
        }
        return transactions;
    }
}