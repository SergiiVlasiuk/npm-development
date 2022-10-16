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

### Commands (can be checked in the `package.json` file)

```
// npm run server
npm run start
```

### Register | Login user

```
curl -d '{"email":"your-email@ukr.net", "password":"Your-pas$w0rd"}' -H "Content-Type: application/json" -X POST 'http://localhost:5000/api/auth/register'
curl -d '{"email":"your-email@ukr.net", "password":"Your-pas$w0rd"}' -H "Content-Type: application/json" -X POST 'http://localhost:5000/api/auth/login'
```
