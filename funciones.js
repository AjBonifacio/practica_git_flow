function funcionesCrud() {
  const Matricula = document.getElementById('Matricula').value;
  const Nombre = document.getElementById('Nombre').value;
  const Apellidos = document.getElementById('Apellidos').value;
  const Materia = document.getElementById('Materia').value;
  const Nota = document.getElementById('Nota').value;

  if (Matricula && Nombre && Apellidos && Materia && Nota) {
    const newFila = document.createElement('tr');

    // Añade las celdas a la fila
    newFila.innerHTML = `
      <td>${Matricula}</td>
      <td>${Nombre}</td>
      <td>${Apellidos}</td>
      <td>${Materia}</td>
      <td>${Nota}</td>
    `;

    // Crear el botón de borrar
    let borrar = document.createElement('button');
    borrar.textContent = 'Borrar';
    borrar.addEventListener('click', () => {
      listEstudiantes.removeChild(newFila);
    });

    // Crear el botón de editar 
    let editar = document.createElement('button');
    editar.textContent = 'Editar';

    editar.addEventListener('click', () => {
      if (editar.textContent === 'Editar') {
        // Colocar los datos de la fila en los inputs para editarlos
        document.getElementById('Matricula').value = newFila.children[0].textContent;
        document.getElementById('Nombre').value = newFila.children[1].textContent;
        document.getElementById('Apellidos').value = newFila.children[2].textContent;
        document.getElementById('Materia').value = newFila.children[3].textContent;
        document.getElementById('Nota').value = newFila.children[4].textContent;

        // Cambiar el texto del botón a "Guardar"
        editar.textContent = 'Guardar';
      } else if (editar.textContent === 'Guardar') {

        
        // Guardar los cambios y actualizar la fila

        newFila.children[0].textContent = document.getElementById('Matricula').value;
        newFila.children[1].textContent = document.getElementById('Nombre').value;
        newFila.children[2].textContent = document.getElementById('Apellidos').value;
        newFila.children[3].textContent = document.getElementById('Materia').value;
        newFila.children[4].textContent = document.getElementById('Nota').value;

        editar.textContent = 'Editar';

      
        document.getElementById('Matricula').value = '';
        document.getElementById('Nombre').value = '';
        document.getElementById('Apellidos').value = '';
        document.getElementById('Materia').value = '';
        document.getElementById('Nota').value = '';
      }
    });

    let accionEditar = document.createElement('td');
    accionEditar.appendChild(editar);

    let accionBorrar = document.createElement('td');
    accionBorrar.appendChild(borrar);
    
    
    
    newFila.appendChild(accionBorrar);
    newFila.appendChild(accionEditar);

   
    listEstudiantes.appendChild(newFila);

    //limpia 
    document.getElementById('Matricula').value = '';
    document.getElementById('Nombre').value = '';
    document.getElementById('Apellidos').value = '';
    document.getElementById('Materia').value = '';
    document.getElementById('Nota').value = '';
  } else {
    alert(" ingrese todos los campos del estudiante");
  }
}

botonAdd.addEventListener('click', funcionesCrud);