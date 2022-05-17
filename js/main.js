//Example fetch
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
let entry = document.querySelector('input').value
console.log(entry)
  const url = `https://botw-compendium.herokuapp.com/api/v2/entry/${entry}`;
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.data.image)
        document.getElementById('image').src = data.data.image
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}