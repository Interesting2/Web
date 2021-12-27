// const { Client } = require('pg');
const { Pool } = require('pg');

const pool = new Pool({
	user: "postgres",
	password: "08051135",
	host: "localhost",
	port: "5432",
	database: "list_of_all_products"
});

// const pool = new Pool({
// 	connectionString: process.env.DATABASE_URL,
//     ssl: { rejectUnauthorized: false }
// });

pool.on('error', (err, client) => {
	console.error('Error!!!: Unexpected error on idle client', err) // your callback here
	// process.exit(-1);
});

// // conenct database
// client.connect()
// .then(() => console.log("Connection Success"))
// .then(() => client.query("SELECT * FROM ecom_products.products"))
// .then(() => client.query("SELECT * FROM ecom_products.products WHERE category = $1", ['clothing']))
// .then(results => console.table(results.rows))
// .catch(e => console.log(e))
// .finally(() => client.end());

// exports.client = client;
exports.pool = pool;
// exports.getDB = getDB;