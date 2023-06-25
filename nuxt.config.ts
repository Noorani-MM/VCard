// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    modules: ['@nuxtjs/tailwindcss'],
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
                }
            ]
        },
        pageTransition: {
            name: "page", mode: "out-in"
        }
    }
})
