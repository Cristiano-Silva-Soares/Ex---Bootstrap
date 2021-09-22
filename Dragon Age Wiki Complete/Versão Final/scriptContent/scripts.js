let email = document.querySelector("#email")
let assunto = document.querySelector("#Assunto")
let emailOk = false;
let assuntoOk = false;



function validaEmail() {
    let txtOutlook = document.querySelector("#txtEmail");
    if(email.value.indexOf('@') == -1 && email.value.indexOf('.com') == -1) {
        txtOutlook.innerHTML = "E-mail inválido!";
        txtOutlook.style.color = "red";
    } else {
        txtOutlook.innerHTML = "E-mail válido!";
        txtOutlook.style.color = "green";
        emailOk = true;
    } 

}  

function validaAssunto() {
    let txtAssuntoNovo = document.querySelector("#txtAssunto");
    if(assunto.value.length >= 100) {
        txtAssuntoNovo.innerHTML = "Capacidade máxima de caracteres atingida!";
        txtAssuntoNovo.style.color = "red";
        txtAssuntoNovo.style.display = "block";
    } else {
        txtAssuntoNovo.style.display = "none";
        assuntoOk = true;
       
    }
}

function enviar() {
    if(emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!");
    } else {
        alert("Preencha o formulário corretamente!");
    }
}