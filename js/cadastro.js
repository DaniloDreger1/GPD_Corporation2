// Seleciona o elemento de entrada de email e seu rótulo associado
let email = document.querySelector('#email')
let validEmail = false

// Seleciona o elemento de entrada de senha e seu rótulo associado
let senha = document.querySelector('#senha')
let validSenha = false

// Adiciona um evento para a entrada de email que é ativado quando o usuário digita
email.addEventListener('keyup', () => {
  // Verifica se o valor do email contém '@' e '.'
  if (!email.value.includes('@') || !email.value.includes('.')) {
    validEmail = false
  } else {
    validEmail = true
  }
})

// Adiciona um evento para a entrada de senha que é ativado quando o usuário digita
senha.addEventListener('keyup', () => {
  // Verifica se a senha tem pelo menos 6 caracteres
  if (senha.value.length <= 5) {
    validSenha = false
  } else {
    validSenha = true
  }
})

// Função chamada quando o usuário tenta se cadastrar
function cadastrar() {
  // Verifica se o email e a senha são válidos
  if (validEmail && validSenha) {
    // Obtém a lista de usuários do armazenamento local ou cria uma nova lista vazia
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    // Adiciona o novo usuário à lista
    listaUser.push({
      emailCad: email.value,
      senhaCad: senha.value
    })

    // Salva a lista de usuários de volta no armazenamento local
    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    // Exibe uma mensagem de boas-vindas e redireciona para a página de login após 0.5 segundos
    alert('Usuário cadastrado\nSeja Bem-vindo(a)')

    setTimeout(() => {
      window.location.href = 'index.html'
    }, 500)
  } else {
    // Se o email ou a senha não forem válidos, exibe uma mensagem de erro
    alert('Preencha todos os campos corretamente')
  }
}

document
  .querySelector('.btn-outline-primary')
  .addEventListener('click', cadastrar)
