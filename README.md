# Task Tracker App

A simple React application to manage and track tasks efficiently. This project is set up with Vite for fast development, Docker for containerization, and a basic test suite using Jest and React Testing Library.

## Features

- Add, view, and delete tasks
- Dockerized for seamless deployment
- Includes unit tests for components

## Prerequisites

- Node.js 
- Docker (optional for containerization)

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/task-tracker-app.git
cd task-tracker-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Application Locally
```bash
npm run dev
```
Navigate to `http://localhost:5173` to view the app.

### 4. Run Tests
```bash
npm test
```

## Docker Setup

### 1. Build the Docker Image
```bash
docker build -t task-tracker-app .
```

### 2. Run the Docker Container
```bash
docker run -p 3000:3000 task-tracker-app
```

Visit `http://localhost:3000` to access the application in a Docker container.

## Project Structure
```
.
├── src
│   ├── components  // React components
│   ├── tests       // Unit tests
│   └── App.jsx     // Main app component
├── public          // Static files
├── Dockerfile      // Docker configuration
├── vite.config.js  // Vite configuration
├── package.json    // Project metadata and scripts
└── README.md       // Documentation
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
