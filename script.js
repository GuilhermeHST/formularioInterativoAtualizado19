
function submit(){
    let usuario = document.getElementById("usuario").value
    let senha = document.getElementById("senha").value
    let confirmarSenha = document.getElementById("confirmarSenha").value
    let data = document.getElementById("dataNascimento").value
    console.log(usuario)
    console.log(senha);
    console.log(confirmarSenha) 
    console.log(data)
    confirmacaoSenha(senha, confirmarSenha)
    dezoitoAnos(data)
    confirmar()
    verificarSenha(senha)
    seEstarCompleto(usuario, senha, confirmarSenha, data)
}

function confirmacaoSenha(senha, confSenha){
    if(senha === confSenha){
        console.log("Senha correta!")
    }else{
        console.log("senha Incorreta!")
    }
}

function ano(){
    var ano = new Date()
    return ano.getFullYear()
}

function dezoitoAnos(anoInformado){
    var AtualAno = ano();
    var dataSeparada = anoInformado.split("-")
    var anoNascimento = dataSeparada[0]

    console.log(AtualAno)
    console.log(anoNascimento);

    var anoAtual = parseInt(AtualAno)
    var anoDeNascimento = parseInt(anoNascimento)

    if((anoAtual - anoDeNascimento) < 18 ){
        console.log("voce nao tem 18 anos!")
    } 
    
    if((anoAtual - anoDeNascimento) > 18){
        console.log("voce tem 18 anos!")
    }

}

function confirmar(){
    confirm("Deseja enviar?")
    if(true){
        console.log("ok")
    }
}

function verificarSenha(password){
    senhaSeparada = password.split("")
    console.log(senhaSeparada);
    if (senhaSeparada.length < 6) {
        console.log("Insira uma senha valida!");
        console.log("A pagina se reiniciara em 3 segundos!");
        setTimeout(function(){
            window.location.reload()
        }, 3000);
    }else{
        console.log("Senha valida!");
    }
}

function seEstarCompleto(user, password, confirmPassword, date){
    if(user.value == "" || password.value == "" || confirmPassword == "" || date == "" && window.onbeforeunload == true){
        confirm("Tem certeza?")
        if(true){
            location.reload();
        }
    }
}
