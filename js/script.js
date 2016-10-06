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
  "img/kitten-1-med.jpg",
  "img/kitten-2-med.jpg",
  "img/kitten-3-med.jpg",
  "img/kitten-4-med.jpg",
  "img/kitten-5-med.jpg",
  "img/kitten-6-med.jpg",
  "img/kitten-7-med.jpg",
  "img/kitten-8-med.jpg",
  "img/kitten-9-med.jpg"
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

  // // add kitten's name to list
  // listKitten(this.num, this.name, this.photo);

};

// function listKitten (num, name, photo) {
//   // create list item
//   var newItem = document.createElement("li");
//   newItem.classList.add("kitty-link");
//   // make it a link
//   var newLink = document.createElement("a");
//   var newLinkText = document.createTextNode(name);
//   newLink.setAttribute('href', "#");
//   newLink.setAttribute('alt', "another cute kitten");
//   newLink.appendChild(newLinkText);
//   newItem.appendChild(newLink);
//
//   // add to cat list
//   var list = document.getElementById("kitty-list");
//   list.appendChild(newItem);
//
//   // add click functionality
//   newLink.addEventListener('click', showKitten(name, photo), false);
// }

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

var allKittens = [kittenOne, kittenTwo, kittenThree, kittenFour, kittenFive, kittenSix, kittenSeven, kittenEight, kittenNine];
var kittenCount = allKittens.length;

// create an ordered list of kitten names
function listKittens () {
  // iterate through the kittens
  for  (i = 0; i < kittenCount; i++) {
    var cat = allKittens[i];
    var name = cat.name;
    // create list item
    var newItem = document.createElement("li");
    newItem.classList.add("kitty-link");
    // make it a link
    var newLink = document.createElement("a");
    var newLinkText = document.createTextNode(name);
    newLink.setAttribute('href', "#");
    newLink.setAttribute('alt', "another cute kitten");
    newLink.appendChild(newLinkText);
    newItem.appendChild(newLink);

    // add to cat list
    var list = document.getElementById("kitty-list");
    list.appendChild(newItem);
  }
}

// change main photo & info when a cat name is clicked
function clickListener () {
    var catList = document.getElementsByClassName("kitty-link");
    var listCount = catList.length;
    // iterate through list
    for  (i = 0; i < listCount; i++) {
      var link = catList[i];
      var name = catArray[i];
      var photo = catPhotos[i];
      var num = i + 1;
      var count = 0;  // need to change

      // add click functionality (with proper use of closures)
      link.addEventListener('click', (function(nameCopy, photoCopy) {
        return function() {
          showKitten(nameCopy, photoCopy);
        };
      })(name, photo));
    }
}

listKittens();
clickListener();

function showKitten (name, img) {
  // change cat name
  var catName = document.getElementById("name1");
  catName.innerHTML = "This is " + name;
  // change cat photo to selected kitten
  var catImg = document.getElementById("kitten1");
  console.log("Photo: ", img);
  // var imgString = '<img id="kitten1" class="kitten" src=' + this.photo + ' alt="cute kitten">';
  catImg.src = img;
  console.log(catImg.src);

  // TODO: make cat clicks countable
  
  // catDiv.count = 0;
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


