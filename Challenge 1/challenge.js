
function encriptar() {
    var textorempl = document.getElementById("paragraph").value;
    const texto1 = textorempl.split("e").join("enter");
    const texto2 = texto1.split("i").join("imes");
    const texto3 = texto2.split("a").join("ai");
    const texto4 = texto3.split("o").join("ober");
    const textolisto = texto4.split("u").join("ufat");
    document.getElementById("resultado").innerHTML = textolisto;
}

function desencriptar() {
    var textorempl = document.getElementById("paragraph").value;
    const texto1 = textorempl.split("enter").join("e");
    const texto2 = texto1.split("imes").join("i");
    const texto3 = texto2.split("ai").join("a");
    const texto4 = texto3.split("ober").join("o");
    const textolisto = texto4.split("ufat").join("u");
    document.getElementById("resultado").innerHTML = textolisto;
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


