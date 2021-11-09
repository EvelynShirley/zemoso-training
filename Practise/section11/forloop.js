//never ending loops

//infinite loop

for (i = 1; i < 10; i--) {
    console.log(i);
}

//for loop with an if condition

for (i = 0; i < 4; i++) {
    var number = Math.floor(Math.random() * 10 + 1);
    console.log(number);
    ans = number % 2;
    if (ans == 0) {
        console.log("The number is even");
    } else {
        console.log("The number is odd");
    }
}

//breaking the for loop

for (i = 0; i < 4; i++) {
    if (i == 2) {
        break;
    } else {
        console.log("Hello" + i);
    }
}

//for loop with arrays

colors = ["red", "blue", "green", "purple", "yellow", "pink"];
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// For this will be little tricky

var answer = prompt("Type Y or N");
var answers = ["Y", "N"];
var responses = ["You said YES", "You said NO", "You did not follow instructions"];
for (var i = 0; i < 2; i++) {
    if (answer != answers[0] && answer != answers[1]) {
        console.log(responses[2]);
        break;
    } else if (answer == answers[i]) {
        console.log(responses[i]);
    }
}

//Nested for loop

chocalate=["dark","white","milk"]