import json

from password_generator import  PasswordGenerator
from aws import DynamoDB

def lambda_handler(event, context):
    """
    Função lambda geradora de senha.
    
    """
    dynamodb = DynamoDB()
    password_generator = PasswordGenerator()
    encrypted_password = password_generator.new()
    id = dynamodb.save_password(encrypted_password, event['expiration_date'], event['number_of_permissions'])
    
    return {
        'statusCode': 200,
        'body': json.dumps({"id": id})
    }
