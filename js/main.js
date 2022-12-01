// DEFINE GLOBAL VARIABLES
const itemName = document.getElementById('itemName');
const itemDescription = document.getElementById('itemDescription');
const imgContainer = document.getElementById('image');
const catButtons = document.querySelectorAll('.catButton')
const arrows = document.querySelectorAll('.arrows');
const infoText = document.querySelector('.informationInner');
const searchbar = document.querySelector('#myInput');
const searchButton = document.querySelector('#submit');
const rightArrow = document.getElementById('arrowRight');
const leftArrow = document.getElementById('arrowLeft');
const welcomeBtn = document.getElementById('welcome-message-btn')


let arrowDirection = '';
let searchValue ='';
let count = 0;
let currentArr;


const urlAll = `https://botw-compendium.herokuapp.com/api/v2/entry/${searchValue}`;
const url = `https://botw-compendium.herokuapp.com/api/v2/all`;




// AUTOCOMPLETE ==============================================================================================================================================

// ARRAY OF ALL ITEMS -CRIES-
const allItems = ['horse', 'giant horse', 'white horse', 'lord of the mountain', 'stalhorse', 'donkey', 'sand seal', 'patricia', 'bushy-tailed squirrel', 'woodland boar', 'red-tusked boar', 'mountain goat', 'white goat', 'mountain buck', 'mountain doe', 'water buffalo', 'hateno cow', 'highland sheep', 'grassland fox', 'snowcoat fox', 'maraudo wolf', 'wasteland coyote', 'cold-footed wolf', 'tabantha moose', 'great-horned rhinoceros', 'honeyvore bear', 'grizzlemaw bear', 'hylian retriever', 'blupee', 'common sparrow', 'red sparrow', 'blue sparrow', 'rainbow sparrow', 'sand sparrow', 'golden sparrow', 'wood pigeon', 'rainbow pigeon', 'hotfeather pigeon', 'white pigeon', 'mountain crow', 'bright-chested duck', 'blue-winged heron', 'pink heron', 'islander hawk', 'seagull', 'eldin ostrich', 'cucco', 'hyrule bass', 'hearty bass', 'staminoka bass', 'hearty salmon', 'chillfin trout', 'sizzlefin trout', 'voltfin trout', 'stealthfin trout', 'might carp', 'mighty carp', 'armored carp', 'sanke carp', 'mighty porgy', 'armored porgy', 'sneaky river snail', 'hearty blueshell snail', 'razorclaw crab', 'ironshell crab', 'bright-eyed crab', 'fairy', 'winterwing butterfly', 'summerwing butterfly', 'thunderwing butterfly', 'smothering butterfly', 'cold darner', 'warm darner', 'electric darner', 'restless cricket', 'bladed rhino beetle', 'rugged rhino beetle', 'energetic rhino beetle', 'sunset firefly', 'hot-footed frog', 'tireless frog', 'hightail lizard', 'hearty lizard', 'fireproof lizard', 'chuchu', 'fire chuchu', 'ice chuchu', 'electric chuchu', 'keese', 'fire keese', 'ice keese', 'electric keese', 'water octorok', 'forest octorok', 'rock octorok', 'snow octorok', 'treasure octorok', 'fire wizzrobe', 'ice wizzrobe', 'electric wizzrobe', 'meteo wizzrobe', 'blizzrobe', 'thunder wizzrobe', 'bokoblin', 'blue bokoblin', 'black bokoblin', 'stalkoblin', 'silver bokoblin', 'moblin', 'blue moblin', 'black moblin', 'stalmoblin', 'silver moblin', 'lizalfos', 'blue lizalfos', 'black lizalfos', 'stalizalfos', 'fire-breath lizalfos', 'ice-breath lizalfos', 'electric lizalfos', 'silver lizafos', 'lynel', 'blue-maned lynel', 'white-maned lynel', 'silver lynel', 'guardian stalker', 'guardian skywatcher', 'guardian turret', 'sentry', 'decayed guaradian', 'guardian scout i', 'guardian scout ii', 'guardian scout iii', 'guardian scout iv', 'yiga footsoldier', 'yiga blademasater', 'master kohga', 'monk maz koshia', 'stone talus', 'stone talus (luminous)', 'stone talus', 'stone talus (rare)', 'igneo talus', 'frost talus', 'stone pebblit', 'igneo pebblit', 'frost pebblit', 'igneo talus titan', 'hinox', 'blue hinox', 'black hinox', 'stalnox', 'molduga', 'molduking', 'dinraal', 'naydra', 'farosh', 'cursed bokoblin', 'cursed moblin', 'cursed lizalfos', 'thunderblight ganon', 'fireblight ganon', 'waterblight ganon', 'windblight ganon', 'calamity ganon', 'dark beast ganon', 'apple', 'palm fruit', 'wildberry', 'hearty durian', 'hydromelon', 'spicy pepper', 'voltfruit', 'fleet-lotus seeds', 'mighty bananas', 'hylian shrrom', 'endura shroom', 'stamella shroom', 'hearty truffle', 'big hearty truffle', 'chillshroom', 'sunshroom', 'zapshroom', 'rushroom', 'razorshroom', 'ironshroom', 'silent shroom', 'hyrule herb', 'hearty radish', 'big hearty radish', 'cool safflina', 'warm safflina', 'electric safflina', 'swift carrot', 'endura carrot', 'fortified pumpkin', 'swift violet', 'mighty thistle', 'armoranth', 'blue nightshade', 'silent princess', 'courser bee honey', 'master sword', 'tree branch', 'torch', 'soup ladle', 'boomerang', 'spring-loaded hammer', `traveler's sword`, `soldier's broadsword`, `knight's broadsword`, 'royal broadsword', `forest dweller's sword`, 'zora sword', 'feathered edge', 'gerudo scimitar', 'moonlight scimitar', 'scimitar of the seven', 'eightfold blade', 'ancient short sword', 'rusty broadsword', `royal guard's sword`, 'flameblade', 'frostblade', 'thunderblade', 'boko club', 'spiked boko club', 'dragonbone boko club', 'lizal boomerang', 'lizal forked boomerang', 'lizal tri-boomerang', 'guardian sword', 'guardian sword+', 'guardian sword++', 'lynel sword', 'mighty lynel sword', 'savage lynel sword', 'fire rod', 'meteor rod', 'ice rod', 'blizzard rod', 'lightning rod', 'thunderstorm rod', 'vicious sickle', 'demon carver', 'one-hit obliterator', 'bokoblin arm', 'lizalfos arm', 'korok leaf', 'farming hoe', 'boat oar', `woodcutter's axe`, 'double axe', 'iron sledgehammer', 'giant boomerang', `traveler's claymore`, `soldier's claymore`, `knight's claymore`, 'royal claymore', 'silver longsword', 'cobble crusher', 'stone smasher', 'boulder breaker', ' golden claymore', 'eightfold longblade', 'edge of duality', 'ancient bladesaw', 'rusty claymore', `royal guard's claymore`, 'great flameblade', 'great frostblade', 'great thunderblade', 'boko bat', 'spiked boko bat', 'dragonbone boko bat', 'moblin club', 'spiked moblin club', 'dragonbone moblin club', 'ancient battle axe', 'ancient battle axe+', 'ancient battle axe++', 'lynel crusher', 'mighty lynel crusher', 'savage lynel crusher', 'windcleaver', 'moblin arm', 'wooden mop', `farmer's pitchfork`, 'fishing harpoon', 'throwing spear', `traveler's spear`, `soldier's spear`, `knight's halberd`, 'royal halberd', `forest dweller's spear`, 'zora spear', 'silverscale spear', 'ceremonial trident', 'lightscale trident', 'drillshaft', 'feathered spear', 'gerudo spear', 'serpentine spear', 'ancient spear', 'rusty halberd', `royal guard's spear`, 'flamespear', 'frostspear', 'thunderspear', 'boko spear', 'spiked boko spear', 'dragonbone boko spear', 'moblin spear', 'spiked moblin spear', 'dragonbone moblin spear', 'lizal spear', 'enhanced lizal spear', 'forked lizal spear', 'guardian spear', 'guardian spear+', 'guardian spear++', 'lynel spear', 'mighty lynel spear', 'savage lynel spera', 'bow of light', 'wooden bow', `traveler's bow`, `soldier's bow`, `knight's bow`, 'royal bow', `forest dweller's bow`, 'silver bow', 'swallow bow', 'falcon bow', 'great eagle bow', 'golden bow', 'phrenic bow', 'ancient bow', `royal guard's bow`, 'boko bow', 'spiked boko bow', 'dragon bone boko bow', 'lizal bow', 'strengthened lizal bow', 'steel lizal bow', 'lynel bow', 'mighty lynel bow', 'savage lynel bow', 'duplex bow', 'arrow', 'fire arrow', 'ice arrow', 'shock arrow', 'bomb arrow', 'ancient arrow', 'hylian shield', 'pot lid', 'wooden shield', 'emblazoned shiled', `hunter's shield`, `fisherman's shield`, `traveler's shield`, `soldier's shield`, `knight's shield`, 'royal shield', `forest dweller's shield`, 'silver shield', 'kite shield', 'gerudo shield', 'radiant shield', 'daybreaker', `shield of the mind's eye`, 'ancient shield', 'rusty shield', `royal guard's shield`, 'boko shield', 'spiked boko shield', 'dragonbone boko shield', 'lizal shield', 'reinforced lizal shield', 'steel lizal shield', 'guardian shield', 'guardian shield+','guardian shield++', 'lynel shield', 'mighty lynel shield', 'savage lynel shield', 'treasure chest', 'ore deposit', 'rare ore deposit', 'luminous ore deposit'];

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += `<input type='hidden' value="` + arr[i] + `">`;
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
              document.querySelector('#submit').click();
              document.querySelector('#arrowLeft').style.visibility = 'hidden';
              document.querySelector('#arrowRight').style.visibility = 'hidden';
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
          document.querySelector('#arrowLeft').style.visibility = 'hidden';
          document.querySelector('#arrowRight').style.visibility = 'hidden';
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

