
let saveInfo = document.getElementById("saveInfo")

let Dogs = []

function saveDog () {
    let dog = {}
    dog.fName = document.getElementById("firstName").value
    dog.lName = document.getElementById("lastName").value
    dog.gender = document.getElementById("gender").value
    dog.colour = document.getElementById("colour").value
    dog.availableFrom = document.getElementById("availableFrom").value
    dog.shots = document.getElementById("shots").value
    dog.chipped = document.getElementById("chipped").value
    dog.breed = document.getElementById("breed").value
    dog.temprament = document.getElementById("temprament").value
    console.log(dog)
    Dogs.push(dog)
    renderDog(dog)
    localStorage.setItem("Dogs",JSON.stringify(Dogs))
}

Dogs = JSON.parse(localStorage.getItem("Dogs")) 
if (Dogs==null){
    Dogs=[]
}
renderDogs()

function renderDogs() {
    document.getElementById("boxes").innerHTML=""
    for (let i=0; i<Dogs.length; i++) {
        renderDog(Dogs[i],i)
    }
}

function renderDog(dog,i) {
    let box = document.createElement("div")
    box.className="box"
    document.getElementById("boxes").appendChild(box)
   
    let fName = document.createElement("h2")
    box.appendChild(fName)
    fName.innerText = dog.fName

    let lName = document.createElement("h3")
    box.appendChild(lName)
    lName.innerText = dog.lName

    let colour = document.createElement("p")
    box.appendChild(colour)
    colour.innerText = dog.colour

    let availableFrom = document.createElement("p")
    box.appendChild(availableFrom)
    availableFrom.innerText = dog.availableFrom

    let shots = document.createElement("p")
    box.appendChild(shots)
    shots.innerText = dog.shots

    let chipped = document.createElement("p")
    box.appendChild(chipped)
    chipped.innerText = dog.chipped

    let breed = document.createElement("p")
    box.appendChild(breed)
    breed.innerText = dog.breed

    let temprament = document.createElement("p")
    box.appendChild(temprament)
    temprament.innerText = dog.temprament

    let deleteButton = document.createElement("button")
    box.appendChild(deleteButton)
    deleteButton.innerText="Remove"

    deleteButton.addEventListener("click", removeDog)
    deleteButton.dataset.catalogue=i

    let updateButton = document.createElement("button")
    box.appendChild(updateButton)
    updateButton.innerText="Update"

    updateButton.addEventListener("click", updateDog)
    updateDog.dataset.catalogue=1
}

function removeDog(e) {
    let button=e.target
    let i=button.dataset.catalogue
    Dogs.splice(i,1)
    renderDogs ()
    localStorage.setItem("Dogs",JSON.stringify(Dogs))
}

function updateDog(e) {
    let button=e.target
    Dogs.update


}