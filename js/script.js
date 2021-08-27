const jsSwitch = document.querySelector('.subscription-component-toggle-switch')

const basic = document.querySelector('#basicSubscriptionPrice')
const professional = document.querySelector('#professionalSubscriptionPrice')
const master = document.querySelector('#masterSubscriptionPrice')

const changePrice = () =>{
    if(jsSwitch.checked){
        basic.innerHTML = "&dollar;19.99"
        professional.innerHTML = "&dollar;24.99"
        master.innerHTML = "&dollar;39.99"
    } else{
        basic.innerHTML = "&dollar;199.99"
        professional.innerHTML = "&dollar;249.99"
        master.innerHTML = "&dollar;399.99"
    }
}

jsSwitch.addEventListener('change', changePrice)
