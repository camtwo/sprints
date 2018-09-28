
function newTarefa(numero, titulo, subtarefas){
	return {
		"numero": numero,
		"titulo": titulo,
		"subtarefas": subtarefas || [],
		"isPai": (subtarefas || []).length > 0
	}
}

const dados = { 
		title: 'Sprint 81',
		sprint_number: "81",
		meta: "Permitir trocar cor da agenda e criar solicitação de procedimentos do TISS",
		data_atualizacao: "30/09/2018 a partir das 22:00",
		tarefas: []
}


dados.tarefas.push(newTarefa(8299, "Ordenar cards de senha contínua pela dataHora de geração", []));
dados.tarefas.push(newTarefa(4922, "[TISS] Criar área para solicitação de procedimentos no TISS", []));
dados.tarefas.push(newTarefa(7270, "Alterar forma de exibição dos dados do orçamento na tela de resumo do orçamento	Baixa", []));
dados.tarefas.push(newTarefa(8029, "Possibilitar utilizar tabela de coeficientes na renegociação", []));
dados.tarefas.push(newTarefa(8258, "Possibilitar escolher cor para o agendamento", []));
dados.tarefas.push(newTarefa(8265, "Permitir inserir no orçamento a quantidade liberada para agendamento em cada procedimento", []));
dados.tarefas.push(newTarefa(8189, "Logo da clinica não aparece no relatórios de Atestado de saúde ocupacional em branco por empresa", []));
dados.tarefas.push(newTarefa(8389, "Marcar como FATURADO as agendas quitadas pelo pagseguro", []));
dados.tarefas.push(newTarefa(8063, "Bloquear edição de valores ao inserir produtos no orçamento (usar a mesma cfg de procedimentos existente)", []));
dados.tarefas.push(newTarefa(8244, "Falta as opções para selecionar o tipo do ASO em branco", []));
dados.tarefas.push(newTarefa(8336, "Configurar altura da margem cabeçalho documentos", []));
dados.tarefas.push(newTarefa(7941, "No relatório de procedimentos faturados por período, mostrar também os procedimentos faturados contra o convênio", []));
dados.tarefas.push(newTarefa(8136, "Possibilitar edição de dados do orçamento após ser aprovado", []));

module.exports = {"sprint_81": dados};