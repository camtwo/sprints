
let umaVez = false;
const todoCheckados = ()=>{
	const todosOsInputs = Array.from(document.getElementsByClassName("itemTarefa"));
	const inputsCheckados = todosOsInputs.filter((e)=>{return e.checked});
	return todosOsInputs.length == inputsCheckados.length;
}

Array.from(document.getElementsByClassName("itemTarefa")).forEach((e)=>{
	e.onclick = (ev) =>{
		if (todoCheckados()) {
			document.getElementById('atualização').style.display = 'block';
			if (!umaVez) {
				window.scrollTo({
					top: 10000,
					behavior: "smooth"
				});
			}
			umaVez = true;
		}else{
			document.getElementById('atualização').style.display = 'none';
			umaVez = false;
		}
		salvarTarefas();
	}
});

function salvarTarefas(){
	const todosOsInputs = Array.from(document.getElementsByClassName("itemTarefa"));
	const inputsCheckados = todosOsInputs.filter((e)=>{return e.checked});

	const dados = inputsCheckados.map(function(inp){
		return inp.dataset.numero;
	});

	return StorageController.salvarTarefas(document.getElementById("numero-sprint").value, dados);
}