document.querySelector("#pesqui").addEventListener("click", function () {
    let pe = document.querySelector("#pesso").value;
    card = document.querySelector("#pessoa").innerHTML;
    let nãoEncontrado= "Pessoa não encontrada";
        for(let i =0; i< detran.length;i++){

            if(detran[i].proprietario == pe){
                if(detran[i].gravidade == "Leve"){
                    
                    document.querySelector("#pessoa").innerHTML = card +=`<div class="leve">
                    
                    <img src="${detran[i].foto}">  
                    <h1> ${detran[i].proprietario} </h1>
                    <p><strong>Placa:</strong>${detran[i].placa}<br>
                    <strong>CNH:</strong> ${detran[i].cnh}<br>
                    <strong>Gravidade:</strong>${detran[i].gravidade}<br>
                    <strong>Pontos:</strong>${detran[i].pontos}<br>
                    <strong>Data: </strong>${detran[i].data_infracao}<br></p>
                    <leve class="div">
                    <strong>Valor: </strong>${detran[i].valor}
                    </div>
                    </div>`;


                }else {
                if(detran[i].gravidade=="Média"){
                    document.querySelector("#pessoa").innerHTML = card +=`<div class="media">
                    <img src="${detran[i].foto}">  
                    <h1> ${detran[i].proprietario} </h1>
                    <p><strong>Placa:</strong>${detran[i].placa}<br>
                    <strong>CNH:</strong> ${detran[i].cnh}<br>
                    <strong>Gravidade:</strong>${detran[i].gravidade}<br>
                    <strong>Pontos:</strong>${detran[i].pontos}<br>
                    <strong>Data: </strong>${detran[i].data_infracao}<br></p>
                    <media class="div">
                    <strong>Valor: </strong>${detran[i].valor}
                    </div>
                    </div>`;
                }
                else{
                    if(detran[i].gravidade == "Grave"){
                        document.querySelector("#pessoa").innerHTML = card +=`<div class="grave">
                    <img src="${detran[i].foto}">  
                    <h1> ${detran[i].proprietario} </h1>
                    <p><strong>Placa:</strong>${detran[i].placa}<br>
                    <strong>CNH:</strong> ${detran[i].cnh}<br>
                    <strong>Gravidade:</strong>${detran[i].gravidade}<br>
                    <strong>Pontos:</strong>${detran[i].pontos}<br>
                    <strong>Data: </strong>${detran[i].data_infracao}<br></p>
                    <grave class="div">
                    <strong>Valor: </strong>${detran[i].valor}
                    </div>
                    </div>`;
                    }
                else{
                    if(detran[i].gravidade == "Gravíssima"){
                        document.querySelector("#pessoa").innerHTML = card +=`<div class="gravissimo">
                        <img src="${detran[i].foto}">  
                        <h1> ${detran[i].proprietario} </h1>
                        <p><strong>Placa:</strong>${detran[i].placa}<br>
                        <strong>CNH: </strong>${detran[i].cnh}<br>
                        <strong>Gravidade:</strong>${detran[i].gravidade}<br>
                        <strong>Pontos:</strong>${detran[i].pontos}<br>
                        <strong>Data: </strong>${detran[i].data_infracao}<br></p>
                        <grave class="div">
                        <strong>Valor: </strong>${detran[i].valor}
                        </div>
                        </div>`;
                    }
                }
           
}
}
}
}   

})


/*if(detran.gravidade == "Leve"){
                
            }*/