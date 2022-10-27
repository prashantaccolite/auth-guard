# AuthGuard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.0.

## How To Start

1) Fork and Clone
2) Run `npm i`
3) Run `ng serve` and navigate to `http://localhost:4200/`

## Task

1) By default login page is going to access
2) Now we can access directly `http://localhost:4200/vendor/active`. we have to avoid it. Integrate `AuthGuard`
3) If any user access direct link of `vendor/active` without login, user should be redirect to `login` page.
4) Set static `username = admin` and `password = admin`
5) By default `Login` button will be disabled.
6) If credentials are wrong `Login` button will be disabled and `red border` will apply on both fields. error message not required.
7) Apply `email validation` on Email field.
8) Any `random search` in url will redirect to `login` page. Integrate `wildcard route`
