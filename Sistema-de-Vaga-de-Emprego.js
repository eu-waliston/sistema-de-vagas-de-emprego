let vagas = []

function listasVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vagaAtual, indice) {
        textoFinal += indice + ". ";
        textoFinal += vaga.nome;
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")

    alert(vagasEmTexto)
}

function novaVaga() {
    const nome = prompt("Informe um nome para a vaga ");

    const descricao = prompt("Informe a descrição para a vaga ");

    const dataLimite = prompt("Informe a data limite para a vaga (dd/mm/aaaa) ");

    const confirmacao = confirm(`Deseja criar uma nova vaga com essas informações?\n\nNome da vaga${nome}Descrição${descricao}\nData limite${dataLimite}`);

    if (confirmacao) {
        const novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert("Vaga Criada");
    }
}

function exibirVaga() {
    const inidce = prompt("Informe o ìndice da vaga que deseja exibir: ");
    if(inidce >= vagas.length || inidce < 0) {
        alert("Indice Inválido");
        return
    }
    const vaga = vagas[inidce];

    const candidatosEmTexto = vagas.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + "\n - " + candidato
    }, "")

    alert(`Vaga numero ${inidce}\n Nome ${vaga.nome}\nDescrição ${vaga.descricao}\nData Limite ${vaga.dataLimite}\nQuantidade de candidatos ${vaga.candidatos.length}\nCandidatos inscritos ${candidatosEmTexto}`);
}

function inscreverCandidato() {
    const candidato = prompt("Informe nome do candidato");
    const indice = prompt("Informe o indice da vaga para qual o(a) candidato(a) deseja se inscrever ");
    const vaga = vagas[indice];

    const confirmacao = confirm(`Deseja inscrever o candidato ${candidato} na vaga ${indice} ?\n Nome ${vaga.nome}\nDescrição ${vaga.descricao}\nData Limite ${vaga.dataLimite}`)

    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada!")
    }
}

function excluirVaga() {
    const indice = prompt("Informe o indice da vaga a ser excluida");

    const vaga = vagas[indice];

    const confirmacao = confirm("Tem certeza que deseja excluir a vaga selecionada?")

    if (confirmacao) {
        vaga.splice(indice, 1)
        alert("Vaga excluida!");
    }
}

function exibirMenu() {
    const opcao = window.prompt("Bme-Vindo(a) Busca Vagas\n\n1 - Listas vagas disponiveis\n2 - Criar uma vaga\n3 - Visualizar uma vaga\n4 - Inscrever um candidato em uma vaga\n5 - Excluir uma vaga\n0 - Sair");

    return opcao;
}

function executar() {
    let opcao = "";
    do {
        opcao = exibirMenu();

        switch (opcao) {
            case "1":
                listasVagas();
                break;
            case "2":
                novaVaga();
                break;
            case "3":
                exibirVaga();
                break;
            case "4":
                inscreverCandidato();
                break;
            case "5":
                excluirVaga();
                break;
            case "0":
                alert("Saindo do Sistema");
                break;
            default:
                alert("Opção inválida!!!");
                break;
        }

    } while (opcao !== 0)
}

executar();