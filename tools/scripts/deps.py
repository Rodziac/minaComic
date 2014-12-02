#Dependency Tree Builder

import subprocess

def depswriter():

	#Create dependency command.
	args = [
		"python",
		"../../public/js/closure-library/closure/bin/build/depswriter.py",
		"--root_with_prefix",
		"../../public/js/ ../../../../../js/",
		"--output_file",
		"../../public/js/application/deps.js"
	]

	#Run depswriter.py with parameters
	runCommand = subprocess.Popen(args)
	runCommand.wait()

	#Completed report
	print("Dependency Tree Build Progress Completed.")