autocomplete(document.getElementById("myInput"), allItems);

// END AUTOCOMPLETE ==================================================================================================


// FETCH API INFORMATION FOR ICONS AND ARROWS(ARRAYS) =================================================================================================
//instead of using this to fetch on btn click (takes too long) we'll fetch everything on pageload
//and place in localstorage then pull from there
//replace this whole function to simply set the correct information on click
const fetchArray = (btnCategory) => {
  // console.log(event.target.id);
  categoryType = btnCategory
  searchbar.value = ''
    
    switch (categoryType){
      case 'food':
        currentArr = JSON.parse(window.localStorage.getItem('food'));
        setFirstData(currentArr);
        break;
      case 'non_food':
        currentArr = JSON.parse(window.localStorage.getItem('non_food'));
        setFirstData(currentArr);
        break;
      case 'equipment':
        currentArr = JSON.parse(window.localStorage.getItem('equipment'));
        setFirstData(currentArr);
        break;
      case 'materials':
        currentArr = JSON.parse(window.localStorage.getItem('materials'));
        setFirstData(currentArr);
        break;
      case 'monsters':
        currentArr = JSON.parse(window.localStorage.getItem('monsters'));
        setFirstData(currentArr);
        break;
      case 'treasure':
        currentArr = JSON.parse(window.localStorage.getItem('treasure'));
        setFirstData(currentArr);
        break;
    } 

    // TURNS TEXT BACK INTO READABLE ENGLISH
    infoText.style.fontFamily = 'Hind, sans-serif';

    return categoryType;
}

