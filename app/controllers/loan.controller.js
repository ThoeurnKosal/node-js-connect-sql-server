const { sql, poolPromise } = require('../config/db.config');

const getUsers = async (req, res) => {
    const pool = await poolPromise;
    const response = await pool.request().query('select * from sysBranches');
    // const response =  await sqls.request.query("SELECT * FROM tbLLDLoans WHERE LDID = '1000000015-001'");
 //    res.status(200).json(response.rows);
 //    console.log(response.rows);
       res.status(200).json({
           result: true,
           statusCode:200,
           message: 'get user sucessfully',
           body:{
               user: response.recordset
           }
       })
 };
 

 module.exports = {
     getUsers
 }