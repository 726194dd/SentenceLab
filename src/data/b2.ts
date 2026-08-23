import { s } from "./build";

export const B2 = [
  s("b2-daily-1", "B2", "daily", "我发现只要把手机放在另一个房间，注意力就会好很多。", "I've found that my concentration improves a lot as long as I leave my phone in another room.", {
    structure: "I've found that + as long as 条件",
    grammar: ["as long as 只要", "concentration 不可数"],
    vocab: [{ word: "concentration", meaning: "注意力、专注" }, { word: "as long as", meaning: "只要" }],
    tips: "as long as 强调“满足这一条件就成立”，比 if 更突出前提。",
  }, [
    ["as long as", "只要你提前说一声，我都可以调时间。", "I can adjust the time as long as you tell me in advance.", "as long as + 现在时"],
    ["concentration", "噪音让我很难集中注意力。", "The noise makes it hard for me to concentrate.", "make it + adj + for sb to do"],
  ], ["I have found that my concentration improves a lot as long as I leave my phone in another room."]),

  s("b2-daily-2", "B2", "daily", "尽管日程很满，我还是尽量每天留出半小时散步。", "Even though my schedule is packed, I still try to set aside half an hour for a walk every day.", {
    structure: "Even though + 让步, still + 主句",
    grammar: ["even though 后接从句", "set aside 留出"],
    vocab: [{ word: "packed", meaning: "排满的" }, { word: "set aside", meaning: "留出" }],
    tips: "even though 不能只加名词；even with a packed schedule 才是短语让步。",
  }, [
    ["even though", "尽管我很累，我还是把厨房收拾了。", "Even though I was tired, I still cleaned up the kitchen.", "even though + 从句"],
    ["set aside", "我想每周留出一个晚上只读书。", "I want to set aside one evening a week just for reading.", "set aside + 时间"],
  ]),

  s("b2-daily-3", "B2", "daily", "与其把晚上耗在短视频上，我更想把那段时间用来学两句英语。", "Rather than burning the evening on short videos, I'd rather use that time to learn a couple of English sentences.", {
    structure: "Rather than doing, would rather do",
    grammar: ["两种 rather 句式叠用要分清", "a couple of 两三"],
    vocab: [{ word: "burn", meaning: "消耗（时间）" }, { word: "a couple of", meaning: "几个" }],
    tips: "rather than 接 doing；would rather 接原形。不要写成 would rather to use。",
  }, [
    ["would rather", "我宁愿早睡，也不想把脑子熬糊。", "I'd rather go to bed early than wear my brain out.", "would rather do than do"],
    ["use ... to", "把通勤时间用来听音频。", "Use your commute to listen to audio.", "use sth to do"],
  ], ["Rather than burning the evening on short videos, I would rather use that time to learn a couple of English sentences."]),

  s("b2-daily-4", "B2", "daily", "我慢慢接受了一个事实：不是每个晚上都得过得很高效。", "I'm slowly coming to terms with the fact that not every evening has to be highly productive.", {
    structure: "come to terms with the fact that ...",
    grammar: ["同位语从句 the fact that", "have to 表示必须"],
    vocab: [{ word: "come to terms with", meaning: "接受、和解" }, { word: "productive", meaning: "高效的" }],
    tips: "the fact that 后是完整句子。not every 是部分否定，不是 none。",
  }, [
    ["the fact that", "我得面对一个事实：我需要更多睡眠。", "I have to face the fact that I need more sleep.", "the fact that + 句子"],
    ["not every", "不是每个计划都得执行到底。", "Not every plan has to be carried out to the end.", "not every + 单数"],
  ], ["I am slowly coming to terms with the fact that not every evening has to be highly productive."]),

  s("b2-travel-1", "B2", "travel", "要不是地铁临时停运，我们早就到酒店了。", "If the subway hadn't been temporarily out of service, we would have arrived at the hotel already.", {
    structure: "第三条件句 + already",
    grammar: ["hadn't been + 形容词短语", "out of service 停运"],
    vocab: [{ word: "out of service", meaning: "停运、暂停服务" }, { word: "temporarily", meaning: "临时地" }],
    tips: "对过去事实相反的假设必须用 had done / would have done。",
  }, [
    ["out of service", "电梯坏了，我们只能走楼梯。", "The elevator is out of service, so we have to take the stairs.", "out of service"],
    ["would have done", "要不是下雨，我们早就出门了。", "If it hadn't rained, we would have left already.", "hadn't / would have"],
  ], ["If the subway had not been temporarily out of service, we would have arrived at the hotel already."]),

  s("b2-travel-2", "B2", "travel", "我更倾向于住在离市中心步行可达的地方，即使价格高一点。", "I prefer staying somewhere within walking distance of the city center, even if it costs a bit more.", {
    structure: "prefer doing + even if 让步",
    grammar: ["within walking distance of", "even if 假设让步"],
    vocab: [{ word: "prefer", meaning: "更喜欢" }, { word: "walking distance", meaning: "步行可达的距离" }],
    tips: "even if 后常接可能成立的情况；even though 后接既成事实。",
  }, [
    ["walking distance", "餐厅就在酒店步行范围内。", "The restaurant is within walking distance of the hotel.", "within walking distance of"],
    ["even if", "即使多花点时间，我也想坐火车。", "Even if it takes longer, I still want to take the train.", "even if + 句子"],
  ]),

  s("b2-travel-3", "B2", "travel", "与其把行程排满，不如留出空白去对付延误。", "Rather than packing the itinerary, it's wiser to leave some slack for delays.", {
    structure: "Rather than doing, it's wiser to do",
    grammar: ["itinerary 行程", "slack 余量"],
    vocab: [{ word: "itinerary", meaning: "行程安排" }, { word: "slack", meaning: "缓冲、余量" }],
    tips: "旅行英语里 leave slack / leave buffer 都表示留出机动时间。",
  }, [
    ["itinerary", "我们把明天的行程改得松一些。", "Let's loosen tomorrow's itinerary a little.", "loosen 放宽"],
    ["buffer", "我习惯在换乘之间留四十分钟缓冲。", "I usually leave a forty-minute buffer between transfers.", "leave a buffer"],
  ], ["Rather than packing the itinerary, it is wiser to leave some slack for delays."]),

  s("b2-travel-4", "B2", "travel", "当地人推荐的小馆，往往比景区餐厅更值得排队。", "The small places locals recommend are often more worth queuing for than the restaurants by the sights.", {
    structure: "定语从句 + more worth doing than",
    grammar: ["locals recommend 修饰 places", "worth doing"],
    vocab: [{ word: "recommend", meaning: "推荐" }, { word: "queue", meaning: "排队" }],
    tips: "worth 后接 doing：worth queuing for。by the sights 表示景点旁边。",
  }, [
    ["worth doing", "这趟绕路值得。", "This detour is worth taking.", "worth + doing"],
    ["定语从句", "导游提到的那家店已经关门了。", "The shop the guide mentioned was already closed.", "省略了 that"],
  ]),

  s("b2-work-1", "B2", "work", "与其在会上争论细节，不如先就目标达成一致。", "Rather than arguing over details in the meeting, we should first agree on the goals.", {
    structure: "Rather than doing, should + 动词",
    grammar: ["argue over 争论某事", "agree on 就……达成一致"],
    vocab: [{ word: "argue over", meaning: "争论" }, { word: "agree on", meaning: "就……达成一致" }],
    tips: "agree on the goals，on 不能换成 to。agree to 后面常接建议/请求。",
  }, [
    ["agree on", "我们还没就截止日期达成一致。", "We haven't agreed on the deadline yet.", "agree on + 事物"],
    ["argue over", "别在用词上纠缠太久。", "Don't argue over wording for too long.", "argue over"],
  ]),

  s("b2-work-2", "B2", "work", "这个方案短期内能见效，但从长期来看可能增加维护成本。", "This plan may work in the short term, but in the long run it could increase maintenance costs.", {
    structure: "in the short term ... in the long run",
    grammar: ["情态动词 may / could 表不确定", "对比时间尺度"],
    vocab: [{ word: "in the long run", meaning: "从长期看" }, { word: "maintenance", meaning: "维护" }],
    tips: "short term 用 in the short term；长期更常说 in the long run。",
  }, [
    ["in the long run", "便宜方案长期未必省钱。", "A cheap option may not save money in the long run.", "in the long run"],
    ["could", "这个改动可能会影响其他模块。", "This change could affect other modules.", "could 表示可能"],
  ]),

  s("b2-work-3", "B2", "work", "我倾向于先把不确定的假设说清楚，以免团队在错误的前提上推进。", "I tend to make uncertain assumptions explicit first, so the team doesn't move forward on the wrong premises.", {
    structure: "tend to do + so (that) 结果",
    grammar: ["tend to 倾向", "so 引导目的/结果", "premise 前提"],
    vocab: [{ word: "assumption", meaning: "假设" }, { word: "premise", meaning: "前提" }],
    tips: "make ... explicit 比 say it clearly 更书面、更职场。",
  }, [
    ["tend to", "他一紧张就倾向于说得太快。", "He tends to speak too fast when he is nervous.", "tend to + 原形"],
    ["move forward", "在数据出来之前，我们先不要往下推进。", "Let's not move forward until the data is in.", "until"],
  ], ["I tend to make uncertain assumptions explicit first, so the team does not move forward on the wrong premises."]),

  s("b2-work-4", "B2", "work", "与其承诺一个做不到的日期，不如现在就把风险讲明白。", "Rather than promising a date we can't meet, we'd better spell out the risks now.", {
    structure: "Rather than doing, had better do",
    grammar: ["had better + 原形", "spell out 讲清楚"],
    vocab: [{ word: "spell out", meaning: "讲明白" }, { word: "risk", meaning: "风险" }],
    tips: "we'd better 后不加 to。promise a date we can't meet 里 we can't meet 是定语从句。",
  }, [
    ["had better", "我们最好先回客户一封邮件。", "We'd better reply to the client first.", "had better + 原形"],
    ["spell out", "请把验收标准写清楚。", "Please spell out the acceptance criteria.", "spell out"],
  ], ["Rather than promising a date we cannot meet, we had better spell out the risks now."]),

  s("b2-study-1", "B2", "study", "真正难的不是记住规则，而是在真实对话里立刻用出来。", "The real difficulty is not remembering the rules, but using them instantly in a real conversation.", {
    structure: "not doing A, but doing B",
    grammar: ["not ... but ... 平行结构", "动名词保持对称"],
    vocab: [{ word: "instantly", meaning: "立刻" }, { word: "conversation", meaning: "对话" }],
    tips: "not A but B 两边语法形式要一致：都用 doing。",
  }, [
    ["not ... but", "问题不在时间，而在方法。", "The problem is not the time, but the method.", "not A but B"],
    ["instantly", "我听得懂，却没法立刻说出来。", "I can understand it, but I can't produce it instantly.", "produce 产出"],
  ]),

  s("b2-study-2", "B2", "study", "我把这篇文章读了两遍，才弄清作者真正想反驳的观点。", "I had to read the article twice before I figured out the argument the author was actually trying to refute.", {
    structure: "had to do ... before + 从句",
    grammar: ["figure out 弄清", "定语从句省略 that", "refute 反驳"],
    vocab: [{ word: "figure out", meaning: "弄明白" }, { word: "refute", meaning: "反驳" }],
    tips: "before I figured out 表示“直到……才”，比 after reading I know 更准确。",
  }, [
    ["figure out", "我花了很久才弄清这个句型怎么用。", "It took me a long time to figure out how to use this pattern.", "it takes sb + 时间 + to do"],
    ["before 从句", "我核对了来源才转发。", "I checked the source before I forwarded it.", "before + 过去时"],
  ]),

  s("b2-study-3", "B2", "study", "一旦你能解释一个语法点，你才算真正会了。", "You don't really know a grammar point until you can explain it.", {
    structure: "not ... until + 情态从句",
    grammar: ["until 表临界点", "can 表示能力"],
    vocab: [{ word: "explain", meaning: "解释" }, { word: "grammar point", meaning: "语法点" }],
    tips: "“才算”常用 not ... until 来翻，避免直译 you know only when。",
  }, [
    ["not ... until", "直到开口，我才知道卡在哪里。", "I didn't know where I got stuck until I started speaking.", "didn't ... until"],
    ["explain", "你能用自己的话解释吗？", "Can you explain it in your own words?", "in your own words"],
  ], ["You do not really know a grammar point until you can explain it."]),

  s("b2-study-4", "B2", "study", "与其追求每天学很多新词，不如反复把已会的句子用到更自然的场合里。", "Rather than chasing many new words every day, it's more effective to reuse the sentences you already know in more natural contexts.", {
    structure: "Rather than doing, it's more effective to do",
    grammar: ["reuse 复用", "you already know 定语从句"],
    vocab: [{ word: "reuse", meaning: "重复使用" }, { word: "context", meaning: "语境、场合" }],
    tips: "language learning 里 reuse / retrieve 比 just memorize 更接近有效练习。",
  }, [
    ["reuse", "把今天的句子放到明天的对话里再用一次。", "Reuse today's sentence in tomorrow's conversation.", "reuse + 宾语"],
    ["context", "离开语境，这个词会变得很难记。", "Without context, this word becomes much harder to remember.", "without + 名词"],
  ], ["Rather than chasing many new words every day, it is more effective to reuse the sentences you already know in more natural contexts."]),

  s("b2-social-1", "B2", "social", "我不是故意忽略你的消息，只是当时正在开会，没法及时回复。", "I didn't mean to ignore your message; I was in a meeting and couldn't reply in time.", {
    structure: "didn't mean to ...; 过去进行时补原因",
    grammar: ["分号连接两句紧密相关的话", "in time 及时"],
    vocab: [{ word: "ignore", meaning: "忽略" }, { word: "in time", meaning: "及时" }],
    tips: "in time = 赶在需要之前；on time = 准时。回消息用 in time。",
  }, [
    ["in time", "我及时赶上了末班车。", "I caught the last train in time.", "in time"],
    ["on time", "会议准时开始了。", "The meeting started on time.", "on time"],
  ], ["I did not mean to ignore your message; I was in a meeting and could not reply in time."]),

  s("b2-social-2", "B2", "social", "坦白说，我有点担心这样直接说会让他尴尬。", "To be honest, I'm a bit worried that saying it so directly might make him uncomfortable.", {
    structure: "To be honest + worried that + 从句",
    grammar: ["that 从句作worried的内容", "might 降低肯定程度"],
    vocab: [{ word: "to be honest", meaning: "坦白说" }, { word: "uncomfortable", meaning: "不自在的" }],
    tips: "make him uncomfortable 比 make him embarrassment 正确；embarrassed 是人的感受。",
  }, [
    ["worried that", "我担心她会误会我的意思。", "I'm worried that she might misunderstand me.", "worried that + 从句"],
    ["might", "直接拒绝可能会显得太硬。", "A direct refusal might come across as too blunt.", "come across as"],
  ], ["To be honest, I am a bit worried that saying it so directly might make him uncomfortable."]),

  s("b2-social-3", "B2", "social", "你要是觉得被冒犯了，我愿意把话说开。", "If you felt offended, I'm willing to talk it through.", {
    structure: "If + 过去感受, be willing to do",
    grammar: ["offended 感到被冒犯", "talk through 把事情谈开"],
    vocab: [{ word: "offend", meaning: "冒犯" }, { word: "talk through", meaning: "谈开、谈清楚" }],
    tips: "willing to 后接原形。talk it through 比 talk it 完整。",
  }, [
    ["willing to", "我愿意再解释一遍。", "I'm willing to explain it again.", "willing to + 原形"],
    ["talk through", "我们把误会谈开吧。", "Let's talk the misunderstanding through.", "talk sth through"],
  ], ["If you felt offended, I am willing to talk it through."]),

  s("b2-social-4", "B2", "social", "我能听出他在客气，只是还没找到一个不让场面尴尬的拒绝方式。", "I could tell he was being polite; he just hadn't found a way to refuse without making the situation awkward.", {
    structure: "could tell + 过去进行；without doing",
    grammar: ["be being + adj 强调当时表现", "without doing 方式状语"],
    vocab: [{ word: "awkward", meaning: "尴尬的" }, { word: "refuse", meaning: "拒绝" }],
    tips: "he was being polite 强调“那一刻在客气”，比 he was polite 更有场景感。",
  }, [
    ["could tell", "我能看出来她有话没说。", "I could tell she was holding something back.", "could tell + 从句"],
    ["without doing", "他想拒绝，又不想伤害别人。", "He wanted to refuse without hurting anyone.", "without + doing"],
  ]),

  s("b2-shopping-1", "B2", "shopping", "与其被折扣吸引，我更想先确认退换政策是否灵活。", "Rather than being tempted by the discount, I'd rather confirm first whether the return policy is flexible.", {
    structure: "Rather than being done, would rather do + whether 从句",
    grammar: ["be tempted by 被吸引", "whether 引导宾语从句"],
    vocab: [{ word: "tempt", meaning: "诱惑" }, { word: "flexible", meaning: "灵活的" }],
    tips: "whether 在确认“是否”时比 if 更稳，尤其后面还有 or not 的空间。",
  }, [
    ["whether", "我想确认这件能不能退。", "I want to confirm whether this can be returned.", "whether + 句子"],
    ["be tempted", "别只被包装吸引。", "Don't be tempted by the packaging alone.", "be tempted by"],
  ], ["Rather than being tempted by the discount, I would rather confirm first whether the return policy is flexible."]),

  s("b2-shopping-2", "B2", "shopping", "这件外套看起来普通，但面料和剪裁都比同价位的好不少。", "This coat looks ordinary, but both the fabric and the cut are considerably better than others at the same price.", {
    structure: "looks + adj, but both A and B are ...",
    grammar: ["both ... and ...", "considerably 加强比较级"],
    vocab: [{ word: "fabric", meaning: "面料" }, { word: "cut", meaning: "剪裁" }],
    tips: "both A and B 后动词用复数 are。at the same price 表示同价位。",
  }, [
    ["both ... and", "价格和售后我都满意。", "I'm satisfied with both the price and the after-sales service.", "both A and B"],
    ["considerably", "这双鞋明显更舒服。", "These shoes are considerably more comfortable.", "considerably + 比较级"],
  ]),

  s("b2-shopping-3", "B2", "shopping", "我不是在犹豫贵不贵，而是在判断它会不会成为又一件用不了几次的东西。", "I'm not hesitating over the price; I'm trying to judge whether it will become yet another thing I barely use.", {
    structure: "not A; but/trying to B + whether 从句",
    grammar: ["hesitate over 为……犹豫", "yet another 又一件", "barely 几乎不"],
    vocab: [{ word: "hesitate", meaning: "犹豫" }, { word: "barely", meaning: "几乎不" }],
    tips: "yet another 带一点无奈：又一件。barely use 比 don't use much 更紧。",
  }, [
    ["barely", "这件衣服我几乎没穿过。", "I have barely worn this piece.", "barely + 过去分词"],
    ["hesitate", "别为运费犹豫太久。", "Don't hesitate too long over the shipping fee.", "hesitate over"],
  ], ["I am not hesitating over the price; I am trying to judge whether it will become yet another thing I barely use."]),

  s("b2-shopping-4", "B2", "shopping", "一旦把“拥有”和“需要”分开看，很多商品就没那么必要了。", "Once you separate owning something from needing it, many products become far less necessary.", {
    structure: "Once + 从句, 主句",
    grammar: ["separate A from B", "动名词 owning / needing 对称"],
    vocab: [{ word: "separate", meaning: "分开" }, { word: "necessary", meaning: "必要的" }],
    tips: "separate A from B 是固定介词搭配。once 表示“一旦……就”。",
  }, [
    ["separate from", "把想要和需要分开。", "Separate what you want from what you need.", "separate A from B"],
    ["once", "一旦你开始记账，消费会更清醒。", "Once you start tracking expenses, you spend more consciously.", "once + 现在时"],
  ]),

  s("b2-dining-1", "B2", "dining", "能不能把酱汁单独放？我想先尝尝原味再决定要不要加。", "Could you serve the sauce on the side? I'd like to taste the original flavor first before deciding whether to add it.", {
    structure: "请求 + before doing + whether to do",
    grammar: ["whether to do 不定式选择", "before deciding"],
    vocab: [{ word: "flavor", meaning: "味道" }, { word: "on the side", meaning: "单独盛" }],
    tips: "whether to add it 比 if add it 完整。before 后可接 doing。",
  }, [
    ["whether to", "我还没决定要不要加冰。", "I haven't decided whether to add ice yet.", "whether to do"],
    ["before doing", "先问过敏原再点菜。", "Ask about allergens before ordering.", "before + doing"],
  ], ["Could you serve the sauce on the side? I would like to taste the original flavor first before deciding whether to add it."]),

  s("b2-dining-2", "B2", "dining", "如果厨房现在太忙，我们也可以先点饮品等一会儿。", "If the kitchen is too busy right now, we can order drinks first and wait for a bit.", {
    structure: "If + 现状, can + 变通方案",
    grammar: ["right now 此刻", "for a bit 一会儿"],
    vocab: [{ word: "kitchen", meaning: "厨房" }, { word: "for a bit", meaning: "一会儿" }],
    tips: "给餐厅台阶的说法，比抱怨 You are too slow 更有效。",
  }, [
    ["right now", "我们现在先不点甜品。", "We won't order dessert right now.", "right now"],
    ["wait for", "我们再等十分钟。", "We'll wait for another ten minutes.", "wait for + 时长"],
  ]),

  s("b2-dining-3", "B2", "dining", "一道好菜不在于堆叠多少元素，而在于每一种味道都站得住。", "A good dish is not about how many elements are stacked together, but about whether each flavor can stand on its own.", {
    structure: "not about A, but about B",
    grammar: ["whether 从句", "stand on its own 独立成立"],
    vocab: [{ word: "element", meaning: "元素" }, { word: "stand on its own", meaning: "站得住、自成一体" }],
    tips: "not about ... but about ... 两边都用 about，保持平行。",
  }, [
    ["not about", "服务好不好，不在于说多少客套话。", "Good service is not about how many polite phrases you say.", "not about how many"],
    ["stand on its own", "这个理由本身就站得住。", "This reason can stand on its own.", "stand on its own"],
  ]),

  s("b2-dining-4", "B2", "dining", "我更喜欢那种吃完不会觉得被取悦过头、却还想再来一次的餐厅。", "I prefer restaurants that don't try too hard to impress, yet still make you want to come back.", {
    structure: "prefer + 定语从句 + yet still",
    grammar: ["try too hard to do", "yet 轻微转折"],
    vocab: [{ word: "impress", meaning: "给……留下印象、取悦" }, { word: "come back", meaning: "再来" }],
    tips: "try too hard to impress 对应“用力过猛地取悦”。yet still 保留好感。",
  }, [
    ["try too hard", "这道菜有点用力过猛。", "This dish tries a little too hard.", "try too hard"],
    ["come back", "我会再来的。", "I will definitely come back.", "come back"],
  ], ["I prefer restaurants that do not try too hard to impress, yet still make you want to come back."]),

  s("b2-health-1", "B2", "health", "与其自己搜索症状吓自己，不如尽快去做一次检查。", "Rather than googling the symptoms and scaring yourself, it would be better to get checked as soon as possible.", {
    structure: "Rather than doing and doing, it would be better to do",
    grammar: ["并列两个动名词", "it would be better 更委婉"],
    vocab: [{ word: "symptom", meaning: "症状" }, { word: "scare", meaning: "吓唬" }],
    tips: "it would be better 比 you must 更适合劝说亲近的人。",
  }, [
    ["it would be better", "你最好先停跑两天。", "It would be better to stop running for a couple of days.", "it would be better to"],
    ["scare", "别让搜索结果把自己吓到。", "Don't let search results scare you.", "let sth + 原形"],
  ]),

  s("b2-health-2", "B2", "health", "医生提醒我，睡眠不足会让恢复速度明显变慢。", "The doctor reminded me that lack of sleep would significantly slow down my recovery.", {
    structure: "remind sb that + 从句",
    grammar: ["间接引语里 will → would", "lack of + 不可数名词"],
    vocab: [{ word: "remind", meaning: "提醒" }, { word: "recovery", meaning: "恢复" }],
    tips: "lack of sleep 是名词短语，不要写成 lack sleep 作主语（缺乏可用 a lack of）。",
  }, [
    ["remind sb that", "护士提醒我饭后服药。", "The nurse reminded me that I should take the medicine after meals.", "reminded me that"],
    ["slow down", "压力会拖慢恢复。", "Stress can slow down recovery.", "slow down"],
  ]),

  s("b2-health-3", "B2", "health", "真正可持续的锻炼，是那种忙的时候也不至于完全放弃的强度。", "Truly sustainable exercise is the kind of intensity you won't completely abandon even when you're busy.", {
    structure: "is the kind of + 定语从句 + even when",
    grammar: ["省略 that 的定语从句", "even when 让步时间"],
    vocab: [{ word: "sustainable", meaning: "可持续的" }, { word: "abandon", meaning: "放弃" }],
    tips: "the kind of intensity you won't abandon，定语从句修饰 intensity。",
  }, [
    ["even when", "即使很忙，我也保持散步。", "I keep walking even when I'm busy.", "even when"],
    ["abandon", "别一忙就完全放下锻炼。", "Don't abandon exercise altogether the moment you get busy.", "the moment + 从句"],
  ], ["Truly sustainable exercise is the kind of intensity you will not completely abandon even when you are busy."]),

  s("b2-health-4", "B2", "health", "身体给出的信号往往比日程表更早知道你已经超负荷了。", "The body often signals overload long before your calendar admits it.", {
    structure: "often + 动词 + long before + 从句",
    grammar: ["long before 早在……之前", "拟人：calendar admits"],
    vocab: [{ word: "signal", meaning: "发出信号" }, { word: "overload", meaning: "超负荷" }],
    tips: "long before 比 before 更强调时间差。admit 这里是“承认/显示”。",
  }, [
    ["long before", "头疼在彻底倒下前很久就开始了。", "The headache started long before I completely broke down.", "long before"],
    ["overload", "我觉察到自己已经超负荷了。", "I realized I was already on overload.", "on overload"],
  ]),
];
