export type ApiConfiguration = {
    images: {
        base_url: string;
        secure_base_url: string;
        backdrop_sizes: string[];
        logo_sizes: string[];
        poster_sizes: string[];
        profile_sizes: string[];
        still_sizes: string[];
    },
    change_keys: string[]
};

export type Country = {
    iso_3166_1: string;
    english_name: string;
};

export type CountriesConfiguration = Country[];