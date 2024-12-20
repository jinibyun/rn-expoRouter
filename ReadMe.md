**ref**: [expo router](https://docs.expo.dev/router/installation/#quick-start)
> npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

- other configuration may be needed to set

### app directory
- When a file is created in the app directory, it "automatically" becomes a router in the app.

app\
  - index.js    -->>        /
  - home.js     -->>        /home
  - [user].js   -->> dynamice path (/expo or /something)
  - \setting
    - index.js  -->> /settings
  #### dynamic routes
  - \blog
    - [slug].js  -->> /blog/123
    - [...rest].js


**ref**: https://docs.expo.dev/router/create-pages/