npr-one-test
--------------------------------------

SUMMARY
========
Proof of concept to test npr-api and SDK.
Testing "Now playing" feature

Jose A. Villarreal (c) 2017.


Dependencies
============
- Express
- Node.js v6.3.0 (npm v3.10.3) >=
- npr-api
- See package.js

Usage
===========
- Configuration
1. Open your favorite editor and write the .env file defining the
following variables:
CLIENT_ID=your_app_client_id
CLIENT_SECRET=your_app_client_secret

2. Run the get-token.js script:
```
node get-token.js
```
to get the device access token
and define it in .env the var ACCESS_TOKEN with what you got:
ACCESS_TOKEN=your_access_token

-  Start:
```
npm install
node get-recommendations.js
```
