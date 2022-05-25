const itemCreatureName = document.getElementById('itemCreatureName')
const itemCreatureDescription = document.getElementById('itemCreatureDescription')
const infoContainer = document.getElementById('infoContainer')
const imgContainer = document.getElementById('image')
const rightArrow = document.getElementById('rightArrow')
const leftArrow = document.getElementById('leftArrow')
const arrows = document.querySelectorAll('.arrow')
const btnContainer = document.getElementById('btnContainer')
let categoryType;
let backOrForward;
let count = 0;
// let entry = document.querySelector('input').value

const onClick = (event) => {
  console.log(event.target.id);
  backOrForward = event.target.id
  return backOrForward
}
window.addEventListener('click', onClick);

arrows.forEach((arrow)=>{
  arrow.addEventListener('click', getFetch)})

//Idk how to get the left caret to work so that 
//it iterates backwards. right now if you click
//either one it goes forward

const CREATURES_URL = 'https://botw-compendium.herokuapp.com/api/v2'
  // const url = `https://botw-compendium.herokuapp.com/api/v2/entry/${entry}`;

fetch(CREATURES_URL)
.then(res => res.json())
.then(data => {
  const categories = Object.keys(data.data)
      console.log(categories)

      for(let i = 0; i < categories.length; i++){
        const newBtn = document.createElement('button');

        newBtn.innerText = categories[i]
        btnContainer.appendChild(newBtn)
      }
      
    })
.catch(err => {
  console.log(`error ${err}`)
});

// newBtn.forEach((btn) => {
//   btn.addEventListener('click', event =>{
//     let CATEGORY_URL = `https://botw-compendium.herokuapp.com/api/v2/category/${event.target.value}`

//     getFetch(CATEGORY_URL)
//   })
// })

// const changeCategory = CATEGORY_URL => {
//   fetch(CATEGORY_URL)
//   .then(res => {
//     res.json()
//   })
//   .then(data =>{

//     console.log(data.data)
    
//   })
// }

// newBtn.addEventListener('click', event => {
//   let CATEGORY_URL = `https://botw-compendium.herokuapp.com/api/v2/category/${event.target.value}`

//   pullDataFromCategory(CATEGORY_URL)
// })

// const pullDataFromCategory = url =>{
//   fetch(url)
//   .then(res => res.json())
//   .then(data => {
//     let creaturesArrayNonFood = data.data.creatures.non_food
//       console.log(creaturesArrayNonFood[count].name)
//       imgContainer.src = creaturesArrayNonFood[count].image
//       itemCreatureName.innerText = creaturesArrayNonFood[count].name  
//   })
//   .catch(err => {
//     console.log(`error ${err}`)
//   });
//   count++;
//   console.log(count)
// }

function getFetch(){
  fetch(CREATURES_URL)
    .then(res =>res.json()) // parse response as JSON
    .then(data => {
      console.log(data.data)

      let creaturesArrayNonFood = data.data.creatures.non_food
      console.log(creaturesArrayNonFood[count].name)
      imgContainer.src = creaturesArrayNonFood[count].image
      itemCreatureName.innerText = creaturesArrayNonFood[count].name  
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
    count++;
    console.log(count)
}

// const categories = Object.keys(data.data)
      // for(let i = 0; i < categories.length; i++){
      //   const newOption = document.createElement('option')
      //   newOption.value = categories[i]
      //   newOption.innerText = categories[i]
      // }
  