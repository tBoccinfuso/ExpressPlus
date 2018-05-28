var express = require('express');
var router = express.Router();

module.exports = {
   /* GET links page. */
   links : router.get("/links", function (req, res){
    res.render('./links/index', { title: 'Links' });
  })
}