#YSCore Google Closure Compile Progress.

import subprocess

def projectBuild():

    #Create project build command.
    args = [
        "java", "-jar",
        "../compiler/compiler.jar",
        "--only_closure_dependencies",
        "--closure_entry_point", "MICO.Bootstrapper",
        "--compilation_level", "ADVANCED",
        "--externs", "../mappings/externs.js",
        "--formatting", "SINGLE_QUOTES",
        "--js", "../../public/js/**.js",
        "--js", "../mappings/renaming_map.js",
        "--js", "!**deps.js",
        "--js_output_file", "../../public/production/js/compiled.js",
        # "--jscomp_error", "accessControls",
        # "--jscomp_error", "checkRegExp",
        # "--jscomp_error", "checkTypes",
        # "--jscomp_error", "checkVars",
        # "--jscomp_error", "invalidCasts",
        # "--jscomp_error", "missingProperties",
        # "--jscomp_error", "nonStandardJsDocs",
        # "--jscomp_error", "strictModuleDepCheck",
        "--jscomp_error", "undefinedVars",
        "--jscomp_error", "unknownDefines",
        "--jscomp_error", "visibility",
        "--output_wrapper", "(function(){%output%})()"
    ]

    #Run closurebuilder.py with parameters
    runCommand = subprocess.Popen(args)
    runCommand.wait()

    #Completed report
    print("Google Closure Compile Progress Completed.")





#
##Google Closure Compile Progress.
#
#import subprocess
#
#def projectBuild():
#
#    #Create project build command.
#    args = [
#        "java", "-jar",
#        "../compiler/compiler.jar",
#        "--manage_closure_dependencies",
#        "--only_closure_dependencies",
#        "--closure_entry_point=MICO.Bootstrapper",
#        "--compilation_level=WHITESPACE_ONLY",
#        "--formatting=PRETTY_PRINT",
#        "--js_output_file=../../public/js/build.js",
#        "--output_module_dependencies=../../public/js/application/deps.js",
#        "--jscomp_error=accessControls",
#        "--jscomp_error=checkRegExp",
#        "--jscomp_error=checkTypes",
#        "--jscomp_error=checkVars",
#        "--jscomp_error=invalidCasts",
#        "--jscomp_error=missingProperties",
#        "--jscomp_error=nonStandardJsDocs",
#        "--jscomp_error=strictModuleDepCheck",
#        "--jscomp_error=undefinedVars",
#        "--jscomp_error=unknownDefines",
#        "--jscomp_error=visibility",
#        "--output_wrapper='(function(){%output%})()'",
#        "--js=../mappings/renaming_map.js",
#        "--js='../../public/js/application/**.js'",
#        "--js='!../../**build.js'"
#    ]
#
#    #Run closurebuilder.py with parameters
#    runCommand = subprocess.Popen(args)
#    runCommand.wait()
#
#    args = [
#        "java", "-jar",
#        "../compiler/compiler.jar",
#        "--only_closure_dependencies",
#        "--closure_entry_point=MICO.Bootstrapper",
#        "--compilation_level=ADVANCED",
#        "--formatting=SINGLE_QUOTES",
#        "--js_output_file=../../public/production/js/compiled.js",
#        "--jscomp_error=accessControls",
#        "--jscomp_error=checkRegExp",
#        "--jscomp_error=checkTypes",
#        "--jscomp_error=checkVars",
#        "--jscomp_error=invalidCasts",
#        "--jscomp_error=missingProperties",
#        "--jscomp_error=nonStandardJsDocs",
#        "--jscomp_error=strictModuleDepCheck",
#        "--jscomp_error=undefinedVars",
#        "--jscomp_error=unknownDefines",
#        "--jscomp_error=visibility",
#        "--output_wrapper='(function(){%output%})()'",
#        "--js=../mappings/renaming_map.js",
#        "--js='../../public/js/**.js'",
#        "--js='!../../**build.js'"
#    ]
#
#    #Run closurebuilder.py with parameters
#    runCommand = subprocess.Popen(args)
#    runCommand.wait()
#
#    #Completed report
#    print("Google Closure Compile Progress Completed.")
#
#
