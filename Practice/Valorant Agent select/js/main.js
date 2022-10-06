//buttons
document.querySelector('button').addEventListener('click', getYourAgent)
document.querySelector('button.weapons').addEventListener('click', getYourWeapon)

function getYourAgent(){
  const choice = document.querySelector('button')
  console.log(choice)
  const url = `https://valorant-api.com/v1/agents`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let randomGen = Math.floor(Math.random()*20)
        console.log(data.data[randomGen].displayName)
        document.querySelector('h2').innerText = data.data[randomGen].displayName
        document.querySelector('img').src = data.data[randomGen].displayIcon

        //agent for DUO
        document.querySelector('button.duo').addEventListener('click', getDuoAgent)
        function getDuoAgent() {
           const choice2 = document.querySelector('button.duo')    
            console.log(choice2)
            let randomGenDuo = Math.floor(Math.random()*20)
            if (randomGen === randomGenDuo) {
              randomGenDuo = Math.floor(Math.random()*20)
            }else {
              document.querySelector('button.duo + h2').innerText = (data.data[randomGenDuo].displayName)
              document.querySelector('img.duo').src = (data.data[randomGenDuo].displayIcon)
            }
        }
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//Hard mode/weapon selection
function getYourWeapon(){
  const choice = document.querySelector('button.weapons')
  console.log(choice)
  const url = 'https://valorant-api.com/v1/weapons'
  
  fetch(url)
    .then(res => res.json())
    .then (data => {
      console.log(data)
      let randomGen = Math.floor(Math.random()*18)
      document.querySelector('section.weapons h2').innerText = data.data[randomGen].displayName
      document.querySelector('section.weapons img').src = data.data[randomGen].displayIcon

      //sidearms index of 7-11
      let randomGenSidearm = Math.floor(Math.random() * (12 - 7) + 7 )
      console.log(randomGenSidearm)
    })
}



