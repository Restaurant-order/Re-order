var express = require('express');
var router = express.Router();

router.get('/food-category', function(req, res, next) {
  res.render('foods/foods-category', { title: 'Food Category' });
});

router.get('/sea-foods', function(req, res, next) {
  res.render('foods/sea-foods', { title: 'Sea Food' });
});

router.get('/chinea-foods', function(req, res, next) {
  res.render('foods/chinea-foods', { title: 'Chinea Food' });
});

router.get('/thai-foods', function(req, res, next) {
  res.render('foods/thai-foods', { title: 'Thai Food' });
});

router.get('/myanmar-foods', function(req, res, next) {
  res.render('foods/myanmar-foods', { title: 'Myanmar Food' });
});

router.get('/japan-foods', function(req, res, next) {
  res.render('foods/japan-foods', { title: 'Japan Food' });
});

module.exports = router;
