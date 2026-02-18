# Backend Ledger

A backend API for user authentication and account management built with Node.js, Express, and MongoDB.

## Description

Backend Ledger is a RESTful API that provides user authentication and account management functionality. It includes features for user registration, login, JWT-based authentication, and email notifications.

## Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Email Service**: nodemailer
- **Additional**: cookie-parser, dotenv

## Features

- User Registration with email, name, and password
- User Login with email and password
- JWT-based authentication (token expires in 3 days)
- Cookie-based token storage
- Automatic password hashing with bcrypt
- Email notifications for user registration
- Account management with status tracking (ACTIVE, FROZEN, CLOSED)
- Multi-currency support for accounts

## API Endpoints

### Authentication Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login with email and password |

### Request/Response Examples

#### Register User
```
bash
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "name": "John Doe",
  "password": "password123"
}
```

Response:
```
json
{
  "user": {
    "_id": "...",
    "email": "user@example.com",
    "name": "John Doe"
  },
  "token": "..."
}
```

#### Login User
```
bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

Response:
```
json
{
  "user": {
    "_id": "...",
    "email": "user@example.com",
    "name": "John Doe"
  },
  "token": "..."
}
```

## Project Structure

```
BACKEND-LEDGER/
├── server.js                 # Application entry point
├── package.json              # Dependencies and scripts
├── .gitignore                # Git ignore file
├── src/
│   ├── app.js                # Express application setup
│   ├── config/
│   │   └── db.js             # MongoDB connection configuration
│   ├── controllers/
│   │   └── auth.controller.js # Authentication controllers
│   ├── models/
│   │   ├── user.model.js     # User model schema
│   │   └── account.model.js  # Account model schema
│   ├── routes/
│   │   └── auth.routes.js    # Authentication routes
│   └── services/
│       └── email.service.js  # Email service configuration
```

## Installation

1. Clone the repository:
```
bash
git clone <repository-url>
cd BACKEND-LEDGER
```

2. Install dependencies:
```
bash
npm install
```

3. Create a `.env` file in the root directory and configure the following environment variables:

```
env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/backend-ledger

# JWT Secret
JWT_SECRET=your-super-secret-key

# Email Configuration (Gmail with OAuth2)
EMAIL_USER=your-email@gmail.com
CLIENT_ID=your-client-id
CLIENT_SECRET=your-client-secret
REFRESH_TOKEN=your-refresh-token
```

4. Start the development server:
```
bash
npm run dev
```

The server will run on `http://localhost:4000`

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the server with nodemon (development mode) |
| `npm start` | Start the server with Node.js (production mode) |
| `npm test` | Run tests (not configured) |

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port (default: 4000) | No |
| `MONGODB_URI` | MongoDB connection string | Yes |
| `JWT_SECRET` | Secret key for JWT token generation | Yes |
| `EMAIL_USER` | Gmail address for sending emails | Yes |
| `CLIENT_ID` | OAuth2 client ID for Gmail | Yes |
| `CLIENT_SECRET` | OAuth2 client secret for Gmail | Yes |
| `REFRESH_TOKEN` | OAuth2 refresh token for Gmail | Yes |

## Models

### User Model
- `email`: String (required, unique, validated)
- `name`: String (required)
- `password`: String (required, min 6 characters, hashed)
- `timestamps`: createdAt, updatedAt

### Account Model
- `user`: ObjectId (reference to User, required, indexed)
- `status`: String (enum: ACTIVE, FROZEN, CLOSED, default: ACTIVE)
- `currency`: String (default: INR)
- `timestamps`: createdAt, updatedAt

## License

ISC License
