const validator = $( ".needs-validation" );
$(document).ready(function() {
    validator.validate( {
        errorClass: "is-invalid",
        validClass: "is-valid",
      rules: {
        email: {
          required: true,
        },
        subject:{
            required: true,
          minlength: 10,
          maxlength: 50,
        },
        message:{
            required: true,
            minlength: 10,
            maxlength: 1000,
        },
      },
      messages:{
        email:{
          required: "Se requiere un correo electrónico",
          email: "El formato no es correcto"
        },
        subject:{
            required: "Se requiere un asunto",
            minlength: "El asunto debe tener al menos 10 caracteres",
            maxlength: "El asunto debe tener como máximo 50 caracteres",
        },
        message:{
            required: "Se requiere un mensaje",
            minlength: "El mensaje debe tener al menos 10 caracteres",
            maxlength: "El mensaje debe tener como máximo 1000 caracteres",
        },
      }
    });
  });
    