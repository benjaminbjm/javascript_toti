function obterDadosUsuario() {
  // Solicitar o nome do usuário
  const nome = prompt("Digite seu nome:");

  // Solicitar o sobrenome do usuário
  const sobrenome = prompt("Digite seu sobrenome:");

  // Solicitar a idade do usuário
  const idade = prompt("Digite sua idade:");

  // Criação de um objeto com as informações do usuário
  const usuario = {
      nome: nome,
      sobrenome: sobrenome,
      idade: idade
  };

  // Exibição dos dados do usuário no console
  console.log("Nome:", usuario.nome);
  console.log("Sobrenome:", usuario.sobrenome);
  console.log("Idade:", usuario.idade);
}

// Chamada da função para obter e exibir os dados do usuário no console
obterDadosUsuario();