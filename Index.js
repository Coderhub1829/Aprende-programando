
    // Array de preguntas, respuestas, respuesta correcta y temas
    const preguntasRespuestas = [
      {
        pregunta: '¿Cuál es el lenguaje de programación que se ejecuta en los navegadores y funciona para darle interactividad a las páginas web?',
        respuestas: ['JavaScript', 'Python', 'PHP'],
        respuestaCorrecta: 'JavaScript',
        tema: 'javascript'
      },
      {
        pregunta: '¿Cual  de estas linea de codigo de javascript es correcta para obtener el valor de un input',
        respuestas: ['document.querySelector("input").value','document.CreatElement("input").value','document.getElementById("input").value'],
        respuestaCorrecta: 'document.getElementById("input").value',
        tema: 'Desarrollo web'
      },
      {
        pregunta: '¿Cuál es la etiqueta html para hacer un link',
        respuestas: ['<a href=""></a>', '<button></button>','<header></header>'],
        respuestaCorrecta: '<a href=""></a>',
        tema: 'Desarrollo web'
      },
      
            {
        pregunta: '¿Cual de estas variables no se le puede cambiar el valor una ves ya dado',
        respuestas: ['var','const','let'],
        respuestaCorrecta: 'const',
        tema: 'Desarrollo web'
      },
      
      // Agregar más preguntas aquí siguiendo la misma estructura
    ];

    let preguntaIndex = 0;
    const preguntaHTML = document.getElementById('preguntas');
    const buttons = document.querySelectorAll('.button');
const preguntas = document.getElementById('pregunta');
let gamehover = document.getElementById("game-hover")
let seccion = document.getElementById("seccion")
    function juego() {
      gamehover.style.animation = "desaparicion 2s" 
      gamehover.style.transform = "translateX(-100vh) translateY(-100vh) "  
      preguntas.style.transform = "translateX(0vh)"
      preguntaHTML.innerText = preguntasRespuestas[preguntaIndex].pregunta;

      buttons.forEach((button, index) => {
        button.innerText = preguntasRespuestas[preguntaIndex].respuestas[index];
        button.disabled = false; // Reactivar los botones
        button.classList.remove('correct', 'incorrect');
      });
    }

    function verificarRespuesta(clickedButton) {
      const respuesta = clickedButton.innerText;
      const respuestaCorrecta = preguntasRespuestas[preguntaIndex].respuestaCorrecta;

      buttons.forEach((button) => {
        button.disabled = true; // Desactiva todos los botones después de seleccionar uno
      });

      if (respuesta === respuestaCorrecta) {
        clickedButton.classList.add('correct');
      preguntas.style.animation = "preguntas 2s";  
      setTimeout(salanimacion, 1000 )
        preguntaIndex++;
        if (preguntaIndex < preguntasRespuestas.length) {
          setTimeout(juego, 1000);
          
        } else {
          // Fin del juego, puedes redirigir o realizar alguna acción
         preguntas.style.transform = "translateX(-100vh)"  

window.location.href = 'https://github.com/Coderhub1829';

        }
      } else {
        clickedButton.classList.add('incorrect');
        // Aquí podrías redirigir a una sección de menú o reiniciar el juego
        // window.location.href = 'url_del_menu';
      preguntas.style.transform = "translateX(-100vh)"  
     gamehover.style.animation = "aparicion 2s" 
     gamehover.style.transform = "translateX(0vh) translateY(-100vh) "   
     
      }
    }
    function volverajugar (){
      preguntaIndex = 0;
        setTimeout(juego, 1000)
    }
function salanimacion (){
  preguntas.style.animation = "none";  
}
    setTimeout(juego, 1000);
  function seccioninform (){
    if (seccion.style.transform === "translateY(100vh)"){
      seccion.style.transform = "translateY(-100vh)";
    } else {
     seccion.style.transform = "translateY(100vh)";
    }
  }