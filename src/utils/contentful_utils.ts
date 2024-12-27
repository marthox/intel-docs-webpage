import * as contentful from "contentful";
import "dotenv/config";
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
            props: { page_id: page.sys.id },
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
