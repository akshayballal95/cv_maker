export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.49a4be15.js","imports":["_app/immutable/entry/start.49a4be15.js","_app/immutable/chunks/index.cdffb5f6.js","_app/immutable/chunks/singletons.a3f30291.js","_app/immutable/chunks/index.2b83a184.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.2b497eb3.js","imports":["_app/immutable/entry/app.2b497eb3.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.cdffb5f6.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/creator",
				pattern: /^\/creator\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
