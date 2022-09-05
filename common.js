//import { SharedArray } from "k6/data";

export let options = {
	vus: 1,
	duration: '5s'
};

export let urlbase = "https://gorest.co.in/public/v2";
export let apitoken = __ENV.API_TOKEN

//To Do: Implement Shared Arraay to use in 
//const data = new SharedArray("my dataset", function(){
//	const idsList = [];
//	return idsList;
//});
//
//export default function () {
//	const id = data[0];
//	console.log(data.id);
//}