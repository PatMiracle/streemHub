from pywebcopy import save_webpage
import re
from . import zip
from pathlib import Path

# url = 'https://www.naijamusic.com.ng/gospel/page/3/' #'https://medium.com/geekculture/scraping-dynamic-web-pages-with-selenium-48b875b6d1f0'
# download_folder = r'C:\Users\USER\Desktop\streemhub\venv\StreemHub.ai\search\get_files'    
# k = re.findall(r"https://([\w+\.\D/$]*)", url)
# f = str(url).split('/')
# print(f)



def scrape(url='https://www.naijamusic.com.ng/gospel/page/3/', download_folder=r'C:\Users\USER\Desktop\streemhub\venv\StreemHub.ai\search\get_files'):
    kwargs = {'bypass_robots': True, 'project_name': 'scraped_files', 'open_in_browser':False}
    get_path = f'{str(Path(__file__).resolve().parent)}\scraped_files\{str(url).split("/")[2]}'
    dump_path = f'{str(Path(__file__).resolve().parent)}/zipped_files/{str(url).split("/")[2]}'
    wp = save_webpage(url, download_folder, **kwargs)
    zip.ziph(dump_path, get_path)

#wp.encoding = 'utf-8ls
scrape()