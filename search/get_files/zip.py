import os
import zipfile
from pathlib import Path

def zipdir(path, ziph):
    # ziph is zipfile handle
    for root, dirs, files in os.walk(path):
        for file in files:
            ziph.write(os.path.join(root, file), os.path.relpath(os.path.join(root, file), os.path.join(path, '..')))


def ziph(zip_path, dir_path_zip):
    if str(zip_path).endswith(".zip"):
        zip_path=zip_path
    else:
        zip_path = zip_path + ".zip"
    zipf = zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED)
    zipdir(dir_path_zip, zipf)
    zipf.close()

#ziph("", "test")
#print(str(Path(__file__).resolve().parent) + f'\{}')
