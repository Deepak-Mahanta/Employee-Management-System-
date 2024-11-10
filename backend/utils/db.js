import mysql from 'mysql'

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employeems"   // Mysql Database name
})

con.connect(function(err) {
    if(err) {
        console.log("connection error")
    } else {
        console.log("Mysql Database Connected")
    }
})

export default con;

