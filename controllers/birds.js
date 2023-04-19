var birds = require('../models/birds');
// List of all Costumes
exports.birds_list = function(req, res) {
 res.send('NOT IMPLEMENTED: birds list');
};
// for a specific Costume.
// exports.birds_detail = function(req, res) {
//  res.send('NOT IMPLEMENTED: birds detail: ' + req.params.id);
// };

// for a specific Costume.
exports.birds_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await birds.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
// 

exports.birds_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await birds.findById( req.params.id)
    // Do updates of properties
    if(req.body.Name)
    toUpdate.Name = req.body.Name;
    if(req.body.LifeSpan) toUpdate.LifeSpan = req.body.LifeSpan;
    if(req.body.Speed) toUpdate.Speed = req.body.Speed;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
// List of all Costumes
exports.birds_list = async function(req, res) {
    try{
    thebirds = await birds.find();
    res.send(thebirds);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle a show all view
exports.birds_view_all_Page = async function(req, res) {
    try{
    thebirds = await birds.find();
    res.render('birds', { title: 'birds Search Results', results: thebirds });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Costume create on POST.
exports.birds_create_post = async function(req, res) {
    console.log(req.body)
    let document = new birds();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Name = req.body.Name;
    document.LifeSpan = req.body.LifeSpan;
    document.Speed = req.body.Speed;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Costume delete on DELETE.
exports.birds_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await birds.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};
// Handle a show one view with id specified by query
exports.birds_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await birds.findById( req.query.id)
    res.render('birdsdetail',
    { title: 'birds Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.birds_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('birdscreate', { title: 'birds Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for updating a costume.
// query provides the id
exports.birds_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await birds.findById(req.query.id)
    res.render('birdsupdate', { title: 'birds Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle a delete one view with id from query
exports.birds_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await birds.findById(req.query.id)
    res.render('birdsdelete', { title: 'birds Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    


