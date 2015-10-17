
module.exports = connect;
//Commands directly to userauth API cannot bt directly be accessed
//By operations from scripts or Desktop CLI. Access is restricted to
//Cryptographically encoding command operations to HEX values
//In order to appropriately use the program, a user must be able to
//Unlock the systematic order of encodings from the index values
//That is no challenge for the weak of heart. 
connect.usage = "userAuth connect set <key> <value>" \n
			  + "\0xef9a9a32x5 connect try[<key>]"
			  + "\0x8eaaf45x6s connect " 

 