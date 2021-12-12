

exports.loadIndex = (req, res, next) => {
    res.render("index");
}

exports.loadPage = (req, res, next) => {
    res.render(req.params.page);
}

// exports.loadClothings = (req, res, next) => {
//     console.log("here haha");
//     res.render('clothings');
// }