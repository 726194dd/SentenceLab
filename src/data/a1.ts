import { s } from "./build";

export const A1 = [
  s("a1-daily-1", "A1", "daily", "我每天早上七点起床。", "I get up at seven every morning.", {
    structure: "主语 + 习惯动词 + 时间状语",
    grammar: ["一般现在时表示习惯", "at + 具体时刻"],
    vocab: [{ word: "get up", meaning: "起床" }, { word: "every morning", meaning: "每天早上" }],
    tips: "“七点”常用 at seven，也可以说 at seven o'clock。习惯动作用一般现在时。",
  }, [
    ["一般现在时", "她每天晚上十点睡觉。", "She goes to bed at ten every night.", "第三人称单数动词要加 -s"],
    ["at + 时刻", "我们下午三点见面。", "We meet at three in the afternoon.", "具体钟点用 at，下午用 in the afternoon"],
  ], ["I get up at seven o'clock every morning."]),

  s("a1-daily-2", "A1", "daily", "她喜欢在家喝茶。", "She likes drinking tea at home.", {
    structure: "主语 + like + 动词-ing + 地点",
    grammar: ["like doing 表示爱好", "at home 表示在家"],
    vocab: [{ word: "like", meaning: "喜欢" }, { word: "at home", meaning: "在家" }],
    tips: "like 后面常接 doing。也可以说 She likes to drink tea at home.",
  }, [
    ["like doing", "他喜欢在公园跑步。", "He likes running in the park.", "like + 动词-ing"],
    ["at home", "我晚上在家吃饭。", "I eat dinner at home in the evening.", "在家用 at home，不加 the"],
  ], ["She likes to drink tea at home."]),

  s("a1-daily-3", "A1", "daily", "我们晚饭后看电视。", "We watch TV after dinner.", {
    structure: "主语 + 动词 + 宾语 + 时间",
    grammar: ["一般现在时", "after + 名词"],
    vocab: [{ word: "watch TV", meaning: "看电视" }, { word: "after dinner", meaning: "晚饭后" }],
    tips: "watch TV 是固定搭配，TV 前通常不加 the。",
  }, [
    ["after + 名词", "我早饭后刷牙。", "I brush my teeth after breakfast.", "after 后面直接加三餐名词"],
    ["watch TV", "孩子们晚上看电视。", "The children watch TV in the evening.", "watch 与 TV 搭配"],
  ]),

  s("a1-daily-4", "A1", "daily", "我的猫在沙发上睡觉。", "My cat is sleeping on the sofa.", {
    structure: "主语 + be + 动词-ing + 地点",
    grammar: ["现在进行时描述正在发生", "on + 表面"],
    vocab: [{ word: "sleep", meaning: "睡觉" }, { word: "sofa", meaning: "沙发" }],
    tips: "正在发生的动作用 is/are + doing。沙发表面用 on。",
  }, [
    ["现在进行时", "他正在厨房做饭。", "He is cooking in the kitchen.", "is/are + 动词-ing"],
    ["on + 表面", "书在桌子上。", "The book is on the table.", "在平面上用 on"],
  ], ["My cat is sleeping on the couch."]),

  s("a1-travel-1", "A1", "travel", "我要去火车站。", "I want to go to the train station.", {
    structure: "主语 + want to + 动词 + 地点",
    grammar: ["want to do", "go to + 地点"],
    vocab: [{ word: "train station", meaning: "火车站" }, { word: "want to", meaning: "想要" }],
    tips: "“去某地”是 go to。station 前通常加 the。",
  }, [
    ["want to do", "她想去公园。", "She wants to go to the park.", "第三人称 wants"],
    ["go to", "我们去机场。", "We go to the airport.", "go to + 地点"],
  ], ["I want to go to the railway station."]),

  s("a1-travel-2", "A1", "travel", "这是我的护照。", "This is my passport.", {
    structure: "This is + 名词",
    grammar: ["this is 用来介绍眼前的东西", "形容词性物主代词 my"],
    vocab: [{ word: "passport", meaning: "护照" }],
    tips: "出示证件时，This is my ... 最直接。",
  }, [
    ["This is", "这是我的车票。", "This is my ticket.", "This is + my + 名词"],
    ["物主代词", "那是她的包。", "That is her bag.", "that 指稍远的东西"],
  ]),

  s("a1-travel-3", "A1", "travel", "请问，厕所在哪里？", "Excuse me, where is the restroom?", {
    structure: "Excuse me + 特殊疑问句",
    grammar: ["where is 问路", "Excuse me 用于开口询问"],
    vocab: [{ word: "excuse me", meaning: "打扰一下" }, { word: "restroom", meaning: "洗手间" }],
    tips: "restroom / toilet / bathroom 都可以，旅行场景里 restroom 很常用。",
  }, [
    ["where is", "车站在哪里？", "Where is the station?", "where is + 地点"],
    ["Excuse me", "打扰一下，这是去机场的路吗？", "Excuse me, is this the way to the airport?", "先说 Excuse me 再提问"],
  ], ["Excuse me, where is the toilet?"]),

  s("a1-travel-4", "A1", "travel", "我想要一张去北京的票。", "I would like a ticket to Beijing.", {
    structure: "I would like + 名词 + to + 地点",
    grammar: ["would like 比 want 更礼貌", "to + 目的地"],
    vocab: [{ word: "ticket", meaning: "票" }, { word: "would like", meaning: "想要（礼貌）" }],
    tips: "窗口买票时，I would like ... 比 I want ... 更得体。",
  }, [
    ["would like", "我想要一杯咖啡。", "I would like a cup of coffee.", "would like + 名词"],
    ["ticket to", "他要一张去上海的票。", "He would like a ticket to Shanghai.", "去某地的票：a ticket to"],
  ], ["I'd like a ticket to Beijing."]),

  s("a1-work-1", "A1", "work", "我在一家公司上班。", "I work at a company.", {
    structure: "主语 + work at + 地点",
    grammar: ["一般现在时说职业", "at 用于工作地点"],
    vocab: [{ word: "work", meaning: "工作" }, { word: "company", meaning: "公司" }],
    tips: "work at a company 很常用；也可以说 I work for a company。",
  }, [
    ["work at", "她在医院工作。", "She works at a hospital.", "第三人称 works"],
    ["职业表达", "他是老师。", "He is a teacher.", "职业前用 a/an"],
  ], ["I work for a company."]),

  s("a1-work-2", "A1", "work", "会议在上午十点开始。", "The meeting starts at ten in the morning.", {
    structure: "主语 + 动词 + 时间",
    grammar: ["一般现在时表示安排", "in the morning"],
    vocab: [{ word: "meeting", meaning: "会议" }, { word: "start", meaning: "开始" }],
    tips: "时刻用 at，上午用 in the morning。",
  }, [
    ["at + 时刻", "课在九点开始。", "The class starts at nine.", "具体钟点用 at"],
    ["in the morning", "我上午有会。", "I have a meeting in the morning.", "一天中的时段用 in"],
  ], ["The meeting starts at 10 in the morning.", "The meeting starts at ten a.m."]),

  s("a1-work-3", "A1", "work", "这是我的电脑。", "This is my computer.", {
    structure: "This is + 物主代词 + 名词",
    grammar: ["指示代词 this", "my 表示所属"],
    vocab: [{ word: "computer", meaning: "电脑" }],
    tips: "指着眼前物品介绍时用 This is。",
  }, [
    ["This is", "这是我的工牌。", "This is my work badge.", "This is my + 物品"],
    ["所属", "那是他的桌子。", "That is his desk.", "his / her / my"],
  ]),

  s("a1-work-4", "A1", "work", "请坐。", "Please sit down.", {
    structure: "Please + 动词原形",
    grammar: ["祈使句表示请求或邀请", "please 让语气更礼貌"],
    vocab: [{ word: "sit down", meaning: "坐下" }],
    tips: "办公室里请人入座，Please sit down. 就够用。",
  }, [
    ["祈使句", "请开门。", "Please open the door.", "Please + 动词原形"],
    ["礼貌请求", "请等一下。", "Please wait a moment.", "wait a moment 表示稍等"],
  ], ["Please have a seat."]),

  s("a1-study-1", "A1", "study", "我是一名学生。", "I am a student.", {
    structure: "主语 + be + 职业/身份",
    grammar: ["am/is/are", "职业前用 a/an"],
    vocab: [{ word: "student", meaning: "学生" }],
    tips: "说身份时用 I am a ...，不要漏掉 a。",
  }, [
    ["a + 身份", "她是一名老师。", "She is a teacher.", "is + a + 职业"],
    ["be 动词", "他们是学生。", "They are students.", "复数用 are，名词也变复数"],
  ], ["I'm a student."]),

  s("a1-study-2", "A1", "study", "请打开你的书。", "Please open your book.", {
    structure: "Please + 动词 + 宾语",
    grammar: ["课堂祈使句", "your 对应“你的”"],
    vocab: [{ word: "open", meaning: "打开" }, { word: "book", meaning: "书" }],
    tips: "老师指令常用 Please + 动词原形。",
  }, [
    ["祈使句", "请看黑板。", "Please look at the blackboard.", "look at + 对象"],
    ["your", "请关上你的电脑。", "Please close your computer.", "your + 物品"],
  ], ["Please open your books."]),

  s("a1-study-3", "A1", "study", "这个单词是什么意思？", "What does this word mean?", {
    structure: "What does + 主语 + mean",
    grammar: ["does 用于一般现在时提问", "mean 用原形"],
    vocab: [{ word: "word", meaning: "单词" }, { word: "mean", meaning: "意思是" }],
    tips: "问意思不要说 What is this word meaning，用 What does ... mean?",
  }, [
    ["What does ... mean", "这个句子是什么意思？", "What does this sentence mean?", "does 后动词用原形"],
    ["课堂提问", "你能再说一遍吗？", "Can you say that again?", "请人重复"],
  ]),

  s("a1-study-4", "A1", "study", "我今天有英语课。", "I have an English class today.", {
    structure: "主语 + have + 课程 + 时间",
    grammar: ["have 表示“有课”", "English 前用 an"],
    vocab: [{ word: "class", meaning: "课" }, { word: "today", meaning: "今天" }],
    tips: "“有课”用 have a class，不是 there is a class to me。",
  }, [
    ["have a class", "她明天有数学课。", "She has a math class tomorrow.", "第三人称 has"],
    ["an + 元音", "我有一个苹果。", "I have an apple.", "元音开头用 an"],
  ], ["I have English class today."]),

  s("a1-social-1", "A1", "social", "很高兴认识你。", "Nice to meet you.", {
    structure: "形容词 + to do",
    grammar: ["初次见面寒暄", "to meet you 作补足"],
    vocab: [{ word: "nice", meaning: "高兴的、好的" }, { word: "meet", meaning: "遇见、认识" }],
    tips: "第一次见面用 Nice to meet you；再见时用 Nice to see you。",
  }, [
    ["初次见面", "我是安娜。", "I am Anna.", "自我介绍用 I am"],
    ["回应", "我也很高兴认识你。", "Nice to meet you too.", "too 放句尾"],
  ], ["It's nice to meet you."]),

  s("a1-social-2", "A1", "social", "这是我的朋友。", "This is my friend.", {
    structure: "This is + 介绍对象",
    grammar: ["介绍他人用 This is", "my 表示所属"],
    vocab: [{ word: "friend", meaning: "朋友" }],
    tips: "把朋友介绍给别人时，用 This is ...，不要用 He is my friend 开场。",
  }, [
    ["介绍他人", "这是我的姐姐。", "This is my sister.", "This is my + 身份"],
    ["朋友复数", "他们是我的朋友。", "They are my friends.", "复数 friends"],
  ]),

  s("a1-social-3", "A1", "social", "你叫什么名字？", "What is your name?", {
    structure: "What is + 物主代词 + 名词",
    grammar: ["特殊疑问句", "your 对应“你的”"],
    vocab: [{ word: "name", meaning: "名字" }],
    tips: "最基础的相识问句。回答：My name is ...",
  }, [
    ["回答姓名", "我叫汤姆。", "My name is Tom.", "My name is + 名字"],
    ["his name", "他叫什么名字？", "What is his name?", "换成 his / her"],
  ], ["What's your name?"]),

  s("a1-social-4", "A1", "social", "明天见。", "See you tomorrow.", {
    structure: "See you + 时间",
    grammar: ["告别用语", "tomorrow 前不加 on"],
    vocab: [{ word: "see you", meaning: "再见" }, { word: "tomorrow", meaning: "明天" }],
    tips: "See you tomorrow. 比 See you on tomorrow 正确。",
  }, [
    ["See you", "回头见。", "See you later.", "later 表示晚些时候"],
    ["时间告别", "周五见。", "See you on Friday.", "星期前用 on"],
  ]),

  s("a1-shopping-1", "A1", "shopping", "这个多少钱？", "How much is this?", {
    structure: "How much is + 物品",
    grammar: ["how much 问价格", "不可数/单件都可用"],
    vocab: [{ word: "how much", meaning: "多少钱" }],
    tips: "问一件东西的价格用 How much is ...；复数用 How much are ...",
  }, [
    ["How much", "那件外套多少钱？", "How much is that coat?", "is + 单数物品"],
    ["复数价格", "这些多少钱？", "How much are these?", "are + 复数"],
  ]),

  s("a1-shopping-2", "A1", "shopping", "我要买一件衬衫。", "I want to buy a shirt.", {
    structure: "want to + 动词 + 宾语",
    grammar: ["want to do", "a + 单数可数名词"],
    vocab: [{ word: "buy", meaning: "买" }, { word: "shirt", meaning: "衬衫" }],
    tips: "shirt 是可数名词，单数前要有 a。",
  }, [
    ["want to buy", "她想买一本书。", "She wants to buy a book.", "wants to"],
    ["a + 名词", "我想买一个包。", "I want to buy a bag.", "单数可数名词加 a"],
  ], ["I would like to buy a shirt."]),

  s("a1-shopping-3", "A1", "shopping", "太贵了。", "It is too expensive.", {
    structure: "主语 + be + too + 形容词",
    grammar: ["too 表示“太”", "expensive 形容价格高"],
    vocab: [{ word: "expensive", meaning: "贵的" }, { word: "too", meaning: "太" }],
    tips: "too expensive 比 very expensive 更强调“超出接受范围”。",
  }, [
    ["too + 形容词", "这双鞋太小了。", "These shoes are too small.", "too 放在形容词前"],
    ["便宜", "这个很便宜。", "This is very cheap.", "cheap 是 expensive 的反义"],
  ], ["It's too expensive."]),

  s("a1-shopping-4", "A1", "shopping", "我只是看看。", "I am just looking.", {
    structure: "be + just + 动词-ing",
    grammar: ["现在进行时", "just 表示“只是”"],
    vocab: [{ word: "look", meaning: "看" }, { word: "just", meaning: "只是" }],
    tips: "店员问需要帮助时，I'm just looking. 很常用。",
  }, [
    ["just looking", "谢谢，我只是看看。", "Thanks, I am just looking.", "先道谢再说明"],
    ["进行时", "她正在挑一件衣服。", "She is choosing a dress.", "is + choosing"],
  ], ["I'm just looking."]),

  s("a1-dining-1", "A1", "dining", "我想要一杯水。", "I would like a glass of water.", {
    structure: "I would like + 数量词 + of + 不可数名词",
    grammar: ["would like 点餐更礼貌", "a glass of 表示一杯"],
    vocab: [{ word: "a glass of", meaning: "一杯" }, { word: "water", meaning: "水" }],
    tips: "water 不可数，要说 a glass of water，不能 a water（口语里有人说，书面更稳妥用 glass/cup/bottle）。",
  }, [
    ["a cup of", "我想要一杯茶。", "I would like a cup of tea.", "茶常用 a cup of"],
    ["点餐礼貌", "我想要一份沙拉。", "I would like a salad.", "would like + 食物"],
  ], ["I'd like a glass of water."]),

  s("a1-dining-2", "A1", "dining", "这个很好吃。", "This is delicious.", {
    structure: "主语 + be + 形容词",
    grammar: ["评价食物用形容词", "delicious 比 good 更具体"],
    vocab: [{ word: "delicious", meaning: "好吃的、美味的" }],
    tips: "夸菜好吃，This is delicious. 比 This is very good 更地道。",
  }, [
    ["食物评价", "汤有点咸。", "The soup is a little salty.", "a little + 形容词"],
    ["喜欢这道菜", "我喜欢这道菜。", "I like this dish.", "dish 指一道菜"],
  ], ["It's delicious."]),

  s("a1-dining-3", "A1", "dining", "请给我菜单。", "Please give me the menu.", {
    structure: "Please + 动词 + 间接宾语 + 直接宾语",
    grammar: ["give sb sth", "the menu 特指餐厅菜单"],
    vocab: [{ word: "menu", meaning: "菜单" }, { word: "give", meaning: "给" }],
    tips: "也可以说 Could I have the menu, please?",
  }, [
    ["give me", "请给我叉子。", "Please give me a fork.", "give me + 物品"],
    ["更礼貌", "能给我菜单吗？", "Could I have the menu, please?", "Could I have ... please"],
  ], ["Could I have the menu, please?"]),

  s("a1-dining-4", "A1", "dining", "我想要这个，不要那个。", "I want this one, not that one.", {
    structure: "want + this one / not that one",
    grammar: ["this / that 对比", "one 代替刚提到的东西"],
    vocab: [{ word: "this one", meaning: "这个" }, { word: "that one", meaning: "那个" }],
    tips: "指着两样东西选择时，one 用来避免重复名词。",
  }, [
    ["this / that", "我要那个。", "I want that one.", "that one 指较远的"],
    ["not", "我喝茶，不喝咖啡。", "I drink tea, not coffee.", "not 直接否定对比项"],
  ]),

  s("a1-health-1", "A1", "health", "我今天有点不舒服。", "I feel a little sick today.", {
    structure: "主语 + feel + 形容词 + 时间",
    grammar: ["feel + 感觉形容词", "a little 表示程度轻"],
    vocab: [{ word: "sick", meaning: "不舒服、生病的" }, { word: "feel", meaning: "感觉" }],
    tips: "身体不适常用 I feel sick / I don't feel well。",
  }, [
    ["feel + 形容词", "她觉得很累。", "She feels very tired.", "feels + 形容词"],
    ["don't feel well", "我今天不太舒服。", "I do not feel well today.", "feel well 表示身体好"],
  ], ["I don't feel well today.", "I do not feel well today."]),

  s("a1-health-2", "A1", "health", "你需要休息。", "You need to rest.", {
    structure: "need to + 动词原形",
    grammar: ["need to do 表示必要", "rest 作动词"],
    vocab: [{ word: "need", meaning: "需要" }, { word: "rest", meaning: "休息" }],
    tips: "劝人休息用 You need to rest，不是 You need rest 也可以，但 to rest 更完整。",
  }, [
    ["need to", "你需要喝水。", "You need to drink water.", "need to + 动词"],
    ["建议", "你应该睡觉。", "You should sleep.", "should + 动词原形"],
  ], ["You need some rest."]),

  s("a1-health-3", "A1", "health", "我头疼。", "I have a headache.", {
    structure: "have a + 症状名词",
    grammar: ["have a headache / a cold / a fever 是固定说法"],
    vocab: [{ word: "headache", meaning: "头疼" }],
    tips: "说疼痛常用 have a ...ache，不要说 My head is pain。",
  }, [
    ["have a cold", "她感冒了。", "She has a cold.", "has a cold"],
    ["stomachache", "我肚子疼。", "I have a stomachache.", "have a + 症状"],
  ]),

  s("a1-health-4", "A1", "health", "请喝些水。", "Please drink some water.", {
    structure: "Please + 动词 + some + 不可数名词",
    grammar: ["祈使句关心对方", "some 用于建议或提供"],
    vocab: [{ word: "drink", meaning: "喝" }, { word: "some", meaning: "一些" }],
    tips: "劝人喝水时 some 比 any 更自然。",
  }, [
    ["some", "请吃些水果。", "Please eat some fruit.", "提供、建议用 some"],
    ["关心", "你应该躺下。", "You should lie down.", "lie down 表示躺下"],
  ]),
];
