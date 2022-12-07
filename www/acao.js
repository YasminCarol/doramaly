

window.onload = function(){
    var url = 'https://triobooks.profrodolfo.com.br/dorama/busca.php';
    var d = document.querySelector('.dados');

    function BuscaDorama(){
        fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then((json)=>{        
            for(x = 0; x < json.length; x++){
            		d.innerHTML+= `
                    <div class="row">
                        <div class="col-4">
                            <img class="img-fluid" src="https://triobooks.profrodolfo.com.br/dorama/busca.php${json[x].capa}">
                        </div>
                        <div class="col-7">
                            <h1>${json[x].titulo}</h1>
                        </div>
                    </div>
                	`;
            }
        }).catch();
    }

    BuscaDorama();

}

document.querySelector('#btn').addEventListener('click', ()=>{
    	d.innerHTML = '';
    	let nome = document.querySelector('#pesquisa').value;
})