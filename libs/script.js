let buttonBox = document.querySelector('.button__box')
let onlineUsers = document.querySelector('.online__users')
let numUsers = document.querySelector('.number__user')



// buttonBox

buttonBox.addEventListener('click', function () {
    this.style.boxShadow = "0 0 100px 0 #8e3a7f"
})
buttonBox.addEventListener('mouseout', function () {
    this.style.boxShadow = "0 0 0 0"
})

// buttonBox

numUsers.innerHTML = "..."
setTimeout(() => {
    numUsers.innerHTML = 597
    numUsers.style.color = 'rgb(98, 189, 98)'
    numUsers.style.textShadow = '0 0 10 0 rgb(98, 189, 98)'
}, 3000);







let payIn = document.querySelector('.pay__in')


let cards = document.querySelector('.cards')
let card = document.querySelectorAll('.card')

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', () => {
       
       for (let k = 0; k < card.length; k++) {
           
        card[k].classList.remove('active')
           
           
       }
       
        card[i].classList.add('active')
    })
   }

let payLayer = document.querySelector('.pay__title')
let payings = document.querySelector('.paying__layers')
let vacansy = document.querySelector('.vacansy')

payLayer.addEventListener('click', function () {
    this.style.background = 'unset'
    payings.style.color = '#fff'
    vacansy.style.color = '#fff'
    setTimeout(() => {
        location.reload()
    }, 2000);
})


let moneyMenu = document.querySelector('.pay__in')
let paymentTable = document.querySelector('.payment')

paymentTable.style.transition = '.3s'

moneyMenu.addEventListener('click', function () {
    paymentTable.style.transform = 'scale(1)'
})

let closeX = document.querySelector('.box__close')

closeX.addEventListener('click', function () {
    paymentTable.style.transform = 'scale(0)'
})

let mainLoc = document.querySelector('.main__page')







// SHIT
let bonus = document.querySelector('.bonus')
let bonusCall = document.querySelector('.gift__call')
let bonusClose = document.querySelector('.box__close2')

bonusCall.addEventListener('click', function () {
    bonus.style.transform = 'scale(1)'
})
bonusClose.addEventListener('click', function () {
    bonus.style.transform = 'scale(0)'
})

