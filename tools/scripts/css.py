#CSS building

import subprocess
import os

def cssCompile():
  
    #Create CSS renaming command.
    args = [
        "java", "-jar",
        "../compiler/closure-stylesheets.jar",
        "--allow-unrecognized-functions",
        "--output-file", "../../public/production/css/compiled.css",
        "--output-renaming-map-format", "CLOSURE_COMPILED",
        "--rename", "CLOSURE",
        "--output-renaming-map" , "../mappings/renaming_map.js"
    ]

    for path, subdirs, files in os.walk(r'../../public/css/'):
        for filename in files:
            if filename.endswith(".css"):
                f = os.path.join(path, filename)
                args.append(f)

    #Run closure-stylesheets.jar with parameters
    runCommand = subprocess.Popen(args)
    runCommand.wait()
    
    #Completed report
    print("CSS Renaming Progress Completed.")
