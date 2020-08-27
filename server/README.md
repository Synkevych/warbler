### index.js - resposible to start server

### Start server comand 
`nodemon`
or 
`node inde.js`

### libraries 
- bcrypt – help to hash passwords 

- jsonwebtoken

- cors

### culr request from terminal 
`curl localhost:8082`

### models -> index.js – connection to database

### insede folder .env put secret key 

### dotenv module - load our enviropment variable 

### send corect request using postment:
Headers: 
Content-Type: acpplication/x-www-form-urlencoded

Body:
x-www-form-urlencoded
key: value

### Deploying the Backend on heroku
- remove git files: rm -rf .git  
- git init 
- echo node_modules > .gitignore
- heroku create warbler-server-md
- check the new remote using comand: git remote
- heroku addons:create mongolab - to have production database
- herou config:  
MONGODB_URI: mongodb://heroku_3sz17f71:janjtidjv7h9okshv57d7gjdop@ds145356.mlab.com:45356/heroku_3sz17f71
- touch Procfile => web: node index.js
- git add .
- git commit -m "ready to deploy"
- git push heroku master 
- heroku config:set SECRET_KEY=fjaieo23ASdfEaFasdfe5689fsSDF
- heroku open - test nnection to database and node
-heroku logs -t -a warbler-server-md - server loging 

### Deploying the Frontend on heroku
- remove git files: rm -rf .git
- git init 
- echo node_modules > .gitignore
- heroku create warbler-client-rt --buildpack mars/create-react-app
- git push heroku master

### Redeploy 
- git add .
- git commit -m "Fix something"
- git push heroku master 