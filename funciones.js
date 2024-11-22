const botonAdd = document.querySelector('button');
const listEstudiantes = document.getElementById("listaEstudiantes");


function funcionesCrud() {

    const Matricula = document.getElementById('Matricula').value;
    const Nombre = document.getElementById('Nombre').value;
    const Apellidos = document.getElementById('Apellidos').value;
    const Materia = document.getElementById('Materia').value;
    const Nota = document.getElementById('Nota').value;


    const newFila = document.createElement('tr');

      // Añade las celdas a la fila
      newFila.innerHTML = `
      <td>${Matricula}</td>
      <td>${Nombre}</td>
      <td>${Apellidos}</td>
      <td>${Materia}</td>
      <td>${Nota}</td>
    `;

}