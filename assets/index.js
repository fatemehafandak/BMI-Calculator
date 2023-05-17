let bmi=document.querySelector('.bmi-result')
let ideal=document.querySelector('.ideal-result')
let _error=document.querySelector('.error')
let _calc=document.querySelector(".calc")
let _result=document.querySelector(".result")
let arrow=document.querySelector(".arrow")

function result(){
    let age=document.querySelector('.input-age').value
    let weight=document.querySelector('.input-w').value
    let height=document.querySelector('.input-h').value
    let h=height/100

    if (age!=""&& weight!="" && height!="") {
        _error.style.display="none"
     var x=(weight/(h*h)).toPrecision(3)
     bmi.innerHTML=x
     ideal.innerHTML=(21*(h*h)).toPrecision(3)
     
     _calc.style.display="none"
     _result.style.display='flex'
    } else {
        _error.innerHTML="Please enter your imformation"

        
    }
let name=document.querySelector(".name2")
 let z=window.getComputedStyle(name).getPropertyValue("width")
 let w=parseFloat(z)
   
    var y=(weight/(h*h))
   let k=y-16
    arrow.style.transform=`translateX(${(w*(k*4+2))/100}px`

    //text\\
    let notice=document.querySelector(".notice")
    if(y<16){
        notice.innerHTML="Underweight class  III"
        notice.style.color="red"
        arrow.style.transform="translateX(0)"
    }else if(y>16 && y<16.99){
        notice.innerHTML="Underweight class  II"
        notice.style.color="orangered"
    }else if(y>17 && y<18.49){
        notice.innerHTML="Underweight class  I"
        notice.style.color="yellow"
    }else if(y>18.5 && y<25){
        notice.innerHTML="normal weight"
        notice.style.color="green"
    }else if(y>25.01 && y<30){
        notice.innerHTML="Overweight"
        notice.style.color="yellow"
    }else if(y>30.01 && y<35){
        notice.innerHTML="Obese class  I"
        notice.style.color="orangered"
    }else if(y>35.1 && y<40){
        notice.innerHTML="Obese class  II"
        notice.style.color="rgb(226, 78, 33)"
    }else if(y>40.01 ){
        notice.innerHTML="Obese class  III"
        notice.style.color="rgb(156, 22, 22)"
        arrow.style.transform=`translateX(${(w*(24*4+3))/100}px`
    }
}
let recomend=document.querySelectorAll(".recomend")
function recomends(){
    
    let weight=document.querySelector('.input-w').value
    let height=document.querySelector('.input-h').value
    let h=height/100
    var y=(weight/(h*h))
    
    for (let i = 0; i < recomend.length; i++) {
        console.log(recomend[0])
        recomend[i].style.display="none"
        if(y<18.5){
       recomend[2].style.display="block"
        }else if(y>18.5 && y<25){
            recomend[0].style.display="block" 
        }else if (y>25){
            recomend[1].style.display="block" 
        }
        
    }
   

}
let back=document.querySelectorAll('.back')
back.forEach(item=>{
    item.addEventListener("click",function(){
        recomend.forEach(item=>{
            item.style.display="none"
        })
_result.style.display="flex"
    })
})
let backward=document.querySelector('.backward')
backward.addEventListener("click",function(){
    recomend.forEach(item=>{
        item.style.display="none"
    })
    _result.style.display="none"
    _calc.style.display="flex"

    arrow.style.transform="translateX(0)"

        })

        function resets(){
            let age=document.querySelector('.input-age')
            let weight=document.querySelector('.input-w')
            let height=document.querySelector('.input-h')
age.value=null
weight.value=null
height.value=null
_error.innerHTML=""

        }