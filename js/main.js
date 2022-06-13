const itemName = document.getElementById('itemName')
const itemDescription = document.getElementById('itemDescription')
const imgContainer = document.getElementById('image')
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

})
  .catch(err=>console.error(err))

}

btnContainer.addEventListener('click', fetchArray);

const setFirstData = arr => {
  imgContainer.src = arr[0][1].image
  itemName.innerText = arr[0][1].name
  itemDescription.innerText = arr[0][1].description
}

const loopThruArray = arr => {
  imgContainer.src = arr[count][1].image
  itemName.innerText = arr[count][1].name
  count = (count+1)%(arr.length)
}
