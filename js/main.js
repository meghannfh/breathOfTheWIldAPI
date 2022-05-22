//Example fetch
// document.querySelector('button').addEventListener('click', getFetch)
const itemCreatureName = document.getElementById('itemCreatureName')
const itemCreatureDescription = document.getElementById('itemCreatureDescription')
const infoContainer = document.getElementById('infoContainer')
const rightArrow = document.getElementById('rightArrow')
const leftArrow = document.getElementById('leftArrow')
const arrows = document.querySelectorAll('.arrow')
// let entry = document.querySelector('input').value



rightArrow.addEventListener('click', getFetch)
//on click of either arrow we need to fetch the info
//first righarrow click will fetch the value starting at index [0]
//print image to image placeholder
//print name and description and stats to right side box
//index++ on next rightarrow click (ex, will show value at [1] then [2] and so on)
//first leftarrow click will fetch value


const CREATURES_URL = 'https://botw-compendium.herokuapp.com/api/v2'
  // const url = `https://botw-compendium.herokuapp.com/api/v2/entry/${entry}`;

function getFetch(){
  fetch(CREATURES_URL)
  .then(res =>res.json()) // parse response as JSON
  .then(data => {
    // console.log(data)
    let creaturesArrayNonFood = data.data.creatures.non_food
    // console.log(creaturesArrayNonFood)
    // console.log(creaturesArrayNonFood[0].name)
    // console.log(creaturesArrayNonFood[0].image)

    document.querySelector('.container').classList.add('show')
    for(let i = 0; i < creaturesArrayNonFood.length; i++){
      document.getElementById('image').src = creaturesArrayNonFood[i].image
      itemCreatureName.innerText = creaturesArrayNonFood[i].name
      itemCreatureDescription.innerText = creaturesArrayNonFood[i].description

    }

  })
  .catch(err => {
    console.log(`error ${err}`)
  });
}
  