import { s } from "./build";

export const A2 = [
  s("a2-daily-1", "A2", "daily", "昨天我忘了带钥匙。", "I forgot to bring my keys yesterday.", {
    structure: "主语 + 过去式 + to do + 时间",
    grammar: ["一般过去时", "forget to do 表示忘记去做"],
    vocab: [{ word: "forget", meaning: "忘记" }, { word: "keys", meaning: "钥匙" }],
    tips: "forget to do = 忘了做；forget doing = 做过但忘了。这里是没带钥匙。",
  }, [
    ["forget to do", "他忘了关灯。", "He forgot to turn off the light.", "forgot to + 动词"],
    ["昨天过去时", "我昨天很晚回家。", "I went home late yesterday.", "go 的过去式是 went"],
  ]),

  s("a2-daily-2", "A2", "daily", "周末我们通常待在家里。", "We usually stay at home on weekends.", {
    structure: "主语 + 频率副词 + 动词 + 时间",
    grammar: ["usually 放在实义动词前", "on weekends"],
    vocab: [{ word: "usually", meaning: "通常" }, { word: "weekend", meaning: "周末" }],
    tips: "周末用 on weekends 或 at the weekend（英式）。",
  }, [
    ["频率副词", "她很少吃快餐。", "She rarely eats fast food.", "副词放在动词前，第三人称 eats"],
    ["on weekends", "我周末去看我的父母。", "I visit my parents on weekends.", "on weekends"],
  ], ["We usually stay at home at the weekend."]),

  s("a2-daily-3", "A2", "daily", "我起床后先浇花。", "I water the plants after I get up.", {
    structure: "主句 + after + 时间从句",
    grammar: ["after 引导时间从句", "两个动作都用一般现在时表示习惯"],
    vocab: [{ word: "water", meaning: "浇水" }, { word: "plants", meaning: "植物" }],
    tips: "after I get up 是从句，get 要按主语变位，不能写成 after I getting up。",
  }, [
    ["after 从句", "她吃完早饭后去上班。", "She goes to work after she has breakfast.", "从句用一般现在时"],
    ["习惯顺序", "我先刷牙，然后吃早饭。", "I brush my teeth first and then have breakfast.", "first ... then"],
  ]),

  s("a2-daily-4", "A2", "daily", "这周我比上周更忙。", "I am busier this week than last week.", {
    structure: "比较级 + than",
    grammar: ["busy → busier", "this week / last week"],
    vocab: [{ word: "busy", meaning: "忙的" }, { word: "than", meaning: "比" }],
    tips: "双音节 y 结尾形容词变 i 再加 -er：busy → busier。",
  }, [
    ["比较级", "今天比昨天冷。", "Today is colder than yesterday.", "cold → colder"],
    ["this week", "这周我有三次会议。", "I have three meetings this week.", "this week 前不加 in"],
  ], ["I'm busier this week than last week."]),

  s("a2-travel-1", "A2", "travel", "请问去机场怎么走？", "Excuse me, how do I get to the airport?", {
    structure: "How do I get to + 地点",
    grammar: ["how 问路", "get to 表示到达"],
    vocab: [{ word: "get to", meaning: "到达" }, { word: "airport", meaning: "机场" }],
    tips: "How do I get to ... 比 Where is ... 更适合问路线。",
  }, [
    ["How do I get to", "去地铁站怎么走？", "How do I get to the subway station?", "get to + 地点"],
    ["礼貌开头", "打扰一下，附近有银行吗？", "Excuse me, is there a bank nearby?", "is there 问有没有"],
  ], ["Excuse me, how can I get to the airport?"]),

  s("a2-travel-2", "A2", "travel", "我的航班延误了两个小时。", "My flight was delayed for two hours.", {
    structure: "主语 + be delayed + for + 时长",
    grammar: ["被动语态 be delayed", "for + 一段时间"],
    vocab: [{ word: "flight", meaning: "航班" }, { word: "delay", meaning: "延误" }],
    tips: "延误常用 be delayed。for two hours 强调持续多久。",
  }, [
    ["be delayed", "火车延误了半小时。", "The train was delayed for half an hour.", "was delayed for"],
    ["for + 时长", "我们等了二十分钟。", "We waited for twenty minutes.", "for + 时间段"],
  ]),

  s("a2-travel-3", "A2", "travel", "我可以把行李放在这里吗？", "Can I leave my luggage here?", {
    structure: "Can I + 动词 + 宾语 + 地点",
    grammar: ["Can I 请求许可", "leave 表示留下"],
    vocab: [{ word: "luggage", meaning: "行李（不可数）" }, { word: "leave", meaning: "留下、放置" }],
    tips: "luggage 不可数，不要说 luggages；美式也常用 bags。",
  }, [
    ["Can I", "我可以坐这里吗？", "Can I sit here?", "Can I + 动词"],
    ["luggage", "我的行李很重。", "My luggage is heavy.", "luggage 用 is，不用 are"],
  ], ["Can I leave my bags here?"]),

  s("a2-travel-4", "A2", "travel", "我们明天一早就出发。", "We will leave early tomorrow morning.", {
    structure: "will + 动词 + 时间状语",
    grammar: ["will 表示将来计划", "early tomorrow morning"],
    vocab: [{ word: "leave", meaning: "出发、离开" }, { word: "early", meaning: "早" }],
    tips: "“明天一早”不要写成 tomorrow early morning，常用 early tomorrow morning。",
  }, [
    ["will", "她下周去东京。", "She will go to Tokyo next week.", "will + 动词原形"],
    ["时间顺序", "我们今晚打包行李。", "We will pack our bags tonight.", "tonight 前不加 in"],
  ], ["We're leaving early tomorrow morning."]),

  s("a2-work-1", "A2", "work", "你能帮我打印这份文件吗？", "Could you help me print this document?", {
    structure: "Could you help me + 动词原形",
    grammar: ["Could you 比 Can you 更礼貌", "help sb do"],
    vocab: [{ word: "print", meaning: "打印" }, { word: "document", meaning: "文件" }],
    tips: "help me print，print 用原形，不加 to 也可以；help me to print 也对。",
  }, [
    ["Could you", "你能把窗关上吗？", "Could you close the window?", "Could you + 动词"],
    ["help me do", "请帮我发这封邮件。", "Please help me send this email.", "help me + 原形"],
  ], ["Could you help me to print this document?"]),

  s("a2-work-2", "A2", "work", "我下周要交这份报告。", "I need to submit this report next week.", {
    structure: "need to + 动词 + 时间",
    grammar: ["need to 表示必须完成", "next week 前不加 in"],
    vocab: [{ word: "submit", meaning: "提交" }, { word: "report", meaning: "报告" }],
    tips: "交作业/报告常用 submit 或 hand in，比 give 更准确。",
  }, [
    ["need to", "我们今天必须完成它。", "We need to finish it today.", "need to + 原形"],
    ["hand in", "请下周一交报告。", "Please hand in the report next Monday.", "hand in = 上交"],
  ], ["I have to submit this report next week."]),

  s("a2-work-3", "A2", "work", "会议改到下午三点了。", "The meeting has been moved to three in the afternoon.", {
    structure: "主语 + has been + 过去分词 + to + 时间",
    grammar: ["现在完成时的被动", "moved to 表示改到"],
    vocab: [{ word: "move", meaning: "改期、移动" }],
    tips: "改时间常用 be moved to / be rescheduled to。",
  }, [
    ["改期", "面试改到周五了。", "The interview has been moved to Friday.", "has been moved to"],
    ["in the afternoon", "我们下午见面吧。", "Let's meet in the afternoon.", "下午用 in"],
  ], ["The meeting was moved to three in the afternoon."]),

  s("a2-work-4", "A2", "work", "我会在下班前发给你。", "I will send it to you before I leave work.", {
    structure: "will + 动词 + before + 从句",
    grammar: ["before 引导时间从句", "leave work 下班"],
    vocab: [{ word: "send", meaning: "发送" }, { word: "leave work", meaning: "下班" }],
    tips: "发给你：send it to you，to 不能省。",
  }, [
    ["send ... to", "请把文件发给我。", "Please send the file to me.", "send sth to sb"],
    ["before 从句", "我出门前会给你打电话。", "I will call you before I leave.", "before + 主语 + 动词"],
  ], ["I'll send it to you before I leave work."]),

  s("a2-study-1", "A2", "study", "这道题我不太明白。", "I don't quite understand this question.", {
    structure: "don't quite + 动词 + 宾语",
    grammar: ["quite 缓和否定", "understand 一般不用于进行时"],
    vocab: [{ word: "understand", meaning: "理解" }, { word: "question", meaning: "题目、问题" }],
    tips: "don't quite understand 比 I don't understand 更委婉，适合课堂。",
  }, [
    ["quite", "我还不太确定。", "I am not quite sure yet.", "not quite 表示还没完全"],
    ["提问", "你能解释一下吗？", "Could you explain it, please?", "explain 后面常接 it / this"],
  ], ["I don't really understand this question."]),

  s("a2-study-2", "A2", "study", "老师让我们明天交作业。", "The teacher asked us to hand in our homework tomorrow.", {
    structure: "ask sb to do",
    grammar: ["ask + 人 + to + 动词", "hand in 上交"],
    vocab: [{ word: "hand in", meaning: "上交" }, { word: "homework", meaning: "作业（不可数）" }],
    tips: "homework 不可数，不能说 homeworks。",
  }, [
    ["ask sb to do", "她让我再读一遍。", "She asked me to read it again.", "asked me to"],
    ["homework", "我还没做完作业。", "I haven't finished my homework yet.", "homework 用单数概念"],
  ], ["The teacher told us to hand in our homework tomorrow."]),

  s("a2-study-3", "A2", "study", "我用词典查了这个词。", "I looked up this word in the dictionary.", {
    structure: "look up + 宾语 + in + 工具",
    grammar: ["look up 是动词短语，宾语可放中间", "in the dictionary"],
    vocab: [{ word: "look up", meaning: "查阅" }, { word: "dictionary", meaning: "词典" }],
    tips: "查词是 look up，不是 look for（寻找物品）。",
  }, [
    ["look up", "请把这个句子查一下。", "Please look up this sentence.", "look up + 查询对象"],
    ["look for", "我在找我的笔。", "I am looking for my pen.", "look for = 寻找"],
  ]),

  s("a2-study-4", "A2", "study", "如果你再读一遍，就会更清楚。", "If you read it again, it will be clearer.", {
    structure: "If + 现在时, will + 原形",
    grammar: ["第一条件句", "clear → clearer"],
    vocab: [{ word: "clear", meaning: "清楚的" }, { word: "again", meaning: "再一次" }],
    tips: "真实可能发生的条件：if 从句用现在时，主句用 will。",
  }, [
    ["第一条件句", "如果下雨，我们就待在家里。", "If it rains, we will stay at home.", "if 从句不用 will"],
    ["比较级", "这个解释更简单。", "This explanation is simpler.", "simple → simpler"],
  ]),

  s("a2-social-1", "A2", "social", "你周末有空一起吃饭吗？", "Are you free to have dinner together this weekend?", {
    structure: "Are you free to + 动词",
    grammar: ["邀请用 be free to", "this weekend"],
    vocab: [{ word: "free", meaning: "有空的" }, { word: "together", meaning: "一起" }],
    tips: "邀请前先问是不是有空，比直接说 Let's 更礼貌。",
  }, [
    ["be free", "你今晚有空吗？", "Are you free tonight?", "Are you free + 时间"],
    ["邀请", "我们一起喝咖啡吧。", "Let's have coffee together.", "Let's + 动词原形"],
  ], ["Are you free for dinner this weekend?"]),

  s("a2-social-2", "A2", "social", "谢谢你昨天帮我。", "Thank you for helping me yesterday.", {
    structure: "Thank you for + 动词-ing",
    grammar: ["thank sb for doing", "yesterday 与过去动作"],
    vocab: [{ word: "thank you for", meaning: "因……感谢" }],
    tips: "for 后面用 doing，不接 to do。",
  }, [
    ["thank you for", "谢谢你来送我。", "Thank you for coming to see me off.", "for + doing"],
    ["回应感谢", "不客气。", "You're welcome.", "最常用的回应"],
  ], ["Thanks for helping me yesterday."]),

  s("a2-social-3", "A2", "social", "抱歉我来晚了。", "Sorry I am late.", {
    structure: "Sorry + 句子",
    grammar: ["迟到用 be late", "sorry 可直接接从句"],
    vocab: [{ word: "late", meaning: "迟到的" }, { word: "sorry", meaning: "抱歉" }],
    tips: "I'm late 表示人迟到；The bus is late 表示车晚到。",
  }, [
    ["be late", "她开会迟到了。", "She was late for the meeting.", "be late for + 活动"],
    ["道歉", "对不起，让你久等了。", "Sorry for keeping you waiting.", "sorry for + doing"],
  ], ["Sorry I'm late.", "I'm sorry I'm late."]),

  s("a2-social-4", "A2", "social", "我回头给你发消息。", "I will text you later.", {
    structure: "will + 动词 + 时间",
    grammar: ["text 可作动词：发短信/消息", "later 稍后"],
    vocab: [{ word: "text", meaning: "发消息" }, { word: "later", meaning: "稍后" }],
    tips: "text you 很口语；也可以说 send you a message。",
  }, [
    ["text", "她刚刚给我发了消息。", "She texted me just now.", "text 的过去式 texted"],
    ["later", "我们稍后再谈。", "Let's talk later.", "later 单独作时间状语"],
  ], ["I'll text you later.", "I will send you a message later."]),

  s("a2-shopping-1", "A2", "shopping", "有没有小一号的？", "Do you have a smaller size?", {
    structure: "Do you have + 比较级 + 名词",
    grammar: ["small → smaller", "试衣常用 size"],
    vocab: [{ word: "size", meaning: "尺码" }, { word: "smaller", meaning: "更小的" }],
    tips: "问尺码用 a smaller / larger size，比 a small one 更清楚。",
  }, [
    ["比较级尺码", "有没有大一号的？", "Do you have a larger size?", "large → larger"],
    ["试穿", "我可以试穿吗？", "Can I try it on?", "try on 是动词短语"],
  ]),

  s("a2-shopping-2", "A2", "shopping", "太贵了，能便宜一点吗？", "It's too expensive. Can it be a bit cheaper?", {
    structure: "too + 形容词 / Can it be + 比较级",
    grammar: ["砍价常用 cheaper", "a bit 缓和语气"],
    vocab: [{ word: "cheaper", meaning: "更便宜" }, { word: "a bit", meaning: "一点" }],
    tips: "a bit cheaper 比 Make it cheap 礼貌得多。",
  }, [
    ["砍价", "能少一点吗？", "Can you give me a discount?", "give sb a discount"],
    ["a bit", "这件稍微长了一点。", "This one is a bit long.", "a bit + 形容词"],
  ], ["It is too expensive. Can it be a little cheaper?"]),

  s("a2-shopping-3", "A2", "shopping", "我可以退货吗？", "Can I return this?", {
    structure: "Can I + 动词 + 宾语",
    grammar: ["return 表示退货", "请求许可"],
    vocab: [{ word: "return", meaning: "退货、归还" }],
    tips: "退货用 return，换货常用 exchange。",
  }, [
    ["return", "我想退这件外套。", "I want to return this coat.", "return + 物品"],
    ["exchange", "我想换一个颜色。", "I want to exchange it for another color.", "exchange A for B"],
  ], ["Can I return it?"]),

  s("a2-shopping-4", "A2", "shopping", "请给我袋子，谢谢。", "Please give me a bag, thank you.", {
    structure: "Please + 请求, thank you",
    grammar: ["结账常用短句", "a bag 可数"],
    vocab: [{ word: "bag", meaning: "袋子" }],
    tips: "也可以说 Could I have a bag, please?",
  }, [
    ["结账", "我要付款。", "I would like to pay.", "pay 表示付款"],
    ["Could I have", "能给我收据吗？", "Could I have a receipt, please?", "receipt 收据"],
  ], ["Could I have a bag, please?"]),

  s("a2-dining-1", "A2", "dining", "我想点一份不加辣的面条。", "I would like a bowl of noodles without chili.", {
    structure: "would like + 食物 + without + 配料",
    grammar: ["without 表示不要某物", "a bowl of 一碗"],
    vocab: [{ word: "noodles", meaning: "面条" }, { word: "chili", meaning: "辣椒" }],
    tips: "“不要辣”用 without chili / not spicy，比 no spicy 更自然。",
  }, [
    ["without", "我要一个不加班的汉堡。", "I would like a burger without onions.", "without + 配料"],
    ["not spicy", "请不要放辣。", "Please do not make it spicy.", "make it + 形容词"],
  ], ["I'd like a bowl of noodles without chili."]),

  s("a2-dining-2", "A2", "dining", "请给我菜单好吗？", "Could you give me the menu, please?", {
    structure: "Could you + 动词, please",
    grammar: ["Could you 礼貌请求", "please 可放句尾"],
    vocab: [{ word: "menu", meaning: "菜单" }],
    tips: "餐厅里 Could you ... please? 比 Give me 更合适。",
  }, [
    ["Could you", "能给我们两杯水吗？", "Could you give us two glasses of water?", "two glasses of"],
    ["点餐", "我可以点菜了吗？", "Can I order now?", "order 点餐"],
  ], ["Could I have the menu, please?"]),

  s("a2-dining-3", "A2", "dining", "我点的菜还没上。", "The dish I ordered hasn't arrived yet.", {
    structure: "名词 + 定语从句 + 现在完成时",
    grammar: ["I ordered 修饰 dish", "hasn't ... yet"],
    vocab: [{ word: "order", meaning: "点餐" }, { word: "arrive", meaning: "到达、上来" }],
    tips: "yet 用于否定/疑问，表示“还没”。",
  }, [
    ["yet", "我还没决定。", "I haven't decided yet.", "haven't + 过去分词 + yet"],
    ["定语从句", "我昨天买的书很好。", "The book I bought yesterday is good.", "省略了 that"],
  ], ["The food I ordered hasn't come yet."]),

  s("a2-dining-4", "A2", "dining", "我们分开付可以吗？", "Can we pay separately?", {
    structure: "Can we + 动词 + 副词",
    grammar: ["pay separately 分单", "Can we 征求许可"],
    vocab: [{ word: "separately", meaning: "分开地" }, { word: "pay", meaning: "付款" }],
    tips: "AA 制最直接就是 pay separately / split the bill。",
  }, [
    ["split the bill", "我们把账单分开吧。", "Let's split the bill.", "split the bill"],
    ["付钱", "我来付。", "It's on me.", "It's on me 表示我请客"],
  ], ["Can we split the bill?"]),

  s("a2-health-1", "A2", "health", "我喉咙痛，而且有点发烧。", "I have a sore throat and a slight fever.", {
    structure: "have a + 症状 and a + 症状",
    grammar: ["sore throat 固定搭配", "slight 表示轻微"],
    vocab: [{ word: "sore throat", meaning: "喉咙痛" }, { word: "fever", meaning: "发烧" }],
    tips: "喉咙痛是 a sore throat，不是 my throat is painful（能懂但不地道）。",
  }, [
    ["sore throat", "她嗓子疼，说不了话。", "She has a sore throat and cannot talk.", "has a sore throat"],
    ["fever", "你发烧了吗？", "Do you have a fever?", "have a fever"],
  ]),

  s("a2-health-2", "A2", "health", "你应该多喝水。", "You should drink more water.", {
    structure: "should + 动词原形",
    grammar: ["should 给建议", "more + 不可数名词"],
    vocab: [{ word: "should", meaning: "应该" }, { word: "more", meaning: "更多" }],
    tips: "给健康建议用 should，比 must 温和。",
  }, [
    ["should", "你应该早点睡觉。", "You should go to bed earlier.", "should + 原形"],
    ["more", "我需要更多休息。", "I need more rest.", "more + 不可数"],
  ]),

  s("a2-health-3", "A2", "health", "我预约了明天下午的医生。", "I made an appointment with the doctor for tomorrow afternoon.", {
    structure: "make an appointment with sb for + 时间",
    grammar: ["make an appointment 固定搭配", "for + 预约时间"],
    vocab: [{ word: "appointment", meaning: "预约" }],
    tips: "看医生预约用 appointment，不是 meeting。",
  }, [
    ["appointment", "我想预约牙医。", "I would like to make an appointment with the dentist.", "make an appointment with"],
    ["for + 时间", "我们约在周五。", "We made an appointment for Friday.", "for Friday"],
  ]),

  s("a2-health-4", "A2", "health", "吃完药后我好一些了。", "I felt better after I took the medicine.", {
    structure: "过去时 + after + 过去时",
    grammar: ["两个过去动作的先后", "feel better 好转"],
    vocab: [{ word: "medicine", meaning: "药" }, { word: "feel better", meaning: "感觉好些" }],
    tips: "吃药是 take medicine，不是 eat medicine。",
  }, [
    ["take medicine", "你按时吃药了吗？", "Did you take your medicine on time?", "take medicine"],
    ["feel better", "休息之后她好多了。", "She felt better after she rested.", "felt 是 feel 的过去式"],
  ]),
];
