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
			topImageUrl: 'data:image/png;base64,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',

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
				/** { src: "/stats.html", text: "Download statistics" }, */
				{ src: "https://github.com/CarbonROM", text: "CarbonROM GitHub", target: "_blank" },
				{ src: "https://review.carbonrom.org", text: "CarbonROM Review", target: "_blank" },
                                { src: "http://downloads.codefi.re/jdcteam/javelinanddart/gapps", text: "Get Google Apps", target: "_blank" },
                                { src: "https://basketbuild.com/devs/CarbonROM/.OLD", text: "Archive for old Builds", target: "_blank" }
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
		realRomDownloadBaseUrl: "https://mirrorbits.carbonrom.org",
//                realRomDownloadBaseUrl: "https://basketbuild.com/uploads/devs/CarbonROM",

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

