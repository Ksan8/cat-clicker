var k1 = document.getElementById('kitten1');
k1.count = 0;
k1.clicks = document.getElementById('count1');
k1.name = "Sylvie";

var name1 = document.getElementById('name1');
name1.innerHTML = "This is " + k1.name;

var k2 = document.getElementById('kitten2');
k2.count = 0;
k2.clicks = document.getElementById('count2');
k2.name = "Maurice";

var name2 = document.getElementById('name2');
name2.innerHTML = "This is " + k2.name;

var allKittens = document.getElementsByClassName("kitten");
var kittenCount = allKittens.length;

// var Kitten = function(sprite) {
//   this.sprite = 'http://placekitten.com/200/200';
//
//   // create a new kitten
//   function addKitten () {
//     // create a new div element for a kitten
//     var newKitten = document.createElement("div");
//     var newContent = createTextNode("This is ");
//     newKitten.appendChild(newContent); // add the text node to the new div
//
//     // add the new element and content into document
//     var currentDiv = getElementById("div1");
//     document.body.insertAfter(newKitten, currentDiv);
//   }
//
//   addKitten();
//
//   this.addEventListener('click', countClicks, false);
// };

function countClicks () {
  //the element has been clicked... do stuff here
  // "use strict";
  this.count += 1;
  // var clickCount = this.count;
  console.log("Click count:", this.count);
  // return clickCount;
  this.clicks.innerHTML = "Clicks: " + this.count;

}

k1.addEventListener('click', countClicks, false);
k2.addEventListener('click', countClicks, false);

// var kittenOne = new Kitten();
// var kittenTwo = new Kitten();
