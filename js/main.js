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

  // TURNING ARRAY INTO NAME-BASED ARRAY OF EQUIPMENT ITEMS
  const equipmentNumbers = data.data.equipment
  let equipmentNames = equipmentNumbers.reduce((acc, cur) => {
    acc[cur.name] = cur;
    return acc;
  }, [])
  console.log(equipmentNames)

  //TURNING ARRAY INTO NAME-BASED ARRAY OF MATERIAL ITEMS
  const materialNumbers = data.data.materials
  let materialNames = materialNumbers.reduce((acc, cur) => {
    acc[cur.name] = cur;
    return acc;
  }, [])
  console.log(materialNames)

  //TURNING ARRAY INTO NAME-BASED ARRAY OF MONSTERS ITEMS
  const monsterNumbers = data.data.monsters
  let monsterNames = monsterNumbers.reduce((acc, cur)=> {
    acc[cur.name] = cur;
    return acc;
  }, [])
  console.log(monsterNames)

  //TURNING ARRAY INTO NAME-BASED ARRAY OF TREASURE ITEMS
  const treasureNumbers = data.data.treasure
  let treasureNames = treasureNumbers.reduce((acc, cur) => {
    acc[cur.name] = cur;
    return acc;
  }, [])
  console.log(treasureNames)

  /* EXAMPLE
      reduce((total, current) => {
        total[current.name] = current;
        total['blue beetle'] = { 'blue beetle': object key value pairs };
        return total;
      }, [])

  */

})
.catch(err=>console.error(err))


const fetchArray = (event) => {
  console.log(event.target.id);
  categoryType = event.target.id
  // let CATEGORY_URL = `https://botw-compendium.herokuapp.com/api/v2/category/${categoryType}`
  // testFetch(CATEGORY_URL)


  //grab id of the target element that is clicked and pass the
  //appropriate array into param of loopThruArray()
  //this can be made into switch statement I'm sure
  if(categoryType === 'creaturesFood'){
    loopThruArray(foodNames)
  }
  if(categoryType === 'creaturesNonFood'){
    loopThruArray(nonfoodNames)
  }
  if(categoryType === 'equipment'){
    loopThruArray(equipmentNames)
  }
  if(categoryType === 'materials'){
    loopThruArray(materialNames)
  }
  if(categoryType === 'monsters'){
    loopThruArray(monsterNames)
  }
  if(categoryType === 'treasure'){
    loopThruArray(treasureNames)
  }
  return categoryType
}

btnContainer.addEventListener('click', fetchArray);

//hopefully this will use the array that is passed thru during
//fetchArray()
//and then we should use this function to loop through the
//selected array on click of > button (I haven't put one in yet)
const loopThruArray = arr => {

}



//originally used this to fetch url of clicked
// const testFetch = url => {
//   fetch(url)
// .then(res => res.json())
// .then(data => {
//   let categoryArray = data.data
//   console.log(categoryArray[count].image)
//   imgContainer.src = categoryArray[count].image
//   itemCreatureName.innerText = categoryArray[count].name
//   itemCreatureDescription.innerText = categoryArray[count].description
// })
// .catch(err => {
//   console.log(`error ${err}`);
// })
// }

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

// function getFetch(){
//   fetch(CREATURES_URL)
//     .then(res =>res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data.data)

//       let creaturesArrayNonFood = data.data.creatures.non_food
//       console.log(creaturesArrayNonFood[count].name)
//       imgContainer.src = creaturesArrayNonFood[count].image
//       itemCreatureName.innerText = creaturesArrayNonFood[count].name  
//     })
//     .catch(err => {
//       console.log(`error ${err}`)
//     });
//     count++;
//     console.log(count)
// }
  