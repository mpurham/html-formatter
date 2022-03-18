/*
    name: HTML Formatter
    description: Cleans and format HTML documents.
    author: Marcell
    tags: html,prettify,clean,indent
*/

const { xml } = require('@polypad/vkBeautify')


function main(state) {
	state.text = xml(state.text)	
}
