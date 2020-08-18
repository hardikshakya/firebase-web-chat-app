# Realtime Firebase Web Chat App

-   Here I implemented a chat web app that uses `Firebase Realtime-Database`.

## Angular Chat App

-   Created Firebase chat web app with the quick `user login`, `room list`, and `chat room` with online users list. With the help of `Angular CLI`.

### Requirements

-   [Angular CLI](https://cli.angular.io/)
-   [Firebase Realtime-Database](http://console.firebase.google.com/)

### Setup Firebase Realtime-Database

-   First Create Project in firebase.
-   Choose the Database menu in the left pane then click the Create Database button.
-   Select `Start in test mode` then click next.
-   Select or change `Cloud Firestore` to `Realtime Database` in `Develop -> Database dashboard`.
-   Next, go to the Rules tab change it to readable and writeable from everywhere:
    ```JSON
    {
        /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
        "rules": {
            ".read": "auth === null",
            ".write": "auth === null"
        }
    }
    ```
-   Now copy/get your `API Key` in the Firebase console under Settings(gear icon) and there is `Web API Key`. For `databaseURL`, go to the Service Accounts tab under Settings, and you will see databaseURL in Admin SDK configuration snippet for Node.js.

## React Chat App

-   Here, I integrate third-party auth providers (e.g. Google, Twitter and GitHub) and, once users are signed in, we will store user chat data in the `Firebase Realtime Database`, where we can sync data with a NoSQL cloud database.

### Requirements

-   [React](https://reactjs.org/)
-   [Firebase Realtime-Database](http://console.firebase.google.com/)

### Setup Firebase Realtime-Database

-   Same as we did in above `angular-chat-app` project.
-   Now in `Authentication` tab, there’s a `Sign-in method tab` in the Firebase dashboard. Click the `Email/Password` option and `enable` it.
-   Next, go to the Rules tab change it to readable and writeable from everywhere:
    ```JSON
    {
        /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
        "rules": {
            "chats": {
                ".read": "auth != null",
                ".write": "auth != null"
            }
        }
    }
    ```
