/* =========================================================
   VOCAB DATA
========================================================= */
const VOCAB_RAW = [["", "あ", "Ah", "අහ්! (පුදුමය/හඳුනාගැනීම)"], ["", "ああ", "like that", "එහෙම, එසේ"], ["", "あいさつ・する", "to greet", "ආචාර කිරීම, සුබ පැතීම"], ["間", "あいだ", "a space", "අතරය, ඉඩකඩ"], ["合う", "あう", "to match", "ගැලපීම, එකඟ වීම"], ["", "あかちゃん", "infant", "බිළිඳා"], ["上る", "あがる", "to rise", "නැගීම, ඉහළ යාම"], ["赤ん坊", "あかんぼう", "baby", "බබා"], ["空く", "あく", "to open, to become empty", "විවෘත වීම, හිස් වීම"], ["", "アクセサリー", "accessory", "ආභරණ"], ["", "あげる", "to give", "දීම (අනුන්ට)"], ["浅い", "あさい", "shallow, superficial", "නොගැඹුරු, මතුපිටින්"], ["味", "あじ", "flavour", "රසය"], ["", "アジア", "Asia", "ආසියාව"], ["明日", "あす", "tomorrow", "හෙට"], ["遊び", "あそび", "play", "සෙල්ලම"], ["集る", "あつまる", "to gather", "රැස් වීම, එකතු වීම"], ["集める", "あつめる", "to collect something", "එකතු කිරීම, එක් රැස් කිරීම"], ["", "アナウンサー", "announcer", "නිවේදකයා"], ["", "アフリカ", "Africa", "අප්‍රිකාව"], ["", "アメリカ", "America", "ඇමරිකාව"], ["謝る", "あやまる", "to apologize", "සමාව ඉල්ලීම"], ["", "アルコール", "alcohol", "මධ්‍යසාරය"], ["", "アルバイト", "part-time job", "අර්ධකාලීන රැකියාව"], ["安心", "あんしん", "relief", "සහනය, සැනසීම"], ["安全", "あんぜん", "safety", "ආරක්ෂාව"], ["", "あんな", "such", "එවැනි"], ["案内", "あんない・する", "to guide", "මඟ පෙන්වීම, මාර්ගෝපදේශ කිරීම"], ["以下", "いか", "less than", "වඩා අඩු, පහත"], ["以外", "いがい", "with the exception of", "හැර, හැරුණු විට"], ["医学", "いがく", "medical science", "වෛද්‍ය විද්‍යාව"], ["生きる", "いきる", "to live", "ජීවත් වීම"], ["意見", "いけん", "opinion", "මතය, අදහස"], ["石", "いし", "stone", "ගල"], ["", "いじめる", "to tease", "හිරිහැර කිරීම, දුක් දීම"], ["以上", "いじょう", "more than, this is all", "වඩා වැඩි, මෙපමණයි"], ["急ぐ", "いそぐ", "to hurry", "ඉක්මන් වීම"], ["致す", "いたす", "(humble) to do", "(නිහතමානී) කිරීම"], ["", "いただく", "(humble) to receive", "(නිහතමානී) ලැබීම, ගැනීම"], ["一度", "いちど", "once", "එක් වරක්"], ["一生懸命", "いっしょうけんめい", "with utmost effort", "උපරිම උත්සාහයෙන්"], ["", "いっぱい", "full", "පිරී ඇති, පිරුණු"], ["糸", "いと", "thread", "නූල"], ["以内", "いない", "within", "ඇතුළත, තුළ"], ["田舎", "いなか", "countryside", "ගම්බද, ග්‍රාමීය ප්‍රදේශය"], ["祈る", "いのる", "to pray", "යාච්ඤා කිරීම, ප්‍රාර්ථනා කිරීම"], ["", "いらっしゃる", "(respectful) to be, to come or to go", "(ගෞරවනීය) සිටීම, පැමිණීම, යාම"], ["植える", "うえる", "to plant, to grow", "සිටුවීම, වගා කිරීම"], ["", "うかがう", "to visit", "(නිහතමානී) බැහැදැකීමට යාම, විමසීම"], ["受付", "うけつけ", "receipt", "පිළිගැනීමේ කවුළුව, පිළිගැනීම"], ["受ける", "うける", "to take a lesson or test", "පාඩමක් හෝ විභාගයක් ලබාගැනීම"], ["動く", "うごく", "to move", "චලනය වීම"], ["", "うそ", "a lie", "බොරුව"], ["", "うち", "within", "ඇතුළත, තුළ / ගෙදර"], ["打つ", "うつ", "to hit", "ගැසීම, පහර දීම"], ["美しい", "うつくしい", "beautiful", "සුන්දර"], ["写す", "うつす", "to copy or photograph", "පිටපත් කිරීම, ඡායාරූප ගැනීම"], ["移る", "うつる", "to move house or transfer", "මාරු වීම (ගෙදර/තැනකට)"], ["腕", "うで", "arm", "අත (බාහුව)"], ["", "うまい", "delicious", "රසවත්, දක්ෂ"], ["裏", "うら", "reverse side", "පිටුපස, පිටුබිම"], ["売り場", "うりば", "place where things are sold", "විකුණන ස්ථානය"], ["", "うれしい", "glad", "සතුටුයි"], ["", "うん", "(informal) yes", "(අවිධිමත්) ඔව්"], ["運転", "うんてん・する", "to drive", "රිය පැදවීම"], ["運転手", "うんてんしゅ", "driver", "රියදුරු"], ["運動", "うんどう・する", "to exercise", "ව්‍යායාම කිරීම"], ["", "エスカレーター", "escalator", "විදුලි පඩිපෙළ"], ["枝", "えだ", "branch, twig", "අත්ත"], ["選ぶ", "えらぶ", "to choose", "තෝරා ගැනීම"], ["遠慮", "えんりょ・する", "to be reserved, to be restrained", "පසුබට වීම, ලැජ්ජාශීලී වීම"], ["", "おいでになる", "(respectful) to be", "(ගෞරවනීය) සිටීම"], ["お祝い", "おいわい", "congratulation", "සුබ පැතුම"], ["", "オートバイ", "motorcycle", "යතුරුපැදිය"], ["", "おかげ", "owing to", "ආශිර්වාදයෙන්, හේතුවෙන්"], ["", "おかしい", "strange or funny", "අමුතුයි, විහිලුයි"], ["億", "おく", "one hundred million", "කෝටි දහයක් (100,000,000)"], ["屋上", "おくじょう", "rooftop", "වහළය මතුපිට"], ["贈り物", "おくりもの", "gift", "තෑග්ග"], ["送る", "おくる", "to send", "යැවීම"], ["遅れる", "おくれる", "to be late", "පරක්කු වීම"], ["起す", "おこす", "to wake", "අවදි කිරීම"], ["行う", "おこなう", "to do", "සිදු කිරීම, පවත්වා ගෙනයාම"], ["怒る", "おこる", "to get angry, to be angry", "තරහ යාම"], ["押し入れ", "おしいれ", "closet", "බදාම කාමරය/අල්මාරිය"], ["お嬢さん", "おじょうさん", "young lady", "තරුණ කාන්තාව/දුව"], ["お宅", "おたく", "(polite) your house", "(ආචාරශීලී) ඔබේ නිවස"], ["落る", "おちる", "to fall or drop", "වැටීම"], ["", "おっしゃる", "(respectful) to say", "(ගෞරවනීය) කීම"], ["夫", "おっと", "husband", "සැමියා"], ["", "おつり", "change from purchase, balance", "ඉතිරි මුදල"], ["音", "おと", "sound, note", "ශබ්දය"], ["落す", "おとす", "to drop", "වැටීමට ඉඩ හැරීම"], ["踊り", "おどり", "a dance", "නර්තනය"], ["踊る", "おどる", "to dance", "නටනවා"], ["驚く", "おどろく", "to be surprised", "පුදුමයට පත් වීම"], ["お祭り", "おまつり", "festival", "උත්සවය"], ["お見舞い", "おみまい", "calling on someone who is ill, enquiry", "රෝගියෙකු බැලීමට යාම"], ["お土産", "おみやげ", "souvenir", "සමරු තෑග්ග"], ["思い出す", "おもいだす", "to remember", "මතක් වීම"], ["思う", "おもう", "to think, to feel", "සිතීම, හැඟීම"], ["", "おもちゃ", "toy", "සෙල්ලම් බඩුව"], ["表", "おもて", "the front", "ඉදිරිපස"], ["親", "おや", "parents", "දෙමව්පියන්"], ["下りる", "おりる", "to get off", "බැසීම (වාහනයෙන්)"], ["折る", "おる", "to break or to fold", "කැඩීම හෝ නවීම"], ["お礼", "おれい", "expression of gratitude", "කෘතඥතාව පළ කිරීම"], ["折れる", "おれる", "to break or be folded", "කැඩෙනවා හෝ නැවෙනවා"], ["終わり", "おわり", "the end", "අවසානය"], ["", "カーテン", "curtain", "තිරය"], ["海岸", "かいがん", "coast", "වෙරළ තීරය"], ["会議", "かいぎ", "meeting", "රැස්වීම"], ["会議室", "かいぎしつ", "meeting room", "රැස්වීම් කාමරය"], ["会場", "かいじょう", "assembly hall or meeting place", "සමුළු ශාලාව"], ["会話", "かいわ", "conversation", "සංවාදය"], ["帰り", "かえり", "return", "ආපසු එන ගමන"], ["変える", "かえる", "to change", "වෙනස් කිරීම"], ["科学", "かがく", "science", "විද්‍යාව"], ["鏡", "かがみ", "mirror", "කණ්ණාඩිය"], ["掛ける", "かける", "to hang something", "එල්ලීම"], ["飾る", "かざる", "to decorate", "අලංකාර කිරීම"], ["火事", "かじ", "fire", "ගිනි කන්දරාව"], ["", "ガス", "petrol", "ගෑස්"], ["", "ガソリン", "petrol", "පෙට්‍රල්"], ["", "ガソリンスタンド", "petrol station", "පිරවුම්හල"], ["堅/硬/固い", "かたい", "hard", "තද, දෘඩ"], ["形", "かたち", "shape", "හැඩය"], ["片付ける", "かたづける", "to tidy up", "පිළිවෙළ කිරීම"], ["課長", "かちょう", "section manager", "අංශයේ කළමනාකරු"], ["勝つ", "かつ", "to win", "ජයග්‍රහණය කිරීම"], ["", "かっこう", "appearance", "පෙනුම"], ["家内", "かない", "housewife", "බිරිඳ (ගෘහණිය)"], ["悲しい", "かなしい", "sad", "දුකයි"], ["必ず", "かならず", "certainly, necessarily", "අනිවාර්යයෙන්ම"], ["お・金持ち", "かねもち/おかねもち", "rich man", "පොහොසත් තැනැත්තා"], ["彼女", "かのじょ", "she, girlfriend", "ඇය, පෙම්වතිය"], ["壁", "かべ", "wall", "බිත්තිය"], ["", "かまう", "to mind", "සැලකිලිමත් වීම, කරදර වීම"], ["髪", "かみ", "hair", "කෙස්"], ["噛む", "かむ", "to bite, to chew", "සපා කෑම, හපනවා"], ["通う", "かよう", "to commute", "නිතර ගමන් කිරීම (පාසල/වැඩට)"], ["", "ガラス", "a glass pane", "වීදුරු පුවරුව"], ["彼", "かれ", "he, boyfriend", "ඔහු, පෙම්වතා"], ["彼ら", "かれら", "they", "ඔවුන්"], ["乾く", "かわく", "to get dry", "වියළීම"], ["代わり", "かわり", "substitute, alternate", "ආදේශකය, විකල්පය"], ["変わる", "かわる", "to change", "වෙනස් වීම"], ["考える", "かんがえる", "to consider", "සිතා බැලීම"], ["関係", "かんけい", "relationship", "සම්බන්ධතාවය"], ["看護婦", "かんごふ", "female nurse", "හෙදිය"], ["簡単", "かんたん", "simple", "සරල"], ["気", "き", "spirit, mood", "මනස, ආස්ථානය"], ["機会", "きかい", "opportunity", "අවස්ථාව"], ["危険", "きけん", "danger", "අන්තරාය"], ["聞こえる", "きこえる", "to be heard", "ඇසෙනවා"], ["汽車", "きしゃ", "steam train", "වාෂ්ප දුම්රිය"], ["技術", "ぎじゅつ", "art, technology, skill", "තාක්ෂණය, කුසලතාව"], ["季節", "きせつ", "season", "සෘතුව"], ["規則", "きそく", "regulations", "නීති රීති"], ["", "きっと", "surely", "නියතවශයෙන්ම"], ["絹", "きぬ", "silk", "සේද"], ["厳しい", "きびしい", "strict", "දැඩි, කාර්මික"], ["気分", "きぶん", "mood", "මනෝභාවය"], ["決る", "きまる", "to be decided", "තීරණය වීම"], ["君", "きみ", "(informal) You (used by men towards women)", "(අවිධිමත්) ඔබ"], ["決める", "きめる", "to decide", "තීරණය කිරීම"], ["気持ち", "きもち", "feeling, mood", "හැඟීම, මනෝභාවය"], ["着物", "きもの", "kimono", "කිමෝනෝව"], ["客", "きゃく", "guest, customer", "අමුත්තා, පාරිභෝගිකයා"], ["急", "きゅう", "urgent, steep", "හදිසි, කිහිල්ල"], ["急行", "きゅうこう", "speedy, express", "වේගවත්, විශේෂ දුම්රිය"], ["教育", "きょういく", "education", "අධ්‍යාපනය"], ["教会", "きょうかい", "church", "පල්ලිය"], ["競争", "きょうそう", "competition", "තරගය"], ["興味", "きょうみ", "an interest", "උනන්දුව"], ["近所", "きんじょ", "neighbourhood", "අසල්වැසි ප්‍රදේශය"], ["具合", "ぐあい", "condition, health", "තත්ත්වය, සෞඛ්‍යය"], ["空気", "くうき", "air, atmosphere", "වාතය, පරිසරය"], ["空港", "くうこう", "airport", "ගුවන්තොටුපළ"], ["草", "くさ", "grass", "තණකොළ"], ["", "くださる", "(respectful) to give", "(ගෞරවනීය) දීම"], ["首", "くび", "neck", "බෙල්ල"], ["雲", "くも", "cloud", "වලාකුළ"], ["比べる", "くらべる", "to compare", "සංසන්දනය කිරීම"], ["", "くれる", "to give", "දෙනවා (කෙනෙකු මට)"], ["暮れる", "くれる", "to get dark, to come to an end", "අඳුරු වීම, අවසන් වීම"], ["君", "くん", "suffix for familiar young male", "තරුණ පිරිමින්ට යොදන උපසර්ගය"], ["毛", "け", "hair or fur", "රෝම, ලොම්"], ["計画", "けいかく・する", "to plan", "සැලසුම් කිරීම"], ["経験", "けいけん・する", "to experience", "අත්දැකීම් ලැබීම"], ["経済", "けいざい", "finance, economy", "ආර්ථිකය"], ["警察", "けいさつ", "police", "පොලීසිය"], ["", "ケーキ", "cake", "කේක්"], ["", "けが・する", "to injure", "තුවාල වීම"], ["景色", "けしき", "scene, landscape", "දර්ශනය"], ["消しゴム", "けしゴム", "eraser", "මකනය"], ["下宿", "げしゅく", "lodging", "කුලී නවාතැන"], ["決して", "けっして", "never", "කිසිසේත්ම"], ["", "けれど/けれども", "however", "එනමුත්"], ["原因", "げんいん", "cause, source", "හේතුව, මූලාශ්‍රය"], ["", "けんか・する", "to quarrel", "රණ්ඩු වීම"], ["研究", "けんきゅう", "research", "පර්යේෂණය"], ["研究室", "けんきゅうしつ", "study room, laboratory", "පර්යේෂණාගාරය"], ["見物", "けんぶつ", "sightseeing", "සංචාරය, බැලීම"], ["子", "こ", "child", "දරුවා"], ["", "こう", "this way", "මේ ආකාරයට"], ["郊外", "こうがい", "outskirts", "නගර අවට ප්‍රදේශය"], ["講義", "こうぎ", "lecture", "දේශනය"], ["工業", "こうぎょう", "the manufacturing industry", "නිෂ්පාදන කර්මාන්තය"], ["高校", "こうこう", "high school", "උසස් පාසල"], ["高校生", "こうこうせい", "high school student", "උසස් පාසල් සිසුවා"], ["工場", "こうじょう", "factory", "කර්මාන්තශාලාව"], ["校長", "こうちょう", "headmaster", "විදුහල්පති"], ["交通", "こうつう", "traffic, transportation", "ගමනාගමනය"], ["講堂", "こうどう", "auditorium", "ශාලාව"], ["高等学校", "こうとうがっこう", "high school", "උසස් පාසල"], ["公務員", "こうむいん", "government worker", "රජයේ සේවකයා"], ["国際", "こくさい", "international", "ජාත්‍යන්තර"], ["心", "こころ", "core, heart", "හදවත, අභ්‍යන්තරය"], ["御主人", "ごしゅじん", "(honorable) your husband", "(ගෞරවනීය) ඔබේ සැමියා"], ["故障", "こしょう・する", "to break-down", "අක්‍රිය වීම, කැඩීම"], ["ご存じ", "ごぞんじ", "knowing, acquaintance", "දැනුම, හඳුනාගැනීම"], ["答", "こたえ", "response", "පිළිතුර"], ["", "ごちそう", "a feast", "විශේෂ ආහාර වේලක්"], ["", "こと", "thing, matter", "දෙය, කාරණය"], ["小鳥", "ことり", "small bird", "පුංචි කුරුල්ලා"], ["", "このあいだ", "the other day, recently", "අහුරු දින, මෑතකදී"], ["", "このごろ", "these days, nowadays", "මෙකල, අද කාලයේ"], ["細かい", "こまかい", "small, fine", "කුඩා, සියුම්"], ["", "ごみ", "rubbish", "කසළ"], ["込む", "こむ", "to be crowded", "තදබදයෙන් යුතු වීම"], ["米", "こめ", "uncooked rice", "හාල්"], ["", "ごらんになる", "(respectful) to see", "(ගෞරවනීය) බැලීම"], ["", "これから", "after this", "මින් පසුව"], ["怖い", "こわい", "frightening", "බියජනකයි"], ["壊す", "こわす", "to break", "කැඩීම"], ["壊れる", "こわれる", "to be broken", "කැඩෙනවා"], ["", "コンサート", "concert", "සංගීත ප්‍රසංගය"], ["今度", "こんど", "now, next time", "මෙවර, ඊළඟ වතාවේ"], ["", "コンピュータ/コンピューター", "computer", "පරිගණකය"], ["今夜", "こんや", "tonight", "අද රාත්‍රියේ"], ["最近", "さいきん", "latest, nowadays", "මෑතකදී, අද කාලයේ"], ["最後", "さいご", "last, end", "අවසාන"], ["最初", "さいしょ", "beginning, first", "ආරම්භය, පළමුව"], ["坂", "さか", "slope, hill", "බෑවුම"], ["探す", "さがす", "to look for", "සොයනවා"], ["下る", "さがる", "to get down, to descend", "පහළට බැසීම"], ["盛ん", "さかん", "popularity, prosperous", "ජනප්‍රියතාව, සමෘද්ධිමත්"], ["下げる", "さげる", "to hang, to lower, to move back", "පහළට ගැනීම, එල්ලීම"], ["差し上げる", "さしあげる", "(polite) to give", "(ආචාරශීලී) දීම"], ["", "さっき", "some time ago", "ටිකකට පෙර"], ["寂しい", "さびしい", "lonely", "තනිකමයි"], ["さ来月", "さらいげつ", "the month after next", "ලබන මාසයට පසු මාසය"], ["さ来週", "さらいしゅう", "the week after next", "ලබන සතියට පසු සතිය"], ["", "サラダ", "salad", "සලාද"], ["騒ぐ", "さわぐ", "to make noise, to be excited", "ශබ්ද කිරීම, උද්දාමයට පත් වීම"], ["触る", "さわる", "to touch", "ස්පර්ශ කිරීම"], ["産業", "さんぎょう", "industry", "කර්මාන්තය"], ["", "サンダル", "sandal", "සැන්දලය"], ["", "サンドイッチ", "sandwich", "සැන්විචය"], ["残念", "ざんねん", "disappointment", "අසතුට, කණගාටුව"], ["市", "し", "city", "නගරය"], ["字", "じ", "character", "අකුර"], ["試合", "しあい", "match, game", "තරගය"], ["仕方", "しかた", "method", "ක්‍රමය"], ["", "しかる", "a particular", "පසිඳලීම (හඬ ගැසීම)"], ["試験", "しけん", "examination", "විභාගය"], ["事故", "じこ", "accident", "අනතුර"], ["地震", "じしん", "earthquake", "භූමිකම්පාව"], ["時代", "じだい", "era", "යුගය"], ["下着", "したぎ", "underwear", "යටි ඇඳුම"], ["支度", "したく・する", "to prepare", "සූදානම් වීම"], ["", "しっかり", "firmly, steadily", "තදින්, ස්ථාවරව"], ["失敗", "しっぱい", "failure, mistake", "අසාර්ථකත්වය, වැරැද්ද"], ["辞典", "じてん", "dictionary", "ශබ්දකෝෂය"], ["品物", "しなもの", "goods", "භාණ්ඩ"], ["", "しばらく", "little while", "ටික වේලාවක්"], ["島", "しま", "island", "දූපත"], ["市民", "しみん", "citizen", "පුරවැසියා"], ["事務所", "じむしょ", "office", "කාර්යාලය"], ["社会", "しゃかい", "society, public", "සමාජය"], ["社長", "しゃちょう", "company president", "සමාගමේ සභාපති"], ["", "じゃま", "hindrance, intrusion", "බාධාව"], ["", "ジャム", "jam", "ජෑම්"], ["自由", "じゆう", "freedom", "නිදහස"], ["習慣", "しゅうかん", "custom, manners", "සිරිත් විරිත්"], ["住所", "じゅうしょ", "an address, a residence", "ලිපිනය"], ["柔道", "じゅうどう", "judo", "ජූඩෝ"], ["十分", "じゅうぶん", "enough", "ප්‍රමාණවත්"], ["出席", "しゅっせき・する", "to attend", "සහභාගී වීම"], ["出発", "しゅっぱつ・する", "to depart", "පිටත් වීම"], ["趣味", "しゅみ", "hobby", "විනෝදාංශය"], ["準備", "じゅんび・する", "to prepare", "සූදානම් කිරීම"], ["紹介", "しょうかい", "introduction", "හඳුන්වාදීම"], ["小学校", "しょうがっこう", "elementary school", "ප්‍රාථමික පාසල"], ["小説", "しょうせつ", "novel", "නවකතාව"], ["招待", "しょうたい・する", "to invite", "ආරාධනා කිරීම"], ["承知", "しょうち・する", "to consent", "එකඟ වීම"], ["将来", "しょうらい", "future, prospects", "අනාගතය"], ["食事", "しょくじ・する", "to have a meal", "ආහාර ගැනීම"], ["食料品", "しょくりょうひん", "groceries", "සිල්ලර බඩු"], ["女性", "じょせい", "woman", "කාන්තාව"], ["知らせる", "しらせる", "to notify", "දැනුම් දීම"], ["調べる", "しらべる", "to investigate", "පරීක්ෂා කිරීම"], ["人口", "じんこう", "population", "ජනගහනය"], ["神社", "じんじゃ", "Shinto shrine", "ෂින්ටෝ දේවස්ථානය"], ["親切", "しんせつ", "kindness", "කරුණාව"], ["心配", "しんぱい・する", "to worry", "කනස්සල්ලට පත් වීම"], ["新聞社", "しんぶんしゃ", "newspaper company", "පුවත්පත් සමාගම"], ["水泳", "すいえい", "swimming", "පිහිනීම"], ["水道", "すいどう", "water supply", "ජල සම්පාදනය"], ["", "ずいぶん", "extremely", "අතිශයින්ම"], ["数学", "すうがく", "mathematics, arithmetic", "ගණිතය"], ["", "スーツ", "suit", "සූට් කබාය"], ["", "スーツケース", "suitcase", "සූට්කේසය"], ["過ぎる", "すぎる", "to exceed", "ඉක්මවා යාම"], ["", "すく", "to become empty", "හිස් වීම"], ["", "スクリーン", "screen", "තිරය"], ["凄い", "すごい", "terrific", "විස්මිතයි"], ["進む", "すすむ", "to make progress", "ප්‍රගතිය ලැබීම"], ["", "すっかり", "completely", "සම්පූර්ණයෙන්ම"], ["", "すっと", "straight, all of a sudden", "එකෙණෙහිම, ඍජුව"], ["", "ステーキ", "steak", "ස්ටේක්"], ["捨てる", "すてる", "to throw away", "ඉවතලීම"], ["", "ステレオ", "stereo", "ස්ටීරියෝ"], ["砂", "すな", "sand", "වැලි"], ["", "すばらしい", "wonderful", "අපූරුයි"], ["滑る", "すべる", "to slide, to slip", "ලිස්සීම"], ["隅", "すみ", "corner, nook", "කොනක්"], ["済む", "すむ", "to finish", "අවසන් වීම"], ["", "すり", "pickpocket", "සාක්කුකාරයා"], ["", "すると", "then", "එවිට"], ["生活", "せいかつ・する", "to live", "ජීවත් වීම, ජීවන රටාව"], ["生産", "せいさん・する", "to produce", "නිෂ්පාදනය කිරීම"], ["政治", "せいじ", "politics, government", "දේශපාලනය"], ["西洋", "せいよう", "western countries", "බටහිර රටවල්"], ["世界", "せかい", "the world", "ලෝකය"], ["席", "せき", "seat", "ආසනය"], ["説明", "せつめい", "explanation", "පැහැදිලි කිරීම"], ["背中", "せなか", "back of the body", "පිටේ"], ["", "ぜひ", "without fail", "අනිවාර්යයෙන්ම"], ["世話", "せわ・する", "to look after", "රැකබලා ගැනීම"], ["線", "せん", "line", "රේඛාව"], ["", "ぜんぜん", "not entirely (used in a negative sentence)", "කිසිසේත් නැත (ඍණාත්මක වාක්‍යවල)"], ["戦争", "せんそう", "war", "යුද්ධය"], ["先輩", "せんぱい", "senior", "ජ්‍යෙෂ්ඨයා"], ["", "そう", "really", "එහෙමද, ඇත්තටම"], ["相談", "そうだん・する", "to discuss", "සාකච්ඡා කිරීම"], ["育てる", "そだてる", "to rear, to bring up", "හදා වඩා ගැනීම"], ["卒業", "そつぎょう", "graduation", "උපාධි ප්‍රදානය/ශිෂ්‍යභවය අවසන් කිරීම"], ["祖父", "そふ", "grandfather", "සීයා"], ["", "ソフト", "soft", "මෘදු"], ["祖母", "そぼ", "grandmother", "ආච්චි"], ["", "それで", "because of that", "එබැවින්"], ["", "それに", "moreover", "එමෙන්ම"], ["", "それほど", "to that extent", "ඒ තරමට"], ["", "そろそろ", "gradually, soon", "ටික ටික, ළඟදීම"], ["", "そんな", "that sort of", "එවැනි"], ["", "そんなに", "so much, like that", "එතරම්"], ["退院", "たいいん・する", "to leave hospital", "රෝහලෙන් පිට වීම"], ["大学生", "だいがくせい", "university student", "විශ්වවිද්‍යාල සිසුවා"], ["大事", "だいじ", "important, valuable, serious matter", "වැදගත්, වටිනා"], ["大体", "だいたい", "generally", "සාමාන්‍යයෙන්"], ["", "たいてい", "usually", "සාමාන්‍යයෙන්"], ["", "タイプ", "type, style", "වර්ගය, විලාසය"], ["大分", "だいぶ", "greatly", "බොහෝ දුරට"], ["台風", "たいふう", "typhoon", "සුළිසුළඟ"], ["倒れる", "たおれる", "to break down", "වැටී යාම, කඩා වැටීම"], ["", "だから", "so, therefore", "එබැවින්"], ["確か", "たしか", "definite", "නියතයි"], ["足す", "たす", "to add a number", "එකතු කිරීම (ගණිතමය)"], ["訪ねる", "たずねる", "to visit", "බැහැදැකීමට යාම"], ["尋ねる", "たずねる", "to ask", "විමසීම"], ["正しい", "ただしい", "correct", "නිවැරදියි"], ["畳", "たたみ", "Japanese straw mat", "ජපන් පිදුරු පැදුර"], ["立てる", "たてる", "to stand something up", "සිටුවීම, ඍජුව තැබීම"], ["建てる", "たてる", "to build", "ගොඩනැගීම"], ["例えば", "たとえば", "for example", "උදාහරණයක් ලෙස"], ["棚", "たな", "shelves", "රාක්කය"], ["楽しみ", "たのしみ", "joy", "ප්‍රීතිය, ආස්වාදය"], ["楽む", "たのしむ", "to enjoy oneself", "විනෝද වීම"], ["", "たまに", "occasionally", "ඉඳහිට"], ["為", "ため", "in order to", "සඳහා"], ["", "だめ", "no good", "බැහැ, හොඳ නැත"], ["足りる", "たりる", "to be enough", "ප්‍රමාණවත් වීම"], ["男性", "だんせい", "male", "පිරිමි"], ["暖房", "だんぼう", "heating", "උනුසුම් කරන යන්ත්‍රය"], ["血", "ち", "blood", "ලේ"], ["", "チェック・する", "to check", "පරීක්ෂා කිරීම"], ["力", "ちから", "strength, power", "ශක්තිය"], ["", "ちっとも", "not at all (used with a negative verb)", "කිසිසේත් නැත"], ["", "ちゃん", "suffix for familiar female person", "කුඩා දැරියන්ට/හිතවතුන්ට යොදන උපසර්ගය"], ["注意", "ちゅうい", "caution", "අවධානය, ප්‍රවේශම"], ["中学校", "ちゅうがっこう", "junior high school, middle school", "මධ්‍ය පාසල"], ["注射", "ちゅうしゃ", "injection", "එන්නත"], ["駐車場", "ちゅうしゃじょう", "parking lot", "වාහන නැවැත්වීමේ ස්ථානය"], ["地理", "ちり", "geography", "භූගෝල විද්‍යාව"], ["捕まえる", "つかまえる", "to seize", "අල්ලා ගැනීම"], ["", "つき", "moon", "සඳ"], ["付く", "つく", "to be attached", "ඇලවී තිබීම"], ["漬ける", "つける", "to soak, to pickle", "පොඟවා තැබීම, අච්චාරු දැමීම"], ["都合", "つごう", "circumstances, convenience", "පහසුව, තත්ත්වය"], ["伝える", "つたえる", "to report", "දැනුම් දීම, දන්වා සිටීම"], ["続く", "つづく", "to be continued", "දිගටම පවතී"], ["続ける", "つづける", "to continue", "දිගටම කරගෙන යාම"], ["包む", "つつむ", "to wrap", "ඔතා ගැනීම"], ["妻", "つま", "(humble) wife", "(නිහතමානී) බිරිඳ"], ["", "つもり", "intention", "අදහස, උවමනාව"], ["釣る", "つる", "to fish", "මාළු ඇල්ලීම"], ["連れる", "つれる", "to lead", "රැගෙන යාම (කෙනෙකු)"], ["丁寧", "ていねい", "polite", "ආචාරශීලී"], ["", "テキスト", "text, text book", "පෙළ පොත"], ["適当", "てきとう", "suitability", "සුදුසුකම, යෝග්‍යතාව"], ["", "できるだけ", "as much as possible", "හැකි තරම්"], ["手伝う", "てつだう", "to assist", "උදව් කිරීම"], ["", "テニス", "tennis", "ටෙනිස්"], ["手袋", "てぶくろ", "glove", "අත්වැසුම"], ["寺", "てら", "temple", "පන්සල/විහාරය"], ["点", "てん", "point, dot", "ලක්ෂ්‍යය, තිත"], ["店員", "てんいん", "shop assistant", "වෙළඳසැල් සේවකයා"], ["天気予報", "てんきよほう", "weather forecast", "කාලගුණ අනාවැකිය"], ["電灯", "でんとう", "electric light", "විදුලි පහන"], ["電報", "でんぽう", "telegram", "විදුලි පණිවුඩය"], ["展覧会", "てんらんかい", "exhibition", "ප්‍රදර්ශනය"], ["都", "と", "metropolitan", "මහානගර"], ["道具", "どうぐ", "tool, means", "මෙවලම"], ["", "とうとう", "finally, after all", "අවසානයේදී"], ["動物園", "どうぶつえん", "zoo", "සත්වෝද්‍යානය"], ["遠く", "とおく", "distant", "දුරින්"], ["通る", "とおる", "to go through", "හරහා යාම"], ["特に", "とくに", "particularly, especially", "විශේෂයෙන්ම"], ["特別", "とくべつ", "special", "විශේෂ"], ["", "とこや", "barber", "රැවුල් කපන්නා"], ["途中", "とちゅう", "on the way", "මාර්ග මධ්‍යයේ"], ["特急", "とっきゅう", "limited express train (faster than an express train)", "සීමිත වේගවත් දුම්රිය"], ["届ける", "とどける", "to reach", "ලබා දීම, යැවීම"], ["泊まる", "とまる", "to lodge at", "නවාතැන් ගැනීම"], ["止める", "とめる", "to stop something", "නවත්වනවා"], ["取り替える", "とりかえる", "to exchange", "හුවමාරු කිරීම"], ["泥棒", "どろぼう", "thief", "සොරා"], ["", "どんどん", "more and more", "වැඩි වැඩියෙන්"], ["直す", "なおす", "to fix, to repair", "අලුත්වැඩියා කිරීම"], ["直る", "なおる", "to be fixed, to be repaired", "අලුත්වැඩියා වේ"], ["治る", "なおる", "to be cured, to heal", "සුව වේ"], ["中々", "なかなか", "considerably", "තරමක් දුරට, එතරම් පහසුවෙන් නොවේ"], ["泣く", "なく", "to weep", "අඬනවා"], ["無くなる", "なくなる", "to disappear, to get lost", "නැති වී යනවා"], ["亡くなる", "なくなる", "to die", "මිය යනවා"], ["投げる", "なげる", "to throw or cast away", "විසි කිරීම"], ["", "なさる", "(respectful) to do", "(ගෞරවනීය) කිරීම"], ["鳴る", "なる", "to sound", "හඬ නගනවා"], ["", "なるべく", "as much as possible", "හැකි තරම්"], ["", "なるほど", "now I understand", "එහෙමද, තේරුණා"], ["慣れる", "なれる", "to grow accustomed to", "පුරුදු වීම"], ["", "におい", "a smell", "සුවඳ/ගඳ"], ["苦い", "にがい", "bitter", "තිත්තයි"], ["二階建て", "にかいだて", "two storied", "මහල් දෙකේ"], ["逃げる", "にげる", "to escape", "පලා යාම"], ["日記", "にっき", "journal", "දිනපොත"], ["入院", "にゅういん・する", "to hospitalise", "රෝහල් ගත වීම"], ["入学", "にゅうがく・する", "to enter school or university", "පාසලට/විශ්වවිද්‍යාලයට ඇතුළත් වීම"], ["似る", "にる", "to be similar", "සමාන වීම"], ["人形", "にんぎょう", "doll, figure", "බෝනික්කා"], ["盗む", "ぬすむ", "to steal", "සොරකම් කිරීම"], ["塗る", "ぬる", "to paint, to plaster", "සායම් ගෑම"], ["", "ぬれる", "to get wet", "තෙත් වීම"], ["", "ねだん", "price", "මිල"], ["熱", "ねつ", "fever", "උණ"], ["", "ねっしん", "enthusiasm", "උද්‍යෝගය"], ["寝坊", "ねぼう", "sleeping in late", "පරක්කුවට නිදාගැනීම"], ["眠い", "ねむい", "sleepy", "නින්ද යනවා"], ["眠る", "ねむる", "to sleep", "නිදා ගැනීම"], ["残る", "のこる", "to remain", "ඉතිරි වේ"], ["", "のど", "throat", "උගුර"], ["乗り換える", "のりかえる", "to change between buses or trains", "වාහන මාරු වීම"], ["乗り物", "のりもの", "vehicle", "වාහනය"], ["葉", "は", "leaf", "කොළය"], ["場合", "ばあい", "situation", "අවස්ථාව, තත්ත්වය"], ["", "パート", "part time", "අර්ධකාලීන"], ["倍", "ばい", "double", "දෙගුණය"], ["拝見", "はいけん・する", "(humble) to look at", "(නිහතමානී) බැලීම"], ["歯医者", "はいしゃ", "dentist", "දන්ත වෛද්‍යවරයා"], ["運ぶ", "はこぶ", "to transport", "ප්‍රවාහනය කිරීම"], ["始める", "はじめる", "to begin", "ආරම්භ කිරීම"], ["場所", "ばしょ", "location", "ස්ථානය"], ["", "はず", "it should be so", "එසේ විය යුතුය"], ["恥ずかしい", "はずかしい", "embarrassed", "ලැජ්ජාවෙනවා"], ["", "パソコン", "personal computer", "පුද්ගලික පරිගණකය"], ["発音", "はつおん", "pronunciation", "උච්චාරණය"], ["", "はっきり", "clearly", "පැහැදිලිව"], ["花見", "はなみ", "cherry-blossom viewing", "සකුරා මල් නැරඹීම"], ["林", "はやし", "woods, forester", "වනාන්තරය"], ["払う", "はらう", "to pay", "ගෙවීම"], ["番組", "ばんぐみ", "television or radio program", "රූපවාහිනී/ගුවන්විදුලි වැඩසටහන"], ["反対", "はんたい", "opposition", "විරෝධය"], ["", "ハンドバッグ", "handbag", "අත්බෑගය"], ["日", "ひ", "day, sun", "දිනය, හිරු"], ["火", "ひ", "fire", "ගින්න"], ["", "ピアノ", "piano", "පියානෝව"], ["冷える", "ひえる", "to grow cold", "සීතල වේ"], ["光", "ひかり", "light", "එළිය"], ["光る", "ひかる", "to shine, to glitter", "දිලිසෙනවා"], ["引き出し", "ひきだし", "drawer, drawing out", "ලාච්චුව"], ["引き出す", "ひきだす", "to withdraw", "ආපසු ගැනීම (මුදල් වශයෙන්)"], ["", "ひげ", "beard", "රැවුල"], ["飛行場", "ひこうじょう", "airport", "ගුවන්තොටුපළ"], ["久しぶり", "ひさしぶり", "after a long time", "බොහෝ කාලයකට පසු"], ["美術館", "びじゅつかん", "art gallery", "කලා ශාලාව"], ["非常に", "ひじょうに", "extremely", "අතිශයින්ම"], ["", "びっくり・する", "to be surprised", "පුදුමයට පත් වීම"], ["引っ越す", "ひっこす", "to move house", "ගෙදර මාරු වීම"], ["必要", "ひつよう", "necessary", "අවශ්‍යයි"], ["", "ひどい", "awful", "භයානකයි, දරුණුයි"], ["開く", "ひらく", "to open an event", "විවෘත කිරීම (උත්සවයක්)"], ["", "ビル", "building or bill", "ගොඩනැගිල්ල"], ["昼間", "ひるま", "daytime, during the day", "දහවල් කාලය"], ["昼休み", "ひるやすみ", "noon break", "දිවා විවේකය"], ["拾う", "ひろう", "to pick up, to gather", "අහුලාගැනීම"], ["", "ファックス", "fax", "ෆැක්ස්"], ["増える", "ふえる", "to increase", "වැඩි වේ"], ["深い", "ふかい", "deep", "ගැඹුරු"], ["複雑", "ふくざつ", "complexity, complication", "සංකීර්ණ"], ["復習", "ふくしゅう", "revision", "පුනරීක්ෂණය"], ["部長", "ぶちょう", "head of a section", "අංශ ප්‍රධානියා"], ["普通", "ふつう", "usually, or a train that stops at every station", "සාමාන්‍යයෙන්, සියලු ස්ථානවල නවතින දුම්රිය"], ["", "ぶどう", "grapes", "මිදි"], ["太る", "ふとる", "to become fat", "තර වීම"], ["布団", "ふとん", "Japanese bedding, futon", "ජපන් ඇදක් (ෆුටෝන්)"], ["舟", "ふね", "ship", "නෞකාව"], ["不便", "ふべん", "inconvenience", "අපහසුව"], ["踏む", "ふむ", "to step on", "පාගනවා"], ["降り出す", "ふりだす", "to start to rain", "වැසි වැටීම ආරම්භ වේ"], ["", "プレゼント", "present", "තෑග්ග"], ["文化", "ぶんか", "culture", "සංස්කෘතිය"], ["文学", "ぶんがく", "literature", "සාහිත්‍යය"], ["文法", "ぶんぽう", "grammar", "ව්‍යාකරණය"], ["別", "べつ", "different", "වෙනස්"], ["", "ベル", "bell", "සීනුව"], ["変", "へん", "strange", "අමුතුයි"], ["返事", "へんじ", "reply", "පිළිතුර"], ["貿易", "ぼうえき", "trade", "වෙළඳාම"], ["放送", "ほうそう・する", "to broadcast", "විකාශනය කිරීම"], ["法律", "ほうりつ", "law", "නීතිය"], ["僕", "ぼく", "I (used by males)", "මම (පිරිමින් භාවිත කරන)"], ["星", "ほし", "star", "තරුව"], ["", "ほど", "extent", "තරම"], ["", "ほとんど", "mostly", "වැඩි වශයෙන්"], ["", "ほめる", "to praise", "ප්‍රශංසා කිරීම"], ["翻訳", "ほんやく", "translation", "පරිවර්තනය"], ["参る", "まいる", "(humble) to go, to come", "(නිහතමානී) යාම, පැමිණීම"], ["負ける", "まける", "to lose", "පරාජය වීම"], ["", "まじめ", "serious", "අවංකයි, බැරෑරුම්"], ["", "まず", "first of all", "පළමුවෙන්ම"], ["", "または", "or, otherwise", "නැතහොත්"], ["間違える", "まちがえる", "to make a mistake", "වැරදීම"], ["間に合う", "まにあう", "to be in time for", "වේලාවට එළඹීම"], ["周り", "まわり", "surroundings", "අවට"], ["回る", "まわる", "to go around", "වටේට යනවා"], ["漫画", "まんが", "comic", "විකට කථා පොත"], ["真中", "まんなか", "middle", "මැද"], ["見える", "みえる", "to be in sight", "පේනවා"], ["湖", "みずうみ", "lake", "වැව"], ["味噌", "みそ", "bean paste", "සෝයා පේස්ට්"], ["見つかる", "みつかる", "to be discovered", "සොයාගැනේ"], ["見つける", "みつける", "to discover", "සොයාගැනීම"], ["皆", "みな", "everybody", "සියල්ලෝම"], ["港", "みなと", "harbour", "වරාය"], ["向かう", "むかう", "to face", "මුහුණ දෙනවා"], ["迎える", "むかえる", "to go out to meet", "පිළිගැනීමට යාම"], ["昔", "むかし", "olden days, former", "පැරණි කාලයේ"], ["虫", "むし", "insect", "කෘමියා"], ["息子", "むすこ", "(humble) son", "(නිහතමානී) පුතා"], ["娘", "むすめ", "(humble) daughter", "(නිහතමානී) දුව"], ["無理", "むり", "impossible", "කළ නොහැක"], ["召し上がる", "めしあがる", "(polite) to eat", "(ආචාරශීලී) කෑම කනවා"], ["珍しい", "めずらしい", "rare", "දුර්ලභ"], ["申し上げる", "もうしあげる", "(humble) to say, to tell", "(නිහතමානී) කීම"], ["申す", "もうす", "(humble) to be called, to say", "(නිහතමානී) කියනු ලැබීම, කීම"], ["", "もうすぐ", "soon", "ළඟදීම"], ["", "もし", "if", "නම්"], ["", "もちろん", "of course", "ඇත්තෙන්ම"], ["", "もっとも", "extremely", "අතිශයින්ම"], ["戻る", "もどる", "to turn back", "ආපසු හැරී යනවා"], ["木綿", "もめん", "cotton", "කපු"], ["", "もらう", "to receive", "ලබා ගැනීම"], ["森", "もり", "forest", "වනාන්තරය"], ["焼く", "やく", "to bake, to grill", "බැක් කිරීම, ග්‍රිල් කිරීම"], ["約束", "やくそく", "promise", "පොරොන්දුව"], ["役に立つ", "やくにたつ", "to be helpful", "ප්‍රයෝජනවත් වේ"], ["焼ける", "やける", "to burn, to be roasted", "ගිනි ගැනීම, පිසෙනවා"], ["優しい", "やさしい", "kind", "කරුණාවන්තයි"], ["痩せる", "やせる", "to become thin", "කෙට්ටු වේ"], ["", "やっと", "at last", "අවසානයේදී"], ["", "やはり/やっぱり", "as I thought, absolutely", "මම හිතුවා වගේම, නියතවශයෙන්ම"], ["止む", "やむ", "to stop", "නවතී"], ["止める", "やめる", "to stop", "නවත්වනවා"], ["柔らかい", "やわらかい", "soft", "මෘදුයි"], ["湯", "ゆ", "hot water", "රත් වතුර"], ["輸出", "ゆしゅつ・する", "to export", "අපනයනය කිරීම"], ["輸入", "ゆにゅう・する", "to import", "ආනයනය කිරීම"], ["指", "ゆび", "finger", "ඇඟිල්ල"], ["指輪", "ゆびわ", "finger ring", "මුදු"], ["夢", "ゆめ", "dream", "සිහිනය"], ["揺れる", "ゆれる", "to shake, to sway", "සෙලවෙනවා"], ["用", "よう", "use", "භාවිතය"], ["用意", "ようい", "preparation", "සූදානම"], ["用事", "ようじ", "things to do", "කළයුතු දේවල්"], ["汚れる", "よごれる", "to get dirty", "අපිරිසිදු වේ"], ["予習", "よしゅう", "preparation for a lesson", "පාඩම සඳහා පූර්ව සූදානම"], ["予定", "よてい", "arrangement", "සැලසුම"], ["予約", "よやく", "reservation", "වෙන්කරවා ගැනීම"], ["寄る", "よる", "to visit", "බැහැදැකීමට/එහෙන් පසුවීමට යාම"], ["喜ぶ", "よろこぶ", "to be delighted", "සතුටු වේ"], ["", "よろしい", "(respectful) OK, all right", "(ගෞරවනීය) හරි, කමක් නැත"], ["理由", "りゆう", "reason", "හේතුව"], ["利用", "りよう", "utilization", "භාවිතය"], ["両方", "りょうほう", "both sides", "දෙපැත්තම"], ["旅館", "りょかん", "Japanese hotel", "ජපන් හෝටලය (ර්යොකාන්)"], ["留守", "るす", "absence", "නිවසේ නොසිටීම"], ["冷房", "れいぼう", "air conditioning", "වායු සමීකරණය"], ["歴史", "れきし", "history", "ඉතිහාසය"], ["", "レジ", "register", "මුදල් ලාච්චුව (කැෂියර්)"], ["", "レポート/リポート", "report", "වාර්තාව"], ["連絡", "れんらく", "contact", "සම්බන්ධතාවය"], ["", "ワープロ", "word processor", "වචන සකසනය"], ["沸かす", "わかす", "to boil, to heat", "උතුරවනවා"], ["別れる", "わかれる", "to separate", "වෙන් වනවා"], ["沸く", "わく", "to boil, to grow hot, to get excited", "උතුරනවා"], ["訳", "わけ", "meaning, reason", "අර්ථය, හේතුව"], ["忘れ物", "わすれもの", "lost article", "අමතක කළ දෙය"], ["笑う", "わらう", "to laugh, to smile", "සිනාසෙනවා"], ["割合", "わりあい", "rate, ratio, percentage", "අනුපාතය"], ["割れる", "われる", "to break", "කැඩෙනවා"], ["泳ぎ方", "およぎかた", "way of swimming", "පිහිනුම් ක්‍රමය"]];

