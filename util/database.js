const {Client} = require('pg');

const _client = new Client({
	user: "postgres",
	password: "08051135",
	host: "localhost",
	port: "5432",
	database: "list_of_all_products"
});

// // conenct database
// client.connect()
// .then(() => console.log("Connection Success"))
// .then(() => client.query("SELECT * FROM ecom_products.products"))
// .then(() => client.query("SELECT * FROM ecom_products.products WHERE category = $1", ['clothing']))
// .then(results => console.table(results.rows))
// .catch(e => console.log(e))
// .finally(() => client.end());

const connect = 

exports.connect = connect;
exports.getDB = getDB;
