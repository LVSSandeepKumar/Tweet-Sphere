# Tweet-Sphere

## Overview
Tweet-Sphere is a Twitter clone built using the MERN stack (MongoDB, Express, React, Node.js) and TanStack/React-Query. It aims to replicate core Twitter functionalities, providing a robust and interactive social media experience.

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [File Structure](#file-structure)
5. [Deployment](#deployment)
6. [Key Coding Takeaways](#key-coding-takeaways)
7. [Contributing](#contributing)
8. [Acknowledgements](#acknowledgements)

## Features
- **User Authentication**: Secure login and registration.
- **Tweet Management**: Create, edit, delete, and view tweets.
- **User Profiles**: Personalized profiles with user tweets and information.
- **Follow System**: Follow and unfollow other users.
- **Like and Comment**: Engage with tweets through likes and comments.
- **Real-Time Updates**: Real-time feed updates using WebSockets.
- **Responsive Design**: Optimized for various devices and screen sizes.
- **Search Functionality**: Search for users and tweets.

## Installation
### Prerequisites
- Node.js and npm installed
- MongoDB installed and running

### Steps
1. Clone the repository:
    ```sh
    git clone https://github.com/LVSSandeepKumar/Tweet-Sphere.git
    ```
2. Navigate to the project directory:
    ```sh
    cd Tweet-Sphere
    ```
3. Install the dependencies for both backend and frontend:
    ```sh
    cd backend
    npm install
    cd ../frontend
    npm install
    ```
4. Set up the environment variables (create a `.env` file in the root directory with the necessary variables):
    ```env
    MONGO_URI=<your_mongodb_connection_string>
    JWT_SECRET=<your_jwt_secret>
    ```
5. Start the backend server:
    ```sh
    cd backend
    npm run dev
    ```
6. Start the frontend application:
    ```sh
    cd frontend
    npm run start
    ```
7. Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

## Usage
After starting the application, users can sign up, log in, and start tweeting. The feed updates in real-time, allowing users to interact with others through likes, comments, and follows.

## File Structure
The file structure includes:
- **backend/**: Backend server and API routes.
  - **controllers/**: Logic for handling requests.
  - **models/**: MongoDB models and schemas.
  - **routes/**: API route definitions.
  - **middlewares/**: Middleware functions.
  - **.env**: Environment variables.
  - **server.js**: Entry point for the backend server.
- **frontend/**: React frontend application.
  - **public/**: Public assets.
  - **src/**: Source code for the frontend application.
    - **components/**: Reusable React components.
    - **pages/**: Main pages of the application.
    - **services/**: API service functions.
    - **styles/**: CSS files for styling the application.
- **package.json**: Project metadata and dependencies.
- **README.md**: Project documentation.

## Deployment
This project is deployed at [Tweet-Sphere on Vercel](https://tweet-sphere.onrender.com).

## Key Coding Takeaways
- **MERN Stack**: Full-stack development using MongoDB, Express, React, and Node.js.
- **React Query**: Efficient state management and data fetching using TanStack/React-Query.
- **WebSockets**: Real-time updates and notifications using WebSockets.
- **JWT Authentication**: Secure user authentication with JSON Web Tokens.
- **Responsive Design**: Ensuring the application looks great on all devices.
- **Component-Based Architecture**: Modular design with reusable React components.
- **RESTful API**: Building a RESTful API for seamless frontend-backend communication.

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request.

## Acknowledgements
- Built using the MERN stack and TanStack/React-Query.
