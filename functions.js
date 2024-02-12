
function guardarValor(n){
    sessionStorage.setItem('valorGuardado', n);
    if(n==sessionStorage.getItem('valorGuardado')){

    }else{
        sessionStorage.removeItem('valorGuardado')
        sessionStorage.setItem('valorGuardado',n)
    }
    
}
var vari = sessionStorage.getItem('valorGuardado');

function generarMatriz(vari) {
    let matriz = []; 
    for (var i = 0; i < vari; i++) {
        let fila = []; 
        for (var j = 0; j < vari; j++) {
            do {
                numeroAleatorio = Math.floor(Math.random() * 50) + 1;
            } while (fila.includes(numeroAleatorio) || matriz.flat().includes(numeroAleatorio)); 
            fila.push(numeroAleatorio); 
        }
        matriz.push(fila);
    }
    return matriz;
}

let matrizBoton1;
let matrizBoton2;
let matrizBoton3;
let matrizBoton4;

function matriz(matriz){
    let tabla = document.getElementById("matriz");
    tabla.innerHTML = '';
    for (var i = 0; i < matriz.length; i++) {
        let fila = tabla.insertRow();
        for (var j = 0; j < matriz[i].length; j++) {
            let celda = fila.insertCell();
            celda.textContent = matriz[i][j];
        }
    }
    return matriz
}

var matriz1 ;
var matriz2 ;
var matriz3;
var matriz4;

let titulo = document.getElementById("tablero1")
var boton = document.getElementById('b1');
boton.addEventListener('click', function() {
    if (!matrizBoton1) {
        matrizBoton1 = generarMatriz(vari);   
    }
    matriz1 = matriz(matrizBoton1);
    let bt1 = boton.textContent
    titulo.textContent = 'TABLERO ' + bt1
});

var boton1 = document.getElementById('b2');
boton1.addEventListener('click', function() {
    if (!matrizBoton2) {
        matrizBoton2 = generarMatriz(vari);
    }
    matriz2 = matriz(matrizBoton2);
    let bt2 = boton1.textContent
    titulo.textContent = 'TABLERO ' + bt2
});
var boton2 = document.getElementById('b3');
boton2.addEventListener('click', function() {
    if (!matrizBoton3) {
        matrizBoton3 = generarMatriz(vari);
    }
    matriz3 = matriz(matrizBoton3);
    let bt3 = boton2.textContent
    titulo.textContent = 'TABLERO ' + bt3
});
var boton3 = document.getElementById('b4');
boton3.addEventListener('click', function() {
    if (!matrizBoton4) {
        matrizBoton4 = generarMatriz(vari);
    }
    matriz4 = matriz(matrizBoton4);
    let bt4 = boton3.textContent
    titulo.textContent = 'TABLERO ' + bt4
});


function generarNumeroAleatorio(){
    let numeroAleatorio = Math.floor(Math.random() * 50) + 1;
    let parrafo = document.getElementById("aleatorio");
    parrafo.textContent = numeroAleatorio;
    revisarMatriz(numeroAleatorio);
    puntuacion();
    
}
var turno = 0
function turnos(){
    turno += 1;
    let parrafo = document.getElementById("turnos");
    parrafo.textContent = turno;
    if(turno==25){
        alert("JUEGO FINALIZADO VEAN SUS ESTADISTICAS EN LA PÁGINA PRINCIPAL");
        filaDePurasX1();
        filaDePurasX2();
        filaDePurasX3();
        filaDePurasX4();
        columnaDePurasX1();
        columnaDePurasX2();
        columnaDePurasX3();
        columnaDePurasX4();
        diagonalesDePurasX1();
        diagonalesDePurasX2();
        diagonalesDePurasX3();
        diagonalesDePurasX4();
        verificarGanador();
        puntuacion();
        let b = document.getElementById('b')
        b.disabled = true
        setTimeout(function() {
            window.location.href = "./Juego.html"; 
        }, 5000);
    }
}

