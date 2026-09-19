# Week 7 User Authentication API

A secure Express.js REST API implementing user registration, login, password hashing with bcrypt, JWT authentication, and protected routes.

## Features

* User registration
* Password hashing using bcrypt
* User login
* JWT access token generation
* JWT authentication middleware
* Protected API route
* Swagger API documentation
* JSON REST API

## Technologies Used

* Node.js
* Express.js
* bcryptjs
* JSON Web Token (JWT)
* Swagger UI Express
* Swagger JSDoc

## Project Structure

```text
week-7-express/
├── controllers/
│   └── authController.js
├── middleware/
│   └── authMiddleware.js
├── routes/
│   └── authRoutes.js
├── server.js
├── package.json
└── README.md
```

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Run Locally

Start the server with:

```bash
npm start
```

The API runs on:

```text
http://localhost:3000
```

## API Endpoints

### Register

```text
POST /auth/register
```

Example request:

```json
{
  "name": "Umaiya",
  "email": "umaiya@example.com",
  "password": "Test1234"
}
```

### Login

```text
POST /auth/login
```

Example request:

```json
{
  "email": "umaiya@example.com",
  "password": "Test1234"
}
```

The login response returns a JWT access token.

### Protected Route

```text
GET /protected
```

Requires:

```text
Authorization: Bearer <JWT_TOKEN>
```

## Security

Passwords are hashed using bcrypt before being stored.

JWT access tokens are generated after successful login and verified through authentication middleware before protected routes can be accessed.

## Swagger Documentation

Local Swagger documentation:

```text
http://localhost:3000/api-docs
```

## Live Project

Live Project URL: To be added after deployment.

## GitHub Repository

GitHub Repository URL: To be added after repository creation.

## Validation

The API validates required registration and login fields, prevents duplicate email registration, verifies passwords using bcrypt, and rejects missing, invalid, or expired JWT tokens.
