### 🪢 Password Generator

Responsável por gerar senha complexa, criptografa-la, salvar na base e gerar url para acesso temporário.

É acionado através do [API Gateway](https://console.aws.amazon.com/apigateway),
para gerar nova senha e url correspondente.

### Uso

Para o acionamento manual da função `lambda` informar o atributo `number_of_permissions` e o atributo `expiration_date`
no formato `dd-MM-yyyy HH:mm:ss`.
