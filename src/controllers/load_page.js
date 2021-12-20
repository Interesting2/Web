
const {pool} = require('../util/database');

exports.loadIndex = (req, res, next) => {
    // console.log(__dirname);
    res.render("index");
    // res.sendFile('index.html');
    // res.json({'hello': 'world'});
}

exports.loadPage = (req, res, next) => {
    let page = req.params.page;
    let count;

    console.log(page);
    if (page !== "favicon.ico"){
        // connect db
        pool.connect()
        .then((client) => {
            function getQuery(query) {
                if (page === 'clothings') page = 'clothing';
                return client.query(query, [page])
                .then(results => {
                    // client.release();
                    count = results
                    return;
                })
                .catch(e => console.log("Error in query: \n" + e))
                .finally(() => {
                    client.release();
                    console.log("Connection ended");
                });
            }
            getQuery(`SELECT COUNT(*) FROM products
                        WHERE category = $1`);
            return;    
        })
        .catch(e => console.log("Error in connection: \n" + e)); 
        
        let data = {'count': 7, 'results': count};
        res.render(req.params.page, {data: data});
    }
}

// exports.loadClothings = (req, res, next) => {
//     console.log("here haha");
//     res.render('clothings');
// }