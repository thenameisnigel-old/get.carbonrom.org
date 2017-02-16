module.exports = {
	Server: {
		/**
		 * The address where the HTTP server will listen.
		 */
		listeningAddress: '0.0.0.0',

		/**
		 * The port on which the HTTP server will listen.
		 */
		listeningPort: 3000,

		/**
		 * Configuration of restify's BodyParser / BodyReader.
		 */
		bodyParserConfiguration: {
			/**
			 * Request size in bytes.
			 */
			maxBodySize: 1000,
		},

		/**
		 * Configuration of restify's throttle module. See http://mcavage.me/node-restify/
		 * for a list of configuration options ("Throttle" section below "Bundled Plugins").
		 */
		throttleConfiguration: {
			/**
			 * Decides if the module will be enabled.
			 */
			isEnabled: false,
		},

		/**
		 * Enables serving of static content. The following example serves the website
		 * (all files reside in website/build).
		 *
		 * NOTE: The whole block is optional and can be left empty in your own configuration.
		 */
		serveStaticConfiguration: [
			{
				urlPattern: '^(/|\/?.*\.html|/assets/.*)$',

				/**
				* Configuration for restify's serveStatic module. See http://mcavage.me/node-restify/
				* for a list of configuration options ("Serve Static" section below "Bundled Plugins").
				*/
				options: {
					directory: './website/build/',
					default: 'index.html',
				}
			},
			/**
			 * For testing purposes (= in case you are not using a separate download server/reverse proxy)
			 * ONLY: you can use the following block to make cm-update-server serve the zip files from
			 * ./data/files/downloads/*.zip.
			 *
			 * NOTE: Running cm-update-server with a separate download server/reverse proxy is highly
			 * recommended for productive environments.
			 */
			/*
			*/
			{
				urlPattern: '^\/downloads\/.*\.zip$',
				options : {
					directory: './data/files/'
				}
			}
		],
	},

	/**
	 * Wintersmith settings - see: https://github.com/jnordberg/wintersmith#configuration
	 */
	Website: {
		/**
		 * Input/output directories.
		 */
		contents: "./website/contents/",
		templates: "./website/templates/",
		output: "./website/build/",

		locals: {
			/**
			 * The title (index page) of the website.
			 */
			name: 'Get CarbonROM',

			/**
			 * The owner/copyright text that will be shown in the footer.
			 * If left blank then the footer will only show (c) <year>.
			 */
			owner: 'CarbonROM',

			/**
			 * Shows the image at the given URL at the very top of the
			 * page.
			 */
			topImageUrl: 'https://carbonrom.org/logo.png',

			/**
			 * The alt/title text for the "top image". This is only
			 * required when topImageUrl is configured.
			 */
			topImageAlt: '',

			/**
			 * Custom links for the "Additional Information" section.
			 * Leave this empty to disable the "Additional Information"
			 * area.
			 */
			customLinks: [
				{ src: "/stats.html", text: "Download statistics" },
				{ src: "https://github.com/CarbonROM", text: "CarbonROM GitHub", target: "_blank" },
				{ src: "https://review.carbonrom.org", text: "CarbonROM Review", target: "_blank" },
                                { src: "http://opengapps.org", text: "Get Google Apps Nougat", target: "_blank" }
			],

			/**
			 * The peer5 API key/ID. Setting this enables the peer5 CDN
			 * integration. See https://www.peer5.com/
			 */
			peer5Key: 'g5wx8t75hddflvl7bqac'
		},

		/** @see @href https://github.com/jnordberg/wintersmith#options */
		plugins: [
		],

		/** @see @href https://github.com/jnordberg/wintersmith#options */
		require: {
			filesize: "filesize"
		},

		jade: {
			pretty: true
		},

		/** @see @href https://github.com/jnordberg/wintersmith#options */
		baseUrl: "/"
	},

	Application: {
		/**
		 * The base URL where the real full roms can be found. The following parameters are appended to this 'base-URL':
		 * 1) The subdirectory of the rom (if set)
		 * 2) The filename of the rom
		 */
		realRomDownloadBaseUrl: "https://basketbuild.com/uploads/devs/CarbonROM",

		/**
		 * The base URL for the download-proxy for the full rom downloads (which is handled by
		 * cm-updater-api's webserver at /download/rom). This little proxy acts as statistics module.
		 *
		 * NOTE: If isDownloadProxyEnabled is set to false then this value can be ignored!
		 */
		proxyRomDownloadBaseUrl: "http://get.carbonrom.org/downloads",

		/**
		 * The base URL where the incremental files can be found. The following parameters are appended to this 'base-URL':
		 * 1) The subdirectory of the incremental (if set)
		 * 2) The filename of the incremental
		 */
		realIncrementalDownloadBaseUrl: "http://get.carbonrom.org/download/incremental",

		/**
		 * The base URL for the download-proxy for incremental updates (which is handled by
		 * cm-updater-api's webserver at /download/incremental). This little proxy acts as statistics module.
		 *
		 * NOTE: If isDownloadProxyEnabled is set to false then this value can be ignored!
		 */
		proxyIncrementalDownloadBaseUrl: "http://get.carbonrom.org/download/incremental",

		/**
		 * Similar to proxyDownloadBaseUrl this is the base-URL used to build each Rom's changelog URL.
		 * The rom-ID will be added to this as path-parameter.
		 */
		changelogBaseUrl: "http://get.carbonrom.org/changelog",

		/**
		 * Decides if the download proxy (used for gathering download statistics) is enabled or not.
		 */
		isDownloadProxyEnabled: false,

		/**
		 * The number of additional changelogs (from previous builds) which are shown during a GET changelog call.
		 * Use 0 to disable this feature.
		 */
		additionalPreviousChangelogs: 3,
	},

	/**
	 * The database connection settings for sequelize. See http://sequelizejs.com/docs/latest/usage
	 * for a list of configuration options.
	 */
	Database: {
		name: "",
		username: "",
		password: "",
		options: {
			logging: false,
			dialect: "sqlite",
			storage: "./data/database.sqlite",
		}
	}
}

