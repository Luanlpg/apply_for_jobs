import json

from aws import DynamoDB

def lambda_handler(event, context):
    """
    Função lambda que remove senhas expiradas.
    """
    dynamodb = DynamoDB()
    expired_passwords = dynamodb.retrieve_expired_passwords()
    for expired_password in expired_passwords:
        dynamodb.delete_expired_password(expired_password["id"])
    
    return {
        'statusCode': 200,
        'body': json.dumps({"success": True})
    }
