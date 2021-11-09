for(i=0;i<4;i++){
    var number=Math.floor(Math.random()*10+1);
    console.log(number);
    ans=number%2;
    if(ans == 0){
        console.log("The number is even");
    }
    else{
        console.log("The number is odd");
    }
}