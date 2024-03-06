const express = require("express");
const session = require("express-session");
const mysql = require("mysql");
const path = require("path");
const app = express();

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const con = mysql.createConnection({

   host: "localhost",
   user: "root",
   password: "root",
   database: "nodelogin",

});

con.connect((err)=>{
   
   if(err) throw err;
   console.log("connected to databse");

});

app.use(express.static(path.join(__dirname, "/public")));
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});
app.get("/login", (req,res) => {

  res.sendFile(path.join(__dirname + "/public/index.html"));

});

app.post("/auth", (req,res)=>{
   
   let email = req.body.email;
   let password = req.body.password; 
   console.log(email, password);

   if(email && password){
      con.query('SELECT * FROM accounts WHERE email = ? AND password = ?', [email, password], (error, results, fields) => {
               // If there is an issue with the query, output the error
         if (error) throw error;
               // If the account exists
         if (results.length > 0) {
                  // Authenticate the user
            req.session.loggedin = true;
            req.session.email = email;
                  // Redirect to home page
            res.redirect('/');
         } else {
            res.send('Incorrect Username and/or Password!');
         }			
         res.end();
   });
   }else{

      res.send("Not correct");
      res.end();

   }

});
app.listen(3000);