function revisarMatriz(num){
    for (let i = 0; i < matriz1.length; i++) {
        const element = matriz1[i];
        for (let j =0 ;j < element.length; j++) {
            const element1 = element[j];
            if(element1==num){
                matriz1[i][j] = "X"

            }
            
        }
        
    }
    for (let i = 0; i < matriz2.length; i++) {
        const element = matriz2[i];
        for (let j =0 ;j < element.length; j++) {
            const element1 = element[j];
            if(element1==num){
                matriz2[i][j] = "X"

            }
            
        }
        
    }
    for (let i = 0; i < matriz3.length; i++) {
        const element = matriz3[i];
        for (let j =0 ;j < element.length; j++) {
            const element1 = element[j];
            if(element1==num){
                matriz3[i][j] = "X"

            }
            
        }
        
    }
    for (let i = 0; i < matriz4.length; i++) {
        const element = matriz4[i];
        for (let j =0 ;j < element.length; j++) {
            const element1 = element[j];
            if(element1==num){
                matriz4[i][j] = "X"

            }
            
        }
        
    }
}

function guardarNombres(){
    let nombre1 = document.getElementById('j1').value
    sessionStorage.setItem('nombre1',nombre1)
    let nombre2 = document.getElementById("j2").value
    sessionStorage.setItem('nombre2',nombre2)
    let nombre3 = document.getElementById("j3").value
    sessionStorage.setItem('nombre3',nombre3)
    let nombre4 = document.getElementById("j4").value
    sessionStorage.setItem('nombre4',nombre4)
    window.location.href="./Partida1.html"
}

var nombre1 = sessionStorage.getItem('nombre1').toUpperCase()
var nombre2 = sessionStorage.getItem('nombre2').toUpperCase()
var nombre3 = sessionStorage.getItem('nombre3').toUpperCase()
var nombre4 = sessionStorage.getItem('nombre4').toUpperCase()

function ActualizarBotones(nombre1,nombre2,nombre3,nombre4){
    var texto1 = document.getElementById('b1')
    texto1.textContent = nombre1;
    var texto2 = document.getElementById("b2")
    texto2.textContent = nombre2;
    var texto3 = document.getElementById("b3")
    texto3.textContent = nombre3;
    var texto4 = document.getElementById("b4")
    texto4.textContent = nombre4;
}
ActualizarBotones(nombre1,nombre2,nombre3,nombre4)

var puntaje1 = 0;
var puntaje2 = 0;
var puntaje3 = 0;
var puntaje4 = 0;

function filaDePurasX1() {
    for (let fila of matriz1) {
        
        if (fila.every(elemento => elemento === "X")) {
            puntaje1 +=1
            alert(puntaje1)
    }
    return false; 
    }
}
function filaDePurasX2() {
    for (let fila of matriz2) {
        
        if (fila.every(elemento => elemento === "X")) {
            puntaje2 +=1
            alert(puntaje2)
        }
    }
    return false; 
}
function filaDePurasX3() {
    for (let fila of matriz3) {
       
        if (fila.every(elemento => elemento === "X")) {
            puntaje3+=1
            alert(puntaje3)
        }
    }
    return false; 
}
function filaDePurasX4() {
    for (let fila of matriz4) {
        if (fila.every(elemento => elemento === "X")) {
            puntaje4 +=1
            
        }
    }
    return false; 
}

function columnaDePurasX1() {
    for (let j = 0; j < matriz1[0].length; j++) {
        let columna = matriz1.map(fila => fila[j]); 
        if (columna.every(elemento => elemento === "X")) {
            puntaje1+=1
            
        }
    }
    return false; 
}
function columnaDePurasX2() {
    for (let j = 0; j < matriz2[0].length; j++) {
        let columna = matriz2.map(fila => fila[j]); 
        if (columna.every(elemento => elemento === "X")) {
            puntaje2+=1
            
        }
    }
    return false; 
}
function columnaDePurasX3() {
    for (let j = 0; j < matriz3[0].length; j++) {
        let columna = matriz3.map(fila => fila[j]); 
        if (columna.every(elemento => elemento === "X")) {
            puntaje3+=1
            
        }
    }
    return false; 
}

function columnaDePurasX4() {
    for (let j = 0; j < matriz4[0].length; j++) {
        let columna = matriz4.map(fila => fila[j]); 
        if (columna.every(elemento => elemento === "X")) {
            puntaje4+=1
            
        }
    }
    return false; 
}

