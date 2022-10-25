# Autism facebook friend cleaner backend scraper
This backend scraper consists of a web server (yet to be chosen) that handles requests for public information about given Facebook users by viewing them in Selenium.

# Build instructions

## 1. Install Python
This project was created using `Python 3.10`

## 2. Virtual Environment
#### 2.1 Create virtual environment
- Run `python3 -m venv <path to virtual environment>`, ex. `python3 -m venv ./venv`
#### 2.2 Activate virtual environment
- Windows cmd: `C:\> <path to venv>\Scripts\activate.bat`
- Windows powershell: `PS C:\> <path to venv>\Scripts\Activate.ps1`
- Unix: `source <path to venv>/bin/activate`

At this point your terminal should indicate you are using a virtual environment, and you can use Python using `python` instead of `python3`, and you can use pip by `pip` instead of `python3 -m pip`.
#### 2.3 Deactivate virtual environment
- Run `deactivate`
- Run this when done working on project

## 4. Install required dependencies
- Run `pip install -r requirements.txt`
- If necessary update pip and setuptools by `pip install --upgrade pip` and `pip install --upgrade setuptools`

## 5. Run server
This step will be determined after a webserver framework has been decided

# Todo list
- Add Python related .gitignore file
- Salvage existing code from YouTube privacy scraper
- Choose a webserver framework
- TBD after salvaging previous code

# Finished items
- None
