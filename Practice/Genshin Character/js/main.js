//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('button').value
  console.log(choice)
  const url = `https://genshinlist.com/api/characters`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let indexOfCharacter = Math.floor(Math.random()*25)
        console.log(data[indexOfCharacter])
        document.querySelector('h2').innerText = data[indexOfCharacter].name
        document.querySelector('p').innerText = data[indexOfCharacter].description
        document.querySelector('span').innerText = data[indexOfCharacter].birthday


      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

