function createTbodyNames(items) {
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
        var td_name = document.createElement('td');

        td_name.id = "name_value" + i

        tr.appendChild(td_name);

        tbody_traits.appendChild(tr);
    }
    table.appendChild(tbody_traits);
}


// Obtiene los datos del archivo JSON
async function getData(url) {
    const response = await fetch(url);
    return response.json();
}

window.setInterval(async function getNames() {
    // Establece la ruta del archivo JSON
    const url = "../datos/datos.json";
    const data = await getData(url);

    // Names toma los datos del objeto names
    let names = data["meta"];
    
    // Se obtiene el numero de elementos
    let items = Object.keys(names).length

    // Se crea un Tbody con el numero de filas
    createTbodyNames(items);

    // establecemos un contador para el siguiente bucle
    contador = 0

    // recorremos las propiedades del objeto 
    for (let key in names) {
      var td_id = document.getElementById('attribute_id' + contador);
      var td_trait_type = document.getElementById('attribute_trait_type' + contador);
      var td_value = document.getElementById('attribute_value' + contador);

      td_name.innerHTML = names[key][0].value;
      contador++
    }
}, 1000);
