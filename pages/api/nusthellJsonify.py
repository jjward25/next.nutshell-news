import pandas
import json
from collections import OrderedDict

inputExcel = "C:/Users/Josep/OneDrive/Desktop/Coding/next.nuthsell-news/pages/api/NutshellSampleData.xlsx"
exportJson = "C:/Users/Josep/OneDrive/Desktop/Coding/next.nuthsell-news/pages/api/nutshell.json"

data = pandas.read_excel(inputExcel, engine="openpyxl")

# This creates a tuple of column headings for later use matching them with column data
cols = []
columnList = list(data[0:])
for col in columnList:
    cols.append(str(col))
columnList = tuple(cols)
#print("ColumnList: ",columnList)

#This groups the dataframe by the columns
groupedBulletData = data.groupby(['Section', 'Category', 'PostName', 'PostDate','PostImgSrc','SubheaderObj']).first()
#print("GroupedBullet: ",groupedBullet)

#This creates a reference to the index level of the groups
groupnames = data.groupby(['Section', 'Category', 'PostName','PostDate','PostImgSrc','SubheaderObj']).grouper.levels
#print("GroupNames: ",groupnames)
sections = (groupnames[0])
#print("Sections: ",sections)

Sections = groupnames[0]
Categories = groupnames[1]
Posts = groupnames[2]
Subheaders = groupnames[5]
#Bullets = groupnames[6]
print('SectionList: ', Sections)
print('CategoryList: ', Categories)
print('PostList: ', Posts)
print('SubheaderList: ', Subheaders)
#print('BulletList: ', Bullets)

#Create a list to add team records to at the end of the first 'for' loop
sectionList = []

for section in sections:
    
    tempList = []   #Create a temporary list to add each record to

    for index, row in groupedBulletData.iterrows():

        dataRow = row

        if index[0] == section:  #Select the record in each row of the grouped dataframe if its index matches the section

            #In order to have the JSON records come out in the same order, I had to first create a list of tuples, then convert to and Ordered Dict.  
            #This pulls the headers and data from the groupBy statements.  In this case it's all the bullet details.
            rowDict = ([(columnList[6], dataRow[0]), (columnList[7], dataRow[1]), (columnList[8], dataRow[2]), (columnList[9], dataRow[3]), (columnList[10], dataRow[4])])
            #print("Row Dict1: ",rowDict)
            rowDict = OrderedDict(rowDict)
            #print("Row Dict2: ",rowDict)
            tempList.append(rowDict)

    #Create another Ordered Dict to keep 'teamname' and the list of members from the temporary list sorted
    t = ([('sectionname', str(section)), ('bullet detail', tempList)])
    t= OrderedDict(t)

    #Append the Ordered Dict to the emepty list of teams created earlier
    ListX = t
    sectionList.append(ListX)


#Create a final dictionary with a single item: the list of teams
sectionsFinal = {"sections":sectionList} 

#Dump to JSON format
formattedJson = json.dumps(sectionsFinal, indent = 1, sort_keys = False) #sort_keys MUST be set to False, or all dictionaries will be alphebetized
formattedJson = formattedJson.replace("NaN", '"NULL"') #"NaN" is the NULL format in pandas dataframes - must be replaced with "NULL" to be a valid JSON file
#print(formattedJson)

#Export to JSON file
parsed = open(exportJson, "w")
parsed.write(formattedJson)

print("\n\nExport to JSON Complete")