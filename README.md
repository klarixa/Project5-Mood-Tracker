# Project 5: Mood Tracker - Discovery Challenge

> **W3 Server-Side Development & Authentication - Lessons 17-18**

## 🎯 Project Overview

Build a full-stack mood tracking application with Firebase Authentication and Firestore Database. This project introduces you to backend services, user authentication, real-time data synchronization, and secure database operations—all essential skills for modern web development.

---

## 🚀 NEW: Mock-Data-First Approach

**IMPORTANT UPDATE:** This template now uses a **mock-data-first approach** to ensure you see results immediately!

### Why Mock Data First?

✅ **See Results in `<30 Seconds`** - No Firebase setup required initially
✅ **Learn Svelte Patterns First** - Focus on UI/UX without infrastructure complexity
✅ **Progressive Learning** - Master frontend before adding backend
✅ **Test Locally** - Work offline, no external dependencies

### What's Working NOW (65-70%):

- ✅ Full mood tracking UI with emoji selector
- ✅ Add mood entries with notes
- ✅ Display mood history with timestamps
- ✅ Delete mood functionality
- ✅ Responsive design
- ✅ All interactions work with mock data

### Your TODO (Phase 2 - 30%):

- ⚠️ Replace mock store with Firebase Firestore
- ⚠️ Add user authentication (signup/login)
- ⚠️ Filter moods by userId
- ⚠️ Implement real-time updates with `onSnapshot()`

---

## 🔥 Firebase Integration (Phase 2)

Once you're comfortable with the Svelte patterns, you can add Firebase:

### Quick Start (No Firebase - 30 seconds)
1. Navigate to project folder
2. Run `npm install`
3. Run `npm run dev`
4. Open http://localhost:5173
5. See working UI with mock data immediately!

### Firebase Integration (Your TODO)
When you're ready to add real database persistence:

