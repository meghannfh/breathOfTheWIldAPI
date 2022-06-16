// DEFINE GLOBAL VARIABLES
const itemName = document.getElementById('itemName')
const itemDescription = document.getElementById('itemDescription')
const imgContainer = document.getElementById('image')
const btnContainer = document.getElementById('btnContainer')
const rightArrow = document.getElementById('arrowRight')
const arrows = document.querySelectorAll('.arrows')

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


const fetchArray = (event) => {
  console.log(event.target.id);
  categoryType = event.target.id;

  fetch(url)
    .then(res => res.json())
    .then(data => {

      /* EXAMPLE
      reduce((total, current) => {
        total[current.name] = current;
        total['blue beetle'] = { 'blue beetle': object key value pairs };
        return total;
      }, [])*/

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
    return categoryType;

    

})
  .catch(err=>console.error(err))

}


btnContainer.addEventListener('click', fetchArray);

const setFirstData = arr => {
  imgContainer.src = arr[0][1].image
  itemName.innerText = arr[0][1].name
  itemDescription.innerText = arr[0][1].description
}

const loopThruArray1 = arr => {
  if(arrowDirection === 'arrowRight'){
    imgContainer.src = arr[count][1].image
    itemName.innerText = arr[count][1].name
    itemDescription.innerText = arr[count][1].description
    count = (count+1)%(arr.length)
  }else if(arrowDirection === 'arrowLeft'){
    imgContainer.src = arr[count][1].image
    itemName.innerText = arr[count][1].name
    itemDescription.innerText = arr[count][1].description
    count = (count-1)%(arr.length)
  }
}

const getArrowId = (event) => {
  arrowDirection = event.target.id
  loopThruArray1(currentArr)
}

arrows.forEach((arrow) => {
  arrow.addEventListener('click', getArrowId)
})
