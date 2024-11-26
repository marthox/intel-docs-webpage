import * as contentful from "contentful";
import "dotenv/config";
import type { Entry } from "@interfaces/entry"; // Import the Entry interface

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

const fetchEntries = async () => {
    const entries: { [key: string]: Array<Entry> } = {};
    for (const entry of (await client.getEntries()).items) {
        if (!entries[entry.sys.contentType.sys.id]) {
            entries[entry.sys.contentType.sys.id] = [entry];
            continue;
        }
        entries[entry.sys.contentType.sys.id].push(entry);
    }
    return entries;
};

const entries = await fetchEntries();

export default entries;

export const getPageColors = () => entries.pageColors[0].fields.pageColors;
