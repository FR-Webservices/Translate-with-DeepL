'use strict';

const contextMenuID = 'frw-translateWithDeepL'
const deeplURL = "https://www.deepl.com/translator#en/de/"
const ua = typeof browser === 'undefined'? chrome : browser

const openTab = (info, tab) => {
	if (info.menuItemId === contextMenuID) {
		chrome.tabs.executeScript( {
			code: "window.getSelection().toString();"
		}, function(selection) {

			if (selection.length <= 0) {
				alert("Please select some text which should be translated with DeepL.")
				return
			}

			const newURL = deeplURL + encodeURI(selection)
			chrome.tabs.create({ url: newURL })
		})
	}
}

ua.contextMenus.create({
	id: contextMenuID,
	title: 'Translate with DeepL',
	contexts: ['selection'],
})

ua.contextMenus.onClicked.addListener(openTab)
