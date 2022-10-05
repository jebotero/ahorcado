// diseñamos nuestros elementos que daremos vida a nuestro juego
function dibujarCanvas(){
    // variables de instancia que usaremos e identifican a nuestro pizarra
    pizarra.lineWidth=8;
    pizarra.lineCap = "round";
    pizarra.lineJoin = "round";
    pizarra.fillStyle= "#1caedf"
    pizarra.strokeStyle = "#0A3871";
    
    // diseño de rectangulo,circulo,movimiento y linea: x, y
    pizarra.fillRect(0,0,600,600);//creacion de rectangulo
    pizarra.beginPath();//hacer camino para dibujar
    // recta del juego
    pizarra.moveTo(150,390);
    pizarra.lineTo(450,390);

    pizarra.stroke();
    pizarra.closePath();
}

function dibujarLinea(){
    // lineas de las palabras oculta
    pizarra.lineWidth=4;
    pizarra.lineCap="round";
    pizarra.lineJoin="round";    
    pizarra.strokeStyle="#0A3871";
    pizarra.beginPath();

    // dibujar las lineas de la palabra secreta
    let anchura=600/palabraSecreta.length;
    for(let i=0;i < palabraSecreta.length;i++){
        pizarra.moveTo(10 + (anchura*i),550);
        pizarra.lineTo(60 + (anchura*i),550);
    }
    // dibuja la linea
    pizarra.stroke();
    pizarra.closePath();
}
function escribirLetraCorrecta(index){
    // dibuja las letras correctas
    pizarra.font='bold 52px Inter';
    pizarra.lineWidth=6;
    pizarra.lineCap="round";
    pizarra.lineJoin="round";
    pizarra.fillStyle="#0A3871";
    let anch=600/palabraSecreta.length;
    pizarra.fillText(palabraSecreta[index], 15+(anch*index), 530);
    pizarra.stroke();
}

function escribirLetraIncorrecta(letra, errorsLeft){
    // dibuja las letras incorrectas
    pizarra.font='bold 30px Inter';
    pizarra.lineWidth=6;
    pizarra.lineCap="round";
    pizarra.lineJoin="round";
    pizarra.fillStyle="#0A3871";
    pizarra.fillText(letra,10+(40*(10-errorsLeft)),590,40);
}

// dibujar el Muñeco de ahorcado
function dibujarAhorcado(puntaje) {
    pizarra.lineWidth=8
    pizarra.lineCap="round"
    pizarra.lineJoin="round"
    pizarra.strokeStyle = "#0A3871"
    if(puntaje===8){
    //poste lateral
    pizarra.moveTo(225,10)
    pizarra.lineTo(225,390)
    }
    if(puntaje===7){//techo 
    pizarra.moveTo(225,10)
    pizarra.lineTo(375,10)
    }
    if(puntaje===6){//cuerda
    pizarra.moveTo(375,10)
    pizarra.lineTo(375,50)
    }
    if(puntaje===5){//para la cara
    pizarra.moveTo(425,100)
    pizarra.arc(375,100,50,0,Math.PI*2)
    }
    if(puntaje===4){//para cuerpo
    pizarra.moveTo(375,150)
    pizarra.lineTo(375,250)
    }
    if(puntaje===3){//para pierna izquerda
    pizarra.moveTo(375,250)
    pizarra.lineTo(325,310)
    }
    if(puntaje===2){//para pierna derecha
    pizarra.moveTo(375,250)
    pizarra.lineTo(425,310)
    }
    if(puntaje===1){//para mano izquerda
    pizarra.moveTo(375,170)
    pizarra.lineTo(325,250)
    }
    if(puntaje===0){//para mano direcha
    pizarra.moveTo(375,170)
    pizarra.lineTo(425,250)
    }
    pizarra.stroke()
    pizarra.closePath()
}

function perdiste() {
    pizarra.font = 'born 42px times';
    pizarra.lineWidth=6
    pizarra.lineCap="round"
    pizarra.lineJoin="round"
    pizarra.fillStyle="red"
    pizarra.fillText("Fin del juego!",220,450)
}

function ganaste() {
    pizarra.font = 'bold 42px Inter';
    pizarra.lineWidth=6
    pizarra.lineCap="round"
    pizarra.lineJoin="round"
    pizarra.fillStyle="green"
    pizarra.fillText("Ganaste,",220,430)
    pizarra.fillText("Felicidades!",200,470)
    // setTimeout( recargar , 1000)
}   

function recargar(){
    location.reload(); 
}