/* =========================================================
   KANA -> ROMAJI ENGINE
========================================================= */
const KATA_TO_HIRA_OFFSET = 0x60;
function kataToHira(str){
  let out = "";
  for(const ch of str){
    const code = ch.codePointAt(0);
    if(code >= 0x30A1 && code <= 0x30F6){
      out += String.fromCodePoint(code - KATA_TO_HIRA_OFFSET);
    } else {
      out += ch;
    }
  }
  return out;
}

const ROMAJI_MAP = {
  "あ":"a","い":"i","う":"u","え":"e","お":"o",
  "か":"ka","き":"ki","く":"ku","け":"ke","こ":"ko",
  "が":"ga","ぎ":"gi","ぐ":"gu","げ":"ge","ご":"go",
  "さ":"sa","し":"shi","す":"su","せ":"se","そ":"so",
  "ざ":"za","じ":"ji","ず":"zu","ぜ":"ze","ぞ":"zo",
  "た":"ta","ち":"chi","つ":"tsu","て":"te","と":"to",
  "だ":"da","ぢ":"ji","づ":"zu","で":"de","ど":"do",
  "な":"na","に":"ni","ぬ":"nu","ね":"ne","の":"no",
  "は":"ha","ひ":"hi","ふ":"fu","へ":"he","ほ":"ho",
  "ば":"ba","び":"bi","ぶ":"bu","べ":"be","ぼ":"bo",
  "ぱ":"pa","ぴ":"pi","ぷ":"pu","ぺ":"pe","ぽ":"po",
  "ま":"ma","み":"mi","む":"mu","め":"me","も":"mo",
  "や":"ya","ゆ":"yu","よ":"yo",
  "ら":"ra","り":"ri","る":"ru","れ":"re","ろ":"ro",
  "わ":"wa","を":"wo","ん":"n",
  "ゐ":"i","ゑ":"e"
};
const YOUON_MAP = {
  "きゃ":"kya","きゅ":"kyu","きょ":"kyo",
  "ぎゃ":"gya","ぎゅ":"gyu","ぎょ":"gyo",
  "しゃ":"sha","しゅ":"shu","しょ":"sho",
  "じゃ":"ja","じゅ":"ju","じょ":"jo",
  "ちゃ":"cha","ちゅ":"chu","ちょ":"cho",
  "ぢゃ":"ja","ぢゅ":"ju","ぢょ":"jo",
  "にゃ":"nya","にゅ":"nyu","にょ":"nyo",
  "ひゃ":"hya","ひゅ":"hyu","ひょ":"hyo",
  "びゃ":"bya","びゅ":"byu","びょ":"byo",
  "ぴゃ":"pya","ぴゅ":"pyu","ぴょ":"pyo",
  "みゃ":"mya","みゅ":"myu","みょ":"myo",
  "りゃ":"rya","りゅ":"ryu","りょ":"ryo"
};
const SMALL_Y = new Set(["ゃ","ゅ","ょ"]);

