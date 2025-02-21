import dotenv from 'dotenv';

dotenv.config()

export const config = {
    ENV : process.env.ENV || 'development',
    PORT : process.env.PORT || 5000,
    SERVER_URL : process.env.SERVER_URL
}
