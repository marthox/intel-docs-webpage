import * as contentful from "contentful";
import "dotenv/config";
import type { Entry } from "@interfaces/entry"; // Import the Entry interface

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

const fetchEntries = async (locale?: string) => {
    const query = locale ? { locale } : {};
    const entries: { [key: string]: Array<Entry> } = {};
    for (const entry of (await client.getEntries(query)).items) {
        if (!entries[entry.sys.contentType.sys.id]) {
            entries[entry.sys.contentType.sys.id] = [entry as Entry];
            continue;
        }
        entries[entry.sys.contentType.sys.id].push(entry as Entry);
    }
    return entries;
};

export const getPageColors = async (locale?: string) => {
    const entries = await fetchEntries(locale);
    return entries.pageColors[0].fields.pageColors;
};

export const getPages = async (locale?: string) => {
    const entries = await fetchEntries(locale);
    return entries.page.map((page: Entry) => ({
        params: { page: page.fields.slug },
        props: { page_data: page },
    }));
};
