var mysql = require("mysql")

// var connection = mysql.createConnection({
//      host: "localhost",
//      port: 3306,
//      user: "root",
//      password: "root",
//      database: "burgers_db"
// });

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
  } else {

    var connection = mysql.createConnection({
      port: 3306,
      host: "localhost",
      user: "root",
      password: "root",
      database: "burgers_db"
    });
  };


//  export connection for our ORM to use
module.exports = connection;