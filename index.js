const btn = document.getElementById("btn")
const input = document.getElementById("num")
let P1 = document.getElementById("p1")
let P2 = document.getElementById("p2")
let P3 = document.getElementById("p3")

btn.addEventListener("click", function() {
    let mf = input.value * 3.28084
    let fm = input.value * 0.3048
    P1.innerHTML = `
    ${input.value} meters = ${mf.toFixed(3)} feet |
     ${input.value} feet = ${fm.toFixed(3)} meters
    `
    let lg = input.value * 0.264172
    let gl = input.value * 3.78541
    P2.innerHTML = `
    ${input.value} litres = ${lg.toFixed(3)} gallons |
     ${input.value} gallons = ${gl.toFixed(3)} litres
    `
    let kp = input.value * 2.20462
    let pk = input.value * 0.453592
    P3.innerHTML = `
    ${input.value} kilos = ${kp.toFixed(3)} pounds |
     ${input.value} pounds = ${pk.toFixed(3)} kilos
    `
    
})