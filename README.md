# Coding Factory Final Project - Backend

## Introduction
This backend repository serves as the server-side implementation for the Coding Factory Final Project. It handles user authentication, user and note management, and provides API endpoints to interact with the frontend.

## Tech Stack
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT) for authentication
- Bcrypt for password hashing
- Rate limiting and CORS for security

## Folder Structure
The backend code is structured as follows:
- **`controllers/`**: Contains logic for handling user and note operations.
- **`middleware/`**: Houses middleware functions for logging, error handling, and token verification.
- **`models/`**: Defines MongoDB schemas for User and Note models.
- **`routes/`**: Handles API routes for users and notes.
- **`config/`**: Stores configuration files for CORS, allowed origins, and database connection.
- **`views/`**: Contains HTML files for rendering views like the main application and 404 error page.
- **`server.js`**: Main server file with setup for middleware, routes, and error handling.
- **`package.json`**: Contains project metadata, dependencies, and scripts.

## Setup
1. Clone this repository.
2. Install dependencies using `npm install`.
3. Set up the `.env` file based on the provided `.env.example`.
4. Ensure MongoDB is running and configure the `DATABASE_URI` in the `.env` file.
5. Start the server using `npm start` for production or `npm run dev` for development with Nodemon.

## Features
- **Authentication:** Handles user login, token generation, refresh, and logout.
- **User Management:** Allows CRUD operations for users (create, read, update, delete).
- **Note Management:** Supports CRUD operations for notes with user associations.

## Usage
- Access various routes for user and note operations using API calls.
- The frontend can utilize these routes for interacting with the backend.

## Error Handling & Logging
- Middleware ensures consistent error handling and logging of incoming requests.
- Error responses are standardized and logged for further analysis.

## Security Measures
- Utilizes JWT for secure authentication and authorization.
- Implements password hashing using Bcrypt.
- Rate limiting for login attempts and CORS setup for secure communication.

## Deployment
- Ensure environment variables are appropriately configured for production deployment.
- Use secure practices when deploying, including HTTPS and secure cookie settings.

## Contributions
Contributions are welcome! Fork the repository, make changes, and submit pull requests.

## Screenshots from the App
![1](https://github.com/SocratisNikolopoulos/Coding-Factory-Final-Project-BackEnd/assets/135650308/b4fa419c-75b1-4f2b-b52b-79e8b35561c7)
![2](https://github.com/SocratisNikolopoulos/Coding-Factory-Final-Project-BackEnd/assets/135650308/d5abbb18-6707-4ec3-bcbb-e61c9e3a6a60)
![3](https://github.com/SocratisNikolopoulos/Coding-Factory-Final-Project-BackEnd/assets/135650308/a6520897-70ad-48b1-b156-f22f9e5d2aa1)
![4](https://github.com/SocratisNikolopoulos/Coding-Factory-Final-Project-BackEnd/assets/135650308/a57962a9-bc56-44b6-877d-56d1154cd113)
![5](https://github.com/SocratisNikolopoulos/Coding-Factory-Final-Project-BackEnd/assets/135650308/a7beeff1-22ca-410c-8072-9b7cbce79da3)
![6](https://github.com/SocratisNikolopoulos/Coding-Factory-Final-Project-BackEnd/assets/135650308/b6c395cf-1783-4cf9-836d-b8b37e23467c)
![7](https://github.com/SocratisNikolopoulos/Coding-Factory-Final-Project-BackEnd/assets/135650308/c4d2502a-253d-4d9e-b132-f592475b2f79)

