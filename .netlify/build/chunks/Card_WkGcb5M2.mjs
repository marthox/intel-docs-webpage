import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as createAstro } from './astro/server_BlLbbip9.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="blog-card" data-astro-cid-dohjnao5> <li class="link-card" data-astro-cid-dohjnao5> <a${addAttribute(href, "href")} data-astro-cid-dohjnao5> <h2 data-astro-cid-dohjnao5> ${title} <span data-astro-cid-dohjnao5>&rarr;</span> </h2> <p data-astro-cid-dohjnao5> ${body} </p> </a> </li> </div> `;
}, "/Users/mateogregoryjimenez/Library/CloudStorage/OneDrive-Personal/Documents/Marthox/Projects/Development/iIntelDocs/intel-docs-webpage/src/components/Card.astro", void 0);

export { $$Card as $ };
