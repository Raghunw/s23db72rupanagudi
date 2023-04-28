var express = require('express');
var router = express.Router();

const birds_controlers= require('../controllers/birds');

/* GET costumes */

router.get('/', birds_controlers.birds_view_all_Page );
router.get('/birds/:id', birds_controlers.birds_detail);

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}

module.exports = router;
/* GET detail costume page */
router.get('/detail',secured, birds_controlers.birds_view_one_Page);
/* GET create costume page */
router.get('/create',secured, birds_controlers.birds_create_Page);
/* GET create update page */
router.get('/update',secured, birds_controlers.birds_update_Page);
/* GET delete costume page */
router.get('/delete',secured, birds_controlers.birds_delete_Page);