function kanaToRomaji(input){
  if(!input) return "";
  const hira = kataToHira(input);
  let out = "";
  let lastVowel = "";
  const chars = Array.from(hira);
  for(let i=0;i<chars.length;i++){
    const c = chars[i];
    const next = chars[i+1];
    if(c === "・" || c===" "){ out += " "; continue; }
    if(c === "ー"){ out += lastVowel; continue; }
    if(c === "っ"){
      let doubleCons = "";
      if(next){
        const nextCombo = YOUON_MAP[next+(chars[i+2]||"")];
        const base = nextCombo || ROMAJI_MAP[next] || "";
        doubleCons = base.charAt(0);
        if(base.startsWith("ch")) doubleCons = "t";
      }
      out += doubleCons;
      continue;
    }
    if(next && SMALL_Y.has(next)){
      const combo = YOUON_MAP[c+next];
      if(combo){
        out += combo;
        lastVowel = combo.slice(-1);
        i++;
        continue;
      }
    }
    if(ROMAJI_MAP[c] !== undefined){
      out += ROMAJI_MAP[c];
      lastVowel = ROMAJI_MAP[c].slice(-1);
      continue;
    }
    out += c;
  }
  return out;
}

/* =========================================================
   CATEGORIZATION (Gojūon row)
========================================================= */
const ROW_ORDER = [
  "あ","い","う","え","お",
  "か","き","く","け","こ",
  "さ","し","す","せ","そ",
  "た","ち","つ","て","と",
  "な","に","ぬ","ね","の",
  "は","ひ","ふ","へ","ほ",
  "ま","み","む","め","も",
  "や","ゆ","よ",
  "り","る","れ",
  "わ"
];

