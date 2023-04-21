export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.31b3e25a.js","imports":["_app/immutable/entry/start.31b3e25a.js","_app/immutable/chunks/index.cdffb5f6.js","_app/immutable/chunks/singletons.67651333.js","_app/immutable/chunks/index.2b83a184.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.b042f667.js","imports":["_app/immutable/entry/app.b042f667.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.cdffb5f6.js"],"stylesheets":[],"fonts":[]}},
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
