# STUDY BOND  (React)

## 🎯 Purpose

STUDY BOND is a collaborative online study platform designed to help students create, share, and review assignments together. The client-side app is built with React focusing on seamless navigation, secure authentication, and a user-friendly interface.

> 🔗 Live Site: [https://study-bond-bd1de.web.app](https://study-bond-bd1de.web.app)

---

## ✨ Key Features

- 🏠 Multi-page React app with routes: Home, Assignments, Login, Register, Dashboard
- 🔍 Search & filter assignments by difficulty and title
- ✅ Submit assignments & review peer submissions
- 🌗 Persistent Light/Black theme toggle stored in localStorage
- 🔒 User authentication & protected routes with Firebase + JWT
- 📱 Responsive UI using TailwindCSS & DaisyUI

---

## 📦 NPM Packages Used

- ⚛️ **react** — Core UI library
- 🔁 **react-router-dom** — Client-side routing
- 🔥 **firebase** — Authentication & hosting backend
- 🎨 **tailwindcss** — Utility-first CSS framework
- 💎 **daisyui** — TailwindCSS component library
- 🔔 **react-hot-toast** — Toast notifications (if used)
- 📡 **axios** — HTTP client (if used)
- 📅 **react-datepicker** — Date picker component (if used)

---

## 🚀 Install & Run Locally

1. **Clone the repository**

```bash
https://github.com/rashikdev/StudyBond.git
cd study-bond-client
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory and add your Firebase & JWT environment variables like this:

```env
VITE_API_URL=https://your-server-url.com
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
# Add other Firebase and app config as needed
```

4. **Run the app**

```bash
npm run dev
```

Visit the app at `http://localhost:5173`

---

## 👨‍💻 Author:
**Rahsik**

- GitHub: https://github.com/rashikdev
- Twitter:  https://x.com/RashikKhan513
- Email: mdrashikpdf@gmail.com
```
