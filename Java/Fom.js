document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault(); 

       
        let nome = document.getElementById("nome").value.trim();
        let telefone = document.getElementById("telefone").value.trim();
        let email = document.getElementById("email").value.trim();
        let mensagem = document.getElementById("mensagem").value.trim();

        if (nome && telefone && email && mensagem) {
            alert("Formulário enviado com sucesso, aguarde alguns dias para o retorno.");
            document.getElementById("form").reset(); 
        } else {
            alert("Por favor, preencha todos os campos antes de enviar.");
        }
    });
});
