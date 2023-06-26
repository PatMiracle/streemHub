from pywebcopy import save_webpage

url = 'https://github.com/rajatomar788/pywebcopy/issues/93' #'https://medium.com/geekculture/scraping-dynamic-web-pages-with-selenium-48b875b6d1f0'
download_folder = r'C:\Users\USER\Desktop\streemhub\StreemHub.ai\test'    


def scrape(url, download_folder):
    kwargs = {'bypass_robots': True, 'project_name': 'scraped'}

    wp = save_webpage(url, download_folder, **kwargs)

#wp.encoding = 'utf-8ls
scrape(url=url, download_folder=download_folder)