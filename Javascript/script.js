
//animaciones

document.addEventListener("DOMContentLoaded", function () {
  //primer capacitor
  let distanciaCapacitor1 = document.getElementById("separacion2");
  let areaCapacitor1 = document.getElementById("separacion3");
  let distanciaCapacitor2 = document.getElementById("separacion1");
  let areaCapacitor2 = document.getElementById("separacion4");
  let inputCapacitancia1 = document.getElementById("capacitancia1");
  let inputCapacitancia3 = null , inputCapacitancia4 = null
  let inputCapacitanciaTotal = document.getElementById("capacitanciaTotal");
  let area1 = 250, distancia1 = 7.5
  let area2 = 250, distancia2 = 7.5
  let area3 = 250, distancia3 = 7.5
  let area4 = 250, distancia4 = 7.5
  let capacitancia1 = calcularCapacitanciaIndividual(area1, distancia1)
  let capacitancia2 = calcularCapacitanciaIndividual( area2, distancia2)
  let capacitancia3 = 0
  let capacitancia4 = 0 
  let voltaje_inicial = 0
  let voltajeFinal = 0
  let eliminarCapacitor = document.getElementById("eliminarCapacitor")
  let añadirCapacitor = document.getElementById("añadircapacitor")
  eliminarCapacitor.style.backgroundColor = "lightgrey"
  eliminarCapacitor.disabled = true
  capacitancia1= calcularCapacitanciaIndividual(area1, distancia1)
  inputCapacitancia1.value = formatoNotacionConSubindice(capacitancia1) + " F"
  const rango1 = document.querySelector(".slider1");
  rango1.addEventListener("input", function () {
    const valorSlider1 = parseFloat(rango1.value)
    distanciaCapacitor1.value = convertirDistancia(valorSlider1) + " mm";
    distancia1 = convertirDistancia(valorSlider1)
    capacitancia1= calcularCapacitanciaIndividual(area1, distancia1)
    inputCapacitancia1.value = formatoNotacionConSubindice(capacitancia1) + " F"
    inputCapacitanciaTotal.value=formatoNotacionConSubindice((capacitancia1 + capacitancia2))+ " F"
    actualizarDistancia(valorSlider1, "baldosa1", "baldosa2", 3, 4);
    console.log("actualizando..")
    actualizarInputCarga()
    actualizarInputEnergia()
  });
  const rango3 = document.querySelector(".slider3");
  rango3.addEventListener("input", function () {
    const valorSlider3 = parseFloat(rango3.value);
    areaCapacitor1.value = convertirArea(valorSlider3) + " mm²";
    area1 = convertirArea(valorSlider3);
    capacitancia1= calcularCapacitanciaIndividual(area1, distancia1)
    inputCapacitancia1.value = formatoNotacionConSubindice(capacitancia1) + " F"
    inputCapacitanciaTotal.value=formatoNotacionConSubindice((capacitancia1 + capacitancia2))+ " F"
    actualizarArea(valorSlider3, "baldosa1", "baldosa2", 3, 4);
    actualizarInputCarga()
    actualizarInputEnergia()
  });
  // segundo capacitor
  const rango2 = document.querySelector(".slider2");
  let inputCapacitancia2 = document.getElementById("capacitancia2");
  capacitancia2= calcularCapacitanciaIndividual(area2, distancia2)
  inputCapacitancia2.value = formatoNotacionConSubindice(capacitancia2) + " F"
  inputCapacitanciaTotal.value=formatoNotacionConSubindice((capacitancia1 + capacitancia2))+ " F"
  rango2.addEventListener("input", function () {
    const valorSlider2 = parseFloat(rango2.value);
    distanciaCapacitor2.value = convertirDistancia(valorSlider2) + " mm";
    distancia2 = convertirDistancia(valorSlider2);
    capacitancia2= calcularCapacitanciaIndividual(area2, distancia2)
    inputCapacitancia2.value = formatoNotacionConSubindice(capacitancia2) + " F"
    inputCapacitanciaTotal.value=formatoNotacionConSubindice((capacitancia1 + capacitancia2))+ " F"
    actualizarDistancia(valorSlider2, "baldosa3", "baldosa4", 5, 6);
    actualizarInputCarga()
    actualizarInputEnergia()
  });
  const rango4 = document.querySelector(".slider4");
  rango4.addEventListener("input", function () {
    const valorSlider4 = parseFloat(rango4.value);
    areaCapacitor2.value = convertirArea(valorSlider4) + " mm²";
    area2 = convertirArea(valorSlider4);
    capacitancia2= calcularCapacitanciaIndividual(area2, distancia2)
    inputCapacitancia2.value = formatoNotacionConSubindice(capacitancia2) + " F"
    inputCapacitanciaTotal.value=formatoNotacionConSubindice((capacitancia1 + capacitancia2))+ " F"
    actualizarArea(valorSlider4, "baldosa3", "baldosa4", 5, 6);
    actualizarInputCarga()
    actualizarInputEnergia()
  });

  function actualizarDistancia(
    valorSlider,
    baldosaE1,
    baldosaE2,
    circuitoNum1,
    circuitoNum2
  ) {
    const elemento1 = document.getElementById(baldosaE1 + "-intermedio-mid");
    const elemento2 = document.getElementById(baldosaE2 + "-intermedio-mid");
    const circuito1 = document.getElementById(
      "circuito-vertical" + circuitoNum1 + "-mid"
    );
    const circuito2 = document.getElementById(
      "circuito-vertical" + circuitoNum2 + "-mid"
    );
    if (valorSlider <= 49) {
      
      if (
        elemento1.className === baldosaE1 + "-pequeño-mid" ||
        elemento1.className === baldosaE1 + "-pequeño-sup" ||
        elemento1.className === baldosaE1 + "-pequeño-low"
      ) {
        elemento1.className = baldosaE1 + "-pequeño-sup";
        elemento2.className = baldosaE2 + "-pequeño-sup";
      } else if (
        elemento1.className === baldosaE1 + "-intermedio-mid" ||
        elemento1.className === baldosaE1 + "-intermedio-sup" ||
        elemento1.className === baldosaE1 + "-intermedio-low"
      ) {
        elemento1.className = baldosaE1 + "-intermedio-sup";
        elemento2.className = baldosaE2 + "-intermedio-sup";
      } else if (
        elemento1.className === baldosaE1 + "-grande-mid" ||
        elemento1.className === baldosaE1 + "-grande-sup" ||
        elemento1.className === baldosaE1 + "-grande-low"
      ) {
        elemento1.className = baldosaE1 + "-grande-sup";
        elemento2.className = baldosaE2 + "-grande-sup";
      }
      circuito1.className = "circuito-vertical" + circuitoNum1 + "-sup";
      circuito2.className = "circuito-vertical" + circuitoNum2 + "-sup";
    } else if (valorSlider <= 79) {
      if (
        elemento1.className === baldosaE1 + "-pequeño-mid" ||
        elemento1.className === baldosaE1 + "-pequeño-low" ||
        elemento1.className === baldosaE1 + "-pequeño-sup"
      ) {
        elemento1.className = baldosaE1 + "-pequeño-mid";
        elemento2.className = baldosaE2 + "-pequeño-mid";
      } else if (
        elemento1.className === baldosaE1 + "-intermedio-mid" ||
        elemento1.className === baldosaE1 + "-intermedio-low" ||
        elemento1.className === baldosaE1 + "-intermedio-sup"
      ) {
        elemento1.className = baldosaE1 + "-intermedio-mid";
        elemento2.className = baldosaE2 + "-intermedio-mid";
      } else if (
        elemento1.className === baldosaE1 + "-grande-mid" ||
        elemento1.className === baldosaE1 + "-grande-low" ||
        elemento1.className === baldosaE1 + "-grande-sup"
      ) {
        elemento1.className = baldosaE1 + "-grande-mid";
        elemento2.className = baldosaE2 + "-grande-mid";
      }
      circuito1.className = "circuito-vertical" + circuitoNum1 + "-mid";
      circuito2.className = "circuito-vertical" + circuitoNum2 + "-mid";
    } else if (valorSlider >= 80) {
      if (
        elemento1.className === baldosaE1 + "-pequeño-mid" ||
        elemento1.className === baldosaE1 + "-pequeño-low" ||
        elemento1.className === baldosaE1 + "-pequeño-sup"
      ) {
        elemento1.className = baldosaE1 + "-pequeño-low";
        elemento2.className = baldosaE2 + "-pequeño-low";
      } else if (
        elemento1.className === baldosaE1 + "-intermedio-mid" ||
        elemento1.className === baldosaE1 + "-intermedio-low" ||
        elemento1.className === baldosaE1 + "-intermedio-sup"
      ) {
        elemento1.className = baldosaE1 + "-intermedio-low";
        elemento2.className = baldosaE2 + "-intermedio-low";
      } else if (
        elemento1.className === baldosaE1 + "-grande-mid" ||
        elemento1.className === baldosaE1 + "-grande-low" ||
        elemento1.className === baldosaE1 + "-grande-sup"
      ) {
        elemento1.className = baldosaE1 + "-grande-low"
        elemento2.className = baldosaE2 + "-grande-low"
      }
      circuito1.className = "circuito-vertical" + circuitoNum1 + "-low";
      circuito2.className = "circuito-vertical" + circuitoNum2 + "-low";

    }
  }
  function actualizarArea(
    valorSlider,
    baldosaE1,
    baldosaE2,
    circuitoNum1,
    circuitoNum2
  ) {
    const elemento1 = document.getElementById(baldosaE1 + "-intermedio-mid");
    const elemento2 = document.getElementById(baldosaE2 + "-intermedio-mid");
    const circuito1 = document.getElementById(
      "circuito-vertical" + circuitoNum1 + "-mid"
    );
    const circuito2 = document.getElementById(
      "circuito-vertical" + circuitoNum2 + "-mid"
    );
    if (valorSlider <= 49) {
      if (
        elemento1.className === baldosaE1 + "-pequeño-low" ||
        elemento1.className === baldosaE1 + "-intermedio-low" ||
        elemento1.className === baldosaE1 + "-grande-low"
      ) {
        elemento1.className = baldosaE1 + "-pequeño-low";
        elemento2.className = baldosaE2 + "-pequeño-low";
      } else if (
        elemento1.className === baldosaE1 + "-pequeño-mid" ||
        elemento1.className === baldosaE1 + "-intermedio-mid" ||
        elemento1.className === baldosaE1 + "-grande-mid"
      ) {
        elemento1.className = baldosaE1 + "-pequeño-mid";
        elemento2.className = baldosaE2 + "-pequeño-mid";
      } else if (
        elemento1.className === baldosaE1 + "-pequeño-sup" ||
        elemento1.className === baldosaE1 + "-intermedio-sup" ||
        elemento1.className === baldosaE1 + "-grande-sup"
      ) {
        elemento1.className = baldosaE1 + "-pequeño-sup";
        elemento2.className = baldosaE2 + "-pequeño-sup";
      }
      circuito1.className = "circuito-vertical" + circuitoNum1 + "-low";
      circuito2.className = "circuito-vertical" + circuitoNum2 + "-mid";
    } else if (valorSlider <= 79) {
      if (
        elemento1.className === baldosaE1 + "-pequeño-low" ||
        elemento1.className === baldosaE1 + "-intermedio-low" ||
        elemento1.className === baldosaE1 + "-grande-low"
      ) {
        elemento1.className = baldosaE1 + "-intermedio-low";
        elemento2.className = baldosaE2 + "-intermedio-low";
      } else if (
        elemento1.className === baldosaE1 + "-pequeño-mid" ||
        elemento1.className === baldosaE1 + "-intermedio-mid" ||
        elemento1.className === baldosaE1 + "-grande-mid"
      ) {
        elemento1.className = baldosaE1 + "-intermedio-mid";
        elemento2.className = baldosaE2 + "-intermedio-mid";
      } else if (
        elemento1.className === baldosaE1 + "-pequeño-sup" ||
        elemento1.className === baldosaE1 + "-intermedio-sup" ||
        elemento1.className === baldosaE1 + "-grande-sup"
      ) {
        elemento1.className = baldosaE1 + "-intermedio-sup";
        elemento2.className = baldosaE2 + "-intermedio-sup";
      }
      circuito1.className = "circuito-vertical" + circuitoNum1 + "-low";
      circuito2.className = "circuito-vertical" + circuitoNum2 + "-mid";
    } else if (valorSlider >= 80) {
      if (
        elemento1.className === baldosaE1 + "-pequeño-low" ||
        elemento1.className === baldosaE1 + "-intermedio-low" ||
        elemento1.className === baldosaE1 + "-grande-low"
      ) {
        elemento1.className = baldosaE1 + "-grande-low";
        elemento2.className = baldosaE2 + "-grande-low";
      } else if (
        elemento1.className === baldosaE1 + "-pequeño-mid" ||
        elemento1.className === baldosaE1 + "-intermedio-mid" ||
        elemento1.className === baldosaE1 + "-grande-mid"
      ) {
        elemento1.className = baldosaE1 + "-grande-mid";
        elemento2.className = baldosaE2 + "-grande-mid";
      } else if (
        elemento1.className === baldosaE1 + "-pequeño-sup" ||
        elemento1.className === baldosaE1 + "-intermedio-sup" ||
        elemento1.className === baldosaE1 + "-grande-sup"
      ) {
        elemento1.className = baldosaE1 + "-grande-sup";
        elemento2.className = baldosaE2 + "-grande-sup";
      }
      circuito1.className = "circuito-vertical" + circuitoNum1 + "-low";
      circuito2.className = "circuito-vertical" + circuitoNum2 + "-mid";
    }
  }
  function convertirArea(valor) {
    const slider = 100;
    const milimetro = 200;
    let area = (valor * milimetro) / slider;
    return area + milimetro;
  }
  function convertirDistancia(valor) {
    const slider = 100;
    const milimetro = 5;
    let distancia = (valor * milimetro) / slider;
    return distancia + milimetro;
  }


  const contenedor = document.querySelector(".capacitancia-individual");
  const contenedorCapacitores = document.querySelector(".capacitores");
  let contador = 3;
  añadirCapacitor.addEventListener("click", () => {
    if (contador == 3) {
      eliminarCapacitor.style.backgroundColor = "red" ;
      eliminarCapacitor.disabled = false;
      const nuevoSpan = document.createElement("span");
      nuevoSpan.textContent = `Capacitancia ${contador}: `;
      const nuevoInput = document.createElement("input");
      nuevoInput.setAttribute("type", "text");
      nuevoInput.setAttribute("id", "capacitancia3");
      contenedor.appendChild(nuevoSpan);
      contenedor.appendChild(nuevoInput)
      const nuevoHTML = `
          <img class="circuito-horizontal5" src="/Assets/Horizontal.png" alt="#">
          <img class="circuito-horizontal6" src="/Assets/Horizontal.png" alt="#">
          <img id="baldosa5-intermedio-mid" class="baldosa5-intermedio-mid" src="/Assets/BaldosaOG.png" alt="#">
          <img id="circuito-vertical7-mid" class="circuito-vertical7-mid" src="/Assets/Vertical.png" alt="#">
          <img id="circuito-vertical8-mid" class="circuito-vertical8-mid" src="/Assets/Vertical.png" alt="#">
          <img id="baldosa6-intermedio-mid" class="baldosa6-intermedio-mid" src="/Assets/BaldosaOG.png" alt="#"> 
          <input type="range" class="slider-añadido1" min="0" max="100" value="50">
          <input type="range" class="slider-añadido2" min="0" max="100" value="50"> 
          <input id="separacion5" type="text" class="separacion5" value="7.5 mm"> 
          <input id="separacion6" type="text" class="separacion6" value="250 mm²">
        `;
      const divHTML = document.createElement("div");
      divHTML.innerHTML = nuevoHTML;
      contenedorCapacitores.appendChild(divHTML);
      const rango4 = document.querySelector(".slider-añadido1");
      let distanciaCapacitor3 = document.getElementById("separacion5");
      let areaCapacitor3 = document.getElementById("separacion6");
      inputCapacitancia3 = document.getElementById("capacitancia3");
      capacitancia3= calcularCapacitanciaIndividual(area3, distancia1)
      inputCapacitancia3.value = formatoNotacionConSubindice(capacitancia3) + " F"
      inputCapacitanciaTotal.value=formatoNotacionConSubindice((capacitancia1 + capacitancia2 + capacitancia3))+ " F"
      rango4.addEventListener("input", function () {
        const valorSlider4 = parseFloat(rango4.value);
        distancia3 = convertirDistancia(valorSlider4);
        capacitancia3= calcularCapacitanciaIndividual(area3, distancia3)
        inputCapacitancia3.value = formatoNotacionConSubindice(capacitancia3) + " F"
        inputCapacitanciaTotal.value=formatoNotacionConSubindice((capacitancia1 + capacitancia2 + capacitancia3))+ " F"
        areaCapacitor3.value = convertirArea(valorSlider4) + " mm²";
        distanciaCapacitor3.value = convertirDistancia(valorSlider4) + " mm";
        actualizarDistancia(valorSlider4, "baldosa5", "baldosa6", 7, 8);
        actualizarInputCarga()
        actualizarInputEnergia()
      });
      const rango5 = document.querySelector(".slider-añadido2");
      rango5.addEventListener("input", function () {
        const valorSlider5 = parseFloat(rango5.value);    
        area3 = convertirArea(valorSlider5);
        capacitancia3= calcularCapacitanciaIndividual(area3, distancia3)
        inputCapacitancia3.value = formatoNotacionConSubindice(capacitancia3) + " F"
        inputCapacitanciaTotal.value=formatoNotacionConSubindice((capacitancia1 + capacitancia2 + capacitancia3))+ " F"
        areaCapacitor3.value = convertirArea(valorSlider5) + " mm²";
        actualizarArea(valorSlider5, "baldosa5", "baldosa6", 7, 8);
        actualizarInputCarga()
        actualizarInputEnergia()
      })
      contador++;
      actualizarInputCarga()
      actualizarInputEnergia()
      actualizarInputDiferenciaPotencial()
    } else if (contador == 4) {
      añadirCapacitor.style.backgroundColor = "lightgrey";
      añadirCapacitor.disabled = true;
      const nuevoSpan = document.createElement("span");
      nuevoSpan.textContent = `Capacitancia ${contador}: `;
      const nuevoInput = document.createElement("input");
      nuevoInput.setAttribute("type", "text");
      nuevoInput.setAttribute("id", "capacitancia4");
      contenedor.appendChild(nuevoSpan);
      contenedor.appendChild(nuevoInput);
      const nuevoHTML = `
          <img class="circuito-horizontal7" src="/Assets/Horizontal.png" alt="#">
          <img class="circuito-horizontal8" src="/Assets/Horizontal.png" alt="#">
          <img id="baldosa7-intermedio-mid" class="baldosa7-intermedio-mid" src="/Assets/BaldosaOG.png" alt="#">
          <img id="circuito-vertical9-mid" class="circuito-vertical9-mid" src="/Assets/Vertical.png" alt="#">
          <img id="circuito-vertical10-mid" class="circuito-vertical10-mid" src="/Assets/Vertical.png" alt="#">
          <img id="baldosa8-intermedio-mid" class="baldosa8-intermedio-mid" src="/Assets/BaldosaOG.png" alt="#">
          <input type="range" class="slider-añadido3" min="0" max="100" value="50">
          <input type="range" class="slider-añadido4" min="0" max="100" value="50"> 
          <input id="separacion7" type="text" class="separacion7" value="7.5 mm"> 
          <input id="separacion8" type="text" class="separacion8" value="250 mm²"> 
        `;
      const divHTML = document.createElement("div");
      divHTML.innerHTML = nuevoHTML;
      contenedorCapacitores.appendChild(divHTML);
      contador++;
      const rango6 = document.querySelector(".slider-añadido3");
      let distanciaCapacitor4 = document.getElementById("separacion7");
      let areaCapacitor4 = document.getElementById("separacion8");
      inputCapacitancia4 = document.getElementById("capacitancia4");
      capacitancia4= calcularCapacitanciaIndividual(area3, distancia1)
      inputCapacitancia4.value = formatoNotacionConSubindice(capacitancia4) + " F"
      inputCapacitanciaTotal.value=formatoNotacionConSubindice((capacitancia1 + capacitancia2 + capacitancia3 + capacitancia4))+ " F"
      rango6.addEventListener("input", function () {
        const valorSlider6 = parseFloat(rango6.value);
        distancia4 = convertirDistancia(valorSlider6)
        capacitancia4= calcularCapacitanciaIndividual(area4, distancia4)
        inputCapacitancia4.value = formatoNotacionConSubindice(capacitancia4) + " F"
        inputCapacitanciaTotal.value=formatoNotacionConSubindice((capacitancia1 + capacitancia2 + capacitancia3 + capacitancia4))+ " F"
        distanciaCapacitor4.value = convertirDistancia(valorSlider6) + " mm";
        actualizarDistancia(valorSlider6, "baldosa7", "baldosa8", 9, 10);
        actualizarInputCarga()
        actualizarInputEnergia()
      });
      const rango5 = document.querySelector(".slider-añadido4");
      rango5.addEventListener("input", function () {
        const valorSlider7 = parseFloat(rango5.value);
        area4 = convertirArea(valorSlider7);
        capacitancia4= calcularCapacitanciaIndividual(area4, distancia4)
        inputCapacitancia4.value = formatoNotacionConSubindice(capacitancia4) + " F"
        inputCapacitanciaTotal.value=formatoNotacionConSubindice((capacitancia1 + capacitancia2 + capacitancia3 + capacitancia4))+ " F"
        areaCapacitor4.value = convertirArea(valorSlider7) + " mm²";
        actualizarArea(valorSlider7, "baldosa7", "baldosa8", 9, 10);
        actualizarInputCarga()
        actualizarInputEnergia()
      });
      actualizarInputDiferenciaPotencial()
      actualizarInputEnergia()
      actualizarInputCarga()
    }
  });


  eliminarCapacitor.addEventListener("click", () => {
    const conjuntosElementos = contenedorCapacitores.querySelectorAll("div");
    const conjunto = contenedor.querySelectorAll("input");
    const co = contenedor.querySelectorAll("span");

    if (conjuntosElementos.length > 0) {
      // Elimina el último conjunto de elementos
      const ultimoConjunto = conjuntosElementos[conjuntosElementos.length - 1];
      const ultimo = conjunto[conjunto.length - 1];
      const ulti = co[co.length - 1];
      let capacitanciaTotal

      // Elimina también los elementos span e input asociados
      contenedorCapacitores.removeChild(ultimoConjunto);
      contenedor.removeChild(ultimo);
      contenedor.removeChild(ulti);
      
      // Actualiza el contador si es necesario
      if (contador > 3) {
        contador--;
      }
      // Actualiza la lógica para habilitar/deshabilitar los botones según el contador
      if (contador == 3) {
        eliminarCapacitor.style.backgroundColor = "lightgrey"
        eliminarCapacitor.disabled = true
        capacitancia3 = 0
        capacitanciaTotal = capacitancia1 + capacitancia2 
        inputCapacitanciaTotal.value = formatoNotacionConSubindice(capacitanciaTotal) + " F"  
        actualizarInputCarga()
        actualizarInputDiferenciaPotencial()
        actualizarInputEnergia()
        actualizarInputTrabajo()
      } else if (contador == 4) {
        añadirCapacitor.style.backgroundColor = ""
        añadirCapacitor.disabled = false
        capacitancia4= 0
        actualizarInputCarga()
        actualizarInputDiferenciaPotencial()
        actualizarInputEnergia()
        actualizarInputTrabajo()
      }
      actualizarInputDiferenciaPotencial()
    }

    // Deshabilita el botón de eliminar al inicio si no hay elementos iniciales
    if (contador == 2) {
      eliminarCapacitor.disabled = true;
    }
  });
  function calcularCapacitanciaIndividual(area, distancia) {
    const constantePermitividad = 8.8541878176e-12;
    const areaMetros = area/1000000
    const distanciaMetros = distancia/1000  
    const capacitancia = (constantePermitividad * areaMetros) / (distanciaMetros);
    return capacitancia
  }
  
  function formatoNotacionConSubindice(capacitancia) {
    const [coeficiente, exponente] = capacitancia
      .toExponential(2)
      .split(/e|E/)
      .map((str) => parseFloat(str));
  
    const exponenteUnicode = exponente.toString().replace(/(\d)/g, (_, digit) => {
      const unicodeMap = {
        '0': '⁰',
        '1': '¹',
        '2': '²',
        '3': '³',
        '4': '⁴',
        '5': '⁵',
        '6': '⁶',
        '7': '⁷',
        '8': '⁸',
        '9': '⁹',
        '-': '⁻',
        '+': '⁺',
      };
      return unicodeMap[digit];
    });
  
    return `${coeficiente.toFixed(2)}×10${exponenteUnicode}`;
  }
  //calcular carga 
  let valorSliderVoltaje, diferenciaPotencialFuente, capacitanciaTotal,cargaTotal
  let cargaCapacitor1= 0, cargaCapacitor2= 0, cargaCapacitor3= 0, cargaCapacitor4 = 0
  let energiaAlmacenada1, energiaAlmacenada2, energiaAlmacenada3, energiaAlmacenada4, energiaAlmacenadaTotal
  let voltajeBateria = document.querySelector(".voltaje-bateria")
  voltajeBateria.addEventListener("input", function () { 
    const inputVoltaje = document.querySelector(".inp-voltaje")
    valorSliderVoltaje = parseFloat(voltajeBateria.value)
    actualizarInputCarga()
    actualizarInputDiferenciaPotencial()
    inputVoltaje.value= diferenciaPotencialFuente.toFixed(2) +" V"
    const imgBateria = document.querySelector(".bateria")
    if(valorSliderVoltaje<50){
      imgBateria.src= "/Assets/Bateria2-Negativo.png"
    }else{
      imgBateria.src= "/Assets/Bateria2-Positivo.png"
    }
    actualizarInputEnergia()
    
    actualizarInputTrabajo()
  })

//calcular diferencia de potencial
  let potencial1, potencial2, potencial3, potencial4
  potencial1 = document.getElementById("potencial1")
  potencial2 = document.getElementById("potencial2")
  potencial3 = document.getElementById("potencial3")
  potencial4 = document.getElementById("potencial4")

    //Trabajo 
  let trabajo1 = document.getElementById("Trabajo1");
  let trabajo2 = document.getElementById("Trabajo2");
  let trabajo3 = document.getElementById("Trabajo3");
  let trabajo4 = document.getElementById("Trabajo4");
  
  // calcular energia acomulada
  let energia1= document.getElementById("energia1")
  let energia2= document.getElementById("energia2")
  let energia3= document.getElementById("energia3")
  let energia4= document.getElementById("energia4")
  //carga
  let carga1 = document.getElementById("carga1")
  let carga2 = document.getElementById("carga2")
  let carga3 = document.getElementById("carga3")
  let carga4 = document.getElementById("carga4")
  function actualizarInputDiferenciaPotencial(){
    try {
      potencial1.innerHTML = `<span>Capacitor 1</span>${Math.abs(diferenciaPotencialFuente.toFixed(2)) + " V"}`
      potencial2.innerHTML = `<span>Capacitor 2</span>${Math.abs(diferenciaPotencialFuente.toFixed(2)) + " V"}`
      if( capacitancia3 != 0){
        potencial3.innerHTML = `<span>Capacitor 3</span>${Math.abs(diferenciaPotencialFuente.toFixed(2)) + " V"}`
      }else{
        potencial3.innerHTML = `<span>Capacitor 3</span>${0+" V"}`
      }
      if( capacitancia4 !=0){
        potencial4.innerHTML = `<span>Capacitor 4</span>${Math.abs(diferenciaPotencialFuente.toFixed(2)) + " V"}`
      }else{
        potencial4.innerHTML = `<span>Capacitor 4</span>${0+ " V"}`
      }
  } catch (error) {
    potencial1.innerHTML = `<span>Capacitor 1</span>${0 + " V"}`
    potencial2.innerHTML = `<span>Capacitor 2</span>${0+" V"}`
    potencial3.innerHTML = `<span>Capacitor 3</span>${0+" V"}`
    potencial4.innerHTML = `<span>Capacitor 4</span>${0+ " V"}`
    
      console.error('Se produjo un error:', error.message);
  }
   calcularPorcentajeVoltaje()
  }
  function actualizarInputCarga(){
    diferenciaPotencialFuente =  calcularVoltaje(valorSliderVoltaje)
    if(!isNaN(diferenciaPotencialFuente)){
      capacitanciaTotal = capacitancia1 + capacitancia2 + capacitancia3 + capacitancia4 
      cargaTotal=  calcularCarga(capacitanciaTotal, diferenciaPotencialFuente)
      cargaCapacitor1 = calcularCarga(capacitancia1,diferenciaPotencialFuente) 
      cargaCapacitor2 = calcularCarga(capacitancia2,diferenciaPotencialFuente)
      cargaCapacitor3 = calcularCarga(capacitancia3,diferenciaPotencialFuente)
      cargaCapacitor4 = calcularCarga(capacitancia4,diferenciaPotencialFuente)
      carga1.innerHTML = `<span>Capacitor 1</span>${formatoNotacionConSubindice(cargaCapacitor1) + " C"}`;
      carga2.innerHTML = `<span>Capacitor 2</span>${formatoNotacionConSubindice(cargaCapacitor2) + " C"}`;
      carga3.innerHTML = `<span>Capacitor 3</span>${formatoNotacionConSubindice(cargaCapacitor3) + " C"}`;
      carga4.innerHTML = `<span>Capacitor 4</span>${formatoNotacionConSubindice(cargaCapacitor4) + " C"}`;
      calcularPorcentajeCarga()
      actualizarInputTrabajo()
    }
  }
  function actualizarInputEnergia(){
    if(!isNaN(diferenciaPotencialFuente)){
      energiaAlmacenada1 = (1*(capacitancia1 * (diferenciaPotencialFuente**2))/2)
      energiaAlmacenada2 = (1*(capacitancia2 * (diferenciaPotencialFuente**2))/2)
      energiaAlmacenada3 = (1*(capacitancia3 * (diferenciaPotencialFuente**2))/2)
      energiaAlmacenada4 = (1*(capacitancia4 * (diferenciaPotencialFuente**2))/2)
      energiaAlmacenadaTotal = energiaAlmacenada1 +energiaAlmacenada2 +energiaAlmacenada3 + energiaAlmacenada4
      console.log("Energia almacenada total : "+formatoNotacionConSubindice( energiaAlmacenadaTotal) + " J")
      energia1.innerHTML = `<span>Capacitor 1</span>${formatoNotacionConSubindice(energiaAlmacenada1) + " J"}`
      energia2.innerHTML = `<span>Capacitor 2</span>${formatoNotacionConSubindice(energiaAlmacenada2) + " J"}`
      energia3.innerHTML = `<span>Capacitor 3</span>${formatoNotacionConSubindice(energiaAlmacenada3) + " J"}`
      energia4.innerHTML = `<span>Capacitor 4</span>${formatoNotacionConSubindice(energiaAlmacenada4) + " J"}`
      calcularPorcentajeEnergia()
    }
  }
  function calcularCarga(capacitancia, diferenciaPotencial){
    const cargaTotal =Math.abs( capacitancia * diferenciaPotencial) // valor absoluto de la carga total 
    return cargaTotal
  }
  function calcularVoltaje(valorRango) {
    const voltajeMinimo = -1.5
    const voltajeMaximo = 1.5
    const rangoDeVoltaje = voltajeMaximo - voltajeMinimo
    const valorPorPaso = rangoDeVoltaje / 100
    const voltaje = voltajeMinimo + (valorRango * valorPorPaso)
    return voltaje;
  }
  let Inputtrabajo1, Inputtrabajo2, Inputtrabajo3, Inputtrabajo4
  function actualizarInputTrabajo() {
    const diferenciaPotencial = Math.abs(diferenciaPotencialFuente.toFixed(2))
    Inputtrabajo1 = calcularTrabajo(diferenciaPotencial, cargaCapacitor1)
    Inputtrabajo2 = calcularTrabajo(diferenciaPotencial, cargaCapacitor2)
    Inputtrabajo3 = calcularTrabajo(diferenciaPotencial, cargaCapacitor3 )
    Inputtrabajo4 = calcularTrabajo(diferenciaPotencial,cargaCapacitor4)
    trabajo1.innerHTML = `<span>Capacitor 1</span>${formatoNotacionConSubindice(Inputtrabajo1) + " J"}`
    trabajo2.innerHTML = `<span>Capacitor 2</span>${formatoNotacionConSubindice(Inputtrabajo2) + " J"}`
    trabajo3.innerHTML = `<span>Capacitor 3</span>${formatoNotacionConSubindice(Inputtrabajo3) + " J"}`
    trabajo4.innerHTML = `<span>Capacitor 4</span>${formatoNotacionConSubindice(Inputtrabajo4) + " J"}`
    voltaje_inicial= voltajeFinal
    calcularPorcentajeTrabajo()
}

function calcularTrabajo( diferenciaPotencial, carga) {
   const trabajo = diferenciaPotencial * carga
    return trabajo
}

  function calcularPorcentajeCarga(){
    const progreso1 = document.getElementById("progreso1")
    const progreso2 = document.getElementById("progreso2")
    const progreso3 = document.getElementById("progreso3")
    const progreso4 = document.getElementById("progreso4")
    const porcentaje1 = (cargaCapacitor1 / 1.06e-12 ) * 100
    const porcentaje2 = (cargaCapacitor2 / 1.06e-12) * 100
    const porcentaje3 = (cargaCapacitor3 / 1.06e-12) * 100
    const porcentaje4 = (cargaCapacitor4 / 1.06e-12) * 100
    progreso1.style.setProperty("--wth", `${porcentaje1.toFixed(5)}%`)
    progreso2.style.setProperty("--wth", `${porcentaje2.toFixed(5)}%`)
    progreso3.style.setProperty("--wth", `${porcentaje3.toFixed(5)}%`)
    progreso4.style.setProperty("--wth", `${porcentaje4.toFixed(5)}%`)
  }
  function calcularPorcentajeEnergia(){
    const progreso1 = document.getElementById("progresoEnergia1")
    const progreso2 = document.getElementById("progresoEnergia2")
    const progreso3 = document.getElementById("progresoEnergia3")
    const progreso4 = document.getElementById("progresoEnergia4")
    const porcentaje1 = (energiaAlmacenada1 / 7.97e-13) * 100
    const porcentaje2 = (energiaAlmacenada2 / 7.97e-13) * 100
    const porcentaje3 = (energiaAlmacenada3 / 7.97e-13) * 100
    const porcentaje4 = (energiaAlmacenada4 / 7.97e-13) * 100
    progreso1.style.setProperty("--wth", `${porcentaje1.toFixed(5)}%`)
    progreso2.style.setProperty("--wth", `${porcentaje2.toFixed(5)}%`)
    progreso3.style.setProperty("--wth", `${porcentaje3.toFixed(5)}%`)
    progreso4.style.setProperty("--wth", `${porcentaje4.toFixed(5)}%`)
  }
  function calcularPorcentajeVoltaje(){
    const progreso1 = document.getElementById("progresoDiferencia1")
    const progreso2 = document.getElementById("progresoDiferencia2")
    const progreso3 = document.getElementById("progresoDiferencia3")
    const progreso4 = document.getElementById("progresoDiferencia4")
    const porcentaje1 = (diferenciaPotencialFuente / 150) * 10000
    const porcentaje2 = (diferenciaPotencialFuente / 150) * 10000
    const porcentaje3 = (diferenciaPotencialFuente / 150) * 10000
    const porcentaje4 = (diferenciaPotencialFuente / 150) * 10000
    progreso1.style.setProperty("--wth", `${Math.abs(porcentaje1)}%`)
    progreso2.style.setProperty("--wth", `${Math.abs(porcentaje2)}%`)
    progreso3.style.setProperty("--wth", `${Math.abs(porcentaje3)}%`)
    progreso4.style.setProperty("--wth", `${Math.abs(porcentaje4)}%`)
  }
  function calcularPorcentajeTrabajo(){
    const progreso1 = document.getElementById("progresotrabajo1")
    const progreso2 = document.getElementById("progresotrabajo2")
    const progreso3 = document.getElementById("progresotrabajo3")
    const progreso4 = document.getElementById("progresotrabajo4")
    const porcentaje1 = (Inputtrabajo1 / 1.59e-12 ) * 100
    const porcentaje2 = (Inputtrabajo2 / 1.59e-12) * 100
    const porcentaje3 = (Inputtrabajo3 / 1.59e-12) * 100
    const porcentaje4 = (Inputtrabajo4 / 1.59e-12) * 100
    progreso1.style.setProperty("--wth", `${porcentaje1.toFixed(5)}%`)
    progreso2.style.setProperty("--wth", `${porcentaje2.toFixed(5)}%`)
    progreso3.style.setProperty("--wth", `${porcentaje3.toFixed(5)}%`)
    progreso4.style.setProperty("--wth", `${porcentaje4.toFixed(5)}%`)
  }
  
  
 
})

