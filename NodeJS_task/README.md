# Simple User Authentication API

This is a simple user authentication API built with Express.js. It includes routes for user registration and login, using bcrypt for password hashing.

## Features

- User registration with hashed password storage
- User login with password verification


## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/anmolpandey299/Automateazy_task.git
    cd NodeJS_task
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Set up the environment variables:

    Create a `.env` file in the root directory 

    ```plaintext
    PORT=3000
    MONGO_URL=<Your MongoDB connection string>
    ```

4. Start the server:

    ```bash
    npm start
    ```

## API Endpoints

### Register User

- **URL:** `/register`
- **Method:** `POST`
- **Description:** Registers a new user with a hashed password.
- **Request Body:**
  ```json
  {
      "username": "yourUsername",
      "email": "yourEmail@example.com",
      "password": "yourPassword"
  }

  - **Response:**
    - `201 Created` on success
    - `400 Bad Request` if the user already exists

### Login User

- **URL:** `/login`
- **Method:** `POST`
- **Description:** Logs in a user by verifying the password.
- **Request Body:**

    ```json
    {
        "username": "yourUsername",
        "password": "yourPassword"
    }
    ```

- **Response:**
    - `200 OK` on successful login
    - `401 Unauthorized` if the password is incorrect
    - `400 Bad Request` if the user does not exist
