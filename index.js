

// Level 2 *
// 1. Отфильтруйте массив, удалив все нули. Преобразуйте результат в строку.


let array = [3,0,2,56,7,0,0,2,4,6,7,9,0,0,0,4,5,0,7];
let array_filtered = array.filter(function(arr) {return arr});
let array_string = array_filtered.join()
console.log (array_string);






//=======================================================================================================================================





// 3. Напишите функцию перевода строки в верблюжий регистр




let stringtask3 = 'Freshcode homework task3 camelcase example string'

function CamelCase(string) {
    let finish_string = "";
    string.split(" ").forEach(function (i, index) {
        let plus = i.toLowerCase();
        finish_string += (index === 0 ? plus : plus[0].toUpperCase() + plus.slice(1));
    });
    return finish_string;
}

console.log(CamelCase(stringtask3));




//=======================================================================================================================================



// 4. Проверьте является ли слово палиндромом (например "abcddcba")


let stringtask4 = 'TENET';


function palindrome(string) {  
    return string === string.split('').reverse().join('');
  }

console.log(palindrome(stringtask4));






//=======================================================================================================================================





// 5. Создайте и опишите объект worker. добавьте в него следующие функции(встроенные методы) : 
// вывести ФИО, начислять доплату 5% если выслуга лет больше 5 лет 
// и 10% если выслуга лет больше 8 лет


function Worker(full_name, duration_of_work, salary){
    this.showFull_name = function() {
        alert ("ФИО: " + full_name );
    };
    this.showBonus = function() {
        if (duration_of_work > 10) {
            alert ("Зарплата: " + (salary * 1.1));
        }else if (duration_of_work > 5) {
            alert ("Зарплата: " + (salary * 1.05));
        }else {
            alert ("Зарплата: " + salary);
    }
}
}

let vasiliy = new Worker("Пупкин Василий Иванович", 8, 14000);

vasiliy.showFull_name();
vasiliy.showBonus();




//===============================================================================================================================




// 6. Перепишите предыдущее задание5 на класс

class Worker {
    constructor(full_name, duration_of_work, salary){
        this.full_name = full_name;
        this.duration = duration_of_work;
        this.salary = salary;
    }
    showFull_name(){
        alert("ФИО: " + this.full_name );
    }
    showBonus(){
        if (this.duration > 10) {
            alert ("Зарплата: " + (this.salary * 1.1));
        }else if (this.duration > 5) {
            alert ("Зарплата: " + (this.salary * 1.05));
        }else {
            alert ("Зарплата: " + this.salary);
    }
}
}

let pupkin = new Worker("Пупкин Василий Иванович", 8, 14000);

pupkin.showFull_name();
pupkin.showBonus();








// =======================================================================================================================================







//2. Создайте карту map для списка пользователей. 
//Каждый пользователь представляет собой отдельный объект со свойствами id, name, surname. 
//В качестве ключа выбрать id  


let user1 = {
    id: "1",
    name:"Vasiliy",
    surname: "Pupkin",
}

let user2 = {
    id: "2",
    name:"John",
    surname: "Walker",
}

let users = new Map();
users.set = (Object.entries(user1));
users.set = (Object.entries(user2));

//users.set = (Object.entries(user1(id, {name, surname})));
//users.set = (Object.entries(user2(id, {name, surname})));

console.log (users);