const validator = $( ".needs-validation" );
const validator2 = $( ".needs-validation2" );

//Script para cambiar entre ingreso y registro de usuarios
$(document).ready(function() {
  const sign_in_btn = $("#sign-in-btn");
  const sign_up_btn = $("#sign-up-btn");
  const container = $(".contenedor");

  sign_up_btn.click(function() {
    container.addClass("sign-up-mode");
    $(document).ready(function() {
      $('.form-control').each(function() {
        $(this).val('');
      });  
    });
    validator.validate().resetForm();
  });
    
  sign_in_btn.click(function() {
    container.removeClass("sign-up-mode");
    $(document).ready(function() {
      $('.input-log').each(function() {
        $(this).val('');
      });  
    });
    validator2.validate().resetForm();
  });
});


//Validación de formulario de registro
$(document).ready(function() {
  validator.validate( {
    errorClass: "is-invalid",
    validClass: "is-valid",
    rules: {
      username:{
        required: true,
        minlength:5,
      },
      email: {
        required: true,
      },
      password:{
        required: true,
        minlength: 8
      },
    },
    messages:{
      username: {
        required: "Se requiere un nombre de usuario",
        minlength: "El nombre de usuario debe tener al menos 5 caracteres",
      },
      email:{
        required: "Se requiere un correo electrónico",
        email: "El formato no es correcto"
      },
      password:{
        required: "Se requiere una contraseña",
        minlength: "La contraseña debe contener al menos 8 caracteres"
      },
    }
  });

});

//Validación de formulario de ingreso   
$(document).ready(function() {
    validator2.validate( {
      errorClass: "is-invalid",
      validClass: "is-valid",
      rules: {
        username:{
          required: true,
          minlength:5,
        },
        password:{
          required: true,
          minlength: 8,
        },
      },
      messages:{
        username: {
          required: "Se requiere un nombre de usuario",
          minlength: "¿Estás seguro de que ese es tu nombre de usuario?<br>Es demasiado corto",
        },
        password:{
          required: "Se requiere una contraseña para ingresar",
          minlength: "¿Estás seguro de que esa es tu contraseña? La contraseña debe contener al menos 8 caracteres"
        },
      }
    });
  });


