// const { Client } = require('pg');
const { Pool } = require('pg');

// const client = new Client({
// 	user: "postgres",
// 	password: "08051135",
// 	host: "localhost",
// 	port: "5432",
// 	database: "list_of_all_products"
// });

const pool = new Pool({
	user: "bvgrxquskuhact",
	password: "444c775051ba5a4b5a98886e8d4b8cf7c24d1476c4668e1fcb8e0fcf69d26fd2",
	host: "ec2-52-86-177-34.compute-1.amazonaws.com",
	port: "5432",
	database: "dera0birnk6mur",
});

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