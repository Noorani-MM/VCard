export default class ConfigStore {
    public static lang(): string {
        return useCookie('lang').value ?? 'en';
    }

    public static set_lang(lang: string) {
        return useCookie('lang').value = lang;
    }
}