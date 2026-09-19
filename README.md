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
* Input validation
* Duplicate email prevention

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
├── api/
│   └── index.js
├── controllers/
│   └── authController.js
├── middleware/
│   └── authMiddleware.js
├── routes/
│   └── authRoutes.js
├── node_modules/
├── server.js
├── package.json
├── package-lock.json
├── vercel.json
├── .gitignore
└── README.md
```

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Run Locally

Start the server:

```bash
npm start
```

Local API:

```text
http://localhost:3000
```

Local Swagger Documentation:

```text
http://localhost:3000/api-docs
```

## API Endpoints

### Register User

**POST** `/auth/register`

Request body:

```json
{
  "name": "Umaiya",
  "email": "umaiya@example.com",
  "password": "Test1234"
}
```

### Login User

**POST** `/auth/login`

Request body:

```json
{
  "email": "umaiya@example.com",
  "password": "Test1234"
}
```

A successful login returns a JWT access token.

### Protected Route

**GET** `/protected`

Requires an Authorization header:

```text
Authorization: Bearer <JWT_TOKEN>
```

The protected route verifies the JWT using authentication middleware.

## Security

* Passwords are hashed using bcrypt before being stored.
* JWT access tokens are generated after successful login.
* JWT tokens expire after 1 hour.
* Protect
