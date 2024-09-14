// 1. Obtener referencia al formulario y a la tabla
//   - `document.getElementById` es una función que devuelve un elemento HTML basado en su id.
//   - `formulario` es el elemento HTML del formulario que se va a manejar.
//   - `tablaCuerpo` es el elemento HTML de la tabla que se va a actualizar.
const formulario = document.getElementById('formulario');
const tablaCuerpo = document.getElementById('tablaCuerpo');

// 2. Manejador de envío del formulario
//   - `addEventListener` es una función que agrega un evento a un elemento HTML.
//   - `submit` es el evento que se va a manejar cuando el formulario se envíe.
//   - `event.preventDefault()` es una función que evita que el formulario se envíe por defecto.
formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    // 3. Obtener valores del formulario
    //   - `document.getElementById` es una función que devuelve un elemento HTML basado en su id.
    //   - `value` es una propiedad que devuelve el valor del elemento HTML.
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    // 4. Añadir una nueva fila a la tabla
    //   - `document.createElement` es una función que crea un nuevo elemento HTML.
    //   - `tr` es el elemento HTML de la fila que se va a crear.
    const nuevaFila = document.createElement('tr');
    //   - `innerHTML` es una propiedad que establece el contenido HTML de un elemento.
    //   - `template literals` es una forma de crear cadenas de texto con variables.
    nuevaFila.innerHTML = `
        <td>${nombre}</td>
        <td>${email}</td>
        <td>${telefono}</td>
    `;
    //   - `appendChild` es una función que agrega un elemento hijo a otro elemento.
    tablaCuerpo.appendChild(nuevaFila);

    // 5. Limpiar el formulario
    //   - `reset` es una función que reinicia los valores de un formulario.
    formulario.reset();
});

// 6. Exportar a Excel usando SheetJS
//   - `document.getElementById` es una función que devuelve un elemento HTML basado en su id.
//   - `addEventListener` es una función que agrega un evento a un elemento HTML.
//   - `click` es el evento que se va a manejar cuando el botón se haga clic.
document.getElementById('exportarExcel').addEventListener('click', function() {
    // 7. Obtener la tabla
    const tabla = document.getElementById('tabla');
    
    // 8. Convertir la tabla a un libro de Excel
    //   - `XLSX.utils.table_to_book` es una función que convierte una tabla a un libro de Excel.
    //   - `sheet: "Sheet1"` es una opción que establece el nombre de la hoja de cálculo.
    const wb = XLSX.utils.table_to_book(tabla, {sheet: "Sheet1"});
    
    // 9. Escribir el libro de Excel en un archivo
    //   - `XLSX.writeFile` es una función que escribe un libro de Excel en un archivo.
    //   - `"datos_recolectados.xlsx"` es el nombre del archivo que se va a crear.
    XLSX.writeFile(wb, "datos_recolectados.xlsx");
});