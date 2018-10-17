
let umaVez = false;
const todoCheckados = ()=>{
	const todosOsInputs = Array.from(document.getElementsByTagName("input"));
	const inputsCheckados = todosOsInputs.filter((e)=>{return e.checked});
	return todosOsInputs.length == inputsCheckados.length;
}

Array.from(document.getElementsByTagName("input")).forEach((e)=>{
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
	}
});