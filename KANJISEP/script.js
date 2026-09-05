/* =========================================================
   KANJISEP — JLPT N4 Kanji Lesson Separator Pages (1 - 12)
   Self-contained engine for A4 divider printing & preview
========================================================= */

// Lesson thematic metadata & Japanese traditional quotes
const LESSONS_META = {
  "Lesson 1": {
    num: 1,
    kanjiNum: "一",
    themeJp: "街と住まい",
    themeEn: "Town, Living & Administration",
    quote: "千里の道も一歩から — A journey of a thousand miles begins with a single step",
    colorName: "Sora (#38bdf8 · Sky Blue)",
    range: "01 – 10"
  },
  "Lesson 2": {
    num: 2,
    kanjiNum: "二",
    themeJp: "対比と形容詞",
    themeEn: "Contrasts, Adjectives & Opposites",
    quote: "光陰矢の如し — Time flies like an arrow",
    colorName: "Sora (#38bdf8 · Sky Blue)",
    range: "11 – 20"
  },
  "Lesson 3": {
    num: 3,
    kanjiNum: "三",
    themeJp: "状態と特質",
    themeEn: "Qualities, States & Essentials",
    quote: "一歩一歩、着実に — Step by step, steadily forward",
    colorName: "Sora (#38bdf8 · Sky Blue)",
    range: "21 – 30"
  },
  "Lesson 4": {
    num: 4,
    kanjiNum: "四",
    themeJp: "色彩と性格",
    themeEn: "Colors, Conditions & Character",
    quote: "十人十色 — Ten people, ten colors (To each their own)",
    colorName: "Sora (#38bdf8 · Sky Blue)",
    range: "31 – 40"
  },
  "Lesson 5": {
    num: 5,
    kanjiNum: "五",
    themeJp: "芸術と旅",
    themeEn: "Arts, Music, Media & Travel",
    quote: "温故知新 — Learn from the past to understand the new",
    colorName: "Sora (#38bdf8 · Sky Blue)",
    range: "41 – 50"
  },
  "Lesson 6": {
    num: 6,
    kanjiNum: "六",
    themeJp: "仕事と社会",
    themeEn: "Work, Professions & Society",
    quote: "七転び八起き — Fall down seven times, stand up eight",
    colorName: "Sora (#38bdf8 · Sky Blue)",
    range: "51 – 60"
  },
  "Lesson 7": {
    num: 7,
    kanjiNum: "七",
    themeJp: "自然と天候",
    themeEn: "Nature, Earth & Natural Elements",
    quote: "花鳥風月 — Beauty of nature (Flower, Bird, Wind, Moon)",
    colorName: "Sora (#38bdf8 · Sky Blue)",
    range: "61 – 70"
  },
  "Lesson 8": {
    num: 8,
    kanjiNum: "八",
    themeJp: "四季と気候",
    themeEn: "Four Seasons & Temperature",
    quote: "春夏秋冬、時は巡る — The seasons turn and bloom anew",
    colorName: "Sora (#38bdf8 · Sky Blue)",
    range: "71 – 80"
  },
  "Lesson 9": {
    num: 9,
    kanjiNum: "九",
    themeJp: "身体と健康",
    themeEn: "Body, Health & Medicine",
    quote: "病は気から — Health and vitality flourish from the spirit",
    colorName: "Sora (#38bdf8 · Sky Blue)",
    range: "81 – 90"
  },
  "Lesson 10": {
    num: 10,
    kanjiNum: "十",
    themeJp: "時間と生活",
    themeEn: "Time, Days, Counting & Measure",
    quote: "一期一会 — Once in a lifetime encounter (Treasure each moment)",
    colorName: "Sora (#38bdf8 · Sky Blue)",
    range: "91 – 100"
  },
  "Lesson 11": {
    num: 11,
    kanjiNum: "十一",
    themeJp: "動作と行為",
    themeEn: "Action, Movement & Verbs",
    quote: "継続は力なり — Continuity is power (Persistence pays off)",
    colorName: "Sora (#38bdf8 · Sky Blue)",
    range: "101 – 110"
  },
  "Lesson 12": {
    num: 12,
    kanjiNum: "十二",
    themeJp: "家族と関係",
    themeEn: "Family, Identity & Relationships",
    quote: "和を以て貴しと為す — Harmony is the greatest virtue",
    colorName: "Sora (#38bdf8 · Sky Blue)",
    range: "111 – 120"
  }
};

