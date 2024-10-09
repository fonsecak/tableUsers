// Seleciona a tabela HTML onde os dados dos usuários serão exibidos
const tabela = document.getElementById("tabela");

// Seleciona o botão que listará os usuários ao ser clicado
const btnListar = document.getElementById("botao");

let tableColor;

// Array de objetos que simula um "Banco de dados" de usuários, cada objeto tem id, nome, cpf, email e status (0 para inativo e 1 para ativo)
const usuarios = [
    { id: 1, nome: 'inativo', cpf: 11350940361, email: 'test@gmail.com', status: 0 },
    { id: 2, nome: 'inativo', cpf: 11350940361, email: 'test@gmail.com', status: 0 },
    { id: 3, nome: 'inativo', cpf: 11350940361, email: 'test@gmail.com', status: 0 },
    { id: 4, nome: 'inativo', cpf: 11350940361, email: 'test@gmail.com', status: 0 },
    { id: 5, nome: 'inativo', cpf: 11350940361, email: 'test@gmail.com', status: 0 },
    { id: 6, nome: 'ativo', cpf: 11350940361, email: 'test@gmail.com', status: 1 },
    { id: 7, nome: 'ativo', cpf: 11350940361, email: 'test@gmail.com', status: 1 },
    { id: 8, nome: 'ativo', cpf: 11350940361, email: 'test@gmail.com', status: 1 },
    { id: 9, nome: 'ativo', cpf: 11350940361, email: 'test@gmail.com', status: 1 },
    { id: 10, nome: 'ativo', cpf: 11350940361, email: 'test@gmail.com', status: 1 },
];

// O método 'filter' percorre o array 'usuarios' e cria um novo array 'ativos' contendo apenas os usuários cujo status é 1 (ativo)
const ativos = usuarios.filter((user) => {
    return user.status == 1;
});

// O método 'filter' também percorre o array 'usuarios' para criar um novo array 'inativos' com os usuários cujo status é 0 (inativo)
const inativos = usuarios.filter((user) => {
    return user.status == 0;
});

// Função que exibe os usuários na tabela HTML. Recebe um array de usuários como parâmetro e gera o conteúdo da tabela
function mostrarUsuarios(listaUsuarios, color) {
    // O método 'map' percorre o array de usuários e transforma cada objeto em uma linha de tabela HTML (em formato de string)
    const tableBody = listaUsuarios.map((user) => {
        return `<tr>
            <th scope="row" class="${color}">${user.id}</th>
                <td class="${color}">${user.nome}</td>
                <td class="${color}">${user.cpf}</td>
                <td class="${color}">${user.email}</td>
        </tr>`;
    }).join('');  // 'join' une todas as linhas geradas em uma única string para que possam ser inseridas na tabela

    // Insere as linhas geradas no corpo da tabela HTML, substituindo qualquer conteúdo anterior
    tabela.innerHTML = tableBody;
}

// Aqui é onde a magia acontece, primeiro pega a variavel do botao criado no topo do codigo, usa o 'addEventListener' de 'click'
// Ao clicar no botao ele despara uma função que cria a variavel 'listaSelecionado', que pega o value atual da lista de opcoes
// Utiliza em uma nova var pois ele precisa sempre validar quando mudar, não tendo essa var criada ele fica como padrao no primeiro valor.
// Depois disso validamos se a variavel corresponde a qual lista queremos mostrar e 
// Logo em seguida quando entra no if mostramos a tabela referente a opcao escolhida.
// Chamamos a funcao mostrarUsuarios('insera aqui a lista que deseja'); com isso passamos qual tabela queremos motrar na funcao
// Passando ela como parametro.

// Adiciona um ouvinte de evento de 'click' ao botão 'btnListar'
btnListar.addEventListener('click', function() {

    // Captura o valor selecionado na lista de opções
    let listaSelecionado = document.getElementById('lista').value;

    // Verifica o valor selecionado e chama a função com a lista apropriada
    if (listaSelecionado == 'todos') {
        tableColor = 'todos';
        mostrarUsuarios(usuarios, tableColor); // Exibe todos os usuários
    } else if (listaSelecionado == 'ativos') {
        tableColor = 'ativos';
        mostrarUsuarios(ativos, tableColor); // Exibe apenas usuários ativos
    } else if (listaSelecionado == 'inativos') {
        tableColor = 'inativos';
        mostrarUsuarios(inativos, tableColor); // Exibe apenas usuários inativos
    }
});






