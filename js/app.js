var model = {

  cats : [
    {
      name : "Sylvie",
      clickCount : 0,
      imgURL : "img/kitten-1-med.jpg"
    },{
      name : "Maurice",
      clickCount : 0,
      imgURL : "img/kitten-2-med.jpg"
    },{
      name : "Aundra",
      clickCount : 0,
      imgURL : "img/kitten-3-med.jpg"
    },{
      name : "Phil",
      clickCount : 0,
      imgURL : "img/kitten-4-med.jpg"
    },{
      name : "Alice",
      clickCount : 0,
      imgURL : "img/kitten-5-med.jpg"
    },{
      name : "Tippy",
      clickCount : 0,
      imgURL : "img/kitten-6-med.jpg"
    },{
      name : "Ron",
      clickCount : 0,
      imgURL : "img/kitten-7-med.jpg"
    },{
      name : "Strombone",
      clickCount : 0,
      imgURL : "img/kitten-8-med.jpg"
    },{
      name : "Terence",
      clickCount : 0,
      imgURL : "img/kitten-9-med.jpg"
    }
  ]
};

var octopus = {

  currentCat: model.cats[0],  // set to first cat (initially)
  totalCats: model.cats.length,
  allCats: model.cats,

  init: function() {
    view1.init();
    view2.init();
    view1.catImg.addEventListener('click', octopus.countClicks, false);
  },

  // is this necessary?
  retrieveCats: function() {
    return model.cats;
  },

  // show chosen kitten as main image
  replaceKitten: function(i) {
    octopus.currentCat = model.cats[i];
    view1.render();
  },

  countClicks: function() {
    var counter = octopus.currentCat.clickCount;
    octopus.currentCat.clickCount += 1;
    console.log("Click count:", counter);
    view1.clicks.textContent = 'Clicks: ' + counter;
  }

};

// current cat display
var view1 = {

  catList: document.getElementsByClassName("kitty-link"),  // list of cat names
  catName: document.getElementById("name1"),  // h3 element introducing the cat
  catImg: document.getElementById("kitten1"),  // img element
  clicks: document.getElementById('count1'),  // h4 element with # clicks

  init: function() {
    view1.render();
  },

  // show a cat
  render: function(){
    // change cat name
    view1.catName.innerHTML = "This is " + octopus.currentCat.name;
    // change cat photo to selected kitten
    view1.catImg.src = octopus.currentCat.imgURL;
    // display # of clicks the image has had
    view1.clicks.textContent = 'Clicks: ' + octopus.currentCat.clickCount;
  }

};

// cat list
var view2 = {

  init: function() {
    view2.render();
  },

  render: function(){
    view2.listCats();
    view2.clickListener();
  },

  // make list of cats
  listCats: function() {
    for (i = 0; i < octopus.totalCats; i++) {
      var name = octopus.allCats[i].name;
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
  },

  // listen for a click on list items
  clickListener: function() {
    var catList = document.getElementsByClassName("kitty-link");
    var listCount = view1.catList.length;
    // iterate through list
    for  (i = 0; i < listCount; i++) {
      var link = catList[i];
      // add click functionality (with proper use of closures)
      link.addEventListener('click', (function(iCopy) {
        return function() {
          console.log("Click heard");
          octopus.replaceKitten(iCopy);
        };
      })(i));
    }
  }


};

octopus.init();
