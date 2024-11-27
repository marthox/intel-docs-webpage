export type Page = {
    metadata: { tags: any[]; concepts: any[] };
    sys: {
        space: { sys: any };
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        environment: { sys: any };
        publishedVersion: number;
        revision: number;
        contentType: { sys: any };
        locale: string;
    };
    fields: {
        id: string;
        tabTitle: string;
        heroBanner: { metadata: any; sys: any; fields: any };
        eventBanner: { metadata: any; sys: any; fields: any };
        pageBanners: { metadata: any; sys: any; fields: any }[];
        blogCarrousel: boolean;
        solutions: { metadata: any; sys: any; fields: any };
        slug: string;
    };
};
