import content from "../assets/content.json"

export default class Config {
    public static __(item: string | Array<string>, listItem: any, lang = 'en'): any {
        let result: any;
        if (listItem === null) {
            listItem = content[lang]
        }

        if (typeof item !== 'string') {
            result = listItem;
            item.forEach(i => {
                result = this.__(i, result, lang)
            });
            return result;
        }

        return listItem[item] ?? undefined;
    }
}