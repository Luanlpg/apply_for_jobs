import os
import secrets
import string

import blowfish


class PasswordGenerator:
    def __init__(self):
        self.cipher = blowfish.Cipher(os.getenv("SECRET_KEY").encode("utf-8"))
        self.iv = os.getenv("IV").encode("utf-8")
        self.full_string = string.ascii_letters + string.digits + string.punctuation
        
    def generate_random_password(self):
        password_characters = string.ascii_letters + string.digits + string.punctuation
        password = ''.join(secrets.choice(password_characters) for i in range(10))
        return password
    
    def encrypt(self, password):
        return b"".join(self.cipher.encrypt_cbc(password.encode("utf-8") * 8, self.iv))
    
    def new(self):
        password = str(self.generate_random_password())
        return self.encrypt(password)
    
