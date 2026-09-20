# Tuga's App — Login UI & Firebase Google Auth Integration

> Internship Technical & Creative Assessment Submission for **code3x**  
> Role: Software Engineering Intern - Full Stack

A pixel-detailed, responsive login page built with **React**, **Vite**, **TypeScript**, and **Material UI (MUI)**, integrated with **Firebase Authentication** (Google Sign-In) and hosted on **Firebase Hosting**.

---

## 🚀 Live Demo & Repository
- **Firebase Hosted Live URL:** `[Your Firebase Hosting URL will go here]`
- **GitHub Repository:** `[Your GitHub Repository URL will go here]`

---

## 🛠️ Tech Stack & Dependencies
- **Framework:** React + Vite
- **Language:** TypeScript
- **Component Library & Styling:** Material UI (MUI v6/v7) + Emotion
- **Routing:** React Router v7 (`react-router-dom`)
- **Authentication:** Firebase v12 (Google Auth Provider)
- **Deployment:** Firebase Hosting (Single Page Application configuration)

---

## 📁 Project Architecture & Folder Structure

```text
code3x-login/
├── public/
│   ├── favicon.svg              # App Favicon
│   └── icons.svg
├── src/
│   ├── assets/                  # Graphics and assets
│   ├── components/
│   │   ├── LoginForm.tsx        # Left side form with input validation & auth handlers
│   │   ├── PromoPanel.tsx       # Right side mint card with SVG illustration & floating badges
│   │   └── SocialButtons.tsx    # Google, Apple, and Facebook circular buttons
│   ├── pages/
│   │   ├── LoginPage.tsx        # Responsive split layout inside macOS mockup frame
│   │   └── DashboardPage.tsx    # Post-login view displaying user details & accessToken
│   ├── services/
│   │   └── firebase.ts          # Firebase SDK initialization & Google Auth service
│   ├── theme/
│   │   └── theme.ts             # Custom Material UI theme (Plus Jakarta Sans, pill buttons)
│   ├── App.tsx                  # Client router (/, /dashboard)
│   ├── index.css                # Global style resets & root layout rules
│   └── main.tsx                 # App entry point with ThemeProvider & CssBaseline
├── .env.example                 # Environment variables template
├── firebase.json                # Firebase Hosting rewrites & rules
├── .firebaserc                  # Firebase project selector
├── tsconfig.json                # TypeScript configurations
└── package.json                 # Scripts and dependencies
```

---

## 🌟 Key Features & Attention to Detail

1. **Faithful Visual Representation:**
   - **macOS Browser Frame:** Window mockup with colored controls (red, yellow, green) and simulated address bar (`https://tugas-task-management.com`).
   - **Promo Panel:** Pastel mint background (`#eef6f2`), rounded card (`borderRadius: 24px`), custom SVG zen illustration, floating task card (*"Canva Design / 10 Task / 84%"*), and carousel pagination indicators.
   - **Form Styling:** Rounded inputs (`borderRadius: 12px`), dark pill button (`#000000`, `borderRadius: 24px`), elegant divider with horizontal rules, and circular social login buttons.

2. **Form Validation (Client-Side):**
   - **Username / Email:** Validates for presence and checks standard email format (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`) if `@` is present.
   - **Password:** Minimum 6 characters and required check.
   - **Password Visibility:** Toggle between show/hide password with dynamic eye icon.
   - **Validation Feedback:** Instant inline error messages and helper texts using MUI's error states.

3. **Google Authentication with Firebase:**
   - Pop-up Google sign-in using `signInWithPopup(auth, googleProvider)`.
   - Extracts the Google OAuth `accessToken` (or ID token).
   - Redirects to `/dashboard` upon successful authentication.
   - **Demo / Fallback Mode:** Allows previewing the post-login page even before Firebase keys are entered.

4. **Access Token Display (`/dashboard`):**
   - Displays user profile (photo, name, email).
   - Presents the `accessToken` inside a styled monospace code block.
   - One-click **"Copy Access Token"** button with snackbar feedback.
   - **"Log Out"** and **"Back to Login"** navigation controls.

5. **Mobile Responsiveness:**
   - Desktop (`md` and up): 2-column balanced split layout.
   - Mobile (`xs` / `sm`): Clean 1-column layout optimizing form spacing and padding.

---

## ⚙️ Local Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/code3x-login.git
cd code3x-login
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Firebase Credentials
Create a `.env` file in the project root based on `.env.example`:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4. Run the development server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

---

## 🚢 Firebase Hosting Deployment Guide

1. **Install Firebase CLI globally (if not already installed):**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Build the production bundle:**
   ```bash
   npm run build
   ```

4. **Deploy to Firebase Hosting:**
   ```bash
   firebase deploy --only hosting
   ```

5. **Important:** In your Firebase Console, navigate to **Authentication > Settings > Authorized domains** and ensure your live hosting domain (`<project-id>.web.app`) and `localhost` are added.

---

## 📄 License
Created for evaluation purposes as part of the code3x internship selection process.
