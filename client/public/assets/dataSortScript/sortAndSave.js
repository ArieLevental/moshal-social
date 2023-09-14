const fs = require("fs");

const data = {
  city: [
    {
      city_symbol: ["967"],
      english_name: ["abu juwei'id"],
      hebrew_name: ["אבו ג'ווייעד )שבט("],
    },
    {
      city_symbol: ["472"],
      english_name: ["abu ghosh"],
      hebrew_name: ["אבו גוש"],
    },
    {
      city_symbol: ["473"],
      english_name: ["abu sinan"],
      hebrew_name: ["אבו סנאן"],
    },
    {
      city_symbol: ["935"],
      english_name: ["abu sureihan"],
      hebrew_name: ["אבו סריחאן )שבט("],
    },
    {
      city_symbol: ["958 "],
      english_name: ["abu abdun"],
      hebrew_name: ["אבו עבדון )שבט("],
    },
    {
      city_symbol: ["1042"],
      english_name: ["abu ammar"],
      hebrew_name: ["אבו עמאר )שבט("],
    },
    {
      city_symbol: ["932"],
      english_name: ["abu amre"],
      hebrew_name: ["אבו עמרה )שבט("],
    },
    {
      city_symbol: ["968"],
      english_name: ["abu qureinat"],
      hebrew_name: ["אבו קורינאת )שבט("],
    },
    {
      city_symbol: ["1342"],
      english_name: ["abu qureinat"],
      hebrew_name: ["אבו קרינאת )יישוב("],
    },
    {
      city_symbol: ["966"],
      english_name: ["abu rubei'a"],
      hebrew_name: ["אבו רובייעה )שבט("],
    },
    {
      city_symbol: ["961"],
      english_name: ["abu ruqayyeq"],
      hebrew_name: ["אבו רוקייק )שבט("],
    },
    {
      city_symbol: ["1375"],
      english_name: ["abu tulul"],
      hebrew_name: ["אבו תלול"],
    },
    {
      city_symbol: ["652"],
      english_name: ["ibtin"],
      hebrew_name: ["אבטין"],
    },
    {
      city_symbol: ["1275"],
      english_name: ["avtalyon"],
      hebrew_name: ["אבטליון"],
    },
    {
      city_symbol: ["679"],
      english_name: ["avi'el"],
      hebrew_name: ["אביאל"],
    },
    {
      city_symbol: ["1115"],
      english_name: ["avivim"],
      hebrew_name: ["אביבים"],
    },
    {
      city_symbol: ["819"],
      english_name: ["avigedor"],
      hebrew_name: ["אביגדור"],
    },
    {
      city_symbol: ["175"],
      english_name: ["avihayil"],
      hebrew_name: ["אביחיל"],
    },
    {
      city_symbol: ["2052"],
      english_name: ["avital"],
      hebrew_name: ["אביטל"],
    },
    {
      city_symbol: ["1070 "],
      english_name: ["avi'ezer "],
      hebrew_name: ["אביעזר "],
    },
    {
      city_symbol: ["1220 "],
      english_name: ["abbirim "],
      hebrew_name: ["אבירים "],
    },
    {
      city_symbol: ["182 "],
      english_name: ["even yehuda "],
      hebrew_name: ["אבן יהודה "],
    },
    {
      city_symbol: ["1081 "],
      english_name: ["even menahem "],
      hebrew_name: ["אבן מנחם "],
    },
    {
      city_symbol: ["783 "],
      english_name: ["even sappir "],
      hebrew_name: ["אבן ספיר "],
    },
    {
      city_symbol: ["400 "],
      english_name: ["even shemu'el "],
      hebrew_name: ["אבן שמואל "],
    },
    {
      city_symbol: ["4011 "],
      english_name: ["avne etan "],
      hebrew_name: ["אבני איתן "],
    },
    {
      city_symbol: ["3793 "],
      english_name: ["avne hefez "],
      hebrew_name: ["אבני חפץ "],
    },
    {
      city_symbol: ["3786 "],
      english_name: ["avenat "],
      hebrew_name: ["אבנת "],
    },
    {
      city_symbol: ["1311 "],
      english_name: ["avshalom "],
      hebrew_name: ["אבשלום "],
    },
    {
      city_symbol: ["3759 "],
      english_name: ["adora "],
      hebrew_name: ["אדורה "],
    },
    {
      city_symbol: ["113 "],
      english_name: ["addirim "],
      hebrew_name: ["אדירים "],
    },
    {
      city_symbol: ["1068 "],
      english_name: ["adamit "],
      hebrew_name: ["אדמית "],
    },
    {
      city_symbol: ["1123 "],
      english_name: ["adderet "],
      hebrew_name: ["אדרת "],
    },
    {
      city_symbol: ["446 "],
      english_name: ["udim "],
      hebrew_name: ["אודים "],
    },
    {
      city_symbol: ["4010 "],
      english_name: ["odem "],
      hebrew_name: ["אודם "],
    },
    {
      city_symbol: ["1046 "],
      english_name: ["ohad "],
      hebrew_name: ["אוהד "],
    },
    {
      city_symbol: ["2710 "],
      english_name: ["umm al-fahm "],
      hebrew_name: ["אום אל-פחם "],
    },
    {
      city_symbol: ["2024 "],
      english_name: ["umm al-qutuf "],
      hebrew_name: ["אום אל-קוטוף "],
    },
    {
      city_symbol: ["1358 "],
      english_name: ["umm batin "],
      hebrew_name: ["אום בטין "],
    },
    {
      city_symbol: ["1108 "],
      english_name: ["omen "],
      hebrew_name: ["אומן "],
    },
    {
      city_symbol: ["680 "],
      english_name: ["omez "],
      hebrew_name: ["אומץ "],
    },
    {
      city_symbol: ["31 "],
      english_name: ["ofaqim "],
      hebrew_name: ["אופקים "],
    },
    {
      city_symbol: ["1294 "],
      english_name: ["or haganuz "],
      hebrew_name: ["אור הגנוז "],
    },
    {
      city_symbol: ["67 "],
      english_name: ["or haner "],
      hebrew_name: ["אור הנר "],
    },
    {
      city_symbol: ["2400 "],
      english_name: ["or yehuda "],
      hebrew_name: ["אור יהודה "],
    },
    {
      city_symbol: ["1020 "],
      english_name: ["or aqiva "],
      hebrew_name: ["אור עקיבא "],
    },
    {
      city_symbol: ["780 "],
      english_name: ["ora "],
      hebrew_name: ["אורה "],
    },
    {
      city_symbol: ["2012 "],
      english_name: ["orot "],
      hebrew_name: ["אורות "],
    },
    {
      city_symbol: ["4013 "],
      english_name: ["ortal "],
      hebrew_name: ["אורטל "],
    },
    {
      city_symbol: ["403 "],
      english_name: ["urim "],
      hebrew_name: ["אורים "],
    },
    {
      city_symbol: ["882 "],
      english_name: ["oranim "],
      hebrew_name: ["אורנים "],
    },
    {
      city_symbol: ["3760 "],
      english_name: ["oranit "],
      hebrew_name: ["אורנית "],
    },
    {
      city_symbol: ["278 "],
      english_name: ["usha "],
      hebrew_name: ["אושה "],
    },
    {
      city_symbol: ["565 "],
      english_name: ["azor "],
      hebrew_name: ["אזור "],
    },
    {
      city_symbol: ["1157 "],
      english_name: ["ahawa "],
      hebrew_name: ["אחווה "],
    },
    {
      city_symbol: ["821 "],
      english_name: ["ahuzzam "],
      hebrew_name: ["אחוזם "],
    },
    {
      city_symbol: ["1330 "],
      english_name: ["ahuzzat baraq "],
      hebrew_name: ["אחוזת ברק "],
    },
    {
      city_symbol: ["785 "],
      english_name: ["ahihud "],
      hebrew_name: ["אחיהוד "],
    },
    {
      city_symbol: ["850 "],
      english_name: ["ahituv "],
      hebrew_name: ["אחיטוב "],
    },
    {
      city_symbol: ["804 "],
      english_name: ["ahisamakh "],
      hebrew_name: ["אחיסמך "],
    },
    {
      city_symbol: ["797 "],
      english_name: ["ahi'ezer "],
      hebrew_name: ["אחיעזר "],
    },
    {
      city_symbol: ["965 "],
      english_name: ["atrash "],
      hebrew_name: ["אטרש )שבט( "],
    },
    {
      city_symbol: ["338 "],
      english_name: ["ibbim "],
      hebrew_name: ["איבים "],
    },
    {
      city_symbol: ["716 "],
      english_name: ["eyal "],
      hebrew_name: ["אייל "],
    },
    {
      city_symbol: ["77 "],
      english_name: ["ayyelet hashahar "],
      hebrew_name: ["איילת השחר "],
    },
    {
      city_symbol: ["294 "],
      english_name: ["elon "],
      hebrew_name: ["אילון "],
    },
    {
      city_symbol: ["1126 "],
      english_name: ["elot "],
      hebrew_name: ["אילות "],
    },
    {
      city_symbol: ["49 "],
      english_name: ["ilaniyya "],
      hebrew_name: ["אילניה "],
    },
    {
      city_symbol: ["2600 "],
      english_name: ["elat"],
      hebrew_name: ["אילת"],
    },
    {
      city_symbol: ["1336"],
      english_name: ["irus "],
      hebrew_name: ["אירוס "],
    },
    {
      city_symbol: ["3762 "],
      english_name: ["itamar "],
      hebrew_name: ["איתמר "],
    },
    {
      city_symbol: ["37 "],
      english_name: ["etan "],
      hebrew_name: ["איתן "],
    },
    {
      city_symbol: ["886 "],
      english_name: ["etanim "],
      hebrew_name: ["איתנים "],
    },
    {
      city_symbol: ["478 "],
      english_name: ["iksal "],
      hebrew_name: ["אכסאל "],
    },
    {
      city_symbol: ["1359 "],
      english_name: ["al sayyid "],
      hebrew_name: ["אל סייד "],
    },
    {
      city_symbol: ["1339 "],
      english_name: ["al-azy "],
      hebrew_name: ["אל-עזי "],
    },
    {
      city_symbol: ["1316 "],
      english_name: ["al-aryan "],
      hebrew_name: ["אל-עריאן "],
    },
    {
      city_symbol: ["4003 "],
      english_name: ["el-rom "],
      hebrew_name: ["אל-רום "],
    },
    {
      city_symbol: ["1145 "],
      english_name: ["alumma "],
      hebrew_name: ["אלומה "],
    },
    {
      city_symbol: ["330 "],
      english_name: ["alummot "],
      hebrew_name: ["אלומות "],
    },
    {
      city_symbol: ["1182 "],
      english_name: ["allon hagalil "],
      hebrew_name: ["אלון הגליל "],
    },
    {
      city_symbol: ["3579 "],
      english_name: ["elon more "],
      hebrew_name: ["אלון מורה "],
    },
    {
      city_symbol: ["3604 "],
      english_name: ["allon shevut "],
      hebrew_name: ["אלון שבות "],
    },
    {
      city_symbol: ["429 "],
      english_name: ["allone abba "],
      hebrew_name: ["אלוני אבא "],
    },
    {
      city_symbol: ["4017 "],
      english_name: ["allone habashan "],
      hebrew_name: ["אלוני הבשן "],
    },
    {
      city_symbol: ["868 "],
      english_name: ["allone yizhaq "],
      hebrew_name: ["אלוני יצחק "],
    },
    {
      city_symbol: ["285 "],
      english_name: ["allonim "],
      hebrew_name: ["אלונים "],
    },
    {
      city_symbol: ["4002 "],
      english_name: ["eli al "],
      hebrew_name: ["אלי-עד "],
    },
    {
      city_symbol: ["1365 "],
      english_name: ["eliav "],
      hebrew_name: ["אליאב "],
    },
    {
      city_symbol: ["41 "],
      english_name: ["elyakhin "],
      hebrew_name: ["אליכין "],
    },
    {
      city_symbol: ["1248 "],
      english_name: ["elifaz "],
      hebrew_name: ["אליפז "],
    },
    {
      city_symbol: ["730 "],
      english_name: ["elifelet "],
      hebrew_name: ["אליפלט "],
    },
    {
      city_symbol: ["682 "],
      english_name: ["elyaqim "],
      hebrew_name: ["אליקים "],
    },
    {
      city_symbol: ["204 "],
      english_name: ["elyashiv "],
      hebrew_name: ["אלישיב "],
    },
    {
      city_symbol: ["841 "],
      english_name: ["elishama "],
      hebrew_name: ["אלישמע "],
    },
    {
      city_symbol: ["1125 "],
      english_name: ["almagor "],
      hebrew_name: ["אלמגור "],
    },
    {
      city_symbol: ["3556 "],
      english_name: ["almog "],
      hebrew_name: ["אלמוג "],
    },
    {
      city_symbol: ["1309 "],
      english_name: ["el'ad "],
      hebrew_name: ["אלעד "],
    },
    {
      city_symbol: ["3618 "],
      english_name: ["el'azar "],
      hebrew_name: ["אלעזר "],
    },
    {
      city_symbol: ["3750 "],
      english_name: ["alfe menashe "],
      hebrew_name: ["אלפי מנשה "],
    },
    {
      city_symbol: ["603 "],
      english_name: ["elqosh "],
      hebrew_name: ["אלקוש "],
    },
    {
      city_symbol: ["3560 "],
      english_name: ["elqana "],
      hebrew_name: ["אלקנה "],
    },
    {
      city_symbol: ["772 "],
      english_name: ["emunim "],
      hebrew_name: ["אמונים "],
    },
    {
      city_symbol: ["1064 "],
      english_name: ["amirim "],
      hebrew_name: ["אמירים "],
    },
    {
      city_symbol: ["1253 "],
      english_name: ["amnun "],
      hebrew_name: ["אמנון "],
    },
    {
      city_symbol: ["23 "],
      english_name: ["amazya "],
      hebrew_name: ["אמציה "],
    },
    {
      city_symbol: ["4012 "],
      english_name: ["ani'am "],
      hebrew_name: ["אניעם "],
    },
    {
      city_symbol: ["960 "],
      english_name: ["asad "],
      hebrew_name: ["אסד )שבט( "],
    },
    {
      city_symbol: ["3754 "],
      english_name: ["asefar "],
      hebrew_name: ["אספר "],
    },
    {
      city_symbol: ["529 "],
      english_name: ["i'billin "],
      hebrew_name: ["אעבלין "],
    },
    {
      city_symbol: ["963 "],
      english_name: ["a'sam "],
      hebrew_name: ["אעצם )שבט( "],
    },
    {
      city_symbol: ["959 "],
      english_name: ["afeinish "],
      hebrew_name: ["אפיניש )שבט( "],
    },
    {
      city_symbol: ["4301 "],
      english_name: ["afiq "],
      hebrew_name: ["אפיק "],
    },
    {
      city_symbol: ["176 "],
      english_name: ["afiqim "],
      hebrew_name: ["אפיקים "],
    },
    {
      city_symbol: ["313 "],
      english_name: ["afeq "],
      hebrew_name: ["אפק "],
    },
    {
      city_symbol: ["3650 "],
      english_name: ["efrat "],
      hebrew_name: ["אפרת "],
    },
    {
      city_symbol: ["701 "],
      english_name: ["arbel "],
      hebrew_name: ["ארבל "],
    },
    {
      city_symbol: ["3598 "],
      english_name: ["argaman "],
      hebrew_name: ["ארגמן "],
    },
    {
      city_symbol: ["714 "],
      english_name: ["erez "],
      hebrew_name: ["ארז "],
    },
    {
      city_symbol: ["3570 "],
      english_name: ["ari'el "],
      hebrew_name: ["אריאל "],
    },
    {
      city_symbol: ["1324 "],
      english_name: ["arsuf "],
      hebrew_name: ["ארסוף "],
    },
    {
      city_symbol: ["71 "],
      english_name: ["eshbol "],
      hebrew_name: ["אשבול "],
    },
    {
      city_symbol: ["1276 "],
      english_name: ["nahal eshbal "],
      hebrew_name: ["אשבל "],
    },
    {
      city_symbol: ["70 "],
      english_name: ["ashdod "],
      hebrew_name: ["אשדוד "],
    },
    {
      city_symbol: ["199 "],
      english_name: ["ashdot ya'aqov(ihud) "],
      hebrew_name: ["אשדות יעקב )איחוד( "],
    },
    {
      city_symbol: ["188 "],
      english_name: ["ashdot ya'aqov(me'uh "],
      hebrew_name: ["אשדות יעקב )מאוחד( "],
    },
    {
      city_symbol: ["1188 "],
      english_name: ["eshhar "],
      hebrew_name: ["אשחר "],
    },
    {
      city_symbol: ["3722 "],
      english_name: ["eshkolot "],
      hebrew_name: ["אשכולות "],
    },
    {
      city_symbol: ["2021 "],
      english_name: ["eshel hanasi "],
      hebrew_name: ["אשל הנשיא "],
    },
    {
      city_symbol: ["1152"],
      english_name: ["ashalim"],
      hebrew_name: ["אשלים"],
    },
    {
      city_symbol: ["7100"],
      english_name: ["ashqelon"],
      hebrew_name: ["אשקלון"],
    },
    {
      city_symbol: ["1256 "],
      english_name: ["asherat "],
      hebrew_name: ["אשרת "],
    },
    {
      city_symbol: ["740 "],
      english_name: ["eshta'ol "],
      hebrew_name: ["אשתאול "],
    },
    {
      city_symbol: ["1298 "],
      english_name: ["etgar "],
      hebrew_name: ["אתגר "],
    },
    {
      city_symbol: ["6000 "],
      english_name: ["baqa al-gharbiyye "],
      hebrew_name: ["באקה אל-גרביה "],
    },
    {
      city_symbol: ["21 "],
      english_name: ["be'er ora "],
      hebrew_name: ["באר אורה "],
    },
    {
      city_symbol: ["1376 "],
      english_name: ["beer gannim "],
      hebrew_name: ["באר גנים "],
    },
    {
      city_symbol: ["155 "],
      english_name: ["be'er tuveya "],
      hebrew_name: ["באר טוביה "],
    },
    {
      city_symbol: ["2530 "],
      english_name: ["be'er ya'aqov "],
      hebrew_name: ["באר יעקב "],
    },
    {
      city_symbol: ["1278 "],
      english_name: ["be'er milka "],
      hebrew_name: ["באר מילכה "],
    },
    {
      city_symbol: ["9000 "],
      english_name: ["be'er sheva "],
      hebrew_name: ["באר שבע "],
    },
    {
      city_symbol: ["450 "],
      english_name: ["be'erot yizhaq "],
      hebrew_name: ["בארות יצחק "],
    },
    {
      city_symbol: ["697 "],
      english_name: ["be'erotayim "],
      hebrew_name: ["בארותיים "],
    },
    {
      city_symbol: ["399 "],
      english_name: ["be'eri "],
      hebrew_name: ["בארי "],
    },
    {
      city_symbol: ["559 "],
      english_name: ["bustan hagalil "],
      hebrew_name: ["בוסתן הגליל "],
    },
    {
      city_symbol: ["482 "],
      english_name: ["bu'eine-nujeidat "],
      hebrew_name: ["בועיינה-נוג'ידאת "],
    },
    {
      city_symbol: ["4001 "],
      english_name: ["buq'ata "],
      hebrew_name: ["בוקעאתא "],
    },
    {
      city_symbol: ["698 "],
      english_name: ["burgeta "],
      hebrew_name: ["בורגתה "],
    },
    {
      city_symbol: ["2043 "],
      english_name: ["bahan "],
      hebrew_name: ["בחן "],
    },
    {
      city_symbol: ["762 "],
      english_name: ["bitha "],
      hebrew_name: ["בטחה "],
    },
    {
      city_symbol: ["234 "],
      english_name: ["bizzaron "],
      hebrew_name: ["ביצרון "],
    },
    {
      city_symbol: ["998 "],
      english_name: ["bir el-maksur "],
      hebrew_name: ["ביר אל-מכסור "],
    },
    {
      city_symbol: ["1348 "],
      english_name: ["bir hadage "],
      hebrew_name: ["ביר הדאג' "],
    },
    {
      city_symbol: ["368 "],
      english_name: ["biriyya "],
      hebrew_name: ["ביריה "],
    },
    {
      city_symbol: ["317 "],
      english_name: ["bet oren "],
      hebrew_name: ["בית אורן "],
    },
    {
      city_symbol: ["3574 "],
      english_name: ["bet el "],
      hebrew_name: ["בית אל "],
    },
    {
      city_symbol: ["562 "],
      english_name: ["bet el'azari "],
      hebrew_name: ["בית אלעזרי "],
    },
    {
      city_symbol: ["95 "],
      english_name: ["bet alfa "],
      hebrew_name: ["בית אלפא "],
    },
    {
      city_symbol: ["3652 "],
      english_name: ["bet arye "],
      hebrew_name: ["בית אריה "],
    },
    {
      city_symbol: ["1076 "],
      english_name: ["bet berl "],
      hebrew_name: ["בית ברל "],
    },
    {
      city_symbol: ["480 "],
      english_name: ["beit jann "],
      hebrew_name: ["בית ג'ן "],
    },
    {
      city_symbol: ["619 "],
      english_name: ["bet guvrin "],
      hebrew_name: ["בית גוברין "],
    },
    {
      city_symbol: ["571 "],
      english_name: ["bet gamli'el "],
      hebrew_name: ["בית גמליאל "],
    },
    {
      city_symbol: ["466 "],
      english_name: ["bet dagan "],
      hebrew_name: ["בית דגן "],
    },
    {
      city_symbol: ["723 "],
      english_name: ["bet hagaddi "],
      hebrew_name: ["בית הגדי "],
    },
    {
      city_symbol: ["373 "],
      english_name: ["bet halevi "],
      hebrew_name: ["בית הלוי "],
    },
    {
      city_symbol: ["322 "],
      english_name: ["bet hillel "],
      hebrew_name: ["בית הלל "],
    },
    {
      city_symbol: ["572 "],
      english_name: ["bet haemeq "],
      hebrew_name: ["בית העמק "],
    },
    {
      city_symbol: ["3645 "],
      english_name: ["bet haarava "],
      hebrew_name: ["בית הערבה "],
    },
    {
      city_symbol: ["242 "],
      english_name: ["bet hashitta "],
      hebrew_name: ["בית השיטה "],
    },
    {
      city_symbol: ["353 "],
      english_name: ["bet zeid "],
      hebrew_name: ["בית זיד "],
    },
    {
      city_symbol: ["710 "],
      english_name: ["bet zayit "],
      hebrew_name: ["בית זית "],
    },
    {
      city_symbol: ["143 "],
      english_name: ["bet zera "],
      hebrew_name: ["בית זרע "],
    },
    {
      city_symbol: ["3575 "],
      english_name: ["bet horon "],
      hebrew_name: ["בית חורון "],
    },
    {
      city_symbol: ["877 "],
      english_name: ["bet herut "],
      hebrew_name: ["בית חירות "],
    },
    {
      city_symbol: ["2033 "],
      english_name: ["bet hilqiyya "],
      hebrew_name: ["בית חלקיה "],
    },
    {
      city_symbol: ["159 "],
      english_name: ["bet hanan "],
      hebrew_name: ["בית חנן "],
    },
    {
      city_symbol: ["800 "],
      english_name: ["bet hananya "],
      hebrew_name: ["בית חנניה "],
    },
    {
      city_symbol: ["1050 "],
      english_name: ["bet hashmonay "],
      hebrew_name: ["בית חשמונאי "],
    },
    {
      city_symbol: ["288 "],
      english_name: ["bet yehoshua "],
      hebrew_name: ["בית יהושע "],
    },
    {
      city_symbol: ["265 "],
      english_name: ["bet yosef "],
      hebrew_name: ["בית יוסף "],
    },
    {
      city_symbol: ["200 "],
      english_name: ["bet yannay "],
      hebrew_name: ["בית ינאי "],
    },
    {
      city_symbol: ["326 "],
      english_name: ["bet yizhaq-sh. hefer "],
      hebrew_name: ["בית יצחק-שער חפר "],
    },
    {
      city_symbol: ["430 "],
      english_name: ["bet lehem hagelilit "],
      hebrew_name: ["בית לחם הגלילית "],
    },
    {
      city_symbol: ["751 "],
      english_name: ["bet me'ir "],
      hebrew_name: ["בית מאיר "],
    },
    {
      city_symbol: ["784 "],
      english_name: ["bet nehemya "],
      hebrew_name: ["בית נחמיה "],
    },
    {
      city_symbol: ["16 "],
      english_name: ["bet nir "],
      hebrew_name: ["בית ניר "],
    },
    {
      city_symbol: ["672 "],
      english_name: ["bet neqofa "],
      hebrew_name: ["בית נקופה "],
    },
    {
      city_symbol: ["202 "],
      english_name: ["bet oved "],
      hebrew_name: ["בית עובד "],
    },
    {
      city_symbol: ["301 "],
      english_name: ["bet uzzi'el "],
      hebrew_name: ["בית עוזיאל "],
    },
    {
      city_symbol: ["756 "],
      english_name: ["bet ezra "],
      hebrew_name: ["בית עזרא "],
    },
    {
      city_symbol: ["604 "],
      english_name: ["bet arif "],
      hebrew_name: ["בית עריף "],
    },
    {
      city_symbol: ["212 "],
      english_name: ["bet zevi "],
      hebrew_name: ["בית צבי "],
    },
    {
      city_symbol: ["598 "],
      english_name: ["bet qama "],
      hebrew_name: ["בית קמה "],
    },
    {
      city_symbol: ["365 "],
      english_name: ["bet qeshet "],
      hebrew_name: ["בית קשת "],
    },
    {
      city_symbol: ["848 "],
      english_name: ["bet rabban "],
      hebrew_name: ["בית רבן "],
    },
    {
      city_symbol: ["1162 "],
      english_name: ["bet rimmon "],
      hebrew_name: ["בית רימון "],
    },
    {
      city_symbol: ["9200 "],
      english_name: ["bet she'an "],
      hebrew_name: ["בית שאן "],
    },
    {
      city_symbol: ["2610 "],
      english_name: ["bet shemesh "],
      hebrew_name: ["בית שמש "],
    },
    {
      city_symbol: ["248 "],
      english_name: ["bet she'arim "],
      hebrew_name: ["בית שערים "],
    },
    {
      city_symbol: ["747 "],
      english_name: ["bet shiqma "],
      hebrew_name: ["בית שקמה "],
    },
    {
      city_symbol: ["252 "],
      english_name: ["bitan aharon "],
      hebrew_name: ["ביתן אהרן "],
    },
    {
      city_symbol: ["3780 "],
      english_name: ["betar illit "],
      hebrew_name: ["ביתר עילית "],
    },
    {
      city_symbol: ["94 "],
      english_name: ["balfuriyya "],
      hebrew_name: ["בלפוריה "],
    },
    {
      city_symbol: ["760 "],
      english_name: ["ben zakkay "],
      hebrew_name: ["בן זכאי "],
    },
    {
      city_symbol: ["712 "],
      english_name: ["ben ammi "],
      hebrew_name: ["בן עמי "],
    },
    {
      city_symbol: ["1084 "],
      english_name: ["ben shemen(k.no'ar) "],
      hebrew_name: ["בן שמן )כפר נוער( "],
    },
    {
      city_symbol: ["2013 "],
      english_name: ["ben shemen (moshav) "],
      hebrew_name: ["בן שמן )מושב( "],
    },
    {
      city_symbol: ["6100 "],
      english_name: ["bene beraq "],
      hebrew_name: ["בני ברק "],
    },
    {
      city_symbol: ["1368 "],
      english_name: ["bne dkalim "],
      hebrew_name: ["בני דקלים "],
    },
    {
      city_symbol: ["592 "],
      english_name: ["bene darom "],
      hebrew_name: ["בני דרום "],
    },
    {
      city_symbol: ["386 "],
      english_name: ["bene deror "],
      hebrew_name: ["בני דרור "],
    },
    {
      city_symbol: ["4015 "],
      english_name: ["bene yehuda "],
      hebrew_name: ["בני יהודה "],
    },
    {
      city_symbol: ["1363 "],
      english_name: ["bene nezarim "],
      hebrew_name: ["בני נצרים "],
    },
    {
      city_symbol: ["448 "],
      english_name: ["bene atarot "],
      hebrew_name: ["בני עטרות "],
    },
    {
      city_symbol: ["1066 "],
      english_name: ["bene ayish "],
      hebrew_name: ['בני עי"ש '],
    },
    {
      city_symbol: ["418 "],
      english_name: ["bene ziyyon "],
      hebrew_name: ["בני ציון "],
    },
    {
      city_symbol: ["588 "],
      english_name: ["bene re'em "],
      hebrew_name: ["בני ראם "],
    },
    {
      city_symbol: ["685 "],
      english_name: ["benaya "],
      hebrew_name: ["בניה "],
    },
    {
      city_symbol: ["9800 "],
      english_name: ["binyamina "],
      hebrew_name: ["בנימינה-גבעת עדה "],
    },
    {
      city_symbol: ["1326 "],
      english_name: ["basma "],
      hebrew_name: ['בסמ"ה '],
    },
    {
      city_symbol: ["944 "],
      english_name: ["basmat tab'un "],
      hebrew_name: ["בסמת טבעון "],
    },
    {
      city_symbol: ["483 "],
      english_name: ["bi ne "],
      hebrew_name: ["בענה "],
    },
    {
      city_symbol: ["389 "],
      english_name: ["bazra "],
      hebrew_name: ["בצרה "],
    },
    {
      city_symbol: ["589 "],
      english_name: ["bezet "],
      hebrew_name: ["בצת "],
    },
    {
      city_symbol: ["864 "],
      english_name: ["beqoa "],
      hebrew_name: ["בקוע "],
    },
    {
      city_symbol: ["3612 "],
      english_name: ["beqa'ot "],
      hebrew_name: ["בקעות "],
    },
    {
      city_symbol: ["823 "],
      english_name: ["bar giyyora "],
      hebrew_name: ["בר גיורא "],
    },
    {
      city_symbol: ["1191 "],
      english_name: ["bar yohay "],
      hebrew_name: ["בר יוחאי "],
    },
    {
      city_symbol: ["3744 "],
      english_name: ["brukhin "],
      hebrew_name: ["ברוכין "],
    },
    {
      city_symbol: ["428 "],
      english_name: ["beror hayil "],
      hebrew_name: ["ברור חיל "],
    },
    {
      city_symbol: ["2060 "],
      english_name: ["berosh "],
      hebrew_name: ["ברוש "],
    },
    {
      city_symbol: ["3710 "],
      english_name: ["berakha "],
      hebrew_name: ["ברכה "],
    },
    {
      city_symbol: ["746 "],
      english_name: ["berekhya "],
      hebrew_name: ["ברכיה "],
    },
    {
      city_symbol: ["667 "],
      english_name: ["bar'am "],
      hebrew_name: ["ברעם "],
    },
    {
      city_symbol: ["141 "],
      english_name: ["baraq "],
      hebrew_name: ["ברק "],
    },
    {
      city_symbol: ["617 "],
      english_name: ["barqay "],
      hebrew_name: ["ברקאי "],
    },
    {
      city_symbol: ["3654 "],
      english_name: ["barqan "],
      hebrew_name: ["ברקן "],
    },
    {
      city_symbol: ["2038 "],
      english_name: ["bareqet "],
      hebrew_name: ["ברקת "],
    },
    {
      city_symbol: ["1323 "],
      english_name: ["bat hadar "],
      hebrew_name: ["בת הדר "],
    },
    {
      city_symbol: ["1361 "],
      english_name: ["bat hen "],
      hebrew_name: ["בת חן "],
    },
    {
      city_symbol: ["1319 "],
      english_name: ["bat hefer "],
      hebrew_name: ["בת חפר "],
    },
    {
      city_symbol: ["1401 "],
      english_name: ["bat hazor "],
      hebrew_name: ["בת חצור "],
    },
    {
      city_symbol: ["6200 "],
      english_name: ["bat yam "],
      hebrew_name: ["בת ים "],
    },
    {
      city_symbol: ["3794 "],
      english_name: ["bat ayin "],
      hebrew_name: ["בת עין "],
    },
    {
      city_symbol: ["33 "],
      english_name: ["bat shelomo "],
      hebrew_name: ["בת שלמה "],
    },
    {
      city_symbol: ["1292 "],
      english_name: ["judeide-maker "],
      hebrew_name: ["ג'דיידה-מכר "],
    },
    {
      city_symbol: ["485 "],
      english_name: ["julis "],
      hebrew_name: ["ג'ולס "],
    },
    {
      city_symbol: ["627 "],
      english_name: ["jaljulye "],
      hebrew_name: ["ג'לג'וליה "],
    },
    {
      city_symbol: ["976 "],
      english_name: ["junnabib "],
      hebrew_name: ["ג'נאביב )שבט( "],
    },
    {
      city_symbol: ["541 "],
      english_name: ["jisr az-zarqa "],
      hebrew_name: ["ג'סר א-זרקא "],
    },
    {
      city_symbol: ["487 "],
      english_name: ["jish(gush halav) "],
      hebrew_name: ["ג'ש )גוש חלב( "],
    },
    {
      city_symbol: ["628 "],
      english_name: ["jaat "],
      hebrew_name: ["ג'ת "],
    },
    {
      city_symbol: ["872 "],
      english_name: ["ge'ule teman "],
      hebrew_name: ["גאולי תימן "],
    },
    {
      city_symbol: ["379 "],
      english_name: ["ge'ulim "],
      hebrew_name: ["גאולים "],
    },
    {
      city_symbol: ["853 "],
      english_name: ["ge'alya "],
      hebrew_name: ["גאליה "],
    },
    {
      city_symbol: ["352 "],
      english_name: ["gevulot "],
      hebrew_name: ["גבולות "],
    },
    {
      city_symbol: ["424 "],
      english_name: ["gevim "],
      hebrew_name: ["גבים "],
    },
    {
      city_symbol: ["86 "],
      english_name: ["geva "],
      hebrew_name: ["גבע "],
    },
    {
      city_symbol: ["3763 "],
      english_name: ["geva binyamin "],
      hebrew_name: ["גבע בנימין "],
    },
    {
      city_symbol: ["683 "],
      english_name: ["geva karmel "],
      hebrew_name: ["גבע כרמל "],
    },
    {
      city_symbol: ["2014 "],
      english_name: ["giv'olim "],
      hebrew_name: ["גבעולים "],
    },
    {
      city_symbol: ["3644 "],
      english_name: ["giv'on hahadasha "],
      hebrew_name: ["גבעון החדשה "],
    },
    {
      city_symbol: ["1344 "],
      english_name: ["geva'ot bar "],
      hebrew_name: ["גבעות בר "],
    },
    {
      city_symbol: ["1293 "],
      english_name: ["giv'at avni "],
      hebrew_name: ["גבעת אבני "],
    },
    {
      city_symbol: ["1288 "],
      english_name: ["giv'at ela "],
      hebrew_name: ["גבעת אלה "],
    },
    {
      city_symbol: ["147 "],
      english_name: ["giv'at brenner "],
      hebrew_name: ["גבעת ברנר "],
    },
    {
      city_symbol: ["870 "],
      english_name: ["giv'at hashelosha "],
      hebrew_name: ["גבעת השלושה "],
    },
    {
      city_symbol: ["3730 "],
      english_name: ["giv'at ze'ev "],
      hebrew_name: ["גבעת זאב "],
    },
    {
      city_symbol: ["207 "],
      english_name: ["giv'at hen "],
      hebrew_name: ['גבעת ח"ן '],
    },
    {
      city_symbol: ["2018 "],
      english_name: ["giv'at hayyim (ihud) "],
      hebrew_name: ["גבעת חיים )איחוד( "],
    },
    {
      city_symbol: ["173 "],
      english_name: ["giv'at hayyim(me'uha "],
      hebrew_name: ["גבעת חיים )מאוחד( "],
    },
    {
      city_symbol: ["4021 "],
      english_name: ["giv'at yo'av "],
      hebrew_name: ["גבעת יואב "],
    },
    {
      city_symbol: ["787 "],
      english_name: ["giv'at ye'arim "],
      hebrew_name: ["גבעת יערים "],
    },
    {
      city_symbol: ["919 "],
      english_name: ["giv'at yesha'yahu "],
      hebrew_name: ["גבעת ישעיהו "],
    },
    {
      city_symbol: ["802 "],
      english_name: ["giv'at koah "],
      hebrew_name: ['גבעת כ"ח '],
    },
    {
      city_symbol: ["360 "],
      english_name: ["giv'at nili "],
      hebrew_name: ['גבעת ניל"י '],
    },
    {
      city_symbol: ["703 "],
      english_name: ["giv'at oz "],
      hebrew_name: ["גבעת עוז "],
    },
    {
      city_symbol: ["681 "],
      english_name: ["giv'at shemu'el "],
      hebrew_name: ["גבעת שמואל "],
    },
    {
      city_symbol: ["566 "],
      english_name: ["giv'at shemesh "],
      hebrew_name: ["גבעת שמש "],
    },
    {
      city_symbol: ["1077 "],
      english_name: ["giv'at shappira "],
      hebrew_name: ["גבעת שפירא "],
    },
    {
      city_symbol: ["793 "],
      english_name: ["giv'ati "],
      hebrew_name: ["גבעתי "],
    },
    {
      city_symbol: ["6300 "],
      english_name: ["giv'atayim "],
      hebrew_name: ["גבעתיים "],
    },
    {
      city_symbol: ["342 "],
      english_name: ["gevar'am "],
      hebrew_name: ["גברעם "],
    },
    {
      city_symbol: ["133 "],
      english_name: ["gevat "],
      hebrew_name: ["גבת "],
    },
    {
      city_symbol: ["35 "],
      english_name: ["gadot "],
      hebrew_name: ["גדות "],
    },
    {
      city_symbol: ["145 "],
      english_name: ["gadish "],
      hebrew_name: ["גדיש "],
    },
    {
      city_symbol: ["442 "],
      english_name: ["gid'ona "],
      hebrew_name: ["גדעונה "],
    },
    {
      city_symbol: ["2550 "],
      english_name: ["gedera "],
      hebrew_name: ["גדרה "],
    },
    {
      city_symbol: ["852 "],
      english_name: ["gonen "],
      hebrew_name: ["גונן "],
    },
    {
      city_symbol: ["755 "],
      english_name: ["goren "],
      hebrew_name: ["גורן "],
    },
    {
      city_symbol: ["1219 "],
      english_name: ["gornot hagalil "],
      hebrew_name: ["גורנות הגליל "],
    },
    {
      city_symbol: ["457 "],
      english_name: ["gazit "],
      hebrew_name: ["גזית "],
    },
    {
      city_symbol: ["370 "],
      english_name: ["gezer "],
      hebrew_name: ["גזר "],
    },
    {
      city_symbol: ["706 "],
      english_name: ["ge'a "],
      hebrew_name: ["גיאה "],
    },
    {
      city_symbol: ["196 "],
      english_name: ["gibbeton "],
      hebrew_name: ["גיבתון "],
    },
    {
      city_symbol: ["1043 "],
      english_name: ["gizo "],
      hebrew_name: ["גיזו "],
    },
    {
      city_symbol: ["1204 "],
      english_name: ["gilon "],
      hebrew_name: ["גילון "],
    },
    {
      city_symbol: ["736 "],
      english_name: ["gilat "],
      hebrew_name: ["גילת "],
    },
    {
      city_symbol: ["262 "],
      english_name: ["ginnosar "],
      hebrew_name: ["גינוסר "],
    },
    {
      city_symbol: ["92 "],
      english_name: ["ginnegar "],
      hebrew_name: ["גיניגר "],
    },
    {
      city_symbol: ["863 "],
      english_name: ["ginnaton "],
      hebrew_name: ["גינתון "],
    },
    {
      city_symbol: ["1206 "],
      english_name: ["gitta "],
      hebrew_name: ["גיתה "],
    },
    {
      city_symbol: ["3613 "],
      english_name: ["gittit "],
      hebrew_name: ["גיתית "],
    },
    {
      city_symbol: ["393 "],
      english_name: ["gal'on "],
      hebrew_name: ["גלאון "],
    },
    {
      city_symbol: ["3606 "],
      english_name: ["gilgal "],
      hebrew_name: ["גלגל "],
    },
    {
      city_symbol: ["346 "],
      english_name: ["gelil yam "],
      hebrew_name: ["גליל ים "],
    },
    {
      city_symbol: ["369 "],
      english_name: ["even yizhaq(gal'ed) "],
      hebrew_name: ["גלעד )אבן יצחק( "],
    },
    {
      city_symbol: ["745 "],
      english_name: ["gimzo "],
      hebrew_name: ["גמזו "],
    },
    {
      city_symbol: ["1072 "],
      english_name: ["gan hadarom "],
      hebrew_name: ["גן הדרום "],
    },
    {
      city_symbol: ["225 "],
      english_name: ["gan hashomeron "],
      hebrew_name: ["גן השומרון "],
    },
    {
      city_symbol: ["239 "],
      english_name: ["gan hayyim "],
      hebrew_name: ["גן חיים "],
    },
    {
      city_symbol: ["734 "],
      english_name: ["gan yoshiyya "],
      hebrew_name: ["גן יאשיה "],
    },
    {
      city_symbol: ["166 "],
      english_name: ["gan yavne "],
      hebrew_name: ["גן יבנה "],
    },
    {
      city_symbol: ["1274 "],
      english_name: ["gan ner "],
      hebrew_name: ["גן נר "],
    },
    {
      city_symbol: ["311 "],
      english_name: ["gan soreq "],
      hebrew_name: ["גן שורק "],
    },
    {
      city_symbol: ["144 "],
      english_name: ["gan shelomo "],
      hebrew_name: ["גן שלמה "],
    },
    {
      city_symbol: ["72 "],
      english_name: ["gan shemu'el "],
      hebrew_name: ["גן שמואל "],
    },
    {
      city_symbol: ["836 "],
      english_name: ["gannot "],
      hebrew_name: ["גנות "],
    },
    {
      city_symbol: ["549 "],
      english_name: ["gannot hadar "],
      hebrew_name: ["גנות הדר "],
    },
    {
      city_symbol: ["1103 "],
      english_name: ["ganne hadar "],
      hebrew_name: ["גני הדר "],
    },
    {
      city_symbol: ["1371 "],
      english_name: ["ganne tal "],
      hebrew_name: ["גני טל "],
    },
    {
      city_symbol: ["862 "],
      english_name: ["ganne yohanan "],
      hebrew_name: ["גני יוחנן "],
    },
    {
      city_symbol: ["3823 "],
      english_name: ["ganne modiin "],
      hebrew_name: ["גני מודיעין "],
    },
    {
      city_symbol: ["218 "],
      english_name: ["ganne am "],
      hebrew_name: ["גני עם "],
    },
    {
      city_symbol: ["229 "],
      english_name: ["ganne tiqwa "],
      hebrew_name: ["גני תקווה "],
    },
    {
      city_symbol: ["842 "],
      english_name: ["ga'ash "],
      hebrew_name: ["געש "],
    },
    {
      city_symbol: ["463 "],
      english_name: ["ga'ton "],
      hebrew_name: ["געתון "],
    },
    {
      city_symbol: ["39 "],
      english_name: ["gefen "],
      hebrew_name: ["גפן "],
    },
    {
      city_symbol: ["1129 "],
      english_name: ["gerofit "],
      hebrew_name: ["גרופית "],
    },
    {
      city_symbol: ["4022 "],
      english_name: ["geshur "],
      hebrew_name: ["גשור "],
    },
    {
      city_symbol: ["305 "],
      english_name: ["gesher "],
      hebrew_name: ["גשר "],
    },
    {
      city_symbol: ["574 "],
      english_name: ["gesher haziw "],
      hebrew_name: ["גשר הזיו "],
    },
    {
      city_symbol: ["340 "],
      english_name: ["gat(qibbuz) "],
      hebrew_name: ["גת )קיבוץ( "],
    },
    {
      city_symbol: ["128 "],
      english_name: ["gat rimmon "],
      hebrew_name: ["גת רימון "],
    },
    {
      city_symbol: ["494 "],
      english_name: ["daliyat al-karmel "],
      hebrew_name: ["דאלית אל-כרמל "],
    },
    {
      city_symbol: ["146 "],
      english_name: ["devora "],
      hebrew_name: ["דבורה "],
    },
    {
      city_symbol: ["489 "],
      english_name: ["dabburye "],
      hebrew_name: ["דבוריה "],
    },
    {
      city_symbol: ["849 "],
      english_name: ["devira "],
      hebrew_name: ["דבירה "],
    },
    {
      city_symbol: ["407 "],
      english_name: ["daverat "],
      hebrew_name: ["דברת "],
    },
    {
      city_symbol: ["62 "],
      english_name: ["deganya alef "],
      hebrew_name: ["דגניה א' "],
    },
    {
      city_symbol: ["79 "],
      english_name: ["deganya bet "],
      hebrew_name: ["דגניה ב' "],
    },
    {
      city_symbol: ["1067 "],
      english_name: ["dovev "],
      hebrew_name: ['דוב"ב '],
    },
    {
      city_symbol: ["3747 "],
      english_name: ["dolev "],
      hebrew_name: ["דולב "],
    },
    {
      city_symbol: ["738 "],
      english_name: ["dor "],
      hebrew_name: ["דור "],
    },
    {
      city_symbol: ["336 "],
      english_name: ["dorot "],
      hebrew_name: ["דורות "],
    },
    {
      city_symbol: ["475 "],
      english_name: ["dahi "],
      hebrew_name: ["דחי "],
    },
    {
      city_symbol: ["490 "],
      english_name: ["deir al-asad "],
      hebrew_name: ["דייר אל-אסד "],
    },
    {
      city_symbol: ["492 "],
      english_name: ["deir hanna "],
      hebrew_name: ["דייר חנא "],
    },
    {
      city_symbol: ["493 "],
      english_name: ["deir rafat "],
      hebrew_name: ["דייר ראפאת "],
    },
    {
      city_symbol: ["2200 "],
      english_name: ["dimona "],
      hebrew_name: ["דימונה "],
    },
    {
      city_symbol: ["2063 "],
      english_name: ["dishon "],
      hebrew_name: ["דישון "],
    },
    {
      city_symbol: ["300 "],
      english_name: ["daliyya "],
      hebrew_name: ["דליה "],
    },
    {
      city_symbol: ["431 "],
      english_name: ["dalton "],
      hebrew_name: ["דלתון "],
    },
    {
      city_symbol: ["1317 "],
      english_name: ["demeide "],
      hebrew_name: ["דמיידה "],
    },
    {
      city_symbol: ["303 "],
      english_name: ["dan "],
      hebrew_name: ["דן "],
    },
    {
      city_symbol: ["302 "],
      english_name: ["dafna "],
      hebrew_name: ["דפנה "],
    },
    {
      city_symbol: ["1241 "],
      english_name: ["deqel "],
      hebrew_name: ["דקל "],
    },
    {
      city_symbol: ["1349 "],
      english_name: ["derig'at "],
      hebrew_name: ["דריג'את "],
    },
    {
      city_symbol: ["702 "],
      english_name: ["haon "],
      hebrew_name: ["האון "],
    },
    {
      city_symbol: ["675 "],
      english_name: ["habonim "],
      hebrew_name: ["הבונים "],
    },
    {
      city_symbol: ["356 "],
      english_name: ["hagosherim "],
      hebrew_name: ["הגושרים "],
    },
    {
      city_symbol: ["191 "],
      english_name: ["hadar am "],
      hebrew_name: ["הדר עם "],
    },
    {
      city_symbol: ["9700 "],
      english_name: ["hod hasharon "],
      hebrew_name: ["הוד השרון "],
    },
    {
      city_symbol: ["726 "],
      english_name: ["hodiyya "],
      hebrew_name: ["הודיה "],
    },
    {
      city_symbol: ["1322 "],
      english_name: ["hodayot "],
      hebrew_name: ["הודיות "],
    },
    {
      city_symbol: ["1169 "],
      english_name: ["hawashla "],
      hebrew_name: ["הוואשלה )שבט( "],
    },
    {
      city_symbol: ["956 "],
      english_name: ["huzayyel "],
      hebrew_name: ["הוזייל )שבט( "],
    },
    {
      city_symbol: ["1186 "],
      english_name: ["hosha'aya "],
      hebrew_name: ["הושעיה "],
    },
    {
      city_symbol: ["250 "],
      english_name: ["hazorea "],
      hebrew_name: ["הזורע "],
    },
    {
      city_symbol: ["307 "],
      english_name: ["hazore'im "],
      hebrew_name: ["הזורעים "],
    },
    {
      city_symbol: ["434 "],
      english_name: ["hahoterim "],
      hebrew_name: ["החותרים "],
    },
    {
      city_symbol: ["684 "],
      english_name: ["hayogev "],
      hebrew_name: ["היוגב "],
    },
    {
      city_symbol: ["1208 "],
      english_name: ["hilla "],
      hebrew_name: ["הילה "],
    },
    {
      city_symbol: ["377 "],
      english_name: ["hama'pil "],
      hebrew_name: ["המעפיל "],
    },
    {
      city_symbol: ["677 "],
      english_name: ["hasolelim "],
      hebrew_name: ["הסוללים "],
    },
    {
      city_symbol: ["423 "],
      english_name: ["haogen "],
      hebrew_name: ["העוגן "],
    },
    {
      city_symbol: ["3769 "],
      english_name: ["har adar "],
      hebrew_name: ["הר אדר "],
    },
    {
      city_symbol: ["3603 "],
      english_name: ["har gillo "],
      hebrew_name: ["הר גילה "],
    },
    {
      city_symbol: ["1261 "],
      english_name: ["har amasa "],
      hebrew_name: ["הר עמשא "],
    },
    {
      city_symbol: ["464 "],
      english_name: ["har'el "],
      hebrew_name: ["הראל "],
    },
    {
      city_symbol: ["1249 "],
      english_name: ["harduf "],
      hebrew_name: ["הרדוף "],
    },
    {
      city_symbol: ["6400 "],
      english_name: ["herzeliyya "],
      hebrew_name: ["הרצליה "],
    },
    {
      city_symbol: ["1203 "],
      english_name: ["hararit "],
      hebrew_name: ["הררית "],
    },
    {
      city_symbol: ["3639 "],
      english_name: ["wered yeriho "],
      hebrew_name: ["ורד יריחו "],
    },
    {
      city_symbol: ["1133 "],
      english_name: ["wardon "],
      hebrew_name: ["ורדון "],
    },
    {
      city_symbol: ["2742 "],
      english_name: ["zabarga "],
      hebrew_name: ["זבארגה )שבט( "],
    },
    {
      city_symbol: ["815 "],
      english_name: ["zavdi'el "],
      hebrew_name: ["זבדיאל "],
    },
    {
      city_symbol: ["44 "],
      english_name: ["zohar "],
      hebrew_name: ["זוהר "],
    },
    {
      city_symbol: ["584 "],
      english_name: ["ziqim "],
      hebrew_name: ["זיקים "],
    },
    {
      city_symbol: ["788 "],
      english_name: ["zetan "],
      hebrew_name: ["זיתן "],
    },
    {
      city_symbol: ["9300 "],
      english_name: ["zikhron ya'aqov "],
      hebrew_name: ["זכרון יעקב "],
    },
    {
      city_symbol: ["799 "],
      english_name: ["zekharya "],
      hebrew_name: ["זכריה "],
    },
    {
      city_symbol: ["1290 "],
      english_name: ["zemer "],
      hebrew_name: ["זמר "],
    },
    {
      city_symbol: ["1065 "],
      english_name: ["zimrat "],
      hebrew_name: ["זמרת "],
    },
    {
      city_symbol: ["816 "],
      english_name: ["zanoah "],
      hebrew_name: ["זנוח "],
    },
    {
      city_symbol: ["2064 "],
      english_name: ["zeru'a "],
      hebrew_name: ["זרועה "],
    },
    {
      city_symbol: ["975 "],
      english_name: ["zarzir "],
      hebrew_name: ["זרזיר "],
    },
    {
      city_symbol: ["818 "],
      english_name: ["zerahya "],
      hebrew_name: ["זרחיה "],
    },
    {
      city_symbol: ["1321 "],
      english_name: ["khawaled "],
      hebrew_name: ["ח'ואלד "],
    },
    {
      city_symbol: ["986 "],
      english_name: ["khawaled "],
      hebrew_name: ["ח'ואלד )שבט( "],
    },
    {
      city_symbol: ["235 "],
      english_name: ["havazzelet hasharon "],
      hebrew_name: ["חבצלת השרון "],
    },
    {
      city_symbol: ["1110 "],
      english_name: ["hever "],
      hebrew_name: ["חבר "],
    },
    {
      city_symbol: ["3400 "],
      english_name: ["hevron"],
      hebrew_name: ["חברון "],
    },
    {
      city_symbol: ["717 "],
      english_name: ["hagor "],
      hebrew_name: ["חגור "],
    },
    {
      city_symbol: ["3764 "],
      english_name: ["haggai "],
      hebrew_name: ["חגי "],
    },
    {
      city_symbol: ["205 "],
      english_name: ["hogla "],
      hebrew_name: ["חגלה "],
    },
    {
      city_symbol: ["4026 "],
      english_name: ["had-nes "],
      hebrew_name: ["חד-נס "],
    },
    {
      city_symbol: ["618 "],
      english_name: ["hadid "],
      hebrew_name: ["חדיד "],
    },
    {
      city_symbol: ["6500 "],
      english_name: ["hadera "],
      hebrew_name: ["חדרה "],
    },
    {
      city_symbol: ["948 "],
      english_name: ["hujeirat (dahra) "],
      hebrew_name: ["חוג'ייראת )ד'הרה( "],
    },
    {
      city_symbol: ["160 "],
      english_name: ["hulda "],
      hebrew_name: ["חולדה "],
    },
    {
      city_symbol: ["6600 "],
      english_name: ["holon "],
      hebrew_name: ["חולון "],
    },
    {
      city_symbol: ["1239 "],
      english_name: ["holit "],
      hebrew_name: ["חולית "],
    },
    {
      city_symbol: ["253 "],
      english_name: ["hulata "],
      hebrew_name: ["חולתה "],
    },
    {
      city_symbol: ["662 "],
      english_name: ["hosen "],
      hebrew_name: ["חוסן "],
    },
    {
      city_symbol: ["1332 "],
      english_name: ["hussniyya "],
      hebrew_name: ["חוסנייה "],
    },
    {
      city_symbol: ["115 "],
      english_name: ["hofit "],
      hebrew_name: ["חופית "],
    },
    {
      city_symbol: ["374 "],
      english_name: ["huqoq "],
      hebrew_name: ["חוקוק "],
    },
    {
      city_symbol: ["1303 "],
      english_name: ["hura "],
      hebrew_name: ["חורה "],
    },
    {
      city_symbol: ["496 "],
      english_name: ["hurfeish "],
      hebrew_name: ["חורפיש "],
    },
    {
      city_symbol: ["355 "],
      english_name: ["horeshim "],
      hebrew_name: ["חורשים "],
    },
    {
      city_symbol: ["1047 "],
      english_name: ["hazon "],
      hebrew_name: ["חזון "],
    },
    {
      city_symbol: ["219 "],
      english_name: ["hibbat ziyyon "],
      hebrew_name: ["חיבת ציון "],
    },
    {
      city_symbol: ["3643 "],
      english_name: ["hinnanit "],
      hebrew_name: ["חיננית "],
    },
    {
      city_symbol: ["4000"],
      english_name: ["haifa"],
      hebrew_name: ["חיפה"],
    },
    {
      city_symbol: ["162 "],
      english_name: ["herut "],
      hebrew_name: ["חירות "],
    },
    {
      city_symbol: ["1272 "],
      english_name: ["haluz "],
      hebrew_name: ["חלוץ "],
    },
    {
      city_symbol: ["820 "],
      english_name: ["helez "],
      hebrew_name: ["חלץ "],
    },
    {
      city_symbol: ["993 "],
      english_name: ["hamam "],
      hebrew_name: ["חמאם "],
    },
    {
      city_symbol: ["801 "],
      english_name: ["hemed "],
      hebrew_name: ["חמד "],
    },
    {
      city_symbol: ["343 "],
      english_name: ["hamadya "],
      hebrew_name: ["חמדיה "],
    },
    {
      city_symbol: ["3646 "],
      english_name: ["nahal hemdat "],
      hebrew_name: ["חמדת "],
    },
    {
      city_symbol: ["3609 "],
      english_name: ["hamra "],
      hebrew_name: ["חמרה "],
    },
    {
      city_symbol: ["807 "],
      english_name: ["hanni'el "],
      hebrew_name: ["חניאל "],
    },
    {
      city_symbol: ["280 "],
      english_name: ["hanita "],
      hebrew_name: ["חניתה "],
    },
    {
      city_symbol: ["1257 "],
      english_name: ["hannaton "],
      hebrew_name: ["חנתון "],
    },
    {
      city_symbol: ["4005 "],
      english_name: ["haspin "],
      hebrew_name: ["חספין "],
    },
    {
      city_symbol: ["363 "],
      english_name: ["hafez hayyim "],
      hebrew_name: ["חפץ חיים "],
    },
    {
      city_symbol: ["90 "],
      english_name: ["hefzi-bah "],
      hebrew_name: ["חפצי-בה "],
    },
    {
      city_symbol: ["700 "],
      english_name: ["hazav "],
      hebrew_name: ["חצב "],
    },
    {
      city_symbol: ["13 "],
      english_name: ["hazeva "],
      hebrew_name: ["חצבה "],
    },
    {
      city_symbol: ["2034 "],
      english_name: ["hazor hagelilit "],
      hebrew_name: ["חצור הגלילית "],
    },
    {
      city_symbol: ["406 "],
      english_name: ["hazor-ashdod "],
      hebrew_name: ["חצור-אשדוד "],
    },
    {
      city_symbol: ["1409 "],
      english_name: ["hazar be'erotayim "],
      hebrew_name: ["חצר בארותיים "],
    },
    {
      city_symbol: ["1402 "],
      english_name: ["hazrot hulda "],
      hebrew_name: ["חצרות חולדה "],
    },
    {
      city_symbol: ["1404 "],
      english_name: ["hazrot yasaf "],
      hebrew_name: ["חצרות יסף "],
    },
    {
      city_symbol: ["1405 "],
      english_name: ["hazrot koah "],
      hebrew_name: ['חצרות כ"ח '],
    },
    {
      city_symbol: ["397 "],
      english_name: ["hazerim "],
      hebrew_name: ["חצרים "],
    },
    {
      city_symbol: ["422 "],
      english_name: ["herev le'et "],
      hebrew_name: ["חרב לאת "],
    },
    {
      city_symbol: ["1024 "],
      english_name: ["haruzim "],
      hebrew_name: ["חרוצים "],
    },
    {
      city_symbol: ["1247 "],
      english_name: ["harish "],
      hebrew_name: ["חריש "],
    },
    {
      city_symbol: ["3717 "],
      english_name: ["hermesh "],
      hebrew_name: ["חרמש "],
    },
    {
      city_symbol: ["1209 "],
      english_name: ["harashim "],
      hebrew_name: ["חרשים "],
    },
    {
      city_symbol: ["3770 "],
      english_name: ["hashmona'im "],
      hebrew_name: ["חשמונאים "],
    },
    {
      city_symbol: ["6700 "],
      english_name: ["tiberias "],
      hebrew_name: ["טבריה "],
    },
    {
      city_symbol: ["962 "],
      english_name: ["tuba-zangariyye "],
      hebrew_name: ["טובא-זנגריה "],
    },
    {
      city_symbol: ["498 "],
      english_name: ["tur'an "],
      hebrew_name: ["טורעאן "],
    },
    {
      city_symbol: ["2730 "],
      english_name: ["tayibe "],
      hebrew_name: ["טייבה "],
    },
    {
      city_symbol: ["497 "],
      english_name: ["tayibe(baemeq) "],
      hebrew_name: ["טייבה )בעמק( "],
    },
    {
      city_symbol: ["2720 "],
      english_name: ["tire "],
      hebrew_name: ["טירה "],
    },
    {
      city_symbol: ["663 "],
      english_name: ["tirat yehuda "],
      hebrew_name: ["טירת יהודה "],
    },
    {
      city_symbol: ["2100 "],
      english_name: ["tirat karmel "],
      hebrew_name: ["טירת כרמל "],
    },
    {
      city_symbol: ["268 "],
      english_name: ["tirat zevi "],
      hebrew_name: ["טירת צבי "],
    },
    {
      city_symbol: ["462 "],
      english_name: ["tal shahar "],
      hebrew_name: ["טל שחר "],
    },
    {
      city_symbol: ["1181 "],
      english_name: ["tal-el "],
      hebrew_name: ["טל-אל "],
    },
    {
      city_symbol: ["1177 "],
      english_name: ["telalim "],
      hebrew_name: ["טללים "],
    },
    {
      city_symbol: ["3788 "],
      english_name: ["talmon "],
      hebrew_name: ["טלמון "],
    },
    {
      city_symbol: ["8900 "],
      english_name: ["tamra "],
      hebrew_name: ["טמרה "],
    },
    {
      city_symbol: ["547 "],
      english_name: ["tamra (yizre'el) "],
      hebrew_name: ["טמרה )יזרעאל( "],
    },
    {
      city_symbol: ["3743 "],
      english_name: ["tene "],
      hebrew_name: ["טנא "],
    },
    {
      city_symbol: ["1214 "],
      english_name: ["tefahot "],
      hebrew_name: ["טפחות "],
    },
    {
      city_symbol: ["1295 "],
      english_name: ["yanuh-jat "],
      hebrew_name: ["יאנוח-ג'ת "],
    },
    {
      city_symbol: ["1232 "],
      english_name: ["yevul "],
      hebrew_name: ["יבול "],
    },
    {
      city_symbol: ["46 "],
      english_name: ["yavne'el "],
      hebrew_name: ["יבנאל "],
    },
    {
      city_symbol: ["2660 "],
      english_name: ["yavne "],
      hebrew_name: ["יבנה "],
    },
    {
      city_symbol: ["96 "],
      english_name: ["yagur "],
      hebrew_name: ["יגור "],
    },
    {
      city_symbol: ["798 "],
      english_name: ["yagel "],
      hebrew_name: ["יגל "],
    },
    {
      city_symbol: ["577 "],
      english_name: ["yad binyamin "],
      hebrew_name: ["יד בנימין "],
    },
    {
      city_symbol: ["1134 "],
      english_name: ["yad hashemona "],
      hebrew_name: ["יד השמונה "],
    },
    {
      city_symbol: ["758 "],
      english_name: ["yad hanna "],
      hebrew_name: ["יד חנה "],
    },
    {
      city_symbol: ["358 "],
      english_name: ["yad mordekhay "],
      hebrew_name: ["יד מרדכי "],
    },
    {
      city_symbol: ["775 "],
      english_name: ["yad natan "],
      hebrew_name: ["יד נתן "],
    },
    {
      city_symbol: ["64 "],
      english_name: ["yad rambam "],
      hebrew_name: ['יד רמב"ם '],
    },
    {
      city_symbol: ["1144 "],
      english_name: ["yedida "],
      hebrew_name: ["ידידה "],
    },
    {
      city_symbol: ["9400 "],
      english_name: ["yehud-monoson "],
      hebrew_name: ["יהוד-מונוסון "],
    },
    {
      city_symbol: ["1158 "],
      english_name: ["yahel "],
      hebrew_name: ["יהל "],
    },
    {
      city_symbol: ["2009 "],
      english_name: ["yuval "],
      hebrew_name: ["יובל "],
    },
    {
      city_symbol: ["1226 "],
      english_name: ["yuvalim "],
      hebrew_name: ["יובלים "],
    },
    {
      city_symbol: ["1112 "],
      english_name: ["yodefat "],
      hebrew_name: ["יודפת "],
    },
    {
      city_symbol: ["4007 "],
      english_name: ["yonatan "],
      hebrew_name: ["יונתן "],
    },
    {
      city_symbol: ["803 "],
      english_name: ["yoshivya "],
      hebrew_name: ["יושיביה "],
    },
    {
      city_symbol: ["452 "],
      english_name: ["yizre'el "],
      hebrew_name: ["יזרעאל "],
    },
    {
      city_symbol: ["409 "],
      english_name: ["yehi'am "],
      hebrew_name: ["יחיעם "],
    },
    {
      city_symbol: ["866 "],
      english_name: ["yotvata "],
      hebrew_name: ["יטבתה "],
    },
    {
      city_symbol: ["3607 "],
      english_name: ["yitav "],
      hebrew_name: ['ייט"ב '],
    },
    {
      city_symbol: ["811 "],
      english_name: ["yakhini "],
      hebrew_name: ["יכיני "],
    },
    {
      city_symbol: ["753 "],
      english_name: ["yanuv "],
      hebrew_name: ["ינוב "],
    },
    {
      city_symbol: ["2011 "],
      english_name: ["yinnon "],
      hebrew_name: ["ינון "],
    },
    {
      city_symbol: ["29 "],
      english_name: ["yesud hama'ala "],
      hebrew_name: ["יסוד המעלה "],
    },
    {
      city_symbol: ["440 "],
      english_name: ["yesodot "],
      hebrew_name: ["יסודות "],
    },
    {
      city_symbol: ["575 "],
      english_name: ["yas'ur "],
      hebrew_name: ["יסעור "],
    },
    {
      city_symbol: ["1138 "],
      english_name: ["ya'ad "],
      hebrew_name: ["יעד "],
    },
    {
      city_symbol: ["1117 "],
      english_name: ["ya'el "],
      hebrew_name: ["יעל "],
    },
    {
      city_symbol: ["1044 "],
      english_name: ["ye'af "],
      hebrew_name: ["יעף "],
    },
    {
      city_symbol: ["795 "],
      english_name: ["ya'ara "],
      hebrew_name: ["יערה "],
    },
    {
      city_symbol: ["499 "],
      english_name: ["yafi "],
      hebrew_name: ["יפיע "],
    },
    {
      city_symbol: ["3566 "],
      english_name: ["yafit "],
      hebrew_name: ["יפית "],
    },
    {
      city_symbol: ["134 "],
      english_name: ["yif'at "],
      hebrew_name: ["יפעת "],
    },
    {
      city_symbol: ["453 "],
      english_name: ["yiftah "],
      hebrew_name: ["יפתח "],
    },
    {
      city_symbol: ["3749 "],
      english_name: ["yizhar "],
      hebrew_name: ["יצהר "],
    },
    {
      city_symbol: ["759 "],
      english_name: ["yaziz "],
      hebrew_name: ["יציץ "],
    },
    {
      city_symbol: ["417 "],
      english_name: ["yaqum "],
      hebrew_name: ["יקום "],
    },
    {
      city_symbol: ["3647 "],
      english_name: ["yaqir "],
      hebrew_name: ["יקיר "],
    },
    {
      city_symbol: ["241 "],
      english_name: ["yoqne'am(moshava) "],
      hebrew_name: ["יקנעם )מושבה( "],
    },
    {
      city_symbol: ["240"],
      english_name: ["yoqne'am illit"],
      hebrew_name: ["יקנעם עילית"],
    },
    {
      city_symbol: ["623"],
      english_name: ["yir'on"],
      hebrew_name: ["יראון"],
    },
    {
      city_symbol: ["2026"],
      english_name: ["yardena"],
      hebrew_name: ["ירדנה"],
    },
    {
      city_symbol: ["831"],
      english_name: ["yeroham"],
      hebrew_name: ["ירוחם"],
    },
    {
      city_symbol: ["3000"],
      english_name: ["jerusalem"],
      hebrew_name: ["ירושלים"],
    },
    {
      city_symbol: ["718 "],
      english_name: ["yarhiv "],
      hebrew_name: ["ירחיב "],
    },
    {
      city_symbol: ["502 "],
      english_name: ["yirka "],
      hebrew_name: ["ירכא "],
    },
    {
      city_symbol: ["183 "],
      english_name: ["yarqona "],
      hebrew_name: ["ירקונה "],
    },
    {
      city_symbol: ["916 "],
      english_name: ["yesha "],
      hebrew_name: ["ישע "],
    },
    {
      city_symbol: ["805 "],
      english_name: ["yish'i "],
      hebrew_name: ["ישעי "],
    },
    {
      city_symbol: ["828 "],
      english_name: ["yashresh "],
      hebrew_name: ["ישרש "],
    },
    {
      city_symbol: ["1227 "],
      english_name: ["yated "],
      hebrew_name: ["יתד "],
    },
    {
      city_symbol: ["1329 "],
      english_name: ["yatir"],
      hebrew_name: ["יתיר "],
    },
    {
      city_symbol: ["504 "],
      english_name: ["kabul "],
      hebrew_name: ["כאבול "],
    },
    {
      city_symbol: ["505 "],
      english_name: ["kaokab abu al-hija "],
      hebrew_name: ["כאוכב אבו אל-היג'א "],
    },
    {
      city_symbol: ["576 "],
      english_name: ["kabri "],
      hebrew_name: ["כברי "],
    },
    {
      city_symbol: ["371 "],
      english_name: ["kadoorie "],
      hebrew_name: ["כדורי "],
    },
    {
      city_symbol: ["1338 "],
      english_name: ["kaddita "],
      hebrew_name: ["כדיתה "],
    },
    {
      city_symbol: ["3564 "],
      english_name: ["kokhav hashahar "],
      hebrew_name: ["כוכב השחר "],
    },
    {
      city_symbol: ["1224 "],
      english_name: ["kokhav ya'ir "],
      hebrew_name: ["כוכב יאיר "],
    },
    {
      city_symbol: ["3779 "],
      english_name: ["kokhav ya'aqov "],
      hebrew_name: ["כוכב יעקב "],
    },
    {
      city_symbol: ["824 "],
      english_name: ["kokhav mikha'el "],
      hebrew_name: ["כוכב מיכאל "],
    },
    {
      city_symbol: ["1252 "],
      english_name: ["korazim "],
      hebrew_name: ["כורזים "],
    },
    {
      city_symbol: ["1210 "],
      english_name: ["kahal "],
      hebrew_name: ["כחל "],
    },
    {
      city_symbol: ["1367 "],
      english_name: ["kochlea "],
      hebrew_name: ["כחלה "],
    },
    {
      city_symbol: ["840 "],
      english_name: ["kissufim "],
      hebrew_name: ["כיסופים "],
    },
    {
      city_symbol: ["1153 "],
      english_name: ["kishor "],
      hebrew_name: ["כישור "],
    },
    {
      city_symbol: ["1183 "],
      english_name: ["kelil "],
      hebrew_name: ["כליל "],
    },
    {
      city_symbol: ["1229 "],
      english_name: ["kallanit "],
      hebrew_name: ["כלנית "],
    },
    {
      city_symbol: ["1331 "],
      english_name: ["kama'nah "],
      hebrew_name: ["כמאנה "],
    },
    {
      city_symbol: ["1291 "],
      english_name: ["kemehin "],
      hebrew_name: ["כמהין "],
    },
    {
      city_symbol: ["1201 "],
      english_name: ["kammon "],
      hebrew_name: ["כמון "],
    },
    {
      city_symbol: ["2006 "],
      english_name: ["kannot "],
      hebrew_name: ["כנות "],
    },
    {
      city_symbol: ["4028 "],
      english_name: ["kanaf "],
      hebrew_name: ["כנף "],
    },
    {
      city_symbol: ["63 "],
      english_name: ["kinneret(moshava) "],
      hebrew_name: ["כנרת )מושבה( "],
    },
    {
      city_symbol: ["57 "],
      english_name: ["kinneret(qevuza) "],
      hebrew_name: ["כנרת )קבוצה( "],
    },
    {
      city_symbol: ["1059 "],
      english_name: ["kuseife "],
      hebrew_name: ["כסיפה "],
    },
    {
      city_symbol: ["859 "],
      english_name: ["kesalon "],
      hebrew_name: ["כסלון "],
    },
    {
      city_symbol: ["1296 "],
      english_name: ["kisra-sumei "],
      hebrew_name: ["כסרא-סמיע "],
    },
    {
      city_symbol: ["978 "],
      english_name: ["ka'abiyye-tabbash-ha "],
      hebrew_name: ["כעביה-טבאש-חג'אג'רה "],
    },
    {
      city_symbol: ["857 "],
      english_name: ["kefar aviv "],
      hebrew_name: ["כפר אביב "],
    },
    {
      city_symbol: ["3638 "],
      english_name: ["kefar adummim "],
      hebrew_name: ["כפר אדומים "],
    },
    {
      city_symbol: ["364 "],
      english_name: ["kefar uriyya "],
      hebrew_name: ["כפר אוריה "],
    },
    {
      city_symbol: ["690 "],
      english_name: ["kefar ahim "],
      hebrew_name: ["כפר אחים "],
    },
    {
      city_symbol: ["220 "],
      english_name: ["kefar bialik "],
      hebrew_name: ["כפר ביאליק "],
    },
    {
      city_symbol: ["177 "],
      english_name: ["kefar bilu "],
      hebrew_name: ['כפר ביל"ו '],
    },
    {
      city_symbol: ["357 "],
      english_name: ["kefar blum "],
      hebrew_name: ["כפר בלום "],
    },
    {
      city_symbol: ["2010 "],
      english_name: ["kefar bin nun "],
      hebrew_name: ["כפר בן נון "],
    },
    {
      city_symbol: ["633 "],
      english_name: ["kafar bara "],
      hebrew_name: ["כפר ברא "],
    },
    {
      city_symbol: ["132 "],
      english_name: ["kefar barukh "],
      hebrew_name: ["כפר ברוך "],
    },
    {
      city_symbol: ["106 "],
      english_name: ["kefar gid'on "],
      hebrew_name: ["כפר גדעון "],
    },
    {
      city_symbol: ["427 "],
      english_name: ["kefar gallim "],
      hebrew_name: ["כפר גלים "],
    },
    {
      city_symbol: ["310 "],
      english_name: ["kefar glikson "],
      hebrew_name: ["כפר גליקסון "],
    },
    {
      city_symbol: ["76 "],
      english_name: ["kefar gil'adi "],
      hebrew_name: ["כפר גלעדי "],
    },
    {
      city_symbol: ["707 "],
      english_name: ["kefar daniyyel "],
      hebrew_name: ["כפר דניאל "],
    },
    {
      city_symbol: ["3796 "],
      english_name: ["kefar haoranim "],
      hebrew_name: ["כפר האורנים "],
    },
    {
      city_symbol: ["192 "],
      english_name: ["kefar hahoresh "],
      hebrew_name: ["כפר החורש "],
    },
    {
      city_symbol: ["254 "],
      english_name: ["kefar hamakkabi "],
      hebrew_name: ["כפר המכבי "],
    },
    {
      city_symbol: ["582 "],
      english_name: ["kefar hanagid "],
      hebrew_name: ["כפר הנגיד "],
    },
    {
      city_symbol: ["890 "],
      english_name: ["kefar hano'ar hadati "],
      hebrew_name: ["כפר הנוער הדתי "],
    },
    {
      city_symbol: ["443 "],
      english_name: ["kefar hanasi "],
      hebrew_name: ["כפר הנשיא "],
    },
    {
      city_symbol: ["187 "],
      english_name: ["kefar hess "],
      hebrew_name: ["כפר הס "],
    },
    {
      city_symbol: ["217 "],
      english_name: ["kefar haro'e "],
      hebrew_name: ['כפר הרא"ה '],
    },
    {
      city_symbol: ["888 "],
      english_name: ["kefar harif "],
      hebrew_name: ['כפר הרי"ף '],
    },
    {
      city_symbol: ["190 "],
      english_name: ["kefar vitkin "],
      hebrew_name: ["כפר ויתקין "],
    },
    {
      city_symbol: ["320 "],
      english_name: ["kefar warburg "],
      hebrew_name: ["כפר ורבורג "],
    },
    {
      city_symbol: ["1263 "],
      english_name: ["kefar weradim "],
      hebrew_name: ["כפר ורדים "],
    },
    {
      city_symbol: ["1325 "],
      english_name: ["kefar zoharim "],
      hebrew_name: ["כפר זוהרים "],
    },
    {
      city_symbol: ["786 "],
      english_name: ["kefar zetim "],
      hebrew_name: ["כפר זיתים "],
    },
    {
      city_symbol: ["696 "],
      english_name: ["kefar habad "],
      hebrew_name: ['כפר חב"ד '],
    },
    {
      city_symbol: ["609 "],
      english_name: ["kefar hoshen "],
      hebrew_name: ["כפר חושן "],
    },
    {
      city_symbol: ["255 "],
      english_name: ["kefar hittim "],
      hebrew_name: ["כפר חיטים "],
    },
    {
      city_symbol: ["193 "],
      english_name: ["kefar hayyim "],
      hebrew_name: ["כפר חיים "],
    },
    {
      city_symbol: ["1297 "],
      english_name: ["kefar hananya "],
      hebrew_name: ["כפר חנניה "],
    },
    {
      city_symbol: ["112 "],
      english_name: ["kefar hasidim alef "],
      hebrew_name: ["כפר חסידים א' "],
    },
    {
      city_symbol: ["889 "],
      english_name: ["kefar hasidim bet "],
      hebrew_name: ["כפר חסידים ב' "],
    },
    {
      city_symbol: ["4004 "],
      english_name: ["kefar haruv "],
      hebrew_name: ["כפר חרוב "],
    },
    {
      city_symbol: ["673 "],
      english_name: ["kefar truman "],
      hebrew_name: ["כפר טרומן "],
    },
    {
      city_symbol: ["507 "],
      english_name: ["kafar yasif "],
      hebrew_name: ["כפר יאסיף "],
    },
    {
      city_symbol: ["233 "],
      english_name: ["yedidya "],
      hebrew_name: ["כפר ידידיה "],
    },
    {
      city_symbol: ["140 "],
      english_name: ["kefar yehoshua "],
      hebrew_name: ["כפר יהושע "],
    },
    {
      city_symbol: ["168 "],
      english_name: ["kefar yona "],
      hebrew_name: ["כפר יונה "],
    },
    {
      city_symbol: ["85 "],
      english_name: ["kefar yehezqel "],
      hebrew_name: ["כפר יחזקאל "],
    },
    {
      city_symbol: ["170 "],
      english_name: ["kefar ya'bez "],
      hebrew_name: ["כפר יעבץ "],
    },
    {
      city_symbol: ["508 "],
      english_name: ["kafar kama "],
      hebrew_name: ["כפר כמא "],
    },
    {
      city_symbol: ["509 "],
      english_name: ["kafar kanna "],
      hebrew_name: ["כפר כנא "],
    },
    {
      city_symbol: ["387 "],
      english_name: ["kefar monash "],
      hebrew_name: ["כפר מונש "],
    },
    {
      city_symbol: ["1095 "],
      english_name: ["kefar maymon "],
      hebrew_name: ["כפר מימון "],
    },
    {
      city_symbol: ["98 "],
      english_name: ["kefar malal "],
      hebrew_name: ['כפר מל"ל '],
    },
    {
      city_symbol: ["510 "],
      english_name: ["kafar manda "],
      hebrew_name: ["כפר מנדא "],
    },
    {
      city_symbol: ["274 "],
      english_name: ["kefar menahem "],
      hebrew_name: ["כפר מנחם "],
    },
    {
      city_symbol: ["297 "],
      english_name: ["kefar masaryk "],
      hebrew_name: ["כפר מסריק "],
    },
    {
      city_symbol: ["512 "],
      english_name: ["kafar misr "],
      hebrew_name: ["כפר מצר "],
    },
    {
      city_symbol: ["764 "],
      english_name: ["kefar mordekhay "],
      hebrew_name: ["כפר מרדכי "],
    },
    {
      city_symbol: ["316 "],
      english_name: ["kefar netter "],
      hebrew_name: ["כפר נטר "],
    },
    {
      city_symbol: ["345 "],
      english_name: ["kefar szold "],
      hebrew_name: ["כפר סאלד "],
    },
    {
      city_symbol: ["6900 "],
      english_name: ["kefar sava "],
      hebrew_name: ["כפר סבא "],
    },
    {
      city_symbol: ["107 "],
      english_name: ["kefar silver "],
      hebrew_name: ["כפר סילבר "],
    },
    {
      city_symbol: ["249 "],
      english_name: ["kefar sirkin "],
      hebrew_name: ["כפר סירקין "],
    },
    {
      city_symbol: ["875 "],
      english_name: ["kefar avoda "],
      hebrew_name: ["כפר עבודה "],
    },
    {
      city_symbol: ["845 "],
      english_name: ["kefar azza "],
      hebrew_name: ["כפר עזה "],
    },
    {
      city_symbol: ["3488 "],
      english_name: ["kefar ezyon "],
      hebrew_name: ["כפר עציון "],
    },
    {
      city_symbol: ["189 "],
      english_name: ["kefar pines "],
      hebrew_name: ["כפר פינס "],
    },
    {
      city_symbol: ["634 "],
      english_name: ["kafar qasem "],
      hebrew_name: ["כפר קאסם "],
    },
    {
      city_symbol: ["388 "],
      english_name: ["kefar kish "],
      hebrew_name: ["כפר קיש "],
    },
    {
      city_symbol: ["654 "],
      english_name: ["kafar qara "],
      hebrew_name: ["כפר קרע "],
    },
    {
      city_symbol: ["579 "],
      english_name: ["kefar rosh haniqra "],
      hebrew_name: ["כפר ראש הנקרה "],
    },
    {
      city_symbol: ["1130 "],
      english_name: ["kefar rozenwald(zar. "],
      hebrew_name: ["כפר רוזנואלד )זרעית( "],
    },
    {
      city_symbol: ["295 "],
      english_name: ["kefar ruppin "],
      hebrew_name: ["כפר רופין "],
    },
    {
      city_symbol: ["1166 "],
      english_name: ["kefar rut "],
      hebrew_name: ["כפר רות "],
    },
    {
      city_symbol: ["605 "],
      english_name: ["kefar shammay "],
      hebrew_name: ["כפר שמאי "],
    },
    {
      city_symbol: ["743 "],
      english_name: ["kefar shemu'el "],
      hebrew_name: ["כפר שמואל "],
    },
    {
      city_symbol: ["267 "],
      english_name: ["kefar shemaryahu "],
      hebrew_name: ["כפר שמריהו "],
    },
    {
      city_symbol: ["47 "],
      english_name: ["kefar tavor "],
      hebrew_name: ["כפר תבור "],
    },
    {
      city_symbol: ["3572 "],
      english_name: ["kefar tappuah "],
      hebrew_name: ["כפר תפוח "],
    },
    {
      city_symbol: ["38 "],
      english_name: ["kare deshe "],
      hebrew_name: ["כרי דשא "],
    },
    {
      city_symbol: ["1285 "],
      english_name: ["karkom "],
      hebrew_name: ["כרכום "],
    },
    {
      city_symbol: ["664 "],
      english_name: ["kerem ben zimra "],
      hebrew_name: ["כרם בן זמרה "],
    },
    {
      city_symbol: ["88 "],
      english_name: ["kerem ben shemen "],
      hebrew_name: ["כרם בן שמן "],
    },
    {
      city_symbol: ["1094 "],
      english_name: ["kerem yavne(yeshiva) "],
      hebrew_name: ["כרם יבנה )ישיבה( "],
    },
    {
      city_symbol: ["580 "],
      english_name: ["kerem maharal "],
      hebrew_name: ['כרם מהר"ל '],
    },
    {
      city_symbol: ["1085 "],
      english_name: ["kerem shalom "],
      hebrew_name: ["כרם שלום "],
    },
    {
      city_symbol: ["1264 "],
      english_name: ["karme yosef "],
      hebrew_name: ["כרמי יוסף "],
    },
    {
      city_symbol: ["3766 "],
      english_name: ["karme zur "],
      hebrew_name: ["כרמי צור "],
    },
    {
      city_symbol: ["1374 "],
      english_name: ["karme qatif "],
      hebrew_name: ["כרמי קטיף "],
    },
    {
      city_symbol: ["1139 "],
      english_name: ["karmi'el "],
      hebrew_name: ["כרמיאל "],
    },
    {
      city_symbol: ["768 "],
      english_name: ["karmiyya "],
      hebrew_name: ["כרמיה "],
    },
    {
      city_symbol: ["1198 "],
      english_name: ["keramim "],
      hebrew_name: ["כרמים "],
    },
    {
      city_symbol: ["3656 "],
      english_name: ["karmel "],
      hebrew_name: ["כרמל "],
    },
    {
      city_symbol: ["1207 "],
      english_name: ["lavon "],
      hebrew_name: ["לבון "],
    },
    {
      city_symbol: ["585 "],
      english_name: ["lavi "],
      hebrew_name: ["לביא "],
    },
    {
      city_symbol: ["1230 "],
      english_name: ["livnim "],
      hebrew_name: ["לבנים "],
    },
    {
      city_symbol: ["2023 "],
      english_name: ["lahav "],
      hebrew_name: ["להב "],
    },
    {
      city_symbol: ["380 "],
      english_name: ["lahavot habashan "],
      hebrew_name: ["להבות הבשן "],
    },
    {
      city_symbol: ["715 "],
      english_name: ["lahavot haviva "],
      hebrew_name: ["להבות חביבה "],
    },
    {
      city_symbol: ["1271 "],
      english_name: ["lehavim "],
      hebrew_name: ["להבים "],
    },
    {
      city_symbol: ["7000 "],
      english_name: ["lod "],
      hebrew_name: ["לוד "],
    },
    {
      city_symbol: ["52 "],
      english_name: ["luzit "],
      hebrew_name: ["לוזית "],
    },
    {
      city_symbol: ["595 "],
      english_name: ["lohame hageta'ot "],
      hebrew_name: ["לוחמי הגיטאות "],
    },
    {
      city_symbol: ["1171 "],
      english_name: ["lotem "],
      hebrew_name: ["לוטם "],
    },
    {
      city_symbol: ["1255 "],
      english_name: ["lotan "],
      hebrew_name: ["לוטן "],
    },
    {
      city_symbol: ["674 "],
      english_name: ["liman "],
      hebrew_name: ["לימן "],
    },
    {
      city_symbol: ["24 "],
      english_name: ["lakhish "],
      hebrew_name: ["לכיש "],
    },
    {
      city_symbol: ["1310 "],
      english_name: ["lappid "],
      hebrew_name: ["לפיד "],
    },
    {
      city_symbol: ["1173 "],
      english_name: ["lappidot "],
      hebrew_name: ["לפידות "],
    },
    {
      city_symbol: ["1060 "],
      english_name: ["laqye "],
      hebrew_name: ["לקיה "],
    },
    {
      city_symbol: ["2055 "],
      english_name: ["ma'or "],
      hebrew_name: ["מאור "],
    },
    {
      city_symbol: ["102 "],
      english_name: ["me'ir shefeya "],
      hebrew_name: ["מאיר שפיה "],
    },
    {
      city_symbol: ["771 "],
      english_name: ["mevo betar "],
      hebrew_name: ["מבוא ביתר "],
    },
    {
      city_symbol: ["3569 "],
      english_name: ["mevo dotan "],
      hebrew_name: ["מבוא דותן "],
    },
    {
      city_symbol: ["3709 "],
      english_name: ["mevo horon "],
      hebrew_name: ["מבוא חורון "],
    },
    {
      city_symbol: ["4204 "],
      english_name: ["mevo hamma "],
      hebrew_name: ["מבוא חמה "],
    },
    {
      city_symbol: ["1141 "],
      english_name: ["mevo modi'im "],
      hebrew_name: ["מבוא מודיעים "],
    },
    {
      city_symbol: ["1318 "],
      english_name: ["mevo'ot yam "],
      hebrew_name: ["מבואות ים "],
    },
    {
      city_symbol: ["1080 "],
      english_name: ["mabbu'im "],
      hebrew_name: ["מבועים "],
    },
    {
      city_symbol: ["829 "],
      english_name: ["mivtahim "],
      hebrew_name: ["מבטחים "],
    },
    {
      city_symbol: ["573 "],
      english_name: ["mavqi'im "],
      hebrew_name: ["מבקיעים "],
    },
    {
      city_symbol: ["1015 "],
      english_name: ["mevasseret ziyyon "],
      hebrew_name: ["מבשרת ציון "],
    },
    {
      city_symbol: ["516 "],
      english_name: ["majd al-kurum "],
      hebrew_name: ["מג'ד אל-כרום "],
    },
    {
      city_symbol: ["4201 "],
      english_name: ["majdal shams "],
      hebrew_name: ["מג'דל שמס "],
    },
    {
      city_symbol: ["481 "],
      english_name: ["mughar "],
      hebrew_name: ["מגאר "],
    },
    {
      city_symbol: ["689 "],
      english_name: ["megadim "],
      hebrew_name: ["מגדים "],
    },
    {
      city_symbol: ["65 "],
      english_name: ["migdal "],
      hebrew_name: ["מגדל "],
    },
    {
      city_symbol: ["874 "],
      english_name: ["migdal haemeq "],
      hebrew_name: ["מגדל העמק "],
    },
    {
      city_symbol: ["3561 "],
      english_name: ["migdal oz "],
      hebrew_name: ["מגדל עוז "],
    },
    {
      city_symbol: ["3751 "],
      english_name: ["migdalim "],
      hebrew_name: ["מגדלים "],
    },
    {
      city_symbol: ["586 "],
      english_name: ["megiddo "],
      hebrew_name: ["מגידו "],
    },
    {
      city_symbol: ["375 "],
      english_name: ["maggal "],
      hebrew_name: ["מגל "],
    },
    {
      city_symbol: ["695 "],
      english_name: ["magen "],
      hebrew_name: ["מגן "],
    },
    {
      city_symbol: ["1155 "],
      english_name: ["magen sha'ul "],
      hebrew_name: ["מגן שאול "],
    },
    {
      city_symbol: ["722 "],
      english_name: ["magshimim "],
      hebrew_name: ["מגשימים "],
    },
    {
      city_symbol: ["2029 "],
      english_name: ["midrakh oz "],
      hebrew_name: ["מדרך עוז "],
    },
    {
      city_symbol: ["1140 "],
      english_name: ["midreshet ben gurion "],
      hebrew_name: ["מדרשת בן גוריון "],
    },
    {
      city_symbol: ["897 "],
      english_name: ["midreshet ruppin "],
      hebrew_name: ["מדרשת רופין "],
    },
    {
      city_symbol: ["3797 "],
      english_name: ["modi'in illit "],
      hebrew_name: ["מודיעין עילית "],
    },
    {
      city_symbol: ["1200 "],
      english_name: ["modi'in-makkabbim-re "],
      hebrew_name: ["מודיעין-מכבים-רעות "],
    },
    {
      city_symbol: ["269 "],
      english_name: ["moledet "],
      hebrew_name: ["מולדת "],
    },
    {
      city_symbol: ["208 "],
      english_name: ["moza illit "],
      hebrew_name: ["מוצא עילית "],
    },
    {
      city_symbol: ["635 "],
      english_name: ["muqeible "],
      hebrew_name: ["מוקייבלה "],
    },
    {
      city_symbol: ["1163 "],
      english_name: ["moran "],
      hebrew_name: ["מורן "],
    },
    {
      city_symbol: ["1178 "],
      english_name: ["moreshet "],
      hebrew_name: ["מורשת "],
    },
    {
      city_symbol: ["606 "],
      english_name: ["mazor "],
      hebrew_name: ["מזור "],
    },
    {
      city_symbol: ["28 "],
      english_name: ["mazkeret batya "],
      hebrew_name: ["מזכרת בתיה "],
    },
    {
      city_symbol: ["104 "],
      english_name: ["mizra "],
      hebrew_name: ["מזרע "],
    },
    {
      city_symbol: ["517 "],
      english_name: ["mazra'a "],
      hebrew_name: ["מזרעה "],
    },
    {
      city_symbol: ["3599 "],
      english_name: ["mehola "],
      hebrew_name: ["מחולה "],
    },
    {
      city_symbol: ["1411 "],
      english_name: ["mahane hilla "],
      hebrew_name: ["מחנה הילה "],
    },
    {
      city_symbol: ["1418 "],
      english_name: ["mahane tali "],
      hebrew_name: ["מחנה טלי "],
    },
    {
      city_symbol: ["1413 "],
      english_name: ["mahane yehudit "],
      hebrew_name: ["מחנה יהודית "],
    },
    {
      city_symbol: ["1416 "],
      english_name: ["mahane yokhved "],
      hebrew_name: ["מחנה יוכבד "],
    },
    {
      city_symbol: ["1415 "],
      english_name: ["mahane yafa "],
      hebrew_name: ["מחנה יפה "],
    },
    {
      city_symbol: ["1196 "],
      english_name: ["mahane yattir "],
      hebrew_name: ["מחנה יתיר "],
    },
    {
      city_symbol: ["1414 "],
      english_name: ["mahane miryam "],
      hebrew_name: ["מחנה מרים "],
    },
    {
      city_symbol: ["1412 "],
      english_name: ["mahane tel nof "],
      hebrew_name: ["מחנה תל נוף "],
    },
    {
      city_symbol: ["308 "],
      english_name: ["mahanayim "],
      hebrew_name: ["מחניים "],
    },
    {
      city_symbol: ["776 "],
      english_name: ["mahseya "],
      hebrew_name: ["מחסיה "],
    },
    {
      city_symbol: ["43 "],
      english_name: ["metula "],
      hebrew_name: ["מטולה "],
    },
    {
      city_symbol: ["822 "],
      english_name: ["matta "],
      hebrew_name: ["מטע "],
    },
    {
      city_symbol: ["1128 "],
      english_name: ["me ammi "],
      hebrew_name: ["מי עמי "],
    },
    {
      city_symbol: ["2054 "],
      english_name: ["metav "],
      hebrew_name: ["מיטב "],
    },
    {
      city_symbol: ["649 "],
      english_name: ["meiser "],
      hebrew_name: ["מייסר "],
    },
    {
      city_symbol: ["4019 "],
      english_name: ["mezar "],
      hebrew_name: ["מיצר "],
    },
    {
      city_symbol: ["1282 "],
      english_name: ["merav "],
      hebrew_name: ["מירב "],
    },
    {
      city_symbol: ["607 "],
      english_name: ["meron "],
      hebrew_name: ["מירון "],
    },
    {
      city_symbol: ["731 "],
      english_name: ["meshar "],
      hebrew_name: ["מישר "],
    },
    {
      city_symbol: ["1268 "],
      english_name: ["metar "],
      hebrew_name: ["מיתר "],
    },
    {
      city_symbol: ["3614 "],
      english_name: ["mekhora "],
      hebrew_name: ["מכורה "],
    },
    {
      city_symbol: ["1343 "],
      english_name: ["makchul "],
      hebrew_name: ["מכחול "],
    },
    {
      city_symbol: ["382 "],
      english_name: ["mikhmoret "],
      hebrew_name: ["מכמורת "],
    },
    {
      city_symbol: ["1202 "],
      english_name: ["mikhmannim "],
      hebrew_name: ["מכמנים "],
    },
    {
      city_symbol: ["164 "],
      english_name: ["mele'a "],
      hebrew_name: ["מלאה "],
    },
    {
      city_symbol: ["2044 "],
      english_name: ["melilot "],
      hebrew_name: ["מלילות "],
    },
    {
      city_symbol: ["596 "],
      english_name: ["malkiyya "],
      hebrew_name: ["מלכיה "],
    },
    {
      city_symbol: ["1154 "],
      english_name: ["malkishua "],
      hebrew_name: ["מלכישוע "],
    },
    {
      city_symbol: ["2030 "],
      english_name: ["menuha "],
      hebrew_name: ["מנוחה "],
    },
    {
      city_symbol: ["1174 "],
      english_name: ["manof "],
      hebrew_name: ["מנוף "],
    },
    {
      city_symbol: ["1205 "],
      english_name: ["manot "],
      hebrew_name: ["מנות "],
    },
    {
      city_symbol: ["48 "],
      english_name: ["menahemya "],
      hebrew_name: ["מנחמיה "],
    },
    {
      city_symbol: ["347 "],
      english_name: ["mennara "],
      hebrew_name: ["מנרה "],
    },
    {
      city_symbol: ["994 "],
      english_name: ["manshiyyet zabda "],
      hebrew_name: ["מנשית זבדה "],
    },
    {
      city_symbol: ["1258 "],
      english_name: ["massad "],
      hebrew_name: ["מסד "],
    },
    {
      city_symbol: ["263 "],
      english_name: ["massada "],
      hebrew_name: ["מסדה "],
    },
    {
      city_symbol: ["298 "],
      english_name: ["mesillot "],
      hebrew_name: ["מסילות "],
    },
    {
      city_symbol: ["742 "],
      english_name: ["mesillat ziyyon "],
      hebrew_name: ["מסילת ציון "],
    },
    {
      city_symbol: ["748 "],
      english_name: ["maslul "],
      hebrew_name: ["מסלול "],
    },
    {
      city_symbol: ["4203 "],
      english_name: ["mas'ade "],
      hebrew_name: ["מסעדה "],
    },
    {
      city_symbol: ["939 "],
      english_name: ["mas'udin al-'azazme "],
      hebrew_name: ["מסעודין אל-עזאזמה "],
    },
    {
      city_symbol: ["197 "],
      english_name: ["ma'barot "],
      hebrew_name: ["מעברות "],
    },
    {
      city_symbol: ["1082 "],
      english_name: ["ma'galim "],
      hebrew_name: ["מעגלים "],
    },
    {
      city_symbol: ["678 "],
      english_name: ["ma'agan "],
      hebrew_name: ["מעגן "],
    },
    {
      city_symbol: ["694 "],
      english_name: ["ma'agan mikha'el "],
      hebrew_name: ["מעגן מיכאל "],
    },
    {
      city_symbol: ["272 "],
      english_name: ["ma'oz hayyim "],
      hebrew_name: ["מעוז חיים "],
    },
    {
      city_symbol: ["3657 "],
      english_name: ["ma'on "],
      hebrew_name: ["מעון "],
    },
    {
      city_symbol: ["570 "],
      english_name: ["me'ona "],
      hebrew_name: ["מעונה "],
    },
    {
      city_symbol: ["518 "],
      english_name: ["mi'elya "],
      hebrew_name: ["מעיליא "],
    },
    {
      city_symbol: ["416 "],
      english_name: ["ma'yan barukh "],
      hebrew_name: ["מעין ברוך "],
    },
    {
      city_symbol: ["290 "],
      english_name: ["ma'yan zevi "],
      hebrew_name: ["מעין צבי "],
    },
    {
      city_symbol: ["3616 "],
      english_name: ["ma'ale adummim "],
      hebrew_name: ["מעלה אדומים "],
    },
    {
      city_symbol: ["3608 "],
      english_name: ["ma'ale efrayim "],
      hebrew_name: ["מעלה אפרים "],
    },
    {
      city_symbol: ["1127 "],
      english_name: ["ma'ale gilboa "],
      hebrew_name: ["מעלה גלבוע "],
    },
    {
      city_symbol: ["4008 "],
      english_name: ["ma'ale gamla "],
      hebrew_name: ["מעלה גמלא "],
    },
    {
      city_symbol: ["286 "],
      english_name: ["ma'ale hahamisha "],
      hebrew_name: ["מעלה החמישה "],
    },
    {
      city_symbol: ["3752 "],
      english_name: ["ma'ale levona "],
      hebrew_name: ["מעלה לבונה "],
    },
    {
      city_symbol: ["3651 "],
      english_name: ["ma'ale mikhmas "],
      hebrew_name: ["מעלה מכמש "],
    },
    {
      city_symbol: ["1327 "],
      english_name: ["ma'ale iron "],
      hebrew_name: ["מעלה עירון "],
    },
    {
      city_symbol: ["3653 "],
      english_name: ["ma'ale amos "],
      hebrew_name: ["מעלה עמוס "],
    },
    {
      city_symbol: ["3637 "],
      english_name: ["ma'ale shomeron "],
      hebrew_name: ["מעלה שומרון "],
    },
    {
      city_symbol: ["1063 "],
      english_name: ["ma'alot-tarshiha "],
      hebrew_name: ["מעלות-תרשיחא "],
    },
    {
      city_symbol: ["344 "],
      english_name: ["ma'anit "],
      hebrew_name: ["מענית "],
    },
    {
      city_symbol: ["230 "],
      english_name: ["ma'as "],
      hebrew_name: ["מעש "],
    },
    {
      city_symbol: ["668 "],
      english_name: ["mefallesim "],
      hebrew_name: ["מפלסים "],
    },
    {
      city_symbol: ["3745 "],
      english_name: ["mezadot yehuda "],
      hebrew_name: ["מצדות יהודה "],
    },
    {
      city_symbol: ["325 "],
      english_name: ["mazzuva "],
      hebrew_name: ["מצובה "],
    },
    {
      city_symbol: ["757 "],
      english_name: ["mazliah "],
      hebrew_name: ["מצליח "],
    },
    {
      city_symbol: ["58 "],
      english_name: ["mizpa "],
      hebrew_name: ["מצפה "],
    },
    {
      city_symbol: ["1222 "],
      english_name: ["mizpe aviv "],
      hebrew_name: ['מצפה אבי"ב '],
    },
    {
      city_symbol: ["1370 "],
      english_name: ["mitspe ilan "],
      hebrew_name: ["מצפה אילן "],
    },
    {
      city_symbol: ["3576 "],
      english_name: ["mizpe yeriho "],
      hebrew_name: ["מצפה יריחו "],
    },
    {
      city_symbol: ["1190 "],
      english_name: ["mizpe netofa "],
      hebrew_name: ["מצפה נטופה "],
    },
    {
      city_symbol: ["99 "],
      english_name: ["mizpe ramon "],
      hebrew_name: ["מצפה רמון "],
    },
    {
      city_symbol: ["3610 "],
      english_name: ["mizpe shalem "],
      hebrew_name: ["מצפה שלם "],
    },
    {
      city_symbol: ["648 "],
      english_name: ["mezer "],
      hebrew_name: ["מצר "],
    },
    {
      city_symbol: ["22 "],
      english_name: ["miqwe yisra'el "],
      hebrew_name: ["מקווה ישראל "],
    },
    {
      city_symbol: ["843 "],
      english_name: ["margaliyyot "],
      hebrew_name: ["מרגליות "],
    },
    {
      city_symbol: ["4101 "],
      english_name: ["merom golan "],
      hebrew_name: ["מרום גולן "],
    },
    {
      city_symbol: ["1340 "],
      english_name: ["merhav am "],
      hebrew_name: ["מרחב עם "],
    },
    {
      city_symbol: ["97 "],
      english_name: ["merhavya(moshav) "],
      hebrew_name: ["מרחביה )מושב( "],
    },
    {
      city_symbol: ["66 "],
      english_name: ["merhavya(qibbuz) "],
      hebrew_name: ["מרחביה )קיבוץ( "],
    },
    {
      city_symbol: ["1098 "],
      english_name: ["merkaz shappira "],
      hebrew_name: ["מרכז שפירא "],
    },
    {
      city_symbol: ["421 "],
      english_name: ["mash'abbe sade "],
      hebrew_name: ["משאבי שדה "],
    },
    {
      city_symbol: ["765 "],
      english_name: ["misgav dov "],
      hebrew_name: ["משגב דב "],
    },
    {
      city_symbol: ["378 "],
      english_name: ["misgav am "],
      hebrew_name: ["משגב עם "],
    },
    {
      city_symbol: ["520 "],
      english_name: ["meshhed "],
      hebrew_name: ["משהד "],
    },
    {
      city_symbol: ["3605 "],
      english_name: ["massu'a "],
      hebrew_name: ["משואה "],
    },
    {
      city_symbol: ["620 "],
      english_name: ["massuot yizhaq "],
      hebrew_name: ["משואות יצחק "],
    },
    {
      city_symbol: ["3785 "],
      english_name: ["maskiyyot "],
      hebrew_name: ["משכיות "],
    },
    {
      city_symbol: ["670 "],
      english_name: ["mishmar ayyalon "],
      hebrew_name: ["משמר איילון "],
    },
    {
      city_symbol: ["563 "],
      english_name: ["mishmar dawid "],
      hebrew_name: ["משמר דוד "],
    },
    {
      city_symbol: ["732 "],
      english_name: ["mishmar hayarden "],
      hebrew_name: ["משמר הירדן "],
    },
    {
      city_symbol: ["395 "],
      english_name: ["mishmar hanegev "],
      hebrew_name: ["משמר הנגב "],
    },
    {
      city_symbol: ["130 "],
      english_name: ["mishmar haemeq "],
      hebrew_name: ["משמר העמק "],
    },
    {
      city_symbol: ["729 "],
      english_name: ["mishmar hashiv'a "],
      hebrew_name: ["משמר השבעה "],
    },
    {
      city_symbol: ["194 "],
      english_name: ["mishmar hasharon "],
      hebrew_name: ["משמר השרון "],
    },
    {
      city_symbol: ["213 "],
      english_name: ["mishmarot "],
      hebrew_name: ["משמרות "],
    },
    {
      city_symbol: ["425 "],
      english_name: ["mishmeret "],
      hebrew_name: ["משמרת "],
    },
    {
      city_symbol: ["791 "],
      english_name: ["mash'en "],
      hebrew_name: ["משען "],
    },
    {
      city_symbol: ["1315 "],
      english_name: ["mattan "],
      hebrew_name: ["מתן "],
    },
    {
      city_symbol: ["1184 "],
      english_name: ["mattat "],
      hebrew_name: ["מתת "],
    },
    {
      city_symbol: ["3648 "],
      english_name: ["mattityahu "],
      hebrew_name: ["מתתיהו "],
    },
    {
      city_symbol: ["4551 "],
      english_name: ["ne'ot golan "],
      hebrew_name: ["נאות גולן "],
    },
    {
      city_symbol: ["1124 "],
      english_name: ["ne'ot hakikkar "],
      hebrew_name: ["נאות הכיכר "],
    },
    {
      city_symbol: ["408 "],
      english_name: ["ne'ot mordekhay "],
      hebrew_name: ["נאות מרדכי "],
    },
    {
      city_symbol: ["1197 "],
      english_name: ["shizzafon "],
      hebrew_name: ["נאות סמדר "],
    },
    {
      city_symbol: ["524 "],
      english_name: ["na'ura "],
      hebrew_name: ["נאעורה "],
    },
    {
      city_symbol: ["396 "],
      english_name: ["nevatim "],
      hebrew_name: ["נבטים "],
    },
    {
      city_symbol: ["315 "],
      english_name: ["negba "],
      hebrew_name: ["נגבה "],
    },
    {
      city_symbol: ["3724 "],
      english_name: ["negohot "],
      hebrew_name: ["נגוהות "],
    },
    {
      city_symbol: ["309 "],
      english_name: ["nehora "],
      hebrew_name: ["נהורה "],
    },
    {
      city_symbol: ["80 "],
      english_name: ["nahalal "],
      hebrew_name: ["נהלל "],
    },
    {
      city_symbol: ["9100 "],
      english_name: ["nahariyya "],
      hebrew_name: ["נהריה "],
    },
    {
      city_symbol: ["4304 "],
      english_name: ["nov "],
      hebrew_name: ["נוב "],
    },
    {
      city_symbol: ["55 "],
      english_name: ["nogah "],
      hebrew_name: ["נוגה "],
    },
    {
      city_symbol: ["3573 "],
      english_name: ["neve tsuf "],
      hebrew_name: ["נוה צוף "],
    },
    {
      city_symbol: ["1366 "],
      english_name: ["nave "],
      hebrew_name: ["נווה "],
    },
    {
      city_symbol: ["926 "],
      english_name: ["newe avot "],
      hebrew_name: ["נווה אבות "],
    },
    {
      city_symbol: ["590 "],
      english_name: ["newe ur "],
      hebrew_name: ["נווה אור "],
    },
    {
      city_symbol: ["4303 "],
      english_name: ["newe ativ "],
      hebrew_name: ['נווה אטי"ב '],
    },
    {
      city_symbol: ["405 "],
      english_name: ["newe ilan "],
      hebrew_name: ["נווה אילן "],
    },
    {
      city_symbol: ["296 "],
      english_name: ["newe etan "],
      hebrew_name: ["נווה איתן "],
    },
    {
      city_symbol: ["3725 "],
      english_name: ["newe daniyyel "],
      hebrew_name: ["נווה דניאל "],
    },
    {
      city_symbol: ["1057 "],
      english_name: ["newe zohar "],
      hebrew_name: ["נווה זוהר "],
    },
    {
      city_symbol: ["1314 "],
      english_name: ["newe ziv "],
      hebrew_name: ["נווה זיו "],
    },
    {
      city_symbol: ["1279 "],
      english_name: ["newe harif "],
      hebrew_name: ["נווה חריף "],
    },
    {
      city_symbol: ["312 "],
      english_name: ["newe yam "],
      hebrew_name: ["נווה ים "],
    },
    {
      city_symbol: ["686 "],
      english_name: ["newe yamin "],
      hebrew_name: ["נווה ימין "],
    },
    {
      city_symbol: ["858 "],
      english_name: ["newe yaraq "],
      hebrew_name: ["נווה ירק "],
    },
    {
      city_symbol: ["827 "],
      english_name: ["newe mivtah "],
      hebrew_name: ["נווה מבטח "],
    },
    {
      city_symbol: ["1071 "],
      english_name: ["newe mikha'el "],
      hebrew_name: ["נווה מיכאל "],
    },
    {
      city_symbol: ["1259 "],
      english_name: ["newe shalom "],
      hebrew_name: ["נווה שלום "],
    },
    {
      city_symbol: ["15 "],
      english_name: ["no'am "],
      hebrew_name: ["נועם "],
    },
    {
      city_symbol: ["1333 "],
      english_name: ["nof ayyalon "],
      hebrew_name: ["נוף איילון "],
    },
    {
      city_symbol: ["3790 "],
      english_name: ["nofim "],
      hebrew_name: ["נופים "],
    },
    {
      city_symbol: ["1284 "],
      english_name: ["nofit "],
      hebrew_name: ["נופית "],
    },
    {
      city_symbol: ["257 "],
      english_name: ["nofekh "],
      hebrew_name: ["נופך "],
    },
    {
      city_symbol: ["3726 "],
      english_name: ["noqedim "],
      hebrew_name: ["נוקדים "],
    },
    {
      city_symbol: ["447 "],
      english_name: ["nordiyya "],
      hebrew_name: ["נורדיה "],
    },
    {
      city_symbol: ["833 "],
      english_name: ["nurit "],
      hebrew_name: ["נורית "],
    },
    {
      city_symbol: ["59 "],
      english_name: ["nehusha "],
      hebrew_name: ["נחושה "],
    },
    {
      city_symbol: ["844 "],
      english_name: ["nahal oz "],
      hebrew_name: ["נחל עוז "],
    },
    {
      city_symbol: ["2045 "],
      english_name: ["nahala "],
      hebrew_name: ["נחלה "],
    },
    {
      city_symbol: ["3767 "],
      english_name: ["nahali'el "],
      hebrew_name: ["נחליאל "],
    },
    {
      city_symbol: ["449 "],
      english_name: ["nehalim "],
      hebrew_name: ["נחלים "],
    },
    {
      city_symbol: ["809 "],
      english_name: ["naham "],
      hebrew_name: ["נחם "],
    },
    {
      city_symbol: ["522 "],
      english_name: ["nahef "],
      hebrew_name: ["נחף "],
    },
    {
      city_symbol: ["433 "],
      english_name: ["nahsholim "],
      hebrew_name: ["נחשולים "],
    },
    {
      city_symbol: ["777 "],
      english_name: ["nahshon "],
      hebrew_name: ["נחשון "],
    },
    {
      city_symbol: ["705 "],
      english_name: ["nahshonim "],
      hebrew_name: ["נחשונים "],
    },
    {
      city_symbol: ["1147 "],
      english_name: ["netu'a "],
      hebrew_name: ["נטועה "],
    },
    {
      city_symbol: ["4014 "],
      english_name: ["natur "],
      hebrew_name: ["נטור "],
    },
    {
      city_symbol: ["1369 "],
      english_name: ["neta "],
      hebrew_name: ["נטע "],
    },
    {
      city_symbol: ["174 "],
      english_name: ["neta'im "],
      hebrew_name: ["נטעים "],
    },
    {
      city_symbol: ["1254 "],
      english_name: ["nataf "],
      hebrew_name: ["נטף "],
    },
    {
      city_symbol: ["523 "],
      english_name: ["nein "],
      hebrew_name: ["ניין "],
    },
    {
      city_symbol: ["3655 "],
      english_name: ["nili "],
      hebrew_name: ['ניל"י '],
    },
    {
      city_symbol: ["351 "],
      english_name: ["nizzan "],
      hebrew_name: ["ניצן "],
    },
    {
      city_symbol: ["1419 "],
      english_name: ["nizzan b "],
      hebrew_name: ["ניצן ב' "],
    },
    {
      city_symbol: ["1195 "],
      english_name: ["nizzana (qehilat hin "],
      hebrew_name: ["ניצנה )קהילת חינוך( "],
    },
    {
      city_symbol: ["1280 "],
      english_name: ["nizzane sinay "],
      hebrew_name: ["ניצני סיני "],
    },
    {
      city_symbol: ["851 "],
      english_name: ["nizzane oz "],
      hebrew_name: ["ניצני עוז "],
    },
    {
      city_symbol: ["359 "],
      english_name: ["nizzanim "],
      hebrew_name: ["ניצנים "],
    },
    {
      city_symbol: ["808 "],
      english_name: ["nir eliyyahu "],
      hebrew_name: ["ניר אליהו "],
    },
    {
      city_symbol: ["553 "],
      english_name: ["nir banim "],
      hebrew_name: ["ניר בנים "],
    },
    {
      city_symbol: ["720 "],
      english_name: ["nir gallim "],
      hebrew_name: ["ניר גלים "],
    },
    {
      city_symbol: ["256 "],
      english_name: ["nir dawid (tel amal) "],
      hebrew_name: ["ניר דוד )תל עמל( "],
    },
    {
      city_symbol: ["11 "],
      english_name: ["nir hen "],
      hebrew_name: ['ניר ח"ן '],
    },
    {
      city_symbol: ["165 "],
      english_name: ["nir yafe "],
      hebrew_name: ["ניר יפה "],
    },
    {
      city_symbol: ["402 "],
      english_name: ["nir yizhaq "],
      hebrew_name: ["ניר יצחק "],
    },
    {
      city_symbol: ["699 "],
      english_name: ["nir yisra'el "],
      hebrew_name: ["ניר ישראל "],
    },
    {
      city_symbol: ["2047 "],
      english_name: ["nir moshe "],
      hebrew_name: ["ניר משה "],
    },
    {
      city_symbol: ["69 "],
      english_name: ["nir oz "],
      hebrew_name: ["ניר עוז "],
    },
    {
      city_symbol: ["348 "],
      english_name: ["nir am "],
      hebrew_name: ["ניר עם "],
    },
    {
      city_symbol: ["769 "],
      english_name: ["nir ezyon "],
      hebrew_name: ["ניר עציון "],
    },
    {
      city_symbol: ["2048 "],
      english_name: ["nir aqiva "],
      hebrew_name: ["ניר עקיבא "],
    },
    {
      city_symbol: ["331 "],
      english_name: ["nir zevi "],
      hebrew_name: ["ניר צבי "],
    },
    {
      city_symbol: ["602 "],
      english_name: ["nirim "],
      hebrew_name: ["נירים "],
    },
    {
      city_symbol: ["1236 "],
      english_name: ["nirit "],
      hebrew_name: ["נירית "],
    },
    {
      city_symbol: ["4035 "],
      english_name: ["nimrod "],
      hebrew_name: ["נמרוד "],
    },
    {
      city_symbol: ["825 "],
      english_name: ["nes harim "],
      hebrew_name: ["נס הרים "],
    },
    {
      city_symbol: ["1143 "],
      english_name: ["nes ammim "],
      hebrew_name: ["נס עמים "],
    },
    {
      city_symbol: ["7200 "],
      english_name: ["nes ziyyona "],
      hebrew_name: ["נס ציונה "],
    },
    {
      city_symbol: ["186 "],
      english_name: ["ne'urim "],
      hebrew_name: ["נעורים "],
    },
    {
      city_symbol: ["3787 "],
      english_name: ["na'ale "],
      hebrew_name: ["נעלה "],
    },
    {
      city_symbol: ["3713 "],
      english_name: ["naama "],
      hebrew_name: ['נעמ"ה '],
    },
    {
      city_symbol: ["158 "],
      english_name: ["na'an "],
      hebrew_name: ["נען "],
    },
    {
      city_symbol: ["3620 "],
      english_name: ["na'aran "],
      hebrew_name: ["נערן "],
    },
    {
      city_symbol: ["1041 "],
      english_name: ["nasasra "],
      hebrew_name: ["נצאצרה )שבט( "],
    },
    {
      city_symbol: ["1372 "],
      english_name: ["nezer hazzani "],
      hebrew_name: ["נצר חזני "],
    },
    {
      city_symbol: ["435 "],
      english_name: ["nezer sereni "],
      hebrew_name: ["נצר סרני "],
    },
    {
      city_symbol: ["7300 "],
      english_name: ["nazareth "],
      hebrew_name: ["נצרת "],
    },
    {
      city_symbol: ["1061 "],
      english_name: ["nazerat illit "],
      hebrew_name: ["נצרת עילית "],
    },
    {
      city_symbol: ["2500 "],
      english_name: ["nesher "],
      hebrew_name: ["נשר "],
    },
    {
      city_symbol: ["3555 "],
      english_name: ["netiv hagedud "],
      hebrew_name: ["נתיב הגדוד "],
    },
    {
      city_symbol: ["693 "],
      english_name: ["netiv halamed-he "],
      hebrew_name: ['נתיב הל"ה '],
    },
    {
      city_symbol: ["1242 "],
      english_name: ["netiv haasara "],
      hebrew_name: ["נתיב העשרה "],
    },
    {
      city_symbol: ["792 "],
      english_name: ["netiv hashayyara "],
      hebrew_name: ["נתיב השיירה "],
    },
    {
      city_symbol: ["246 "],
      english_name: ["netivot "],
      hebrew_name: ["נתיבות "],
    },
    {
      city_symbol: ["7400 "],
      english_name: ["netanya "],
      hebrew_name: ["נתניה "],
    },
    {
      city_symbol: ["525 "],
      english_name: ["sajur "],
      hebrew_name: ["סאג'ור "],
    },
    {
      city_symbol: ["578 "],
      english_name: ["sasa "],
      hebrew_name: ["סאסא "],
    },
    {
      city_symbol: ["587 "],
      english_name: ["savyon "],
      hebrew_name: ["סביון "],
    },
    {
      city_symbol: ["2046 "],
      english_name: ["segula "],
      hebrew_name: ["סגולה "],
    },
    {
      city_symbol: ["942 "],
      english_name: ["sawa'id(hamriyye) "],
      hebrew_name: ["סואעד )חמרייה( "],
    },
    {
      city_symbol: ["989 "],
      english_name: ["sawa'id (kamane) "],
      hebrew_name: ["סואעד )כמאנה( )שבט( "],
    },
    {
      city_symbol: ["526 "],
      english_name: ["sulam "],
      hebrew_name: ["סולם "],
    },
    {
      city_symbol: ["3756 "],
      english_name: ["suseya "],
      hebrew_name: ["סוסיה "],
    },
    {
      city_symbol: ["1238 "],
      english_name: ["sufa "],
      hebrew_name: ["סופה "],
    },
    {
      city_symbol: ["7500 "],
      english_name: ["sakhnin "],
      hebrew_name: ["סח'נין "],
    },
    {
      city_symbol: ["1170 "],
      english_name: ["sayyid "],
      hebrew_name: ["סייד )שבט( "],
    },
    {
      city_symbol: ["1245 "],
      english_name: ["sallama "],
      hebrew_name: ["סלמה "],
    },
    {
      city_symbol: ["3567 "],
      english_name: ["sal'it "],
      hebrew_name: ["סלעית "],
    },
    {
      city_symbol: ["1156 "],
      english_name: ["samar "],
      hebrew_name: ["סמר "],
    },
    {
      city_symbol: ["3777 "],
      english_name: ["sansana "],
      hebrew_name: ["סנסנה "],
    },
    {
      city_symbol: ["419 "],
      english_name: ["sa'ad "],
      hebrew_name: ["סעד "],
    },
    {
      city_symbol: ["1360 "],
      english_name: ["sa'wa "],
      hebrew_name: ["סעוה "],
    },
    {
      city_symbol: ["454 "],
      english_name: ["sa'ar "],
      hebrew_name: ["סער "],
    },
    {
      city_symbol: ["1176 "],
      english_name: ["sappir "],
      hebrew_name: ["ספיר "],
    },
    {
      city_symbol: ["610 "],
      english_name: ["sitriyya "],
      hebrew_name: ["סתריה "],
    },
    {
      city_symbol: ["4501 "],
      english_name: ["ghajar "],
      hebrew_name: ["ע'ג'ר "],
    },
    {
      city_symbol: ["892 "],
      english_name: ["avdon "],
      hebrew_name: ["עבדון "],
    },
    {
      city_symbol: ["376 "],
      english_name: ["evron "],
      hebrew_name: ["עברון "],
    },
    {
      city_symbol: ["794 "],
      english_name: ["agur "],
      hebrew_name: ["עגור "],
    },
    {
      city_symbol: ["1199 "],
      english_name: ["adi "],
      hebrew_name: ["עדי "],
    },
    {
      city_symbol: ["2035 "],
      english_name: ["adanim "],
      hebrew_name: ["עדנים "],
    },
    {
      city_symbol: ["826 "],
      english_name: ["uza "],
      hebrew_name: ["עוזה "],
    },
    {
      city_symbol: ["528 "],
      english_name: ["uzeir "],
      hebrew_name: ["עוזייר "],
    },
    {
      city_symbol: ["737 "],
      english_name: ["olesh "],
      hebrew_name: ["עולש "],
    },
    {
      city_symbol: ["666 "],
      english_name: ["omer "],
      hebrew_name: ["עומר "],
    },
    {
      city_symbol: ["810 "],
      english_name: ["ofer "],
      hebrew_name: ["עופר "],
    },
    {
      city_symbol: ["3617 "],
      english_name: ["ofra "],
      hebrew_name: ["עופרה "],
    },
    {
      city_symbol: ["32 "],
      english_name: ["ozem "],
      hebrew_name: ["עוצם "],
    },
    {
      city_symbol: ["957 "],
      english_name: ["uqbi (banu uqba) "],
      hebrew_name: ["עוקבי )בנו עוקבה( "],
    },
    {
      city_symbol: ["328 "],
      english_name: ["ezuz "],
      hebrew_name: ["עזוז "],
    },
    {
      city_symbol: ["1149 "],
      english_name: ["ezer "],
      hebrew_name: ["עזר "],
    },
    {
      city_symbol: ["837 "],
      english_name: ["azri'el "],
      hebrew_name: ["עזריאל "],
    },
    {
      city_symbol: ["711 "],
      english_name: ["azarya "],
      hebrew_name: ["עזריה "],
    },
    {
      city_symbol: ["817 "],
      english_name: ["azriqam "],
      hebrew_name: ["עזריקם "],
    },
    {
      city_symbol: ["969 "],
      english_name: ["atawne "],
      hebrew_name: ["עטאוונה )שבט( "],
    },
    {
      city_symbol: ["3658 "],
      english_name: ["ateret "],
      hebrew_name: ["עטרת "],
    },
    {
      city_symbol: ["1175 "],
      english_name: ["iddan "],
      hebrew_name: ["עידן "],
    },
    {
      city_symbol: ["530 "],
      english_name: ["eilabun "],
      hebrew_name: ["עיילבון "],
    },
    {
      city_symbol: ["156 "],
      english_name: ["ayanot "],
      hebrew_name: ["עיינות "],
    },
    {
      city_symbol: ["511 "],
      english_name: ["ilut "],
      hebrew_name: ["עילוט "],
    },
    {
      city_symbol: ["687 "],
      english_name: ["en ayyala "],
      hebrew_name: ["עין איילה "],
    },
    {
      city_symbol: ["546 "],
      english_name: ["ein al-asad "],
      hebrew_name: ["עין אל-אסד "],
    },
    {
      city_symbol: ["273 "],
      english_name: ["en gev "],
      hebrew_name: ["עין גב "],
    },
    {
      city_symbol: ["2042 "],
      english_name: ["en gedi "],
      hebrew_name: ["עין גדי "],
    },
    {
      city_symbol: ["436 "],
      english_name: ["en dor "],
      hebrew_name: ["עין דור "],
    },
    {
      city_symbol: ["1240 "],
      english_name: ["en habesor "],
      hebrew_name: ["עין הבשור "],
    },
    {
      city_symbol: ["74 "],
      english_name: ["en hod "],
      hebrew_name: ["עין הוד "],
    },
    {
      city_symbol: ["167 "],
      english_name: ["en hahoresh "],
      hebrew_name: ["עין החורש "],
    },
    {
      city_symbol: ["289 "],
      english_name: ["en hamifraz "],
      hebrew_name: ["עין המפרץ "],
    },
    {
      city_symbol: ["383 "],
      english_name: ["en hanaziv "],
      hebrew_name: ['עין הנצי"ב '],
    },
    {
      city_symbol: ["367 "],
      english_name: ["en haemeq "],
      hebrew_name: ["עין העמק "],
    },
    {
      city_symbol: ["270 "],
      english_name: ["en hashofet "],
      hebrew_name: ["עין השופט "],
    },
    {
      city_symbol: ["676 "],
      english_name: ["en hashelosha "],
      hebrew_name: ["עין השלושה "],
    },
    {
      city_symbol: ["157 "],
      english_name: ["en wered "],
      hebrew_name: ["עין ורד "],
    },
    {
      city_symbol: ["4503 "],
      english_name: ["en ziwan "],
      hebrew_name: ["עין זיוון "],
    },
    {
      city_symbol: ["1320 "],
      english_name: ["ein hod "],
      hebrew_name: ["עין חוד "],
    },
    {
      city_symbol: ["1053 "],
      english_name: ["en hazeva "],
      hebrew_name: ["עין חצבה "],
    },
    {
      city_symbol: ["89 "],
      english_name: ["en harod (ihud) "],
      hebrew_name: ["עין חרוד )איחוד( "],
    },
    {
      city_symbol: ["82 "],
      english_name: ["en harod(me'uhad) "],
      hebrew_name: ["עין חרוד )מאוחד( "],
    },
    {
      city_symbol: ["806 "],
      english_name: ["en yahav "],
      hebrew_name: ["עין יהב "],
    },
    {
      city_symbol: ["813 "],
      english_name: ["en ya'aqov "],
      hebrew_name: ["עין יעקב "],
    },
    {
      city_symbol: ["1056 "],
      english_name: ["en karem-b.s.haqla'i "],
      hebrew_name: ['עין כרם-בי"ס חקלאי '],
    },
    {
      city_symbol: ["426 "],
      english_name: ["en karmel "],
      hebrew_name: ["עין כרמל "],
    },
    {
      city_symbol: ["532 "],
      english_name: ["ein mahel "],
      hebrew_name: ["עין מאהל "],
    },
    {
      city_symbol: ["521 "],
      english_name: ["ein naqquba "],
      hebrew_name: ["עין נקובא "],
    },
    {
      city_symbol: ["223 "],
      english_name: ["en iron "],
      hebrew_name: ["עין עירון "],
    },
    {
      city_symbol: ["622 "],
      english_name: ["en zurim "],
      hebrew_name: ["עין צורים "],
    },
    {
      city_symbol: ["4502 "],
      english_name: ["ein qiniyye "],
      hebrew_name: ["עין קנייא "],
    },
    {
      city_symbol: ["514 "],
      english_name: ["ein rafa "],
      hebrew_name: ["עין ראפה "],
    },
    {
      city_symbol: ["139 "],
      english_name: ["en shemer "],
      hebrew_name: ["עין שמר "],
    },
    {
      city_symbol: ["880 "],
      english_name: ["en sarid "],
      hebrew_name: ["עין שריד "],
    },
    {
      city_symbol: ["1251 "],
      english_name: ["en tamar "],
      hebrew_name: ["עין תמר "],
    },
    {
      city_symbol: ["871 "],
      english_name: ["enat "],
      hebrew_name: ["עינת "],
    },
    {
      city_symbol: ["1187 "],
      english_name: ["ir ovot "],
      hebrew_name: ["עיר אובות "],
    },
    {
      city_symbol: ["7600 "],
      english_name: ["akko "],
      hebrew_name: ["עכו "],
    },
    {
      city_symbol: ["1146 "],
      english_name: ["alumim "],
      hebrew_name: ["עלומים "],
    },
    {
      city_symbol: ["3765 "],
      english_name: ["eli "],
      hebrew_name: ["עלי "],
    },
    {
      city_symbol: ["3727 "],
      english_name: ["ale zahav "],
      hebrew_name: ["עלי זהב "],
    },
    {
      city_symbol: ["688 "],
      english_name: ["alma "],
      hebrew_name: ["עלמה "],
    },
    {
      city_symbol: ["3715 "],
      english_name: ["almon "],
      hebrew_name: ["עלמון "],
    },
    {
      city_symbol: ["1212 "],
      english_name: ["amuqqa "],
      hebrew_name: ["עמוקה "],
    },
    {
      city_symbol: ["3824 "],
      english_name: ["ammihay "],
      hebrew_name: ["עמיחי "],
    },
    {
      city_symbol: ["779 "],
      english_name: ["amminadav "],
      hebrew_name: ["עמינדב "],
    },
    {
      city_symbol: ["385 "],
      english_name: ["ammi'ad "],
      hebrew_name: ["עמיעד "],
    },
    {
      city_symbol: ["318 "],
      english_name: ["ammi'oz "],
      hebrew_name: ["עמיעוז "],
    },
    {
      city_symbol: ["773 "],
      english_name: ["ammiqam "],
      hebrew_name: ["עמיקם "],
    },
    {
      city_symbol: ["319 "],
      english_name: ["amir "],
      hebrew_name: ["עמיר "],
    },
    {
      city_symbol: ["3660 "],
      english_name: ["immanu'el "],
      hebrew_name: ["עמנואל "],
    },
    {
      city_symbol: ["708 "],
      english_name: ["amqa "],
      hebrew_name: ["עמקה "],
    },
    {
      city_symbol: ["3712 "],
      english_name: ["enav "],
      hebrew_name: ["ענב "],
    },
    {
      city_symbol: ["534 "],
      english_name: ["isifya "],
      hebrew_name: ["עספיא "],
    },
    {
      city_symbol: ["7700 "],
      english_name: ["afula "],
      hebrew_name: ["עפולה "],
    },
    {
      city_symbol: ["3778 "],
      english_name: ["ez efrayim "],
      hebrew_name: ["עץ אפרים "],
    },
    {
      city_symbol: ["917 "],
      english_name: ["atsmon-segev "],
      hebrew_name: ["עצמון שגב "],
    },
    {
      city_symbol: ["531 "],
      english_name: ["arrabe "],
      hebrew_name: ["עראבה "],
    },
    {
      city_symbol: ["1246 "],
      english_name: ["aramsha "],
      hebrew_name: ["עראמשה "],
    },
    {
      city_symbol: ["1335 "],
      english_name: ["arrab al naim "],
      hebrew_name: ["ערב אל נעים "],
    },
    {
      city_symbol: ["2560 "],
      english_name: ["arad "],
      hebrew_name: ["ערד "],
    },
    {
      city_symbol: ["593 "],
      english_name: ["arugot "],
      hebrew_name: ["ערוגות "],
    },
    {
      city_symbol: ["637 "],
      english_name: ["ar'ara "],
      hebrew_name: ["ערערה "],
    },
    {
      city_symbol: ["1192 "],
      english_name: ["ar'ara-banegev "],
      hebrew_name: ["ערערה-בנגב "],
    },
    {
      city_symbol: ["591 "],
      english_name: ["aseret "],
      hebrew_name: ["עשרת "],
    },
    {
      city_symbol: ["53 "],
      english_name: ["atlit "],
      hebrew_name: ["עתלית "],
    },
    {
      city_symbol: ["3748 "],
      english_name: ["otni'el "],
      hebrew_name: ["עתניאל "],
    },
    {
      city_symbol: ["1151 "],
      english_name: ["paran "],
      hebrew_name: ["פארן "],
    },
    {
      city_symbol: ["3768 "],
      english_name: ["pedu'el "],
      hebrew_name: ["פדואל "],
    },
    {
      city_symbol: ["750 "],
      english_name: ["peduyim "],
      hebrew_name: ["פדויים "],
    },
    {
      city_symbol: ["838 "],
      english_name: ["pedaya "],
      hebrew_name: ["פדיה "],
    },
    {
      city_symbol: ["1104 "],
      english_name: ["poriyya-kefar avoda "],
      hebrew_name: ["פוריה - כפר עבודה "],
    },
    {
      city_symbol: ["1105 "],
      english_name: ["poriyya-newe oved "],
      hebrew_name: ["פוריה - נווה עובד "],
    },
    {
      city_symbol: ["1313 "],
      english_name: ["poriyya illit "],
      hebrew_name: ["פוריה עילית "],
    },
    {
      city_symbol: ["537 "],
      english_name: ["fureidis "],
      hebrew_name: ["פוריידיס "],
    },
    {
      city_symbol: ["767 "],
      english_name: ["porat "],
      hebrew_name: ["פורת "],
    },
    {
      city_symbol: ["749 "],
      english_name: ["pattish "],
      hebrew_name: ["פטיש "],
    },
    {
      city_symbol: ["1185 "],
      english_name: ["pelekh "],
      hebrew_name: ["פלך "],
    },
    {
      city_symbol: ["597 "],
      english_name: ["palmahim "],
      hebrew_name: ["פלמחים "],
    },
    {
      city_symbol: ["3723 "],
      english_name: ["pene hever "],
      hebrew_name: ["פני חבר "],
    },
    {
      city_symbol: ["3659 "],
      english_name: ["pesagot "],
      hebrew_name: ["פסגות "],
    },
    {
      city_symbol: ["535 "],
      english_name: ["fassuta "],
      hebrew_name: ["פסוטה "],
    },
    {
      city_symbol: ["2059 "],
      english_name: ["pa'ame tashaz "],
      hebrew_name: ['פעמי תש"ז '],
    },
    {
      city_symbol: ["3615 "],
      english_name: ["peza'el "],
      hebrew_name: ["פצאל "],
    },
    {
      city_symbol: ["536 "],
      english_name: ["peqi'in (buqei'a) "],
      hebrew_name: ["פקיעין )בוקייעה( "],
    },
    {
      city_symbol: ["281 "],
      english_name: ["peqi'in hadasha "],
      hebrew_name: ["פקיעין חדשה "],
    },
    {
      city_symbol: ["7800 "],
      english_name: ["pardes hanna-karkur "],
      hebrew_name: ["פרדס חנה-כרכור "],
    },
    {
      city_symbol: ["171 "],
      english_name: ["pardesiyya "],
      hebrew_name: ["פרדסיה "],
    },
    {
      city_symbol: ["599 "],
      english_name: ["parod "],
      hebrew_name: ["פרוד "],
    },
    {
      city_symbol: ["2053 "],
      english_name: ["perazon "],
      hebrew_name: ["פרזון "],
    },
    {
      city_symbol: ["1231 "],
      english_name: ["peri gan "],
      hebrew_name: ["פרי גן "],
    },
    {
      city_symbol: ["7900 "],
      english_name: ["petah tiqwa "],
      hebrew_name: ["פתח תקווה "],
    },
    {
      city_symbol: ["839 "],
      english_name: ["petahya "],
      hebrew_name: ["פתחיה "],
    },
    {
      city_symbol: ["413 "],
      english_name: ["ze'elim "],
      hebrew_name: ["צאלים "],
    },
    {
      city_symbol: ["1180 "],
      english_name: ["zviyya "],
      hebrew_name: ["צביה "],
    },
    {
      city_symbol: ["1213 "],
      english_name: ["ziv'on "],
      hebrew_name: ["צבעון "],
    },
    {
      city_symbol: ["465 "],
      english_name: ["zova "],
      hebrew_name: ["צובה "],
    },
    {
      city_symbol: ["1136 "],
      english_name: ["zohar "],
      hebrew_name: ["צוחר "],
    },
    {
      city_symbol: ["1111 "],
      english_name: ["zofiyya "],
      hebrew_name: ["צופיה "],
    },
    {
      city_symbol: ["3791 "],
      english_name: ["zufin "],
      hebrew_name: ["צופים "],
    },
    {
      city_symbol: ["198 "],
      english_name: ["zofit "],
      hebrew_name: ["צופית "],
    },
    {
      city_symbol: ["1150 "],
      english_name: ["zofar "],
      hebrew_name: ["צופר "],
    },
    {
      city_symbol: ["1102 "],
      english_name: ["shoshannat haamaqim( "],
      hebrew_name: ["צוקי ים "],
    },
    {
      city_symbol: ["1262 "],
      english_name: ["mahane bildad "],
      hebrew_name: ["צוקים "],
    },
    {
      city_symbol: ["1113 "],
      english_name: ["zur hadassa "],
      hebrew_name: ["צור הדסה "],
    },
    {
      city_symbol: ["1345 "],
      english_name: ["zur yizhaq "],
      hebrew_name: ["צור יצחק "],
    },
    {
      city_symbol: ["276 "],
      english_name: ["zur moshe "],
      hebrew_name: ["צור משה "],
    },
    {
      city_symbol: ["1148 "],
      english_name: ["zur natan "],
      hebrew_name: ["צור נתן "],
    },
    {
      city_symbol: ["774 "],
      english_name: ["zuri'el "],
      hebrew_name: ["צוריאל "],
    },
    {
      city_symbol: ["1221 "],
      english_name: ["zurit "],
      hebrew_name: ["צורית "],
    },
    {
      city_symbol: ["613 "],
      english_name: ["zippori "],
      hebrew_name: ["ציפורי "],
    },
    {
      city_symbol: ["796 "],
      english_name: ["zelafon "],
      hebrew_name: ["צלפון "],
    },
    {
      city_symbol: ["636 "],
      english_name: ["sandala "],
      hebrew_name: ["צנדלה "],
    },
    {
      city_symbol: ["594 "],
      english_name: ["zafriyya "],
      hebrew_name: ["צפריה "],
    },
    {
      city_symbol: ["1079 "],
      english_name: ["zafririm "],
      hebrew_name: ["צפרירים "],
    },
    {
      city_symbol: ["8000 "],
      english_name: ["zefat "],
      hebrew_name: ["צפת "],
    },
    {
      city_symbol: ["612 "],
      english_name: ["zerufa "],
      hebrew_name: ["צרופה "],
    },
    {
      city_symbol: ["567 "],
      english_name: ["zor'a "],
      hebrew_name: ["צרעה "],
    },
    {
      city_symbol: ["1234 "],
      english_name: ["qabbo'a "],
      hebrew_name: ["קבועה )שבט( "],
    },
    {
      city_symbol: ["334 "],
      english_name: ["qevuzat yavne "],
      hebrew_name: ["קבוצת יבנה "],
    },
    {
      city_symbol: ["3557 "],
      english_name: ["qedumim "],
      hebrew_name: ["קדומים "],
    },
    {
      city_symbol: ["195 "],
      english_name: ["qadima-zoran "],
      hebrew_name: ["קדימה-צורן "],
    },
    {
      city_symbol: ["392 "],
      english_name: ["qedma "],
      hebrew_name: ["קדמה "],
    },
    {
      city_symbol: ["4025 "],
      english_name: ["qidmat zevi "],
      hebrew_name: ["קדמת צבי "],
    },
    {
      city_symbol: ["3781 "],
      english_name: ["qedar "],
      hebrew_name: ["קדר "],
    },
    {
      city_symbol: ["615 "],
      english_name: ["qidron "],
      hebrew_name: ["קדרון "],
    },
    {
      city_symbol: ["1211 "],
      english_name: ["qaddarim "],
      hebrew_name: ["קדרים "],
    },
    {
      city_symbol: ["964 "],
      english_name: ["qudeirat as-sani "],
      hebrew_name: ["קודייראת א-צאנע)שבט( "],
    },
    {
      city_symbol: ["972 "],
      english_name: ["qawa'in "],
      hebrew_name: ["קוואעין )שבט( "],
    },
    {
      city_symbol: ["766 "],
      english_name: ["qomemiyyut "],
      hebrew_name: ["קוממיות "],
    },
    {
      city_symbol: ["1179 "],
      english_name: ["qoranit "],
      hebrew_name: ["קורנית "],
    },
    {
      city_symbol: ["1052 "],
      english_name: ["qetura "],
      hebrew_name: ["קטורה "],
    },
    {
      city_symbol: ["1167 "],
      english_name: ["qesariyya "],
      hebrew_name: ["קיסריה "],
    },
    {
      city_symbol: ["414 "],
      english_name: ["qelahim "],
      hebrew_name: ["קלחים "],
    },
    {
      city_symbol: ["3601 "],
      english_name: ["qalya "],
      hebrew_name: ["קליה "],
    },
    {
      city_symbol: ["638 "],
      english_name: ["qalansawe "],
      hebrew_name: ["קלנסווה "],
    },
    {
      city_symbol: ["4024 "],
      english_name: ["qela "],
      hebrew_name: ["קלע "],
    },
    {
      city_symbol: ["1243 "],
      english_name: ["qazir "],
      hebrew_name: ["קציר "],
    },
    {
      city_symbol: ["1347 "],
      english_name: ["qasr a-sir "],
      hebrew_name: ["קצר א-סר "],
    },
    {
      city_symbol: ["4100 "],
      english_name: ["qazrin "],
      hebrew_name: ["קצרין "],
    },
    {
      city_symbol: ["2620 "],
      english_name: ["qiryat ono "],
      hebrew_name: ["קרית אונו "],
    },
    {
      city_symbol: ["3611 "],
      english_name: ["qiryat arba "],
      hebrew_name: ["קרית ארבע "],
    },
    {
      city_symbol: ["6800 "],
      english_name: ["qiryat atta "],
      hebrew_name: ["קרית אתא "],
    },
    {
      city_symbol: ["9500 "],
      english_name: ["qiryat bialik "],
      hebrew_name: ["קרית ביאליק "],
    },
    {
      city_symbol: ["2630 "],
      english_name: ["qiryat gat "],
      hebrew_name: ["קרית גת "],
    },
    {
      city_symbol: ["2300 "],
      english_name: ["qiryat tiv'on "],
      hebrew_name: ["קרית טבעון "],
    },
    {
      city_symbol: ["9600 "],
      english_name: ["qiryat yam "],
      hebrew_name: ["קרית ים "],
    },
    {
      city_symbol: ["1137 "],
      english_name: ["qiryat ye'arim "],
      hebrew_name: ["קרית יערים "],
    },
    {
      city_symbol: ["2039 "],
      english_name: ["qiryat ye'arim(insti "],
      hebrew_name: ["קרית יערים)מוסד( "],
    },
    {
      city_symbol: ["8200 "],
      english_name: ["qiryat motzkin "],
      hebrew_name: ["קרית מוצקין "],
    },
    {
      city_symbol: ["1034 "],
      english_name: ["qiryat mal'akhi "],
      hebrew_name: ["קרית מלאכי "],
    },
    {
      city_symbol: ["3746 "],
      english_name: ["qiryat netafim "],
      hebrew_name: ["קרית נטפים "],
    },
    {
      city_symbol: ["78 "],
      english_name: ["qiryat anavim "],
      hebrew_name: ["קרית ענבים "],
    },
    {
      city_symbol: ["469 "],
      english_name: ["qiryat eqron "],
      hebrew_name: ["קרית עקרון "],
    },
    {
      city_symbol: ["412 "],
      english_name: ["qiryat shelomo "],
      hebrew_name: ["קרית שלמה "],
    },
    {
      city_symbol: ["2800 "],
      english_name: ["qiryat shemona "],
      hebrew_name: ["קרית שמונה "],
    },
    {
      city_symbol: ["3640 "],
      english_name: ["qarne shomeron "],
      hebrew_name: ["קרני שומרון "],
    },
    {
      city_symbol: ["4006 "],
      english_name: ["qeshet "],
      hebrew_name: ["קשת "],
    },
    {
      city_symbol: ["543 "],
      english_name: ["rame "],
      hebrew_name: ["ראמה "],
    },
    {
      city_symbol: ["1334 "],
      english_name: ["ras al-ein "],
      hebrew_name: ["ראס אל-עין "],
    },
    {
      city_symbol: ["990 "],
      english_name: ["ras ali "],
      hebrew_name: ["ראס עלי "],
    },
    {
      city_symbol: ["2640 "],
      english_name: ["rosh haayin "],
      hebrew_name: ["ראש העין "],
    },
    {
      city_symbol: ["26 "],
      english_name: ["rosh pinna "],
      hebrew_name: ["ראש פינה "],
    },
    {
      city_symbol: ["3602 "],
      english_name: ["rosh zurim "],
      hebrew_name: ["ראש צורים "],
    },
    {
      city_symbol: ["8300 "],
      english_name: ["rishon leziyyon "],
      hebrew_name: ["ראשון לציון "],
    },
    {
      city_symbol: ["3795 "],
      english_name: ["revava "],
      hebrew_name: ["רבבה "],
    },
    {
      city_symbol: ["564 "],
      english_name: ["revadim "],
      hebrew_name: ["רבדים "],
    },
    {
      city_symbol: ["354 "],
      english_name: ["revivim "],
      hebrew_name: ["רביבים "],
    },
    {
      city_symbol: ["1225 "],
      english_name: ["ravid "],
      hebrew_name: ["רביד "],
    },
    {
      city_symbol: ["390 "],
      english_name: ["regba "],
      hebrew_name: ["רגבה "],
    },
    {
      city_symbol: ["444 "],
      english_name: ["regavim "],
      hebrew_name: ["רגבים "],
    },
    {
      city_symbol: ["1161 "],
      english_name: ["rahat "],
      hebrew_name: ["רהט "],
    },
    {
      city_symbol: ["2051 "],
      english_name: ["rewaha "],
      hebrew_name: ["רווחה "],
    },
    {
      city_symbol: ["2016 "],
      english_name: ["rewaya "],
      hebrew_name: ["רוויה "],
    },
    {
      city_symbol: ["1341 "],
      english_name: ["ruah midbar "],
      hebrew_name: ["רוח מדבר "],
    },
    {
      city_symbol: ["362 "],
      english_name: ["ruhama "],
      hebrew_name: ["רוחמה "],
    },
    {
      city_symbol: ["539 "],
      english_name: ["rummane "],
      hebrew_name: ["רומאנה "],
    },
    {
      city_symbol: ["997 "],
      english_name: ["rumat heib "],
      hebrew_name: ["רומת הייב "],
    },
    {
      city_symbol: ["3619 "],
      english_name: ["ro'i "],
      hebrew_name: ["רועי "],
    },
    {
      city_symbol: ["3782"],
      english_name: ["rotem"],
      hebrew_name: ["רותם"],
    },
    {
      city_symbol: ["854"],
      english_name: ["rehov"],
      hebrew_name: ["רחוב"],
    },
    {
      city_symbol: ["8400"],
      english_name: ["rehovot "],
      hebrew_name: ["רחובות"],
    },
    {
      city_symbol: ["3822 "],
      english_name: ["rehelim "],
      hebrew_name: ["רחלים "],
    },
    {
      city_symbol: ["540 "],
      english_name: ["reihaniyye "],
      hebrew_name: ["ריחאניה "],
    },
    {
      city_symbol: ["3568 "],
      english_name: ["rehan "],
      hebrew_name: ["ריחן "],
    },
    {
      city_symbol: ["542 "],
      english_name: ["reine "],
      hebrew_name: ["ריינה "],
    },
    {
      city_symbol: ["3565 "],
      english_name: ["rimmonim "],
      hebrew_name: ["רימונים "],
    },
    {
      city_symbol: ["616 "],
      english_name: ["rinnatya "],
      hebrew_name: ["רינתיה "],
    },
    {
      city_symbol: ["922 "],
      english_name: ["rekhasim "],
      hebrew_name: ["רכסים "],
    },
    {
      city_symbol: ["1069 "],
      english_name: ["ram-on "],
      hebrew_name: ["רם-און "],
    },
    {
      city_symbol: ["4702 "],
      english_name: ["ramot "],
      hebrew_name: ["רמות "],
    },
    {
      city_symbol: ["206 "],
      english_name: ["ramot hashavim "],
      hebrew_name: ["רמות השבים "],
    },
    {
      city_symbol: ["735 "],
      english_name: ["ramot me'ir "],
      hebrew_name: ["רמות מאיר "],
    },
    {
      city_symbol: ["445 "],
      english_name: ["ramot menashe "],
      hebrew_name: ["רמות מנשה "],
    },
    {
      city_symbol: ["372 "],
      english_name: ["ramot naftali "],
      hebrew_name: ["רמות נפתלי "],
    },
    {
      city_symbol: ["8500 "],
      english_name: ["ramla "],
      hebrew_name: ["רמלה "],
    },
    {
      city_symbol: ["8600 "],
      english_name: ["ramat gan "],
      hebrew_name: ["רמת גן "],
    },
    {
      city_symbol: ["135 "],
      english_name: ["ramat dawid "],
      hebrew_name: ["רמת דוד "],
    },
    {
      city_symbol: ["184 "],
      english_name: ["ramat hakovesh "],
      hebrew_name: ["רמת הכובש "],
    },
    {
      city_symbol: ["335 "],
      english_name: ["ramat hashofet "],
      hebrew_name: ["רמת השופט "],
    },
    {
      city_symbol: ["2650 "],
      english_name: ["ramat hasharon "],
      hebrew_name: ["רמת השרון "],
    },
    {
      city_symbol: ["178 "],
      english_name: ["ramat yohanan "],
      hebrew_name: ["רמת יוחנן "],
    },
    {
      city_symbol: ["122 "],
      english_name: ["ramat yishay "],
      hebrew_name: ["רמת ישי "],
    },
    {
      city_symbol: ["4701 "],
      english_name: ["ramat magshimim "],
      hebrew_name: ["רמת מגשימים "],
    },
    {
      city_symbol: ["339 "],
      english_name: ["ramat zevi "],
      hebrew_name: ["רמת צבי "],
    },
    {
      city_symbol: ["460 "],
      english_name: ["ramat razi'el "],
      hebrew_name: ["רמת רזיאל "],
    },
    {
      city_symbol: ["127 "],
      english_name: ["ramat rahel "],
      hebrew_name: ["רמת רחל "],
    },
    {
      city_symbol: ["789 "],
      english_name: ["rannen "],
      hebrew_name: ["רנן "],
    },
    {
      city_symbol: ["713 "],
      english_name: ["re'im "],
      hebrew_name: ["רעים "],
    },
    {
      city_symbol: ["8700 "],
      english_name: ["ra'anana "],
      hebrew_name: ["רעננה "],
    },
    {
      city_symbol: ["1228 "],
      english_name: ["raqefet "],
      hebrew_name: ["רקפת "],
    },
    {
      city_symbol: ["247 "],
      english_name: ["rishpon "],
      hebrew_name: ["רשפון "],
    },
    {
      city_symbol: ["437 "],
      english_name: ["reshafim "],
      hebrew_name: ["רשפים "],
    },
    {
      city_symbol: ["1260 "],
      english_name: ["retamim "],
      hebrew_name: ["רתמים "],
    },
    {
      city_symbol: ["324 "],
      english_name: ["she'ar yashuv "],
      hebrew_name: ["שאר ישוב "],
    },
    {
      city_symbol: ["1377 "],
      english_name: ["shave darom "],
      hebrew_name: ["שבי דרום "],
    },
    {
      city_symbol: ["282 "],
      english_name: ["shave ziyyon "],
      hebrew_name: ["שבי ציון "],
    },
    {
      city_symbol: ["3571 "],
      english_name: ["shave shomeron "],
      hebrew_name: ["שבי שומרון "],
    },
    {
      city_symbol: ["913 "],
      english_name: ["shibli "],
      hebrew_name: ["שבלי - אום אל-גנם "],
    },
    {
      city_symbol: ["1286 "],
      english_name: ["segev-shalom "],
      hebrew_name: ["שגב-שלום "],
    },
    {
      city_symbol: ["721 "],
      english_name: ["sede ilan "],
      hebrew_name: ["שדה אילן "],
    },
    {
      city_symbol: ["304 "],
      english_name: ["sede eliyyahu "],
      hebrew_name: ["שדה אליהו "],
    },
    {
      city_symbol: ["861 "],
      english_name: ["sede eli'ezer "],
      hebrew_name: ["שדה אליעזר "],
    },
    {
      city_symbol: ["885 "],
      english_name: ["sede boqer "],
      hebrew_name: ["שדה בוקר "],
    },
    {
      city_symbol: ["36 "],
      english_name: ["sede dawid "],
      hebrew_name: ["שדה דוד "],
    },
    {
      city_symbol: ["284 "],
      english_name: ["sede warburg "],
      hebrew_name: ["שדה ורבורג "],
    },
    {
      city_symbol: ["293 "],
      english_name: ["sede yo'av "],
      hebrew_name: ["שדה יואב "],
    },
    {
      city_symbol: ["142 "],
      english_name: ["sede ya'aqov "],
      hebrew_name: ["שדה יעקב "],
    },
    {
      city_symbol: ["2008 "],
      english_name: ["sede yizhaq "],
      hebrew_name: ["שדה יצחק "],
    },
    {
      city_symbol: ["18 "],
      english_name: ["sede moshe "],
      hebrew_name: ["שדה משה "],
    },
    {
      city_symbol: ["259 "],
      english_name: ["sede nahum "],
      hebrew_name: ["שדה נחום "],
    },
    {
      city_symbol: ["329 "],
      english_name: ["sede nehemya "],
      hebrew_name: ["שדה נחמיה "],
    },
    {
      city_symbol: ["1058 "],
      english_name: ["sede nizzan "],
      hebrew_name: ["שדה ניצן "],
    },
    {
      city_symbol: ["739 "],
      english_name: ["sede uzziyyahu "],
      hebrew_name: ["שדה עוזיהו "],
    },
    {
      city_symbol: ["2049 "],
      english_name: ["sede zevi "],
      hebrew_name: ["שדה צבי "],
    },
    {
      city_symbol: ["327 "],
      english_name: ["sedot yam "],
      hebrew_name: ["שדות ים "],
    },
    {
      city_symbol: ["27 "],
      english_name: ["sedot mikha "],
      hebrew_name: ["שדות מיכה "],
    },
    {
      city_symbol: ["1223 "],
      english_name: ["sede avraham "],
      hebrew_name: ["שדי אברהם "],
    },
    {
      city_symbol: ["2015 "],
      english_name: ["sede hemed "],
      hebrew_name: ["שדי חמד "],
    },
    {
      city_symbol: ["2057 "],
      english_name: ["sede terumot "],
      hebrew_name: ["שדי תרומות "],
    },
    {
      city_symbol: ["555 "],
      english_name: ["shedema "],
      hebrew_name: ["שדמה "],
    },
    {
      city_symbol: ["306 "],
      english_name: ["shadmot devora "],
      hebrew_name: ["שדמות דבורה "],
    },
    {
      city_symbol: ["3578 "],
      english_name: ["shadmot mehola "],
      hebrew_name: ["שדמות מחולה "],
    },
    {
      city_symbol: ["1031 "],
      english_name: ["sederot "],
      hebrew_name: ["שדרות "],
    },
    {
      city_symbol: ["741 "],
      english_name: ["sho'eva "],
      hebrew_name: ["שואבה "],
    },
    {
      city_symbol: ["761 "],
      english_name: ["shuva "],
      hebrew_name: ["שובה "],
    },
    {
      city_symbol: ["394 "],
      english_name: ["shoval "],
      hebrew_name: ["שובל "],
    },
    {
      city_symbol: ["1304 "],
      english_name: ["shoham "],
      hebrew_name: ["שוהם "],
    },
    {
      city_symbol: ["614 "],
      english_name: ["shomera "],
      hebrew_name: ["שומרה "],
    },
    {
      city_symbol: ["1265 "],
      english_name: ["shomeriyya "],
      hebrew_name: ["שומריה "],
    },
    {
      city_symbol: ["415 "],
      english_name: ["shoqeda "],
      hebrew_name: ["שוקדה "],
    },
    {
      city_symbol: ["456 "],
      english_name: ["shoresh "],
      hebrew_name: ["שורש "],
    },
    {
      city_symbol: ["1235 "],
      english_name: ["shorashim "],
      hebrew_name: ["שורשים "],
    },
    {
      city_symbol: ["224 "],
      english_name: ["shoshannat haamaqim "],
      hebrew_name: ["שושנת העמקים "],
    },
    {
      city_symbol: ["527 "],
      english_name: ["shezor "],
      hebrew_name: ["שזור "],
    },
    {
      city_symbol: ["7 "],
      english_name: ["shahar "],
      hebrew_name: ["שחר "],
    },
    {
      city_symbol: ["1266 "],
      english_name: ["shaharut "],
      hebrew_name: ["שחרות "],
    },
    {
      city_symbol: ["865 "],
      english_name: ["shibbolim "],
      hebrew_name: ["שיבולים "],
    },
    {
      city_symbol: ["1267 "],
      english_name: ["nahal shittim "],
      hebrew_name: ["שיטים "],
    },
    {
      city_symbol: ["658 "],
      english_name: ["sheikh dannun "],
      hebrew_name: ["שייח' דנון "],
    },
    {
      city_symbol: ["3641 "],
      english_name: ["shilo "],
      hebrew_name: ["שילה "],
    },
    {
      city_symbol: ["1165 "],
      english_name: ["shilat "],
      hebrew_name: ["שילת "],
    },
    {
      city_symbol: ["1160 "],
      english_name: ["shekhanya "],
      hebrew_name: ["שכניה "],
    },
    {
      city_symbol: ["873 "],
      english_name: ["shalwa "],
      hebrew_name: ["שלווה "],
    },
    {
      city_symbol: ["1373 "],
      english_name: ["shalva bamidbar "],
      hebrew_name: ["שלווה במדבר "],
    },
    {
      city_symbol: ["439 "],
      english_name: ["sheluhot "],
      hebrew_name: ["שלוחות "],
    },
    {
      city_symbol: ["812 "],
      english_name: ["shelomi "],
      hebrew_name: ["שלומי "],
    },
    {
      city_symbol: ["1364 "],
      english_name: ["shlomit "],
      hebrew_name: ["שלומית "],
    },
    {
      city_symbol: ["366 "],
      english_name: ["shamir "],
      hebrew_name: ["שמיר "],
    },
    {
      city_symbol: ["3784 "],
      english_name: ["shim'a "],
      hebrew_name: ["שמעה "],
    },
    {
      city_symbol: ["432 "],
      english_name: ["shamerat "],
      hebrew_name: ["שמרת "],
    },
    {
      city_symbol: ["1337 "],
      english_name: ["shimshit "],
      hebrew_name: ["שמשית "],
    },
    {
      city_symbol: ["1287 "],
      english_name: ["shani "],
      hebrew_name: ["שני "],
    },
    {
      city_symbol: ["1132 "],
      english_name: ["senir "],
      hebrew_name: ["שניר "],
    },
    {
      city_symbol: ["538 "],
      english_name: ["sha'ab "],
      hebrew_name: ["שעב "],
    },
    {
      city_symbol: ["1299 "],
      english_name: ["se'orim "],
      hebrew_name: ["שעורים "],
    },
    {
      city_symbol: ["4009 "],
      english_name: ["sha'al "],
      hebrew_name: ["שעל "],
    },
    {
      city_symbol: ["856 "],
      english_name: ["sha'alvim "],
      hebrew_name: ["שעלבים "],
    },
    {
      city_symbol: ["661 "],
      english_name: ["sha'ar efrayim "],
      hebrew_name: ["שער אפרים "],
    },
    {
      city_symbol: ["264 "],
      english_name: ["sha'ar hagolan "],
      hebrew_name: ["שער הגולן "],
    },
    {
      city_symbol: ["237 "],
      english_name: ["sha'ar haamaqim "],
      hebrew_name: ["שער העמקים "],
    },
    {
      city_symbol: ["921 "],
      english_name: ["sha'ar menashe "],
      hebrew_name: ["שער מנשה "],
    },
    {
      city_symbol: ["3720 "],
      english_name: ["sha'are tiqwa "],
      hebrew_name: ["שערי תקווה "],
    },
    {
      city_symbol: ["232 "],
      english_name: ["shefayim "],
      hebrew_name: ["שפיים "],
    },
    {
      city_symbol: ["692 "],
      english_name: ["shafir "],
      hebrew_name: ["שפיר "],
    },
    {
      city_symbol: ["846 "],
      english_name: ["shefer "],
      hebrew_name: ["שפר "],
    },
    {
      city_symbol: ["8800 "],
      english_name: ["shefar'am "],
      hebrew_name: ["שפרעם "],
    },
    {
      city_symbol: ["3649 "],
      english_name: ["shaqed "],
      hebrew_name: ["שקד "],
    },
    {
      city_symbol: ["1233 "],
      english_name: ["sheqef "],
      hebrew_name: ["שקף "],
    },
    {
      city_symbol: ["292 "],
      english_name: ["sharona "],
      hebrew_name: ["שרונה "],
    },
    {
      city_symbol: ["1114 "],
      english_name: ["li-on "],
      hebrew_name: ["שריגים )לי-און( "],
    },
    {
      city_symbol: ["126 "],
      english_name: ["sarid "],
      hebrew_name: ["שריד "],
    },
    {
      city_symbol: ["398 "],
      english_name: ["sharsheret "],
      hebrew_name: ["שרשרת "],
    },
    {
      city_symbol: ["1045 "],
      english_name: ["shetula "],
      hebrew_name: ["שתולה "],
    },
    {
      city_symbol: ["763 "],
      english_name: ["shetulim "],
      hebrew_name: ["שתולים "],
    },
    {
      city_symbol: ["2062 "],
      english_name: ["te'ashur "],
      hebrew_name: ["תאשור "],
    },
    {
      city_symbol: ["2061 "],
      english_name: ["tidhar "],
      hebrew_name: ["תדהר "],
    },
    {
      city_symbol: ["1172 "],
      english_name: ["tuval "],
      hebrew_name: ["תובל "],
    },
    {
      city_symbol: ["3558 "],
      english_name: ["tomer "],
      hebrew_name: ["תומר "],
    },
    {
      city_symbol: ["1083 "],
      english_name: ["tushiyya "],
      hebrew_name: ["תושיה "],
    },
    {
      city_symbol: ["163 "],
      english_name: ["timmorim "],
      hebrew_name: ["תימורים "],
    },
    {
      city_symbol: ["10"],
      english_name: ["tirosh"],
      hebrew_name: ["תירוש"],
    },
    {
      city_symbol: ["5000"],
      english_name: ["tel aviv - yafo"],
      hebrew_name: ["תל אביב - יפו"],
    },
    {
      city_symbol: ["84"],
      english_name: ["tel yosef"],
      hebrew_name: ["תל יוסף"],
    },
    {
      city_symbol: ["287"],
      english_name: ["tel yizhaq"],
      hebrew_name: ["תל יצחק"],
    },
    {
      city_symbol: ["154 "],
      english_name: ["tel mond "],
      hebrew_name: ["תל מונד "],
    },
    {
      city_symbol: ["103 "],
      english_name: ["tel adashim "],
      hebrew_name: ["תל עדשים "],
    },
    {
      city_symbol: ["719 "],
      english_name: ["tel qazir "],
      hebrew_name: ["תל קציר "],
    },
    {
      city_symbol: ["1054 "],
      english_name: ["tel sheva "],
      hebrew_name: ["תל שבע "],
    },
    {
      city_symbol: ["1283 "],
      english_name: ["tel te'omim "],
      hebrew_name: ["תל תאומים "],
    },
    {
      city_symbol: ["3719 "],
      english_name: ["telem "],
      hebrew_name: ["תלם "],
    },
    {
      city_symbol: ["1051 "],
      english_name: ["talme eliyyahu "],
      hebrew_name: ["תלמי אליהו "],
    },
    {
      city_symbol: ["2003 "],
      english_name: ["talme el'azar "],
      hebrew_name: ["תלמי אלעזר "],
    },
    {
      city_symbol: ["2050 "],
      english_name: ["talme bilu "],
      hebrew_name: ['תלמי ביל"ו '],
    },
    {
      city_symbol: ["1237 "],
      english_name: ["talme yosef "],
      hebrew_name: ["תלמי יוסף "],
    },
    {
      city_symbol: ["727 "],
      english_name: ["talme yehi'el "],
      hebrew_name: ["תלמי יחיאל "],
    },
    {
      city_symbol: ["744 "],
      english_name: ["talme yafe "],
      hebrew_name: ["תלמי יפה "],
    },
    {
      city_symbol: ["814 "],
      english_name: ["telamim "],
      hebrew_name: ["תלמים "],
    },
    {
      city_symbol: ["1244 "],
      english_name: ["timrat "],
      hebrew_name: ["תמרת "],
    },
    {
      city_symbol: ["2002 "],
      english_name: ["tenuvot "],
      hebrew_name: ["תנובות "],
    },
    {
      city_symbol: ["752"],
      english_name: ["ta'oz"],
      hebrew_name: ["תעוז"],
    },
    {
      city_symbol: ["709"],
      english_name: ["tifrah"],
      hebrew_name: ["תפרח"],
    },
    {
      city_symbol: ["665"],
      english_name: ["tequma"],
      hebrew_name: ["תקומה"],
    },
    {
      city_symbol: ["3563"],
      english_name: ["teqoa"],
      hebrew_name: ["תקוע"],
    },
    {
      city_symbol: ["970"],
      english_name: ["tarabin as-sani"],
      hebrew_name: ["תראבין א-צאנע )שבט("],
    },
    {
      city_symbol: ["1346"],
      english_name: ["tarabin as-sani"],
      hebrew_name: ["תראבין א-צאנע)ישוב("],
    },
    {
      city_symbol: ["778"],
      english_name: ["tarum"],
      hebrew_name: ["תרום"],
    },
  ],
};

// Sort the 'city' array by 'english_name'
data.city.sort((a, b) => {
  const nameA = a.english_name[0].toLowerCase();
  const nameB = b.english_name[0].toLowerCase();
  return nameA.localeCompare(nameB);
});

// Convert the sorted data back to a JSON string
const sortedJsonString = JSON.stringify(data, null, 2);

// Write the sorted JSON data to a new file
fs.writeFile("sorted_data.json", sortedJsonString, "utf8", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("Data has been written to sorted_data.json");
  }
});
