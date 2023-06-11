import uuid

def generate_id():
    created_id = 0
    while created_id != 100:
        id_generated = str(uuid.uuid4()).replace("-", "")
        created_id += 1
        return id_generated
    
print(generate_id())