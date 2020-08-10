const { forEach } = require("lodash");

const randomShibe=document.querySelector('#shibeGenerator');
const dogImages=document.querySelector('.dog-grid').children;
randomShibe.addEventListener('click', async function(){
  const dogSelect = document.querySelector('.dog-selector')
  const dogNumber = dogSelect.options[dogSelect.selectedIndex].value;
  console.log(dogNumber);
  const response = await fetch(`https://dog.ceo/api/breeds/image/random/${dogNumber}`);
  const responseJson = await response.json();
  for(i=0;i<responseJson.message.length;i++){
    dogImages[i].src = responseJson.message[i];
  }
})

async function loadDogs(){
  
}