const ROW_MAP = (()=>{
  const m = {};
  const baseList = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
  for(const ch of baseList) {
    m[ch] = ch;
  }
  const voiced = {
    "が":"か", "ぎ":"き", "ぐ":"く", "げ":"け", "ご":"こ",
    "ざ":"さ", "じ":"し", "ず":"す", "ぜ":"せ", "ぞ":"そ",
    "だ":"た", "ぢ":"ち", "づ":"つ", "で":"て", "ど":"と",
    "ば":"は", "び":"ひ", "ぶ":"ふ", "べ":"へ", "ぼ":"ほ",
    "ぱ":"は", "ぴ":"ひ", "ぷ":"ふ", "ぺ":"へ", "ぽ":"ほ"
  };
  for(const [key, val] of Object.entries(voiced)) {
    m[key] = val;
  }
  return m;
})();

function categoryOf(kana){
  const hira = kataToHira(kana);
  const first = Array.from(hira)[0];
  const mapped = ROW_MAP[first] || "あ";
  return ROW_ORDER.includes(mapped) ? mapped : "あ";
}

/* =========================================================
   BUILD DATA MODEL
========================================================= */
const VOCAB = VOCAB_RAW.map((row, idx) => {
  const [kanji, kana, en, si] = row;
  return {
    id: idx,
    kanji: kanji || "",
    kana: kana,
    romaji: kanaToRomaji(kana),
    en: en,
    si: si,
    cat: categoryOf(kana)
  };
});