1. **Create Firebase Project** at [console.firebase.google.com](https://console.firebase.google.com)
2. **Enable Firestore** (test mode for development)
3. **Enable Email/Password Authentication**
4. **Replace Mock Store** (`src/lib/stores/moodStore.js`):
   ```javascript
   // Replace mock functions with:
   import { collection, addDoc, query, where, orderBy, onSnapshot, deleteDoc } from 'firebase/firestore';

   // Use onSnapshot for real-time updates
   onSnapshot(query, (snapshot) => {
     moods.set(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
   });
   ```
5. **Add Authentication** - Implement signup/login pages
6. **Filter by User** - Add `where('userId', '==', user.uid)` to queries

### Key Firebase Concepts to Learn:
- **Firestore Collections**: `/moods` collection stores all mood entries
- **User Filtering**: Each mood has `userId` field for user-specific data
- **Real-time Listeners**: `onSnapshot()` updates UI automatically when data changes
- **Authentication**: `createUserWithEmailAndPassword()` for signup, `signInWithEmailAndPassword()` for login

---

## 📚 Learning Objectives

By completing this project, you will:
- Implement user authentication (signup, login, logout) with Firebase Auth
- Store and retrieve data using Firestore Database
- Manage user sessions and authentication state
- Create real-time data updates with `onSnapshot`
- Implement user-specific data filtering
- Handle authentication flows and protected routes
- Work with Svelte stores for state management
- Secure database operations with user validation

## 🔗 GitHub Source

This template is from: [Web-3-Project-5-Mood-Tracker](https://github.com/academic-telebort/Web-3-Project-5-Mood-Tracker)

## 🚀 Getting Started

### ⚡ Quick Start (See Results in 30 Seconds!)

**IMPORTANT: This template includes a WORKING foundation with 70% pre-built!**

**⚠️ PREREQUISITE: You MUST set up Firebase first (see "Part 1: Firebase Project Setup" below)**

1. **Navigate to this folder** in your terminal:
   ```bash
   cd "Paid Courses/W3 Server-Side Development & Authentication/Templates/project-05-mood-tracker"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Firebase** (see detailed steps below - REQUIRED!)

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser** to: http://localhost:5173

6. **You'll see immediately:**
   - Login/Signup pages ready for authentication
   - Clean project structure with TODO comments
   - Firebase integration points marked clearly

### Prerequisites
- Node.js v18+ installed
- VS Code with Svelte extension
- Completed Lessons 1-16 (Svelte, SvelteKit, Firebase concepts)
- **Google account** (for Firebase Console access)

### 🎯 What's Already Working (70% Complete)

**65-70% of the code is implemented for you:**

- ✅ **SvelteKit Project**: Complete project structure with routing
- ✅ **Firebase SDK**: All Firebase dependencies installed
- ✅ **Route Files**: login, signup, and dashboard pages created
- ✅ **Auth Store**: Basic structure in stores/authStore.js
- ✅ **Firebase Config File**: firebase.js template ready
- ⚠️ **Firebase Setup**: TODO - Add YOUR Firebase config
- ⚠️ **Auth Implementation**: TODO - Complete signup/login functions
- ⚠️ **Auth Store**: TODO - Set up authentication listener
- ⚠️ **Dashboard**: TODO - Add mood tracking functionality
- ⚠️ **Firestore Integration**: TODO - Save and retrieve moods
- ⚠️ **Real-time Updates**: TODO - Implement onSnapshot listener

## 🔨 What You Will Build (85% Implementation)

### Core Features (Must Implement):

1. **User Authentication**
   - Signup page with email/password
   - Login page with email/password
   - Logout functionality
   - Password validation
   - Auth error handling
   - Session persistence

2. **Mood Tracking Dashboard**
   - Add mood entry (emotion + note)
   - Display mood history
   - Real-time updates when moods change
   - User-specific data filtering
   - Date/time stamps for entries

3. **Firebase Integration**
   - Initialize Firebase with your config
   - Set up Authentication service
   - Configure Firestore Database
   - Create database collections and documents
   - Implement security rules

4. **State Management**
   - Auth store for user state
   - Reactive authentication checks
   - Protected routes (redirect if not logged in)
   - Auth state persistence across page reloads

### Optional Enhancements:
- Edit/delete mood entries
- Mood analytics and charts
- Emoji mood selector
- Daily mood reminders
- Export mood data
- Dark mode

## 🚀 Getting Started

### Prerequisites
- Node.js v18+ installed
- VS Code with Svelte extension
- Completed Lessons 1-16 (Svelte, SvelteKit, Firebase concepts)
- **Google account** (for Firebase Console access)
- **GitHub account** (optional, for deployment)

### Part 1: Firebase Project Setup (REQUIRED FIRST)

Before running the app, you **must** set up a Firebase project:

#### Step 1: Create Firebase Project

1. **Visit Firebase Console**: [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. **Click** "Add project"
3. **Enter project name**: `w3-mood-tracker-[your-name]`
4. **Disable** Google Analytics (optional for learning)
5. **Click** "Create project"
6. **Wait** for project creation (30 seconds)

#### Step 2: Enable Authentication

1. In Firebase Console, click **"Authentication"** in left sidebar
2. Click **"Get started"**
3. Click **"Email/Password"** under Sign-in providers
4. **Enable** the toggle for "Email/Password"
5. Click **"Save"**

#### Step 3: Create Firestore Database

1. In Firebase Console, click **"Firestore Database"** in left sidebar
2. Click **"Create database"**
3. **Select** "Start in test mode" (for development)
   > ⚠️ **Security Note**: Test mode allows read/write for 30 days. Update rules before production!
4. **Choose** your region (closest to you)
5. Click **"Enable"**
6. **Wait** for database creation (30 seconds)

#### Step 4: Get Firebase Configuration

1. In Firebase Console, click **gear icon ⚙️** (Project settings)
2. Scroll down to **"Your apps"**
3. Click **Web app icon `</>`**
4. **Enter app nickname**: `mood-tracker-web`
5. **Click** "Register app"
6. **Copy** the Firebase configuration object:

```javascript
// Your unique config - COPY THIS
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

7. **Click** "Continue to console"

#### Step 5: Configure Your App

1. **Navigate to this project folder:**
   ```bash
   cd "Paid Courses/W3 Server-Side Development & Authentication/Templates/project-05-mood-tracker"
   ```

2. **Open `src/firebase.js`** in VS Code

3. **Replace the placeholder config** with YOUR config:
   ```javascript
   // src/firebase.js
   import { initializeApp } from 'firebase/app';
   import { getAuth } from 'firebase/auth';
   import { getFirestore } from 'firebase/firestore';

   // TODO: Replace with YOUR Firebase config
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT.appspot.com",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID"
   };

   const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app);
   export const db = getFirestore(app);
   ```

4. **Save the file**

### Part 2: Install and Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Visit `http://localhost:5173`

## 📂 Project Structure

```
project-05-mood-tracker/
├── src/
│   ├── routes/
│   │   ├── +page.svelte        # Dashboard (TODO: implement mood tracking)
│   │   ├── login/
│   │   │   └── +page.svelte    # Login page (TODO: implement)
│   │   └── signup/
│   │       └── +page.svelte    # Signup page (TODO: implement)
│   ├── stores/
│   │   └── authStore.js        # Auth state management (TODO: complete)
│   ├── firebase.js             # Firebase config (TODO: add your config)
│   └── app.html
├── package.json
└── svelte.config.js
```

## 📋 Tasks to Complete

### TODO 1: Configure Firebase (CRITICAL - Must Do First!)

Set up your Firebase project and add credentials to the app.

**Success Criteria:**
- [ ] Created Firebase project in Firebase Console
- [ ] Enabled Email/Password authentication
- [ ] Created Firestore Database in test mode
- [ ] Copied Firebase config to `src/firebase.js`
- [ ] All 6 config values filled in (apiKey, authDomain, etc.)

**Code Location:** `src/firebase.js` - Replace placeholder config

**Detailed Instructions:** See "Part 1: Firebase Project Setup" section above

**⚠️ This MUST be completed first - nothing will work without it!**

### TODO 2: Implement Signup Page (Medium)

Create user registration with email and password.

**Success Criteria:**
- [ ] Form with email and password inputs
- [ ] Password validation (minimum 6 characters)
- [ ] Uses `createUserWithEmailAndPassword` from Firebase
- [ ] Error handling for existing emails
- [ ] Redirects to dashboard after successful signup
- [ ] Loading state during signup process

**Code Location:** `src/routes/signup/+page.svelte`

**Example:**
```javascript
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

async function handleSignup() {
  if (password.length < 6) {
    error = "Password must be at least 6 characters";
    return;
  }
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await goto('/');
  } catch (err) {
    error = err.message;
  }
}
```

### TODO 3: Implement Login Page (Medium)

Create user login functionality.

**Success Criteria:**
- [ ] Form with email and password inputs
- [ ] Uses `signInWithEmailAndPassword` from Firebase
- [ ] Error handling for invalid credentials
- [ ] Redirects to dashboard after successful login
- [ ] Link to signup page for new users

**Code Location:** `src/routes/login/+page.svelte`

**Example:**
```javascript
import { signInWithEmailAndPassword } from 'firebase/auth';

async function handleLogin() {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    // Auto-redirects via auth state change
  } catch (err) {
    error = "Invalid email or password";
  }
}
```

### TODO 4: Complete Auth Store (Medium)

Set up authentication state management.

**Success Criteria:**
- [ ] Creates Svelte writable store
- [ ] Listens to `onAuthStateChanged` from Firebase
- [ ] Updates store when user logs in/out
- [ ] Tracks user, loading, and isLoggedIn states
- [ ] Available throughout app via `$authStore`

**Code Location:** `src/stores/authStore.js`

**Example:**
```javascript
import { writable } from 'svelte/store';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const authStore = writable({
  user: null,
  loading: true,
  isLoggedIn: false
});

onAuthStateChanged(auth, (user) => {
  authStore.set({
    user: user,
    loading: false,
    isLoggedIn: !!user
  });
});

export default authStore;
```

### TODO 5: Build Mood Tracking Dashboard (Hard)

Create the main dashboard with mood entry and display.

**Success Criteria:**
- [ ] Input field for mood (e.g., "happy", "sad", "excited")
- [ ] Text area for notes
- [ ] "Add Mood" button that saves to Firestore
- [ ] Mood list displays user's moods in real-time
- [ ] Each mood shows: mood text, note, timestamp
- [ ] Protected route (redirects to login if not authenticated)

**Code Location:** `src/routes/+page.svelte`

**Example:**
```javascript
import { addDoc, collection } from 'firebase/firestore';

async function addMood() {
  await addDoc(collection(db, 'moods'), {
    userId: $authStore.user.uid,
    mood: mood,
    note: note,
    timestamp: new Date()
  });
  mood = '';
  note = '';
}
```

### TODO 6: Implement Real-time Data Updates (Hard)

Use Firestore's `onSnapshot` for live updates.

**Success Criteria:**
- [ ] Sets up `onSnapshot` listener in `onMount`
- [ ] Queries only current user's moods with `where` clause
- [ ] Orders moods by timestamp (newest first)
- [ ] Updates UI automatically when data changes
- [ ] Unsubscribes from listener on component destroy

**Code Location:** `src/routes/+page.svelte` - Inside `onMount`

**Example:**
```javascript
import { query, where, orderBy, onSnapshot } from 'firebase/firestore';

onMount(() => {
  if (!$authStore.user) {
    goto('/login');
    return;
  }

  const q = query(
    collection(db, 'moods'),
    where('userId', '==', $authStore.user.uid),
    orderBy('timestamp', 'desc')
  );

  const unsubscribe = onSnapshot(q, (snapshot) => {
    moods = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  });

  return unsubscribe; // Cleanup
});
```

## 💡 Implementation Guide

### Step 1: Implement Signup Page

```svelte
<!-- src/routes/signup/+page.svelte -->
<script>
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import { auth } from '../../firebase';
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';
  let error = '';
  let loading = false;

  async function handleSignup() {
    // TODO: Validate inputs
    if (password.length < 6) {
      error = "Password must be at least 6 characters";
      return;
    }

    loading = true;
    error = '';

    try {
      // TODO: Create user with Firebase
      await createUserWithEmailAndPassword(auth, email, password);
      // TODO: Redirect to dashboard
      await goto('/');
    } catch (err) {
      // TODO: Handle errors
      if (err.code === 'auth/email-already-in-use') {
        error = "Email already in use";
      } else {
        error = "Signup failed. Please try again.";
      }
    } finally {
      loading = false;
    }
  }
</script>

<!-- TODO: Create signup form UI -->
```

### Step 2: Implement Login Page

```svelte
<!-- src/routes/login/+page.svelte -->
<script>
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { auth } from '../../firebase';

  let email = '';
  let password = '';
  let error = '';

  async function handleLogin() {
    try {
      // TODO: Sign in with Firebase
      await signInWithEmailAndPassword(auth, email, password);
      // Auto-redirect handled by auth state change
    } catch (err) {
      error = "Invalid email or password";
    }
  }
</script>

<!-- TODO: Create login form UI -->
```

### Step 3: Create Mood Tracking Dashboard

```svelte
<!-- src/routes/+page.svelte -->
<script>
  import { onMount } from 'svelte';
  import { auth, db } from '../firebase';
  import { collection, addDoc, query, where, onSnapshot, orderBy } from 'firebase/firestore';
  import { goto } from '$app/navigation';
  import authStore from '../stores/authStore';

  let mood = '';
  let note = '';
  let moods = [];

  // TODO: Check if user is logged in
  onMount(() => {
    if (!$authStore.user) {
      goto('/login');
      return;
    }

    // TODO: Set up real-time listener for moods
    const q = query(
      collection(db, 'moods'),
      where('userId', '==', $authStore.user.uid),
      orderBy('timestamp', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      moods = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    });

    // TODO: Cleanup listener on component destroy
    return unsubscribe;
  });

  async function addMood() {
    // TODO: Add mood to Firestore
    try {
      await addDoc(collection(db, 'moods'), {
        userId: $authStore.user.uid,
        mood: mood,
        note: note,
        timestamp: new Date()
      });

      // Clear form
      mood = '';
      note = '';
    } catch (err) {
      console.error('Error adding mood:', err);
    }
  }
</script>

<!-- TODO: Create mood tracking UI -->
```

### Step 4: Implement Auth Store

```javascript
// src/stores/authStore.js
import { writable } from 'svelte/store';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

// TODO: Create auth store
const authStore = writable({
  user: null,
  loading: true,
  isLoggedIn: false
});

// TODO: Listen for auth state changes
onAuthStateChanged(auth, (user) => {
  authStore.set({
    user: user,
    loading: false,
    isLoggedIn: !!user
  });
});

export default authStore;
```

## 🗄️ Firestore Data Structure

Your database should follow this structure:

```
moods (collection)
  └── [auto-generated-id] (document)
      ├── userId: "user-uid-here"
      ├── mood: "happy"
      ├── note: "Had a great day!"
      └── timestamp: Firestore Timestamp
```

**Important**: Always include `userId` to filter user-specific data!

## ✅ Overall Success Criteria

Your project is complete when:
- ✅ User can create an account (signup)
- ✅ User can log in with existing account
- ✅ User can log out
- ✅ Only logged-in users can access dashboard
- ✅ User can add mood entries
- ✅ Mood entries display in real-time
- ✅ Only user's own moods are visible (userId filter)
- ✅ Auth state persists across page reloads
- ✅ Errors are handled gracefully
- ✅ Firebase config is properly set up

## 🧪 Testing Your Implementation

Test these scenarios:
1. Create new account → should redirect to dashboard
2. Log out → should redirect to login
3. Log in with existing account
4. Add mood entry → should appear immediately
5. Refresh page → should stay logged in
6. Open in new tab → should see same moods
7. Create second account → should not see first user's moods
8. Try invalid login credentials

## 🚀 Extension Challenges

Ready for more? Try these bonus features:

### Beginner Extensions
- **Edit Moods**: Allow users to edit existing mood entries
- **Delete Moods**: Add delete button for each mood
- **Mood Statistics**: Show count of different moods
- **Profile Page**: Display user email and account info

### Advanced Extensions
- **Mood Analytics**: Charts showing mood trends over time
- **Emoji Selector**: Visual mood picker with emojis
- **Daily Reminders**: Prompt user to log mood daily
- **Export Data**: Download mood history as CSV/JSON
- **Mood Filtering**: Filter by date range or mood type

### Creative Extensions
- **Mood Streaks**: Track consecutive days of logging
- **Gratitude Journal**: Add separate section for gratitude
- **Mood Sharing**: Share anonymous mood trends
- **AI Insights**: Analyze mood patterns with suggestions
- **Dark Mode**: Theme based on current mood

## 📖 Resources

- **Firebase Auth Docs**: [https://firebase.google.com/docs/auth](https://firebase.google.com/docs/auth)
- **Firestore Docs**: [https://firebase.google.com/docs/firestore](https://firebase.google.com/docs/firestore)
- **Svelte Stores**: [https://svelte.dev/tutorial/writable-stores](https://svelte.dev/tutorial/writable-stores)
- **onSnapshot**: [https://firebase.google.com/docs/firestore/query-data/listen](https://firebase.google.com/docs/firestore/query-data/listen)

## 🎨 Grading Rubric

| Criteria | Points | Description |
|----------|--------|-------------|
| **Authentication** | 30 | Signup, login, logout, session management |
| **Database Operations** | 30 | Add moods, real-time updates, user filtering |
| **Firebase Integration** | 20 | Proper config, Auth, Firestore setup |
| **Security** | 10 | User data isolation, protected routes |
| **Code Quality** | 10 | Clean code, error handling, async patterns |
| **Total** | 100 | |

## 🐛 Common Issues & Solutions

**Issue**: "Firebase: Error (auth/invalid-api-key)"
**Solution**: Check your Firebase config in `firebase.js` - make sure you copied YOUR config correctly

**Issue**: "Missing or insufficient permissions"
**Solution**: Ensure Firestore is in "test mode" OR update security rules to allow authenticated users

**Issue**: Auth state not persisting after refresh
**Solution**: Ensure you're using `onAuthStateChanged` in your auth store

**Issue**: Can see other users' moods
**Solution**: Add `where('userId', '==', user.uid)` to your Firestore query

**Issue**: Real-time updates not working
**Solution**: Use `onSnapshot` instead of `getDocs`, and return the unsubscribe function

## 🔒 Security Best Practices

### Update Firestore Security Rules (After Testing):

```javascript
// Firestore Rules (for production)
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /moods/{moodId} {
      allow read, write: if request.auth != null &&
                          request.auth.uid == resource.data.userId;
    }
  }
}
```

This ensures:
- Only authenticated users can access data
- Users can only see/edit their own moods

## 📦 Build for Production

When ready to deploy:
```bash
npm run build
npm run preview  # Test production build
```

### Deployment Options:
- **Vercel**: [https://vercel.com/](https://vercel.com/)
- **Netlify**: [https://www.netlify.com/](https://www.netlify.com/)
- **Firebase Hosting**: [https://firebase.google.com/docs/hosting](https://firebase.google.com/docs/hosting)

## 🔗 Related Course Materials

- **Concept 10**: Introduction to Firebase
- **Concept 11**: Firebase Authentication & Firestore
- **Activity 10**: Firebase Setup
- **Activity 11**: Firebase Auth & Database
- **Lessons**: 17-18
- **Project Specification**: `../../Project/Project 05- Mood Tracker.mdx`

---

**Remember**: Firebase is powerful but requires proper setup. Take time to configure correctly, and always secure your data with proper rules!

## 🆘 Need Help?

**Firebase Setup Issues?**
- Review Concept 10: Introduction to Firebase
- Check Firebase Console for errors
- Verify your config matches exactly

**Authentication Problems?**
- Ensure Firebase Auth is enabled in Console
- Check browser console for error messages
- Verify email/password provider is active

**Database Issues?**
- Confirm Firestore is created and in test mode
- Check security rules allow your operations
- Verify userId is included in all documents