//grab category id from each btn clicked
//display both left and right arrow
//clear input
catButtons.forEach(btn => btn.addEventListener('click', (e)=>{
  let id = e.target.parentElement.id
  fetchArray(id)
  //add another function for currently selected category btn to remain highlighted
  //use id and assign to var then check for current value of var
  //apply style to btn that equals same value of current value of var
  document.querySelector('#arrowLeft').style.visibility = 'visible';
  document.querySelector('#arrowRight').style.visibility = 'visible';
  document.querySelector('#myInput').value = '';
}))

// changing the code to work with objects instead of arrays
const setFirstData = arr => {
  const firstKey = Object.keys(arr)[0];
  imgContainer.src = arr[firstKey].image;
  itemName.innerText = arr[firstKey].name;
  itemDescription.innerText = arr[firstKey].description;
  imgContainer.alt = `an image of ${arr[firstKey].name}`
}


// CREATE A CONDITIONAL WHERE COUNT CANNOT BE LESS THAN 0
// changed array methods to objects'
const loopThruArray1 = arr => {
  const arrLength = Object.keys(arr).length;
  if(arrowDirection === 'arrowRight'){
    count = (count+1)%(arrLength);
    const curKey = Object.keys(arr)[count];
    imgContainer.src = arr[curKey].image;
    itemName.innerText = arr[curKey].name;
    itemDescription.innerText = arr[curKey].description;
    imgContainer.alt = `an image of ${arr[curKey].name}`
    if(count === arrLength){
      count = 0
    }
  }else if(arrowDirection === 'arrowLeft'){
    if(count === 0){
      count = arrLength
    }
    count = (count-1)%(arrLength);
    const curKey = Object.keys(arr)[count];
    imgContainer.src = arr[curKey].image;
    itemName.innerText = arr[curKey].name;
    itemDescription.innerText = arr[curKey].description;
    imgContainer.alt = `an image of ${arr[curKey].name}`
  };
}

