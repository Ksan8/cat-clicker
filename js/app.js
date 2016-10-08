var model = {
  // why does this need to be in the model instead of octopus?
  adminShowing: false,

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
  allCats: model.cats,
  admin: model.adminShowing,

  init: function() {
    view1.init();
    view2.init();
    view1.catImg.addEventListener('click', this.countClicks, false);
    view1.admin.addEventListener('click', view1.showAdmin, false);
  },

  // is this necessary?
  retrieveCats: function() {
    return model.cats;
  },

  // show chosen kitten as main image
  replaceKitten: function(i) {
    this.currentCat = model.cats[i];
    view1.render();
  },

  // increments the counter for current cat
  countClicks: function() {
    var counter = octopus.currentCat.clickCount;
    octopus.currentCat.clickCount++;
    console.log("Click count:", counter + 1);
    view1.clicks.textContent = 'Clicks: ' + (counter + 1);
  }
};

// current cat display
var view1 = {
  // store pointers to DOM elements
  catList: document.getElementsByClassName("kitty-link"),  // list of cat names
  catName: document.getElementById("name1"),  // h3 element introducing the cat
  catImg: document.getElementById("kitten1"),  // img element
  clicks: document.getElementById('count1'),  // h4 element with # clicks
  // specific to admin functionality
  admin: document.getElementById('admin'),  // admin button
  adminForm: document.getElementById('admin-form'),  // normally hidden form
  newName: document.getElementById('new-name'),  // input name
  newURL: document.getElementById('new-url'),  // input url
  newCount: document.getElementById('new-count'),  // input count

  init: function() {
    this.render();
    this.hideAdmin();
  },

  // show a cat
  render: function() {
    var thisCat = octopus.currentCat;
    // change cat name
    this.catName.innerHTML = "This is " + thisCat.name;
    // change cat photo to selected kitten
    this.catImg.src = thisCat.imgURL;
    // display # of clicks the image has had
    this.clicks.textContent = 'Clicks: ' + thisCat.clickCount;
  },

  showAdmin: function() {
    view1.adminForm.classList.remove("hidden");
  },

  hideAdmin: function() {
    view1.adminForm.classList.add("hidden");
  }

};

// cat list
var view2 = {

  init: function() {
    this.render();
  },

  render: function(){
    this.listCats();
    this.clickListener();
  },

  // make list of cats
  listCats: function() {
    var cats = octopus.allCats;
    for (i = 0; i < cats.length; i++) {
      var name = cats[i].name;
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
