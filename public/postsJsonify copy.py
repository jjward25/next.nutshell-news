import pandas as pd
import pyperclip
import numpy 
import json

articleDF = pd.read_excel('C:/Users/Josep/OneDrive/Desktop/Coding/next.nutshell-news/public/NutshellSampleData.xlsx',engine='openpyxl')
#print(articleDF)

inputObj = articleDF.to_dict(orient='index')  ## Turns every row into an object
#print(inputObj)

contentDict = {}
## Creates an object for each unique Section
for contentRowObj in inputObj.values():
    contentDict.setdefault(contentRowObj['Section'],[])  
    #print(contentDict)

## Create an empty object to fill with the relevant category details, then append to the proper section array
for k,v in contentDict.items():
    #print(k +": " + str(v))
    categoryDict = {}  # Empty category object to be filled by 
    for contentRowObj in inputObj.values(): 
        if contentRowObj['Section'] == k:  
            ## May need to add a sort command here to sort by priority
            categoryDict.setdefault(contentRowObj['Category'],contentRowObj['CategoryPriority']) ## Create a new category object for each category in that section
    v.append(categoryDict)
    print(contentDict)
            

with open("content.json", "w") as write_file:
    json.dump(contentDict, write_file, indent=4)
    