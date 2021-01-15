fetchDogInfo();
addEventListeners();

let dogBreeds;
let dogUl = document.getElementById("dog-breeds")

function fetchDogInfo() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(res => res.json())
    .then(dogImages => loadDogImages(dogImages) );

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then((json) => {
        loadDogBreeds(json);  
        dogBreeds = json;
    });
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

function loadDogBreeds(dogBreeds, letter=null) {
    if (letter) {
        clearBreedList();
        for(const breed in dogBreeds.message){
            if (breed.charAt(0) == letter) {
                renderBreed(breed);            
            }
        }
    } 
    else {
        for(const breed in dogBreeds.message){
            renderBreed(breed);
        } 
    }
}

function clearBreedList() {
    while(dogUl.firstChild){
        dogUl.removeChild(dogUl.firstChild);
    }
}

function renderBreed(breed) {
    let dogLi = document.createElement("li");
    dogLi.setAttribute("class", "breed-li")
    dogLi.innerText = breed;
    dogUl.appendChild(dogLi);
    changeColorOnClick(dogLi)
}

function changeColorOnClick(dogLi) {
    dogLi.addEventListener("click", function() {
        dogLi.style.color = "red";
    })
}

function addEventListeners() {
    let sortInput = document.getElementById("breed-dropdown");
    sortInput.addEventListener("change", function(e){
        loadDogBreeds(dogBreeds, e.target.value)
    })
}   