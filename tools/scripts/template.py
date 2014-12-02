#SOY Template Builder.

import subprocess
import os


def templateToSoy():

    #Create template to soy command.
    args = [
        "java", "-jar",
        "../compiler/SoyToJsSrcCompiler.jar",
        "--shouldProvideRequireSoyNamespaces",
        "--allowExternalCalls", "false",
        "--shouldGenerateJsdoc",
        "--cssHandlingScheme", "GOOG",
        "--outputPathFormat", "../../public/js/application/Views/{INPUT_FILE_NAME_NO_EXT}.js"
    ]

    for path, subdirs, files in os.walk(r'../../templates/'):
        for filename in files:
            if filename.endswith(".soy"):
                f = os.path.join(path, filename)
                args.append(f)

    #Run SoyToJsSrcCompiler.jar with parameters
    runCommand = subprocess.Popen(args)
    runCommand.wait()
    
    #Completed report
    print("SOY Template Build Progress Completed.")

