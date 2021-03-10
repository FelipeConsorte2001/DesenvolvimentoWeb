let div = document.querySelector("#lista").innerHTML;

    for(let i=0;i< detran.length;i++){
        document.querySelector("#lista").innerHTML = div += `<div class="placa"> 
                        <h3> ${detran[i].estado}-${detran[i].cidade}</h3>
                        <h2>${detran[i].placa}</h2>
                        </div>`;
  
    }                       
 