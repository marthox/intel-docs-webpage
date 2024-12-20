import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as createAstro, k as renderHead, i as renderComponent, u as unescapeHTML, j as Fragment, l as defineStyleVars, n as renderSlot } from './astro/server_BlLbbip9.mjs';
/* empty css                          */
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import * as contentful from 'contentful';
import 'dotenv/config';

const $$Astro$2 = createAstro();
const $$BannerCta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BannerCta;
  const { key, data, css_class } = Astro2.props;
  if (!data || !data.fields || !data.fields.id || !data.fields.text || !data.fields.url) {
    return null;
  }
  const {
    fields: { id, text, url }
  } = data;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(css_class, "class")}${addAttribute(id, "id")}${addAttribute(url, "href")} role="button" data-astro-cid-75r6nm7g> ${text} </a> `;
}, "/Users/mateogregoryjimenez/Library/CloudStorage/OneDrive-Personal/Documents/Marthox/Projects/Development/iIntelDocs/intel-docs-webpage/src/components/BannerCta.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const cta = {
    fields: {
      id: 1,
      text: "Request a demo",
      url: "/en/home"
    }
  };
  const test_dict = {
    solutions: [
      { text: "1", link: "2" },
      { text: "2", link: "3" },
      { text: "3", link: "4" }
    ],
    products: [
      { text: "1", link: "2" },
      { text: "2", link: "3" },
      { text: "3", link: "4" }
    ],
    resources: [
      { text: "1", link: "2" },
      { text: "2", link: "3" },
      { text: "3", link: "4" }
    ],
    company: [
      { text: "1", link: "2" },
      { text: "2", link: "3" },
      { text: "3", link: "4" }
    ]
  };
  return renderTemplate`<head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" integrity="sha384-4LISF5TTJX/fLmGSxO53rV4miRxdg84mZsxmO8Rx5jGtp/LbrixFETvWa5a6sESd" crossorigin="anonymous">${renderHead()}</head> <nav class="navbar" data-astro-cid-5blmo7yk> <a href="/en/home" data-astro-cid-5blmo7yk>Logo</a> <label for="menu-toggle" data-astro-cid-5blmo7yk></label> <ul data-astro-cid-5blmo7yk> ${Object.keys(test_dict).map((item) => renderTemplate`<li class="dropdown-container" data-astro-cid-5blmo7yk> <button class="drop" data-astro-cid-5blmo7yk> ${`${item.charAt(0).toUpperCase()}${item.slice(1).toLowerCase()}`} <i class="bi bi-chevron-down" data-astro-cid-5blmo7yk></i> </button> <div class="dropdown" data-astro-cid-5blmo7yk> ${test_dict[item].map((subItem) => renderTemplate`<a${addAttribute(subItem.link, "href")} data-astro-cid-5blmo7yk>${subItem.text}</a>`)} </div> </li>`)} </ul> ${cta?.fields && renderTemplate`${renderComponent($$result, "BannerCta", $$BannerCta, { "data": cta, "key": 1, "css_class": "navbar-button", "data-astro-cid-5blmo7yk": true })}`} </nav> `;
}, "/Users/mateogregoryjimenez/Library/CloudStorage/OneDrive-Personal/Documents/Marthox/Projects/Development/iIntelDocs/intel-docs-webpage/src/components/Navbar.astro", void 0);

const $$Astro$1 = createAstro();
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Logo;
  const { logo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="logo" data-astro-cid-tvrurpns> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(logo)}` })} </div> `;
}, "/Users/mateogregoryjimenez/Library/CloudStorage/OneDrive-Personal/Documents/Marthox/Projects/Development/iIntelDocs/intel-docs-webpage/src/components/Logo.astro", void 0);

const facebook_logo = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"Layer_2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n  <g id=\"Layer_2-2\" data-name=\"Layer_2\">\n    <path d=\"M512,256C512,114.6,397.4,0,256,0S0,114.6,0,256s114.6,256,256,256c1.5,0,3,0,4.5-.1v-199.2h-55v-64.1h55v-47.2c0-54.7,33.4-84.5,82.2-84.5,23.4,0,43.5,1.7,49.3,2.5v57.2h-33.6c-26.5,0-31.7,12.6-31.7,31.1v40.8h63.5l-8.3,64.1h-55.2v189.5c107-30.7,185.3-129.2,185.3-246.1Z\"/>\n  </g>\n</svg>";

