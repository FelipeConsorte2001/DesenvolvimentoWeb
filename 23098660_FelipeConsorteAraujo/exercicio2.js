let num = [];
let mult =1
document.querySelector("#gerar").addEventListener("click",function () {
     for(let i =0; i < 15; i++){
        num[i] =  Math.round(Math.random()*100);
    }
 document.querySelector("#numeros").innerHTML = num
 
 for(let i =0; i < 15; i++){
        if(num[i] %2 == 0 ){
            mult= mult *num[i];
        }
    } 
    document.querySelector("#numerosPares").innerHTML = mult
    mult =1
});


    
