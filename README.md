# Run automated API tests using K6 
Using only JavaScript and [K6](https://k6.io/), I'm creating a proof of concept for functional tests of REST API and later load and performance.
For this, the public API of the [GO REST API](https://gorest.co.in/) will be used.

## Install K6:
https://k6.io/docs/getting-started/installation/

## Generate the token by logging into the Go REST platform

https://gorest.co.in/consumer/login

## Set the token in the system environment variables

Using Microsoft Windows PowerShell

    $env:API_TOKEN="{your_api_token_here}"

Using Microsoft Windows CMD

    set "API_TOKEN={your_api_token_here}"

Using BASH

    API_TOKEN={your_api_token_here}

## Run the test execution script
Using any terminal

    k6 run .\http_post.js
