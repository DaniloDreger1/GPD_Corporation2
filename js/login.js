function entrar() {
  // Pega os elementos de input com IDs 'email' e 'senha'
  let email = document.querySelector('#email')

  let senha = document.querySelector('#senha')

  // Obtém a lista de usuários do localStorage, ou cria uma lista vazia se não houver nada no localStorage
  let listaUser = JSON.parse(localStorage.getItem('listaUser')) || []

  // Procura na lista de usuários se há um usuário que corresponde ao email e senha fornecidos
  let userValid = listaUser.find(
    item => item.emailCad === email.value && item.senhaCad === senha.value
  )

  // Obtém a lista de usuários do localStorage
  listaUser = JSON.parse(localStorage.getItem('listaUser'))

  listaUser.forEach(item => {
    // Se encontrar um usuário com o mesmo email e senha, atualiza a variável 'userValid'
    if (email.value == item.emailCad && senha.value == item.senhaCad) {
      userValid = {
        email: item.emailCad,
        senha: item.senhaCad
      }
    }
  })

  // Verifica se um usuário válido foi encontrado
  if (userValid) {
    // Se encontrado, exibe uma mensagem de boas-vindas e redireciona para a página 'menu.html'
    alert('Bem vindo')
    window.location.href = 'menu.html'
  } else {
    // Se não encontrado, exibe uma mensagem de erro, limpa os campos de email e senha
    alert('E-mail ou senha incorretos')

    email.value = ''
    senha.value = ''
    email.focus()
  }
}
