# Course Management System

The Course Management System is a web application for listing and managing courses efficiently.

### Features

- Create, Read, Update, and Delete (CRUD) operations for courses.
- View a list of available courses.
- Search courses.
- Course details including name, members, coach ID, and a description.

### Tech Stack

- Frontend:
  - React
  - TypeScript
  - Scss
  - docker

- Backend:
  - Node.js
  - TypeScript
  - Express
  - MongoDB
  - docker

### Installation

To set up the Course Management System, follow these steps:

#### Frontend

```sh
$ cd frontend
$ npm install
```
#### Backend

```sh
$ cd backend
$ npm install
```

### Runing the app

#### Frontend

Starting react app at port 3000
```sh
$ npm start
```
#### Backend

1. Rename the .env.example file in the backend directory to .env.
2. Inside the .env file, add the following configuration for MongoDB, specifying your MongoDB URL and port:
```sh
$ MONGO_DB_URL=your-mongodb-url
$ PORT=node-port
```
3. Save the .env file.
4. Now, you can start the backend server:
```sh
$ npm run dev
```

### Improvments

- **User Management:** Add user authentication to the system, allowing administrators, instructors, and students to have personalized accounts.
- **User Roles:** Implement role-based access control for administrators, instructors, and students.
- **Coach Modules:** Introduce coach-specific features for better course management.
- **Enhanced Search and Filters:** Implement advanced search and filtering options for a more streamlined user experience.
- **Course Enrollment:** Allow students to enroll in courses directly through the system.

These planned improvements will enhance the functionality and usability of the Course Management System, making it a more comprehensive and user-friendly solution for educational institutions.
### ScreenShots

<img width="1505" alt="Screenshot 2023-10-11 at 03 44 22" src="https://github.com/skanderHarrabi/Courses-CRUD/assets/36156046/5492193a-4dcd-4f3b-b1fa-842da98d576b">
<img width="1507" alt="Screenshot 2023-10-11 at 03 44 38" src="https://github.com/skanderHarrabi/Courses-CRUD/assets/36156046/c393271f-30c6-48b4-99b1-691365adc5e3">
<img width="1503" alt="Screenshot 2023-10-11 at 03 44 48" src="https://github.com/skanderHarrabi/Courses-CRUD/assets/36156046/f25c752c-0a57-4b3b-8b87-205d2243a92c">
<img width="1482" alt="Screenshot 2023-10-11 at 03 44 59" src="https://github.com/skanderHarrabi/Courses-CRUD/assets/36156046/eb6137b6-a15b-43f5-8421-2bb08cb75c74">
<img width="1510" alt="Screenshot 2023-10-11 at 03 45 09" src="https://github.com/skanderHarrabi/Courses-CRUD/assets/36156046/ed98feea-1d0f-441a-be39-0e76eaceb57c">
<img width="1477" alt="Screenshot 2023-10-11 at 03 45 26" src="https://github.com/skanderHarrabi/Courses-CRUD/assets/36156046/bc757a9d-991b-47a0-be0b-e201e2e5fb36">
<img width="902" alt="Screenshot 2023-10-11 at 03 38 17" src="https://github.com/skanderHarrabi/Courses-CRUD/assets/36156046/56878793-ae4e-4d3e-9bc3-f231b854e7b8">

