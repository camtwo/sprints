
function newTarefa(numero, titulo, subtarefas, disabled, checked){
	return {
		"numero": numero,
		"titulo": titulo,
		"subtarefas": subtarefas || [],
		"isPai": (subtarefas || []).length > 0,
		"disabled" : disabled || false,
		"checked" : checked || false
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


const sprint_83 = { 
		title: 'Sprint 83',
		sprint_number: "83",
		meta: "Possibilitar que os clientes consigam emitir notas de devolução e também visualizar todas as informações sobre um agendamento",
		data_atualizacao: "04/11/2018 a partir das 22:00",
		easter_egg: "https://media.giphy.com/media/yoJC2GnSClbPOkV0eA/giphy.gif",
		tarefas: []
}

sprint_83.tarefas.push(newTarefa(8378, "Criar tela de mais detalhes agendamento", []));
sprint_83.tarefas.push(newTarefa(8474, "Possibilitar geração de nota de devolução de produtos", []));
sprint_83.tarefas.push(newTarefa(8470, "Criar comissão por indicação no orçamento", []));
sprint_83.tarefas.push(newTarefa(6857, "Possibilitar impressão da agenda em impressora térmica", []));
sprint_83.tarefas.push(newTarefa(7365, "Criar a opção de guia de encaminhamento (orçamento)", []));
sprint_83.tarefas.push(newTarefa(8494, "Ao editar um paciente existente, a opção de 'Continuar', na integração com pipedrive, está integrando com uma pessoa, mesmo sem estar marcada alguma pessoa para integração", []));
sprint_83.tarefas.push(newTarefa(8475, "Integração de volta Pipedrive para o CNN", []));
sprint_83.tarefas.push(newTarefa(8441, "Problemas no campo de busca 'Responsável pelo orçamento'", []));
sprint_83.tarefas.push(newTarefa(8497, "Criar uma nova macro nos modelos de documento", []));
sprint_83.tarefas.push(newTarefa(8255, "Ao faturar um agendamento quando clica na opção de voltar a lista se perde todos os valores dos filtros", []));
sprint_83.tarefas.push(newTarefa(8512, "Alterar clone() da interface Replicavel para copy(), e remover clone da agenda e faturamento", []));

const sprint_84 = {
		title: 'Sprint 84',
		sprint_number: "84",
		meta: "Permitir que o cliente imprima novos relatórios do orçamento e possibilitar realização de prescrições pela Memed.",
		data_atualizacao: "25/11/2018 a partir das 22:00",
		easter_egg: "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
		tarefas: []
}

	const tf1 = newTarefa(8548, "Consumir endpoint para cadastrar e atualizar pacientes no Lapius.", [], true, true);
	const tf2 = newTarefa(8549, "Consumir endpoint para cadastrar e atualizar dados do prontuário do paciente no Lapius.", [], true, true);
	sprint_84.tarefas.push(newTarefa(8547, "[Tarefa pai] Criar integração com app da Lapius", [tf1, tf2], true, true));

	sprint_84.tarefas.push(newTarefa(8499, "Alterar forma de integração das prescrições com o memed", []));
	sprint_84.tarefas.push(newTarefa(8472, "Possibilitar leitura de xml de nota e inserir no estoque os produtos da nota", []));

	sprint_84.tarefas.push(newTarefa(8545, "Cadastrar data de início e fim de tratamento odontológico no orçamento", []));
	sprint_84.tarefas.push(newTarefa(8502, "Relatório de quais pacientes que aprovaram orçamento e não realizaram nenhum agendamento", []));
	sprint_84.tarefas.push(newTarefa(8503, "Relatório de quais pacientes não vieram para a manutenção do mês", []));
	sprint_84.tarefas.push(newTarefa(8504, "Relatório de quais pacientes não fizeram a instalação", []));
	sprint_84.tarefas.push(newTarefa(8622, "Relatório de SMS enviados", [])); // extra
	sprint_84.tarefas.push(newTarefa(8584, "Melhoria componente modal.js", []));
	sprint_84.tarefas.push(newTarefa(8533, "Poder cadastrar o paciente na hora de criar um novo orçamento", []));
	sprint_84.tarefas.push(newTarefa(8469, "Mostrar a informação de quanto espaço em disco o cliente esta consumindo", []));
	
	sprint_84.tarefas.push(newTarefa(8615, "Adicionar campo de chave de API nas perguntas adicionais de paciente e anamnese e nas suas alternativas", [])); // extra


const sprint_85 = {
		title: 'Sprint 85',
		sprint_number: "85",
		meta: "Possibilitar a inativação do paciente e melhorar a geração do fluxo de caixa.",
		data_atualizacao: "09/12/2018 a partir das 22:00",
		easter_egg: "https://media.giphy.com/media/13j918ylcwctG/giphy.gif",
		tarefas: []
}

	sprint_85.tarefas.push(newTarefa(8616, "[Lapius] Consumir os dados de Sinais vitais do paciente", []));
	sprint_85.tarefas.push(newTarefa(8618, "Possibilitar inativação de pacientes", []));
	sprint_85.tarefas.push(newTarefa(8625, "Otimizar rotina de fluxo de caixa", []));
	sprint_85.tarefas.push(newTarefa(8581, "Implementar novas versões de TISS", []));
	sprint_85.tarefas.push(newTarefa(8519, "Remover max height dos conteúdos da tela da agenda", []));
	sprint_85.tarefas.push(newTarefa(6807, "Melhorar forma de retorno à lista quando da edição de procedimentos", []));
	sprint_85.tarefas.push(newTarefa(8621, "Profissional de saúde inativo na clinica ainda consegue gerar prescrições.", []));
	sprint_85.tarefas.push(newTarefa(8510, "Popular o campo 'Profissional' ao faturar comissões", []));
	sprint_85.tarefas.push(newTarefa(8460, "Ao renegociar uma conta, não esta sendo possível gerar e imprimir todos os boletos de uma só vez.", []));
	sprint_85.tarefas.push(newTarefa(8605, "Não está mostrando a disponibilidade dos exames quando o mesmo não possui localAgenda", []));
	sprint_85.tarefas.push(newTarefa(8224, "Nas guias TISS, permitir pesquisar por código do CBO sem o ponto", []));
	sprint_85.tarefas.push(newTarefa(8617, "Criar opção de carregar automaticamente ou não a disponibilidade", []));
	sprint_85.tarefas.push(newTarefa(8569, "Alertar que a pessoa tem caixa aberto há muito tempo", []));
	sprint_85.tarefas.push(newTarefa(8455, "Criar menu para agrupar guias do Tiss, deixando as mesmas em submenus", []));

const sprint_86 = {
		title: 'Sprint 86',
		sprint_number: "86",
		meta: "Possibilitar gerar comissão para não profissionais.",
		data_atualizacao: "...",
		easter_egg: "https://media.giphy.com/media/3oriO7A7bt1wsEP4cw/giphy.gif",
		tarefas: []
}

sprint_86.tarefas.push(newTarefa(8668, "(Fechada) - Colocar totalizador no relatório de dados por convênio", []));
sprint_86.tarefas.push(newTarefa(8685, "(Fechada) - Bug no menu lateral da agenda", []));
sprint_86.tarefas.push(newTarefa(8686, "(Fechada) - Bug no rodapé da agenda ao visualizar por mês", []));
sprint_86.tarefas.push(newTarefa(7065, "(Fechada) - Mensagem ao faturar agenda com convênio sem clienteFornecedor", []));
sprint_86.tarefas.push(newTarefa(8659, "(Fechada) - Integrar orçamento aprovado ao RDStation", []));
sprint_86.tarefas.push(newTarefa(8661, "(Fechada) - Otimizar carregamento da lista de pacientes", []));
sprint_86.tarefas.push(newTarefa(8662, "(Fechada) - Otimizar carregamento da lista de pacientes incompletos", []));

const tarefasFilhas = [];
tarefasFilhas.push(newTarefa(8645, "Permitir copiar configuracoes de comissao de outra pessoa", [], true, true));
tarefasFilhas.push(newTarefa(8642, "Permitir adicionar procedimentos na regra da pessoa", [], true, true));
tarefasFilhas.push(newTarefa(8644, "Modificar lógica de reajuste dos valores de comissao", [], true, true));
tarefasFilhas.push(newTarefa(8639, "Alterar a busca de valores de comissão para pegar valores da cfg geral", [], true, true));
tarefasFilhas.push(newTarefa(8637, "Migrar campos relacionados à comissão de profissional para pessoa", [], true, true));
tarefasFilhas.push(newTarefa(8641, "Permitir listar e adicionar pessoas nas regras individuais de comissão", [], true, true));
tarefasFilhas.push(newTarefa(8638, "Permitir o cadastro de valores gerais de comissão", [], false, true));
tarefasFilhas.push(newTarefa(8643, "Modificar importacao da planilha de comissoes", [], true, false));

sprint_86.tarefas.push(newTarefa(7387, "[Tarefa pai] Criar comissões para não profissionais", tarefasFilhas));

const SPRINTS = [sprint_81, sprint_82, sprint_83, sprint_84, sprint_85, sprint_86];

module.exports = {
	dadosDaSprint: (sprint_n)=>{
		
		const sp  = SPRINTS.filter((index)=>{
			return index.sprint_number == sprint_n;
		});

		return sp.length > 0 ? sp[0] : {};
	}
};
