#YSCore Google Closure Compile Progress.

import subprocess

def projectBuild():

	#Create project build command.
	args = [
		"python",
		"../../public/js/closure-library/closure/bin/build/closurebuilder.py",
		"--root", "../../public/",
		"--namespace", "MICO.Bootstrapper",
		"--output_mode", "compiled",
		"--output_file", "../../public/production/js/compiled.js",
		"--compiler_jar", "../compiler/compiler.jar",
		"--compiler_flags", "--compilation_level=ADVANCED_OPTIMIZATIONS",
		"--compiler_flags", "--output_wrapper='(function(){%output%})()'",
		"--compiler_flags", "--define=goog.LOCALE='EN'",
		"--compiler_flags", "--define=goog.DEBUG=false",
		"--compiler_flags", "--jscomp_error=accessControls",
		"--compiler_flags", "--jscomp_error=checkRegExp",
		"--compiler_flags", "--jscomp_error=checkTypes",
		"--compiler_flags", "--jscomp_error=checkVars",
		"--compiler_flags", "--jscomp_error=invalidCasts",
		"--compiler_flags", "--jscomp_error=missingProperties",
		"--compiler_flags", "--jscomp_error=nonStandardJsDocs",
		"--compiler_flags", "--jscomp_error=strictModuleDepCheck",
		"--compiler_flags", "--jscomp_error=undefinedVars",
		"--compiler_flags", "--jscomp_error=unknownDefines",
		"--compiler_flags", "--jscomp_error=visibility",
		"--compiler_flags", "--js=../mappings/renaming_map.js",
		"--compiler_flags", "--js=../../public/js/closure-library/closure/goog/deps.js"
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
