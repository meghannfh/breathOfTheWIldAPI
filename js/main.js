//Example fetch
document.querySelector('button').addEventListener('click', getFetch)
const itemCreatureName = document.getElementById('itemCreatureName')
const itemCreatureDescription = document.getElementById('itemCreatureDescription')
const infoContainer = document.getElementById('infoContainer')
const img = document.getElementById('image')

function getFetch(){
let entry = document.querySelector('input').value
console.log(entry)
  const url = `https://botw-compendium.herokuapp.com/api/v2/entry/${entry}`;
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        console.log(data.data.image)

        img.src = data.data.image
        itemCreatureName.innerText = data.data.name
        itemCreatureDescription.innerText = data.data.description

        infoContainer.classList.add('show')
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
