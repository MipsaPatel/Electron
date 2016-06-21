// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {ipcRenderer} = require('electron');

var display1 = function(element) {
	var text = element.value

	ipcRenderer.send('entered_text', text);
}

module.exports.display1 = display1;