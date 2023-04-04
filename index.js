const currentUrl = window.location.href
analytics.page({
	context: {
		locale: "en-US",
		page: {
			title: "Analytics Academy",
			url: currentUrl
		}
	},
	integrations: {
		All: false,
		"segment.io":false,
	}
});
