import http from 'k6/http';
import { check } from 'k6';
import { options, urlbase, apitoken } from "./common.js";

export { options };

import {
  randomString,
  randomItem
} from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

var idList = [];

export default function () {
    const params = {
        headers: {'Authorization': `Bearer ${apitoken}`,
                  'Content-Type': 'application/json'},
    };

    const payload = {
    name: randomItem(['Maximus', 'Minimus']),
    gender: randomItem(['Male', 'Female']),
    email: `user_${randomString(10)}@example.com`,
    status: 'Active'
    };

    const res = http.post(
      `${urlbase}/users`,
      JSON.stringify(payload),
      params
      );
    
    console.log(res.json());

    var jsonData = JSON.parse(res.body);

    var id = jsonData.id;

    idList.push(id);

    console.log("Id List:", idList);

    check(res, { 'status was 201': (r) => r.status == 201 });
  
}