const instagram_logo = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"Layer_2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n  <g id=\"Layer_2-2\" data-name=\"Layer_2\">\n    <g>\n      <path d=\"M305,256c0,27.06-21.94,49-49,49s-49-21.94-49-49,21.94-49,49-49,49,21.94,49,49Z\"/>\n      <path d=\"M370.59,169.3c-2.36-6.38-6.11-12.16-11-16.9-4.74-4.88-10.52-8.64-16.9-11-5.18-2.01-12.96-4.41-27.29-5.06-15.5-.71-20.15-.86-59.4-.86s-43.9.15-59.4.86c-14.33.66-22.12,3.05-27.29,5.06-6.39,2.36-12.16,6.11-16.9,11-4.88,4.74-8.64,10.52-11,16.9-2.01,5.18-4.41,12.96-5.06,27.3-.71,15.5-.86,20.15-.86,59.4s.15,43.9.86,59.4c.65,14.33,3.05,22.11,5.06,27.29,2.36,6.39,6.11,12.16,11,16.9,4.74,4.88,10.52,8.64,16.9,11,5.18,2.02,12.96,4.41,27.3,5.06,15.5.71,20.14.86,59.4.86s43.91-.15,59.4-.86c14.33-.65,22.12-3.05,27.3-5.06,12.82-4.95,22.95-15.08,27.9-27.9,2.01-5.18,4.41-12.96,5.06-27.29.71-15.5.86-20.15.86-59.4s-.15-43.9-.86-59.4c-.65-14.33-3.05-22.12-5.06-27.3ZM256,331.48c-41.69,0-75.49-33.79-75.49-75.48s33.8-75.48,75.49-75.48,75.48,33.79,75.48,75.48-33.8,75.48-75.48,75.48ZM334.47,195.17c-9.74,0-17.64-7.9-17.64-17.64s7.9-17.64,17.64-17.64,17.64,7.9,17.64,17.64c0,9.74-7.9,17.64-17.64,17.64Z\"/>\n      <path d=\"M256,0C114.64,0,0,114.64,0,256s114.64,256,256,256,256-114.64,256-256S397.36,0,256,0ZM402.11,316.61c-.71,15.65-3.2,26.33-6.83,35.68-7.64,19.75-23.25,35.36-42.99,42.99-9.35,3.63-20.04,6.12-35.68,6.83-15.68.71-20.68.89-60.61.89s-44.93-.17-60.61-.89c-15.64-.71-26.33-3.2-35.68-6.83-9.81-3.69-18.7-9.48-26.04-16.96-7.48-7.34-13.26-16.23-16.95-26.04-3.63-9.35-6.12-20.04-6.83-35.68-.72-15.68-.89-20.69-.89-60.61s.17-44.93.89-60.61c.71-15.65,3.2-26.33,6.83-35.68,3.69-9.81,9.48-18.7,16.96-26.04,7.34-7.48,16.23-13.27,26.04-16.96,9.35-3.63,20.04-6.12,35.68-6.83,15.68-.71,20.68-.89,60.61-.89s44.93.17,60.61.89c15.65.71,26.33,3.2,35.68,6.82,9.81,3.69,18.7,9.48,26.04,16.96,7.48,7.34,13.27,16.23,16.95,26.04,3.64,9.35,6.12,20.04,6.84,35.68.71,15.68.88,20.68.88,60.61s-.17,44.93-.89,60.61Z\"/>\n    </g>\n  </g>\n</svg>";

const linkedin_logo = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"Layer_2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n  <g id=\"Layer_2-2\" data-name=\"Layer_2\">\n    <path d=\"M256,0C114.64,0,0,114.64,0,256s114.64,256,256,256,256-114.64,256-256S397.36,0,256,0ZM181.61,387h-62.35v-187.57h62.35v187.57ZM150.44,173.81h-.41c-20.92,0-34.45-14.4-34.45-32.4s13.95-32.41,35.27-32.41,34.45,14,34.86,32.41c0,18-13.53,32.4-35.27,32.4ZM406.42,387h-62.34v-100.35c0-25.22-9.03-42.42-31.59-42.42-17.22,0-27.48,11.6-31.99,22.8-1.65,4.01-2.05,9.61-2.05,15.21v104.75h-62.34s.82-169.98,0-187.57h62.34v26.56c8.29-12.78,23.11-30.96,56.19-30.96,41.02,0,71.78,26.81,71.78,84.42v107.55Z\"/>\n  </g>\n</svg>";

