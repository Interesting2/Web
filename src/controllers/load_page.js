
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

    let data;
    // console.log(page);
    if (page !== "favicon.ico"){
        // connect db
        // res.render(req.params.page);
        pool.connect()
        .then((client) => {
            function getQuery(query1, query2) {
                if (page === 'clothings') page = 'clothing';
                // console.log(page);
                return client.query(query1, [page])
                .then(results => {
                    // client.release();
                    // console.log(results.rows + " " + results[0]);
                    count = parseInt(results.rows[0].count);
                    data = {'count': 7, 'results': count};
                    return client.query(query2, [page])
                })
                .then(results => {
                    data['rows'] = results.rows;
                    console.log(data);
                    console.log("Length is : " + data['rows'].length);
                    res.render(req.params.page, {data: data});
                    return;
                })
                .catch(e => console.log("Error in query: \n" + e))
                .finally(() => {
                    client.release();
                    console.log("Connection ended");
                });
            }
            let query1 = `SELECT COUNT(*) FROM products
                             WHERE category = $1`;
            let query2 = `SELECT * FROM products
                                WHERE category = $1`;
            getQuery(query1, query2);
            return;
        })
        .catch(e => console.log("Error in connection: \n" + e));

    }
}

exports.userLogin = (req, res, next) => {
    const name = req.body.uname;
    const pwd = req.body.pwd;
    const data = {'name': name, 'pwd': pwd, 'status': true, 'message': 'Login Successfully'};
    // console.log(data);
    res.setHeader('Content-Type', 'application/json');
    res.json(data);
}

exports.userSignup = (req, res, next) => {
    const name = req.body.signup_uname;
    const pwd = req.body.signup_pwd;
    const data = {'name': name, 'pwd': pwd, 'status': true, 'message': 'Signup Successfully'};
    // console.log(data);
    res.setHeader('Content-Type', 'application/json');
    res.json(data);
}
