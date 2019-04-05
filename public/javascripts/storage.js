
const  StorageController = {
	salvarTarefas: function(sprint, dados){
		const sprintStr = JSON.stringify(dados);
		localStorage.setItem(sprint, sprintStr);

		return this.recuperarTarefas(sprint); // valida saida
	},
	recuperarTarefas: function(sprint){
		const sprintStr = localStorage.getItem(sprint);

		return {
			sprint: sprint,
			tarefas: JSON.parse(sprintStr)
		}
	},
}
