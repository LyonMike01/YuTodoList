const express = require("express");

const https = require("https");

const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js");


const app = express();



app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));


app.set("view engine", "ejs");

const newItems = ["Man", "Woman", "Death"];
const workList = [];

app.get("/", function(req, res){

	const day = date.getDate();
	// let day = date.getDay();


	res.render("list", {newListItem: newItems, listTitle: day});

});

app.post("/", function (req, res) {

	const newItem = req.body.newItem;

	if (req.body.list === "work") {
		workList.push(newItem);
		res.redirect("/work");
	} 	else  {
		newItems.push(newItem);
		res.redirect("/");
	}

});

app.get("/work", function(req, res){
	res.render("list", {newListItem: workList, listTitle: "Work List"});
});

// app.post("/work", function (req, res) {
// 	let workLi = req.body.newItem;
// 	newItems.push(workLi);
// 	res.redirect("/work");
// });

app.listen(process.env.PORT || 3000, function (){
	console.log("SERVER HAS STARTED ON PORT 3000");
});


	// switch (currentDay){
	// 	case 0:
	// 	day = "Sunday";
	// 	break;

	// 	case 1:
	// 	day = "Monday";
	// 	break;

	// 	case 2:
	// 	day = "Tuesday";
	// 	break;
		
	// 	case 3:
	// 	day = "Wednessday";
	// 	break;

	// 	case 4:
	// 	day = "Thursday";
	// 	break;
		
	// 	case 5:
	// 	day = "Friday";
	// 	break;

	// 	case 6:
	// 	day = "Saturday";
	// 	break;

	// 	default:
	// 	console.log("No be for this life");
	// }
 	
 	//OR IF STATEMENT


	// if (currentDay === 0){
	// 	day = "Sunday";
	// } else if (currentDay === 1){
	// 	day = "Monday";
	// } else if (currentDay === 2){
	// 	day = "Tuesday";
	// } else if (currentDay === 3){
	// 	day = "Wednesday";
	// } else if (currentDay === 4){
	// 	day = "Thursday";
	// } else if (currentDay === 5){
	// 	day = "Friday";
	// } else if (currentDay === 6){
	// 	day = "Saturday";
	// } else {
	// 	day = "No be for this life";
	// }