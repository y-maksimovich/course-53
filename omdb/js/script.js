checkTheme()

document.getElementById('changeBtn').addEventListener('click', changeTheme)

function changeTheme() {
    let changeBtn = document.getElementById('changeBtn')
    changeBtn.classList.toggle('active')
    
    let body = document.querySelector('body')
    body.classList.toggle('dark')

    if(body.classList.contains('dark')) {
        //Тёмная тема
        localStorage.setItem('theme', 'dark')
    } else {
        // светлая тема
        localStorage.setItem('theme', 'white')
    }
}

function checkTheme() {
    let theme = localStorage.getItem('theme')
    if(theme == "dark") {
        let changeBtn = document.getElementById('changeBtn')
        changeBtn.classList.add('active')
        
        let body = document.querySelector('body')
        body.classList.add('dark')
    }
}
