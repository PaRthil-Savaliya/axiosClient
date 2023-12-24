# axios-client-helper

React Native Axios Helper is a utility library that simplifies HTTP requests in your React Native applications using Axios. It provides a convenient wrapper around Axios with built-in request interceptors for common scenarios.

## Installation

To use `axios-client-helper`, you need to install Axios and `axios-client-helper` as dependencies. You can do this using npm or yarn:

```bash
npm install axios axios-client-helper
# or
yarn add axios axios-client-helper

```

Replace `"YOUR_API_URL"` and `"YOUR_AUTH_TOKEN"` with your actual API URL and authentication token. Additionally, add api endpoints in blacklist and whitelist accordingly with your requirement.

```bash
import { createCustomAxiosClient } from 'axios-client-helper';


const customAxios = createCustomAxiosClient({
  baseURL: "YOUR_API_URL", // Replace with your API URL
  whitelistUrls: [], // Add URLs where you want to pass the body as JSON.
  blacklistUrls: [], // Blacklist endpoints for authentication APIs where a token is not required.
  token: "YOUR_AUTH_TOKEN", // Pass authentication token here
  tokenType: "ADD authentication token type here" like ["Bearer Token","JWT (JSON Web Token)","API Key","OAuth Token","cutom token"]
});

customAxios.get('/api/data')
  .then(response => {})
  .catch(error => {});

```