const byCat = {};
ROW_ORDER.forEach(r => byCat[r] = []);
VOCAB.forEach(v => byCat[v.cat].push(v));

/* =========================================================
   RENDER: NAV
========================================================= */
document.getElementById("totalCount").textContent = VOCAB.length;
document.getElementById("catCount").textContent = ROW_ORDER.length;

const quickNav = document.getElementById("quickNav");
ROW_ORDER.forEach(row=>{
  const btn = document.createElement("button");
  btn.dataset.row = row;
  btn.innerHTML = `<span class="row-kana">${row}</span><span class="row-count">${byCat[row].length}</span>`;
  btn.addEventListener("click", ()=>{
    searchInput.value = "";
    goToCategory(row);
  });
  quickNav.appendChild(btn);
});

function setActiveNavButton(row){
  quickNav.querySelectorAll("button").forEach(b=>{
    b.classList.toggle("active", b.dataset.row === row);
  });
}

/* =========================================================
   RENDER: TABLE HTML BUILDER
========================================================= */
function tableRowsHTML(items, showCatCol){
  return items.map((v,i)=>`
    <tr data-id="${v.id}">
      <td class="col-idx">${i+1}</td>
      <td class="col-kanji ${v.kanji ? "" : "empty"}">${v.kanji || "—"}</td>
      <td class="col-kana">${v.kana}</td>
      <td class="col-romaji">${v.romaji}</td>
      <td class="col-en">${v.en}</td>
      <td class="col-si" lang="si">${v.si}</td>
      ${showCatCol ? `<td class="col-cat">${v.cat}</td>` : ""}
    </tr>
  `).join("");
}

