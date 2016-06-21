
const {ipcRenderer} = require('electron');
ipcRenderer.send("init_webview", "initialised")

var textBox;
	
	/*
window.onload = function() {
	//ipcRenderer.send("init_webview", "initialised")


	textBox = document.querySelector("input[id=lst-ib]")
	
	if (textBox) {
		textBox.value = "Hello11";
	}
}
*/

ipcRenderer.on('message_received', (event, arg) => {
	textBox = document.querySelector("input[id=lst-ib]")

	//var webView = document.getElementById('text');
	//webView.executeJavaScript("document.querySelector('input[id=lst-ib]').value = \"" + arg+"\"");

	console.log("Message")

  	if (textBox) {
		textBox.value = arg;
	}

});

