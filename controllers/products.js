const {getDB} = require('../util/database');
const {connect} = require('../util/database');

exports.load = (req, res, next) => {
    console.log("Here " + req.params.function);
    
    const db = getDB();
    // res.render(req.params.page);
    res.json({message: "Received Get Request for " + req.params.function})

}
