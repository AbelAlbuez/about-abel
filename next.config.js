/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        tsconfigPath:
            process.env.NODE_ENV === 'production'
                ? './tsconfig.build.json'
                : './tsconfig.json'
    }
};

module.exports = nextConfig;
