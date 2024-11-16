// 初始動物列表
const initialAnimals = [
    "Cat", "Dog", "Elephant", "Fish", "Gorilla", 
    "Monkey", "Turtle", "Whale", "Alligator", "Donkey", "Horse"
];

function search_animal() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let x = document.getElementsByClassName('animals'); 
    
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = x[i].innerHTML.toLowerCase().includes(input) ? "list-item" : "none"; 
    }
}

function checkEnter(event) {
    if (event.key === "Enter") {
        search_animal();
    }
}

// CRUD 
function addAnimal() {
    let newAnimal = prompt("新的動物名稱:");
    if (newAnimal) {
        let list = document.getElementById('list');
        let li = document.createElement("li");
        li.className = "animals";
        li.innerText = newAnimal;
        
        li.addEventListener("click", function() {
            deleteAnimal(this);
        });

        list.appendChild(li);
    }
}

// 更新
function deleteAnimal(animalItem) {
    animalItem.remove();
}

document.querySelectorAll('.animals').forEach(animal => {
    animal.addEventListener("click", function() {
        deleteAnimal(this);
    });
});

function resetSearch() {
    document.getElementById('searchbar').value = ""; 
    
    let list = document.getElementById('list');
    list.innerHTML = '';  // 清空現有列表
    
    initialAnimals.forEach(animal => {
        let li = document.createElement("li");
        li.className = "animals";
        li.innerText = animal;
        
        li.addEventListener("click", function() {
            deleteAnimal(this);
        });
        
        list.appendChild(li);
    });
}
