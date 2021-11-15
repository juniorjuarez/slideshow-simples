/*DECLARAÇÃO DE VARIAVEIS*/ 
var balls = document.querySelector('.balls')
var quant = document.querySelectorAll('.slides .image')
var atual = 0
var imagem = document.getElementById('atual')
var next = document.getElementById('next')
var before = document.getElementById('before')
var roll =  true

/*SCRIPT PARA CRIAR OS CAMPOS DE SELEÇÃO */
for(let i=0; i<quant.length; i++){

		/*cria uma div dentro da div com calss balls*/
		var div = document.createElement('div')
		div.id = i
		balls.appendChild(div)
}

/*retorna o id 0 e adiciona a class imgAtual */
document.getElementById('0').classList.add('imgAtual')

/*Seleciona os da class .balls e a div filho */
var pos = document.querySelectorAll('.balls div')

/*Altera a seleção das balls ao clicar*/
for (let i = 0; i < pos.length; i++) {
	pos[i].addEventListener('click', ()=>{
		
		atual = pos[i].id
		roll = false
		slide()
	})	
}

/* volta uma imagem */
before.addEventListener('click',()=>{
	atual--
	roll = false
	slide()
})
/* salta uma imagem*/
next.addEventListener('click',()=>{

	atual++
	roll = false
	slide()

})


/* Função principal, serve para executar a transição de imagens*/

function slide(){
	
	if(atual>=quant.length){
		atual = 0		
	}
	else if(atual < 0){
		atual = quant.length -1
	}
	document.querySelector('.imgAtual').classList.remove('imgAtual')
	imagem.style.marginLeft = -1024*atual+'px'
	document.getElementById(atual).classList.add('imgAtual')
}

/*Cria um intervalo de execução */
setInterval(()=>{
	/* Condição para permitir ou não a execução do intervalo de rolagem*/
		if(roll){
			atual++
			slide()
		}
		else{
			roll = true
		}
},4000)