function createTbodyAttributes(items) {
    var table = document.getElementById("table_traits");

    // Eliminar el Tbody con los objetos que contenga
    var tbody = document.getElementById("tbody_traits");
    table.removeChild(tbody);
    // Crea un nuevo Tbody 
    const tbody_traits = document.createElement("tbody");
    tbody_traits.id = "tbody_traits";
    // Agrega las filas dependiendo el número de items
    for (let i = 0; i < items; i++) {
        var tr = document.createElement('tr');
        var td_id = document.createElement('td');
        var td_name = document.createElement('td');
        var td_value = document.createElement('td');

        td_id.id = "sensor_id" + i;
        td_name.id = "sensor_name" + i;
        td_value.id = "sensor_value" + i

        tr.appendChild(td_id);
        tr.appendChild(td_name);
        tr.appendChild(td_value);

        tbody_traits.appendChild(tr);
    }
    table.appendChild(tbody_traits);
}


// Obtiene los datos del archivo JSON
async function getData(url) {
    const response = await fetch(url);
    return response.json();
}

window.setInterval(async function getAttributes() {
    // Establece la ruta del archivo JSON
    const url = "../datos/datos.json";
    const data = await getData(url);

    // Attributes toma los datos del objeto attributes
    let attributes = data["humedad"];
    
    // Se obtiene el numero de elementos
    let items = Object.keys(attributes).length

    // Se crea un Tbody con el numero de filas
    createTbodyAttributes(items);

    // establecemos un contador para el siguiente bucle
    contador = 0

    // recorremos las propiedades del objeto 
    for (let key in attributes) {
      var td_id = document.getElementById('sensor_id' + contador);
      var td_name = document.getElementById('sensor_name' + contador);
      var td_value = document.getElementById('sensor_value' + contador);

      td_id.innerHTML = attributes[key][0].id;
      td_name.innerHTML = attributes[key][0].name;
      td_value.innerHTML = attributes[key][0].value;
      contador++
    }
}, 1000);
