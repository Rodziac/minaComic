#Project Local Deployer

import os
import subprocess
import shutil
import distutils.core
import sys

def localDeploy():
    
    is_winows = sys.platform.startswith('win')
    
    if is_winows:
        
        #Images deploy command
        args = ["xcopy","..\..\public\images\*.*","..\..\public\production\images\*.*","/D","/E","/I","/H","/Y"]
        runCommand = subprocess.Popen(args)
        runCommand.wait()
        print("Images Deploy Completed.")
        
        #third-party files deploy command
        distutils.dir_util.copy_tree("../../public/js/third-party/", "../../public/production/js/third-party/")
        print("Third-party Deploy Completed.")
        
        shutil.copytree
        
    else:
    
        #rsync -avP ../../../public/images/* ../../../public/production/images/
        
        print "mac command"
    
    
    
    shutil.copyfile("../../public/config/getSiteConfig.js", "../../public/production/config/getSiteConfig.js")
    print("Project Config Deployed")
    
    #Completed report
    print("Project Local Deployed End")

