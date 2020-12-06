function consultaCEP(){

    var cep = document.getElementById("cep").value
    var url = `https://viacep.com.br/ws/${cep}/json/`

     
    $.ajax({
        url:url,
        type: "GET",
        success: function(response){
            
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            document.getElementById("titleCEP").innerHTML = " CEP " + response.cep;
            $(".cep").show();
            
            
        }
    })
    document.getElementById("cep").value= ""
};

$ (function(){
    $(".cep").hide();
   
})

