var catArray = [
  "Sylvie",
  "Maurice",
  "Aundra",
  "Phil",
  "Alice",
  "Tippy",
  "Ron",
  "Strombone",
  "Terence"
];

var catPhotos = [
  "img/kitten-1.jpg",
  "img/kitten-2.jpg",
  "img/kitten-3.jpg",
  "img/kitten-4.jpg",
  "img/kitten-5.jpg",
  "img/kitten-6.jpg",
  "img/kitten-7.jpg",
  "img/kitten-8.jpg",
  "img/kitten-9.jpg"
];

var Kitten = function(catNum) {
  var arrayNum = catNum - 1;
  // number the kitten
  this.num = catNum;
  // give index number
  this.index = arrayNum;
  // create list elem
  this.name = catArray[arrayNum];
  console.log(this.name);
  // add photo as property (hidden)
  this.photo = catPhotos[arrayNum];
  console.log(this.photo);
  // add counter as property (hidden)
  this.count = 0;

  // add kitten's name to list
  listKitten(this.num, this.name, this.photo);


};

// TODO: function to show photo, name, counter

// instantiate all kitten objects
var kittenOne = new Kitten(1);
var kittenTwo = new Kitten(2);
var kittenThree = new Kitten(3);
var kittenFour = new Kitten(4);
var kittenFive = new Kitten(5);
var kittenSix = new Kitten(6);
var kittenSeven = new Kitten(7);
var kittenEight = new Kitten(8);
var kittenNine = new Kitten(9);

// add cat names to ordered list
function listKitten (num, name, img) {
  // create & append list item
  var newItem = document.createElement("li");
  var newLink = document.createElement("a");
  var newLinkText = document.createTextNode(name);
  newLink.setAttribute('href', "img/kitten-5.jpg");
  newLink.setAttribute('alt', "another cute kitten");
  newLink.appendChild(newLinkText);
  newItem.appendChild(newLink);

  // newItem.textContent = name;
  newItem.classList.add("kitty-link");

  var list = document.getElementById("kitty-list");
  list.appendChild(newItem);
  // add click functionality
  newItem.addEventListener('click', showKitten, false);
}

function showKitten () {
  // change cat name
  var catName = document.getElementById("name1");
  catName.innerHTML = "This is " + this.name;
  // change cat photo to selected kitten
  var catDiv = document.getElementById("cat-img");
  console.log("Photo: ", this.photo);
  // var imgString = '<img id="kitten1" class="kitten" src=' + this.photo + ' alt="cute kitten">';
  var imgString = "img/kitten-9.jpg";
  catDiv.innerHTML = imgString;
  console.log(catDiv.innerHTML);
  catDiv.count = 0;
  // count number of clicks on image
  // catDiv.addEventListener('click', countClicks, false);
  // var clicks = document.getElementById('count1');
  // clicks.textContent = 'Clicks:' + catDiv.count;
}

// count user clicks on an image
function countClicks () {
  // "use strict";
  this.count += 1;
  console.log("Click count:", this.count);
}

// k1.addEventListener('click', countClicks, false);
// k2.addEventListener('click', countClicks, false);

// var k1 = document.getElementById('kitten1');
// k1.count = 0;

// k1.name = "Sylvie";
//
// var name1 = document.getElementById('name1');
// name1.innerHTML = "This is " + k1.name;
//
// var k2 = document.getElementById('kitten2');
// k2.count = 0;
// k2.clicks = document.getElementById('count2');
// k2.name = "Maurice";
//
// var name2 = document.getElementById('name2');
// name2.innerHTML = "This is " + k2.name;
//
// var allKittens = document.getElementsByClassName("kitten");
// var kittenCount = allKittens.length;

