# My Application Programming Assignment

> By Shaun Beynon-Thomas

Here you will find my frontend and backend, as per the assignment.
# Prerequisites

 - Pycharm - this will be used to run the frontend/backend
 - Python 3
 - A modern web browser
 - (Optional) Visual studio code - for viewing HTML/js

# Python plugins

 - Flask
 - Flask-cors - use `pip install -U flask-cors` if the program does not run

## The main Directory

 - `main.py` - This is the main backend script 
 - `venv` - This folder contains scripts and extensions for the backend
 - `static` - This contains the static files (Frontend) that the backend will host for you
 - `old` - These are files that are not needed, but are useful for debugging

## How to use the program

 - Open this folder as a project in Pycharm
 - Run/Execute `main.py`
 - Pycharm will host to a specific address (Usually `http://127.0.0.1:5000/`) we will call this `address`
 - Travel to `http://address/` - This will be the main frontend to interact with
 - Travel to `http://address/js/req.js` - To see the JavaScript used to interact with the backend
## Features
 - ***Show users*** - You will see a list of users in front of you, along with their data
 - ***Change pages*** - Use the `Next` and `Previous` buttons to traverse the different pages of users
 - ***Show single user data*** - Click on a user for their data to be automatically placed into the user editing section below
 - ***Edit user data*** - Once a user has been clicked, change any needed data, then click `Save Changes`
 - ***Delete a user*** - Once a user has been clicked, click `Delete User`
 - ***Create a new user*** - once the `Username` and `Job` forms have been filled, click `New User`

	
