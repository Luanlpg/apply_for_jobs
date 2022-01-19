import os
import uuid

import boto3


class DynamoDB:
    def __init__(self):
        self.dynamodb = boto3.client('dynamodb')
        self.table_name = os.getenv("TABLE_NAME")
        
    def save_password(self, password, expiration_date = '-- -- --', number_of_permissions=3):
        id = str(uuid.uuid4())
        obj = {
            'id': {
                'S': id
            },
            'password': {
                'B': password
            },
            'validity_time': {
                'S': expiration_date
            },
            'number_of_permissions': {
                'S': str(number_of_permissions)
            }
        }
        self.dynamodb.put_item(TableName=self.table_name, Item=obj)
        return id