function mostrarOcultarCodigo() {
  let checkBox1 = document.getElementById("carAlmacenadaCheck")
  let checkBox2 = document.getElementById("difPotencialCheck")
  let checkBox3 = document.getElementById("trabajoCheck")
  let checkBox4 = document.getElementById("EnAlmacenadaCheck")
  let codigoDiv1 = document.getElementById("cargaAlmacenada")
  let codigoDiv2 = document.getElementById("diferenciaPotencial")
  let codigoDiv3 = document.getElementById("trabj")
  let codigoDiv4 = document.getElementById("energiaAlmacenada")

  if (checkBox1.checked) {
      codigoDiv1.style.display = "block"
  } else {
      codigoDiv1.style.display = "none"
  }

  if (checkBox2.checked) {
    codigoDiv2.style.display = "block"
  } else {
    codigoDiv2.style.display = "none"
  }

  if (checkBox3.checked) {
    codigoDiv3.style.display = "block"
  } else {
    codigoDiv3.style.display = "none"
  }

  if (checkBox4.checked) {
    codigoDiv4.style.display = "block"
  } else {
    codigoDiv4.style.display = "none"
  }
}

function mostrarControles() {
  let controlcheckbox = document.getElementById("controles")
  let checkboxcontainer = document.getElementById("checkbox-container")

  if (controlcheckbox.checked) {
      checkboxcontainer.style.display = "block"
  } else {
      checkboxcontainer.style.display = "none"
  }
}
