const itemCreatureName = document.getElementById('itemCreatureName')
const itemCreatureDescription = document.getElementById('itemCreatureDescription')
const infoContainer = document.getElementById('infoContainer')
const imgContainer = document.getElementById('image')
const randomShuffle = document.getElementById('randomBtn')
const btnContainer = document.getElementById('btnContainer')
let categoryType;
let count = 0;
// let entry = document.querySelector('input').value

const CREATURES_URL = 'https://botw-compendium.herokuapp.com/api/v2'
  // const url = `https://botw-compendium.herokuapp.com/api/v2/entry/${entry}`;

fetch(CREATURES_URL)
.then(res => res.json())
.then(data => {
  const categories = Object.keys(data.data)
      for(let i = 0; i < categories.length; i++){
        const newBtn = document.createElement('button');

        newBtn.value = categories[i]
        newBtn.innerText = categories[i]
        btnContainer.appendChild(newBtn)
        console.log(newBtn.value)
      }
      
    })
.catch(err => {
  console.log(`error ${err}`)
});

const onClick = (event) => {
  console.log(event.target.value);
  categoryType = event.target.value
  let CATEGORY_URL = `https://botw-compendium.herokuapp.com/api/v2/category/${categoryType}`
  console.log(CATEGORY_URL)
  testFetch(CATEGORY_URL)
  return categoryType
  //getData(CATEGORY_URL)
}

btnContainer.addEventListener('click', onClick);

const testFetch = CATEGORY_URL => {
  fetch(CATEGORY_URL)
.then(res => res.json())
.then(data => {
  let categoryArray = data.data
  console.log(categoryArray[count].image)
  imgContainer.src = categoryArray[count].image
})
.catch(err => {
  console.log(`error ${err}`);
})
}

// randomShuffle.addEventListener('click', getData);

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
  