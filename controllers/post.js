
// exports.getPost = (req, res) => {
// 	res.send('hello server');
// };

const Post = require("../models/post");

exports.getPost = (req, res) => {
	// res.json({
	// 	posts: [
	// 	{title: "first"},
	// 	{title: "second"}
	// 	]
	// });


	const posts = Post.find().select("title body").then( posts => {
		res.json({ posts }); //.status(200) defualt   -   posts: posts
	})
	.catch (err => console.log(err) );
	 
};


exports.createPost = (req, res) => {
	const post = new Post(req.body);
	//console.log(req.body);
	// post.save( (err, result) => {
	// 	// if (err){
	// 	// 	return res.status(400).json({
	// 	// 		error: err
	// 	// 	});
	// 	// }							//err: handeld in validator/index
	// 	res.status(200).json({
	// 		post: result
	// 	});
	// });

	post.save().then( result => {
		res.status(200).json({
			post: result
		});
	});
};