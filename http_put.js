import http from 'k6/http';
import { check } from 'k6';
import { options, urlbase, apitoken } from "./common.js";

export { options };

export default function () {
    const params = {
        headers: {'Authorization': `Bearer ${apitoken}`,
                  'Content-Type': 'application/json'},
    };

    const payload = {
        status: 'Inactive'
    }

    const res = http.put(
        `${urlbase}/users/4938`,
        JSON.stringify(payload),
        params
        );

  console.log(res.json());
  check(res, { 'status was 200': (r) => r.status == 200 });
}
