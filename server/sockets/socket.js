const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    //mensaje de bienvenida
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a chat app'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data); //envia mensaje a todos los usuarios conectados

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salio bien!'
        //     });
        // } else {
        //     callback({
        //         resp: 'todo salio mal!'
        //     });
        // }

        // callback();

    });


});