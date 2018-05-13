module.exports = {
  /* GET home page. */
  index : function(req, res, next){
    res.render('index', { title: 'Express Generated Site' });
  },
  /* GET and serve the hello.pug page*/
  hello : function(req, res, next){
    res.render('hello', { title: 'Express Generated Site - Hello' });
  },
}