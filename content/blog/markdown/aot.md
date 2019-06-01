---
title: AOT - Creating current publicly available information in English
date: '2019-06-01'
---

Those who watch Attack On Titan pays keen attention to 'Current publicly available information', although these information is mentioned in conversation through out the episodes there is more to learn with graphical representation. I found this website which has made it available.

![aot_1](https://vinkrish-notes.s3-us-west-2.amazonaws.com/img/aot_1.png)

I love to keep my own copy and another problem with above website is that text is next to thumnail of image which is small.

![aot_2](https://vinkrish-notes.s3-us-west-2.amazonaws.com/img/aot_2.png)

If I click on image i'll lose the text, so I did some **web scraping** and use **OpenCV** to modify image programatically to include English text at the bottom of the image.

let's look at the steps involved:

1. Using **BeautifulSoup** to scrape the webpages. By inspecting the page, I realised the images have `href` attribute and also to remove other unwanted links I have put condition based on length which in our case satisfy the image links.

```python
from bs4 import BeautifulSoup
from urllib.request import urlopen
import re

links = ['https://attackontitan.fandom.com/wiki/Current_Publicly_Available_Information/Anime',
    'https://attackontitan.fandom.com/wiki/Current_Publicly_Available_Information/Anime/Season_2', 
    'https://attackontitan.fandom.com/wiki/Current_Publicly_Available_Information/Anime/Season_3', 
    'https://attackontitan.fandom.com/wiki/Current_Publicly_Available_Information/Anime/OVA']

href_lines = []
for i in range(4):
    html_page = urlopen(links[i])
    soup = BeautifulSoup(html_page, 'lxml')
    for link in soup.findAll('a'):
        if link.get('href') is not None and len(link.get('href')) > 109 and len(link.get('href')) < 115 :
            href_lines.append(link.get('href').strip())
            
with open('extracted-img-links.txt', 'w') as file:
    for line in href_lines:
        file.write(line+'\n')
```
The image links are saved to a file.

2. Now we can download those images one by one using `urllib.request` to open URL and save the images on computer.

```python
import urllib.request
import os

img_count = 0

file_list = "C:/Users/Vinay/Pictures/AOT/{0}.png"

with open("extracted-img-links.txt") as f:
    for image in f:
        try:
            urllib.request.urlretrieve(image.strip(), file_list.format(img_count))
            img_count += 1
        except IOError:
            print(image + " does not exist")
```
Now we have original images saved.

3. Next step is to download all the respective text for the image which was beside the thumbnail in website. Below code fetches all paragraph inside a table we are interested in.

OpenCV doesn't have method that supports text with quotes so we have to explicitly remove them before saving to file.

```python
from bs4 import BeautifulSoup, NavigableString
from urllib.request import urlopen
import re

links = ['https://attackontitan.fandom.com/wiki/Current_Publicly_Available_Information/Anime',
    'https://attackontitan.fandom.com/wiki/Current_Publicly_Available_Information/Anime/Season_2', 
    'https://attackontitan.fandom.com/wiki/Current_Publicly_Available_Information/Anime/Season_3', 
    'https://attackontitan.fandom.com/wiki/Current_Publicly_Available_Information/Anime/OVA']

paras = []
for i in range(4):
    html_page = urlopen(links[i])
    soup = BeautifulSoup(html_page, 'lxml')
    tables = soup.findChildren('table')
    my_table = tables[0]
    rows = my_table.findChildren(['th', 'tr'])

    for row in rows:
        cells = row.findChildren('td')
        for cell in cells:
            for p in cell.findAll('p'):
                str = p.text.replace("'", "")
                paras.append(str.replace('"', ''))
                
with open('extracted-p.txt', 'w') as file:
    for line in paras:
        file.write(line+'\n')
```

4. I wanted to automate whole process but due to non-uniform order of text, we need manual intervention to verify if there are images which have desciption in other than `<p>`. 

I found out one case where instead of paragraph, `<li>` was used - so I just added text in respective line so that our images are named as index on which description is saved.

Now we can clean up extracted paragraph by removing empty lines.

```python
def isLineEmpty(line):
    return len(line.strip()) == 0

with open('extracted-para.txt') as file:
    info = file.readlines()
    
with open('extracted.txt', 'w') as file:
    for line in info:
        if not isLineEmpty(line):
            file.write(line)
```

5. Final step is to use OpenCV to add border and wrtie text on it.

```python
import sys
import cv2 as cv
   
bottom = 100

borderType = cv.BORDER_CONSTANT

font = cv.FONT_HERSHEY_SIMPLEX

with open('extracted.txt') as file:
    info = file.readlines()

for i in range(1,85):
    
    src = cv.imread('C:/Users/Vinay/Pictures/AOT/{0}.png'.format(i), cv.IMREAD_COLOR)

    dst = cv.copyMakeBorder(src, 0, bottom, 0, 0, borderType, None, 0)
    
    text = info[i].strip()
    
    if(len(text) > 300):
        cv.putText(dst,text[0:150],(10, dst.shape[0]-75), font, 0.75, (255,255,255), 1, cv.LINE_AA)
        cv.putText(dst,'-'+text[150:300],(10, dst.shape[0]-50), font, 0.75, (255,255,255), 1, cv.LINE_AA)
        cv.putText(dst,'-'+text[300:],(10, dst.shape[0]-25), font, 0.75, (255,255,255), 1, cv.LINE_AA)
    elif(len(text) > 150):
        cv.putText(dst,text[0:150],(10, dst.shape[0]-64), font, 0.75, (255,255,255), 1, cv.LINE_AA)
        cv.putText(dst,'-' + text[150:],(10, dst.shape[0]-32), font, 0.75, (255,255,255), 1, cv.LINE_AA)
    else:
        cv.putText(dst,text,(10, dst.shape[0]-50), font, 0.75, (255,255,255), 1, cv.LINE_AA)

    cv.imwrite('C:/Users/Vinay/Pictures/AOT/sub/{0}.png'.format(i), dst)
```

This is how it looks.

![aot_3](https://vinkrish-notes.s3-us-west-2.amazonaws.com/img/aot_3.png)

> Pay attention to English text at bottom of image

The above code also aligns text and split lines coz OpenCV doesn't wrap the text.