// Full 120 Kanji Dataset (10 kanji per lesson)
const KANJI_DATA = {
  "Lesson 1": [
    {
      "kanji": "住",
      "en": "live",
      "si": "ජීවත් වෙනවා",
      "on": "ジュウ",
      "kun": "すーむ",
      "strokes": 7
    },
    {
      "kanji": "所",
      "en": "place",
      "si": "ස්ථානය (place)",
      "on": "ショ、ジョ",
      "kun": "ところ、どころ",
      "strokes": 8
    },
    {
      "kanji": "京",
      "en": "capital",
      "si": "අගනුවර",
      "on": "キョウ、ケイ、キン",
      "kun": "みやこ",
      "strokes": 8
    },
    {
      "kanji": "都",
      "en": "metropolis",
      "si": "අගනගරය",
      "on": "ト、ツ",
      "kun": "みやこ",
      "strokes": 11
    },
    {
      "kanji": "府",
      "en": "Administrative prefecture",
      "si": "පරිපාලන දිස්ත්‍රික්කය",
      "on": "フ",
      "kun": "-",
      "strokes": 8
    },
    {
      "kanji": "県",
      "en": "Prefecture",
      "si": "ප්‍රාන්තය",
      "on": "ケン",
      "kun": "かける",
      "strokes": 9
    },
    {
      "kanji": "市",
      "en": "City, market",
      "si": "නගරය ,වෙළඳපොල",
      "on": "シ",
      "kun": "いち",
      "strokes": 5
    },
    {
      "kanji": "区",
      "en": "Ward",
      "si": "කොට්ඨාශය",
      "on": "ク、オウ、コウ",
      "kun": "-",
      "strokes": 4
    },
    {
      "kanji": "町",
      "en": "town",
      "si": "ටවුම",
      "on": "チョウ",
      "kun": "まち",
      "strokes": 7
    },
    {
      "kanji": "村",
      "en": "village",
      "si": "ගම",
      "on": "ソン",
      "kun": "むら",
      "strokes": 7
    }
  ],
  "Lesson 2": [
    {
      "kanji": "明",
      "en": "Bright, clear",
      "si": "ආලෝකමත්, පැහැදිලි",
      "on": "メイ",
      "kun": "あかーるい",
      "strokes": 8
    },
    {
      "kanji": "暗",
      "en": "dark",
      "si": "අඳුරුයි",
      "on": "アン",
      "kun": "くらーい",
      "strokes": 13
    },
    {
      "kanji": "遠",
      "en": "far",
      "si": "දූරයි",
      "on": "エン",
      "kun": "とおーい",
      "strokes": 13
    },
    {
      "kanji": "近",
      "en": "near",
      "si": "ළගයි",
      "on": "キン",
      "kun": "ちかーい",
      "strokes": 7
    },
    {
      "kanji": "強",
      "en": "strong",
      "si": "ශක්තිමත්",
      "on": "キョウ",
      "kun": "つよーい",
      "strokes": 11
    },
    {
      "kanji": "弱",
      "en": "weak",
      "si": "දුර්වල",
      "on": "ジャク",
      "kun": "よわーい",
      "strokes": 10
    },
    {
      "kanji": "重",
      "en": "Heavy, important",
      "si": "බරයි, වැදගත්",
      "on": "ジュウ",
      "kun": "おもい",
      "strokes": 9
    },
    {
      "kanji": "軽",
      "en": "light",
      "si": "සැහැල්ලුයි",
      "on": "ケイ",
      "kun": "かるーい",
      "strokes": 12
    },
    {
      "kanji": "太",
      "en": "fat",
      "si": "මහතයි",
      "on": "タイ",
      "kun": "ふとーい",
      "strokes": 4
    },
    {
      "kanji": "細",
      "en": "Slender, fine",
      "si": "සිහින්, ඉතා කුඩා",
      "on": "サイ",
      "kun": "ほそーい、こまーかい",
      "strokes": 11
    }
  ],
  "Lesson 3": [
    {
      "kanji": "特",
      "en": "special",
      "si": "විශේෂ",
      "on": "トク、トッ",
      "kun": "-",
      "strokes": 10
    },
    {
      "kanji": "別",
      "en": "separate",
      "si": "වෙන් වෙනවා",
      "on": "ベツ",
      "kun": "わかーれる",
      "strokes": 7
    },
    {
      "kanji": "有",
      "en": "exist, have",
      "si": "තියෙනවා",
      "on": "ユウ",
      "kun": "あーる",
      "strokes": 6
    },
    {
      "kanji": "便",
      "en": "Convenience, mail",
      "si": "පහසුව, තැපැල",
      "on": "ベン、ビン",
      "kun": "たよーり",
      "strokes": 9
    },
    {
      "kanji": "利",
      "en": "profit",
      "si": "ලාභය",
      "on": "リ",
      "kun": "きーく",
      "strokes": 7
    },
    {
      "kanji": "不",
      "en": "not-",
      "si": "නැති යන අර්ථය",
      "on": "フ、ブ",
      "kun": "-",
      "strokes": 4
    },
    {
      "kanji": "切",
      "en": "cut",
      "si": "කපනවා",
      "on": "セツ",
      "kun": "きーる、きつ",
      "strokes": 4
    },
    {
      "kanji": "元",
      "en": "origin",
      "si": "මූලාරම්භය",
      "on": "ゲン、ガン",
      "kun": "もと",
      "strokes": 4
    },
    {
      "kanji": "好",
      "en": "like",
      "si": "කැමති",
      "on": "コウ",
      "kun": "すーき",
      "strokes": 6
    },
    {
      "kanji": "急",
      "en": "hurry, suddenly",
      "si": "ඉක්මන් කරනවා, හදිස්සියේම",
      "on": "キュウ",
      "kun": "いそーぐ",
      "strokes": 9
    }
  ],
  "Lesson 4": [
    {
      "kanji": "低",
      "en": "low",
      "si": "මිටියි",
      "on": "テイ",
      "kun": "ひくーい",
      "strokes": 7
    },
    {
      "kanji": "広",
      "en": "spacious",
      "si": "පුළුල්, පළල්",
      "on": "コウ",
      "kun": "ひろーい",
      "strokes": 5
    },
    {
      "kanji": "短",
      "en": "short",
      "si": "කොටයි",
      "on": "タン",
      "kun": "みじかーい",
      "strokes": 12
    },
    {
      "kanji": "良",
      "en": "good",
      "si": "හොඳයි",
      "on": "リョウ",
      "kun": "よーい",
      "strokes": 7
    },
    {
      "kanji": "悪",
      "en": "bad",
      "si": "නරකයි",
      "on": "アク",
      "kun": "わるーい",
      "strokes": 11
    },
    {
      "kanji": "正",
      "en": "correct",
      "si": "නිවැරදි",
      "on": "セイ、ショウ",
      "kun": "ただーしい",
      "strokes": 5
    },
    {
      "kanji": "変",
      "en": "change, strange",
      "si": "වෙනස, අමුතු",
      "on": "ヘン",
      "kun": "かーわる、かーえる",
      "strokes": 9
    },
    {
      "kanji": "赤",
      "en": "red",
      "si": "රතු",
      "on": "セキ",
      "kun": "あかーい",
      "strokes": 7
    },
    {
      "kanji": "青",
      "en": "Blue",
      "si": "නිල්",
      "on": "セイ",
      "kun": "あおーい",
      "strokes": 8
    },
    {
      "kanji": "黒",
      "en": "black",
      "si": "කළු",
      "on": "コク",
      "kun": "くろーい",
      "strokes": 11
    }
  ],
  "Lesson 5": [
    {
      "kanji": "映",
      "en": "reflect",
      "si": "පරාවර්තනය වෙනවා",
      "on": "エイ",
      "kun": "うつーす",
      "strokes": 9
    },
    {
      "kanji": "画",
      "en": "picture",
      "si": "චිත්‍රය",
      "on": "ガ、カク",
      "kun": "えがーく",
      "strokes": 8
    },
    {
      "kanji": "音",
      "en": "sound",
      "si": "ශබ්දය",
      "on": "オン",
      "kun": "おと",
      "strokes": 9
    },
    {
      "kanji": "楽",
      "en": "Enjoyable, easy",
      "si": "විනෝදකාමී, පහසු",
      "on": "ガク、ラク",
      "kun": "たのーしい",
      "strokes": 13
    },
    {
      "kanji": "歌",
      "en": "song",
      "si": "ගීතය",
      "on": "カ",
      "kun": "うた、うたーう",
      "strokes": 14
    },
    {
      "kanji": "写",
      "en": "copy",
      "si": "පිටපත් කරනවා",
      "on": "シャ",
      "kun": "うつーす",
      "strokes": 5
    },
    {
      "kanji": "真",
      "en": "truth",
      "si": "සත්‍ය",
      "on": "シン",
      "kun": "ま、まっ",
      "strokes": 10
    },
    {
      "kanji": "旅",
      "en": "trip",
      "si": "චාරිකාව",
      "on": "リョ",
      "kun": "たび",
      "strokes": 10
    },
    {
      "kanji": "世",
      "en": "World, generation",
      "si": "ලෝකය, පරම්පරාව",
      "on": "セイ、セ",
      "kun": "よ",
      "strokes": 5
    },
    {
      "kanji": "界",
      "en": "boundary",
      "si": "දේශසීමාව",
      "on": "カイ",
      "kun": "-",
      "strokes": 9
    }
  ],
  "Lesson 6": [
    {
      "kanji": "仕",
      "en": "serve",
      "si": "සේවය කරනවා",
      "on": "シ",
      "kun": "つかーえる",
      "strokes": 5
    },
    {
      "kanji": "事",
      "en": "Matter",
      "si": "දෙයක්, කාරණාවක්",
      "on": "ジ",
      "kun": "こと",
      "strokes": 8
    },
    {
      "kanji": "銀",
      "en": "silver",
      "si": "රිදී",
      "on": "ギン",
      "kun": "しろがね",
      "strokes": 14
    },
    {
      "kanji": "員",
      "en": "member",
      "si": "සාමාජිකයා",
      "on": "イン",
      "kun": "-",
      "strokes": 10
    },
    {
      "kanji": "医",
      "en": "medicine",
      "si": "ඖෂධ",
      "on": "イ",
      "kun": "-",
      "strokes": 7
    },
    {
      "kanji": "者",
      "en": "person",
      "si": "පුද්ගලයා",
      "on": "シャ",
      "kun": "もの",
      "strokes": 8
    },
    {
      "kanji": "働",
      "en": "work",
      "si": "වැඩ කරනවා",
      "on": "ドウ",
      "kun": "はたらーく",
      "strokes": 13
    },
    {
      "kanji": "屋",
      "en": "roof",
      "si": "වහලය",
      "on": "オク",
      "kun": "や",
      "strokes": 9
    },
    {
      "kanji": "産",
      "en": "produce",
      "si": "නිෂ්පාදනය කරනවා",
      "on": "サン",
      "kun": "うーむ",
      "strokes": 11
    },
    {
      "kanji": "業",
      "en": "Art, vocation",
      "si": "කලාව, වෘත්තිය",
      "on": "ギョウ、ゴウ",
      "kun": "わざ",
      "strokes": 13
    }
  ],
  "Lesson 7": [
    {
      "kanji": "林",
      "en": "wood",
      "si": "කැලය",
      "on": "リン",
      "kun": "はやし",
      "strokes": 8
    },
    {
      "kanji": "森",
      "en": "forest",
      "si": "වනාන්තරය",
      "on": "シン",
      "kun": "もり",
      "strokes": 12
    },
    {
      "kanji": "地",
      "en": "ground",
      "si": "පොළොව",
      "on": "ジ、チ",
      "kun": "-",
      "strokes": 6
    },
    {
      "kanji": "池",
      "en": "pond",
      "si": "වැව",
      "on": "チ",
      "kun": "いけ",
      "strokes": 6
    },
    {
      "kanji": "海",
      "en": "sea",
      "si": "මුහුද",
      "on": "カイ",
      "kun": "うみ",
      "strokes": 9
    },
    {
      "kanji": "洋",
      "en": "ocean",
      "si": "සාගරය",
      "on": "ヨウ",
      "kun": "-",
      "strokes": 9
    },
    {
      "kanji": "雪",
      "en": "snow",
      "si": "හිම",
      "on": "セツ",
      "kun": "ゆき",
      "strokes": 11
    },
    {
      "kanji": "光",
      "en": "light",
      "si": "ආලෝකය",
      "on": "コウ",
      "kun": "ひかり、ひかーる",
      "strokes": 6
    },
    {
      "kanji": "台",
      "en": "Counter for machines and vehicles",
      "si": "යන්ත්‍රු සූළු, වාහන ගණන් කිරීමට යොදා ගන්නා වචනයකි",
      "on": "ダイ、タイ",
      "kun": "うてな",
      "strokes": 5
    },
    {
      "kanji": "風",
      "en": "wind",
      "si": "සුළඟ",
      "on": "フウ",
      "kun": "かぜ",
      "strokes": 9
    }
  ],
  "Lesson 8": [
    {
      "kanji": "季",
      "en": "seasons",
      "si": "සෘතු",
      "on": "キ",
      "kun": "-",
      "strokes": 8
    },
    {
      "kanji": "節",
      "en": "seasons",
      "si": "සෘතු",
      "on": "セツ",
      "kun": "ふし",
      "strokes": 15
    },
    {
      "kanji": "春",
      "en": "spring",
      "si": "වසන්ත සෘතුව",
      "on": "シュン",
      "kun": "はる",
      "strokes": 9
    },
    {
      "kanji": "夏",
      "en": "summer",
      "si": "ගිමහාන සෘතුව",
      "on": "カ",
      "kun": "なつ",
      "strokes": 10
    },
    {
      "kanji": "秋",
      "en": "autumn",
      "si": "සරත් සෘතුව",
      "on": "シュウ",
      "kun": "あき",
      "strokes": 9
    },
    {
      "kanji": "冬",
      "en": "winter",
      "si": "ශීත සෘතුව",
      "on": "トウ",
      "kun": "ふゆ",
      "strokes": 5
    },
    {
      "kanji": "暑",
      "en": "hot",
      "si": "රස්නෙයි",
      "on": "ショ",
      "kun": "あつーい",
      "strokes": 12
    },
    {
      "kanji": "寒",
      "en": "cold",
      "si": "සීතලයි",
      "on": "カン",
      "kun": "さむーい",
      "strokes": 12
    },
    {
      "kanji": "暖",
      "en": "warm",
      "si": "උණුසුම",
      "on": "ダン",
      "kun": "あたたーかい",
      "strokes": 13
    },
    {
      "kanji": "涼",
      "en": "cool",
      "si": "සීතලයි",
      "on": "リョウ",
      "kun": "すずーしい",
      "strokes": 11
    }
  ],
  "Lesson 9": [
    {
      "kanji": "体",
      "en": "body",
      "si": "ශරීරය",
      "on": "タイ",
      "kun": "からだ",
      "strokes": 7
    },
    {
      "kanji": "頭",
      "en": "head",
      "si": "හිස",
      "on": "ズ",
      "kun": "あたま",
      "strokes": 16
    },
    {
      "kanji": "顔",
      "en": "face",
      "si": "මුහුණ",
      "on": "ガン",
      "kun": "かお",
      "strokes": 18
    },
    {
      "kanji": "首",
      "en": "neck",
      "si": "බෙල්ල",
      "on": "シュ",
      "kun": "くび",
      "strokes": 9
    },
    {
      "kanji": "心",
      "en": "Heart, feelings",
      "si": "හදවත, හැගීම",
      "on": "シン",
      "kun": "こころ",
      "strokes": 4
    },
    {
      "kanji": "声",
      "en": "voice",
      "si": "කටහඬ",
      "on": "セイ",
      "kun": "こえ",
      "strokes": 7
    },
    {
      "kanji": "病",
      "en": "illness",
      "si": "අසනීපය",
      "on": "ビョウ",
      "kun": "やまい",
      "strokes": 10
    },
    {
      "kanji": "薬",
      "en": "medicine",
      "si": "බෙහෙත්",
      "on": "ヤク",
      "kun": "くすり",
      "strokes": 16
    },
    {
      "kanji": "科",
      "en": "category",
      "si": "වර්ගීකරණය",
      "on": "カ",
      "kun": "-",
      "strokes": 9
    },
    {
      "kanji": "内",
      "en": "inside",
      "si": "ඇතුළත",
      "on": "ナイ",
      "kun": "うち",
      "strokes": 4
    }
  ],
  "Lesson 10": [
    {
      "kanji": "朝",
      "en": "morning",
      "si": "උදෑසන",
      "on": "チョウ",
      "kun": "あさ",
      "strokes": 12
    },
    {
      "kanji": "昼",
      "en": "noon",
      "si": "දහවල",
      "on": "チュウ",
      "kun": "ひる",
      "strokes": 9
    },
    {
      "kanji": "夜",
      "en": "night",
      "si": "රාත්‍රිය",
      "on": "ヤ",
      "kun": "よる、よ",
      "strokes": 8
    },
    {
      "kanji": "夕",
      "en": "evening",
      "si": "සන්ධ්‍යාව",
      "on": "セキ",
      "kun": "ゆう",
      "strokes": 3
    },
    {
      "kanji": "方",
      "en": "direction",
      "si": "දිශාව",
      "on": "ホウ",
      "kun": "かた、がた",
      "strokes": 4
    },
    {
      "kanji": "晩",
      "en": "night",
      "si": "රාත්‍රිය",
      "on": "バン",
      "kun": "-",
      "strokes": 12
    },
    {
      "kanji": "計",
      "en": "measure",
      "si": "මිනිනවා",
      "on": "ケイ",
      "kun": "はかーる",
      "strokes": 9
    },
    {
      "kanji": "曜",
      "en": "shine",
      "si": "දිලිසෙනවා",
      "on": "ヨウ",
      "kun": "-",
      "strokes": 18
    },
    {
      "kanji": "以",
      "en": "Starting point",
      "si": "ආරම්භක ස්ථානය",
      "on": "イ",
      "kun": "もって",
      "strokes": 5
    },
    {
      "kanji": "度",
      "en": "Degree, frequency",
      "si": "අංශක, වාර ගණන",
      "on": "ド、ト、タク",
      "kun": "たび、たい",
      "strokes": 9
    }
  ],
  "Lesson 11": [
    {
      "kanji": "止",
      "en": "stop",
      "si": "නවත්වනවා",
      "on": "シ",
      "kun": "とーまる",
      "strokes": 4
    },
    {
      "kanji": "歩",
      "en": "walk",
      "si": "ඇවිදිනවා",
      "on": "ホ、ポ",
      "kun": "あるーく",
      "strokes": 8
    },
    {
      "kanji": "走",
      "en": "run",
      "si": "දුවනවා",
      "on": "ソウ",
      "kun": "はしーる",
      "strokes": 7
    },
    {
      "kanji": "起",
      "en": "Get up",
      "si": "අවදි වෙනවා",
      "on": "キ",
      "kun": "おーきる、おーこす",
      "strokes": 10
    },
    {
      "kanji": "持",
      "en": "have",
      "si": "සතු වෙනවා",
      "on": "ジ",
      "kun": "もーつ",
      "strokes": 9
    },
    {
      "kanji": "待",
      "en": "wait",
      "si": "රැදී සිටිනවා",
      "on": "タイ",
      "kun": "まーつ",
      "strokes": 9
    },
    {
      "kanji": "借",
      "en": "borrow",
      "si": "ණයට/කුලියට ගන්නවා",
      "on": "シャク",
      "kun": "かーりる",
      "strokes": 10
    },
    {
      "kanji": "貸",
      "en": "lend",
      "si": "ණයට/කුලියට දෙනවා",
      "on": "タイ",
      "kun": "かーす",
      "strokes": 12
    },
    {
      "kanji": "始",
      "en": "begin",
      "si": "ආරම්භ කරනවා",
      "on": "シ",
      "kun": "はじーまる、はじーめる",
      "strokes": 8
    },
    {
      "kanji": "終",
      "en": "end",
      "si": "අවසන් කරනවා",
      "on": "シュウ",
      "kun": "おーわる、おーえる",
      "strokes": 11
    }
  ],
  "Lesson 12": [
    {
      "kanji": "家",
      "en": "house",
      "si": "නිවස",
      "on": "カ、ケ",
      "kun": "いえ、や",
      "strokes": 10
    },
    {
      "kanji": "族",
      "en": "tribe",
      "si": "ගෝත්‍රය",
      "on": "ゾク",
      "kun": "-",
      "strokes": 11
    },
    {
      "kanji": "私",
      "en": "I",
      "si": "මම",
      "on": "シ",
      "kun": "わたし、わたくし",
      "strokes": 7
    },
    {
      "kanji": "自",
      "en": "oneself",
      "si": "තමන්",
      "on": "ジ、シ",
      "kun": "みずかーら",
      "strokes": 6
    },
    {
      "kanji": "親",
      "en": "parents",
      "si": "දෙමාපියන්",
      "on": "シン",
      "kun": "おや、したーしい",
      "strokes": 16
    },
    {
      "kanji": "両",
      "en": "both",
      "si": "දෙකම",
      "on": "リョウ",
      "kun": "てる、ふたつ",
      "strokes": 6
    },
    {
      "kanji": "兄",
      "en": "Elder brother",
      "si": "අයියා",
      "on": "ケイ、キョウ",
      "kun": "あに",
      "strokes": 5
    },
    {
      "kanji": "弟",
      "en": "Younger brother",
      "si": "මල්ලි",
      "on": "ダイ",
      "kun": "おとうと",
      "strokes": 7
    },
    {
      "kanji": "姉",
      "en": "Elder sister",
      "si": "අක්කා",
      "on": "シ",
      "kun": "あね",
      "strokes": 8
    },
    {
      "kanji": "妹",
      "en": "Younger sister",
      "si": "නෝනි",
      "on": "マイ",
      "kun": "いもうと",
      "strokes": 8
    }
  ]
};

