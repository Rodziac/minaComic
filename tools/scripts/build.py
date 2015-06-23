#Project Building Progress Activator

from deps import depswriter
from template import templateToSoy
from css import cssCompile
from project import projectBuild
from local_deploy import localDeploy

import argparse
import sys
import os


def _GetOptionsParser():

    parser = argparse.ArgumentParser(prog='MICO_BUILD', add_help=True,description='MICO Project Building Progress')

    parser.add_argument('--all',
                    action='store_true',
                    help=('Tum surecleri uygular'),
                    default=False,
                    dest='ALL')
    parser.add_argument('--deps',
                    action='store_true',
                    default=False,
                    dest='DEPS',
                    help='deps.js olusturulur.')
    parser.add_argument('--template',
                    action='store_true',
                    default=False,
                    dest='TEMPLATE',
                    help='soy dosyalari js dosyalarina donusturulur.')
    parser.add_argument('--css',
                    action='store_true',
                    default=False,
                    dest='CSS',
                    help='CSS dosyalarini birlestirir ve compiled.css olusturur.')
    parser.add_argument('--project',
                    action='store_true',
                    default=False,
                    dest='PROJECT',
                    help='Tum projeyi Google Closure Compiler ile build eder ve compile.js dosyasi olusturur.')
    parser.add_argument('--local-deploy',
                    action='store_true',
                    default=False,
                    dest='LOCAL_DEPLOY',
                    help='local production klasorune image ve config dosyalarini yukler.')
    return parser


def main():

    args = _GetOptionsParser().parse_args()

    if args.ALL:
        templateToSoy()
        cssCompile()
        depswriter()
        projectBuild()

    if args.DEPS:
        depswriter()

    if args.TEMPLATE:
        templateToSoy()

    if args.CSS:
        cssCompile()

    if args.PROJECT:
        depswriter()
        projectBuild()

    if args.LOCAL_DEPLOY:
        localDeploy()

main()
