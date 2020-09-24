function pesquisaCidade(cidade) {
	var imovéis = imoApp.imóveis.procurarTodosEm(cidade);
	var sHtml="";
	imovéis.forEach(element => {
		var str = `Imóvel na rua ${element.endereço.rua} com o valor de ${element.valor}`;
		//console.log(element.endereço.rua);
		//console.log(element.valor);
		console.log(str);
		sHtml += "<p>"+str+"</p>";
	});
	console.log(sHtml);
	document.getElementById("Resultado").innerHTML = sHtml;
}
document.querySelector('.btn').addEventListener('click', function() {	
	var cidade = document.querySelector('.cidade').value;
	//alert("cidade: "+cidade);
	pesquisaCidade(cidade);
});

function pesquisaBaratos() {
	var imovéis = imoApp.imóveis.procurarBaratos();
	var sHtml="";
	imovéis.forEach(element => {
		var str = `${element.endereço.rua} ${element.valor}`;
		//console.log(element.endereço.rua);
		//console.log(element.valor);
		console.log(str);
		sHtml += "<p>"+str+"</p>";
	});
	console.log(sHtml);
	document.getElementById("Baratos").innerHTML = sHtml;
}

document.getElementById("baratos").addEventListener('click', function() {	
	//alert("ola");
	pesquisaBaratos();
});