const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const url = require('url');
const path = require('path');

const jetpack = require('fs-jetpack');
//let dir = jetpack.cwd();
//console.log(dir);

//let userDataDir = app.getPath('userData');
//console.log(userDataDir);

let dir = jetpack.cwd(app.getPath('userData'));
console.log(dir);

let win = null;

app.on('ready', function(){
	win =  new BrowserWindow({width: 800, height: 600});
	win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
});


