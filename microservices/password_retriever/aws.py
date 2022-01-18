import os
import uuid

import boto3


class DynamoDB:
    def __init__(self):
        self.dynamodb = boto3.client('dynamodb')
        self.table_name = os.getenv("TABLE_NAME")
        
    def retrieve_password(self, id):
        obj = {'id': {
            'S':id
            }
        }
        response = self.dynamodb.get_item(TableName=self.table_name, Key=obj)
        if "Item" not in response:
            return None
        try:
            self.update_permissions(id, response['Item'], response['Item']['number_of_permissions']['S'])
        except Exception:
            return None
        return response['Item']['password']['B']
        
    def update_permissions(self, id, item, number_of_permissions):
        if number_of_permissions == "0":
            self.delete_password(id)
            raise Exception("Permission not found")
        number_of_permissions = int(number_of_permissions) - 1
        item['number_of_permissions']['S'] = str(number_of_permissions)
        self.dynamodb.put_item(TableName=self.table_name, Item=item)
        
    def delete_password(self, id):
        key = {'id': {
            'S':id
            }
        }
        self.dynamodb.delete_item(TableName=self.table_name, Key=key)