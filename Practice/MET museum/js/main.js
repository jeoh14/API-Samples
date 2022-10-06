//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const objectID = document.querySelector('input').value.toLowerCase()
  const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('span').innerText = data.GalleryNumber
        document.querySelector('h2').innerText = data.objectName

        document.querySelector('h3').innerText = data.artistDisplayName
        // if (data.artistDisplayName == ''){
        //   document.querySelector('h3') = ''
        //   console.log('work')
        // }else {
        //   document.querySelector('h3').innerText = 'Artist: ' + data.artistDisplayName
        // }


        document.querySelector('img').src = data.primaryImage
        if (data.primaryImage == '') {
          document.querySelector('p').innerText = 'Image Unavaliable'
        } else {
          document.querySelector('img').src = data.primaryImage
          document.querySelector('p').innerText = ''
        }

        document.querySelector('h4').innerText = 'Credit Line: '+ data.creditLine
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

