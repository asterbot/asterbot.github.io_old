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

    