const youtube_logo = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"Layer_2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 511.71 511.71\">\n  <defs>\n    <style>\n      .cls-1 {\n        fill: #fff;\n      }\n    </style>\n  </defs>\n  <g id=\"Layer_2-2\" data-name=\"Layer_2\">\n    <g>\n      <path d=\"M255.85,511.71C114.57,511.71,0,397.13,0,255.85S114.57,0,255.85,0s255.85,114.57,255.85,255.85-114.57,255.85-255.85,255.85Z\"/>\n      <path class=\"cls-1\" d=\"M418.68,173.52c-3.89-14.74-15.4-26.3-30.04-30.24-26.51-7.16-132.74-7.16-132.74-7.16,0,0-106.28,0-132.74,7.16-14.63,3.94-26.15,15.5-30.04,30.24-7.16,26.66-7.16,82.33-7.16,82.33,0,0,0,55.67,7.11,82.33,3.89,14.74,15.4,26.3,30.04,30.24,26.51,7.16,132.74,7.16,132.74,7.16,0,0,106.28,0,132.74-7.16,14.63-3.94,26.15-15.5,30.04-30.24,7.11-26.66,7.11-82.33,7.11-82.33,0,0,0-55.67-7.06-82.33h0ZM221.11,306.36v-101.01l88.78,50.51-88.78,50.51Z\"/>\n    </g>\n  </g>\n</svg>";

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const test_dict = {
    explore: [
      { text: "Blah blah blah blah blah blah", link: "2" },
      { text: "nananana ananananana", link: "3" },
      { text: "3", link: "4" }
    ],
    partner: [
      { text: "1", link: "2" },
      { text: "2", link: "3" },
      { text: "3", link: "4" }
    ],
    legal: [
      { text: "1", link: "2" },
      { text: "2", link: "3" },
      { text: "3", link: "4" }
    ],
    contact: [
      { text: "1", link: "2" },
      { text: "2", link: "3" },
      { text: "3", link: "4" }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<nav class="footer" data-astro-cid-sz7xmlte> <ul class="main-list" data-astro-cid-sz7xmlte> ${Object.keys(test_dict).map((item) => renderTemplate`<li class="list-container" data-astro-cid-sz7xmlte> <span class="list-title" data-astro-cid-sz7xmlte> ${`${item.charAt(0).toUpperCase()}${item.slice(1).toLowerCase()}`} </span> <ul class="sub-list" data-astro-cid-sz7xmlte> ${test_dict[item].map((subItem) => renderTemplate`<li data-astro-cid-sz7xmlte> <a${addAttribute(subItem.link, "href")} data-astro-cid-sz7xmlte>${subItem.text}</a> </li>`)} </ul> </li>`)} </ul> <div class="social-icons" data-astro-cid-sz7xmlte> <a href="#" class="icon" data-astro-cid-sz7xmlte>${renderComponent($$result, "Logo", $$Logo, { "logo": facebook_logo, "data-astro-cid-sz7xmlte": true })}</a> <a href="#" class="icon" data-astro-cid-sz7xmlte>${renderComponent($$result, "Logo", $$Logo, { "logo": instagram_logo, "data-astro-cid-sz7xmlte": true })}</a> <a href="#" class="icon" data-astro-cid-sz7xmlte>${renderComponent($$result, "Logo", $$Logo, { "logo": linkedin_logo, "data-astro-cid-sz7xmlte": true })}</a> <a href="#" class="icon" data-astro-cid-sz7xmlte>${renderComponent($$result, "Logo", $$Logo, { "logo": youtube_logo, "data-astro-cid-sz7xmlte": true })}</a> </div> <label class="copy" data-astro-cid-sz7xmlte>© 2024 DocuWare</label>  </nav>`;
}, "/Users/mateogregoryjimenez/Library/CloudStorage/OneDrive-Personal/Documents/Marthox/Projects/Development/iIntelDocs/intel-docs-webpage/src/components/Footer.astro", void 0);

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ""
});
const getPageColors = async (locale) => {
  const entries = await client.getEntries({
    content_type: "pageColors",
    locale
  });
  if (entries.items && entries.items.length > 0) {
    return entries.items[0].fields.pageColors;
  }
  return {
    primaryColorOne: "#00ADFF",
    primaryColorTwo: "#FFBF23",
    primaryColorThree: "#303AB2",
    secondaryColorOne: "#FFFFFF",
    secondaryColorTwo: "#29272C",
    secondaryColorThree: "#5C5C5C"
  };
};
const getPages = async (locale) => {
  const entries = await client.getEntries({
    content_type: "page",
    locale
  });
  const pages = entries.items.map((page) => {
    const slug = page.fields.slug;
    return {
      params: { page: slug },
      props: { page_data: page }
    };
  });
  return pages;
};
const getBlogs = async (locale) => {
  const entries = await client.getEntries({
    content_type: "blog",
    locale
  });
  return entries.items.map((blog) => {
    const slug = blog.fields.slug;
    return {
      params: { blog: slug },
      props: { blog_data: blog }
    };
  });
};
const listBlogs = async (locale) => {
  const entries = await client.getEntries({
    content_type: "blog",
    locale
  });
  return entries.items;
};
const getContentType = (entry) => entry.sys.contentType?.sys.id;

const $$Astro = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const vars = await getPageColors();
  const { title, lang, page_id } = Astro2.props;
  const $$definedVars = defineStyleVars([vars]);
  return renderTemplate`<html${addAttribute(lang, "lang")}${addAttribute($$definedVars, "style")}> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body${addAttribute(page_id, "id")}${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Navbar", $$Navbar, {})} <div class="page-container"${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/mateogregoryjimenez/Library/CloudStorage/OneDrive-Personal/Documents/Marthox/Projects/Development/iIntelDocs/intel-docs-webpage/src/layouts/Layout.astro", void 0);

export { $$Layout as $, getPages as a, getContentType as b, $$BannerCta as c, client as d, getBlogs as g, listBlogs as l };
