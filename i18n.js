// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next) // 将 i18n 传递给 react-i18next
	.init({
		resources: {
			en: {
				home: require("./locales/en/home.json"),
			},
			zh: {
				home: require("./locales/zh/home.json"),
			},
		},
		lng: "zh", // 默认语言
		fallbackLng: "en", // 如果选择的语言不可用，则回退到这个语言
		interpolation: {
			escapeValue: false, // 允许 HTML 标签的插值
		},
	});

export default i18n;
