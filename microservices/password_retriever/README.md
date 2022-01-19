### Password Retriever

Responsável por recuperar senha, descriptografa-la e atualizar base com permissões.

É acionado através do [API Gateway](https://console.aws.amazon.com/apigateway),
para recuperar senha correspondente.

### Uso

Para o acionamento manual da função `lambda` informar o atributo `id` como string.
