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
        delicious:"Delicious",
        foods:"Foods",
        wonderful: " with Wonderful Eatin",
        more:"show more ",
        number:"number of guests",
        date:"select date",
      time:"select time",
      book:"book reservation ",
      person:"person",
      welcome:"Welcome To Our",
      Luxury :"Luxury Restaurant ",
      discFood:"It’s the story of an everlasting love affair, Dieter Delicioz and the Atlantic Ocean. Our proximity to the abundant riches of the sea and Portugal’s excellent produce.",
      moreFood:"more food",
      findFood:"Find Food Lounge",
      austria:"Austria",
      phoneFind:"1-579-854-5574",
      emailFind:"kiara.sanford@keeling.biz",
      mon:"Mon - Thu: 10 AM - 02 AM",
      fri:"Fri - Sun: 10 AM - 02 AM",
      Starters :"Starters &",
      mainDishes:"Main Dishes",
      dishesDescription:"It’s the story of an everlasting love affair, Dieter Delicioz and the Atlantic Ocean in the big air.",
      Chicha :"Chicha Morada",
      listDes:"Beetroot And Datterini, Goat Cheese, Ricotta",




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
       delicious:"ألذ",
       foods:"الأطباق ",
       wonderful: " بمذاق لا يوصف",
       more:"اعرف المزيد",
       number:"عدد الحضور",
       date:"اختر التاريخ",
       time:"اختر الوقت",
       book:" إحجز الـآن",
       person:"شخص",
       welcome:"اهـلاََ بكم في",
       Luxury :"مطعمنا  الفاخر",
       discFood:"إنها قصة علاقة حب أبدية ، ديتر ديليشوز والمحيط الأطلسي. قربنا من ثروات البحر الوفيرة ومنتجات البرتغال الممتازة.",
        moreFood:"المزيد من الطعام",
        findFood:"ابحث عن صالة الطعام  ",
        austria:"استراليا",
        phoneFind:"1-579-854-5574",
        emailFind:"kiara.sanford@keeling.biz",
        mon:"الإثنين - الخميس: 10 صباحًا - 02 صباحًا",
        fri:"الجمعة - الأحد: 10 صباحًا - 02 صباحًا",
        Starters :"المقبلات  ",
        mainDishes:"و الاطباق الرئيسية",
        dishesDescription:"إنها قصة علاقة حب أبدية ، ديتر ديليشوز والمحيط الأطلسي في الهواء الكبير.",
        Chicha :"برجر",
        listDes:"الشمندر والداتيريني ، جبن الماعز ، الريكوتا",
  
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