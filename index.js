const mysql = require('mysql');
const commander = require('commander');
const dbConfig = require('./db.json');

const connection = mysql.createConnection(dbConfig);

commander
  .option('-m --mobile [value]', '手机号码', '13521826032')
  .parse(process.argv);

const { mobile } = commander;

connection.connect();

connection.query('select * from *** where `mobile` = "' + mobile + '" ORDER BY create_time desc', function (error, results) {
  if (error) throw error;
  console.log(results[0].content);

  process.exit();
});
