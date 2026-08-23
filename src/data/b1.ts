import { s } from "./build";

export const B1 = [
  s("b1-daily-1", "B1", "daily", "我最近一直在试着早睡早起。", "I have been trying to go to bed early and get up early recently.", {
    structure: "现在完成进行时 + 两个并列动词",
    grammar: ["have been doing 表示持续尝试", "recently 常与完成时连用"],
    vocab: [{ word: "try to", meaning: "试图、努力" }, { word: "recently", meaning: "最近" }],
    tips: "强调从过去持续到现在的习惯调整，用 have been trying 比 I try 更贴切。",
  }, [
    ["现在完成进行时", "她最近一直在学开车。", "She has been learning to drive recently.", "has been + doing"],
    ["并列动作", "我试着少玩手机、多看书。", "I am trying to use my phone less and read more.", "less / more 对比"],
  ]),

  s("b1-daily-2", "B1", "daily", "如果明天不下雨，我们就去公园散步。", "If it doesn't rain tomorrow, we will take a walk in the park.", {
    structure: "If + 一般现在时, will + 动词",
    grammar: ["第一条件句", "take a walk 固定搭配"],
    vocab: [{ word: "take a walk", meaning: "散步" }, { word: "unless", meaning: "除非（对比）" }],
    tips: "if 从句里不要再用 will。doesn't rain 比 will not rain 正确。",
  }, [
    ["第一条件句", "如果我早点出门，就能赶上火车。", "If I leave earlier, I will catch the train.", "if 从句用现在时"],
    ["take a walk", "晚饭后我们去河边散步吧。", "Let's take a walk by the river after dinner.", "take a walk"],
  ], ["If it does not rain tomorrow, we will take a walk in the park."]),

  s("b1-daily-3", "B1", "daily", "我宁愿自己做饭，也不想每天点外卖。", "I would rather cook by myself than order takeout every day.", {
    structure: "would rather do A than do B",
    grammar: ["would rather + 动词原形", "than 后也用原形"],
    vocab: [{ word: "would rather", meaning: "宁愿" }, { word: "takeout", meaning: "外卖" }],
    tips: "would rather cook than order，两边都是原形，不要 than to order。",
  }, [
    ["would rather", "他宁愿走路，也不想坐电梯。", "He would rather walk than take the elevator.", "rather do than do"],
    ["by myself", "我今晚自己待在家里。", "I will stay at home by myself tonight.", "by myself 独自"],
  ], ["I'd rather cook myself than order takeout every day."]),

  s("b1-daily-4", "B1", "daily", "把房间整理完后，我才坐下来休息。", "I didn't sit down to rest until I had finished tidying the room.", {
    structure: "not ... until + 过去完成时",
    grammar: ["until 强调“直到……才”", "had finished 表示先完成的动作"],
    vocab: [{ word: "tidy", meaning: "整理" }, { word: "until", meaning: "直到" }],
    tips: "中文“才”常用 not ... until 来对应，不要直译为 I sat until I finished。",
  }, [
    ["not ... until", "直到他道歉，我才回消息。", "I didn't reply until he apologized.", "didn't ... until"],
    ["过去完成时", "她出门前已经关了窗。", "She had closed the windows before she left.", "had + 过去分词"],
  ]),

  s("b1-travel-1", "B1", "travel", "我提前三天在网上订了酒店。", "I booked the hotel online three days in advance.", {
    structure: "主语 + booked + 宾语 + 方式 + 时间",
    grammar: ["in advance 提前", "book 预订"],
    vocab: [{ word: "book", meaning: "预订" }, { word: "in advance", meaning: "提前" }],
    tips: "预订酒店/机票用 book，比 order 更准确。",
  }, [
    ["in advance", "请提前两小时到达机场。", "Please arrive at the airport two hours in advance.", "时长 + in advance"],
    ["book", "我们还没订到火车票。", "We haven't booked the train tickets yet.", "haven't booked"],
  ], ["I reserved the hotel online three days in advance."]),

  s("b1-travel-2", "B1", "travel", "落地之后我得先兑换一些现金。", "After landing, I need to exchange some cash first.", {
    structure: "After + 动名词, need to + 动词",
    grammar: ["after doing", "exchange 兑换"],
    vocab: [{ word: "land", meaning: "落地" }, { word: "exchange", meaning: "兑换" }],
    tips: "After landing 比 After I land 更紧凑；两者都对。",
  }, [
    ["after doing", "安检之后我们去登机口。", "After going through security, we go to the gate.", "after + doing"],
    ["exchange", "我想把人民币兑成美元。", "I want to exchange RMB for US dollars.", "exchange A for B"],
  ], ["After I land, I need to exchange some cash first."]),

  s("b1-travel-3", "B1", "travel", "要是我早点出发，就不会误了火车。", "If I had left earlier, I wouldn't have missed the train.", {
    structure: "If + 过去完成时, would have + 过去分词",
    grammar: ["第三条件句：对过去的假设", "miss 错过"],
    vocab: [{ word: "miss", meaning: "错过" }, { word: "earlier", meaning: "更早" }],
    tips: "已经发生的遗憾用第三条件句，不要用 If I leave earlier。",
  }, [
    ["第三条件句", "要是我带了伞，就不会淋湿。", "If I had taken an umbrella, I wouldn't have got wet.", "had done / would have done"],
    ["miss", "我们差点误了航班。", "We almost missed the flight.", "almost missed"],
  ], ["If I had left earlier, I would not have missed the train."]),

  s("b1-travel-4", "B1", "travel", "这座城市比我想象的更适合步行。", "This city is more walkable than I expected.", {
    structure: "比较级 + than + 从句",
    grammar: ["more + 多音节形容词", "than I expected"],
    vocab: [{ word: "walkable", meaning: "适合步行的" }, { word: "expect", meaning: "预料" }],
    tips: "than I expected 是很常用的评价句式，expected 用过去式。",
  }, [
    ["than I expected", "这道题比我预想的难。", "This question is harder than I expected.", "harder than I expected"],
    ["more + 形容词", "这里比市中心更安静。", "It is quieter here than in the city center.", "比较双方要说清"],
  ]),

  s("b1-work-1", "B1", "work", "我建议我们先确认客户的需求，再开始设计。", "I suggest we confirm the client's needs before we start the design.", {
    structure: "suggest + 从句 / before + 从句",
    grammar: ["suggest (that) sb do", "before 表示先后"],
    vocab: [{ word: "suggest", meaning: "建议" }, { word: "confirm", meaning: "确认" }],
    tips: "suggest 后常用虚拟：I suggest we confirm，不必 I suggest to confirm。",
  }, [
    ["suggest", "我建议明天再讨论。", "I suggest we discuss it tomorrow.", "suggest we + 原形"],
    ["before", "发送前请再检查一遍。", "Please check it again before you send it.", "before + 从句"],
  ], ["I suggest that we confirm the client's needs before we start the design."]),

  s("b1-work-2", "B1", "work", "这次项目比我预想的更复杂。", "This project is more complicated than I expected.", {
    structure: "more + 形容词 + than 从句",
    grammar: ["complicated 用 more 构成比较级", "评价进展"],
    vocab: [{ word: "complicated", meaning: "复杂的" }, { word: "project", meaning: "项目" }],
    tips: "不要说 more complexer。complicated / complex 都用 more。",
  }, [
    ["more complicated", "这个问题比看上去复杂。", "This problem is more complicated than it looks.", "than it looks"],
    ["项目进展", "我们还没有解决主要问题。", "We haven't solved the main problem yet.", "haven't + 过去分词"],
  ]),

  s("b1-work-3", "B1", "work", "我本来能更早交，但中途需求改了两次。", "I could have submitted it earlier, but the requirements changed twice along the way.", {
    structure: "could have done + but + 过去时",
    grammar: ["could have done 表示本可以但没做到", "along the way 过程中"],
    vocab: [{ word: "requirement", meaning: "需求" }, { word: "submit", meaning: "提交" }],
    tips: "“本来能”不要写成 I can submitted，用 could have + 过去分词。",
  }, [
    ["could have done", "我本来能赶上，但出租车来晚了。", "I could have made it, but the taxi arrived late.", "could have + 过去分词"],
    ["but 转折", "计划很好，但执行不够快。", "The plan was good, but the execution was not fast enough.", "but 连接对比"],
  ]),

  s("b1-work-4", "B1", "work", "如果你方便的话，我们把会议提前半小时。", "If it's convenient for you, let's move the meeting up by half an hour.", {
    structure: "If it's convenient ... let's ...",
    grammar: ["convenient for sb", "move up 提前"],
    vocab: [{ word: "convenient", meaning: "方便的" }, { word: "move up", meaning: "提前" }],
    tips: "提前会议用 move up；推迟用 postpone / push back。",
  }, [
    ["convenient", "你方便明天上午通话吗？", "Would it be convenient for you to talk tomorrow morning?", "convenient for you to do"],
    ["postpone", "我们得把截止日期推迟两天。", "We have to postpone the deadline by two days.", "postpone ... by"],
  ], ["If it is convenient for you, let's move the meeting up by half an hour."]),

  s("b1-study-1", "B1", "study", "与其死记硬背，不如先理解概念。", "Rather than memorizing by rote, it's better to understand the concept first.", {
    structure: "Rather than doing, it's better to do",
    grammar: ["rather than + doing", "by rote 死记硬背"],
    vocab: [{ word: "rather than", meaning: "而不是、与其" }, { word: "concept", meaning: "概念" }],
    tips: "rather than 后面常接 doing，用来对比两种学习方式。",
  }, [
    ["rather than", "与其熬夜，不如早起复习。", "Rather than staying up late, it's better to review in the morning.", "Rather than doing"],
    ["understand", "我先把规则搞懂再做题。", "I understand the rules first and then do the exercises.", "先理解后练习"],
  ], ["Rather than memorizing by rote, it is better to understand the concept first."]),

  s("b1-study-2", "B1", "study", "我花了整个下午复习语法，但还是有几处没搞懂。", "I spent the whole afternoon reviewing grammar, but I still don't understand a few points.", {
    structure: "spend + 时间 + doing, but still ...",
    grammar: ["spend time doing", "still 表示仍然"],
    vocab: [{ word: "review", meaning: "复习" }, { word: "point", meaning: "点、处" }],
    tips: "spend time doing，不是 spend time to do。",
  }, [
    ["spend time doing", "她花了两小时整理笔记。", "She spent two hours organizing her notes.", "spent + 时间 + doing"],
    ["still", "我讲了两遍，他还是没听懂。", "I explained it twice, but he still didn't get it.", "still 放在助动词后或动词前"],
  ]),

  s("b1-study-3", "B1", "study", "这篇文章的大意我懂，但有几个词影响理解。", "I get the main idea of the article, but a few words get in the way of my understanding.", {
    structure: "get the main idea + but + 阻碍表达",
    grammar: ["get 表示理解", "get in the way of 妨碍"],
    vocab: [{ word: "main idea", meaning: "大意" }, { word: "get in the way", meaning: "妨碍" }],
    tips: "阅读理解里 get the main idea 很常用，比 know the meaning 更准确。",
  }, [
    ["main idea", "先别抠细节，抓住大意。", "Don't get stuck on details; focus on the main idea first.", "focus on"],
    ["in the way", "生词妨碍了我的阅读速度。", "New words got in the way of my reading speed.", "get in the way of"],
  ]),

  s("b1-study-4", "B1", "study", "除非你开口说，否则这些句型很难变成你的。", "Unless you start speaking, these sentence patterns will hardly become yours.", {
    structure: "Unless + 现在时, will + 动词",
    grammar: ["unless = if not", "hardly 几乎不"],
    vocab: [{ word: "unless", meaning: "除非" }, { word: "pattern", meaning: "句型" }],
    tips: "unless 从句同样不用 will。become yours 表示内化成自己的表达。",
  }, [
    ["unless", "除非下雨，否则我们步行去。", "Unless it rains, we will walk there.", "Unless + 现在时"],
    ["hardly", "我几乎听不清他在说什么。", "I can hardly hear what he is saying.", "hardly 表几乎不"],
  ]),

  s("b1-social-1", "B1", "social", "我本来想去，但临时有事来不了了。", "I was going to go, but something came up and I can't make it.", {
    structure: "was going to + but + 变故",
    grammar: ["was going to 表示原计划", "come up 突然出现", "make it 赶到/参加成"],
    vocab: [{ word: "come up", meaning: "突然有事" }, { word: "make it", meaning: "赶得上、能参加" }],
    tips: "临时取消常用 something came up / I can't make it，比 I have a thing 自然。",
  }, [
    ["was going to", "我本来打算自己做饭。", "I was going to cook for myself.", "was going to + 原形"],
    ["make it", "抱歉，今晚我去不了了。", "Sorry, I can't make it tonight.", "can't make it"],
  ], ["I was going to go, but something came up and I cannot make it."]),

  s("b1-social-2", "B1", "social", "你说得对，我之前没考虑到这一点。", "You're right. I hadn't considered that before.", {
    structure: "评价 + 过去完成时",
    grammar: ["hadn't done 表示在那之前未发生", "consider 考虑"],
    vocab: [{ word: "consider", meaning: "考虑" }, { word: "point", meaning: "这一点" }],
    tips: "承认对方有理时，You're right 后补一句 I hadn't considered ... 很得体。",
  }, [
    ["hadn't done", "会议开始前我还没看到邮件。", "I hadn't seen the email before the meeting started.", "had + 过去分词"],
    ["consider", "我们得把预算考虑进去。", "We have to take the budget into consideration.", "take ... into consideration"],
  ], ["You are right. I hadn't considered that before."]),

  s("b1-social-3", "B1", "social", "我不是故意迟到的，路上堵得比平时严重。", "I didn't mean to be late; the traffic was worse than usual.", {
    structure: "didn't mean to + 原因句",
    grammar: ["mean to do 表示故意/打算", "worse than usual"],
    vocab: [{ word: "mean to", meaning: "故意、打算" }, { word: "traffic", meaning: "交通状况" }],
    tips: "辩解但不推责：I didn't mean to ... 先认结果，再补原因。",
  }, [
    ["didn't mean to", "我不是故意打断你。", "I didn't mean to interrupt you.", "didn't mean to + 原形"],
    ["worse than usual", "今天地铁比平时更挤。", "The subway is more crowded than usual today.", "than usual"],
  ]),

  s("b1-social-4", "B1", "social", "如果你现在不方便说，我们改天再聊也行。", "If it's not convenient to talk right now, we can catch up another day.", {
    structure: "If it's not convenient ..., we can ...",
    grammar: ["给对方退路", "catch up 叙旧/再聊"],
    vocab: [{ word: "catch up", meaning: "叙旧、补聊" }, { word: "another day", meaning: "改天" }],
    tips: "社交里先给台阶，比反复追问“你在吗”更礼貌。",
  }, [
    ["catch up", "我们找时间好好聊聊吧。", "Let's catch up properly sometime.", "catch up"],
    ["another day", "这件事我们改天再谈。", "Let's talk about it another day.", "another day"],
  ], ["If it is not convenient to talk right now, we can catch up another day."]),

  s("b1-shopping-1", "B1", "shopping", "我在比较这两款，想看看哪一款更耐用。", "I'm comparing these two models to see which one is more durable.", {
    structure: "be doing + to see which ...",
    grammar: ["compare A and B / these two", "which one 选择"],
    vocab: [{ word: "compare", meaning: "比较" }, { word: "durable", meaning: "耐用的" }],
    tips: "compare 本身已含“比较”，不必再加 compare ... with each 太啰嗦。which one 回指型号。",
  }, [
    ["compare", "别只看价格，也要比较质量。", "Don't just look at the price; compare the quality as well.", "as well"],
    ["which one", "你觉得哪一件更适合正式场合？", "Which one do you think is more suitable for formal occasions?", "which one + 从句"],
  ], ["I am comparing these two models to see which one is more durable."]),

  s("b1-shopping-2", "B1", "shopping", "如果下周还没到货，我想取消订单。", "If it still hasn't arrived next week, I would like to cancel the order.", {
    structure: "If + 现在完成时, would like to",
    grammar: ["still hasn't 强调持续未发生", "cancel the order"],
    vocab: [{ word: "cancel", meaning: "取消" }, { word: "order", meaning: "订单" }],
    tips: "到货用 arrive / be delivered。cancel the order 是固定说法。",
  }, [
    ["still hasn't", "包裹还没到。", "The package still hasn't arrived.", "still 放在 hasn't 前"],
    ["cancel", "我能取消这次预约吗？", "Can I cancel this appointment?", "cancel + 预约/订单"],
  ]),

  s("b1-shopping-3", "B1", "shopping", "这个折扣看起来诱人，但退货条款写得很严。", "The discount looks tempting, but the return policy is quite strict.", {
    structure: "看起来... but 实际...",
    grammar: ["look + 形容词", "policy 政策"],
    vocab: [{ word: "tempting", meaning: "诱人的" }, { word: "return policy", meaning: "退货政策" }],
    tips: "购物决策句：先承认吸引力，再用 but 指出风险。",
  }, [
    ["look + adj", "这件衣服看起来很合适。", "This dress looks perfect.", "looks + 形容词"],
    ["policy", "购买前先读退换条款。", "Read the return policy before you buy it.", "before 从句"],
  ]),

  s("b1-shopping-4", "B1", "shopping", "我带回去试试，不合适再来换。", "I'll take it home and try it on; I can exchange it if it doesn't fit.", {
    structure: "先...再...；if 条件",
    grammar: ["try on 试穿", "fit 合身", "exchange 换货"],
    vocab: [{ word: "fit", meaning: "合身" }, { word: "exchange", meaning: "更换" }],
    tips: "衣服合身用 fit，尺寸合适也常说 it fits。",
  }, [
    ["fit", "这双鞋不太合脚。", "These shoes don't fit very well.", "don't fit"],
    ["exchange", "如果不合适我可以换尺码吗？", "Can I exchange it for another size if it doesn't fit?", "exchange for"],
  ], ["I will take it home and try it on; I can exchange it if it does not fit."]),

  s("b1-dining-1", "B1", "dining", "你们有没有适合不能吃辣的人的菜？", "Do you have any dishes suitable for people who can't eat spicy food?", {
    structure: "suitable for + 定语从句",
    grammar: ["who 引导定语从句", "spicy food"],
    vocab: [{ word: "suitable", meaning: "适合的" }, { word: "spicy", meaning: "辣的" }],
    tips: "suitable for people who ... 比 Do you have no spicy? 完整、礼貌。",
  }, [
    ["suitable for", "有没有适合孩子的座位？", "Do you have seats suitable for children?", "suitable for"],
    ["定语从句", "我想点一道不含花生的菜。", "I would like a dish that doesn't contain peanuts.", "that 引导从句"],
  ], ["Do you have any dishes suitable for people who cannot eat spicy food?"]),

  s("b1-dining-2", "B1", "dining", "这道菜比我想象的要咸一些。", "This dish is a bit saltier than I expected.", {
    structure: "a bit + 比较级 + than 从句",
    grammar: ["salty → saltier", "a bit 缓和评价"],
    vocab: [{ word: "salty", meaning: "咸的" }, { word: "dish", meaning: "菜肴" }],
    tips: "评价口味用比较级更具体：saltier / sweeter / spicier than I expected。",
  }, [
    ["比较级口味", "汤比刚才淡一些了。", "The soup is a little lighter than it was just now.", "a little + 比较级"],
    ["评价", "肉有点烤过头了。", "The meat is a bit overcooked.", "overcooked"],
  ]),

  s("b1-dining-3", "B1", "dining", "我们先点饮料，等齐了人再点主菜。", "We'll order drinks first and wait until everyone is here to order the mains.", {
    structure: "先... until ... 再...",
    grammar: ["until 等到某一刻", "mains 主菜"],
    vocab: [{ word: "mains", meaning: "主菜" }, { word: "until", meaning: "直到" }],
    tips: "等人到齐用 until everyone is here，比 wait people come 更完整。",
  }, [
    ["until", "我们等到菜齐了一起吃。", "We'll wait until all the dishes have arrived.", "until + 完成时也可"],
    ["order", "你先点，我还在看菜单。", "You can order first; I'm still looking at the menu.", "still looking"],
  ], ["We will order drinks first and wait until everyone is here to order the mains."]),

  s("b1-dining-4", "B1", "dining", "如果可以的话，请把酱汁单独盛。", "If possible, please serve the sauce on the side.", {
    structure: "If possible, please + 动词",
    grammar: ["on the side 单独放置", "serve 上菜/盛"],
    vocab: [{ word: "on the side", meaning: "单独盛放" }, { word: "sauce", meaning: "酱汁" }],
    tips: "on the side 是餐厅高频表达，比 put it in another bowl 更短。",
  }, [
    ["on the side", "沙拉酱请单独放。", "Please put the dressing on the side.", "on the side"],
    ["If possible", "如果可以，我想换一道汤。", "If possible, I would like to change the soup.", "If possible 开头"],
  ]),

  s("b1-health-1", "B1", "health", "我已经连续咳嗽三天了，想预约看医生。", "I have been coughing for three days and would like to make a doctor's appointment.", {
    structure: "现在完成进行时 + and would like to",
    grammar: ["have been doing for + 时长", "make an appointment"],
    vocab: [{ word: "cough", meaning: "咳嗽" }, { word: "appointment", meaning: "预约" }],
    tips: "持续三天用 for three days，完成进行时强调一直在咳。",
  }, [
    ["for + 时长", "我头疼已经两天了。", "I have had a headache for two days.", "have had + 症状 + for"],
    ["appointment", "最早能约到什么时候？", "What is the earliest appointment I can get?", "earliest appointment"],
  ]),

  s("b1-health-2", "B1", "health", "按时吃药比继续熬夜重要得多。", "Taking your medicine on time is much more important than staying up late.", {
    structure: "动名词主语 + much more ... than + 动名词",
    grammar: ["doing 作主语", "much more 加强比较"],
    vocab: [{ word: "on time", meaning: "准时、按时" }, { word: "stay up late", meaning: "熬夜" }],
    tips: "比较两件事情时，两边都用 doing，保持对称。",
  }, [
    ["动名词主语", "多喝水对喉咙有好处。", "Drinking more water is good for your throat.", "Doing is ..."],
    ["stay up late", "你不该连续熬夜。", "You shouldn't stay up late several nights in a row.", "shouldn't + 原形"],
  ]),

  s("b1-health-3", "B1", "health", "我还没完全恢复，所以这周先不跑步了。", "I haven't fully recovered yet, so I won't go running this week.", {
    structure: "现在完成时 + so + 决定",
    grammar: ["recover 恢复", "won't 表示决定"],
    vocab: [{ word: "recover", meaning: "恢复" }, { word: "fully", meaning: "完全地" }],
    tips: "恢复健康用 recover，不是 I haven't good yet。",
  }, [
    ["recover", "她手术后恢复得很快。", "She recovered quickly after the surgery.", "recovered quickly"],
    ["so", "我有点头晕，所以先坐下。", "I feel a bit dizzy, so I will sit down first.", "so 连接结果"],
  ], ["I have not fully recovered yet, so I will not go running this week."]),

  s("b1-health-4", "B1", "health", "与其自己上网查症状吓自己，不如尽快去做检查。", "Rather than googling the symptoms and scaring yourself, it's better to get checked as soon as possible.", {
    structure: "Rather than doing A, it's better to do B",
    grammar: ["并列两个 doing", "get checked 去做检查"],
    vocab: [{ word: "symptom", meaning: "症状" }, { word: "as soon as possible", meaning: "尽快" }],
    tips: "get checked 比 go to check my body 更地道。",
  }, [
    ["get checked", "你最好把血压也检查一下。", "You'd better get your blood pressure checked as well.", "get sth checked"],
    ["as soon as possible", "请尽快把结果发给我。", "Please send me the results as soon as possible.", "as soon as possible"],
  ], ["Rather than googling the symptoms and scaring yourself, it is better to get checked as soon as possible."]),
];
