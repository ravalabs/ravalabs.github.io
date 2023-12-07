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
        var td_trait_type = document.createElement('td');
        var td_value = document.createElement('td');

        td_id.id = "attribute_id" + i;
        td_trait_type.id = "attribute_trait_type" + i;
        td_value.id = "attribute_value" + i

        tr.appendChild(td_id);
        tr.appendChild(td_trait_type);
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
    let attributes = data["meta"];
    
    // Se obtiene el numero de elementos
    let items = Object.keys(attributes).length

    // Se crea un Tbody con el numero de filas
    createTbodyAttributes(items);

    // establecemos un contador para el siguiente bucle
    contador = 0

    // recorremos las propiedades del objeto 
    for (let key in attributes) {
      var td_id = document.getElementById('attribute_id' + contador);
      var td_trait_type = document.getElementById('attribute_trait_type' + contador);
      var td_value = document.getElementById('attribute_value' + contador);

      td_id.innerHTML = attributes[key][0].id;
      td_trait_type.innerHTML = attributes[key][0].trait_type;
      td_value.innerHTML = attributes[key][0].value;
      contador++
    }
}, 1000);
