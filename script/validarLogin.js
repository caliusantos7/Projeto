function validarLogin() {
    var emailLogin = login.value
    var senhaLogin = senha.value
    const conectando = document.querySelector("#conectar");

    if (emailLogin=='' || senhaLogin=='') {
        alert('Preencha todos os campos')
    } else if (emailLogin=='user123@fleming.com' && senhaLogin== 123) {
        conectando.href = "dashBoard.html"
    } else {
        alert('Email ou Senha invalidos. Tente novamente')
    }
}

