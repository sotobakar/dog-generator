const { forEach } = require("lodash");

const randomShibe=document.querySelector('#shibeGenerator');
const dogImages=document.querySelector('.dog-grid').children;
const dogGrid = document.querySelector('.dog-grid')
const breedSelector = document.querySelector('.breed-selector')
randomShibe.addEventListener('click', async function(){
  const dogSelect = document.querySelector('.dog-selector')
  const dogNumber = dogSelect.options[dogSelect.selectedIndex].value;
  console.log(dogNumber);
  const response = await fetch(`https://dog.ceo/api/breeds/image/random/${dogNumber}`);
  const responseJson = await response.json();
  dogGrid.innerHTML = "";
  for(i=0;i<responseJson.message.length;i++){
    let dogBox = document.createElement('img');
    dogBox.src = `${responseJson.message[i]}`;
    dogBox.height = 200;
    dogBox.width = 175;
    dogBox.classList.add("border-warning","rounded","mb-1","mx-1")
    dogGrid.appendChild(dogBox);
  }
})

async function loadDogOptions(){
  const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
  const responseJson = await response.json();
  const dogKeys = Object.keys(responseJson.message)
  for(i=0;i<dogKeys.length;i++){
    let dogOption = document.createElement('option');
    dogOption.value = dogKeys[i];
    dogOption.textContent = dogKeys[i];
    dogOption.style.textTransform = "capitalize";

    breedSelector.appendChild(dogOption);
  }
  console.log(Object.keys(responseJson.message))
}

const randomBreed = document.querySelector('#breedGenerator');
const breedGrid = document.querySelector('.breed-grid');
randomBreed.addEventListener('click', async function(){
  const breedSelect = breedSelector.options[breedSelector.selectedIndex].value;
  const response = await fetch(`https://dog.ceo/api/breed/${breedSelect}/images/random`)
  const responseJson = await response.json();
  breedGrid.innerHTML = "";
  let breedImage = new Image();
  breedImage.src = `${responseJson.message}`;
  breedImage.height = 400;
  breedImage.width = 400;
  breedImage.classList.add("border-warning","rounded","mb-4","mx-1")
  breedGrid.appendChild(breedImage);
})

document.addEventListener('DOMContentLoaded', loadDogOptions());