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

// basic kitten object
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
};

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

// counter for clicks on main image
var counter = 0;

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

// show the selected kitten & its info
function showKitten (name, img) {
  // change cat name
  catName.innerHTML = "This is " + name;
  // change cat photo to selected kitten
  console.log("Photo: ", img);
  catImg.src = img;
  console.log(catImg.src);

  clicks = document.getElementById('count1');

  // reset counter to zero for this kitten
  counter = 0;
  clicks.textContent = 'Clicks: ' + counter;
}

// count number of clicks on image
var catName = document.getElementById("name1");
var catImg = document.getElementById("kitten1");
var clicks = document.getElementById('count1');

catImg.addEventListener('click', countClicks(), false);

// count user clicks on an image
function countClicks () {
  // "use strict";
  counter += 1;
  console.log("Click count:", counter);
  clicks.textContent = 'Clicks: ' + counter;
}
