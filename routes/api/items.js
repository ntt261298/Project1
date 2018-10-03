const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item.js');

// @route GET api/items
// desc GET All items
// @access Public
router.get('/', (req, res) => {
  Item.find()
    .sort({date: -1})
    .then(items => res.json(items))
});

// @route POST api/items
// desc Create A Post
// @access Public
router.post('/', (req, res) => {
  const newItem = new Item({
      name: req.body.name
  });
  newItem.save()
  .then(item => res.json(item))
  .catch(err => console.log(err));
});

// @route DELETE api/items
// desc Delete An Item
// @access Public
router.delete('/:id', (req, res) => {
  const item = req.params.id;
  Item.findById(item)
    .then(item => item.remove(item).then(() => res.json({sucess: true})))
    .catch(err => res.status(404).json({success: false}));
});
module.exports = router;
