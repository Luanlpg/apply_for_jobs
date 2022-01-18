import os

import blowfish

class PasswordRetriever():
    def __init__(self):
        self.cipher = blowfish.Cipher(os.getenv("SECRET_KEY").encode("utf-8"))
        self.iv = os.getenv("IV").encode("utf-8")
        
    def decrypt(self, encrypted_password):
        decrypted_password = b"".join(self.cipher.decrypt_cbc(encrypted_password, self.iv))
        pass_len = len(decrypted_password) // 8
        return decrypted_password[:pass_len].decode()