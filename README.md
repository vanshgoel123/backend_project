# Authentication & Product Management API
 A full stack project with user authentication (signup and login flow)

---

## Project Overview

This is a complete authentication system with the following features:
- **User Registration** (Signup with email validation)
- **User Login** (Email & password authentication)
- **JWT Token-based Security** (24-hour expiring tokens)
- **Protected Routes** (Product listing requires authentication)
- **Product Management** (View all products with authentication)

---

## Tech Stack used
- Express JS
- MongoDB with Mongoose
-JWT 
-bcrypt
- Joi
- Cors 

## Project Structure
```
The project is structured as follows: backend/                     # Express.js API
  ├── controllers/
  │   └── authController.js    # Login & Signup logic
  ├── middlewares/
  │   ├── auth.js             # JWT verification
  │   └── authValidation.js    # Request validation (Joi)
  ├── models/
  │   ├── db.js               # MongoDB connection
  │   └── user.js             # User schema
  ├── routes/
  │   ├── authRoutes.js        # Auth endpoints
  │   └── productRoutes.js     # Product endpoints
  ├── project_contracts/       # OpenAPI specs
  ├── index.js                 # Express server
  └── package.json
```
