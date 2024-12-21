"""Adds project in index.js using component name"""
import sys
import os
import json

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Incorrect Usage")
        print("Usage: python add_project.py [component-name]")
        sys.exit(1)

    component_name = sys.argv[1]
    pythonFilePath = os.path.dirname(__file__)
    projectRootPath = os.path.abspath(os.path.join(pythonFilePath,os.pardir,"src","projects"))
    projectDataFile = os.path.join(projectRootPath,"data","projectsData.json")
    indexJsFile = os.path.join(projectRootPath,"descriptions","index.js")

    # STEP 1: Add an empty entry to the json file 
    with open(projectDataFile, 'r', encoding='utf-8') as f:
        data = json.loads(f.read())
    
    print(component_name.lower())
    data[component_name.lower()] = {
                                        "title":"",
                                        "tnt":[],
                                        "slides":0,
                                        "sources":{},
                                        "component": component_name
                                    }
    
    with open(projectDataFile, 'w', encoding='utf-8') as f:
        json.dump(data,f, indent=4)

    # STEP 2: Update index.js with the right imports
    with open(indexJsFile,"r", encoding="utf-8") as f:
        content = f.readlines()

    end_index = content.index("// imports ended\n") # index where imports end
    content.insert(end_index-1, f"import {component_name} from \"./{component_name.lower()}\"\n")
    content.insert(len(content)-1, f"    {component_name},\n")

    with open(indexJsFile, "w") as f:
        f.writelines(content)

    print("Project added to index.js successfully!")
    print("Go edit data/projectsData.json to add whatever you need")
    sys.exit(0)
