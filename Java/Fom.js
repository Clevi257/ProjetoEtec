    
   <script>
        function enviarFormulario(event) {
            event.preventDefault(); 

       
            let nome = document.getElementById("nome").value.trim();
            let email = document.getElementById("email").value.trim();
          
            if (nome === "" || email === "")  {
                alert("Por favor, preencha todos os campos antes de enviar.");
                return;
            }

            
            document.getElementById("mensagem").innerText = "Formulário enviado, aguarde alguns dias.";

           
            setTimeout(() => {
                document.querySelector("form").submit(); 
            }, 5000); 
        }
    </script>