var express = require('express');
var router = express.Router();

var Post = require('../models/post.model');


router.get('/post', function(req, res){
  var query = {
  }
  var fields = {
    _id: 1,
    title: 1,
    image: 1,
    published_date: 1
  }
  var sort = {
    sort: {
      published_date: -1
    }
  }
  Post.find(query, fields, sort, function(err, record){
      if(err) return res.status(500).json({error: err});
      if(!record) return res.status(404).json({error: 'record not found'});
      res.json(record);
  })
});

router.get('/post/:id', function(req, res){
  var query = {
    _id: req.params.id
  }
  Post.findOne(query, function(err, content){
      if(err) return res.status(500).json({error: err});
      if(!content) return res.status(404).json({error: 'content not found'});
      res.json(content);
  })
});


router.post('/post', function(req, res){

  var record = new Post(req.body);

  record.save(function(err, record) {
    res.json(record)
  })
});


module.exports = router;
