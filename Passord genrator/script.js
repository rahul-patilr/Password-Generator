
const passwordbox = document.getElementById("password");
const length = 12 ;

const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$&*";
const all = Uppercase+lowercase+numbers+symbols;

function btn(){
   let password="";
   
   password += Uppercase[Math.floor(Math.random()*Uppercase.length)];
   password += lowercase[Math.floor(Math.random()*lowercase.length)];
   password += numbers[Math.floor(Math.random()*numbers.length)];
   password += symbols[Math.floor(Math.random()*symbols.length)];

   while(length > password.length){
    password += all[Math.floor(Math.random()*all.length)];
   }
   passwordbox.value = password;
}

function copypaste(){
   passwordbox.Select();
   document.execCommand("copy");
}



