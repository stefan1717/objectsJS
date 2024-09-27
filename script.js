const task1 = "task1"
console.log (task1)

const pet = {
  name: "Бобик",
  type: "пес",
  sound: "гав",
  say: function(text) {
    if (text) {
      return `${this.type} ${this.name} говорит ${text}`;
    } else {
      return `${this.type} ${this.name} говорит ${this.sound}`;
    }
  }
};

// Примеры вызовов:
console.log(pet.say("мяу")); // пес Бобик говорит мяу
console.log(pet.say()); // пес Бобик говорит гав

const task2 = "task2"
console.log(task2)

// Задача 2
const products = {
  "potato": "овощи",
  "carrot": "овощи",
  "banana": "фрукты",
  "orange": "фрукты",
  "apple": "фрукты",
  "strawberry": "ягоды",
  "tomato": "овощи",
  "melon": "фрукты",
  "lemon": "фрукты"
};

function countProductTypes(products) {
  const result = {};
  
  for (const product in products) {
    const type = products[product];
    result[type] = (result[type] || 0) + 1;
  }
  
  return result;
}

// Пример вызова:
console.log(countProductTypes(products));
// Результат: { фрукты: 5, овощи: 3, ягоды: 1 }


const task3 = "task3"
console.log(task3)

// Задача 3
const cars = {
  "Toyota": { color: "белый", country: "Япония", year: 2010 },
  "Ford": { color: "черный", country: "США", year: 2005 },
  "BMW": { color: "синий", country: "Германия", year: 2018 },
  "Audi": { color: "красный", country: "Германия", year: 2015 },
  "Tesla": { color: "серебристый", country: "США", year: 2020 },
  "Honda": { color: "зеленый", country: "Япония", year: 2012 },
  "Hyundai": { color: "серый", country: "Южная Корея", year: 2016 },
  "Nissan": { color: "фиолетовый", country: "Япония", year: 2008 },
  "Kia": { color: "желтый", country: "Южная Корея", year: 2003 },
  "Chevrolet": { color: "голубой", country: "США", year: 2019 }
};

// Сортируем автомобили по году выпуска
const sortedCars = Object.entries(cars).sort((a, b) => b[1].year - a[1].year);

// Самые молодые автомобили
console.log("Три самых молодых автомобиля:");
sortedCars.slice(0, 3).forEach(([name, info]) => {
  console.log(`${name}:`, info);
});

// Самые старые автомобили
console.log("Три самых старых автомобиля:");
sortedCars.slice(-3).forEach(([name, info]) => {
  console.log(`${name}:`, info);
});
