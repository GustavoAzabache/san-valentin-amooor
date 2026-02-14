const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
const videoContainer = document.getElementById('videoContainer');

let noClickCount = 0;

// ====== AQUÍ AGREGA TUS VIDEOS ======
// Agrega las rutas de tus videos en este array
const videosNO = [
    'videos/video-NO-1.mp4',  // Reemplaza con la ruta de tu primer video
    'videos/video-NO-2.mp4',  // Reemplaza con la ruta de tu primer video
    'videos/video-NO-3.mp4',  // Reemplaza con la ruta de tu primer video
];
const videosSI = [
    'videos/video-SI-1.mp4',  // Reemplaza con la ruta de tu primer video
    'videos/video-SI-2.mp4',  // Reemplaza con la ruta de tu primer video
    'videos/video-SI-3.mp4',  // Reemplaza con la ruta de tu primer video
];
// ====================================

btnYes.addEventListener('click', () => {
    // Hacer desaparecer el botón No con transición
    btnNo.style.transition = 'all 0.5s ease';
    btnNo.style.transform = 'scale(0)';
    btnNo.style.opacity = '0';
    
    // Esperar a que termine la transición antes de mostrar la imagen
    setTimeout(() => {
        document.querySelector('#question').style.display = 'none';
        document.getElementById('imageContainer').style.display = 'block';
    }, 500);
    
    // Ocultar el container principal con la pregunta
    document.querySelector('#question').style.display = 'none';
    
    // Mostrar la imagen
    document.getElementById('imageContainer').style.display = 'flex';
    
    // Reproducir video aleatorio
    playRandomVideoSI();
});

btnNo.addEventListener('click', (e) => {
    e.preventDefault();
    noClickCount++;
    
    // Hacer el botón más pequeño
    const newScale = Math.max(0.3, 1 - (noClickCount * 0.15));
    btnNo.style.transform = `scale(${newScale})`;
    
    // Mover el botón a una posición aleatoria
    moveButtonRandomly();
    
    // Reproducir video aleatorio
    playRandomVideoNO();
});

function moveButtonRandomly() {
    // Obtener dimensiones de la ventana
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Obtener dimensiones del botón
    const btnRect = btnNo.getBoundingClientRect();
    const btnWidth = btnRect.width;
    const btnHeight = btnRect.height;
    
    // Calcular posición máxima para que el botón no se salga de la pantalla
    const maxX = windowWidth - btnWidth - 20; // 20px de margen
    const maxY = windowHeight - btnHeight - 20;
    
    // Generar posición aleatoria
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    // Aplicar posición absoluta
    btnNo.style.position = 'fixed';
    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;
    btnNo.style.transition = 'all 0.3s ease';
}

function playRandomVideoSI() {
    // Seleccionar video aleatorio del array
    const randomIndex = Math.floor(Math.random() * videosSI.length);
    const selectedVideo = videosSI[randomIndex];
    
    // Limpiar container anterior
    videoContainer.innerHTML = '';
    
    // Crear elemento video
    const videoElement = document.createElement('video');
    videoElement.src = selectedVideo;
    videoElement.autoplay = true;
    videoElement.muted = false;
    videoElement.loop = false;
    
    // Posicionar video aleatoriamente
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const videoSize = 200; // Tamaño del video
    
    const maxX = windowWidth - videoSize - 20;
    const maxY = windowHeight - videoSize - 20;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    videoContainer.style.left = `${randomX}px`;
    videoContainer.style.top = `${randomY}px`;
    
    // Agregar video al container
    videoContainer.appendChild(videoElement);
    
    // Opcional: Ocultar video cuando termine
    videoElement.addEventListener('ended', () => {
        videoContainer.innerHTML = '';
    });
}

function playRandomVideoNO() {
    // Seleccionar video aleatorio del array
    const randomIndex = Math.floor(Math.random() * videosNO.length);
    const selectedVideo = videosNO[randomIndex];
    
    // Limpiar container anterior
    videoContainer.innerHTML = '';
    
    // Crear elemento video
    const videoElement = document.createElement('video');
    videoElement.src = selectedVideo;
    videoElement.autoplay = true;
    videoElement.muted = false;
    videoElement.loop = false;
    
    // Posicionar video aleatoriamente
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const videoSize = 200; // Tamaño del video
    
    const maxX = windowWidth - videoSize - 20;
    const maxY = windowHeight - videoSize - 20;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    videoContainer.style.left = `${randomX}px`;
    videoContainer.style.top = `${randomY}px`;
    
    // Agregar video al container
    videoContainer.appendChild(videoElement);
    
    // Opcional: Ocultar video cuando termine
    videoElement.addEventListener('ended', () => {
        videoContainer.innerHTML = '';
    });
}
