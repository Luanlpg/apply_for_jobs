import json

from aws import DynamoDB
from password_retriever import PasswordRetriever


def lambda_handler(event, context):
    """
    Função lambda que recupera senha.
    """
    dynamodb = DynamoDB()
    password_retriever = PasswordRetriever()

    encrypted_password = dynamodb.retrieve_password(event['id'])
    if not encrypted_password:
        return {
            'statusCode': 400,
            'body': json.dumps({"error": "password not found"})
        }

    decrypted_password = password_retriever.decrypt(encrypted_password)
    return {
        'statusCode': 200,
        'body': json.dumps({"password": decrypted_password})
    }
