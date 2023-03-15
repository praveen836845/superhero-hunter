let public_api = "df2548987c893122ae5f6233ce06cc76";
let private_api = "ab30ca613935ea396aa2a92d9d04db05211f5432";
// var MD5 = require("crypto-js/md5");
import MD5 from "crypto-js/md5";
// alert(MD5);
 var md5 = CryptoJS.MD5;
  console.log(md5);

let search = async () => {
  let query = document.getElementById("query").value;
  let url = `http://gateway.marvel.com/v1/public/characters=${query}&ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`;
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
};
