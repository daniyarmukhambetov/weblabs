from time import process_time_ns
import requests

r = requests.get("https://jsonplaceholder.typicode.com/albums/1/photos")
print(r.json()[0]['url'])
