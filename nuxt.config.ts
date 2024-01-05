// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    hooks: {
        'nitro:config'(config) {
            config.prerender!.routes = config.prerender!.routes!.filter(r => r !== '/200.html')
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        '@nuxt/image',
        '@vite-pwa/nuxt',
    ],
    pwa: {
        mode: "production",
        manifest: {
            name: "noorani-mm",
            short_name: "noorani-mm",
            description: "This is the personal website of Mohammad Mahdi Noorani, where he has provided some information about himself.",
            background_color: "#262626",
            display: "standalone",
            theme_color: "#ffa600",
            lang: "en",
            icons: [
                {
                    src: "icon-192x192.png",
                    sizes: "192x192",
                    type: "image/png"
                },
                {
                    src: "icon-512x512.png",
                    sizes: "512x512",
                    type: "image/png"
                }
            ]
        }
    },
    css: ['~/assets/css/main.css'],
    app: {
        head: {
            htmlAttrs: {
                lang: "en"
            },
            title: "Noorani-mm",
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: "og:description",
                    property: "og:description",
                    content: "This is Mohammad Mahdi Noorani personal website"
                },
                {
                    name: "keywords",
                    content: "Noorani-mm, Noorani, Mohammad Mahdi Noorani, software engineer, Mohammad Mahdi, Mohammad, Mahdi, نورانی, محمد مهدی نورانی, محمدمهدی نورانی"
                },
                {
                    name: "author",
                    content: "Mohammad Mahdi Noorani"
                },
                {
                    name: "theme-color",
                    content: "#ffa600"
                }
            ]
        },
        pageTransition: {
            name: "page", mode: "out-in"
        }
    },
    runtimeConfig: {
        public: {
            APP_NAME: process.env.APP_NAME,
            USER_NAME: process.env.USER_NAME
        }
    }
})
