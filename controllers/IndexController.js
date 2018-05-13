module.exports = {
  /* GET home page. */
  index : function(req, res, next){
    res.render('index', { title: 'Express Generated Site' });
  }
}