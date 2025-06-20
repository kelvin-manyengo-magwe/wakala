//a simple .env variable designed

interface AppConfig {
        API_BASE_URL: string;
        ANALYTICS_KEY: string;
        DEFAULT_LOCALE: 'sw' | 'en';
    }

export const devConfig: AppConfig = {
        API_BASE_URL: 'http://192.168.1.185:8000/api',
        ANALYTICS_KEY: 'DEV_ANALYTICS_KEY',
        DEFAULT_LOCALE: 'sw',
    };

export const prodConfig: AppConfig = {
        API_BASE_URL: 'http://192.168.1.185:8000/api',
        ANALYTICS_KEY: 'PROD_ANALYTICS_KEY',
        DEFAULT_LOCALE: 'sw',
    };


// to be used in the build scripts for CI/CD
export const env: AppConfig = __DEV__ ? devConfig : prodConfig ;