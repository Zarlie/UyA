$("#formulario").submit(function(parametro) {
    parametro.preventDefault();
  
    $.ajax({
        url: $(this).attr("action"),
        type: $(this).attr("method"),
        data: $(this).serialize(),
    }).done(function(respuesta) {

        $.each(respuesta, function(index, value) {
            nombre = $("<h1></h1>").text("Nombre: ");
            val_nombre = $("<p></p>").text(value.name);
            body = $("<h1></h1>").text("Body: ");
            val_body = $("<p></p>").text(value.body);

            $("#resultado").append(nombre,  val_nombre, body, val_body);
        });
    });
  });
