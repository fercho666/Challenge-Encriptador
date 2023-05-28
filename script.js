      
       function encriptar() {

            var frase = document.getElementById("text_encriptar").value.toLowerCase();
            var textoEncriptado = frase.replace(/á/img,"a");
            var textoEncriptado = textoEncriptado.replace(/é/img,"e");
            var textoEncriptado = textoEncriptado.replace(/í/img,"i");
            var textoEncriptado = textoEncriptado.replace(/ó/img,"o");
            var textoEncriptado = textoEncriptado.replace(/ú/img,"u");
            var textoEncriptado = textoEncriptado.replace(/e/img,"enter");
            var textoEncriptado = textoEncriptado.replace(/o/img,"ober");
            var textoEncriptado = textoEncriptado.replace(/i/img,"imes");
            var textoEncriptado = textoEncriptado.replace(/a/img,"ai");
            var textoEncriptado = textoEncriptado.replace(/u/img,"ufat");
       
            document.getElementById("mensaje").innerHTML = textoEncriptado;
            document.getElementById ("p2").style.display = "none";
            document.getElementById ("con_munheco").style.display = "none";
            document.getElementById("btn_copiar").style.display="show";
            document.getElementById("btn_copiar").style.display="inherit";                    
        }
       var btn = document.querySelector(".btn_encriptar");
       btn.onclick = encriptar;
        

       function desencriptar(){
        
          var frase = document.getElementById("text_encriptar").value.toLowerCase();
          var textoEncriptado = frase.replace(/enter/img,"e");
          var textoEncriptado = textoEncriptado.replace(/ober/img,"o");
          var textoEncriptado = textoEncriptado.replace(/imes/img,"i");
          var textoEncriptado = textoEncriptado.replace(/ai/img,"a");
          var textoEncriptado = textoEncriptado.replace(/ufat/img,"u");

           document.getElementById ("con_munheco").style.display = "none";
           document.getElementById("mensaje").innerHTML = textoEncriptado;
           document.getElementById("p1").style.display = "none";
           document.getElementById ("p2").style.display = "none";
          }
           
      var btn2 = document.querySelector(".btn_desencriptar");
      btn2.onclick = desencriptar;

      function copiar(){
        var contenido = document.querySelector("#mensaje");
        contenido.select();
        document.execCommand("copy");
      }
      var btn3 = document.querySelector("#btn_copiar");
      btn3.onclick = copiar;

 