function tableHTML(items, showCatCol){
  if(items.length === 0){
    return `<p class="no-results">検索結果がありません — No words match your search.</p>`;
  }
  return `
    <table class="vocab-table">
      <thead>
        <tr>
          <th>#</th><th>Kanji</th><th>Kana</th><th>Romaji</th><th>English</th><th lang="si">සිංහල අර්ථය</th>${showCatCol ? "<th>Row</th>" : ""}
        </tr>
      </thead>
      <tbody>${tableRowsHTML(items, showCatCol)}</tbody>
    </table>
  `;
}

/* =========================================================
   VIEWS
========================================================= */
const contentArea = document.getElementById("contentArea");
let currentCat = null;

function renderWelcome(){
  currentCat = null;
  setActiveNavButton(null);
  contentArea.innerHTML = `
    <div class="welcome-card">
      <div class="big">い・ろ・は</div>
      <p>Pick a letter above to study only those words —<br>
      or use the search box to look across the whole list.</p>
    </div>
  `;
  window.scrollTo({top:0, behavior:"smooth"});
}

function goToCategory(row){
  currentCat = row;
  const items = byCat[row];
  setActiveNavButton(row);
  const idx = ROW_ORDER.indexOf(row);
  const prevRow = ROW_ORDER[(idx - 1 + ROW_ORDER.length) % ROW_ORDER.length];
  const nextRow = ROW_ORDER[(idx + 1) % ROW_ORDER.length];

  contentArea.innerHTML = `
    <div class="section-head">
      <div class="titles">
        <span class="big-kana">${row}</span>
        <span class="row-samples"><span class="count-badge">${items.length} words starting with "${row}"</span></span>
      </div>
      <button class="print-btn" id="printBtn">🖨 &nbsp;Print A4 sheet</button>
    </div>
    <div class="print-title">JLPT N4 Vocabulary — Letter "${row}" (${items.length} words)</div>
    ${tableHTML(items, false)}
    <div class="pager">
      <button id="prevCatBtn">← <span class="kana-tag">${prevRow}</span></button>
      <button id="nextCatBtn"><span class="kana-tag">${nextRow}</span> →</button>
    </div>
  `;
  document.getElementById("printBtn").addEventListener("click", ()=> window.print());
  document.getElementById("prevCatBtn").addEventListener("click", ()=> goToCategory(prevRow));
  document.getElementById("nextCatBtn").addEventListener("click", ()=> goToCategory(nextRow));
  window.scrollTo({top:0, behavior:"smooth"});
}

