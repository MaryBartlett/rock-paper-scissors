# rock-paper-scissors
Angular learning exercise of rock paper scissors



### Assumes you have grunt and bower installed globally, if not

```
npm install -g grunt-cli
npm install -g bower
```


## To start


```
    npm install         // this will install the node modules and uses a post install script to install the bower components required
```



## To run
```
    grunt               // will build (jshint and run tests) and watch the files

    grunt build:dist    // will run jshint and concatenate and minify the JavaScript files and run karma tests against these concatenated and minified files
```
