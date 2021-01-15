console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchDogInfo() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(dogImages => loadDogImages(dogImages) );

    fetch(breedUrl)
    .then(res => res.json())
    .then(dogBreeds => loadDogBreeds(dogBreeds) );
}


function loadDogImages(dogImages) {
    let dogDiv = document.getElementById("dog-image-container");
    let dogUl = document.createElement("ul");
    dogDiv.appendChild(dogUl);
    
    dogImages.message.forEach(img => {
        let dogLi = document.createElement("li");
        dogLi.innerHTML = `<img src=${img} alt="Dog">`;
        dogUl.appendChild(dogLi);
    }); 
}

function loadDogBreeds(dogBreeds, letter) {
    let dogUl = document.getElementById("dog-breeds")
    for(const breed in dogBreeds.message){
        let dogLi = document.createElement("li");
        dogLi.innerText = breed;
        dogUl.appendChild(dogLi);
        changeColorOnClick(dogLi)
    }; 
}

function changeColorOnClick(dogLi) {
    dogLi.addEventListener("click", function() {
        dogLi.style.color = "red";
    })
}

function sortBreeds() {
    let sortInput = document.getElementById("breed-dropdown");
    sortInput.addEventListener("click", function(e) {
        if (sortInput.value === "a") {
            //only show a dogs
        }
        if (sortInput.value === "b") {
            //only show a dogs
        }
        if (sortInput.value === "c") {
            //only show a dogs
        }
        if (sortInput.value === "d") {
            //only show a dogs
        }
        //let letter = e.target.value;
    })
}

const list = document.querySelector('#breed-dropdown')
  list.addEventListener('change', function(e) {
        const dogBreeds = lipl.querySelectorAll('li')
            breed.charAt(0) === e.target.value
            console.log(breed)
            console.log(e.target.value)
        })
    })

document.addEventListener("DOMContentLoaded", function() {
    fetchDogInfo();
  });