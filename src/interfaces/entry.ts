export interface Entry {
    fields: {
        [key: string]: any;
    };
    sys: {
        id: any;
        locale: string;
        contentType: {
            sys: {
                id: string;
            };
        };
    };
}
