import { initReactI18next } from "react-i18next";
import i18n from 'i18next';
import resources from './langs';
const localLang = navigator.language==='zh-CN' ? 'zh-CN':'en-US';
i18n.use(initReactI18next).init({resources,lng:localLang,interpolation:{excapeValue:false}});
export default i18n;