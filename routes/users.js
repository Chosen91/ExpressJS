var express = require('express');
var router = express.Router();

// var myFavoriteMovies = ["All about the benjamins", "Forrest Gump", "Save the last Dance"]
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
// router.get('/myname',(req, res, next)=> {
//   res.send("Markteisha Gill");
// });
// router.get('/myfavoritemovies',(req, res, next)=> {
//   res.json([myFavoriteMovies]);
// });
// router.get("/", function (req, res) {
// 	console.log(req.query);
// 	let name = req.query.name;
//   let age = req.query.age;
// 	res.send(`${name}`);
// 	// localhost:4000/users/?name=something
//   req.query.name = something
//   // localhost:4000/users/?name=ginny&age=22
//   req.query.age = 30
//   req.query.name = "Teisha"

// });

// router.get("/:id/:title", function (req, res, next) {
// 	console.log(req.params);
// 	let id = req.params.id;
//   let title = req.params.title
// 	res.send(`${id}`);
//   // localhost:4000/users/0/wait
//   req.params.id = "7"
//   req.params.title = "wait"
// });

module.exports = router;
