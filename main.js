//declaring variables that stores references to customname, randomize and story.
var customName=document.getElementById('customname');
var randomize=document.querySelector('.randomize');
var story=document.querySelector('.story');

//defining a function that will take an array, and returns one of the items stored inside the array at random
function randomValueFromArray(array){
    return array[Math.floor(Math.random()*array.length)];
}


//declaring variables that will act as input into our program.
var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertX = [
    'Willy the Goblin',
    'Big Daddy',
    'Father Christmas'
];
 
var insertY = [
    'the soup kitchen',
    'Disneyland',
    'the White House'
];

var insertZ = [
    'spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away'
];


 
//function to convert from fahrenheit to centigrade
function fahrenheitToCentigrade(fahrenheit){
    //this function return centigrade in a string data type
    var centiGrade=Math.round((fahrenheit-32) * (5/9) );
    return centiGrade.toString();
} 

//function to convert from pounds to stone
function poundsToStone(pounds){
    //this function return pounds in a string data type
    var stone =Math.round((pounds)/14);
    return stone.toString();
} 

//adds a click event listner to the randomize variable, when button is clicked, the result() function is run.
randomize.addEventListener('click', result);

//this function returns random story/string
function result() {
    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);
    //this places the random string in the storyText.
    newStory = newStory.replace(/:insertx:/g,xItem); 
    //newStory=newStory.replace('insertx',xItem); 
    newStory=newStory.replace(/:inserty:/g,yItem); 
    newStory=newStory.replace(/:insertz:/g,zItem); 

    //this condition changes the name from the default name setting.
    if(customName.value !== '') {
      var name = customName.value;
      //bob is replaced here
      storyText=storyText.replace(/Bob/g,name);
    }
    
    //this checks to see if the UK radio button has been selected, if so moves on to conversion.
    if(document.getElementById("uk").checked) {
      var weight = Math.round(300);
      var temperature =  Math.round(94);
      //conversion of pounds to stone
      var weightInStone=poundsToStone(weight);
      //replaces it in the story text
      newStory=newStory.replace(/300/g,weightInStone);
      newStory=newStory.replace(/pounds/g,'stone');
      //conversion of fahrenheit to centigrade
      var tempInCentigrade=fahrenheitToCentigrade(temperature); 
      newStory=newStory.replace(/94/g,tempInCentigrade);
      newStory=newStory.replace(/fahrenheit/g,'centigrade');
    }
    
  
    story.textContent =newStory ;
    story.style.visibility = 'visible';
  }
  