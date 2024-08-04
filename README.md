Zomato Clone
This is a Zomato clone built using the MERN stack (MongoDB, Express, React, Node.js). The project features functionalities such as creating orders, managing menus, user authentication, and more.

Project Links
GitHub Repository: Zomato Clone
Hosted Application: Zomato Clone on Vercel
Features
User Authentication: Sign up and log in functionality for users.
Order Management: Create orders, get orders, update order status, and retrieve orders by user and restaurant.
Menu Management: Add and update menu items, get menu items by ID.
API Endpoints: Comprehensive set of RESTful APIs for interacting with the application.
Technologies Used
Frontend: React
Backend: Node.js, Express
Database: MongoDB
Hosting: Vercel
API Endpoints
User Authentication
POST /api/auth/signup: User signup
POST /api/auth/login: User login
Order Management
POST /api/orders: Create a new order
GET /api/orders: Get all orders
GET /api/orders/
: Get order by ID
GET /api/orders/user/
: Get orders by user ID
GET /api/orders/restaurant/
: Get orders by restaurant ID
PUT /api/orders/
: Update order status
Menu Management
POST /api/menu: Add a new menu item
PUT /api/menu/
: Update a menu item
GET /api/menu/
: Get menu item by ID
Getting Started
Prerequisites
Node.js
MongoDB
Installation
Clone the repository

bash
Copy code
git clone https://github.com/shamimahmadup11/Zomatoclone.git
cd Zomatoclone
Install dependencies for both client and server

bash
Copy code
npm install
cd client
npm install
cd ..
Create a .env file in the root directory and add the following environment variables

env
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Run the application

bash
Copy code
npm run dev
Usage
Open your browser and navigate to http://localhost:3000 to view the application.
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

License
This project is licensed under the MIT License.

Contact
For any inquiries or feedback, please contact Shamim Ahmad.
