var socket = io();

socket.on('connect', function () {
    console.log('conectado al servidor');
});
// escuchar
socket.on('disconnect', function () {
    console.log('se pierde conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'hola mundo'
}, function (res) {
    console.log('Respuesta server:', res);
});

// Escuchar Información
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor:', mensaje)
})