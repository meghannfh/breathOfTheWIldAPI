// DEFINE GLOBAL VARIABLES
const itemName = document.getElementById('itemName');
const itemDescription = document.getElementById('itemDescription');
const imgContainer = document.getElementById('image');
const btnContainer = document.getElementById('btnContainer');
const arrows = document.querySelectorAll('.arrows');
const infoText = document.querySelector('.informationInner');
const searchbar = document.querySelector('#myInput');
const searchButton = document.querySelector('#submit');
const rightArrow = document.getElementById('arrowRight');
const leftArrow = document.getElementById('arrowLeft');


let arrowDirection = '';
let searchValue ='';
let count = 0;
// let entry = document.getElementById('searchAll').value
// DEFINE ARRAYS TO HOLD PROMISES
let foodNamesArr;
let nonFoodNamesArr;
let equipmentNamesArr;
let materialNamesArr;
let monsterNamesArr;
let treasureNamesArr;
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
const fetchArray = (event) => {
  console.log(event.target.id);
  categoryType = event.target.id;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      searchbar.value = ''
      /* EXAMPLE
      reduce((total, current) => {
        total[current.name] = current;
        total['blue beetle'] = { 'blue beetle': object key value pairs };
        return total;
      }, [])*/
      document.getElementById('arrowLeft').classList.remove("hidden")
      document.getElementById('arrowRight').classList.remove("hidden")
      // TURNING ARRAY INTO NAME-BASED ARRAY OF FOOD ITEMS
      const foodNumbers = data.data.creatures.food;
      let foodNames = foodNumbers.reduce((acc, cur) => {
        acc[cur.name] = cur;
        return acc;
      }, []);
      foodNames = Object.entries(foodNames).sort()

      // TURNING ARRAY INTO NAME-BASED ARRAY OF NON-FOOD ITEMS
      const nonfoodNumbers = data.data.creatures.non_food;
      let nonfoodNames = nonfoodNumbers.reduce((acc, cur) => {
        acc[cur.name] = cur;
        return acc;
      }, []);
      nonfoodNames = Object.entries(nonfoodNames).sort()

      // TURNING ARRAY INTO NAME-BASED ARRAY OF EQUIPMENT ITEMS
      const equipmentNumbers = data.data.equipment
      let equipmentNames = equipmentNumbers.reduce((acc, cur) => {
        acc[cur.name] = cur;
        return acc;
      }, [])
      equipmentNames = Object.entries(equipmentNames).sort()

      //TURNING ARRAY INTO NAME-BASED ARRAY OF MATERIAL ITEMS
      const materialNumbers = data.data.materials
      let materialNames = materialNumbers.reduce((acc, cur) => {
        acc[cur.name] = cur;
        return acc;
      }, [])
      materialNames = Object.entries(materialNames).sort()
    
      //TURNING ARRAY INTO NAME-BASED ARRAY OF MONSTERS ITEMS
      const monsterNumbers = data.data.monsters
      let monsterNames = monsterNumbers.reduce((acc, cur)=> {
        acc[cur.name] = cur;
        return acc;
      }, [])
      monsterNames = Object.entries(monsterNames).sort()

      //TURNING ARRAY INTO NAME-BASED ARRAY OF TREASURE ITEMS
      const treasureNumbers = data.data.treasure
      let treasureNames = treasureNumbers.reduce((acc, cur) => {
        acc[cur.name] = cur;
        return acc;
      }, [])
      treasureNames = Object.entries(treasureNames).sort()

      foodNamesArr = foodNames;
      nonFoodNamesArr = nonfoodNames;
      equipmentNamesArr = equipmentNames;
      materialNamesArr = materialNames;
      monsterNamesArr = monsterNames;
      treasureNamesArr = treasureNames;
      
      


    switch (categoryType){
      case 'creaturesFood':
        setFirstData(foodNames);
        currentArr = foodNames;
        break;
      case 'creaturesNonFood':
        setFirstData(nonfoodNames);
        currentArr = nonfoodNames;
        break;
      case 'equipment':
        setFirstData(equipmentNames);
        currentArr = equipmentNames;
        break;
      case 'materials':
        setFirstData(materialNames);
        currentArr = materialNames;
        break;
      case 'monsters':
        setFirstData(monsterNames);
        currentArr = monsterNames;
        break;
      case 'treasure':
        setFirstData(treasureNames);
        currentArr = treasureNames;
        break;
    }

    // TURNS TEXT BACK INTO READABLE ENGLISH
    infoText.style.fontFamily = 'Hind, sans-serif';

    return categoryType;


})
  .catch(err=>console.error(err))

}


btnContainer.addEventListener('click', fetchArray);

const setFirstData = arr => {
  imgContainer.src = arr[0][1].image;
  itemName.innerText = arr[0][1].name;
  itemDescription.innerText = arr[0][1].description;
}


// CREATE A CONDITIONAL WHERE COUNT CANNOT BE LESS THAN 0
const loopThruArray1 = arr => {
  if(arrowDirection === 'arrowRight'){
    count = (count+1)%(arr.length);
    imgContainer.src = arr[count][1].image;
    itemName.innerText = arr[count][1].name;
    itemDescription.innerText = arr[count][1].description;
    if(count === arr.length){
      count = 0
    }
  }else if(arrowDirection === 'arrowLeft'){
    if(count === 0){
      count = arr.length
    }
    console.log(count)
    count = (count-1)%(arr.length);
    imgContainer.src = arr[count][1].image;
    itemName.innerText = arr[count][1].name;
    itemDescription.innerText = arr[count][1].description;
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

// LOAD ALL ARRAY ON LOAD

searchbar.addEventListener('keydown', e =>{
  if (e.keyCode == 13) {
    searchButton.click();
    searchbar.value = ''
  }
} )

searchButton.addEventListener('click', async _ => {
  await searchFetch();
  infoText.style.fontFamily = 'Hind, sans-serif';
  // arrows.hide()
  document.getElementById('arrowRight').classList.add('.hidden')
  document.getElementById('arrowLeft').classList.add('.hidden')
});

const searchFetch = async _ => {
  let searchValue = document.querySelector('#myInput').value;
  searchValue = searchValue.split(' ');
  searchValue = searchValue.join('_');

  const res = await fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${searchValue}`);
  const json = await res.json();
  const data = json.data;

  if (Object.keys(data).length > 0) {
    itemName.innerText = data.name;
    itemDescription.innerText = data.description;
    imgContainer.src = data.image;
  }
}