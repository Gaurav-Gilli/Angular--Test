Introduction
This repository contains the codebase for an Angular test completed as part of an assessment for a company. The application is designed to demonstrate the implementation of a registration form, data submission to a server, and dynamic data rendering in a user profile section.

Installation
Follow these steps to set up and run the Angular test:

Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/angular-test.git
Navigate to the Project Directory:

bash
Copy code
cd test-app
Install Dependencies:

bash
Copy code
npm install
Running the Application
To run the application, execute the following command in the project directory:

bash
Copy code
ng serve
This will start the Angular development server, and you can access the application in your browser at http://localhost:4200/.

Usage
Open your browser and go to http://localhost:4200/.

Click the Register button to navigate to the registration form.

Fill in the required details in the form.
Click the Submit button to send the data to the server.
To view the list of registered users, navigate to /profile.

JSON Server Setup
The application is connected to a JSON server for handling data. Follow these steps to set up the server:

Install JSON Server globally:

bash
Copy code
npm install -g json-server
Start the JSON Server:

bash
Copy code
json-server --watch db.json
This assumes that a db.json file is present in the project directory with the initial data.

Note: Make sure the server is running at http://localhost:3000/ for the Angular application to interact with it.

Viewing User Profiles
After registering users, visit /profile to see the list of users with dynamic data fetched from the server.

Additional Information
For further details or inquiries, please contact the repository owner. The application code is structured to showcase Angular concepts such as form handling, API communication, and dynamic data rendering.






