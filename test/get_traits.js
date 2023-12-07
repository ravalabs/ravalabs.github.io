function createTbodySensores(items) {
    var table = document.getElementById("table_sensores");

    // Eliminar el Tbody con los objetos que contenga
    var tbody = document.getElementById("tbody_sensores");
    table.removeChild(tbody);
    // Crea un nuevo Tbody 
    const tbody_sensores = document.createElement("tbody");
    tbody_sensores.id = "tbody_sensores";
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

        tbody_sensores.appendChild(tr);
    }
    table.appendChild(tbody_sensores);
}


// Obtiene los datos del archivo JSON
async function getData(url) {
    const response = await fetch(url);
    return response.json();
}

window.setInterval(async function getSensores() {
    // Establece la ruta del archivo JSON
    const url = "datos.json";
    const data = await getData(url);

    // Sensores toma los datos del objeto sensores
    let sensores = data["humedad"];
    
    // Se obtiene el numero de elementos
    let items = Object.keys(sensores).length

    // Se crea un Tbody con el numero de filas
    createTbodySensores(items);

    // establecemos un contador para el siguiente bucle
    contador = 0

    // recorremos las propiedades del objeto 
    for (let key in sensores) {
      var td_id = document.getElementById('sensor_id' + contador);
      var td_name = document.getElementById('sensor_name' + contador);
      var td_value = document.getElementById('sensor_value' + contador);

      td_id.innerHTML = sensores[key][0].id;
      td_name.innerHTML = sensores[key][0].name;
      td_value.innerHTML = sensores[key][0].value;
      contador++
    }
}, 1000);
