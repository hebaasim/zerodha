<<<<<<< HEAD
# Zerodha Trading Platform

A full-stack trading platform inspired by Zerodha, featuring a React frontend, Node.js backend, and a dashboard application.

## Project Structure

```
zerodha/
├── backend/          # Node.js/Express API server
├── frontend/         # React landing page and main application
└── dashboard/        # React dashboard application
```

## Features

- **Authentication System** - User registration and login
- **Trading Dashboard** - Real-time portfolio tracking
- **Order Management** - Buy/sell orders
- **Position Tracking** - Current positions and P&L
- **Holdings Management** - Portfolio holdings
- **Responsive Design** - Mobile-friendly interface

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT Authentication
- CORS enabled

### Frontend
- React.js
- React Router
- Axios for API calls
- Bootstrap for styling
- Font Awesome icons

### Dashboard
- React.js
- Chart.js for data visualization
- Real-time data updates

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd zerodha
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Install dashboard dependencies**
   ```bash
   cd ../dashboard
   npm install
   ```

### Environment Setup

Create `.env` files in the backend directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```

2. **Start the frontend application**
   ```bash
   cd frontend
   npm start
   ```

3. **Start the dashboard application**
   ```bash
   cd dashboard
   npm start
   ```

The applications will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Dashboard: http://localhost:3001

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/verify` - Verify authentication token

### Trading
- `GET /api/holdings` - Get user holdings
- `GET /api/positions` - Get current positions
- `GET /api/orders` - Get order history
- `POST /api/orders` - Place new order

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Inspired by Zerodha's trading platform
- Built with modern web technologies
- Designed for educational purposes 
=======
# zerodha
>>>>>>> 18350a71ac896d25b7093ba62cfb1b282299185b
