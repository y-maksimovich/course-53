// Создал переменную
// let username = "Юрий"
// username = "Юрий Максимович"

// Создал переменную для фамилии
// let surname = "Каграманян"

// Вывел имя пользователя
// alert(`Hello, ${username}!`)


// console.log(username + surname)



// let bestTeacher = true

// console.log(bestTeacher)





function sum(a, b) {
    let c = a + b
    return c
}

function calcSum() {
    let x = document.getElementsByName("x")[0].value
    let y = document.getElementsByName("y")[0].value

    let z = Number(x) + Number(y)

    let result = document.getElementById("calcResult")
    result.innerHTML = "Результат: " + z
}

function calcDiv() {
    let x = document.getElementsByName("x")[0].value
    let y = document.getElementsByName("y")[0].value
    let z

    if(y != 0) {
        z = Number(x) / Number(y)
    } else {
        z = "На ноль делить нельзя"
    }

    let result = document.getElementById("calcResult")
    result.innerHTML = "Результат: " + z
}

// a = 10
// b = 20
// a = b

// a == b

// Логические операторы:
// a > b больше
// a < b меньше
// a >= b 
// a <= b
// a == b равно
// a != b не равно

function codeDetector() {
    let country = document.getElementsByName("country")[0].value
    let input = document.getElementsByName("phone")[0]

    if (country == "none") {
        input.value = "Вы не выбрали страну"
    } else if(country == "uz") {
        input.value = "+998"
    } else if(country == "ru") {
        input.value = "+7"
    } else if(country == "usa") {
        input.value = "+1"
    } else {
        input.value = "Ты сотворил что-то невероятное"
    }
}


    // if (country == "none") {
    //     input.value = "Вы не выбрали страну"
    // } else {
    //     if (country == "uz") {
    //         input.value = "+998"
    //     } else {
    //         if(country == "ru") {
    //             input.value = "+7"
    //         } else {
    //             input.value = "+1"
    //         }
    //     }
    // }


    // if (country == "none") {
    //     input.value = "Вы не выбрали страну"
    // }

    // if (country == "uz") {
    //     input.value = "+998"
    // }

    // if (country == "ru") {
    //     input.value = "+7"
    // }

    // if (country == "usa") {
    //     input.value = "+1"
    // }

    
function courseCalculator() {
    // let courseName = document.getElementsByName("course")[0].value
    // let courseName = document.querySelector("#courseSelect").value
    // let courseName = document.querySelectorAll(".courseForm label")

    let courseName = document.getElementById("courseSelect").value
    const PYTHON_PRICE = 9000000
    const FRONTEND_PRICE = 11000000
    const DA_PRICE = 14000000
    let basicPrice

    if(courseName == "none") {
        basicPrice = 0
    } else if(courseName == "python") {
        basicPrice = PYTHON_PRICE
    } else if(courseName == "frontend") {
        basicPrice = FRONTEND_PRICE
    } else if(courseName == "da") {
        basicPrice = DA_PRICE
    }

    let discount = document.getElementsByName("discountRange")[0].value
    let discountValue = document.getElementById("discountValue")
    discountValue.innerHTML = discount + "%"

    let sum = basicPrice/100*(100-discount)

    let resultInput = document.getElementById("courseSum")
    resultInput.value = sum
}

function activateButton() {
    let confirm = document.getElementById("confirm").checked
    let btn = document.querySelector(".dynamicForm button")
    if(confirm) {
        // Подтверждено
        btn.disabled = false
    } else {
        // Не подтверждено
        btn.disabled = true
    }
}



function activatePlan() {
    let disableBtn = document.querySelector('.plan.active')
    disableBtn.classList.remove('active')

    let activeBtn = event.target
    activeBtn.classList.add('active')
}


function calculate() {
    let a = +document.getElementsByName("num1")[0].value
    let b = +document.getElementsByName("num2")[0].value

    let btn = event.target
    let param = btn.innerHTML
    let c 

    // if(param == "+") {
    //     c = a + b
    // } else if(param == "-") {
    //     c = a - b
    // } else if(param == "*") {
    //     c = a * b
    // } else if(param == "^") {
    //     c = a ** b
    // } else if(param == "/") {
    //     c = a / b
    // }
    
    switch (param) {
        case "+":
            c = a + b
            break;
        case "-":
            c = a - b
            break;
        case "*":
            c = a * b
            break;
        case "^":
            c = a ** b
            break;
        case "/":
            c = a / b
            break;
    
        default:
            c = "Я не умею такое считать"
            break;
    }

    let res = document.getElementById('calculation')
    res.innerHTML = `Результат: ${c}`
}


let students = ["Асилбек", "Асадбек", "Амир"]
students.push("Альберт")
students.push("Азамат")
students.push("Максим")
showList()

function addStudent() {
    let studentName = document.getElementsByName('studentName')[0].value
    students.push(studentName)
    showList()
}

function removeStudent() {
    let studentName = document.getElementsByName('studentName')[1].value
    let ind = students.findIndex((elem) => elem == studentName)
    if(ind != -1) {
        // Студент найден
        students.splice(ind, 1)
    }
    showList()
}

function changeStudent() {
    let oldName = document.getElementsByName('oldName')[0].value
    let ind = students.findIndex((elem) => elem == oldName)
    if(ind != -1) {
        // Студент найден
        let newName = document.getElementsByName('newName')[0].value
        students[ind] = newName
    }
    showList()
}


function showList() {
    let ul = document.querySelector("#studentsList")
    ul.innerHTML = ""
    for(let i = 0; i < students.length; i++) {
        let line = `<li>${students[i]}</li>`
        ul.innerHTML = ul.innerHTML + line
    }
}


