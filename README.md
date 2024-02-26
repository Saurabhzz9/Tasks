# Visitor Counter Application

This full-stack application tracks website visitors, showing the number of visits for the current and last month. It uses a React frontend and a Node.js/Express backend with MongoDB for data persistence.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/)
- MongoDB - [Download & Install MongoDB](https://www.mongodb.com/try/download/community), and make sure it's running on the default port (27017).

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/Saurabhzz9/Tasks.git
cd Tasks

### Setting Up the Backend

1. Navigate to the backend directory:

```bash
cd visitor-counter
```

2. Install the required dependencies:

```bash
npm install
```

3. Start the backend server:

```bash
npm start
```

The server will start on `http://localhost:3001`.

### Setting Up the Frontend

1. Open a new terminal window/tab and navigate to the frontend directory from the project root:

```bash
cd frontend
```

2. Install the required dependencies:

```bash
npm install
```

3. Start the React development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

## Features

- **Current Month Visits**: Displays the number of user visits for the current month.
- **Last Month Visits**: Displays the number of user visits for the last month.

