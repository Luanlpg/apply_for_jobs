import os
import boto3
from boto3.dynamodb.conditions import Attr
from datetime import datetime
from pytz import timezone


class DynamoDB:
    def __init__(self):
        self.dynamodb = boto3.resource('dynamodb')
        self.table_name = os.getenv("TABLE_NAME")
        self.table = self.dynamodb.Table(self.table_name)
        self.now = str(datetime.now().astimezone(timezone('Europe/London')).isoformat())
        
    def retrieve_expired_passwords(self):
        response = self.table.scan(
            FilterExpression = 
                Attr('expiration_date').lte(self.now)
            )
        return response['Items']
        
        
    def delete_expired_password(self, id):
        key = {'id':id}
        self.table.delete_item(Key=key)
