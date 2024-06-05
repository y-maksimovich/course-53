// Создал переменную
// let username = "Юрий"
// username = "Юрий Максимович"

// Создал переменную для фамилии
// let surname = "Каграманян"

// Вывел имя пользователя
// alert(`Hello, ${username}!`)


console.log(username + surname)



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
