var birds = require('../models/birds');
// List of all Costumes
exports.birds_list = function(req, res) {
 res.send('NOT IMPLEMENTED: birds list');
};
// for a specific Costume.
exports.birds_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: birds detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.birds_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: birds create POST');
};
// Handle Costume delete form on DELETE.
exports.birds_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: birds delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.birdse_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: birds update PUT' + req.params.id);
};