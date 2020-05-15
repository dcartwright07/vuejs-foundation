var errors = [];
var app;

import Vue from 'vue';
import './foundation';

app = new Vue({
	el: '#app',
	data: {
		message: "Off Canvas Code Goes Here",
		content: "Content Code Goes Here"
	},
	mounted: function () {
		this.offCanvas = new Foundation.OffCanvas($('#offCanvas'))
	}
})

errors.forEach(function (err) {
	console.error(err);
})