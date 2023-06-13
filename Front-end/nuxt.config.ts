// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: "Noorani-mm",
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: "noorani-mm" ,
                    name: "noorani-mm",
                    content: "This is personal website for Mohammad Mahdi Noorani"
                }
            ]
        }
    }
})
