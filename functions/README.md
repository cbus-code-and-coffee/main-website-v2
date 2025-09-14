# Firebase Backend – Contact Form Email Notifications

This project includes **Firebase Cloud Functions** that send emails via **Nodemailer** when a new contact form submission is added to Firestore.

---

## 🚀 Quick Start (with Yarn)

### 1. Install Firebase CLI

```bash
yarn global add firebase-tools
firebase login
```

📖 [Firebase CLI Docs](https://firebase.google.com/docs/cli)

---

### 2. Initialize Functions (if not already)

```bash
firebase init functions
```

📖 [Functions Setup Docs](https://firebase.google.com/docs/functions/get-started)

---

### 3. Install Dependencies

In the `functions/` folder:

```bash
cd functions
yarn add nodemailer dotenv
```

---

### 4. Environment Variables

Create a `.env` file inside `functions/lib/`:

```
EMAIL=your-team-gmail@gmail.com
PASSWORD=your-app-password
```

⚠️ **Important:** `.env` must be in `lib/` because Firebase executes the compiled code from there.

📖 [Configuring Environment Variables](https://firebase.google.com/docs/functions/config-env)

Add this to `.gitignore` to avoid exposing credentials:

```
functions/lib/.env
```

---

### 5. Gmail App Password

1. Enable 2FA on the Gmail account.
2. Generate an **App Password** for Firebase Functions.
   📖 [App Passwords Guide](https://support.google.com/accounts/answer/185833)

Use the generated 16-character password in your `.env` as `PASSWORD`.

---

### 6. Firestore Setup

Enable Firestore in the Firebase console.
📖 [Firestore Quickstart](https://firebase.google.com/docs/firestore/quickstart)

Ensure your frontend writes form submissions to the `submissions` collection.

---

### 7. Build & Deploy

From the `functions/` folder:

```bash
yarn build
firebase deploy --only functions
```

This compiles TypeScript → JavaScript into `lib/` and deploys only the backend functions.

---

### 8. Test Locally

Run the Firebase Emulator:

```bash
firebase emulators:start
```

📖 [Emulator Suite Docs](https://firebase.google.com/docs/emulator-suite)

Submit a form on the frontend → check:

* Firestore for new submission.
* Gmail inboxes for notification + auto-reply emails.

---

## ✅ Summary

* Frontend → writes submissions to Firestore (`submissions` collection).
* Backend → Cloud Function (`onSubmission`) listens for new docs and sends:

  * Email notification to the site owner.
  * Auto-reply email to the sender.
* `.env` (in `lib/`) stores Gmail credentials securely.

---

This README ensures any developer joining the project can:

* Set up Firebase Functions locally.
* Configure Gmail credentials.
* Run and test backend email functionality.
