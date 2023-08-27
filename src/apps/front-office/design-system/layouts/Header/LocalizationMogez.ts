import {
  TranslationsList,
  setLocalizationConfigurations,
} from "@mongez/localization";

const translations: TranslationsList = {
  en: {
    home: "Home",
    about: "About",
    reservation: "Reservation",
    menus: "Menus",
    shop: "Shop",
    login: "login",
    signIn: "SignIn",
    register: "Register",
    pages: "Pages",
    touch: "get in touch",
    addressStreet: " Melssa Bldgs. 18 Ard El-Golf, Heliopolis",
    descriptionFooter:
      "Be the first to know about new collections, special events, and what’s going on at Our Place. We are creative ",
    delicious: "Delicious",
    foods: "Foods",
    wonderful: " with Wonderful Eatin",
    more: "show more ",
    number: "number of guests",
    date: "select date",
    time: "select time",
    book: "book reservation ",
    person: "person",
    welcome: "Welcome To Our",
    Luxury: "Luxury Restaurant ",
    discFood:
      "It’s the story of an everlasting love affair, Dieter Delicioz and the Atlantic Ocean. Our proximity to the abundant riches of the sea and Portugal’s excellent produce.",
    moreFood: "more food",
    findFood: "Find Food Lounge",
    austria: "Austria",
    phoneFind: "1-579-854-5574",
    emailFind: "kiara.sanford@keeling.biz",
    mon: "Mon - Thu: 10 AM - 02 AM",
    fri: "Fri - Sun: 10 AM - 02 AM",
    Starters: "Starters &",
    mainDishes: "Main Dishes",
    dishesDescription:
      "It’s the story of an everlasting love affair, Dieter Delicioz and the Atlantic Ocean in the big air.",
    Chicha: "Chicha Morada",
    listDes: "Beetroot And Datterini, Goat Cheese, Ricotta",
    blog: "Our Blog",
    gallery: "Gallery",
    dateBlog: "march , 22 April",
    blogDes: "Food is the foundation of true happiness ",
    blogTitle: "Dinner",
    aboutUs: "ABOUT US",
    aboutDis: "Out know-how and experience has been out main value",
    aboutTitle:
      "A distinctive, well-preserved and comfortable space, high-quality products, authentic cuisine, food & drinks are done flawlessly.",
    bookAbout: "Book Your Table Today. Book Now!",
    bookButton: "book a tabel",
    why: "Why People Choose Us ?",
    meat: "Popular Dishes",
    chicken: "Neat & Clean Foods",
    cup: "Experience Chefs",
    menuDescription:
      "They cannot foresee the pain & trouble that are bound to ensue",
    userAndEmail: " Username or email address ",
    repassword: "repassowrd  ",
    forgetPassword: "forget Password",
    specialQuest: "special quest",
    contact: "contact",
    catch: "catch us here",
    showing: "showing",
    results: "results",
    defaultSorting: "Default sorting",
    SortPopularity: "Sort by popularity",
    SortRating: "Sort by average rating",
    lowHigh: "low to high",
    highlow: "Sort by price: high to low",
    addCart: " add to cart",
    privacy: "privacy and policy",
    privacyContent:
      "Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Eos Enim Voluptatum Facere Laborum Autem, Obcaecati Earum Assumenda Odio Id Quia Quam Dolorum Quo Modi Laudantium, Consectetur Ut Sed Voluptas Consequatur.",
    terms: "terms and condition",
    faq: "faq",
  },
  ar: {
    home: "الرئيسية",
    about: "عنا",
    reservation: "الحجز",
    menus: "منيو الطعام",
    shop: "المتجر",
    login: "الدخول",
    register: "التسجيل",
    pages: "الصفحات",
    touch: "ابقي علي تواصل",
    addressStreet: "عمارات ملسا. 18 ارض الجولف ، مصر الجديدة ",
    descriptionFooter:
      "كن أول من يعرف عن المجموعات الجديدة والأحداث الخاصة وما يحدث في  نحن مبدعون ",
    delicious: "ألذ",
    foods: "الأطباق ",
    wonderful: " بمذاق لا يوصف",
    more: "اعرف المزيد",
    number: "عدد الحضور",
    date: "اختر التاريخ",
    time: "اختر الوقت",
    book: " إحجز الـآن",
    person: "شخص",
    welcome: "اهـلاََ بكم في",
    Luxury: "مطعمنا  الفاخر",
    discFood:
      "إنها قصة علاقة حب أبدية ، ديتر ديليشوز والمحيط الأطلسي. قربنا من ثروات البحر الوفيرة ومنتجات البرتغال الممتازة.",
    moreFood: "المزيد من الطعام",
    findFood: "ابحث عن صالة الطعام  ",
    austria: "استراليا",
    phoneFind: "1-579-854-5574",
    emailFind: "kiara.sanford@keeling.biz",
    mon: "الإثنين - الخميس: 10 صباحًا - 02 صباحًا",
    fri: "الجمعة - الأحد: 10 صباحًا - 02 صباحًا",
    Starters: "المقبلات  ",
    mainDishes: "و الاطباق الرئيسية",
    dishesDescription:
      "إنها قصة علاقة حب أبدية ، ديتر ديليشوز والمحيط الأطلسي في الهواء الكبير.",
    Chicha: "برجر",
    listDes: "الشمندر والداتيريني ، جبن الماعز ، الريكوتا",
    blog: " المدونة",
    gallery: "المعرض",
    dateBlog: "مارس ، 22 أبريل ",
    blogDes: "الطعام هو أساس السعادة الحقيقية  ",
    blogTitle: "غداء",
    aboutUs: "من نحن",
    aboutDis: "كانت الدراية والخبرة الخارجة هي هدفنا",
    aboutTitle:
      "مساحة مميزة ومحفوظة جيدًا ومريحة ، ومنتجات عالية الجودة ، ومأكولات أصيلة ، وأطعمة ومشروبات مصنوعة بلا عيب.",
    bookAbout: "احجز طاولتك اليوم. احجز الآن!",
    bookButton: "احجز طاولة    ",
    why: "لماذا يختارنا زوارنا    ",
    meat: "أطباق شعبية",
    chicken: "أغذية نظيفة ومرتبة",
    cup: "خبرة الطهاة",
    menuDescription:
      "لا يمكنهم توقع الألم والمتاعب التي لا بد أن تترتب على ذلك",
    userAndEmail: " إسم المستخدم او البريد الإلكتروني ",
    repassword: "إعادة كلمه السر",
    forgetPassword: "نسيت كلمة السر",
    specialQuest: "طلب خاص",
    contact: "تواصل معنا",
    catch: "جدنا هنا",
    showing: "إظهار",
    results: "النتائج",
    defaultSorting: "التصنيف الإفتراضي",
    SortPopularity: "التصنيف بالاكثر شعبيه",
    SortRating: "التصنيف بالتقييم",
    lowHigh: "التصنيف السعر من الاقل للاعلي",
    highlow: "  التصنيف السعر من  للاعلي لاقل",
    addCart: "اضافه الي السلة",
    privacy: " السياسة والخصوصية ",
    privacyContent:
      "مشارف العالم، يتم و, أن دخول نتيجة السبب دار. قام اتفاق واستمر عن, المارق والفلبين ويكيبيديا، ومن عل, وفي دأبوا بالعمل الإيطالية هو. بمحاولة المتساقطة، و أسر, دار عل الحدود بالجانب, يتم جورج ممثّلة معزّزة بـ. وبداية الإمتعاض ولم بـ. قبل ان مرمى وإقامة البشريةً. الخاسرة والروسية وقد ان, ٣٠ بعض أوسع بلاده وأزيز.",
    terms: "الشروط والإحكام",
    faq: " الاسئله والاستفسارات",
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