function diagonalesDePurasX4() {
    let diagonalPrincipal = [];
    let diagonalSecundaria = [];
        for (let i = 0; i < matriz4.length; i++) {
        diagonalPrincipal.push(matriz4[i][i]); 
        diagonalSecundaria.push(matriz4[i][matriz4.length - 1 - i]); 
    }
    
    if (diagonalPrincipal.every(elemento => elemento === "X")) {
        puntaje4 += 3;

    }
    if (diagonalSecundaria.every(elemento => elemento === "X")) {
        puntaje4 += 3;
        
    }
}
function diagonalesDePurasX3() {
    let diagonalPrincipal = [];
    let diagonalSecundaria = [];
        for (let i = 0; i < matriz3.length; i++) {
        diagonalPrincipal.push(matriz3[i][i]); 
        diagonalSecundaria.push(matriz3[i][matriz3.length - 1 - i]); 
    }
    
    if (diagonalPrincipal.every(elemento => elemento === "X")) {
        puntaje3 += 3;
    }
    
    if (diagonalSecundaria.every(elemento => elemento === "X")) {
        puntaje3 += 3;        
    }
}

function diagonalesDePurasX2() {
    let diagonalPrincipal = [];
    let diagonalSecundaria = [];
        for (let i = 0; i < matriz2.length; i++) {
        diagonalPrincipal.push(matriz2[i][i]); 
        diagonalSecundaria.push(matriz2[i][matriz2.length - 1 - i]); 
    }
    
    if (diagonalPrincipal.every(elemento => elemento === "X")) {
        puntaje2 += 3;        
    }
    
    if (diagonalSecundaria.every(elemento => elemento === "X")) {
        puntaje2 += 3;        
    }
}
function diagonalesDePurasX1() {
    let diagonalPrincipal = [];
    let diagonalSecundaria = [];
        for (let i = 0; i < matriz1.length; i++) {
        diagonalPrincipal.push(matriz1[i][i]); 
        diagonalSecundaria.push(matriz1[i][matriz1.length - 1 - i]); 
    }
    
    if (diagonalPrincipal.every(elemento => elemento === "X")) {
        puntaje1 += 3;        
    }
    
    if (diagonalSecundaria.every(elemento => elemento === "X")) {
        puntaje1 += 3;        
    }
}


function verificarGanador(){
    if(puntaje1> puntaje2 && puntaje1 > puntaje3 && puntaje1> puntaje4){
        actualizarTabla(nombre1)
        alert("El ganador es : " + nombre1)
    }
    else if(puntaje2> puntaje1 && puntaje2 > puntaje3 && puntaje2> puntaje4){
        actualizarTabla(nombre2)
        alert("El ganador es : " + nombre2)
    }
    if(puntaje3> puntaje1 && puntaje3 > puntaje2 && puntaje3> puntaje4){
        actualizarTabla(nombre3)
        alert("El ganador es : " + nombre3)
    }
    else if(puntaje4> puntaje1 && puntaje4 > puntaje2 && puntaje4> puntaje3){
        actualizarTabla(nombre4)
        alert("El ganador es : " + nombre4)
    }
    else{
        alert("EMPATE!!!")
    }
}

function guardarTablaEnLocalStorage() {
    let tabla = document.getElementById("tabla");
    let datosTabla = [];
    tabla.querySelectorAll("tr").forEach(fila => {
        let filaDatos = [];
        fila.querySelectorAll("td").forEach(celda => {
            filaDatos.push(celda.textContent);
        });
        datosTabla.push(filaDatos);
    });
    localStorage.setItem("datosTabla", JSON.stringify(datosTabla));
    alert('Tabla guardada en localStorage.');
}

function actualizarTabla(nombre){
    let datosTabla = JSON.parse(localStorage.getItem("datosTabla"));
    for (let i = 0; i < datosTabla.length; i++) {
        let elementoPrimeraColumna = datosTabla[i][0];
        if(elementoPrimeraColumna == nombre){
            datosTabla[i][1] +=1
            return datosTabla
        }
    }
    let filaNueva = [nombre,1];
    datosTabla.push(filaNueva);
    localStorage.setItem("datosTabla", JSON.stringify(datosTabla));
    return datosTabla;
}

function puntuacion(){
    let p1 = document.getElementById('p1')
    p1.textContent = 'PUNTACION ' + nombre1 + ": " + puntaje1
    let p2 = document.getElementById('p2')
    p2.textContent = 'PUNTACION ' + nombre2 + ": " + puntaje2
    let p3 = document.getElementById('p3')
    p3.textContent = 'PUNTACION ' + nombre3 + ": " + puntaje3
    let p4 = document.getElementById('p4')
    p4.textContent = 'PUNTACION ' + nombre4 + ": " + puntaje4
}










  
  



