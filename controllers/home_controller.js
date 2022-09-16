module.exports.home = function(req, res){
    return res.render('home', {
        title: "Home"
    });
}

module.exports.home2 = function(req, res){
    return res.end('<h1>home2</h1>')
}


//modeule.exports.actionName = function(req, res){}