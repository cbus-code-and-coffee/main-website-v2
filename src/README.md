## Backend setup for Firebase Email service

- to install firebase CLI: 
 ```bash
  npm install -g firebase-tools
```

- Once installed log in into Firebase 
  ```bash
  firebase login
  ``` 
+ Enable Gmail 2FA + App Password
  
 **1) Initialize Firebase in your project** 
 From your web app root:
  ```bash 
  firebase init
  ```

 Choose: Firestore, Functions (TypeScript), Hosting (optional)
 Say Yes to install dependencies.
 This creates a functions/ folder for backend code.
 
 **2) Initialize and run local emulators** 
Initialize:
  ``` bash
 firebase init emulators
  ```
 Select: Functions Emulator, Firestore Emulator (Hosting Emulator optional)
 
 Connect your frontend to the Firestore emulator 
 Run: 
  ```bash
  firebase emulators:start
  ```
