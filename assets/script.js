const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

for(let x=0; x<topics.length; x++){
    console.log(topics[x]);
}

/*
if(topic === 'HTML'){
    console.log("Let's study HTML!");
} else if(topic === 'CSS'){
    console.log("Let's study CSS!");
} else if(topic === 'Git'){
    console.log("Let's study Git!");
} else if(topic === 'JavaScript'){
    console.log("Let's study JavaScript!");
} else {
    console.log("Please try again!")
} */

//CF additional content for fun - using forEach method
topics.forEach(function(element){
    console.log(element);
});
//forEach function takes a callback function as an argument.
//A callback function is a function that is passed as an argument to another function and is executed after a particular event or condition occurs.
//Inside the callback function, element represents the current element being processed.
topics.forEach(element => console.log(element));
//Can also use arrow function for more concise syntax.