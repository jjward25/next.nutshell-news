import pandas as pd
import pyperclip
import numpy 
import json
import pprint
pp = pprint.PrettyPrinter(indent=4)

articleDF = pd.read_excel('C:/Users/Josep/OneDrive/Desktop/Coding/next.nutshell-news/public/NutshellSampleData.xlsx',engine='openpyxl')
#print(articleDF)

inputObj = articleDF.to_dict(orient='index')  ## Turns every row into an object
#print(inputObj)

sectionList = []
sectionDupes = []
## Creates an object for each unique Section
for contentRowObj in inputObj.values():
    contentDict = {}
    contentDict.setdefault("Section",contentRowObj['Section'])  
    sectionDupes.append(contentDict)
    #print(contentDict)
    #print(dupeList)
## Removes duplicate Section objects for a final array of Section objects
sectionList = [i for n, i in enumerate(sectionDupes) if i not in sectionDupes[n + 1:]]
#* print(sectionList)


##########
# For each Section Object, add a list of Category objects: unique objects for each category, with CategoryName:"", CategoryPriority:"", and PostObjArray:[{}]
##########
categoryList = []
## Append the Category objects array to the original Section Object
for sectionObj in sectionList:  

    #### Create Category Objects ####
    catDupes = []
    ## Filter the content down to the relevant section & Create a loop to make a list of unique Category objects
    for contentRowObj in inputObj.values():
        
        if contentRowObj['Section'] == sectionObj['Section']:    
            categoryDict = {}
            categoryDict.setdefault("CategoryName",contentRowObj['Category'])
            categoryDict.setdefault("CategoryPriority",contentRowObj['CategoryPriority'])
            
            catDupes.append(categoryDict)
            #print(categoryDict)

        else:
            #print("not a match")
            continue

    categoryList = [i for n, i in enumerate(catDupes) if i not in catDupes[n + 1:]]
    #print(categoryList)
    sectionObj.setdefault("Categories",categoryList)
    #pp.pprint(sectionList)
    #* print(sectionList)


##########
# For each Category Object, add a list of Post objects; unique objects for each post, with PostName, PostDate, PostPriority, etc. and then a SubHeaderObjArray:[{}]
##########
postList = []
for sectionObj in sectionList:
    #print("Section Object: " + str(sectionObj))
    
    for categoryObj in sectionObj['Categories']:
        postDupes = []
        #print ("Category Object: " + str(categoryObj))  ## {CatName:"",CatPriority:"",PostObjArray:[]}
        ## iterate through dataset rows for category match, then create the post objects to append to the post array
        for contentRowObj in inputObj.values():
            if contentRowObj['Category'] == categoryObj['CategoryName']:
                postDict = {}
                postDict.setdefault("PostName",contentRowObj['PostName'])
                postDict.setdefault("PostPriority",contentRowObj['PostPriority'])
                postDict.setdefault("PostDate",contentRowObj['PostDate'])
                postDict.setdefault("PostUpDate",contentRowObj['PostUpDate'])
                postDupes.append(postDict)
                #print(postDict)

            else:
                #print("not a match")
                continue

        postList = [i for n, i in enumerate(postDupes) if i not in postDupes[n + 1:]]
        #print(categoryList)
        categoryObj.setdefault("PostObjArray",postList)
        #pp.pprint(sectionList)
        print(sectionList)
 

##########
# For each Post Object, add a list of Subheader objects; unique objects for each subheader, with SHName, SHPriority, etc. and then a BulletObjArray:[{}]
##########

##########
# For each Subheader Object, add a list of bullet objects; unique objects for each bullet, with all remaining bullet details
##########

with open("content.json", "w") as write_file:
    json.dump(sectionList, write_file, indent=4)
    