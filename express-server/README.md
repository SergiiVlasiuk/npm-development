## Simply express server

### Common steps to reproduce configuration

```
mkdir express-server
cd express-server
npm init
```

```
npm i express mongoose
npm i -D nodemon
npm i config

npm i bcryptjs jsonwebtoken express-validator
```

For having interfaces and types for working with express:

```
npm i -D @types/express
```

The package for coloring logs

```
npm i colors
```

For testing

```
npm install --save-dev jest @types/jest
```

To configure test env

```
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

### Commands (can be checked in the `package.json` file)

To make `js` files working with `import`

```package.json
  "type": "module",
```

```
// npm run server
npm run start
```

### Register | Login user

```
curl -d '{"email":"your-email@ukr.net", "password":"Your-pas$w0rd"}' -H "Content-Type: application/json" -X POST 'http://localhost:5000/api/auth/register'
curl -d '{"email":"your-email@ukr.net", "password":"Your-pas$w0rd"}' -H "Content-Type: application/json" -X POST 'http://localhost:5000/api/auth/login'
```
