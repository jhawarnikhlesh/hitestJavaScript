const accountId = 101010;
let accountEmail = "nik@g.com";
var accountPassword = "123456789";
accountCity = "indore";
let accountState;

// accountId=5252525; // not allowed
console.log("accountId", accountId);


/*
    Prefer Not to use  var 
    because of issue in blok scope and functional scope 
*/
accountEmail = "nik2@g.com";
accountPassword = "1221212";
accountCity = "pune";
console.table([accountEmail, accountPassword, accountCity, accountState]);
