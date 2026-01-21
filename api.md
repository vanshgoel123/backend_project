# Backend API Documentation

## Backend URL
```
http://localhost:8000/
```

---

## Authentication Endpoints

### 1. User Signup
**Endpoint:** `POST /auth/signup`

**Description:** Register a new user account

**Request Body:**
```json
{
  "name": "vansh goel",
  "email": "vansh@gmail.com",
  "password": "Password123"
}
```

**Response (User Registered - 201):**
```json
{
  "message": "User registered Successfully",
  "success": true
}
```

**Response (User Already Exists - 409):**
```json
{
  "message": "User already exists, so you can login",
  "success": false
}
``` 

**Response (Validation Error - 400):**
```json
{
  "message": "Bad Request",
  "success": false  
}
```

**Response (Server Error - 500):**
```json
{
  "message": "Internal Server Error",
  "success": false
}
```

---

### 2. User Login
**Endpoint:** `POST /auth/login`

**Description:** Authenticate user and receive JWT token

**Request Body:**
```json
{
  "email": "vansh@gmail.com",
  "password": "Password123"
}
```

**Response (Success - 200):**
```json
{
  "message": "Login successful",
  "success": true,
  "jwtToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZhbnNoQGdtYWlsLmNvbSIsIl9pZCI6IjY5NzBjZmI4YjI4ZjgyNjI3YmRjZTU0ZSIsImlhdCI6MTc2OTAwMDg5NSwiZXhwIjoxNzY5MDg3Mjk1fQ.Iwvzk7sVS_w_7w-LLLUS-OIS5W8I9rmRj0EOawwVSFU",
  "email": "vansh@gmail.com",
  "name": "vansh goel"
}
```

**Response (User Not Found - 403):**
```json
{
  "message": "Auth failed or not exists",
  "success": false
}
```

**Response (Invalid Password - 401):**
```json
{
  "message": "Invalid password",
  "success": false
}
```

**Response (Validation Error - 400):**
```json
{
  "message": "Bad Request",
  "success": false
}
```

**Response (Server Error - 500):**
```json
{
  "message": "Internal Server Error",
  "success": false
}
```

---

## Status Codes Reference

| Code| Meaning      | When Used                    |
|-----|--------------|------------------------------|
| 200 | OK           | Successful login             |
| 201 | Created      | User successfully registered |
| 400 | Bad Request  | Validation errors in request |
| 401 | Unauthorized | Invalid password             |
| 403 | Forbidden    | User not found               |
| 409 | Conflict     | User already exists          |
| 500 | Server Error | Internal server error        |

---

## Validation Rules

### Signup Validation
- **Name:** Required, string
- **Email:** Required, valid email format
- **Password:** Required, minimum length 6

### Login Validation
- **Email:** Required, valid email format
- **Password:** Required

---

## Authentication
Some endpoints may require JWT token in header:
```
authorization: Bearer <jwtToken>
```

---

## Notes
- JWT tokens expire after **24 hours**.
- Passwords are hashed using **bcrypt** (rounds: 10).
- All responses include a `success` boolean flag i.e true or false.
- Errors include descriptive messages that will helps indebugging.

---

## How to Test APIs

### Using curl

**Signup:**
```bash
curl -X POST http://localhost:8000/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "vansh goel",
    "email": "vansh@gmail.com",
    "password": "Password123"
  }'
```

**Login:**
```bash
curl -X POST http://localhost:8000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "vansh@gmail.com",
    "password": "Password123"
  }'
```
---