function myFunction() {
  var x = document.getElementById("myInput");
  var btnMostrar = document.getElementById("btnMostrar");
  if (x.type === "password") {
    x.type = "text";
    btnMostrar.textContent="Ocultar";
  } else {
    x.type = "password";
    btnMostrar.textContent="Mostrar";
  }
}