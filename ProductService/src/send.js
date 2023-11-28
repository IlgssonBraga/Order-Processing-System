var amqp = require('amqplib/callback_api');

function sendToRabbitMQ(queueName, contentMessage){
    amqp.connect('amqp://ilgssonbraga:123456@localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }
        var queue = queueName;
        var msg = JSON.stringify(contentMessage);

        channel.assertQueue(queue, {
            durable: false
        });
        channel.sendToQueue(queue, Buffer.from(msg));

        console.log(" [x] Sent %s", msg);
    });
});
}

module.exports = {
    sendToRabbitMQ,
  };