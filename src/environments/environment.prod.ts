// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment =
	{
		production: true,
		envName: 'prod',
		name: 'DFW SportsBeat',
		version: '2.5.0',
		JW_PLAYER:
		{
			key: 'wNPiCrI15qDzPs7fkSNfvlMlvxwVXL5ZnCE7dg=='
		},
		SOCIAL_MEDIA:
		{
			Facebook: "Facebook",
			Twitter: "Twitter",
			LinkedIn: "LinkedIn",
			Instagram: "Instagram",
			GooglePlus: "GooglePlus",
			YouTube: "YouTube",
			RSS: "RSS",
			Snapchat: "Snapchat"
		},		
		CLOUD_CMS:
		{
			ROOT_URL: 'https://api.cloudcms.com',
			RepositoryId: '87cc5947b23778a49bd9',
			BranchId: '6370b8a9ce4255f9697e',
			MEDIA_URL: 'https://cbb8894f-796b-429a-a2fd-7c05a3c44fdb-hosted.cloudcms.net/static/node',
			Content:
			{
				HomePage: '95738830dd230b83cb8d',
				AboutUsPage: 'ac40bcafcfc352dcb337',
				ContactUsPage: 'ecf5ce7f3a63c624f27f',
				BlogPage: '5cfa5ee4fa176e35815d'
			}
		},
		CDF_API:
		{
			ROOT_URL: 'https://webapi.cdf.cloud/api/',
			ApplicationKey: "42d28aaf-0cef-4433-bb9b-0981fd06375a",
			Content:
			{
			}
		}
	};
