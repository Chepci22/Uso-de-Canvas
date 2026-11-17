const canvas = document.getElementById("miCanvas");
const contexto = canvas.getContext("2d");


// Dibujar un rectángulo
contexto.fillStyle = "green";
contexto.fillRect(50, 50, 120, 70);


// Dibujar un círculo
contexto.beginPath();
contexto.arc(250, 85, 35, 0, Math.PI * 2);
contexto.fillStyle = "orange";
contexto.fill();


// Dibujar una línea
contexto.beginPath();
contexto.moveTo(350, 50);
contexto.lineTo(450, 120);
contexto.strokeStyle = "brown";
contexto.lineWidth = 4;
contexto.stroke();


contexto.fillStyle = "darkgreen";
contexto.font = "24px Arial";
contexto.fillText("Vivero Blanquita", 100, 200);


contexto.fillStyle = "Purple";
contexto.font = "24px Arial";
contexto.fillText("Autora: Maria Fernanda Aquino Solis", 100, 250);


contexto.fillStyle = "blue";
contexto.fillRect(50, 50, 120, 70);


// 1. Obtener el Canvas y preparar el contexto
const canvasPlanta = document.getElementById("canvasPlanta");
const ctx = canvasPlanta.getContext("2d");


// 2. Función para dibujar la planta
function dibujarPlanta(tiempo) {


    // Limpiar el dibujo anterior
    ctx.clearRect(0, 0, 600, 300);


    // Dibujar el sol
    let radioSol = 100 + Math.sin(tiempo / 500) * 5;
    ctx.beginPath();
    ctx.arc(580, 0, radioSol, 0, Math.PI * 2);
    ctx.fillStyle = "orange";
    ctx.fill();


    // Dibujar la maceta
    ctx.fillStyle = "#c41d55";
    ctx.fillRect(240, 210, 120, 60);


    // Dibujar el borde de la maceta
    ctx.fillStyle = "#671769";
    ctx.fillRect(230, 205, 140, 12);


    // Dibujar el tallo
    ctx.beginPath();
    ctx.moveTo(300, 210);
    ctx.lineTo(300, 105);
    ctx.strokeStyle = "green";
    ctx.lineWidth = 7;
    ctx.stroke();


    // Dibujar una hoja izquierda
    ctx.beginPath();
    ctx.ellipse(275, 125, 25, 12, 0.5, 0, Math.PI * 2);
    ctx.fillStyle = "#4caf50";
    ctx.fill();


    // Dibujar otra hoja izquierda
    ctx.beginPath();
    ctx.ellipse(275, 180, 25, 12, 0.5, 0, Math.PI * 2);
    ctx.fillStyle = "#1f4920";
    ctx.fill();


    // Dibujar tercera hoja izquierda
    ctx.beginPath();
    ctx.ellipse(275, 152, 25, 12, 0.5, 0, Math.PI * 2);
    ctx.fillStyle = "#459247";
    ctx.fill();


    // Dibujar una hoja derecha
    ctx.beginPath();
    ctx.ellipse(325, 125, 25, 12, -0.5, 0, Math.PI * 2);
    ctx.fillStyle = "#2e8b57";
    ctx.fill();


    // Dibujar otra hoja derecha
    ctx.beginPath();
    ctx.ellipse(325, 180, 25, 12, -0.5, 0, Math.PI * 2);
    ctx.fillStyle = "#1c683b";
    ctx.fill();


    // Dibujar tercera hoja derecha
    ctx.beginPath();
    ctx.ellipse(325, 152, 25, 12, -0.5, 0, Math.PI * 2);
    ctx.fillStyle = "#3d8158";
    ctx.fill();


    // Dibujar el texto
    ctx.fillStyle = "#771680";
    ctx.font = "22px Arial";
    ctx.fillText("Florecita en crecimiento", 30, 45);
    ctx.font = "16px Arial";
    ctx.fillText("Autora: Maria Fernanda Aquino Solis", 30, 75);


    // Solicitar el siguiente cuadro de animación
    requestAnimationFrame(dibujarPlanta);
}

// 3. Iniciar la animación
requestAnimationFrame(dibujarPlanta);














// PERSONALIZACIÓN DE MI BELLA PLANTA
// 1. Obtener el Canvas y preparar el 2do contexto
const canvasPlantaPersonalizada = document.getElementById("canvasPlantaPersonalizada");
const ctx2 = canvasPlantaPersonalizada.getContext("2d");


