
# Note -- Product-ui works with product-ms1,product-ms2.
docker build command was taking long time . so added .dockerignore file.

Disable user in nginx.conf to avoid below error or Use bitnami/nginx(non-root container).

see Dockerfile (nginx.conf, site.conf) was modified,added permission also to avoid error as mentioned in 
https://www.rockyourcode.com/run-docker-nginx-as-non-root-user/ 
http://pjdietz.com/2016/08/28/nginx-in-docker-without-root.html

/docker-entrypoint.sh: Configuration complete; ready for start up
2020/10/01 06:34:50 [warn] 1#1: the "user" directive makes sense only if the master process runs with super-user privileges, ignored in /etc/nginx/nginx.conf:2
nginx: [warn] the "user" directive makes sense only if the master process runs with super-user privileges, ignored in /etc/nginx/nginx.conf:2
2020/10/01 06:34:50 [emerg] 1#1: mkdir() "/var/cache/nginx/client_temp" failed (13: Permission denied)
nginx: [emerg] mkdir() "/var/cache/nginx/client_temp" failed (13: Permission denied)

# Docker images
see https://hub.docker.com/r/mohdtabish999/product-ui 
docker build -t mohdtabish999/product-ui:1.0 . 
docker run -p 80:8080 mohdtabish999/product-ui 
docker exec -it <containerid> sh 
go to browser localhost


# ProductUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
"# product-ui" 
"# product-ui" 
"# product-ui" 
