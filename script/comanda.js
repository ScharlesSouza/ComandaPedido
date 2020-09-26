//var calcular = document.getElementById('botao');
//calcular.onclick = function(){
function calcular(){
    var itens = document.getElementsByTagName('td');
    var preco = document.getElementsByClassName("valor_unit");
    var qtd = document.getElementsByClassName("qtd");

    //com os "html colection" das quantidade e preços, só multipliquei o
    //valor com a quantidade pra obter o total do item e armazenar numa lista.
    var valor = [];
    for (var i = 0; i < qtd.length; i++) {
        valor[i] = qtd[i].value * parseFloat(preco[i].innerHTML);
    }
    //e depois somo todos os itens da lista.
    var total = valor.reduce(function(total, valor){
        return total + valor;
    }, 0);

    //armazenando temporariamente os nomes, preços e qtd.
    var vetNome = [];
    for(var i = 0; i < qtd.length; i++){
        vetNome[i] = itens[i*3].textContent;
    }

    //devo criar elementos html através do javascript para mostrar ao usuário o valor total da comanda.
    function verTotal(){
        var titleTotal = document.createElement('h1');
        var titleTotalText = document.createTextNode('Subtotal da Comanda');
        titleTotal.appendChild(titleTotalText);
		var textTotal = document.createElement('h2');
        var textTotaltext = document.createTextNode('Itens selecionados:');
		textTotal.appendChild(textTotaltext);
        var corpo = document.getElementById('subtotal');
        corpo.appendChild(titleTotal);
        corpo.appendChild(textTotaltext);
        
        //renderizando os elementos no relatório final da comanda
        for(var i = 0; i < qtd.length; i++){
            if(qtd[i].value!=0){
                var lista = document.createElement('ul');
                var aux1 = document.createElement('h4');
                var aux2 = document.createTextNode(vetNome[i]);
                aux1.appendChild(aux2);
                lista.appendChild(aux1);
                corpo.appendChild(aux1);

                var aux2 = document.createTextNode(' -- Preço: R$'+preco[i].innerHTML+'  ');
                aux1.appendChild(aux2);
                lista.appendChild(aux1);
                corpo.appendChild(aux1);

                var aux2 = document.createTextNode(' -- Qtd.:'+qtd[i].value);
                aux1.appendChild(aux2);
                lista.appendChild(aux1);
                corpo.appendChild(aux1);
            }
        }
        //mostra o total da comanda
        var aux1 = document.createElement('h2');
        var aux2 = document.createTextNode('Valor Total: R$'+total.toFixed(2));
        aux1.appendChild(aux2);
        corpo.appendChild(aux1);
	}
	verTotal();
	document.getElementById('tabela').remove();
	document.getElementById('botao').remove();
	document.getElementById('limpar').remove();
    
    
}

function limparCampos(){
	var qtd = document.getElementsByClassName("qtd");
	for (var i = 0; i < qtd.length; i++) {
        qtd[i].value = 0;
    }
	
}