const getArrowId = (event) => {
  arrowDirection = event.target.id;
  loopThruArray1(currentArr);
}

arrows.forEach((arrow) => {
  arrow.addEventListener('click', getArrowId);
})


// END FETCH ARRAY API ====================================================================

//First let's fetch all the data 
async function fetchAllData(url) {
	const results = await fetch(url);
	const data = await results.json();

  //Get rid of the outside {} and send the information we need
  const itemsData = data.data

  console.log('done caching')
  //sending the info to be rearragned and then cached
  cacheToLocalStorage(itemsData)
}

async function cacheToLocalStorage(data){
  //because the initial organization of the items 
  //slightly differs we will have to change up how we
  //access the bits we want and each time assign them 
  //to arr
  let arr;
  const completeObj = {};

  //loop through each not-creatures key
  //creatures has sub-categories that we have to deal with later
  for(const categoryKeys in data){
    if(categoryKeys !== 'creatures'){

      //let's pinpoint the array under each category and 
      //use reduce to rearrange the data in a way that
      //they will be organized by the item.name
      let categories = data[categoryKeys]
      arr = categories.reduce((acc, cur) => {
        acc[cur.name] = cur;
        return acc;
        //leave it as an obj instead of arr because idk how to
        //save arrays in localstorage xD
      }, {})

      // let's sort the category objects in alphabetical order
      arr = Object.keys(arr).sort().reduce((acc, cur) => {
        acc[cur] = arr[cur];
        return acc;
      }, {})

      // adding the keys to completeObj
      for (key in arr) {
        completeObj[key] = arr[key];
      }

      //after reorganizing let's send each category's data to local storage
      //localstorage only accepts strings so stringify that object!
      localStorage.setItem(categoryKeys, JSON.stringify(arr))

    } else {

      //same thing as above but we have to go down a level to access 
      //creatures' sub-categories
      const foodKeys = data[categoryKeys]
      for(const key in foodKeys){
        const foodCategories = foodKeys[key]
        arr = foodCategories.reduce((acc, cur) => {
        acc[cur.name] = cur;
        return acc;
      }, {})

      // let's also sort the creature object alphabetically here
      arr = Object.keys(arr).sort().reduce((acc, cur) => {
        acc[cur] = arr[cur];
        return acc;
      }, {})

      // adding keys to the completeObj
      for (item in arr) {
        completeObj[item] = arr[item];
      }

      localStorage.setItem(key, JSON.stringify(arr))

      }
    }
  }
  localStorage.setItem('all', JSON.stringify(completeObj))
  console.log(completeObj, Object.keys(completeObj).length)
}

fetchAllData(url)

// searchbar interactions
searchbar.addEventListener('keydown', e =>{
  if (e.keyCode == 13) {
    searchButton.click();
    searchbar.value = ''
  }
})

searchButton.addEventListener('click', async _ => {
  document.getElementById('arrowRight').classList.add('hidden')
  document.getElementById('arrowLeft').classList.add('hidden')
  await searchFetch();
  infoText.style.fontFamily = 'Hind, sans-serif';
});

const searchFetch = async _ => {
  const searchValue = document.querySelector('#myInput').value.toLowerCase().split('').join('');
  const searchItem = JSON.parse(window.localStorage.getItem('all'))[searchValue];

  if (Object.keys(searchItem).length > 0) {
    itemName.innerText = searchItem.name;
    itemDescription.innerText = searchItem.description;
    imgContainer.src = searchItem.image;
  }
}