// 2. Función para dibujar la planta
function dibujarPlanta2(tiempo) {


    // Limpiar el dibujo anterior
    ctx2.clearRect(0, 0, 600, 300);


    // Dibujar el sol
    let radioSol2 = 50 + Math.sin(tiempo / 500) * 5;
    ctx2.beginPath();
    ctx2.arc(100, 80, radioSol2, 0, Math.PI * 2);
    ctx2.fillStyle = "orange";
    ctx2.fill();


    // Dibujar rayo de sol 1 (izquierda)
    ctx2.beginPath();
    ctx2.moveTo(40, 80);
    ctx2.lineTo(5, 80);
    ctx2.strokeStyle = "orange";
    ctx2.lineWidth = 4;
    ctx2.stroke();


    // Dibujar rayo de sol 2 (derecha)
    ctx2.beginPath();
    ctx2.moveTo(160, 80);
    ctx2.lineTo(195, 80);
    ctx2.strokeStyle = "orange";
    ctx2.lineWidth = 4;
    ctx2.stroke();


    // Dibujar rayo de sol 3 (abajo)
    ctx2.beginPath();
    ctx2.moveTo(100, 140);
    ctx2.lineTo(100, 180);
    ctx2.strokeStyle = "orange";
    ctx2.lineWidth = 4;
    ctx2.stroke();


    // Dibujar rayo de sol 4 (arriba)
    ctx2.beginPath();
    ctx2.moveTo(100, 0);
    ctx2.lineTo(100, 20);
    ctx2.strokeStyle = "orange";
    ctx2.lineWidth = 4;
    ctx2.stroke();


    // Dibujar la maceta
    ctx2.fillStyle = "#8e2312";
    ctx2.fillRect(240, 210, 120, 60);


    // Dibujar el borde de la maceta
    ctx2.fillStyle = "#54210a";
    ctx2.fillRect(230, 205, 140, 12);


    // Dibujar el cactus
    ctx2.beginPath();
    ctx2.moveTo(300, 205);
    ctx2.lineTo(300, 120);
    ctx2.strokeStyle = "#14b61a";
    ctx2.lineWidth = 90;
    ctx2.stroke();

    // Dibujar parte superior del cactus
    ctx2.beginPath();
    ctx2.ellipse(300, 115, 45, 33, 0, 0, Math.PI * 2);
    ctx2.fillStyle = "#14b61a";
    ctx2.fill();


    // Dibujar pétalo 1 superior derecho
    ctx2.beginPath();
    ctx2.ellipse(333, 90, 15, 12, -0.5, 0, Math.PI * 2);
    ctx2.fillStyle = "#771680";
    ctx2.fill();


    // Dibujar pétalo 2 superior izquierdo
    ctx2.beginPath();
    ctx2.ellipse(310, 90, 15, 12, 0.5, 0, Math.PI * 2);
    ctx2.fillStyle = "#771680";
    ctx2.fill();


    // Dibujar pétalo 3 inferior derecho
    ctx2.beginPath();
    ctx2.ellipse(310, 110, 15, 12, -0.5, 0, Math.PI * 2);
    ctx2.fillStyle = "#771680";
    ctx2.fill();


    // Dibujar pétalo 4 inferior derecho
    ctx2.beginPath();
    ctx2.ellipse(333, 110, 15, 12, 0.5, 0, Math.PI * 2);
    ctx2.fillStyle = "#771680";
    ctx2.fill();


    // Dibujar un círculo (el centro de la flor)
    ctx2.beginPath();
    ctx2.arc(322, 100, 10, 0, Math.PI * 2);
    ctx2.fillStyle = "#dbb314";
    ctx2.fill();


    // Dibujar el pasto
    ctx2.fillStyle = "#118115";
    ctx2.fillRect(0, 270, 600, 70);



    // Dibujar el texto
    ctx2.fillStyle = "#8f0d63";
    ctx2.font = "22px Arial";
    ctx2.fillText("Cactus en crecimiento", 370, 240);

    ctx2.fillStyle = "#6e355d";
    ctx2.font = "16px Arial";
    ctx2.fillText("Autora: ♥Fernanda Aquino♥", 370, 260);


    // Solicitar el siguiente cuadro de animación
    requestAnimationFrame(dibujarPlanta2);
}

// 3. Iniciar la animación
requestAnimationFrame(dibujarPlanta2);