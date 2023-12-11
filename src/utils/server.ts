const dev = process.env.NODE_ENV !== 'production';

export const isServer = dev ? "https://api.iew.es/v1" : "https://api.iew.es/v1";

export const instaFetchServer = "https://api.iew.es";