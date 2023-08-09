import {
  TranslationsList,
  setLocalizationConfigurations,
} from "@mongez/localization";



const translations: TranslationsList = {
    en: {
        home:"Home",
        about:"About",
        reservation:"Reservation",
        menus:"Menus",
        shop:"Shop",
        login:"login",
        signIn:"SignIn",
        register:"Register"
    },
    ar: {
        home:"الرئيسية",
        about:"عنا",
        reservation:"الحجز",
        menus:"منيو الطعام",
        shop:"المتجر",
        login:"الدخول",
        register:"التسجيل",
    },
  };

  setLocalizationConfigurations({
    /**
     * Default locale code
     * 
     * @default en
     */
    defaultLocaleCode: "en",
    /**
     * Fall back locale code
     * 
     * @default en
     */
    fallback: "en",
    /**
     * Set translations list
     */
    translations: translations,
  });