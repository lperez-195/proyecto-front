var url = "http://35.223.20.167:8123/pro/productos"

function postProducto() {

console.log(url);

  var myNombre = $('#nombre').val();
  var myPrecio = $('#precio').val();
  var myVendedor = $('#vendedor').val();
  var myTelefono = $('#telefono').val();

var myProducto = {
    nombre: myNombre,
    precio: myPrecio,
    vendedor: myVendedor,
    telefono: myTelefono
  };
  console.log(myProducto);

  $.ajax({
     url: url,
     type: 'post',
     dataType: 'json',
     contentType: 'application/json',
     success: function (data) {
       console.log(data);
     },
     data: JSON.stringify(myProducto)
  });
}

function getProductos() {
  console.log(url);

  $.getJSON(url,
    function(json) {
       console.log(json);

        var arrProductos = json.productos;

        var tablaProductos = '<table border=1">';
	tablaProductos += '<tr> <th>Producto</th> <th>Precio</th> <th>Vendedor</th> <th>Teléfono</th> </tr>';

        arrProductos.forEach(function(item) {
           console.log(item);
           tablaProductos += '<tr>' +
             '<td>' + item.nombre + '</td>' +
             '<td>' + item.precio + '</td>' +
             '<td>' + item.vendedor + '</td>' +
             '<td>' + item.telefono + '</td>' +
             '</tr>';
        });

        tablaProductos += '</table>';

       $('#resultado').html(tablaProductos);

    }
  );
}
