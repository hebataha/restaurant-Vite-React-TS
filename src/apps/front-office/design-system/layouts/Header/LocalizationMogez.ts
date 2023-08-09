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
        register:"Register",
        pages:"Pages",
        touch:"get in touch",
        addressStreet:" Melssa Bldgs. 18 Ard El-Golf, Heliopolis",
        descriptionFooter:"Be the first to know about new collections, special events, and what’s going on at Our Place. We are creative ",

    },
    ar: {
        home:"الرئيسية",
        about:"عنا",
        reservation:"الحجز",
        menus:"منيو الطعام",
        shop:"المتجر",
        login:"الدخول",
        register:"التسجيل",
        pages:"الصفحات",
        touch:"ابقي علي تواصل",
        addressStreet:"عمارات ملسا. 18 ارض الجولف ، مصر الجديدة ",
        descriptionFooter:"كن أول من يعرف عن المجموعات الجديدة والأحداث الخاصة وما يحدث في  نحن مبدعون ",
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