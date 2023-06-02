let celciusInput=document.querySelector('#celcius>input')
let farenhietInput=document.querySelector('#farenhiet>input')

let btn=document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}
celciusInput.addEventListener('input',function(){
 let cTemp=parseFloat(celciusInput.value)
 let fTemp=(cTemp*(9/5)) + 32

 farenhietInput.value=roundNumber(fTemp)
})

farenhietInput.addEventListener('input',function(){
    let fTemp=parseFloat(farenhietInput.value)
    let cTemp=(fTemp- 32) *(5/9)
   
    celciusInput.value=roundNumber(cTemp)
})

btn.addEventListener('click', ()=>{
    celciusInput.value=""
    farenhietInput.value=""
})