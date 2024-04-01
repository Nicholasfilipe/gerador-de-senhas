const sliderElement = document.querySelector("#slider")
const button = document.querySelector("#button")

const sizePassword = document.querySelector("#valor")
const password = document.querySelector("#password")
const containerPassword = document.querySelector("#container-password")


let charset ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$&"
let newPassword = ""
sizePassword.innerHTML = sliderElement.value

slider.oninput = function() {
 sizePassword.innerHTML= this.value
}

function generatePassword (){
    let pass =''
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n))
        
    }
    containerPassword.classList.remove("hide")
    password.innerHTML = pass
    newPassword = pass
}
function copyPassword(){
    alert("Senha copiada!😎😉", "password copied😎😉" )
    navigator.clipboard.writeText(newPassword)
}
