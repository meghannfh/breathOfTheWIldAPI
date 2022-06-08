const itemCreatureName = document.getElementById('itemCreatureName')
const itemCreatureDescription = document.getElementById('itemCreatureDescription')
const infoContainer = document.getElementById('infoContainer')
const imgContainer = document.getElementById('image')
const randomShuffle = document.getElementById('randomBtn')
const btnContainer = document.getElementById('btnContainer')
let searchValue =''
let count = 0;
// let entry = document.getElementById('searchAll').value

// const CREATURES_URL = 'https://botw-compendium.herokuapp.com/api/v2'
const urlAll = `https://botw-compendium.herokuapp.com/api/v2/entry/${searchValue}`;
const url = `https://botw-compendium.herokuapp.com/api/v2/all`;





fetch(url)
.then(res => res.json())
.then(data => {
  console.log(data.data)


  // TURNING ARRAY INTO NAME-BASED ARRAY OF FOOD ITEMS
  const foodNumbers = data.data.creatures.food;
  let foodNames = foodNumbers.reduce((acc, cur) => {
    acc[cur.name] = cur;
    return acc;
  }, []);
  // NEED TO FIGURE OUT HOW TO SORT ALPHABETICALLY
  foodNames = foodNames.sort((a, b) => a['name'].localeCompare(b['name']));
  console.log(foodNames);

  // TURNING ARRAY INTO NAME-BASED ARRAY OF NON-FOOD ITEMS
  const nonfoodNumbers = data.data.creatures.non_food;
  let nonfoodNames = nonfoodNumbers.reduce((acc, cur) => {
    acc[cur.name] = cur;
    return acc;
  }, []);
  nonfoodNames = nonfoodNames.sort((a, b) => a.name.localeCompare(b.name));
  console.log(nonfoodNames);


  /* EXAMPLE
      reduce((total, current) => {
        total[current.name] = current;
        total['blue beetle'] = { 'blue beetle': object key value pairs };
        return total;
      }, [])

  */

})
.catch(err=>console.error(err))

const onClick = (event) => {
  console.log(event.target.id);
  categoryType = event.target.id
  let CATEGORY_URL = `https://botw-compendium.herokuapp.com/api/v2/category/${categoryType}`
  console.log(CATEGORY_URL)
  testFetch(CATEGORY_URL)
  return categoryType
  //getData(CATEGORY_URL)
}

btnContainer.addEventListener('click', onClick);

const testFetch = url => {
  fetch(url)
.then(res => res.json())
.then(data => {
  let categoryArray = data.data
  console.log(categoryArray[count].image)
  imgContainer.src = categoryArray[count].image
  itemCreatureName.innerText = categoryArray[count].name
  itemCreatureDescription.innerText = categoryArray[count].description
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
  