var sql = require("mssql");

// var connect = function()
// {
//     var conn = new sql.ConnectionPool({
//         user: 'sa',
//         password: '123456',
//         server: '192.168.202.13\\SQLEXPRESS',
//         database: 'UAT1217',
//     });
//     return conn;
// };


const config = {
    user: 'sa',
    password: '123456',
    server: '192.168.202.13\\SQLEXPRESS',
    database: 'UAT1217',
}

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
}                                     