// Corner Ornament SVG generator
function cornerOrnamentSVG() {
  return `
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M 4 20 L 4 4 L 20 4" />
      <path d="M 8 20 L 8 8 L 20 8" />
      <circle cx="14" cy="14" r="2.5" fill="currentColor" />
    </svg>
  `;
}

// Mount Fuji Japanese Traditional Illustration SVG
function fujiArtworkSVG() {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" class="sep-illustration">
      <!-- Circular Frame -->
      <circle cx="200" cy="100" r="85" fill="none" stroke="var(--theme-border-card)" stroke-width="1.5" stroke-dasharray="4 2" />
      <!-- Soft Sun Halo -->
      <circle cx="225" cy="85" r="48" fill="var(--theme-primary)" opacity="0.14" />
      <!-- Mount Fuji Silhouette -->
      <path d="M 125,170 C 160,160 180,128 190,85 L 210,85 C 220,128 240,160 275,170" fill="none" stroke="var(--ink)" stroke-width="2.5" stroke-linecap="round" />
      <!-- Snowcap Zigzag Line -->
      <path d="M 183,105 L 189,112 L 195,105 L 201,114 L 207,106 L 213,111" fill="none" stroke="var(--ink)" stroke-width="1.5" stroke-linecap="round" />
      <!-- Snowcap Fill Area -->
      <path d="M 190,85 L 210,85 C 215,100 215,105 213,111 L 207,106 L 201,114 L 195,105 L 189,112 L 183,105 C 185,100 185,95 190,85 Z" fill="#ffffff" opacity="0.9" />
      <!-- Ground / Water Ripples -->
      <path d="M 155,178 L 245,178" fill="none" stroke="var(--theme-border-card)" stroke-width="1.8" stroke-linecap="round" />
      <path d="M 172,184 L 228,184" fill="none" stroke="var(--theme-border-card)" stroke-width="1.4" stroke-linecap="round" />
      <!-- Stylized Clouds -->
      <path d="M 110,95 L 145,95 M 120,101 L 138,101" fill="none" stroke="var(--theme-border-soft)" stroke-width="1.5" stroke-linecap="round" />
      <path d="M 255,118 L 290,118 M 265,124 L 282,124" fill="none" stroke="var(--theme-border-soft)" stroke-width="1.5" stroke-linecap="round" />
      <!-- Sakura Branch -->
      <path d="M 130,45 Q 160,45 172,70 Q 176,80 172,90" fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round" />
      <path d="M 150,45 Q 160,30 176,35" fill="none" stroke="var(--ink)" stroke-width="1.4" stroke-linecap="round" />
      <!-- Sakura Blossoms -->
      <g transform="translate(172,70)">
        <circle cx="0" cy="0" r="4.5" fill="var(--theme-primary)" />
        <path d="M 0,0 C -3,-5 3,-5 0,0 C 5,-3 5,3 0,0 C 3,5 -3,5 0,0 C -5,3 -5,-3 0,0" fill="var(--theme-primary)" />
      </g>
      <g transform="translate(168,34)">
        <circle cx="0" cy="0" r="3.5" fill="var(--theme-primary)" />
        <path d="M 0,0 C -2,-4 2,-4 0,0 C 4,-2 4,2 0,0 C 2,4 -2,4 0,0 C -4,2 -4,-2 0,0" fill="var(--theme-primary)" opacity="0.9" />
      </g>
      <!-- Drifting Petals -->
      <path d="M 135,130 Q 130,135 135,140 Q 140,135 135,130 Z" fill="var(--theme-primary)" opacity="0.85" transform="rotate(15, 135, 135)" />
      <path d="M 260,100 Q 255,105 260,110 Q 265,105 260,100 Z" fill="var(--theme-primary)" opacity="0.85" transform="rotate(-25, 260, 105)" />
      <path d="M 215,152 Q 210,157 215,162 Q 220,157 215,152 Z" fill="var(--theme-primary)" opacity="0.8" transform="rotate(35, 215, 157)" />
    </svg>
  `;
}

// Generate the 10-kanji cards HTML
function kanjiGridHTML(items, lessonNum) {
  const baseIndex = (lessonNum - 1) * 10;
  return items.map((k, idx) => {
    const absNum = String(baseIndex + idx + 1).padStart(2, '0');
    return `
      <div class="kanji-stamp-card">
        <span class="card-num">#${absNum}</span>
        <span class="card-strokes">${k.strokes}画</span>
        <div class="card-kanji">${k.kanji}</div>
        <div class="card-si" title="${k.si}">${k.si}</div>
        <div class="card-readings">
          <span class="card-on">${k.on}</span>
          ${k.kun && k.kun !== "-" ? `<br><span>${k.kun}</span>` : ""}
        </div>
      </div>
    `;
  }).join('');
}

// Generate a full A4 separator page for a lesson
function createSeparatorPageHTML(lessonKey, meta, items) {
  const lessonNum = meta.num;
  const themeClass = `theme-lesson-${lessonNum}`;

  return `
    <article class="sep-page ${themeClass}" id="page-lesson-${lessonNum}" data-lesson="${lessonNum}">
      <!-- Traditional Corner Crests -->
      <div class="corner-ornament corner-tl">${cornerOrnamentSVG()}</div>
      <div class="corner-ornament corner-tr">${cornerOrnamentSVG()}</div>
      <div class="corner-ornament corner-br">${cornerOrnamentSVG()}</div>
      <div class="corner-ornament corner-bl">${cornerOrnamentSVG()}</div>

      <!-- Top Section -->
      <div class="sep-top-block">
        <div class="sep-header-ornament"></div>
        <div class="sep-hanko">第${meta.kanjiNum}課</div>
        <h2 class="sep-main-title">JLPT N4 Kanji</h2>
        <div class="sep-lesson-badge">
          <span>LESSON ${lessonNum}</span>
          <span>·</span>
          <span>第 ${lessonNum} 課</span>
        </div>
        <div class="sep-theme-title">${meta.themeJp} — ${meta.themeEn}</div>
      </div>

      <!-- Center Mount Fuji Illustration -->
      <div class="sep-artwork-wrap">
        ${fujiArtworkSVG()}
      </div>

      <!-- 10-Kanji Feature Section -->
      <section class="sep-kanji-section">
        <div class="sep-kanji-label">
          <span>Lesson ${lessonNum} Kanji Set (${meta.range})</span>
        </div>
        <div class="sep-kanji-grid">
          ${kanjiGridHTML(items, lessonNum)}
        </div>
      </section>

      <!-- Bottom Section -->
      <div class="sep-footer-block">
        <div class="sep-meta-line">KANJI · LESSON ${lessonNum} OF 12 · 10 KANJI (NUMBERS ${meta.range})</div>
        <p class="sep-quote">${meta.quote}</p>
        <p class="sep-blessing">頑張って！ · Study Hard</p>
      </div>
    </article>
  `;
}

// State management
let currentActiveLesson = 1;
let currentViewMode = "single"; // "single" | "all"

const container = document.getElementById("separatorContainer");
const tabsBar = document.getElementById("lessonTabsBar");
const btnSingleView = document.getElementById("btnSingleView");
const btnAllView = document.getElementById("btnAllView");
const btnPrintCurrent = document.getElementById("btnPrintCurrent");
const btnPrintAll = document.getElementById("btnPrintAll");

// Render All Pages & Tabs
function initApp() {
  const lessonKeys = Object.keys(LESSONS_META);

  // 1. Build Pages HTML
  let allPagesHTML = "";
  lessonKeys.forEach(key => {
    const meta = LESSONS_META[key];
    const items = KANJI_DATA[key] || [];
    allPagesHTML += createSeparatorPageHTML(key, meta, items);
  });
  container.innerHTML = allPagesHTML;

  // 2. Build Tabs HTML
  tabsBar.innerHTML = lessonKeys.map(key => {
    const meta = LESSONS_META[key];
    return `
      <button class="lesson-tab ${meta.num === 1 ? 'active' : ''}" data-lesson="${meta.num}" id="tab-lesson-${meta.num}">
        <span class="tab-dot"></span>
        <span>L${meta.num} · ${meta.themeJp}</span>
      </button>
    `;
  }).join('');

  // 3. Set Initial View State
  setViewMode("single");
  setActiveLesson(1);

  // 4. Attach Event Listeners
  attachEvents();
}

// Set Active Lesson
function setActiveLesson(num) {
  currentActiveLesson = num;

  // Update tabs
  document.querySelectorAll(".lesson-tab").forEach(tab => {
    const lessonNum = parseInt(tab.dataset.lesson, 10);
    tab.classList.toggle("active", lessonNum === num);
  });

  // Update pages
  document.querySelectorAll(".sep-page").forEach(page => {
    const lessonNum = parseInt(page.dataset.lesson, 10);
    page.classList.toggle("active", lessonNum === num);
  });

  // If in single view mode, scroll to top
  if (currentViewMode === "single") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    // Scroll directly to that page
    const targetPage = document.getElementById(`page-lesson-${num}`);
    if (targetPage) {
      targetPage.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

// Toggle View Mode (Single vs All)
function setViewMode(mode) {
  currentViewMode = mode;
  if (mode === "single") {
    btnSingleView.classList.add("active");
    btnAllView.classList.remove("active");
    container.classList.add("single-mode");
  } else {
    btnSingleView.classList.remove("active");
    btnAllView.classList.add("active");
    container.classList.remove("single-mode");
  }
}

// Print Handler
function triggerPrint(isSingle) {
  if (isSingle) {
    document.body.classList.add("print-single-mode");
  } else {
    document.body.classList.remove("print-single-mode");
  }

  // Brief delay to let browser process layout
  setTimeout(() => {
    window.print();
    setTimeout(() => {
      document.body.classList.remove("print-single-mode");
    }, 500);
  }, 100);
}

// Attach Event Handlers
function attachEvents() {
  // Lesson Tabs Click
  tabsBar.addEventListener("click", (e) => {
    const tab = e.target.closest(".lesson-tab");
    if (!tab) return;
    const num = parseInt(tab.dataset.lesson, 10);
    setActiveLesson(num);
  });

  // View Mode Buttons
  btnSingleView.addEventListener("click", () => setViewMode("single"));
  btnAllView.addEventListener("click", () => setViewMode("all"));

  // Print Buttons
  btnPrintCurrent.addEventListener("click", () => triggerPrint(true));
  btnPrintAll.addEventListener("click", () => triggerPrint(false));
}

// Run on load
document.addEventListener("DOMContentLoaded", initApp);
