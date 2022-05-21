//Example fetch
// document.querySelector('button').addEventListener('click', getFetch)
const itemCreatureName = document.getElementById('itemCreatureName')
const itemCreatureDescription = document.getElementById('itemCreatureDescription')
const infoContainer = document.getElementById('infoContainer')
const imgPlaceholder = document.getElementById('image')
const rightArrow = document.getElementById('rightArrow')
const leftArrow = document.getElementById('leftArrow')
const arrows = document.querySelectorAll('.arrows')
// let entry = document.querySelector('input').value


//on click of either arrow we need to fetch the info
//first righarrow click we will fetch the value starting at index [0]
//print image to image placeholder
//print name and description and stats to right side box
//index++ on next rightarrow click (ex, will show value at [1] then [2] and so on)
//first leftarrow click will fetch value

const CREATURES_URL = 'https://botw-compendium.herokuapp.com/api/v2'
  // const url = `https://botw-compendium.herokuapp.com/api/v2/entry/${entry}`;
fetch(CREATURES_URL)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    const creaturesObj = data.message; //data object to variable
    const creaturesArray = Object.keys(creaturesObj)
    console.log(data);
    console.log(data.data.image)
  })
  .catch(err => {
    console.log(`error ${err}`)
  });

  arrows.forEach((arrow) => {
    arrow.addEventListener('click', handleArrowClick)
  })

  const handleArrowClick = arrows => {
    //if the arrow has the classlist or id of blahblah then
    if(arrows){
      for(let i = 0; i < creaturesArray.length; i++){
        
      }
    }
  }

// imgPlaceholder.src = data.data.image
// itemCreatureName.innerText = data.data.name
// itemCreatureDescription.innerText = data.data.description
// infoContainer.classList.add('show')