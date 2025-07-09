# Subscription Tracker

A simple application to track your subscriptions.

## Features

* User authentication (signup, login)
* Create, read, update, and delete subscriptions
* View all subscriptions for a user

## Getting Started

### Prerequisites

* Node.js
* npm
* MongoDB

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Install NPM packages:
   ```sh
   npm install
   ```
3. Create a `.env` file in the `config` directory and add the following environment variables:
   ```
   PORT=3000
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```
4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### Auth

* `POST /api/auth/signup` - Register a new user
* `POST /api/auth/login` - Login a user

### User

* `GET /api/user/profile` - Get user profile
* `PUT /api/user/profile` - Update user profile

### Subscriptions

* `GET /api/subscriptions` - Get all subscriptions for the logged-in user
* `POST /api/subscriptions` - Create a new subscription
* `GET /api/subscriptions/:id` - Get a single subscription by ID
* `PUT /api/subscriptions/:id` - Update a subscription by ID
* `DELETE /api/subscriptions/:id` - Delete a subscription by ID
