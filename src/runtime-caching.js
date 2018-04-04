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

// The route for any requests from the dfwsportsbeat origin
toolbox.router.get('/(.*)', toolbox.cacheFirst, 
{
	cache: 
	{
		name: 'cdf-dfw',
		maxEntries: 10,
		maxAgeSeconds: 86400 // cache for a day
	},

	origin: /\.dfwsportsbeat\.com$/,

	// Set a timeout threshold of 2 seconds
	networkTimeoutSeconds: 3
});

// The route for any requests from the cdf-cloud origin
toolbox.router.get('/(.*)', toolbox.cacheFirst, 
{
	cache: 
	{
		name: 'cdf-cloud',
		maxEntries: 10,
		maxAgeSeconds: 86400 // cache for a day
	},

	origin: /\.cdf\.cloud$/,

	// Set a timeout threshold of 2 seconds
	networkTimeoutSeconds: 3
});

// The route for any requests from the cloudcms.com origin
toolbox.router.get('/(.*)', toolbox.cacheFirst, 
{
	cache: 
	{
		name: 'cloud-com',
		maxEntries: 10,
		maxAgeSeconds: 86400 // cache for a day
	},

	origin: /\.cloudcms\.com$/,

	// Set a timeout threshold of 2 seconds
	networkTimeoutSeconds: 3
});

// The route for any requests from the cloudcms.net origin
toolbox.router.get('/(.*)', toolbox.cacheFirst, 
{
	cache: 
	{
		name: 'cloud-net',
		maxEntries: 10,
		maxAgeSeconds: 86400 // cache for a day
	},

	origin: /\.cloudcms\.net$/,

	// Set a timeout threshold of 2 seconds
	networkTimeoutSeconds: 3
});

console.log('CACHE-ITICUS 3');