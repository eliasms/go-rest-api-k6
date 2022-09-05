import http from "k6/http";
import {
	check
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
			"Authorization": `Bearer ${apitoken}`
		}
	};

	const res = http.del(`${urlbase}/users/4819`, null, params);

	check(res, {
		"status was 204": (r) => r.status == 204
	});
}