import content from "~/assets/content.json";
import ConfigStore from "~/stores/ConfigStore";

export default class ContentReader {
    public static rightToLeft(): boolean {
        if (ConfigStore.lang() === 'fa') {
            return content.fa.rightToLeft;
        }
        return content.en.rightToLeft;
    }

    public static current_content() {
        return content[ConfigStore.lang()];
    }
}