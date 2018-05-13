module.exports = {
   /* GET home page. */
  links : function(req, res, next){
    res.render('links/index', { title: 'Links' });
  }
}