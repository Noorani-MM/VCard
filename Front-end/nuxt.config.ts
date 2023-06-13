// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
                    hid: "noorani-mm" ,
                    name: "noorani-mm",
                    content: "Noorani-mm,Noorani,Personal page noorani,Mohammad Mahdi,محمد مهدی نورانی,نورانی"
                },
                {
                    hid: "noorani",
                    name: "noorani",
                    content: "Noorani,نورانی,محمدی مهدی,Mohammad Mahdi"
                },
                {
                    property: "og:site:name",
                    content: "noorani-mm.ir"
                },
                {
                    property: "og:description",
                    content: "Mohammad Mahdi Noorani personal website"
                },
                {
                    property: "og:title",
                    content: "Noorani-mm website"
                },
                {
                    property: "og:type",
                    content: "personal"
                },
                {
                    property: "og:image",
                    content: "https://avatars.githubusercontent.com/u/74505328?v=4"
                }
            ]
        }
    }
})
