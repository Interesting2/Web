

exports.loadIndex = (req, res, next) => {
    res.render("index");
}

exports.loadPage = (req, res, next) => {
    let page = req.params.page;
    console.log(page);
    if (page !== "favicon.ico"){
        res.render(req.params.page);
    }
}

// exports.loadClothings = (req, res, next) => {
//     console.log("here haha");
//     res.render('clothings');
// }