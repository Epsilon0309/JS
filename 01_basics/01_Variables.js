const accountID = 12345
let accountEmail = "ar@an.co"
var accountPassword = "2398"
accountLocation = "egra"

let accountState; // the value will be shown as undefined

//accountID cann't be changed
accountEmail="ajdsbbbb@kd"
accountLocation = "bengaluru"

/*
prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountID,accountEmail,accountPassword,accountLocation])
