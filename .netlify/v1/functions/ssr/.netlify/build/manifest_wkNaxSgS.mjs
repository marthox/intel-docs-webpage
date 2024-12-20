import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { o as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_BlLbbip9.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/mateogregoryjimenez/Library/CloudStorage/OneDrive-Personal/Documents/Marthox/Projects/Development/iIntelDocs/intel-docs-webpage/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;object-fit:var(--fit);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_page_.t_fgcC8L.css"},{"type":"inline","content":".blog-card[data-astro-cid-dohjnao5]{padding:.2rem}.link-card[data-astro-cid-dohjnao5]{list-style:none;display:flex;flex-direction:column;padding:1rem;background-color:var(--secondaryColorTwo);border-radius:5px;cursor:pointer;width:350px;height:250px;transition:transform .3s ease,box-shadow .3s ease;box-shadow:0 4px 6px #0000001a}.link-card[data-astro-cid-dohjnao5]>a[data-astro-cid-dohjnao5]{width:100%;text-decoration:none;line-height:1.4;color:#fff;opacity:.8;transition:color .3s ease,opacity .3s ease}h2[data-astro-cid-dohjnao5]{margin:0;font-size:1.25rem;color:var(--primaryColorTwo);transition:color .3s ease}p[data-astro-cid-dohjnao5]{margin-top:.5rem;margin-bottom:2rem;color:var(--secondaryColorOne);opacity:.8;transition:opacity .3s ease}.link-card[data-astro-cid-dohjnao5]:is(:hover,:focus-within){transform:translateY(-10px);box-shadow:0 8px 16px #0003;background-position:0;background-image:var(--accent-gradient)}.link-card[data-astro-cid-dohjnao5]:is(:hover,:focus-within) h2[data-astro-cid-dohjnao5]{color:rgb(var(--accent-light))}.link-card[data-astro-cid-dohjnao5]:is(:hover,:focus-within) p[data-astro-cid-dohjnao5]{opacity:1}.link-card[data-astro-cid-dohjnao5]:is(:hover,:focus-within)>a[data-astro-cid-dohjnao5]{color:#fff;opacity:1}h2[data-astro-cid-dohjnao5] span[data-astro-cid-dohjnao5]{display:inline-block;transition:transform .3s ease}.link-card[data-astro-cid-dohjnao5]:is(:hover,:focus-within) h2[data-astro-cid-dohjnao5] span[data-astro-cid-dohjnao5]{transform:translate(5px)}\nmain[data-astro-cid-dhfotatx]{margin:auto;padding:1rem;width:800px;max-width:calc(100% - 2rem);color:#fff;font-size:20px;line-height:1.6}.astro-a[data-astro-cid-dhfotatx]{position:absolute;top:-32px;left:50%;transform:translate(-50%);width:220px;height:auto;z-index:-1}h1[data-astro-cid-dhfotatx]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin-bottom:1em}.text-gradient[data-astro-cid-dhfotatx]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}.instructions[data-astro-cid-dhfotatx]{margin-bottom:2rem;border:1px solid rgba(var(--accent-light),25%);background:linear-gradient(rgba(var(--accent-dark),66%),rgba(var(--accent-dark),33%));padding:1.5rem;border-radius:8px}.instructions[data-astro-cid-dhfotatx] code[data-astro-cid-dhfotatx]{font-size:.8em;font-weight:700;background:rgba(var(--accent-light),12%);color:rgb(var(--accent-light));border-radius:4px;padding:.3em .4em}.instructions[data-astro-cid-dhfotatx] strong[data-astro-cid-dhfotatx]{color:rgb(var(--accent-light))}.link-card-grid[data-astro-cid-dhfotatx]{display:grid;grid-template-columns:repeat(auto-fit,minmax(24ch,1fr));gap:2rem;padding:0}\n.button-cta[data-astro-cid-75r6nm7g],.page-cta[data-astro-cid-75r6nm7g]{display:inline-block;margin:10px;padding:10px;border-radius:10px;background-color:var(--primaryColorTwo);color:#000;border:1px solid transparent;cursor:pointer;text-decoration:none;transition:all .3s ease-in-out}.button-cta[data-astro-cid-75r6nm7g]:hover,.page-cta[data-astro-cid-75r6nm7g]:hover{background-color:#000;color:#fff;transform:scale(1.1);box-shadow:0 4px 10px #0003}.navbar-button[data-astro-cid-75r6nm7g]{display:inline-block;margin:10px;padding:10px;border-radius:10px;background-color:var(--primaryColorTwo);color:#000;border:1px solid transparent;cursor:pointer;text-decoration:none;transition:background-color .3s ease-in-out,color .3s ease-in-out,box-shadow .3s ease-in-out}.navbar-button[data-astro-cid-75r6nm7g]:hover{background-color:#000;color:#fff;box-shadow:inset 0 0 10px #0003}.button-hero[data-astro-cid-75r6nm7g]{display:inline-block;margin:10px;padding:10px;border-radius:10px;background-color:transparent;color:var(--primaryColorOne);border:1px solid var(--primaryColorOne);cursor:pointer;text-decoration:none;transition:all .3s ease-in-out}.button-hero[data-astro-cid-75r6nm7g]:hover{background-color:var(--primaryColorOne);color:#fff;transform:scale(1.1);box-shadow:0 4px 10px #0003}@media (max-width: 768px){.button-cta[data-astro-cid-75r6nm7g]{display:inline-block;margin:10px;padding:10px;border-radius:10px;font-size:12px}.page-cta[data-astro-cid-75r6nm7g]{width:80%;text-align:center;margin:1rem auto;display:block}}\n"}],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_page_.t_fgcC8L.css"},{"type":"inline","content":".blog-card[data-astro-cid-dohjnao5]{padding:.2rem}.link-card[data-astro-cid-dohjnao5]{list-style:none;display:flex;flex-direction:column;padding:1rem;background-color:var(--secondaryColorTwo);border-radius:5px;cursor:pointer;width:350px;height:250px;transition:transform .3s ease,box-shadow .3s ease;box-shadow:0 4px 6px #0000001a}.link-card[data-astro-cid-dohjnao5]>a[data-astro-cid-dohjnao5]{width:100%;text-decoration:none;line-height:1.4;color:#fff;opacity:.8;transition:color .3s ease,opacity .3s ease}h2[data-astro-cid-dohjnao5]{margin:0;font-size:1.25rem;color:var(--primaryColorTwo);transition:color .3s ease}p[data-astro-cid-dohjnao5]{margin-top:.5rem;margin-bottom:2rem;color:var(--secondaryColorOne);opacity:.8;transition:opacity .3s ease}.link-card[data-astro-cid-dohjnao5]:is(:hover,:focus-within){transform:translateY(-10px);box-shadow:0 8px 16px #0003;background-position:0;background-image:var(--accent-gradient)}.link-card[data-astro-cid-dohjnao5]:is(:hover,:focus-within) h2[data-astro-cid-dohjnao5]{color:rgb(var(--accent-light))}.link-card[data-astro-cid-dohjnao5]:is(:hover,:focus-within) p[data-astro-cid-dohjnao5]{opacity:1}.link-card[data-astro-cid-dohjnao5]:is(:hover,:focus-within)>a[data-astro-cid-dohjnao5]{color:#fff;opacity:1}h2[data-astro-cid-dohjnao5] span[data-astro-cid-dohjnao5]{display:inline-block;transition:transform .3s ease}.link-card[data-astro-cid-dohjnao5]:is(:hover,:focus-within) h2[data-astro-cid-dohjnao5] span[data-astro-cid-dohjnao5]{transform:translate(5px)}\nmain[data-astro-cid-mrm5k4fd]{margin:auto;padding:1rem;width:800px;max-width:calc(100% - 2rem);color:#fff;font-size:20px;line-height:1.6}.astro-a[data-astro-cid-mrm5k4fd]{position:absolute;top:-32px;left:50%;transform:translate(-50%);width:220px;height:auto;z-index:-1}h1[data-astro-cid-mrm5k4fd]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin-bottom:1em}.text-gradient[data-astro-cid-mrm5k4fd]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}.instructions[data-astro-cid-mrm5k4fd]{margin-bottom:2rem;border:1px solid rgba(var(--accent-light),25%);background:linear-gradient(rgba(var(--accent-dark),66%),rgba(var(--accent-dark),33%));padding:1.5rem;border-radius:8px}.instructions[data-astro-cid-mrm5k4fd] code[data-astro-cid-mrm5k4fd]{font-size:.8em;font-weight:700;background:rgba(var(--accent-light),12%);color:rgb(var(--accent-light));border-radius:4px;padding:.3em .4em}.instructions[data-astro-cid-mrm5k4fd] strong[data-astro-cid-mrm5k4fd]{color:rgb(var(--accent-light))}.link-card-grid[data-astro-cid-mrm5k4fd]{display:grid;grid-template-columns:repeat(auto-fit,minmax(24ch,1fr));gap:2rem;padding:0}\n.button-cta[data-astro-cid-75r6nm7g],.page-cta[data-astro-cid-75r6nm7g]{display:inline-block;margin:10px;padding:10px;border-radius:10px;background-color:var(--primaryColorTwo);color:#000;border:1px solid transparent;cursor:pointer;text-decoration:none;transition:all .3s ease-in-out}.button-cta[data-astro-cid-75r6nm7g]:hover,.page-cta[data-astro-cid-75r6nm7g]:hover{background-color:#000;color:#fff;transform:scale(1.1);box-shadow:0 4px 10px #0003}.navbar-button[data-astro-cid-75r6nm7g]{display:inline-block;margin:10px;padding:10px;border-radius:10px;background-color:var(--primaryColorTwo);color:#000;border:1px solid transparent;cursor:pointer;text-decoration:none;transition:background-color .3s ease-in-out,color .3s ease-in-out,box-shadow .3s ease-in-out}.navbar-button[data-astro-cid-75r6nm7g]:hover{background-color:#000;color:#fff;box-shadow:inset 0 0 10px #0003}.button-hero[data-astro-cid-75r6nm7g]{display:inline-block;margin:10px;padding:10px;border-radius:10px;background-color:transparent;color:var(--primaryColorOne);border:1px solid var(--primaryColorOne);cursor:pointer;text-decoration:none;transition:all .3s ease-in-out}.button-hero[data-astro-cid-75r6nm7g]:hover{background-color:var(--primaryColorOne);color:#fff;transform:scale(1.1);box-shadow:0 4px 10px #0003}@media (max-width: 768px){.button-cta[data-astro-cid-75r6nm7g]{display:inline-block;margin:10px;padding:10px;border-radius:10px;font-size:12px}.page-cta[data-astro-cid-75r6nm7g]{width:80%;text-align:center;margin:1rem auto;display:block}}\n"}],"routeData":{"route":"/fr","isIndex":true,"type":"page","pattern":"^\\/fr\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/index.astro","pathname":"/fr","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"fallback","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/mateogregoryjimenez/Library/CloudStorage/OneDrive-Personal/Documents/Marthox/Projects/Development/iIntelDocs/intel-docs-webpage/src/pages/en/[page].astro",{"propagation":"none","containsHead":true}],["/Users/mateogregoryjimenez/Library/CloudStorage/OneDrive-Personal/Documents/Marthox/Projects/Development/iIntelDocs/intel-docs-webpage/src/pages/en/blogs/[blog].astro",{"propagation":"none","containsHead":true}],["/Users/mateogregoryjimenez/Library/CloudStorage/OneDrive-Personal/Documents/Marthox/Projects/Development/iIntelDocs/intel-docs-webpage/src/pages/en/index.astro",{"propagation":"none","containsHead":true}],["/Users/mateogregoryjimenez/Library/CloudStorage/OneDrive-Personal/Documents/Marthox/Projects/Development/iIntelDocs/intel-docs-webpage/src/pages/fr/[page].astro",{"propagation":"none","containsHead":true}],["/Users/mateogregoryjimenez/Library/CloudStorage/OneDrive-Personal/Documents/Marthox/Projects/Development/iIntelDocs/intel-docs-webpage/src/pages/fr/blogs/[blog].astro",{"propagation":"none","containsHead":true}],["/Users/mateogregoryjimenez/Library/CloudStorage/OneDrive-Personal/Documents/Marthox/Projects/Development/iIntelDocs/intel-docs-webpage/src/pages/fr/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/en/blogs/[blog]@_@astro":"pages/en/blogs/_blog_.astro.mjs","\u0000@astro-page:src/pages/en/[page]@_@astro":"pages/en/_page_.astro.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"pages/en.astro.mjs","\u0000@astro-page:src/pages/fr/blogs/[blog]@_@astro":"pages/fr/blogs/_blog_.astro.mjs","\u0000@astro-page:src/pages/fr/[page]@_@astro":"pages/fr/_page_.astro.mjs","\u0000@astro-page:src/pages/fr/index@_@astro":"pages/fr.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_wkNaxSgS.mjs","/Users/mateogregoryjimenez/Library/CloudStorage/OneDrive-Personal/Documents/Marthox/Projects/Development/iIntelDocs/intel-docs-webpage/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/Users/mateogregoryjimenez/Library/CloudStorage/OneDrive-Personal/Documents/Marthox/Projects/Development/iIntelDocs/intel-docs-webpage/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BarCz5f-.mjs","@components/ReactiveInnerNavbar":"_astro/ReactiveInnerNavbar.DrqU-62v.js","@astrojs/react/client.js":"_astro/client.BKX-yLGW.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_page_.t_fgcC8L.css","/_astro/_page_.BveNWp7L.css","/favicon.svg","/_astro/ReactiveInnerNavbar.DrqU-62v.js","/_astro/_page_.C8WGPbYd.css","/_astro/client.BKX-yLGW.js","/_astro/index.CcfSqGrV.js","/fonts/helveticaNeueLTStdBd.otf","/fonts/helveticaNeueLTStdRoman.otf","/fonts/markSimonsonProximaNovaBlack.otf"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-always","locales":["fr","en"],"defaultLocale":"en","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"9+xKS7uF/Y55U3cAfdpbVHTIT+hOwE4BrNHWgL3m62o="});

export { manifest };
