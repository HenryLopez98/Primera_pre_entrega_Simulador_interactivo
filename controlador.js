let edad = parseInt(
  prompt(" Bienvenido a la casa de citas GoveTa \n Por favor dinos tu edad")
);
let citas;

calcularedad(edad);

function calcularedad(edad) {
  if (edad >= 18) {
    alert("tu puedes entrar a nuestra pagina");
    citas = parseInt(prompt(" Cuantas chicas quieres conocer hoy maximo 3 "));
    citasfunc(citas);
  } else {
    alert("este contenido es prohibido para ti");
  }
}

function citasfunc(citas) {
  if (citas > 3) {
    alert("El valor ingresado excede la cantidad permitida");
    return;
  } else {
    switch (citas) {
      case 1:
        console.log(citas);
        alert("Conociste la cita numero 1");
        break;

      case 2:
        for (let index = 1; index <= citas; index++) {
          alert("Conociste a la cita numero " + index);
        }
        break;

      case 3:
        for (let index = 1; index <= citas; index++) {
          alert("Conociste a la cita numero " + index);
        }
        break;

      default:
        break;
    }
  }
}
