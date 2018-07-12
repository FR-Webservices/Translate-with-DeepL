'use strict';
const ua = typeof browser === 'undefined'? chrome : browser;

const openTab = (trigger, selectedText = null) => {
	console.info(`openTab: ${trigger}`);

	chrome.tabs.executeScript( {
		code: "window.getSelection().toString();"
	}, function(selection) {
		var newURL = "https://www.deepl.com/translator#en/de/" + encodeURI(selection);
		chrome.tabs.create({ url: newURL });
	});
}

ua.browserAction.onClicked.addListener(ev => openTab('buttonClicked'));

ua.contextMenus.create({
	id: 'deeptransLate',
	title: 'Translate with DeepL',
	contexts: ['all'],
	onclick: (info, tab) => openTab('menuClicked')
});
