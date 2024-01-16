Certainly! Here's the README with all instructions presented in text format:

# Angular Test README

## Introduction
This repository contains the codebase for an Angular test completed as part of an assessment for a company. The application is designed to demonstrate the implementation of a registration form, data submission to a server, and dynamic data rendering in a user profile section.

## Installation
Follow these steps to set up and run the Angular test:

1. **Clone the Repository:**
   ```
   git clone https://github.com/your-username/angular-test.git](https://github.com/Gaurav-Gilli/Angular--Test.git
   ```

2. **Navigate to the Project Directory:**
   ```
   cd test-app
   ```

3. **Install Dependencies:**
   ```
   npm install
   ```

## Running the Application
To run the application, type the following command in the project directory:

```
ng serve
```

This will start the Angular development server, and you can access the application in your browser at `http://localhost:4200/`.

## Usage
1. Open your browser and go to `http://localhost:4200/`.
2. Click the **Register** button to navigate to the registration form.

   - Fill in the required details in the form.
   - Click the **Submit** button to send the data to the server.

3. To view the list of registered users, navigate to `/profile`.

## JSON Server Setup
The application is connected to a JSON server for handling data. To set up the server, type the following commands:

1. **Install JSON Server globally:**
   ```
   npm install -g json-server
   ```

2. **Start the JSON Server:**
   ```
   json-server --watch db.json
   ```

   This assumes that a `db.json` file is present in the project directory with the initial data.

   **Note:** Make sure the server is running at `http://localhost:3000/` for the Angular application to interact with it.

## Viewing User Profiles
After registering users, type the following URL in your browser to see the list of users with dynamic data fetched from the server:

```
http://localhost:4200/profile
```

## Additional Information
For further details or inquiries, please contact the repository owner. The application code is structured to showcase Angular concepts such as form handling, API communication, and dynamic data rendering.
