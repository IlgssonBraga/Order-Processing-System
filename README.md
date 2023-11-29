# Sistema de Processamento de Pedidos com RabbitMQ

Este é um exemplo simples de um sistema de processamento de pedidos usando RabbitMQ, com dois microsserviços em Node.js.

## Microsserviços

### 1. Product Service

O Product Service recebe pedidos através de uma API HTTP e os coloca na fila "order_queue" no RabbitMQ.

#### Configuração

- URL base: `http://localhost:3000`
- Endpoint para receber pedidos: `POST /api/orders`

Exemplo de corpo da solicitação:
```json
{
  "product": "Nome do Produto",
  "quantity": 3,
  "customer": "Nome do Cliente"
}
```
#### Como Executar
```bash
  cd product-service
  npm install
  npm start
}
```
### 2. Order Service

O Order Service consome os pedidos da fila "order_queue" no RabbitMQ e os processa (exibindo no console, por exemplo).

#### Como Executar
```bash
  cd order-service
  npm install
  npm start
}
```
### Configuração do RabbitMQ

Certifique-se de ter um servidor RabbitMQ em execução. Você pode usar o Docker para facilitar:

```bash
  docker run -d --name rabbitmq-container -p 5672:5672 -p 15672:15672 \
  -e RABBITMQ_DEFAULT_USER=seu_usuario \
  -e RABBITMQ_DEFAULT_PASS=sua_senha \
  rabbitmq:management
}
```
### Como Testar
1. Inicie o Product Service.
2. Inicie o Order Service.
3. Envie um pedido para o Product Service.
4. Observe o Order Service processando o pedido.
### Dependências
- Node.js
- Docker (para RabbitMQ)
### Licença
Este projeto está licenciado sob a [MIT License](https://opensource.org/license/mit/).
