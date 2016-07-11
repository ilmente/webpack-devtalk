
# Webpack DevTalk (06.07.2016)
> by Alessandro Bellini - [ilmente.com](https://ilmente.com)

This repo contains: 

- [webpack presentation (pdf)](https://github.com/ilmente/webpack-devtalk/blob/master/docs/webpack-devtalk.pdf);
- [Spryker antelope presentation (pdf)](https://github.com/ilmente/webpack-devtalk/blob/master/docs/antelope-devtalk.pdf);
- 3 webpack application examples;

I did it for my webpack devtalk.

### Requirements

- node.js >= v6.0.0
- apache (or nginx) server
- webpack 1.13.x globally installed

### 01 Easy Peasy
The simplest. A very basic and minimal webpack application.
You need **apache** server (or **nginx**) in order to make it works.

``` bash
# webpack
npm run build # build the assets
# or
webpack --config ./webpackfile.js # you need webpack as a global node module
```

### 02 Fair Enough
This is a simple **react/redux** application: a shell-alike site. 
In this example I'm creating a more complex webpack configuration, using the default single file approach
and the multi configuration one, sometimes useful to:

- split in different tasks;
- provide compatibility against legacy build systems/configurations;
- increase (?) watching performance.

``` bash
# server
npm run serve # create a server on port 9990

# webpack
npm run build # build the assets in default mode
npm run build multi # build the assets in multi configuration mode
npm run build [multi] -- --watch # build the assets in watch mode
```

### 03 Mmm...
This is supposed to be the advanced example: a **foundation**-based site, with multiple entry points
(better watch mode performance), commong chunk optimization (shared dependencies management), 
bundle lazy loading and karma test integration.

``` bash
# server
npm run serve # create a server on port 9991

# webpack
npm run build # build the assets in default mode
npm run build -- --watch # build the assets in watch mode
npm run build -- --prod # build the assets in production mode
```

---

*Have fun! :)*
