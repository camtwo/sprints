
function newTarefa(numero, titulo, subtarefas){
	return {
		"numero": numero,
		"titulo": titulo,
		"subtarefas": subtarefas || [],
		"isPai": (subtarefas || []).length > 0
	}
}

const sprint_81 = { 
		title: 'Sprint 81',
		sprint_number: "81",
		meta: "Permitir trocar cor da agenda e criar solicitação de procedimentos do TISS",
		data_atualizacao: "30/09/2018 a partir das 22:00",
		easter_egg: "https://media1.tenor.com/images/b2f380865b3b97c559905ea20f9addbc/tenor.gif",
		tarefas: []
}

sprint_81.tarefas.push(newTarefa(8299, "Ordenar cards de senha contínua pela dataHora de geração", []));
sprint_81.tarefas.push(newTarefa(4922, "[TISS] Criar área para solicitação de procedimentos no TISS", []));
sprint_81.tarefas.push(newTarefa(7270, "Alterar forma de exibição dos dados do orçamento na tela de resumo do orçamento	Baixa", []));
sprint_81.tarefas.push(newTarefa(8029, "Possibilitar utilizar tabela de coeficientes na renegociação", []));
sprint_81.tarefas.push(newTarefa(8258, "Possibilitar escolher cor para o agendamento", []));
sprint_81.tarefas.push(newTarefa(8265, "Permitir inserir no orçamento a quantidade liberada para agendamento em cada procedimento", []));
sprint_81.tarefas.push(newTarefa(8189, "Logo da clinica não aparece no relatórios de Atestado de saúde ocupacional em branco por empresa", []));
sprint_81.tarefas.push(newTarefa(8389, "Marcar como FATURADO as agendas quitadas pelo pagseguro", []));
sprint_81.tarefas.push(newTarefa(8063, "Bloquear edição de valores ao inserir produtos no orçamento (usar a mesma cfg de procedimentos existente)", []));
sprint_81.tarefas.push(newTarefa(8244, "Falta as opções para selecionar o tipo do ASO em branco", []));
sprint_81.tarefas.push(newTarefa(8336, "Configurar altura da margem cabeçalho documentos", []));
sprint_81.tarefas.push(newTarefa(7941, "No relatório de procedimentos faturados por período, mostrar também os procedimentos faturados contra o convênio", []));
sprint_81.tarefas.push(newTarefa(8136, "Possibilitar edição de dados do orçamento após ser aprovado", []));


const sprint_82 = { 
		title: 'Sprint 82',
		sprint_number: "82",
		meta: "Permitir que a clínica cadastre promoções para procedimentos, e indique a especialidade de cada procedimento agendado",
		data_atualizacao: "17/10/2018 a partir das 22:00",
		easter_egg: "https://media.giphy.com/media/yoJC2GnSClbPOkV0eA/giphy.gif",
		tarefas: []
}

sprint_82.tarefas.push(newTarefa(8430, "Criar opção de escolher especialidade no procedimento agenda", []));
sprint_82.tarefas.push(newTarefa(8427, "Criar opção de descontos para procedimentos", []));
sprint_82.tarefas.push(newTarefa(8496, "Ajustar tela de recibo para responsável financeiro", []));
sprint_82.tarefas.push(newTarefa(6874, "Criar configuração dentro do modelo de anamnese para ordenar perguntas da anamnese", []));
sprint_82.tarefas.push(newTarefa(8108, "Configurar responsável financeiro no paciente", []));
sprint_82.tarefas.push(newTarefa(8380, "Ter a possibilidade de definir a duração dos agendamento através dos tipos de consulta", []));
sprint_82.tarefas.push(newTarefa(8341, "Quando o titulo extenso no laudo, está cortando a frase no documento gerado", []));
sprint_82.tarefas.push(newTarefa(8405, "Ao cadastrar o usuário corrente como profissional de saúde, o sistema exige logout/login para mostrar o botão 'atender' na agenda", []));
sprint_82.tarefas.push(newTarefa(8437, "Ignorar a opção Bloquear atendimento sem pagamento quando os procedimentos só lançarem valores para o convênio faturados por TISS", []));
sprint_82.tarefas.push(newTarefa(7897, "Remover indicador de iss retido no emissor", []));


const SPRINTS = [sprint_81, sprint_82];

module.exports = {
	dadosDaSprint: (sprint_n)=>{
		
		const sp  = SPRINTS.filter((index)=>{
			return index.sprint_number == sprint_n;
		});

		return sp.length > 0 ? sp[0] : {};
	}
};
