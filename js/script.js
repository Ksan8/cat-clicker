var k1 = document.getElementById('kitten1');
k1.count = 0;
k1.name = "Sylvie";

var allKittens = document.getElementsByClassName("kitten");
var kittenCount = allKittens.length;

var Kitten = function(sprite) {
  this.sprite = 'http://placekitten.com/200/200';

  // create a new kitten
  function addKitten () {
    // create a new div element for a kitten
    var newKitten = document.createElement("div");
    var newContent = createTextNode("This is ");
    newKitten.appendChild(newContent); // add the text node to the new div

    // add the new element and content into document
    var currentDiv = getElementById("div1");
    document.body.insertAfter(newKitten, currentDiv);
  }

  addKitten();

  this.addEventListener('click', countClicks, false);
};

function countClicks () {
  //the element has been clicked... do stuff here
  // "use strict";
  this.count += 1;
  var clickCount = this.count;
  console.log("Click count:", this.count);
  return clickCount;
}

k1.addEventListener('click', countClicks, false);

var kittenOne = new Kitten();
var kittenTwo = new Kitten();
