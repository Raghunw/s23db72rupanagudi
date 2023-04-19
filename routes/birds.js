var express = require('express');
var router = express.Router();

const birds_controlers= require('../controllers/birds');

/* GET costumes */

router.get('/', birds_controlers.birds_view_all_Page );

module.exports = router;
/* GET detail costume page */
router.get('/detail', birds_controlers.birds_view_one_Page);
/* GET create costume page */
router.get('/create', birds_controlers.birds_create_Page);
/* GET create update page */
router.get('/update', birds_controlers.birds_update_Page);
/* GET delete costume page */
router.get('/delete', birds_controlers.birds_delete_Page);
