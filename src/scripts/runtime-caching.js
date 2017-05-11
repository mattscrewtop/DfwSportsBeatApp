toolbox.options.debug = true;

// The route for any requests from the googleapis origin
toolbox.router.get('/(.*)', toolbox.cacheFirst, 
{
	cache: 
	{
		name: 'googleapis',
		maxEntries: 10,
		maxAgeSeconds: 86400 // cache for a day
	},

	origin: /\.googleapis\.com$/,

	// Set a timeout threshold of 2 seconds
	networkTimeoutSeconds: 3
});

// The route for any requests from the googleapis origin
toolbox.router.get('/(.*)', toolbox.cacheFirst, 
{
	cache: 
	{
		name: 'cdf-solutia',
		maxEntries: 10,
		maxAgeSeconds: 86400 // cache for a day
	},

	origin: /\.solutiaconsulting\.com$/,

	// Set a timeout threshold of 2 seconds
	networkTimeoutSeconds: 3
});

console.log('CACHE-ITICUS 3');