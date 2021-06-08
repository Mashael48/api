exports.creatPostValidator = (req, res, next) => {

	//check for title
	req.check('title', "write a title").notEmpty();
	req.check('title', "title should be between 4 and 150 charactors").isLength({
		min: 4, max:150
	});

	//check for body
	req.check('body', "write a body").notEmpty();
	req.check('body', "body should be between 4 and 500 charactors").isLength({
		min: 4, max: 500
	});


	// handle the error message:
	// bring all the errors 
	const errors = req.validationErrors();

	//write a message for the first error only
	if (errors){
		const firstErr = errors.map( error => error.msg)[0];
		//change the status to "error"
		return res.status(400).json({ error: firstErr });
	}

	//to complate the process despite of the errors:
	next();

};


