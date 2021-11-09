if (1 == 1){
    console.log("One is the same");
}
else if(2 ==2)
{
    console.log("Two is the same");
}
else{
    console.log("Neither are the same");
} 

var myName="Jason";
var yourName="Amy";

if(myName == yourName){
    console.log("We have the same name");
}
else if(myName != yourName){
    console.log("Hello "+yourName);
}

var answer = prompt("What is your favorite food?");

if(answer == "pizza"){
    console.log("Pizza is great!");
}
else if(answer == "burger"){
    console.log("Burgers are great too!");
}
else if(answer == "tacos"){
    console.log("Tacos Tuesdays should be everyday");
}
else if(answer == "pasta"){
    console.log("Pasta is so fun to eat!");
}
else{
    console.log(answer+" sounds great too!");
}