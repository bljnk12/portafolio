
function encriptar() {
    let textorempl = document.getElementById("paragraph").value;
    if (textorempl != "") {
      const texto1 = textorempl.split("e").join("enter");
      const texto2 = texto1.split("i").join("imes");
      const texto3 = texto2.split("a").join("ai");
      const texto4 = texto3.split("o").join("ober");
      const textolisto = texto4.split("u").join("ufat");
      document.getElementById("resultado").innerHTML = textolisto;

      const imagen = document.getElementById("resultado");
      imagen.classList.remove("resultado-img")
      imagen.classList.add("resultado-txt")

      const textanim = document.getElementById("resultado");
      let str = textanim.innerHTML;
      textanim.innerHTML = "";
      const speed = 100;
      let i = 0;
      const typeWriter = () => {
          if (i < str.length) {
            textanim.innerHTML += str.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
          }
        };
      setTimeout(typeWriter, speed); 

     const copybnt = document.getElementById("copiar")
     copybnt.classList.remove("copiar")

    } else {}   
}

function desencriptar() {
    var textorempl = document.getElementById("paragraph").value;
    if (textorempl != "") {
    const texto1 = textorempl.split("enter").join("e");
    const texto2 = texto1.split("imes").join("i");
    const texto3 = texto2.split("ai").join("a");
    const texto4 = texto3.split("ober").join("o");
    const textolisto = texto4.split("ufat").join("u");
    document.getElementById("resultado").innerHTML = textolisto;

    const imagen = document.getElementById("resultado");
    imagen.classList.remove("resultado-img")
    imagen.classList.add("resultado-txt")

    const textanim = document.getElementById("resultado");
    let str = textanim.innerHTML;
    textanim.innerHTML = "";
    const speed = 100;
    let i = 0;
    const typeWriter = () => {
        if (i < str.length) {
          textanim.innerHTML += str.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      };
    setTimeout(typeWriter, speed);

    const copybnt = document.getElementById("copiar")
    copybnt.classList.remove("copiar")

    } else {}
}

const copiar = async () => {
    try {
        const texto = document.getElementById("resultado").innerHTML;
        await navigator.clipboard.writeText(texto);
        alert('Contenido copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
  }
  

