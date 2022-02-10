import pandas as pd
import pyperclip
import numpy 

articleDF = pd.read_excel('C:/Users/Josep/OneDrive/Desktop/Coding/next.nutshell-news/public/NutshellSampleData.xlsx',engine='openpyxl')
#print(articleDF)

sections = []
categories = []
#sections
for row in articleDF['Section']:
    if row not in sections:
        sections.append(row)
    else:
        continue
# Categories
for x in articleDF['Category']:
    if x not in categories:
        categories.append(x)
    else:
        continue
#print(sections)
#print(categories)

outputJson = articleDF.to_json(orient='index')
print(outputJson)

pyperclip.copy(outputJson)
