# Lead Management System

![Next.js](https://img.shields.io/badge/Next.js-15.2-blue.svg) ![Node.js](https://img.shields.io/badge/Node.js-18-green.svg) ![MongoDB](https://img.shields.io/badge/MongoDB-5.0-brightgreen.svg)

## 🚀 Project Description
A simple Lead Management System with a **Next.js** frontend and a **Node.js (Express) backend**, using **MongoDB (Mongoose) for data storage.

## 📌 Features
### Backend (Node.js & Express)
- **POST /leads** → Add a new lead
- **GET /leads** → Fetch all leads
- Uses  MongoDB (Mongoose) 
- Lead Schema:
  - `name` (string, required)
  - `email` (string, required, unique)
  - `status` (enum: "New", "Engaged", "Proposal Sent", "Closed-Won", "Closed-Lost")
  - `createdAt` (timestamp)

### Frontend (Next.js)
- Displays the list of leads from the API
- Provides a simple form to add a new lead

## 🏗 Tech Stack
- **Frontend:** Next.js (with TypeScript), Tailwind CSS, ShadCN
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose) 

## 📦 Installation

 **Clone the repository:**
   


1. **Backend Setup:**
   ```sh
    https://github.com/Praveen1214/backend-lead-manager.git
   ```
   ```sh
   npm install
   ```

   Configure your `.env` file:
   ```sh
    MONGO_URI= mongodb+srv://carauctions:gTjMPvcst9S1CYvA@auctions.cknff.mongodb.net/test2
   ```

   Run the backend:
   ```sh
   npm run dev
   ```

2. **Frontend Setup:**

   
   ```sh
   https://github.com/Praveen1214/forntend-lead-manager.git
   ```

   ```sh
   npm install
   ```

   Configure your `.env.local` file:
   ```sh
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

   Run the frontend:
   ```sh
   npm run dev
   ```

   Project will be available at [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment
- **Frontend:** Deploy on Vercel
- **Backend:** Deploy on Railway

- URL - https://forntend-lead-manager.vercel.app/


## 📜 Folder Structure
```
backend/
├── config/
├── controllers/
├── models/
├── routes/
├── types/
├── app.ts
├── package.json
└── tsconfig.json

frontend/
├── app/
├── components/
├── hooks/
├── lib/
├── store/
├── types/
├── public/
├── package.json
└── next.config.js
```


## 📞 Contact
For any inquiries, reach out via:
- Email: dileepapraveen32@gmail.com