function renderSearchResults(query){
  currentCat = null;
  setActiveNavButton(null);
  const q = query.toLowerCase();
  const items = VOCAB.filter(v =>
    (v.kanji + v.kana + v.romaji + v.en + v.si).toLowerCase().includes(q)
  );
  contentArea.innerHTML = `
    <div class="section-head">
      <div class="titles">
        <span class="big-kana" style="font-size:28px;">🔍</span>
        <span class="row-samples">Search results for “${query}”<span class="count-badge">${items.length} word${items.length===1?"":"s"} found</span></span>
      </div>
      ${items.length ? `<button class="print-btn" id="printBtn">🖨 &nbsp;Print A4 sheet</button>` : ""}
    </div>
    <div class="print-title">JLPT N4 Vocabulary — Search “${query}” (${items.length} words)</div>
    ${tableHTML(items, true)}
  `;
  const pb = document.getElementById("printBtn");
  if(pb) pb.addEventListener("click", ()=> window.print());
}

/* practice reveal (event delegation, contentArea persists) */
contentArea.addEventListener("click", (e)=>{
  if(!document.body.classList.contains("practice-mode")) return;
  const tr = e.target.closest("tr[data-id]");
  if(!tr) return;
  tr.classList.toggle("revealed");
});

/* =========================================================
   INITIAL VIEW
========================================================= */
renderWelcome();
document.getElementById("logoHome").addEventListener("click", ()=>{
  searchInput.value = "";
  renderWelcome();
});

