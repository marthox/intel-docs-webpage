export interface Blog {
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
