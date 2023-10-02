import uuid
from passlib.context import CryptContext

PWD_CONTEXT = CryptContext(schemes=["bcrypt"], deprecated="auto")

def generate_id():
    created_id = 0
    while created_id != 100:
        id_generated = str(uuid.uuid4()).replace("-", "")
        created_id += 1
        return id_generated
    
def hash_password(password):
    return PWD_CONTEXT.hash(password)