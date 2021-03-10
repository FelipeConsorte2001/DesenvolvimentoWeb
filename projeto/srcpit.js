let div = document.querySelector("#pessoas").innerHTML;
document.querySelector("#btnpessoa").addEventListener("click", function(){
    for(let i =0; i<pessoas.length;i++){
    if(pessoas[i].genero == "Masculino"){
         div +=`<div class="masculino">
        <h3>${pessoas[i].nome}</h3>
        <hr>
        <img src="${pessoas[i].foto}>"
        <br>
        <p><strong>Idade: </strong>${pessoas[i].idade}<br>
        <strong>Altural:</strong>${pessoas[i].altura}<br>
        <strong>Genero:</atrong>${pessoas[i].genero}<br>
        <strong>Id:</atrong>${pessoas[i].peso}<br>
        </p>
        <hr>
        <h3>R$${pessoas[i].salario}</h3>
        <hr>
        <h3>${pessoas[i].profissao}
        </div>`;
        document.querySelector("#pessoas").innerHTML = div;
    }else if(pessoas[i].genero == "Feminino"){
         div +=`<div class="feminino">
        <h3>${pessoas[i].nome}</h3>
        <hr>
        <img src="${pessoas[i].foto}>"
        <br>
        <p><strong>Idade: </strong>${pessoas[i].idade}<br>
        <strong>Altural:</strong>${pessoas[i].altura}<br>
        <strong>Genero:</atrong>${pessoas[i].genero}<br>
        <strong>Id:</atrong>${pessoas[i].peso}<br>
        </p>
        <hr>
        <h3>R$${pessoas[i].salario}</h3>
        <hr>
        <h3>${pessoas[i].profissao}
        </div>`;
        document.querySelector("#pessoas").innerHTML = div;
    }

}
});
document.querySelector("#btndados").addEventListener("click",function () {
    //Media altura
    let media =0;
    for(let i=0;i<pessoas.length;i++){
        media+= pessoas[i].altura/pessoas.length;
    }
    let idade=0;
    let cont=0;
    let sexo = "Feminino";
    document.querySelector("#pessoas").innerHTML="A Media é igual das pessoas é:"+media.toFixed(2);
    
    //Mulher mais velhar
    for(let i=0;i < pessoas.length;i++){
        
        if(sexo == pessoas[i].genero){
           
            if(idade <= pessoas[i].idade){
            
            idade = pessoas[i].idade;
             cont = i; 
           }
    
    } 
    
         
}document.querySelector("#pessoaMaisVelhar").innerHTML += `<div class="exibir">

    <strong>Mulher Mais Velha</strong><br>
    <strong>Nome:${pessoas[cont].nome}</strong><br>
    <img src="${pessoas[cont].foto}" ><br>    
    Idade:${pessoas[cont].idade}<br>
    Profissão:${pessoas[cont].profissao}</div>`; 

   //Sálario mais baixo
   let salario =4000.00;
   let contar=0;
   for(let i=0;i < pessoas.length;i++){
        
    if( salario< pessoas[i].salario){
       contar=i
        salario = pessoas[i].salario;
    }
} document.querySelector("#pessoaMaisVelhar").innerHTML += `<div class="exibir">

<strong>Menor Salario</strong><br>
<strong>Nome:${pessoas[contar].nome}</strong><br>
<img src="${pessoas[contar].foto}" ><br>    
Idade:${pessoas[contar].idade}<br>
Profissão:${pessoas[contar].profissao}</div>`; 

 
});