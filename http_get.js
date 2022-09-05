import http from "k6/http";
import {
	check,
	sleep
} from "k6";
import {
	options,
	urlbase,
	apitoken
} from "./common.js";

export {
	options
};

export default function() {
	const params = {
		headers: {
			"Authorization": `Bearer ${apitoken}`,
			"Content-Type": "application/json"
		},
	};

	const res = http.get(
		`${urlbase}/users/4826`,
		params
	);

	check(res, {
		"status was 200": (r) => r.status == 200
	});
	console.log(res.json());
	sleep(1);
}