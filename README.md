# 🍔 Zomato-Style-reel-Scroller-basic

A full-stack **MERN** application where users can explore short **food reels**, like and save their favorites, and where **food partners** can upload videos of their dishes.

Built with:

* 🎬 **React (Vite)** frontend
* ⚙️ **Node.js + Express.js** backend
* 🗄 **MongoDB (Mongoose)** database
* 🔐 **JWT Authentication** with cookies
* ☁️ **ImageKit** for video storage

---

## 🧩 Project Structure

```
FoodReels/
│
├── backend/                # Express.js backend
│   ├── src/
│   │   ├── controllers/    # Controllers (auth, food, etc.)
│   │   ├── models/         # MongoDB Mongoose models
│   │   ├── middlewares/    # JWT and role middlewares
│   │   ├── routes/         # API routes
│   │   ├── db/             # MongoDB connection
│   │   └── app.js          # Express app setup
│   ├── .env                # Environment variables
│   └── server.js           # Entry point (uses nodemon)
│
├── frontend/               # React frontend (Vite)
│   ├── src/
│   │   ├── pages/          # Pages (Login, Register, Home, CreateFood, etc.)
│   │   ├── components/     # UI components (ReelFeed, BottomNav, etc.)
│   │   ├── styles/         # CSS files
│   │   └── AppRoutes.jsx   # Routing setup
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Backend Setup (Node + Express + Nodemon)

### 1️⃣ Navigate to backend folder

```bash
cd backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file

Inside `backend/.env`, add your credentials:

```env
MONGODB_URI=your-mongodb-url
JWT_SECRET=your_jwt_secret_here

# ImageKit Keys
IMAGEKIT_PUBLIC_KEY=public_xxx
IMAGEKIT_PRIVATE_KEY=private_xxx
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_endpoint
```

### 4️⃣ Run the backend server

Since you’re using **nodemon**, you can start the backend with:

```bash
npm run dev
```

✅ Example console output:

```
[nodemon] starting `node server.js`
Server is running on port 3000
MongoDB connected
```

Your backend runs at:

```
http://localhost:3000
```

---

## 💻 Frontend Setup (React + Vite)

### 1️⃣ Navigate to frontend folder

```bash
cd frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the frontend

```bash
npm run dev
```

✅ Example output:

```
VITE v5.0 ready in 300ms
➜ Local: http://localhost:5173/
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🔗 API Routes Summary

| Endpoint                          | Method | Description                         |
| --------------------------------- | ------ | ----------------------------------- |
| `/api/auth/user/register`         | POST   | Register a user                     |
| `/api/auth/user/login`            | POST   | Login user                          |
| `/api/auth/user/logout`           | POST   | Logout user                         |
| `/api/auth/food-partner/register` | POST   | Register a food partner             |
| `/api/auth/food-partner/login`    | POST   | Login food partner                  |
| `/api/auth/food-partner/logout`   | POST   | Logout food partner                 |
| `/api/food`                       | POST   | Upload a new food video             |
| `/api/food`                       | GET    | Fetch all food reels                |
| `/api/food/save`                  | POST   | Save/Unsave a food item             |
| `/api/food-partner/:id`           | GET    | Get food partner profile and videos |

---

## 🚀 Features

* 🔐 JWT-based authentication with secure cookies
* 🎥 Food reel-style video feed
* ❤️ Like, save, and comment support
* 👨‍🍳 Partner dashboard to upload and manage dishes
* 🖼 Integrated ImageKit for file hosting
* 📱 Responsive UI (React + modern CSS)
* ⚡ Smooth video playback with auto-pause on scroll

---

## 🧪 Tech Stack

| Category     | Technologies        |
| ------------ | ------------------- |
| **Frontend** | React, Vite, Axios  |
| **Backend**  | Node.js, Express.js |
| **Database** | MongoDB (Mongoose)  |
| **Auth**     | JWT + Cookies       |
| **Storage**  | ImageKit.io         |
| **Styling**  | Custom CSS          |

---

## 🧠 Developer Notes

* Keep both servers running simultaneously:

  * `localhost:3000` → Backend
  * `localhost:5173` → Frontend
* Use `withCredentials: true` in Axios for cookie-based authentication.
* Do **not** commit `.env` files to GitHub.

---

## 🧭 Common Commands

| Command         | Description               |
| --------------- | ------------------------- |
| `npm run dev`   | Run server (with nodemon) |
| `npm start`     | Run server normally       |
| `npm install`   | Install dependencies      |
| `npm run build` | Build production frontend |

---

## 📷 Preview

**Front Page:**

> Welcomes users with links to “Login as User” and “Login as Partner.”

**Home Feed:**

> Displays short video reels with like/save actions.

**Create Food Page:**

> Upload new food videos with description and preview.

---

## 💬 Author

**Priyanshu Srivastav**

> MERN Stack Developer | Passionate about Interactive Web Experiences

📧 Email:(mailto:srivastavapriyanshu201@gmail.com)
🔗 GitHub: (https://github.com/priyanshuxoxo)

---

## 🪪 License
You can freely use, modify, and share it with attribution.
