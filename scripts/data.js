
function newTarefa(numero, titulo, subtarefas, disabled, checked, forceMarker){
	return {
		"numero": numero,
		"titulo": titulo,
		"subtarefas": subtarefas || [],
		"isPai": (subtarefas || []).length > 0,
		"disabled" : disabled || false,
		"checked" : checked || false,
		"forceMarker": forceMarker || false
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
		easter_egg: "/static/images/andre.png",
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


const sprint_87 = {
		title: 'Sprint 87',
		sprint_number: "87",
		meta: "Possibilitar agendar para executores, e não somente para profissionais de saúde.",
		data_atualizacao: "13/01/2019 a partir das 22:00",
		easter_egg: "/static/images/vibracao.gif",
		tarefas: []
}

const _t_87 = [
	newTarefa(8701, "1 - Criar e gerenciar pessoas agendáveis", [
		newTarefa(8725, "Migrar banco de dados para a nova estrutura", []),
		newTarefa(8726, "Criar entidade e modificar queries relacionadas", []),
		newTarefa(8727, "Sincronizar cadastro de executor com o cadastro de profissionais de saúde", [])
	]),
	newTarefa(8697, "2 - Modificar o modal da agenda para buscar executores ao invés de profissionais", []),
	newTarefa(8702, "3 - No TISS, filtrar somente as agendas cuja execução é de profissional", []),
	newTarefa(8703, "4 - Possibilitar que um cliente-fornecedor seja um agenda_executor", [])
];

sprint_87.tarefas.push(newTarefa(8667, "[Tarefa Pai] Possibilitar agendar para não profissionais", _t_87));
sprint_87.tarefas.push(newTarefa(8671, "Adicionar somatório total no final da pagina dos relatório de orçamentos por status", []));
sprint_87.tarefas.push(newTarefa(8694, "Criar campo conta contábil no cadastro de categorias de contas", []));
sprint_87.tarefas.push(newTarefa(8693, "Possibilitar filtrar por especialidade no autocomplete de procedimento", []));
sprint_87.tarefas.push(newTarefa(8695, "Possibilitar escolha de obrigatoriedade de telefone celular ao cadastrar o paciente", []));
sprint_87.tarefas.push(newTarefa(8669, "Colocar a cidade do paciente no relatório de dados do convênio", []));


const sprint_88 = {
		title: 'Sprint 88',
		sprint_number: "88",
		meta: "Possibilitar emitir nota de serviço para a cidade de Florianópolis e emitir boletos para o Banco Uniprime.",
		data_atualizacao: "27/01/2019 a partir das 22:00",
		easter_egg: "/static/images/dimitri.gif",
		tarefas: []
}

sprint_88.tarefas.push(newTarefa(6438, "[FAST] Bug ao trocar de clínica no call center", []));
sprint_88.tarefas.push(newTarefa(7999, "[FAST] Criar relatório que mostre informações dos pacientes que faltaram na ultima consulta", []));
sprint_88.tarefas.push(newTarefa(8717, "[FAST] Colocar totalizador de valores no relatorio de de movimentos do estoque", []));
sprint_88.tarefas.push(newTarefa(8379, "[FAST] Aparecer o nome do profissional posto no campo 'Indicado por:' nos prontuários, nas 'Outras informações'", []));
sprint_88.tarefas.push(newTarefa(8436, "[FAST] No relatório de procedimentos faturados por período criar filtro por profissional e ordenar os dados por data", []));
sprint_88.tarefas.push(newTarefa(8141, "[FAST] Ao criar um paciente por padrão vir marcada as opções de envio de sms e email de aniversário", []));
sprint_88.tarefas.push(newTarefa(8433, "[FAST] Colocar caixa de seleção na renegociação para selecionar todos", []));
sprint_88.tarefas.push(newTarefa(8218, "Homologar boletos para o banco Uniprime", []));
sprint_88.tarefas.push(newTarefa(8331, "Implementar Nota Fiscal ( nfs-e ) PHI Concept Serviços - prefeitura de Florianópolis SC", []));
sprint_88.tarefas.push(newTarefa(8682, "Possibilitar ordenar as informações complementares", []));
sprint_88.tarefas.push(newTarefa(8222, "No relatório de orçamento por status, melhorar a exibição do relatório na versão para os formatos .xlsx e .docx", []));
sprint_88.tarefas.push(newTarefa(8709, "Quando uma agenda estiver vinculada com orçamento odontológico, a aba de financeiro deve mostrar os faturamentos vinculados ao orçamento", []));
sprint_88.tarefas.push(newTarefa(8305, "Na pesquisa geral do sistema, quando pesquisar por profissional com escala, mostrar descrição do tipo de consulta.", []));


const sprint_89 = {
		title: 'Sprint 89',
		sprint_number: "89",
		meta: "Possibilitar assinar o laudo através de uma imagem e escolher os dias da semana em uma campanha",
		data_atualizacao: "10/02/2019 a partir das 22:00",
		easter_egg: "/static/images/feliz1.gif",
		tarefas: []
}

sprint_89.tarefas.push(newTarefa(8052, "Criar tela para poder filtrar pacientes que já tem um tempo que não passam pela clínica", []));
sprint_89.tarefas.push(newTarefa(8731, "Possibilitar a inclusão de uma imagem da assinatura nos laudos", []));
sprint_89.tarefas.push(newTarefa(8712, "Possibilitar escolher os dias da semana no período da campanha", []));
sprint_89.tarefas.push(newTarefa(8612, "Problemas na lista de espera", []));
sprint_89.tarefas.push(newTarefa(8653, "Fazer filtro na tela de orçamentos por data execução", []));


const sprint_90 = {
		title: 'Sprint 90',
		sprint_number: "90",
		meta: "Possibilitar split de pagamento e melhorias na importação de procedimentos",
		data_atualizacao: "24/02/2019 a partir das 22:00",
		easter_egg: "/static/images/sprint90.gif",
		tarefas: []
}

sprint_90.tarefas.push(newTarefa(8827, "Criar relatório de receita líquida analítico", []));
sprint_90.tarefas.push(newTarefa(8820, "Problema de emissão de nota fiscal chapecó", []));
sprint_90.tarefas.push(newTarefa(8826, "Modificar a tela de emissão de notas para faturamentos criados no modo de split de pagamento", []));
sprint_90.tarefas.push(newTarefa(8784, "Atualizar integração com RDStation para API 2.0", []));
sprint_90.tarefas.push(newTarefa(8822, "Identificar que o faturamento foi criado no modo de split de pagamento", []));
sprint_90.tarefas.push(newTarefa(8821, "Listar resumo de repasses quando acessar opção de \"gerar recibo\" em faturamentos gerados no modo split", []));
sprint_90.tarefas.push(newTarefa(8818, "Criar relatório de receita líquida sintético", []));
sprint_90.tarefas.push(newTarefa(8791, "Melhorar importação de exames no tipo de procedimento", []));
sprint_90.tarefas.push(newTarefa(8798, "Melhorar visualização das datas de pesquisa ao efetuar conciliação bancária", []));
sprint_90.tarefas.push(newTarefa(8817, "Aumentar tamanho do campo na coluna de observações do tipo de procedimento", []));
sprint_90.tarefas.push(newTarefa(8823, "Modificar a tela de emissão de recibos para faturamentos criados no modo de split de pagamento", []));
sprint_90.tarefas.push(newTarefa(8828, "Otimizar query do relatorio de agendas por periodo (com telefones) e o relatorio de pacientes por tempo sem agendar", []));
sprint_90.tarefas.push(newTarefa(8480, "Poder selecionar o prazo para reconsulta de cada convênio", []));
sprint_90.tarefas.push(newTarefa(8819, "Criar novo atributo de configuração para identificar que a clínica tem split de pagamento", []));
sprint_90.tarefas.push(newTarefa(6217, "Homologação NFS-e Contagem MG", []));
sprint_90.tarefas.push(newTarefa(8852, "Adicionar timeout na conexão para emissão, consulta e cancelamento de NF", []));


const sprint_91 = {
		title: 'Sprint 91',
		sprint_number: "91",
		meta: "Permitir realizar a cobrança de um orçamentos somente após realizar o agendamento",
		data_atualizacao: "10/03/2019 a partir das 22:00",
		easter_egg: "/static/images/sprint91.gif",
		tarefas: []
}



const _t_91 = [
	newTarefa(8886, "No orçamento, permitir cadastro do mesmo tipo de procedimento mais de uma vez",[]),
	newTarefa(8892, "Vincular faturamentos de agenda ao orçamento",[]),
	newTarefa(8891, "Possibilitar a seleção de procedimentos na agenda para orçamentos odontológicos",[]),
	newTarefa(8890, "Identificar tipo de geração de financeiro no orçamento",[])
]

sprint_91.tarefas.push(newTarefa(8885, "[Tarefa pai] Possibilitar a cobrança de orçamentos somente após agendar", _t_91));
sprint_91.tarefas.push(newTarefa(8855, "Aumentar prazo de dias para filtro da tela de movimentação financeira", []));
sprint_91.tarefas.push(newTarefa(8867, "Adicionar macro com o valor dos procedimentos realizados por terceiros", []));
sprint_91.tarefas.push(newTarefa(8876, "Adicionar configuração para que o recibo em a4 não imprima cabeçalho", []));
sprint_91.tarefas.push(newTarefa(8883, "Filtrar relatório orçamento também pelo código procedimento", []));
sprint_91.tarefas.push(newTarefa(8848, "Mesmo com a opção de bloquear atendimento sem pagamento, o sistema permite atender pela tela de prontuários do paciente", []));
sprint_91.tarefas.push(newTarefa(8849, "Quando a clínica bloqueia atendimento sem pagamento, deve permitir a visualização dos dados de prontuário dos pacientes", []));
sprint_91.tarefas.push(newTarefa(8753, "Executar drop das colunas nao utilizadas ref migração comissões", []));
sprint_91.tarefas.push(newTarefa(8857, "Executar drop das colunas de reconsulta da tabela CONFIGURACAO", []));

sprint_91.tarefas.push(newTarefa(8896, "Criar estrutura de controle de relatórios customizados", []));
sprint_91.tarefas.push(newTarefa(8889, "Relatório de vendas", []));
sprint_91.tarefas.push(newTarefa(8887, "Criar relatório ativos telemarketing", []));


const sprint_fast_42 = {
		title: 'Sprint fast 42',
		sprint_number: "F42",
		meta: "Melhorias no dashboard, alteração em massa, whitelabel e Correções diversas",
		data_atualizacao: "14/04/2019 a partir das 22:00",
		easter_egg: "/static/images/sprintFast42.gif",
		tarefas: []
}

sprint_fast_42.tarefas.push(newTarefa(7988, "Implementar Nota Fiscal ( nfs-e ) Clinica do Bem - prefeitura de Belo Horizonte", [], true, true));
sprint_fast_42.tarefas.push(newTarefa(8977, "Alinhar elementos html", []));
sprint_fast_42.tarefas.push(newTarefa(8926, "Melhorias no dashboard", []));
sprint_fast_42.tarefas.push(newTarefa(8925, "Alterar visualização de pacientes com cadastro incompleto no dashboard", []));
sprint_fast_42.tarefas.push(newTarefa(8923, "Possibilitar busca e e alteração em massa pelo status da agenda", []));
sprint_fast_42.tarefas.push(newTarefa(8915, "Alinhar campos do documento impresso do orçamento", []));
sprint_fast_42.tarefas.push(newTarefa(8881, "Exportar template de importação de procedimento com valores preenchidos", []));
sprint_fast_42.tarefas.push(newTarefa(8949, "Sistema duplica os procedimentos ao importar tabela", []));
sprint_fast_42.tarefas.push(newTarefa(8922, "Melhorar modal de atendimento odontológico", []));
sprint_fast_42.tarefas.push(newTarefa(8946, "Refazer impressão do recibo de pagamento financeiro", []));
sprint_fast_42.tarefas.push(newTarefa(8942, "Erro ao listar escala de profissional com datas inválidas", []));
sprint_fast_42.tarefas.push(newTarefa(8979, "Erro no SQL relatório personalizado Vendas", []));
sprint_fast_42.tarefas.push(newTarefa(8927, "Programar whitelabel para academia da pele", []));
	

const sprint_92 = {
	title: 'Sprint 92',
	sprint_number: "92",
	meta: "Possibilitar geração de repasse(comissão) para diversas pessoas em um faturamento e alterar procedimentos do orçamento",
	data_atualizacao: "21/04/2019 a partir das 22:00",
	easter_egg: "/static/images/sprint92.gif",
	tarefas: []
}

const tf_92 = [];
tf_92.push(newTarefa(8931, "Criar cadastro de tipos de repasse", [], false, false, true));
tf_92.push(newTarefa(8932, "Vincular o tipo de repasse com o tipo procedimento", [], false, false, true));
tf_92.push(newTarefa(8962, "Vincular regras para tipos de repasse e pessoas", [], false, false, true));
tf_92.push(newTarefa(8936, "Possibilitar a inserção de pessoas do repasse na tela de orçamento", [], false, false, true));
tf_92.push(newTarefa(8935, "Possibilitar a inserção de pessoas do repasse na tela de faturar", [], false, false, true));
tf_92.push(newTarefa(8899, "Botão aplicar a todos no desconto/acréscimo por procedimento no faturamento", [], false, false, true));
tf_92.push(newTarefa(8938, "Ajustar o cálculo de comissões para o novo formato de configuração", [], false, false, true));

sprint_92.tarefas.push(newTarefa(8953, "Possibilitar alteração de procedimentos de orçamentos já aprovados", []));
sprint_92.tarefas.push(newTarefa(8928, "Possibilitar pagamento de mais de um tipo de comissão para o mesmo procedimento", tf_92));


const sprint_93 = {
	title: 'Sprint 93',
	sprint_number: "93",
	meta: "Possibilitar o envio de mensagens via WhatsApp e possibilitar a geração de guias Tiss com mais de uma agenda.",
	data_atualizacao: "05/05/2019 a partir das 22:00",
	easter_egg: "/static/images/sprint93.gif",
	tarefas: []
}

sprint_93.tarefas.push(newTarefa(8982, "Preencher dados da guia de solicitação TISS", []));	

const tp1=[];
tp1.push(newTarefa(8985, "Possibilitar gerar guias para agendas não finalizadas", [], false, false, true));
tp1.push(newTarefa(8988, "Possibilitar escolher mais de uma agenda para uma guia TISS", [], false, false, true));
sprint_93.tarefas.push(newTarefa(6083, "[TISS] Permitir inserção de procedimentos seriados na guia SADT", tp1));


sprint_93.tarefas.push(newTarefa(9005, "Problema nas margens da solicitação de exames", []));
sprint_93.tarefas.push(newTarefa(8993, "Alterar o formato de visualização da hora na impressão do prontuário", []));
sprint_93.tarefas.push(newTarefa(8971, "Mostrar o nome da conta conectada no RD Station", []));
sprint_93.tarefas.push(newTarefa(8992, "Cliente/fornecedor é criado com status inativo ao criar novo usuário", []));

const tp2=[];
tp2.push(newTarefa(8981, "Criar tela de configuração para whats", [], false, false, true));
tp2.push(newTarefa(9004, "Criar gatilhos da agenda para envio de Whats", [], false, false, true));
tp2.push(newTarefa(9002, "Criar serviço REST para whats", []));
tp2.push(newTarefa(9003, "Consumir webservice pigeon", []));

sprint_93.tarefas.push(newTarefa(8943, "[Tarefa Pai] Integração com WhatsApp", tp2));

const sprint_94 = {
	title: 'Sprint 94',
	sprint_number: "94",
	meta: "Possibilitar o envio de guias Tiss através de webservices e realizar a devolução de dinheiro através do orçamento.",
	data_atualizacao: "19/05/2019 a partir das 22:00",
	easter_egg: "/static/images/sprint94.gif",
	tarefas: []
}
sprint_94.tarefas.push(newTarefa(8984, "Criar consumo webservice solicitação procedimento TISS", []));
sprint_94.tarefas.push(newTarefa(8995, "Criar uma configuração dos webservices TISS", []));
sprint_94.tarefas.push(newTarefa(8996, "Criar consumo webservice Elegibilidade", []));
sprint_94.tarefas.push(newTarefa(9055, "Possibilitar devolver dinheiro pelo orçamento", []));
sprint_94.tarefas.push(newTarefa(9057, "Imprimir Sessões do prontuário", []));
sprint_94.tarefas.push(newTarefa(8987, "Faturar TISS pela agenda", []));
sprint_94.tarefas.push(newTarefa(9033, "Refatorar relatório de movimentação de estoque", []));
sprint_94.tarefas.push(newTarefa(9038, "Refatorar relatório de orçamentos por status", []));
sprint_94.tarefas.push(newTarefa(9045, "Melhoria gráfica", []));
sprint_94.tarefas.push(newTarefa(9046, "Melhoria gráfica 2", []));
sprint_94.tarefas.push(newTarefa(4840, "WebService TISS Unimed BH", []));


const sprint_96 = {
	title: 'Sprint 96',
	sprint_number: "96",
	meta: "Iniciar a divisão em pacotes de funcionalidades, melhorar fluxo de caixa e fazer o extrato das contas.",
	data_atualizacao: "30/06/2019 a partir das 22:00",
	easter_egg: "/static/images/sprint96.gif",
	tarefas: []
}

const tp96=[];
tp96.push(newTarefa(9103, "Criar anotação e anotar todos os métodos com a sua funcionalidade", [], false, false, true));
tp96.push(newTarefa(9104, "Criar jar com funcionalidades do sistema", [], false, false, true));
tp96.push(newTarefa(9192, "Criar rotina de bloqueio de build sem anotação", [], false, false, true));

sprint_96.tarefas.push(newTarefa(9102, "[Tarefa Pai] Dividir o sistema em pacotes de funcionalidades", tp96));
sprint_96.tarefas.push(newTarefa(9171, "Ajustar fluxo de caixa para considerar os pagamentos detalhes", []));
sprint_96.tarefas.push(newTarefa(9087, "Alterar lógica de recados removendo DadosUsuario e inserindo Pessoa", []));
sprint_96.tarefas.push(newTarefa(9031, "Criar campo data de retorno e status de contato nas observações do paciente", []));
sprint_96.tarefas.push(newTarefa(9032, "Relatório de observações do paciente", []));
sprint_96.tarefas.push(newTarefa(9093, "Remover busca de profissionais da agendaService", []));
sprint_96.tarefas.push(newTarefa(9175, "Criar tela de extrato de contas", []));
sprint_96.tarefas.push(newTarefa(9226, "Vincular conciliação bancária à nova tela do extrato/conciliação conta", []));



const sprint_97 = {
       title: 'Sprint 97',
       sprint_number: "97",
       meta: "Modificar formato de cobrança por planos e sincronia com ADM e CNN",
       data_atualizacao: "16/07/2019 a partir das 22:00",
       easter_egg: "/static/images/sprint97.webp",
       tarefas: []
}

sprint_97.tarefas.push(newTarefa(9288, "Não mostra dentes marcados ao adicionar na seleção do odontograma", []));
sprint_97.tarefas.push(newTarefa(9252, "Não mostra a anamnese quanto tem só OBS", []));
sprint_97.tarefas.push(newTarefa(9250, "Criar opção padrão de pessoa no tipo repasse", []));
sprint_97.tarefas.push(newTarefa(9247, "Colocar icone na linha da agenda confirmada pelo paciente", []));
sprint_97.tarefas.push(newTarefa(9245, "Erro ao salvar paciente", []));
sprint_97.tarefas.push(newTarefa(9243, "Erro ao trocar cor da agenda no callcenter", []));
sprint_97.tarefas.push(newTarefa(9236, "Criar configuração para não mostrar a imagem do paciente no painel de chamadas", []));
sprint_97.tarefas.push(newTarefa(9215, "Em meu plano ter a opção de migrar plano", []));
sprint_97.tarefas.push(newTarefa(9214, "Criar validação para URL não presente na licença", []));
sprint_97.tarefas.push(newTarefa(9210, "Criar estrutura para receber uma licença do ADM ", []));
sprint_97.tarefas.push(newTarefa(9161, "Erro ao gravar agenda externa - repasses e regra geral", []));
sprint_97.tarefas.push(newTarefa(9133, "Refatorar query de busca de pacientes aniversariantes", []));
sprint_97.tarefas.push(newTarefa(9122, "Alterações na exportação de fluxo de caixa", []));

const sprint_98 = {
       title: 'Sprint 98',
       sprint_number: "98",
       meta: "Possibilitar mostrar os pacientes em ordem de chegada e criar opção de remarcação de agenda",
       data_atualizacao: "31/07/2019 a partir das 22:00",
       easter_egg: "/static/images/sprint98.webp",
       tarefas: []
}

sprint_98.tarefas.push(newTarefa(9212, "NFS-e prefeitura de Santos (já esta em produçao)", [], true, true));
sprint_98.tarefas.push(newTarefa(9251, "Criar opção de remarcação de agenda", []));
sprint_98.tarefas.push(newTarefa(9309, "Relatório de remarcações de agenda", []));
sprint_98.tarefas.push(newTarefa(9308, "Criar relatório sintético CIDs", []));
sprint_98.tarefas.push(newTarefa(9224, "Relatório analitico de CIDS diagnostico", []));
sprint_98.tarefas.push(newTarefa(9304, "Adicionar novo filtro relatório orçamento por status", []));
sprint_98.tarefas.push(newTarefa(9282, "Ajustar relatório agenda por período (com telefone)", []));
sprint_98.tarefas.push(newTarefa(9305, "Aumentar prazo nas datas dos relatórios para 1 ano", []));
sprint_98.tarefas.push(newTarefa(9278, "Aumentar o prazo de disponibilidade do arquivo de exportação dos dados", []));
sprint_98.tarefas.push(newTarefa(9244, "Criar macro de produtos para os documentos do orçamento", []));
sprint_98.tarefas.push(newTarefa(9285, "Macro para desconto e acréscimos", []));
sprint_98.tarefas.push(newTarefa(9307, "Substituir chamadas de eventos existentes atualmente pelo novo esquema do spring", []));
sprint_98.tarefas.push(newTarefa(9188, "Otimizar envio de email a todos os pacientes - tela de pacientes", []));
sprint_98.tarefas.push(newTarefa(9299, "Remover a classe/tabela PlanoSms e migrar para configuração vertical", []));
sprint_98.tarefas.push(newTarefa(9240, "Possibilitar mostrar os pacientes em ordem de chegada", []));

const sprint_99 = {
       title: 'Sprint 99',
       sprint_number: "99",
       meta: "Finalizar integação contify",
       data_atualizacao: "14/08/2019 a partir das 22:00",
       easter_egg: "/static/images/sprint99.webp",
       tarefas: []
}
sprint_99.tarefas.push(newTarefa(8109, "[Tarefa Pai] Implementar controle de espaço em disco usado pela empresa/clínica", [], true, true));
sprint_99.tarefas.push(newTarefa(9024, "Fazer alteração das lógicas de envio/leitura da imagens", []));
sprint_99.tarefas.push(newTarefa(8972, "Modificar lógica de geração de ID da sessão do pagseguro ao efetuar um pagamento", []));
sprint_99.tarefas.push(newTarefa(8582, "Adicionar o RG na tela do perfil do paciente", []));
sprint_99.tarefas.push(newTarefa(9015, "Data de faturamento para o convênio", []));
sprint_99.tarefas.push(newTarefa(9075, "Remover coluna TipoHorarioAtendimento do userPreferences e inserir no profissional", []));
sprint_99.tarefas.push(newTarefa(9077, "Remover UserPreferences e seus relacionamentos", []));
sprint_99.tarefas.push(newTarefa(9199, "Colocar fonte Gráfico pediatria e ampliar idade", []));
sprint_99.tarefas.push(newTarefa(9266, "Choque de horário em compromissos e agenda", []));
sprint_99.tarefas.push(newTarefa(9330, "Otimizar fechamento de caixa", []));
sprint_99.tarefas.push(newTarefa(9333, "Continuação contify", []));


const sprint_100 = {
       title: 'Sprint 100',
       sprint_number: "100",
       meta: "Possibilitar assinar prontuarios digitalmente.",
       data_atualizacao: "28/08/2019 a partir das 22:00",
       easter_egg: "/static/images/sprint100.gif",
       tarefas: []
}

sprint_100.tarefas.push(newTarefa(9408, "Excluir tabela USER_PREFERENCES e seus relacionamentos ", []));
sprint_100.tarefas.push(newTarefa(9478, "Sistema está permitindo inativar um prontuário em andamento", []));
sprint_100.tarefas.push(newTarefa(9471, "Só permitir deferir ou indeferir depois de prontuário finalizado", []));
sprint_100.tarefas.push(newTarefa(9432, "Permitir edição das datas de início e fim do prontuário", []));
sprint_100.tarefas.push(newTarefa(9391, "Tela para listagem de prontuários pendentes - clínica escola", []));
sprint_100.tarefas.push(newTarefa(9431, "Permitir configurar se o profissional pode editar as datas de início e fim do prontuário", []));
sprint_100.tarefas.push(newTarefa(9430, "Permitir editar a data de início e fim do prontuário", []));
sprint_100.tarefas.push(newTarefa(9428, "Gravar pareceres de indeferimento do prontuário de clínica escola", []));
sprint_100.tarefas.push(newTarefa(9420, "Modificar lógica de impressão de todos os prontuários do paciente", []));
sprint_100.tarefas.push(newTarefa(9348, "Possibilitar carregamento de certificado digital do profissional de saúde", []));
sprint_100.tarefas.push(newTarefa(9424, "Disponibilizar opção de assinar todos os prontuários do paciente", []));
sprint_100.tarefas.push(newTarefa(9423, "Disponibilizar opção de assinar prontuário individualmente", []));
sprint_100.tarefas.push(newTarefa(9421, "Mostrar o status da assinatura no header do prontuário", []));
sprint_100.tarefas.push(newTarefa(9419, "Modificar lógica de impressão de PDF do prontuário", []));
sprint_100.tarefas.push(newTarefa(9417, "Ao finalizar prontuário, gerar PDF assinado", []));
sprint_100.tarefas.push(newTarefa(9426, "Assinar novamente o prontuário ao inativar uma seção", []));
sprint_100.tarefas.push(newTarefa(9427, "Informar que o prontuário será assinado digitalmente ao finalizá-lo", []));
sprint_100.tarefas.push(newTarefa(9349, "Identificar prontuários assinados digitalmente", []));
sprint_100.tarefas.push(newTarefa(9346, "Assinar PDF do prontuário com certificado digital", []));


const sprint_101 = {
       title: 'Sprint 101/102',
       sprint_number: "101",
       meta: "Liberação da integracao com a Contify, correção de problemas diversos e possibilitar criar campanhas por convênio.",
       data_atualizacao: "Tarefas ja atualizadas.",
       easter_egg: "/static/images/sprint101.webp",
       tarefas: []
}

sprint_101.tarefas.push(newTarefa(1, "SPRINT 101", []))
sprint_101.tarefas.push(newTarefa(9576, "Possibilitar ajustar o periodo para mais dias no agendamento externo", []))
sprint_101.tarefas.push(newTarefa(9575, "Possibilitar impressão de boletos em formato de 3 por folha", []))
sprint_101.tarefas.push(newTarefa(9562, "Permitir edição de clínica por todos os planos", []))
sprint_101.tarefas.push(newTarefa(9560, "Possiblitar a escolha de campo formatado nas perguntas do prontuário", []))
sprint_101.tarefas.push(newTarefa(9554, "Posicionar o código da tabela TISS o código 22", []))
sprint_101.tarefas.push(newTarefa(9543, "Relatório personalizado Murilo Clinica Espaço Habilitar ", []))
sprint_101.tarefas.push(newTarefa(9538, "Adicionar e-mail no campo de cadastro rápido de paciente", []))
sprint_101.tarefas.push(newTarefa(9516, "Incluir filtro de Ativo/Inativo no relatório de relação de pacientes. ", []))
sprint_101.tarefas.push(newTarefa(9495, "Não enviar notificacao de alteracao de consulta para determinados status", []))
sprint_101.tarefas.push(newTarefa(9475, "Criar página para mostrar timeline do paciente", []))
sprint_101.tarefas.push(newTarefa(9442, "HABILITAR A OPÇÃO 'CRIAR' NO CADASTRO DE CONVÊNIOS", []))
sprint_101.tarefas.push(newTarefa(9379, "Criar filtro para relatório de Observações", []))
sprint_101.tarefas.push(newTarefa(9356, "Possibilitar chamar novamente o paciente no painel na tela de atendimentos", []))
sprint_101.tarefas.push(newTarefa(9194, "Aparecer a data de vencimento do faturamento nos movimentos já baixados. ", []))
sprint_101.tarefas.push(newTarefa(9023, "Criar rotina para migrar imagens para S3 amazon", []))
sprint_101.tarefas.push(newTarefa(8109, "[Tarefa Pai] Implementar controle de espaço em disco usado pela empresa/clínica", []))
sprint_101.tarefas.push(newTarefa(1, "SPRINT 102", []))
sprint_101.tarefas.push(newTarefa(9521, "Horário de inativação de prontuário incorreto no cabeçalho", []))
sprint_101.tarefas.push(newTarefa(9502, "NPE ao responder recado", []))
sprint_101.tarefas.push(newTarefa(9501, "Criar funcionalidade para o usuário repassar a administração 'master' para outro usuário", []))
sprint_101.tarefas.push(newTarefa(9492, "Melhorar fluxo de nova consulta", []))
sprint_101.tarefas.push(newTarefa(9489, "Possibilitar cancelamento manual de nota fiscal de serviço", []))
sprint_101.tarefas.push(newTarefa(9483, "Melhorias no fechamento de caixa", []))
sprint_101.tarefas.push(newTarefa(9482, "Problema ao prescrever com a MEMED em um usuário específico ", []))
sprint_101.tarefas.push(newTarefa(9479, "Reenviar SMS e Whats", []))
sprint_101.tarefas.push(newTarefa(9476, "Poder registrar informação de deferimento", []))
sprint_101.tarefas.push(newTarefa(9474, "Ao inativar prontuário não contar como atendimento", []))
sprint_101.tarefas.push(newTarefa(9473, "Imprimir assinatura digitalizada no prontuário", []))
sprint_101.tarefas.push(newTarefa(9472, "Supervisor geral poder inativar prontuário de aluno", []))
sprint_101.tarefas.push(newTarefa(9470, "Esta dando diferença nos relatórios de Fluxo de caixa", []))
sprint_101.tarefas.push(newTarefa(9468, "Mostrar número de documento faturamento na baixa", []))
sprint_101.tarefas.push(newTarefa(9452, "Poder renegociar orçamentos após ter baixado todas as parcelas ou mesmo sem ter baixado nenhuma", []))
sprint_101.tarefas.push(newTarefa(9449, "Nas notas fiscais, alterar a nomenclatura de Regime de Tributação para Regime especial de Tributação nas informações complementares ", []))
sprint_101.tarefas.push(newTarefa(9406, "Solicitar senha ao remarcar se for uma reconsulta e a mesma for remarcada para fora do período liberado", []))
sprint_101.tarefas.push(newTarefa(9398, "Poder remarcar agendamentos com datas anteriores a hoje", []))
sprint_101.tarefas.push(newTarefa(9390, "Possibilitar criar campanhas por convênio", []))
sprint_101.tarefas.push(newTarefa(9380, "Problemas nos emails com agendamento recorrente", []))
sprint_101.tarefas.push(newTarefa(1, "FAST", []))
sprint_101.tarefas.push(newTarefa(9612, "Dificuldade em fazer entrada no estoque atráves de NF-e", []))
sprint_101.tarefas.push(newTarefa(9620, "Alterar mensagem de integração com contify", []))

const sprint_103 = {
       title: 'Sprint 103',
       sprint_number: "103",
       meta: "Emitir NF-e para estrangeiros e ajustado a geração de comissões quando tem valor de convênio.",
       data_atualizacao: "Tarefas ja atualizadas.",
       easter_egg: "/static/images/sprint103.webp",
       tarefas: []
}

sprint_103.tarefas.push(newTarefa(9651, "Ajustar geração de comissão tipo repasse quando tem valor convênio e não tem paciente", []))
sprint_103.tarefas.push(newTarefa(9636, "Possibilitar escolher se o orçamento odontológico irá restringir as quantidades de agendamento dos procedimentos", []))
sprint_103.tarefas.push(newTarefa(9631, "Disponibilizar somente os convênios ativos na exportação e importação de procedimentos", []))
sprint_103.tarefas.push(newTarefa(9614, "Poder retirar assinatura do profissional na impressão dos atestados.", []))
sprint_103.tarefas.push(newTarefa(9604, "Melhorar lógica de filtros da campanha", []))
sprint_103.tarefas.push(newTarefa(9601, "Criar nova integração para emissão de notas fiscais - Prefeitura de Porto Alegre", []))
sprint_103.tarefas.push(newTarefa(9590, "Inserir indicador de que o tipo de convênio é particular", []))
sprint_103.tarefas.push(newTarefa(9585, "Possibilitar selecionar base de cálculo para geração de repasse adicional", []))
sprint_103.tarefas.push(newTarefa(9372, "Não mostrar a tab de Meu plano quando existir whitelabel preenchido e diferente de 'cnn'", []))
sprint_103.tarefas.push(newTarefa(9257, "Criar forma para selecionar data de conciliação nas Pendências de cartões/cheques ao conciliar parcela", []))
sprint_103.tarefas.push(newTarefa(9227, "Mostrar o motivo de reforço/sangria ", []))
sprint_103.tarefas.push(newTarefa(9180, "Mostrar na lista de pacientes quando o paciente é inativo", []))
sprint_103.tarefas.push(newTarefa(9084, "Melhorar importação de procedimentos", []))
sprint_103.tarefas.push(newTarefa(5219, "Emitir NF-e com documento de estrangeiro", []))


const sprint_109 = {
       title: 'Resumo sprints',
       sprint_number: "109",
       meta: "Resumo das sprints até a 109, marcando os pontos principais.",
       data_atualizacao: "Tarefas ja atualizadas.",
       easter_egg: "/static/images/sprint109.gif",
       tarefas: []
}

sprint_109.tarefas.push(newTarefa(1, "Remover relógio do painel de chamadas", []));
sprint_109.tarefas.push(newTarefa(2, "Possibilidade de editar mais campos no movimento já criado. Dados do cheque e número do documento.", []));
sprint_109.tarefas.push(newTarefa(3, "Melhorado a visualização de solicitações de exame, formato igual a prescrição", []));
sprint_109.tarefas.push(newTarefa(4, "Melhoria na grid das pendências, data vencimento e número do documento", []));
sprint_109.tarefas.push(newTarefa(5, "Tipos de consulta que não validam escala", []));
sprint_109.tarefas.push(newTarefa(6, "Paginação na tela de movimentos", []));
sprint_109.tarefas.push(newTarefa(7, "Novo Formato do envio de agenda para profissionais", []));
sprint_109.tarefas.push(newTarefa(8, "Notas de serviço para estrangeiros cidade de RJ", []));
sprint_109.tarefas.push(newTarefa(9, "Conciliação de cartões via arquivo csv", []));
sprint_109.tarefas.push(newTarefa(10, "Videos no painel de chamada", []));
sprint_109.tarefas.push(newTarefa(11, "Anamnese/Questionário respondido pelo paciente", []));
sprint_109.tarefas.push(newTarefa(12, "Orçamentos criados sendo enviados ao RD", []));
sprint_109.tarefas.push(newTarefa(13, "Relatório de orçamentos ainda não finalizados", []));
sprint_109.tarefas.push(newTarefa(14, "Possibilitar imprimir a agenda na hora de salvar", []));
sprint_109.tarefas.push(newTarefa(15, "Possibilidade de saber se o procedimento orçado foi ou não realizado", []));
sprint_109.tarefas.push(newTarefa(16, "Nota fiscal serviço para Montes Claros", []));
sprint_109.tarefas.push(newTarefa(17, "Adicionar como beneficiário todos os relacionados ao responsável financeiro", []));
sprint_109.tarefas.push(newTarefa(18, "Boleto Safra 240", []));
sprint_109.tarefas.push(newTarefa(19, "Sincronizar campos personalizados pipedrive", []));
sprint_109.tarefas.push(newTarefa(20, "Pastas privadas no imagens e documentos", []));
sprint_109.tarefas.push(newTarefa(21, "Permitir impressão direta da guia de consulta ou SADT após salvar", []));
sprint_109.tarefas.push(newTarefa(22, "Prontuário conferido para clínica escola", []));
sprint_109.tarefas.push(newTarefa(23, "Novo layout para perguntas anamnese", []));
sprint_109.tarefas.push(newTarefa(24, "Filtro de convênio na consulta de disponibilidade", []));
sprint_109.tarefas.push(newTarefa(25, "Campo de e-mail do cadastro pela agenda", []));


const sprint_110 = {
       title: 'Sprint 110',
       sprint_number: "110",
       meta: "Apresentação sprint 110",
       data_atualizacao: "Tarefas parcialmente atualizadas.",
       easter_egg: "/static/images/sprint110.webp",
       tarefas: []
}
sprint_110.tarefas.push(newTarefa(10191, "Inserir informações bancárias no cliente/fornecedor", []));
sprint_110.tarefas.push(newTarefa(10213, "Criar estrutura de débito automático para tela conta", []));
sprint_110.tarefas.push(newTarefa(10188, "Criar classes para salvar as informações dos faturamentos", []));
sprint_110.tarefas.push(newTarefa(10190, "Criar tela para gerar arquivos de debito automático", []));
sprint_110.tarefas.push(newTarefa(10206, "Mostrar retorno do débito automático no detalhe do faturamento", []));
sprint_110.tarefas.push(newTarefa(10205, "Criar tela para upload do arquivo de retorno do débito", []));
sprint_110.tarefas.push(newTarefa(10187, "Criar estrutura para geração dos arquivos de debito automático", []));
sprint_110.tarefas.push(newTarefa(10269, "implementar regras do débito automático", []));
sprint_110.tarefas.push(newTarefa(9720, "[Tarefa Pai] Criar rotina para registrar débito automatico", []));

sprint_110.tarefas.push(newTarefa(10119, "Integração com prefeitura de Aracajú", []));
sprint_110.tarefas.push(newTarefa(9041, "Integração de prefeitura para emissão de notas fiscais - Uberlândia MG", []));
sprint_110.tarefas.push(newTarefa(10147, "Possibilitar imprimir as agendas do paciente", []));
sprint_110.tarefas.push(newTarefa(10148, "Remover redirecionamento do whitelabel volty", []));
sprint_110.tarefas.push(newTarefa(10163, "Adicionar campo de observações no cadastro do Cliente /Fornecedor", []));
sprint_110.tarefas.push(newTarefa(10195, "Prontuários pendentes de análise e indeferidos quando inativos", []));
sprint_110.tarefas.push(newTarefa(10165, "Inserir filtro por paciente na área de atendimentos agendados - painel de chamadas", []));
sprint_110.tarefas.push(newTarefa(10194, "Na página de Pacientes: o filtro de pacientes por profissional não está funcionando", []));


const sprint_112 = {
       title: 'Sprint 112',
       sprint_number: "112",
       meta: "Apresentação sprint 110",
       data_atualizacao: "Tarefas parcialmente atualizadas.",
       easter_egg: "/static/images/sprint112.webp",
       tarefas: []
};

sprint_112.tarefas.push(newTarefa(10164, "Relatório de detalhamento de venda.", []));
sprint_112.tarefas.push(newTarefa( 9979, "Relatório sintético Plano de benefícios.", []));
sprint_112.tarefas.push(newTarefa(10271, "Alterações na visualização dos prontuários pendentes de conferência.", []));
sprint_112.tarefas.push(newTarefa(10127, "Gerar uma guia de solicitação de procedimentos a partir de uma solicitação de exames.", []));
sprint_112.tarefas.push(newTarefa(10161, "Adicionar mais 2 campos de assinatura no bloco de procedimento seriado - SADT.", []));
sprint_112.tarefas.push(newTarefa(10234, "Possibilitar limitar a quantidade de Guias dentro de um lote TISS.", []));
sprint_112.tarefas.push(newTarefa(10261, "Possibilitar configuração de bloqueio de choque de horário de agenda por profissional.", []));
sprint_112.tarefas.push(newTarefa( 7332, "Criar impressão de etiquetas/pulseira internação.", []));

// bugs urgnte importantes

sprint_112.tarefas.push(newTarefa(0, "Extras: tarefas de bugs com melhorias importantes", [
	newTarefa(10319, "Analisar consumo excessivo de memória e processamento na consulta geral de valores.", [], false, false, true),
	newTarefa(10313, "Problemas com o editor de texto formatado.", [], false, false, true)
	], true, true, false));



const sprint_113 = {
       title: 'Sprint 113',
       sprint_number: "113",
       meta: "Apresentação sprint 113",
       data_atualizacao: "Tarefas parcialmente atualizadas.",
       easter_egg: "/static/images/sprint113.webp",
       tarefas: []
};

sprint_113.tarefas.push(newTarefa(3668, "[Tarefa pai] Criar configuração de provedor de email para a clinica", [
	newTarefa(9327, "Possibilitar configuração de dados de SMTP da clínica", [],false, false, true)
]));

sprint_113.tarefas.push(newTarefa(10192, "[Tarefa pai] Melhorias Prontuário pediatria", [
	newTarefa(10330, "Criar nova seção para dados de pediatria", [],false, false, true),
	newTarefa(10332, "Inserir novos gráficos na seção de gráficos de pediatria", [],false, false, true)
]));
sprint_113.tarefas.push(newTarefa(10308, "[Tarefa pai] Continuidade do TISS odontologia", [
	newTarefa(10323, "Alterar lógica de funcionamento dos lotes TISS", [],false, false, true),
	newTarefa(10324, "Criar tela para guia odontológica", [],false, false, true)
]));

sprint_113.tarefas.push(newTarefa(10316, "Tirar o preenchimento automático do vendedor no plano beneficio", []));
sprint_113.tarefas.push(newTarefa(7311, "Ao tirar um relatório de Relação de pacientes, o dado data de nascimento não é informado", []));
sprint_113.tarefas.push(newTarefa(10354, "Agendas repetidas com tipo de consulta que não fatura aparece o faturar.", []));
sprint_113.tarefas.push(newTarefa(10360, "Bug na visualização do compromisso", []));
sprint_113.tarefas.push(newTarefa(10125, "Imprimir guia de solicitação de procedimento em PDF", []));
sprint_113.tarefas.push(newTarefa(10205, "Criar tela para upload do arquivo de retorno do débito", []));
sprint_113.tarefas.push(newTarefa(10119, "Integração com prefeitura de Aracajú", []));

const sprint_114 = {
       title: 'Sprint 114',
       sprint_number: "114",
       meta: "Apresentação sprint 114",
       data_atualizacao: "Tarefas parcialmente atualizadas.",
       easter_egg: "/static/images/sprint114.webp",
       tarefas: []
};

sprint_114.tarefas.push(newTarefa(10473, "[Tarefa pai] Job para sincronizar arquivos e tempo de teleconsulta", [
	newTarefa(10475, "1 - Job para atualizar dados da teleconsulta", [],false, false, true),
	newTarefa(10476, "2 - Job para criar composição da gravaçao ref teleconsulta", [],false, false, true),
	newTarefa(10477, "3 - Job para download das compositions completas", [],false, false, true),
	newTarefa(10479, "Listar arquivos da teleconsulta no prontuário", [],false, false, true),
]));
sprint_114.tarefas.push(newTarefa(10486, "[Tarefa pai] Melhorias para assinatura digital de documentos do prontuário", [
	newTarefa(10468, "Ajustar CNN para assinar digitalmente as prescrições com a memed", [],false, false, true),
	newTarefa(10487, "Assinar digitalmente atestados, prescrições, laudos e solicitações de exame", [],false, false, true)
]));
sprint_114.tarefas.push(newTarefa(10486, "[Tarefa pai] Integração com twilio para teleconsulta com paciente", [
	newTarefa(10470, "Permitir ativar/desativar módulo de telemedicina", [],false, false, true),
	newTarefa(10471, "Possibilitar fixar o tamanho do vídeo para encaixar na tela de teleconsulta", [],false, false, true),
	newTarefa(10472, "Unificar botoes de ativar/desativar som e vídeo", [],false, false, true),
	newTarefa(10475, "1 - Job para atualizar dados da teleconsulta", [],false, false, true),
	newTarefa(10476, "2 - Job para criar composição da gravaçao ref teleconsulta", [],false, false, true),
	newTarefa(10477, "3 - Job para download das compositions completas", [],false, false, true),
	newTarefa(10479, "Listar arquivos da teleconsulta no prontuário", [],false, false, true),
	newTarefa(10481, "Adicionar validação do token do paciente para liberar somente quando o prontuário existir e estiver em aberto", [],false, false, true),
	newTarefa(10489, "Criar termo de consentimento para o paciente aceitar antes de iniciar a consulta por vídeo com o médico", [],false, false, true)
]));

sprint_114.tarefas.push(newTarefa(10377, "Criar coluna no orçamento para armazenar a pessoa prospectora do orçamento", []));
sprint_114.tarefas.push(newTarefa(10408, "Informar que a agenda teve remarcações", []));
sprint_114.tarefas.push(newTarefa(10422, "Aumentar tamanho do campo de observações do paciente para 1000 caracteres", []));
sprint_114.tarefas.push(newTarefa(10424, "Possibilitar escolha se imprime ou não dados de contato do paciente na anamnese/questionário", []));
sprint_114.tarefas.push(newTarefa(10432, "Melhorar carregamento e feedback visual da agenda", []));
sprint_114.tarefas.push(newTarefa(10414, "Possibilitar marcar pendência de cartão como cancelada", []));
sprint_114.tarefas.push(newTarefa(10421, "Possibilitar envio de documento do orçamento por email", []));
sprint_114.tarefas.push(newTarefa(10445, "Formato de liberaçao do módulo de plano de benefícios", []));
sprint_114.tarefas.push(newTarefa(10447, "Permitir cadastro de vários serviços com códigos e tributações diferentes", []));


const sprint_115 = {
       title: 'Sprint 115',
       sprint_number: "115",
       meta: "Apresentação sprint 115",
       data_atualizacao: "Tarefas parcialmente atualizadas.",
       easter_egg: "/static/images/sprint115.gif",
       tarefas: []
};

sprint_115.tarefas.push(newTarefa(10321, "[Tarefa pai] Implementar nova API de whatsapp", [
	newTarefa(10325, "Refatorar app que envia whatsapp", [],false, false, true),
	newTarefa(10327, "Refatorar chamadas de métodos do CNN para nova API de whatsapp",[],false, false, true)
]));

sprint_115.tarefas.push(newTarefa(10441, "Trocar a validação do certificado do sistema", []));
sprint_115.tarefas.push(newTarefa(10518, "Incorporar códigos da parte de materiais do TISS", []));
sprint_115.tarefas.push(newTarefa(10521, "Remover coluna de observação, url e url_thumb", []));
sprint_115.tarefas.push(newTarefa(10520, "Mostrar seção de teleconsulta no prontuário mesmo se não existir arquivos", []));
sprint_115.tarefas.push(newTarefa(10452, "Integração com twilio para teleconsulta com paciente", []));
sprint_115.tarefas.push(newTarefa(10551, "Rever lógica de remoção de teleconsultas da consulta do job", []));
sprint_115.tarefas.push(newTarefa(10516, "Endpoints para retorno dos dados de cobrança referentes à teleconsulta", []));
sprint_115.tarefas.push(newTarefa(10474, "Possibilitar que o profissional encerre a teleconsulta de todos os participantes", []));
sprint_115.tarefas.push(newTarefa(10515, "Possibilitar configuração para gravação ou não da teleconsulta", []));
sprint_115.tarefas.push(newTarefa(10514, "Refatorar tela de vídeo da teleconsulta para usar o template em react", []));


const sprint_116 = {
       title: 'Sprint 116',
       sprint_number: "116",
       meta: "Apresentação sprint 116",
       data_atualizacao: "Algumas tarefas já foram atualizadas.",
       easter_egg: "/static/images/sprint116.webp",
       tarefas: []
};

sprint_116.tarefas.push(newTarefa(10016, "[Tarefa Pai] Comissão por execução de orçamentos", [
	newTarefa(10374, "Criar tela de repasses para agenda", [],false, false, true),
	newTarefa(10375, "Nova rotina para tipo de cálculo de repasse no orçamento",[],false, false, true),
	newTarefa(10376, "Modificar tela de pagamento de comissão",[],false, false, true),
	newTarefa(10579, "Lista de repasses/comissões pendentes",[],false, false, true),
	newTarefa(10581, "Transferir obrigatoriedade do repasse para o salvar orçamento aprovado",[],false, false, true)
]));

sprint_116.tarefas.push(newTarefa(10554, "Melhorias no fluxo de caixa", []));
sprint_116.tarefas.push(newTarefa(10329, "Editar vendedor do plano de beneficio", []));
sprint_116.tarefas.push(newTarefa(10434, "Inserir filtro por dia da semana e por tipo de consulta nas escalas", []));
sprint_116.tarefas.push(newTarefa(10553, "Relatório de Respostas Informações adicionais por data", []));
sprint_116.tarefas.push(newTarefa(10578, "Totalizar relatórios do plano de benefício", []));

sprint_116.tarefas.push(newTarefa(10571, "Na seçao de teleconsulta dentro do prontuario, mostrar tabela com as rooms com data/hora inicial e final (REJEITADA)", [],true, true, true));
sprint_116.tarefas.push(newTarefa(10623, "Modificar apresentação da linha do tempo dos tempos de teleconsulta do prontuário", []));
sprint_116.tarefas.push(newTarefa(10568, "Aumentar tamanho tela video selecionado", []));
sprint_116.tarefas.push(newTarefa(10566, "Atualizar termo de consentimento teleconsulta", []));

sprint_116.tarefas.push(newTarefa(10645, "Ajustar menus de relatórios para o padrão de configurações", []));




const sprint_117 = {
       title: 'Sprint 117',
       sprint_number: "117",
       meta: "Apresentação sprint 117, planos/convênio, API cnn e planos de benefício",
       data_atualizacao: "Algumas tarefas já foram atualizadas.",
       easter_egg: "/static/images/sprint117.webp",
       tarefas: []
};

sprint_117.tarefas.push(newTarefa(10634, "[Tarefa pai] Possibilitar criação de agenda via API", [
	newTarefa(10657, "Expor consulta de valores de procedimento via API", [],false, false, true),
	newTarefa(10636, "Expor lista de Tipos de consulta via API", [],false, false, true),
	newTarefa(10637, "Expor lista de Local agenda via API", [],false, false, true),
	newTarefa(10638, "Expor lista de executores de agenda via API", [],false, false, true),
	newTarefa(10654, "Expor lista de procedimentos VIA API", [],false, false, true),
	newTarefa(10655, "Expor lista de pacientes via API", [],false, false, true),
	newTarefa(10656, "Expor lista de tipos de convenio via API", [],false, false, true),
	newTarefa(10663, "Expor lista de especialidades via API", [],false, false, true)
]));
sprint_117.tarefas.push(newTarefa(10593, "[Tarefa Pai] Criar planos para os convênios", [
	newTarefa(10594, "0 - Criar configuração de convênio padrão agenda externa", [],false, false, true),
	newTarefa(10598, "1 - Nova estrutura para Convênio", [],false, false, true),
	newTarefa(10599, "2 - Refatorar cadastro de Tipo de convênio", [],false, false, true),
	newTarefa(10595, "2 - Refatorar criação de nova Empresa_tenant convênio padrão", [],false, false, true),
	newTarefa(10600, "Permitir cadastrar o convênio do paciente na hora da agenda", [],false, false, true)
]));

sprint_117.tarefas.push(newTarefa(10642, "[Tarefa Pai] Criar estrutura para venda de planos para empresas conveniadas", [
	newTarefa(10652, "Criar rotina para criar contrato plano benefício", [],false, false, true),
	newTarefa(10653, "Adicionar contrato na tela de venda de plano de benefício", [],false, false, true)
]));

sprint_117.tarefas.push(newTarefa(10615, "Atualizar o valor convênio do procedimento ao salvar guia tiss", []));
sprint_117.tarefas.push(newTarefa(10684, "Possibilitar escolher o convênio dos pacientes na hora da importação", []));
sprint_117.tarefas.push(newTarefa(10658, "Adicionar local de atendimento no MultiplasAgenda", []));	

sprint_117.tarefas.push(newTarefa(10572, "BUG Quando coloca muita informação na observação do procedimento fica quebrada no agendamento", []));	
sprint_117.tarefas.push(newTarefa(10677, "BUG Melhorar a tela de inicio do teleconsulta", []));
sprint_117.tarefas.push(newTarefa(10689, "BUG Bug ao carregar a tela de horários do profissional", []));
sprint_117.tarefas.push(newTarefa(10690, "BUG Não está excluindo solicitação de procedimento", []));
sprint_117.tarefas.push(newTarefa(10695, "BUG Não esta carregando o editor para a anamnese no pré-atendimento", []));


const sprint_118 = {
       title: 'Sprint 118',
       sprint_number: "118",
       meta: "Apresentação sprint 118",
       data_atualizacao: "Algumas tarefas já foram atualizadas.",
       easter_egg: "/static/images/sprint118.webp",
       tarefas: []
};

sprint_118.tarefas.push(newTarefa(10307, "Relatório de planos de benefício por vencimento", []));
sprint_118.tarefas.push(newTarefa(10727, "Criar cadastro de motivos de cancelamento de plano de benefício", []));
sprint_118.tarefas.push(newTarefa(10728, "Possibilitar associar um motivo de cancelamento ao cancelar plano de benefício", []));
sprint_118.tarefas.push(newTarefa(10729, "Possibilitar inserir motivo de cancelamento ao cancelar plano de benefício de empresa", []));
sprint_118.tarefas.push(newTarefa(10730, "Relatório de cancelamentos de plano de benefício - sintético e analítico", []));
sprint_118.tarefas.push(newTarefa(10731, "Relatório de cancelamentos de plano de benefício - planos de empresa - sintético e analítico", []));

sprint_118.tarefas.push(newTarefa(10752, "Bug ao finalizar evolução sobre prontuário com datas antigas", []));
sprint_118.tarefas.push(newTarefa(10412, "Mostrar os detalhes do faturamento na tela de extrato financeiro do paciente", []));
sprint_118.tarefas.push(newTarefa(10413, "Quando tipo de pagamento não for cartão ou cheque, inserir data da conciliação igual à data de pagamento", []));
sprint_118.tarefas.push(newTarefa(10648, "Adicionar tag para modelo de Etiquetas", []));
sprint_118.tarefas.push(newTarefa(10664, "Mostar o indicado por na tela de prontuário", []));
sprint_118.tarefas.push(newTarefa(10665, "Mostar o indicado por na tela de Perfil do paciente", []));
sprint_118.tarefas.push(newTarefa(10646, "Poder lançar as taxas de salas para o TISS", []));

sprint_118.tarefas.push(newTarefa(10667, "Permitir cadastrar paciente via API", []));
sprint_118.tarefas.push(newTarefa(10783, "Criar endpoints para retornar registros por ID", []));
sprint_118.tarefas.push(newTarefa(10708, "Ajustar código da agenda para trabalhar apenas com uma promoção (não uma lista)", []));
sprint_118.tarefas.push(newTarefa(10712, "Retornar telefones e email do paciente na lista de agendamentos do profissional", []));

sprint_118.tarefas.push(newTarefa(10650, "Possibilitar esconder os menus do financeiro", []));
sprint_118.tarefas.push(newTarefa(10711, "Ajustar o menu financeiro para ser igual configuração e relatórios", []));
			
sprint_118.tarefas.push(newTarefa(10766, "Problema agendamento, erro convênio", []));
sprint_118.tarefas.push(newTarefa(10759, "Tela azul ao gerar recibo", []));
sprint_118.tarefas.push(newTarefa(10758, "Tela azul ao ir pra tela de atendimentos do dia do profissional, quando a clinica bloqueia atendimento sem pagamento", []));
sprint_118.tarefas.push(newTarefa(10788, "Ao clicar nos modelos de planos de documentos dos planos de benefícios, não carrega nada e trava.", []));
sprint_118.tarefas.push(newTarefa(10760, "Erro ao selecionar primeiro o convenio e depois o paciente na agenda", []));
sprint_118.tarefas.push(newTarefa(10774, "Ao gerar recibo, o mesmo vai para a tela do A Pagar e Receber", []));
sprint_118.tarefas.push(newTarefa(10761, "Convênio da agenda selecionar o primeiro", []));

const SPRINTS = [sprint_118];

module.exports = {
	getSprints: ()=>{
		return SPRINTS.map((spr)=>{
			return {
				"nome": spr.title,
				"numero": spr.sprint_number,
				"meta": spr.meta,
				"numTarefas": spr.tarefas.length
			}
		});
	},
	dadosDaSprint: (sprint_n)=>{
		
		const sp  = SPRINTS.filter((index)=>{
			return index.sprint_number == sprint_n;
		});

		return sp.length > 0 ? sp[0] : {};
	}
};