/* =========================================================
   THEME TOGGLE
========================================================= */
const themeToggle = document.getElementById("themeToggle");
function applyTheme(t){
  document.documentElement.setAttribute("data-theme", t);
  themeToggle.textContent = t === "dark" ? "☀️" : "🌙";
}
let savedTheme = "light";
try{
  const hour = new Date().getHours();
  savedTheme = (hour < 6 || hour >= 19) ? "dark" : "light";
}catch(e){}
applyTheme(savedTheme);
themeToggle.addEventListener("click", ()=>{
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

/* =========================================================
   PRACTICE MODE TOGGLE
========================================================= */
const practiceToggle = document.getElementById("practiceToggle");
practiceToggle.addEventListener("click", ()=>{
  practiceToggle.classList.toggle("on");
  document.body.classList.toggle("practice-mode");
});

/* =========================================================
   SEARCH
========================================================= */
const searchInput = document.getElementById("searchInput");
let searchDebounce = null;
searchInput.addEventListener("input", ()=>{
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(()=>{
    const q = searchInput.value.trim();
    if(q === ""){
      currentCat ? goToCategory(currentCat) : renderWelcome();
    } else {
      renderSearchResults(q);
    }
  }, 150);
});

/* =========================================================
   BACK TO TOP
========================================================= */
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", ()=>{
  topBtn.classList.toggle("show", window.scrollY > 500);
});
topBtn.addEventListener("click", ()=> window.scrollTo({top:0, behavior:"smooth"}));

/* =========================================================
   PRINT ALL WORDS
========================================================= */
const printAllBtn = document.getElementById("printAllBtn");
printAllBtn.addEventListener("click", () => {
  const previousCat = currentCat;
  const previousSearch = searchInput.value;

  let html = `
    <div class="section-head">
      <div class="titles">
        <span class="big-kana">全</span>
        <span class="row-samples">All N4 Vocabulary<span class="count-badge">${VOCAB.length} words total</span></span>
      </div>
    </div>
    <div class="print-title">JLPT N4 Vocabulary — All Words (${VOCAB.length} words)</div>
  `;

  html += tableHTML(VOCAB, true);

  contentArea.innerHTML = html;

  setTimeout(() => {
    window.print();
    if (previousSearch) {
      searchInput.value = previousSearch;
      renderSearchResults(previousSearch);
    } else if (previousCat) {
      goToCategory(previousCat);
    } else {
      renderWelcome();
    }
  }, 150);
});