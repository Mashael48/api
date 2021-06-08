const express = require('express'); 
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

dotenv.config(); //get the env info


//db
mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
.then( () => console.log('DB connected') );

mongoose.connection.on("error", err => {
	console.log(`DB connection with err: ${err.message}`);
});


//bring in routes
const postRoutes = require('./routes/port');


// //middleware:

// const myMW  = (req, res, next) => {
// 	console.log("myMW..");
// 	next(); // so dont stuck  
// };

app.use((morgan("dev"))); // (info, this rout, time to respose)
app.use(bodyParser.json()); 
app.use(expressValidator()); 
//app.use(myMW);

app.use('/', postRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`inside log: ${port}`);
});