const itemCreatureName = document.getElementById('itemCreatureName')
const itemCreatureDescription = document.getElementById('itemCreatureDescription')
const infoContainer = document.getElementById('infoContainer')
const imgContainer = document.getElementById('image')
const randomShuffle = document.getElementById('randomBtn')
const btnContainer = document.getElementById('btnContainer')
let searchValue =''
let count = 0;
// let entry = document.getElementById('searchAll').value

const urlAll = `https://botw-compendium.herokuapp.com/api/v2/entry/${searchValue}`;
const url = `https://botw-compendium.herokuapp.com/api/v2/all`;


const fetchArray = (event) => {
  console.log(event.target.id);
  categoryType = event.target.id

  fetch(url)
    .then(res => res.json())
    .then(data => {

      // TURNING ARRAY INTO NAME-BASED ARRAY OF FOOD ITEMS
      const foodNumbers = data.data.creatures.food;
      let foodNames = foodNumbers.reduce((acc, cur) => {
        acc[cur.name] = cur;
        return acc;
      }, []);
      foodNames = Object.entries(foodNames).sort()
      console.table(foodNames)

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

  switch (categoryType){
    case 'creaturesFood':
      setFirstData(foodNames);
      break;
    case 'creaturesNonFood':
      setFirstData(nonfoodNames);
      break;
    case 'equipment':
      setFirstData(equipmentNames);
      break;
    case 'materials':
      setFirstData(materialNames);
      break;
    case 'monsters':
      setFirstData(monsterNames);
      break;
    case 'treasure':
      setFirstData(treasureNames);
      break;
  }
  return categoryType

  /* EXAMPLE
      reduce((total, current) => {
        total[current.name] = current;
        total['blue beetle'] = { 'blue beetle': object key value pairs };
        return total;
      }, [])

  */

})
  .catch(err=>console.error(err))

}

btnContainer.addEventListener('click', fetchArray);

const setFirstData = arr => {
  imgContainer.src = arr[0][1].image
  itemCreatureName.innerText = arr[0][1].name
  itemCreatureDescription.innerText = arr[0][1].description
}
//hopefully this will use the array that is passed thru during
//fetchArray()
//and then we should use this function to loop through the
//selected array on click of > button (I haven't put one in yet)
const loopThruArray = arr => {
  imageContainer.src = arr[count][1].image
  count = (count+1)%(arr.length)
}
