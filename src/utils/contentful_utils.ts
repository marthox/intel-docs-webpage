import "dotenv/config";
import * as contentful from "contentful";
import type { Entry } from "contentful";

export const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export const getPageColors = async (locale?: string) => {
    const entries = await client.getEntries({
        content_type: "pageColors",
        locale,
    });
    if (entries.items && entries.items.length > 0) {
        return entries.items[0].fields.pageColors;
    }

    // Return fallback colors if no pageColors entry is found
    return {
        primaryColorOne: "#00ADFF",
        primaryColorTwo: "#FFBF23",
        primaryColorThree: "#303AB2",
        secondaryColorOne: "#FFFFFF",
        secondaryColorTwo: "#29272C",
        secondaryColorThree: "#5C5C5C",
    };
};

export const getPages = async (locale?: string) => {
    const entries = await client.getEntries({
        content_type: "page",
        locale,
    });
    const pages = entries.items.map((page: Entry) => {
        const slug: string = page.fields.slug as string;
        return {
            params: { page: slug },
            props: { page_data: page },
        };
    });
    return pages;
};

export const getBlogs = async (locale?: string) => {
    const entries = await client.getEntries({
        content_type: "blog",
        locale,
    });
    return entries.items.map((blog: Entry) => {
        const slug: string = blog.fields.slug as string;
        return {
            params: { blog: slug },
            props: { blog_data: blog },
        };
    });
};

export const listBlogs = async (locale?: string) => {
    const entries = await client.getEntries({
        content_type: "blog",
        locale,
    });
    return entries.items;
};

export const getContentType = (entry: Entry) => entry.sys.contentType?.sys.id;

let navbarDataCache: any = null;

export async function getNavbarData(navbarId: string, lang: string) {
    if (navbarDataCache) {
        return navbarDataCache;
    }

    const navData = await client.getEntry(navbarId as string, { locale: lang });

    const logo = navData.fields.logo as Entry;
    const logoData = logo.fields.file as { url: string };
    const logoUrl = logoData.url;

    const cta = navData.fields.navCta as Entry;

    const navDict: { [key: string]: any } = {};
    const navCategories = navData.fields.navCategories as Entry[];
    for (let i = 0; i < navCategories.length; i++) {
        const element = navCategories[i];
        const category = element.fields.name as string;
        const navInnerCategories = element.fields.navInnerCategory as Entry[];

        navDict[category] = {};
        for (let j = 0; j < navInnerCategories.length; j++) {
            const element = await client.getEntry(
                navInnerCategories[j].sys.id,
                { locale: lang }
            );
            const innerCategory = element.fields.name as string;
            const innerCategoryNavLinks = element.fields.navLinks as Entry[];

            navDict[category][innerCategory] = {};
            for (let h = 0; h < innerCategoryNavLinks.length; h++) {
                const element = innerCategoryNavLinks[h];
                const linkName = element.fields.name as string;
                let page = element.fields.page as Entry;
                const pageId = page.sys.id;
                page = await client.getEntry(pageId, { locale: lang });

                navDict[category][innerCategory][linkName] =
                    `/${lang}/${page.fields.slug}`;
            }
        }
    }

    navbarDataCache = { logoUrl, cta, navDict };
    return navbarDataCache;
}
