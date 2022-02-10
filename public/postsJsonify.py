import pandas as pd
import pyperclip
import numpy 
import json

articleDF = pd.read_excel('C:/Users/Josep/OneDrive/Desktop/Coding/next.nutshell-news/public/NutshellSampleData.xlsx',engine='openpyxl')
#print(articleDF)

inputObj = articleDF.to_dict(orient='index')
#print(inputObj)

outputJson = []
for row in inputObj.values():
    #print(row)   
    outputJson.append(row)


print(outputJson)

with open("posts.json", "w") as write_file:
    json.dump(outputJson, write_file, indent=4)

#pyperclip.copy((outputJson))

