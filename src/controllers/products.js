// const {getDB} = require('../util/database');
// const {client} = require('../util/database');
const {pool} = require('../util/database');

exports.loadClothings = (req, res, next) => {
    // req.header('Content-Type')  // "application/json"
    // req.header('user-agent')    // "Mozilla/5.0 (Macintosh Intel Mac OS X 10_8_5) AppleWebKi..."
    // req.header('Authorization')
    res.setHeader('Content-Type', 'application/json');
    // console.log("Request: " + req.header('user-agent'));
    const data = req.body;
    const amount = data.amount;
    const id = data.id;
    console.log("Amount: " + amount);
    console.log("Id: " + id);

    // console.log("Request value: " + req.body.id);
    console.log("Request param: " + req.params.category);
    // get request if any
    // return res.json({'message': 'cannot'});

    pool.connect()
    .then((client) => {
        // return {'message': 'canget'}
        function getQuery() {
            return {'message': 'canget'}
            // return client.query("SELECT * FROM products")
            //return client.query(`SELECT * FROM ecom_products.products
            //                         WHERE category = $1
            //                         AND id >= $2
            //                         ORDER BY id ASC
            //                         LIMIT $3`, [req.params.category, id, amount])
            .then(results => {
                // client.release();
                // let result = results.rows;
                // console.log(result);
                return results;
            })
            .then(result => {
                res.setHeader('Content-Type', 'application/json');
                res.json(result);
            })
            .catch(e => console.log("Error in query: \n" + e))
            .finally(() => {
                client.release();
                console.log("Connection ended");
            });
        }
        getQuery();
        return;
    })
    .catch(e => console.log("Error in connection: \n" + e)); 
    // res.render(req.params.page);
    // res.json(result);

}
