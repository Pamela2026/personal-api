# Personal API

A simple Express.js REST API built for the HNG DevOps Stage 1 task. This API provides basic endpoints to check server status and retrieve personal information.

## Project Overview

This project demonstrates a basic Node.js/Express API with three simple endpoints. It's designed to run locally or be deployed to production environments.

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Pamela2026/personal-api.git
   cd personal-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the server:
   ```bash
   npm start
   ```
   Or directly:
   ```bash
   node app.js
   ```

The server will start on `http://localhost:3000`

## API Endpoints

### 1. GET `/`
**Description**: Check if the API is running

**Response:**
```json
{
  "message": "API is running"
}
```

---

### 2. GET `/health`
**Description**: Health check endpoint to verify server status

**Response:**
```json
{
  "message": "healthy"
}
```

---

### 3. GET `/me`
**Description**: Get personal information about the API owner

**Response:**
```json
{
  "name": "Pamela Patrick",
  "email": "pamelapatrick464@gmail.com",
  "github": "https://github.com/Pamela2026"
}
```

## Testing

Run the test command:
```bash
npm test
```

## Environment Variables

- `PORT`: The port the server runs on (default: 3000)

Example:
```bash
PORT=8000 node app.js
```

## License

ISC
