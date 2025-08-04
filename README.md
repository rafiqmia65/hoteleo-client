# 🏨 Hoteleo - Hotel Booking Web Application (Client)

**Hoteleo** is a modern, responsive hotel booking web application. The client is built using **React 19**, **Vite**, **Tailwind CSS 4**, and **Firebase**, offering users a smooth experience to browse rooms, make bookings, and leave reviews.

---

## 🌐 Live Demo
🔗 [Hoteleo Client Live](https://hoteleo.netlify.app/)

---

---

## 🚀 Features
- ⚛️ **React 19** + **Vite** for lightning-fast performance
- 🎨 Styling with **Tailwind CSS 4** + **DaisyUI**
- 🔐 **Firebase Authentication** (Email/Password & Google Login)
- 📅 Dynamic room filtering (Date & Price based)
- 📷 Masonry Photo Gallery with **Lightbox Preview**
- 📍 Map Integration using **React Leaflet**
- 📦 Secure API calls via **Axios**
- 🔔 Elegant alerts with **SweetAlert2**
- 📆 Date selection using **React Datepicker**
- 🎥 Smooth animations with **Framer Motion**
- 🌐 SEO ready via **React Helmet**

---

## 🛠 Tech Stack
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwindcss)
![Firebase](https://img.shields.io/badge/Firebase-Authentication-orange?logo=firebase)
![Axios](https://img.shields.io/badge/Axios-HTTP%20Client-5A29E3)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animations-pink?logo=framer)

---

## 📂 Folder Structure
```
hoteleo-client/
├── public/
├── src/
│   ├── api/
│   ├── assets/
│   ├── firebase/
│   ├── Hook/
│   ├── layouts/
│   ├── pages/
│   │   ├── AboutUs/
│   │   ├── AllRooms/
│   │   ├── ContactUs/
│   │   ├── ErrorPage/
│   │   ├── Home/
│   │   ├── Login/
│   │   ├── MyBookings/
│   │   ├── RoomDetails/
│   │   ├── Shared/
│   │   └── SignUp/
│   ├── Provider/
│   ├── routes/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── tailwind.config.js
└── vite.config.js
```

---

## 🔑 Environment Variables
Create a `.env.local` file in the root and add:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

VITE_serverURL=https://hoteleo-server.vercel.app
```

---

## ⚡ Setup & Installation
1️⃣ Clone the repository  
```bash
git clone https://github.com/rafiqmia65/hoteleo-client.git
```

2️⃣ Install dependencies  
```bash
npm install
```

3️⃣ Configure Firebase in `/src/firebase/`

4️⃣ Run development server  
```bash
npm run dev
```

5️⃣ Build for production  
```bash
npm run build
```

---

## 🤝 Contributing
1. Fork the repository  
2. Create a new branch  
```bash
git checkout -b feature/your-feature
```
3. Commit changes  
```bash
git commit -m "Added new feature"
```
4. Push branch and open a PR

---

## 📄 License
This project is licensed under the **MIT License**.

---

## 👨‍💻 Author
**Md Rafiq Mia**  
MERN Stack Developer
