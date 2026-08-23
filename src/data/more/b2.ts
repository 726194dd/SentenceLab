import type { SentenceGroup } from "../build";
import type { LevelPack } from "./load";

const daily: SentenceGroup[] = [
  {
    structure: "Although + 从句, 主句",
    grammar: ["although 后接完整从句", "主句可用 still / anyway 加强对比"],
    tips: "although 不能直接加名词；要用 although + 句子。",
    items: [
      {
        zh: "虽然阳台有灰，我还是宁愿把衣服晾到外面。",
        en: "Although the balcony is dusty, I still prefer drying the clothes outside.",
        vocab: [["although", "虽然"], ["prefer", "更愿意"]],
      },
      {
        zh: "虽然室友出门很早，我还是会先煮咖啡再走。",
        en: "Although my roommate leaves early, I still make coffee before I go.",
        vocab: [["roommate", "室友"], ["make coffee", "煮咖啡"]],
      },
      {
        zh: "虽然走廊灯在闪，我暂时还不想麻烦房东。",
        en: "Although the hallway light keeps flickering, I might not call the landlord yet.",
        vocab: [["flicker", "闪烁"], ["landlord", "房东"]],
      },
      {
        zh: "虽然冰箱里还有剩菜，我还是简单煮了碗汤。",
        en: "Although leftovers were still in the fridge, I cooked a simple soup anyway.",
        vocab: [["leftovers", "剩菜"], ["anyway", "还是、反正"]],
      },
      {
        zh: "虽然新闻还开着，我叠衣服时几乎没认真听。",
        en: "Although the news was on, I barely listened while folding the laundry.",
        vocab: [["barely", "几乎不"], ["fold", "折叠"]],
      },
      {
        zh: "虽然昨晚睡得晚，我今早还是把垃圾拿出去了。",
        en: "Although I slept late last night, I still took the bins out this morning.",
        vocab: [["take out", "拿出去"], ["bins", "垃圾桶"]],
      },
      {
        zh: "虽然水龙头夜里会滴，我可能等到周末再修。",
        en: "Although the tap drips at night, I might wait until the weekend to fix it.",
        vocab: [["drip", "滴水"], ["fix", "修理"]],
      },
      {
        zh: "虽然花草看起来有点蔫，我还是隔三天才浇一次。",
        en: "Although the plants look a little wilted, I still water them only every three days.",
        vocab: [["wilted", "蔫的"], ["water", "浇水"]],
      },
    ],
  },
  {
    structure: "Even though + 从句, 主句",
    grammar: ["even though 语气比 although 更强", "后接完整句子，不能只加名词"],
    tips: "even though 强调“即便如此仍发生”；even if 更偏假设。",
    items: [
      {
        zh: "即便邻居在装修，我还是尽量在家办公。",
        en: "Even though the neighbors are renovating, I still try to work from home.",
        vocab: [["even though", "即便"], ["renovate", "装修"]],
      },
      {
        zh: "即便洗衣机声音很大，我也不想把衣服堆到明天。",
        en: "Even though the washing machine is loud, I don't want to leave the clothes until tomorrow.",
        vocab: [["loud", "大声的"], ["leave", "留到"]],
      },
      {
        zh: "即便外面开始刮风，我还是把被子拿去晒了。",
        en: "Even though the wind was picking up, I still hung the quilt out to dry.",
        vocab: [["pick up", "增强"], ["quilt", "被子"]],
      },
      {
        zh: "即便快递晚到了，我还是先把客厅收拾出来了。",
        en: "Even though the parcel arrived late, I still cleared space in the living room first.",
        vocab: [["parcel", "包裹"], ["clear space", "腾出空间"]],
      },
      {
        zh: "即便闹钟响了两次，我还是差点又睡着。",
        en: "Even though the alarm rang twice, I nearly fell asleep again.",
        vocab: [["alarm", "闹钟"], ["nearly", "差点"]],
      },
      {
        zh: "即便天气转凉，我仍打算骑自行车去买菜。",
        en: "Even though the weather has turned cooler, I still intend to cycle to the market.",
        vocab: [["turn cooler", "转凉"], ["intend to", "打算"]],
      },
      {
        zh: "即便洗碗机能用，我偶尔还是手洗几个杯子。",
        en: "Even though the dishwasher works, I still rinse a few cups by hand now and then.",
        vocab: [["rinse", "冲洗"], ["now and then", "偶尔"]],
      },
      {
        zh: "即便我今天很忙，我还是把账单先付了。",
        en: "Even though I am busy today, I still paid the household bills first.",
        vocab: [["household bills", "家庭账单"], ["pay", "支付"]],
      },
    ],
  },
  {
    structure: "Rather than + doing, 主句",
    grammar: ["rather than 后常用动名词", "表示取舍：不做 A 而做 B"],
    tips: "rather than 接 doing；would rather 才接动词原形。",
    items: [
      {
        zh: "与其把脏碗隔夜，我宁可洗完再休息。",
        en: "Rather than leaving dirty dishes overnight, I would rather wash them before I rest.",
        vocab: [["rather than", "与其"], ["overnight", "隔夜"]],
      },
      {
        zh: "与其早上临时找衣服，我倾向于前一晚就放好。",
        en: "Rather than hunting for clothes in the morning, I tend to lay them out the night before.",
        vocab: [["hunt for", "翻找"], ["lay out", "放好"]],
      },
      {
        zh: "与其把周末耗在打扫上，我更想每天少收拾一点。",
        en: "Rather than spending the whole weekend cleaning, I prefer tidying a little each day.",
        vocab: [["spend ... doing", "把时间花在"], ["tidy", "收拾"]],
      },
      {
        zh: "与其再点一次外卖，我决定把剩米饭炒一炒。",
        en: "Rather than ordering takeaway again, I decided to stir-fry the leftover rice.",
        vocab: [["takeaway", "外卖"], ["stir-fry", "炒"]],
      },
      {
        zh: "与其把邮件拖到睡前，我尽量吃完晚饭就回几封。",
        en: "Rather than postponing emails until bedtime, I try to answer a few after dinner.",
        vocab: [["postpone", "推迟"], ["bedtime", "睡前"]],
      },
      {
        zh: "与其让鞋子堆在门口，我宁愿多花一分钟摆整齐。",
        en: "Rather than letting shoes pile up by the door, I would rather spend a minute lining them up.",
        vocab: [["pile up", "堆起来"], ["line up", "摆齐"]],
      },
      {
        zh: "与其开着灯睡觉，我可能会先拉上窗帘再关灯。",
        en: "Rather than sleeping with the lights on, I might close the curtains and switch them off.",
        vocab: [["curtains", "窗帘"], ["switch off", "关掉"]],
      },
      {
        zh: "与其把过期食品扔掉时才发现，我每周会扫一眼冰箱。",
        en: "Rather than noticing expired food only when I throw it away, I scan the fridge each week.",
        vocab: [["expired", "过期的"], ["scan", "扫一眼"]],
      },
    ],
  },
  {
    structure: "tend to / might + 原形（委婉习惯）",
    grammar: ["tend to 表示惯常倾向", "might 降低肯定程度"],
    tips: "B2 常用 tend to、might 来避免把习惯说得太绝对。",
    items: [
      {
        zh: "我工作日往往比周末更早关灯。",
        en: "I tend to switch the lights off earlier on weekdays than on weekends.",
        vocab: [["tend to", "往往"], ["weekdays", "工作日"]],
      },
      {
        zh: "要是客厅太闷，我可能会先开窗十分钟。",
        en: "If the living room feels stuffy, I might open a window for ten minutes first.",
        vocab: [["stuffy", "闷的"], ["might", "可能会"]],
      },
      {
        zh: "我倾向于把钥匙放在同一个碗里，免得出门时找。",
        en: "I tend to keep my keys in the same bowl so I do not search for them later.",
        vocab: [["keep", "放、留"], ["search for", "寻找"]],
      },
      {
        zh: "雨天我可能会把运动鞋换成那双旧靴子。",
        en: "On rainy days I might swap my sneakers for those old boots.",
        vocab: [["swap A for B", "把 A 换成 B"], ["sneakers", "运动鞋"]],
      },
      {
        zh: "晚饭后我往往先擦桌子，再去看手机。",
        en: "After dinner I tend to wipe the table before I pick up my phone.",
        vocab: [["wipe", "擦"], ["pick up", "拿起"]],
      },
      {
        zh: "如果明天垃圾车来得早，我今晚可能先把袋子扎好。",
        en: "If the garbage truck comes early tomorrow, I might tie the bags tonight.",
        vocab: [["garbage truck", "垃圾车"], ["tie", "扎上"]],
      },
      {
        zh: "周末我往往把床单换下来，而不是拖到月底。",
        en: "On weekends I tend to change the sheets rather than waiting until month's end.",
        vocab: [["sheets", "床单"], ["month's end", "月底"]],
      },
      {
        zh: "客厅一乱，我可能先收走杯子，再谈别的家务。",
        en: "When the living room gets messy, I might clear the cups before any other chore.",
        vocab: [["messy", "乱的"], ["chore", "家务"]],
      },
    ],
  },
  {
    structure: "in the long run + 评价",
    grammar: ["in the long run 从长期看", "常与短期便利形成对比"],
    tips: "强调眼前省事未必划算，适合谈习惯和花费。",
    items: [
      {
        zh: "从长期看，自己带午餐往往比每天买三明治更省。",
        en: "In the long run, packing lunch tends to cost less than buying a sandwich every day.",
        vocab: [["in the long run", "从长期看"], ["pack lunch", "带午餐"]],
      },
      {
        zh: "从长期看，修水龙头比一直换桶装水更合理。",
        en: "In the long run, fixing the tap is more reasonable than buying bottled water forever.",
        vocab: [["reasonable", "合理的"], ["bottled water", "瓶装水"]],
      },
      {
        zh: "从长期看，把收据收好可能会省下不少对账时间。",
        en: "In the long run, keeping the receipts might save a lot of time when checking bills.",
        vocab: [["receipts", "收据"], ["check bills", "对账"]],
      },
      {
        zh: "从长期看，少买一次性餐具其实也减轻了家里的杂物。",
        en: "In the long run, buying fewer disposable utensils also reduces clutter at home.",
        vocab: [["disposable", "一次性的"], ["clutter", "杂物"]],
      },
      {
        zh: "从长期看，坚持早起收拾，周末就不会那么崩溃。",
        en: "In the long run, tidying a little in the morning keeps weekends from becoming exhausting.",
        vocab: [["tidying", "收拾"], ["exhausting", "让人精疲力尽的"]],
      },
      {
        zh: "从长期看，换一个静音闹钟可能比我每天被吓醒更值。",
        en: "In the long run, a quieter alarm might be worth more than being startled every morning.",
        vocab: [["quieter", "更安静的"], ["startled", "被吓到的"]],
      },
      {
        zh: "从长期看，把调料标上日期，做饭时会少很多犹豫。",
        en: "In the long run, labeling spices with dates reduces a lot of hesitation while cooking.",
        vocab: [["label", "贴标签"], ["hesitation", "犹豫"]],
      },
      {
        zh: "从长期看，每周整理一次抽屉，比东西找不到时发脾气更划算。",
        en: "In the long run, sorting one drawer a week beats losing your temper when items vanish.",
        vocab: [["sort", "整理"], ["lose your temper", "发脾气"]],
      },
    ],
  },
  {
    structure: "If + 过去完成时, would + 原形（混合条件）",
    grammar: ["对过去的假设影响现在", "if 从句用 had done，主句用 would do"],
    tips: "混合条件句点到即可：过去没做，现在才被动。",
    items: [
      {
        zh: "要是昨晚把午餐装好，我现在就不用在车站买面包。",
        en: "If I had packed lunch last night, I wouldn't be buying bread at the station now.",
        vocab: [["pack", "装好"], ["wouldn't be doing", "现在就不会在做"]],
      },
      {
        zh: "要是我把伞放在门口，这会儿就不会站在雨里等。",
        en: "If I had left the umbrella by the door, I wouldn't be standing in the rain now.",
        vocab: [["leave", "放在"], ["standing", "站着"]],
      },
      {
        zh: "要是我提前充好卡，现在就不会在闸机前手忙脚乱。",
        en: "If I had topped up my card earlier, I wouldn't be fumbling at the gate now.",
        vocab: [["top up", "充值"], ["fumble", "手忙脚乱"]],
      },
      {
        zh: "要是我把脏衣服分开，这会儿洗衣机也不会洗两遍。",
        en: "If I had sorted the laundry, the machine wouldn't be running a second cycle now.",
        vocab: [["sort", "分开整理"], ["cycle", "洗涤循环"]],
      },
      {
        zh: "要是我把垃圾袋扎紧，走廊现在就不会有味道。",
        en: "If I had tied the rubbish bag properly, the hallway wouldn't smell like this now.",
        vocab: [["properly", "好好地"], ["hallway", "走廊"]],
      },
      {
        zh: "要是我把充电器带回房间，我现在就不会借室友的。",
        en: "If I had brought the charger back to my room, I wouldn't be borrowing my roommate's now.",
        vocab: [["charger", "充电器"], ["borrow", "借用"]],
      },
      {
        zh: "要是我把牛奶放回冰箱，这会儿咖啡里就不用改用燕麦奶。",
        en: "If I had put the milk back, I wouldn't be switching to oat milk in my coffee now.",
        vocab: [["put back", "放回"], ["oat milk", "燕麦奶"]],
      },
      {
        zh: "要是我把闹钟调到床对面，我现在就不会又按贪睡。",
        en: "If I had placed the alarm across the room, I wouldn't be hitting snooze again now.",
        vocab: [["place", "放置"], ["snooze", "贪睡键"]],
      },
    ],
  },
  {
    structure: "whereas / while + 对比从句",
    grammar: ["whereas 书面对比更强", "while 也可表示对比，不只是时间"],
    tips: "对比两件并行的习惯，比 but 更清楚。",
    items: [
      {
        zh: "我喜欢晚上拖地，而室友更愿意一大早做。",
        en: "I prefer mopping the floor in the evening, whereas my roommate would rather do it at dawn.",
        vocab: [["whereas", "而、反之"], ["mop", "拖"]],
      },
      {
        zh: "工作日我吃得很快，而周末我会把早餐做完整。",
        en: "I eat quickly on weekdays, while at weekends I take time to cook a full breakfast.",
        vocab: [["while", "而"], ["full breakfast", "完整早餐"]],
      },
      {
        zh: "我倾向于把信件当天拆开，而有人会先堆一周。",
        en: "I tend to open the mail on the same day, whereas some people let it pile up for a week.",
        vocab: [["mail", "信件"], ["pile up", "堆积"]],
      },
      {
        zh: "我走路去超市，而我哥哥几乎每次都开车。",
        en: "I walk to the supermarket, whereas my brother almost always takes the car.",
        vocab: [["whereas", "而"], ["almost always", "几乎总是"]],
      },
      {
        zh: "我把干净衣服挂起来，而他习惯叠进抽屉。",
        en: "I hang the clean clothes up, while he usually folds them into the drawer.",
        vocab: [["hang up", "挂起来"], ["fold", "叠"]],
      },
      {
        zh: "我可能先洗碗，而她更想先把桌子擦干净。",
        en: "I might wash the dishes first, whereas she would rather wipe the table first.",
        vocab: [["whereas", "而"], ["wipe", "擦"]],
      },
      {
        zh: "夏天我开窗睡觉，而冬天我会把缝隙都堵上。",
        en: "I sleep with the window open in summer, while in winter I seal every draft.",
        vocab: [["seal", "封住"], ["draft", "缝隙风"]],
      },
      {
        zh: "我把过期优惠券扔掉，而他还会再检查一遍日期。",
        en: "I throw expired coupons away, whereas he still double-checks the dates.",
        vocab: [["coupons", "优惠券"], ["double-check", "再核对"]],
      },
    ],
  },
  {
    structure: "as long as / provided that + 条件",
    grammar: ["as long as 只要", "provided that 稍正式，意思相近"],
    tips: "条件用现在时，不要写成 as long as I will。",
    items: [
      {
        zh: "只要邻居不投诉，我晚上十点前都可以吸尘。",
        en: "I can vacuum until ten as long as the neighbors do not complain.",
        vocab: [["vacuum", "吸尘"], ["as long as", "只要"]],
      },
      {
        zh: "只要把煤气关好，我出门前就不会反复折返。",
        en: "I will not keep returning to the door, provided that I have turned the gas off.",
        vocab: [["provided that", "只要"], ["turn off", "关掉"]],
      },
      {
        zh: "只要牛奶还没过期，我早餐仍会用它泡燕麦。",
        en: "I still use the milk in my oats as long as it has not expired.",
        vocab: [["oats", "燕麦"], ["expire", "过期"]],
      },
      {
        zh: "只要把钥匙放回挂钩，第二天早上就不会耽误。",
        en: "The next morning will not be delayed as long as I hang the keys back on the hook.",
        vocab: [["hook", "挂钩"], ["delay", "耽误"]],
      },
      {
        zh: "只要天气预报不是暴雨，我还是会把被子拿出去。",
        en: "I will still put the quilt outside, provided that the forecast is not a downpour.",
        vocab: [["forecast", "天气预报"], ["downpour", "暴雨"]],
      },
      {
        zh: "只要水槽不堵，我并不急着叫管道工。",
        en: "I am not in a hurry to call a plumber as long as the sink is not blocked.",
        vocab: [["plumber", "管道工"], ["blocked", "堵塞的"]],
      },
      {
        zh: "只要把鞋子擦干，我可以让它们在阳台再放一夜。",
        en: "I can leave the shoes on the balcony overnight as long as I wipe them dry first.",
        vocab: [["wipe dry", "擦干"], ["overnight", "过夜"]],
      },
      {
        zh: "只要电费别突然涨，我可能继续用那台旧风扇。",
        en: "I might keep using the old fan, provided that the electricity bill does not jump.",
        vocab: [["provided that", "只要"], ["jump", "突然上涨"]],
      },
    ],
  },
  {
    structure: "despite + 名词 / 动名词",
    grammar: ["despite 后接名词或 doing", "不能直接接完整从句"],
    tips: "despite the noise 对；despite it is noisy 错，要改 although。",
    items: [
      {
        zh: "尽管外面很吵，我还是在阳台喝完了茶。",
        en: "Despite the noise outside, I still finished my tea on the balcony.",
        vocab: [["despite", "尽管"], ["finish", "喝完、做完"]],
      },
      {
        zh: "尽管时间紧，我还是把床单换了。",
        en: "Despite the tight schedule, I still changed the bed sheets.",
        vocab: [["tight schedule", "时间紧"], ["change", "更换"]],
      },
      {
        zh: "尽管手酸，我还是把窗户内侧擦干净了。",
        en: "Despite my sore arms, I still wiped the inside of the windows clean.",
        vocab: [["sore", "酸痛的"], ["wipe ... clean", "擦干净"]],
      },
      {
        zh: "尽管说明书很乱，我还是把新灯装上了。",
        en: "Despite the messy instructions, I still managed to install the new lamp.",
        vocab: [["instructions", "说明书"], ["install", "安装"]],
      },
      {
        zh: "尽管天气预报不准，我还是带了薄外套出门。",
        en: "Despite the unreliable forecast, I still took a light jacket with me.",
        vocab: [["unreliable", "不准的"], ["light jacket", "薄外套"]],
      },
      {
        zh: "尽管冰箱已经很满，我还是把明天的汤冻上了。",
        en: "Despite a crowded fridge, I still froze tomorrow's soup in a small container.",
        vocab: [["crowded", "挤满的"], ["freeze", "冷冻"]],
      },
      {
        zh: "尽管地板刚拖过，猫还是照样走来走去。",
        en: "Despite the freshly mopped floor, the cat still walked across it as usual.",
        vocab: [["freshly", "刚刚"], ["as usual", "照常"]],
      },
      {
        zh: "尽管我很困，我还是把洗衣机转到了烘干。",
        en: "Despite feeling sleepy, I still switched the washer over to the dryer cycle.",
        vocab: [["despite doing", "尽管……"], ["switch over", "转成"]],
      },
    ],
  },
  {
    structure: "unless + 现在时",
    grammar: ["unless = if not", "从句用现在时表示将来条件"],
    tips: "unless 后面不要再加 not，避免双重否定。",
    items: [
      {
        zh: "除非明天停水，否则我还是会把衣服先泡上。",
        en: "I will still soak the clothes unless the water is cut off tomorrow.",
        vocab: [["unless", "除非"], ["soak", "浸泡"]],
      },
      {
        zh: "除非面包发霉，否则早餐我可能还吃吐司。",
        en: "I might still have toast for breakfast unless the bread has gone mouldy.",
        vocab: [["mouldy", "发霉的"], ["toast", "吐司"]],
      },
      {
        zh: "除非邻居借走吸尘器，否则我今晚就吸客厅。",
        en: "I will vacuum the living room tonight unless the neighbors have borrowed the cleaner.",
        vocab: [["vacuum", "吸尘"], ["borrow", "借走"]],
      },
      {
        zh: "除非快递需要签字，否则我不会在家干等。",
        en: "I will not wait around at home unless the parcel requires a signature.",
        vocab: [["wait around", "干等"], ["signature", "签字"]],
      },
      {
        zh: "除非天气突然变热，否则我不会把厚被子收起来。",
        en: "I will not put the thick quilt away unless the weather suddenly turns hot.",
        vocab: [["put away", "收起来"], ["suddenly", "突然"]],
      },
      {
        zh: "除非电池真没电，否则我不会换客厅的钟。",
        en: "I will not replace the living-room clock unless the battery is truly dead.",
        vocab: [["replace", "更换"], ["dead", "没电的"]],
      },
      {
        zh: "除非下水道又反味，否则我可能先不倒疏通剂。",
        en: "I might not pour drain cleaner yet unless the sink smells again.",
        vocab: [["drain cleaner", "疏通剂"], ["smell", "有气味"]],
      },
      {
        zh: "除非共享单车都坏了，否则我不会改坐两站公交。",
        en: "I will not take the bus for two stops unless the shared bikes are all broken.",
        vocab: [["shared bikes", "共享单车"], ["stops", "站"]],
      },
    ],
  },
  {
    structure: "would rather + 原形 (+ than)",
    grammar: ["would rather 后接原形", "than 后也用原形"],
    tips: "I'd rather stay in than go out，不要写成 than to go。",
    items: [
      {
        zh: "我宁愿自己缝纽扣，也不想把衬衫再送去改。",
        en: "I would rather sew the button myself than send the shirt out again.",
        vocab: [["would rather", "宁愿"], ["sew", "缝"]],
      },
      {
        zh: "我宁愿晚饭简单点，也不想把厨房用到很晚。",
        en: "I would rather keep dinner simple than occupy the kitchen until late.",
        vocab: [["keep ... simple", "保持简单"], ["occupy", "占用"]],
      },
      {
        zh: "我宁愿多走一段去回收点，也不想把瓶子塞进普通垃圾桶。",
        en: "I would rather walk further to the recycling point than stuff bottles into ordinary bins.",
        vocab: [["recycling point", "回收点"], ["stuff", "塞进"]],
      },
      {
        zh: "我宁愿早十分钟出门，也不想在电梯里干着急。",
        en: "I would rather leave ten minutes earlier than stand impatiently in the lift.",
        vocab: [["impatiently", "不耐烦地"], ["lift", "电梯"]],
      },
      {
        zh: "我宁愿今晚少看一集，也想先把水槽清理干净。",
        en: "I would rather skip one episode tonight than leave the sink messy.",
        vocab: [["skip", "跳过"], ["episode", "一集"]],
      },
      {
        zh: "我宁愿手洗那件羊毛衫，也不想冒险用洗衣机。",
        en: "I would rather hand-wash the wool sweater than risk the washing machine.",
        vocab: [["hand-wash", "手洗"], ["risk", "冒险使用"]],
      },
      {
        zh: "我宁愿把杂志捐掉，也不想让茶几一直堆着。",
        en: "I would rather donate the magazines than let them occupy the coffee table.",
        vocab: [["donate", "捐掉"], ["occupy", "占着"]],
      },
      {
        zh: "我宁愿关上门打电话，也不想让整层楼都听见。",
        en: "I would rather close the door for the call than let the whole floor overhear it.",
        vocab: [["overhear", "无意中听到"], ["floor", "楼层"]],
      },
    ],
  },
  {
    structure: "so that / in case + 目的或预防",
    grammar: ["so that 表示目的", "in case 表示以防万一"],
    tips: "in case 后接现在时：in case it rains，不要 in case it will rain。",
    items: [
      {
        zh: "我把备用电池放进抽屉，以便手电筒随时能用。",
        en: "I put spare batteries in the drawer so that the torch is ready at any time.",
        vocab: [["spare", "备用的"], ["so that", "以便"]],
      },
      {
        zh: "我在门口放了双旧鞋，以防突然下小雨。",
        en: "I left an old pair of shoes by the door in case it starts to drizzle.",
        vocab: [["in case", "以防"], ["drizzle", "下小雨"]],
      },
      {
        zh: "我提前把米量好，以便早晨不用再找量杯。",
        en: "I measured the rice in advance so that I would not hunt for the cup in the morning.",
        vocab: [["measure", "量"], ["in advance", "提前"]],
      },
      {
        zh: "我把药品说明拍下来，以防盒子被扔掉。",
        en: "I photographed the medicine leaflet in case the box gets thrown away.",
        vocab: [["leaflet", "说明书"], ["in case", "以防"]],
      },
      {
        zh: "我把垃圾袋换厚一点，以免尖东西把袋子刺破。",
        en: "I switched to a thicker rubbish bag so that sharp leftovers would not tear it.",
        vocab: [["thicker", "更厚的"], ["tear", "刺破"]],
      },
      {
        zh: "我把花洒调小，以免早晨水压把整间浴室溅湿。",
        en: "I turned the shower down so that the morning water pressure would not soak the bathroom.",
        vocab: [["water pressure", "水压"], ["soak", "溅湿"]],
      },
      {
        zh: "我在包里放了折叠伞，以防下班时天气变脸。",
        en: "I slipped a folding umbrella into my bag in case the weather turns on the way home.",
        vocab: [["slip into", "塞进"], ["turn", "变天"]],
      },
      {
        zh: "我把插座旁的线收好，以免拖地时把它扯掉。",
        en: "I tucked the cable away so that I would not yank it out while mopping.",
        vocab: [["tuck away", "收好"], ["yank", "猛拉"]],
      },
    ],
  },
];

const travel: SentenceGroup[] = [
  {
    structure: "Although + 从句, 主句",
    grammar: ["although 让步", "主句说明仍采取的出行选择"],
    tips: "旅行场景里 although 常用来接受延误后仍继续计划。",
    items: [
      {
        zh: "虽然安检排得很长，我们还是赶上了登机口广播。",
        en: "Although the security line was long, we still caught the announcement at the gate.",
        vocab: [["security line", "安检队伍"], ["announcement", "广播"]],
      },
      {
        zh: "虽然火车票只剩无座，我还是决定先上车再说。",
        en: "Although only standing tickets were left, I still decided to board the train first.",
        vocab: [["standing ticket", "无座票"], ["board", "上车"]],
      },
      {
        zh: "虽然机场巴士绕路，它可能仍比出租车更省。",
        en: "Although the airport bus takes a longer route, it might still be cheaper than a taxi.",
        vocab: [["route", "路线"], ["might", "可能"]],
      },
      {
        zh: "虽然我晕车，我还是选了靠窗的长途座位。",
        en: "Although I get motion sickness, I still chose a window seat on the coach.",
        vocab: [["motion sickness", "晕车"], ["coach", "长途车"]],
      },
      {
        zh: "虽然旅店没有电梯，我们还是接受了顶楼的低价房。",
        en: "Although the guesthouse has no lift, we still took the cheaper room on the top floor.",
        vocab: [["guesthouse", "旅店"], ["top floor", "顶楼"]],
      },
      {
        zh: "虽然我带了转换插头，酒店的插座布局还是让我愣了一下。",
        en: "Although I packed a travel adaptor, the hotel sockets still confused me for a moment.",
        vocab: [["adaptor", "转换插头"], ["sockets", "插座"]],
      },
      {
        zh: "虽然导游说可以自由活动，我还是先问清集合地点。",
        en: "Although the guide allowed free time, I still confirmed the meeting point first.",
        vocab: [["free time", "自由活动"], ["meeting point", "集合地点"]],
      },
      {
        zh: "虽然夜班车很颠，我还是睡着了两小时。",
        en: "Although the overnight bus jolted badly, I still managed to sleep for two hours.",
        vocab: [["jolt", "颠簸"], ["overnight bus", "夜班车"]],
      },
    ],
  },
  {
    structure: "Even though + 从句, 主句",
    grammar: ["even though 强调既成事实", "常与 still / anyway 连用"],
    tips: "既成的延误、排队、天气用 even though，不要误用 even if。",
    items: [
      {
        zh: "即便航班显示准点，我还是提前到了值机柜台。",
        en: "Even though the flight showed on time, I still reached the check-in desk early.",
        vocab: [["on time", "准点"], ["check-in", "值机"]],
      },
      {
        zh: "即便护照还没快过期，我出发前还是又看了一眼日期。",
        en: "Even though my passport was not close to expiry, I still checked the date before leaving.",
        vocab: [["expiry", "到期"], ["check", "查看"]],
      },
      {
        zh: "即便换乘只有二十五分钟，我们还是决定不改签。",
        en: "Even though the transfer was only twenty-five minutes, we still decided against rebooking.",
        vocab: [["transfer", "换乘"], ["rebooking", "改签"]],
      },
      {
        zh: "即便景区门票含讲解，我还是自己先看了地图。",
        en: "Even though the ticket included a guide, I still studied the map myself first.",
        vocab: [["include", "包含"], ["study", "仔细看"]],
      },
      {
        zh: "即便出租车司机很熟路，我还是把地址发到了导航。",
        en: "Even though the taxi driver knew the area, I still sent the address to the map app.",
        vocab: [["area", "一带"], ["send", "发送"]],
      },
      {
        zh: "即便旅馆提供早餐，我可能还是会先出去买杯咖啡。",
        en: "Even though the inn provides breakfast, I might still go out for coffee first.",
        vocab: [["inn", "旅馆"], ["provide", "提供"]],
      },
      {
        zh: "即便河对面更近，我们还是走了有路灯的桥。",
        en: "Even though the opposite bank looked closer, we still crossed the lit bridge.",
        vocab: [["opposite bank", "对岸"], ["lit", "有灯光的"]],
      },
      {
        zh: "即便我带了雨衣，阵雨过后地面仍滑得厉害。",
        en: "Even though I brought a raincoat, the ground stayed dangerously slippery after the shower.",
        vocab: [["raincoat", "雨衣"], ["slippery", "滑的"]],
      },
    ],
  },
  {
    structure: "Rather than + doing, 主句",
    grammar: ["rather than 表示更稳妥的出行选择", "后接 doing"],
    tips: "旅行决策里常用 rather than 对比省事和稳妥。",
    items: [
      {
        zh: "与其在机场买水，我更想过安检前先喝完自带的。",
        en: "Rather than buying water after security, I would rather finish my own bottle beforehand.",
        vocab: [["rather than", "与其"], ["beforehand", "事先"]],
      },
      {
        zh: "与其把行程排到每一小时，我倾向于留下一段空白。",
        en: "Rather than scheduling every hour, I tend to leave a blank stretch in the day.",
        vocab: [["schedule", "排满"], ["stretch", "一段时间"]],
      },
      {
        zh: "与其凌晨打车去机场，我们决定提前一晚住航站楼附近。",
        en: "Rather than taking a taxi at dawn, we decided to stay near the terminal the night before.",
        vocab: [["dawn", "凌晨"], ["terminal", "航站楼"]],
      },
      {
        zh: "与其跟导游店里买纪念品，我宁愿去普通街市看看。",
        en: "Rather than buying souvenirs in the tour shop, I would rather browse an ordinary market.",
        vocab: [["souvenirs", "纪念品"], ["browse", "逛看"]],
      },
      {
        zh: "与其把护照放进托运行李，我当然是随身带着。",
        en: "Rather than packing my passport in checked luggage, I keep it in my hand luggage.",
        vocab: [["checked luggage", "托运行李"], ["hand luggage", "手提行李"]],
      },
      {
        zh: "与其在站台临时买零食，我提前在便利店备好了。",
        en: "Rather than buying snacks on the platform, I stocked up at a convenience store earlier.",
        vocab: [["platform", "站台"], ["stock up", "备好"]],
      },
      {
        zh: "与其追着网红点打卡，我可能先找一家能坐下的咖啡馆。",
        en: "Rather than chasing photo spots, I might first look for a cafe where I can sit down.",
        vocab: [["chase", "追着去"], ["photo spots", "打卡点"]],
      },
      {
        zh: "与其把现金换光，我倾向于先兑一小部分应急。",
        en: "Rather than exchanging all my cash, I tend to change a small amount for emergencies.",
        vocab: [["exchange", "兑换"], ["emergencies", "应急"]],
      },
    ],
  },
  {
    structure: "tend to / might + 出行习惯",
    grammar: ["tend to 描述一贯做法", "might 表示视情况而定"],
    tips: "把旅行经验说成倾向，比 always 更符合 B2 语气。",
    items: [
      {
        zh: "跨国航班上我往往先调手表，以免落地后算错时间。",
        en: "On long-haul flights I tend to reset my watch so I do not misread the time later.",
        vocab: [["long-haul", "长途的"], ["reset", "调校"]],
      },
      {
        zh: "如果接驳车很挤，我可能会再等下一班。",
        en: "If the shuttle is packed, I might wait for the next one.",
        vocab: [["shuttle", "接驳车"], ["packed", "很挤"]],
      },
      {
        zh: "我倾向于把酒店地址写成当地语言，发给司机看。",
        en: "I tend to write the hotel address in the local language for the driver.",
        vocab: [["local language", "当地语言"], ["address", "地址"]],
      },
      {
        zh: "夜里到达陌生车站时，我可能先找官方出租车点。",
        en: "When I arrive at an unfamiliar station at night, I might look for the official taxi rank first.",
        vocab: [["unfamiliar", "陌生的"], ["taxi rank", "出租车站点"]],
      },
      {
        zh: "我往往把充电器放进随身包，而不是托运箱。",
        en: "I tend to keep the charger in my carry-on rather than in the checked suitcase.",
        vocab: [["carry-on", "随身包"], ["checked suitcase", "托运箱"]],
      },
      {
        zh: "如果海关队形乱，我可能会先看指示牌再排队。",
        en: "If the customs queues look messy, I might read the signs before joining one.",
        vocab: [["customs", "海关"], ["join", "加入队伍"]],
      },
      {
        zh: "周末出城时我往往避开收费站最堵的那个口。",
        en: "When leaving the city at weekends I tend to avoid the busiest toll gate.",
        vocab: [["toll gate", "收费站口"], ["busiest", "最堵的"]],
      },
      {
        zh: "景点闭馆前一小时，我可能改去旁边的公园坐坐。",
        en: "In the last hour before closing time, I might sit in the nearby park instead.",
        vocab: [["closing time", "闭馆时间"], ["instead", "改为"]],
      },
    ],
  },
  {
    structure: "in the long run + 旅行决策",
    grammar: ["长期更省钱/更省事", "常对比眼前便宜"],
    tips: "旅行消费用 in the long run 谈交通卡、保险、行李选择。",
    items: [
      {
        zh: "从长期看，买张交通日票往往比每次扫码更省心。",
        en: "In the long run, a day pass tends to be simpler than tapping a card for every ride.",
        vocab: [["day pass", "日票"], ["tap", "扫、拍卡"]],
      },
      {
        zh: "从长期看，买旅行保险可能比省那笔保费更稳妥。",
        en: "In the long run, buying travel insurance might be safer than skipping the premium.",
        vocab: [["travel insurance", "旅行保险"], ["premium", "保费"]],
      },
      {
        zh: "从长期看，少带一件外套比超重罚款更划算。",
        en: "In the long run, leaving one jacket behind beats paying an overweight fee.",
        vocab: [["overweight fee", "超重费"], ["beat", "胜过"]],
      },
      {
        zh: "从长期看，住得离车站近，比每晚打车更省。",
        en: "In the long run, staying near the station saves more than taking taxis every night.",
        vocab: [["stay near", "住在……附近"], ["save", "节省"]],
      },
      {
        zh: "从长期看，学会几句问路的话，比一直靠翻译软件更自在。",
        en: "In the long run, learning a few asking-for-directions phrases feels easier than relying on apps.",
        vocab: [["phrases", "短句"], ["rely on", "依靠"]],
      },
      {
        zh: "从长期看，把票据拍照存着，退税时会少很多麻烦。",
        en: "In the long run, photographing receipts reduces a lot of trouble at tax refund desks.",
        vocab: [["tax refund", "退税"], ["reduce", "减少"]],
      },
      {
        zh: "从长期看，选可退改的票，可能比锁死最低价更灵活。",
        en: "In the long run, a refundable ticket might be more flexible than the cheapest locked fare.",
        vocab: [["refundable", "可退的"], ["fare", "票价"]],
      },
      {
        zh: "从长期看，把常用药品分装小瓶，比落地再找药店省事。",
        en: "In the long run, packing small bottles of usual medicine beats hunting for a pharmacy on arrival.",
        vocab: [["pack", "分装带上"], ["pharmacy", "药店"]],
      },
    ],
  },
  {
    structure: "If + had done, would + 原形（混合条件）",
    grammar: ["过去没做导致现在被动", "旅行里常见：没预订、没充电、没查时刻"],
    tips: "主句谈现在的结果，不要再写成 would have。",
    items: [
      {
        zh: "要是我昨晚就打印登机牌，现在就不会在机器前排队。",
        en: "If I had printed the boarding pass last night, I wouldn't be queuing at the machine now.",
        vocab: [["boarding pass", "登机牌"], ["queue", "排队"]],
      },
      {
        zh: "要是我提前锁了座位，这会儿就不会盯着过道座位发愁。",
        en: "If I had reserved a seat earlier, I wouldn't be staring at the aisle seats now.",
        vocab: [["reserve", "预留"], ["aisle", "过道"]],
      },
      {
        zh: "要是我把转换头放进背包，现在就不用向前台借。",
        en: "If I had put the adaptor in my backpack, I wouldn't be borrowing one from reception now.",
        vocab: [["adaptor", "转换头"], ["reception", "前台"]],
      },
      {
        zh: "要是我查过末班地铁，就不会站在空荡荡的站台。",
        en: "If I had checked the last metro time, I wouldn't be standing on an empty platform.",
        vocab: [["metro", "地铁"], ["empty", "空荡的"]],
      },
      {
        zh: "要是我把现金分开放，丢钱包也不会这么被动。",
        en: "If I had split the cash, I wouldn't feel this stuck after losing my wallet.",
        vocab: [["split", "分开放"], ["stuck", "被动、卡住"]],
      },
      {
        zh: "要是我早点申请签证，现在就不用改出行日期。",
        en: "If I had applied for the visa earlier, I wouldn't be changing the travel dates now.",
        vocab: [["apply for", "申请"], ["visa", "签证"]],
      },
      {
        zh: "要是我把雨披放进侧袋，这会儿就不用躲进便利店。",
        en: "If I had packed the poncho in the side pocket, I wouldn't be sheltering in a convenience store now.",
        vocab: [["poncho", "雨披"], ["shelter", "躲避"]],
      },
      {
        zh: "要是我记下了行李柜密码，现在就不会拦下一个工作人员。",
        en: "If I had written down the locker code, I wouldn't be stopping a staff member now.",
        vocab: [["locker", "行李柜"], ["staff member", "工作人员"]],
      },
    ],
  },
  {
    structure: "whereas / while + 出行对比",
    grammar: ["对比两种交通或住宿选择", "whereas 更正式"],
    tips: "对比“我 vs 同行的人”比单说 but 更清楚。",
    items: [
      {
        zh: "我宁愿坐夜火车，而同事坚持要订红眼航班。",
        en: "I would rather take the night train, whereas my colleague insists on a red-eye flight.",
        vocab: [["whereas", "而"], ["red-eye", "红眼航班"]],
      },
      {
        zh: "我喜欢步行逛老城，而他几乎每段路都叫车。",
        en: "I like walking through the old town, while he calls a car for almost every stretch.",
        vocab: [["old town", "老城"], ["stretch", "一段路"]],
      },
      {
        zh: "我倾向于住家庭旅馆，而她更想要带早餐的连锁店。",
        en: "I tend to stay in family-run inns, whereas she prefers a chain with breakfast included.",
        vocab: [["family-run", "家庭经营的"], ["chain", "连锁店"]],
      },
      {
        zh: "我看风景时会下车，而司机只想尽快开完高速。",
        en: "I get off to see the view, while the driver only wants to finish the highway quickly.",
        vocab: [["get off", "下车"], ["highway", "高速"]],
      },
      {
        zh: "我带折叠伞，而我弟弟只肯靠天气预报。",
        en: "I carry a folding umbrella, whereas my brother relies only on the weather forecast.",
        vocab: [["folding umbrella", "折叠伞"], ["rely on", "依靠"]],
      },
      {
        zh: "我可能先去博物馆，而朋友们想先找海鲜市场。",
        en: "I might visit the museum first, while my friends would rather find the seafood market.",
        vocab: [["whereas/while", "而"], ["seafood market", "海鲜市场"]],
      },
      {
        zh: "我把护照复印了一份，而有人觉得那是多余的。",
        en: "I photocopied my passport, whereas some travelers consider that unnecessary.",
        vocab: [["photocopy", "复印"], ["unnecessary", "多余的"]],
      },
      {
        zh: "我选靠窗座位看海岸，而她要过道方便起身。",
        en: "I choose a window seat for the coast, while she wants the aisle so she can stand easily.",
        vocab: [["coast", "海岸"], ["aisle", "过道"]],
      },
    ],
  },
  {
    structure: "as long as / provided that + 出行条件",
    grammar: ["只要证件/时间/天气满足", "从句用现在时"],
    tips: "provided that 稍正式，用在签证、保险、改签等条件上很自然。",
    items: [
      {
        zh: "只要护照还有六个月有效期，我就能提交这张表。",
        en: "I can submit this form as long as the passport has six months' validity left.",
        vocab: [["validity", "有效期"], ["submit", "提交"]],
      },
      {
        zh: "只要我们在检票前到，列车员通常不会为难。",
        en: "The conductor will not usually make a fuss, provided that we arrive before ticket checks.",
        vocab: [["conductor", "列车员"], ["make a fuss", "为难"]],
      },
      {
        zh: "只要行李不超重，我可能仍带那双厚靴子。",
        en: "I might still pack those heavy boots as long as the suitcase is not overweight.",
        vocab: [["overweight", "超重"], ["pack", "装进行李"]],
      },
      {
        zh: "只要轮渡没因风停航，下午我们就能到岛上。",
        en: "We can reach the island this afternoon, provided that the ferry is not cancelled in the wind.",
        vocab: [["ferry", "轮渡"], ["cancelled", "停航、取消"]],
      },
      {
        zh: "只要酒店能存行李，我们就能先去逛广场。",
        en: "We can walk around the square first as long as the hotel can store our bags.",
        vocab: [["store", "寄存"], ["square", "广场"]],
      },
      {
        zh: "只要我把插座转换器带上，房间再老也不怕。",
        en: "I will not worry about an old room, provided that I bring the plug converter.",
        vocab: [["plug converter", "转换器"], ["provided that", "只要"]],
      },
      {
        zh: "只要车站有人说英语，我就能把换乘问清楚。",
        en: "I can clarify the transfer as long as someone at the station speaks English.",
        vocab: [["clarify", "问清楚"], ["transfer", "换乘"]],
      },
      {
        zh: "只要退票手续费能接受，我可能改成下午那班。",
        en: "I might switch to the afternoon service as long as the change fee is acceptable.",
        vocab: [["change fee", "改签手续费"], ["acceptable", "可接受的"]],
      },
    ],
  },
  {
    structure: "despite + 名词短语",
    grammar: ["despite 后不接从句", "旅行里常接 delay / crowd / heat"],
    tips: "despite the delay 对；despite we were late 错。",
    items: [
      {
        zh: "尽管大巴晚点，司机还是把我们送到了渡口。",
        en: "Despite the delay, the coach driver still got us to the ferry pier.",
        vocab: [["despite", "尽管"], ["pier", "渡口"]],
      },
      {
        zh: "尽管行李转盘很慢，我的箱子最终还是出来了。",
        en: "Despite the slow baggage belt, my suitcase eventually came out.",
        vocab: [["baggage belt", "行李转盘"], ["eventually", "最终"]],
      },
      {
        zh: "尽管广场很挤，我们还是拍到了钟楼的正面。",
        en: "Despite the crowded square, we still photographed the front of the clock tower.",
        vocab: [["crowded", "拥挤的"], ["clock tower", "钟楼"]],
      },
      {
        zh: "尽管时差还没倒过来，我还是去市场走了一圈。",
        en: "Despite the jet lag, I still walked a loop around the market.",
        vocab: [["jet lag", "时差"], ["loop", "一圈"]],
      },
      {
        zh: "尽管山路很陡，我们还是拒绝了多收费的缆车。",
        en: "Despite the steep path, we still refused the overpriced cable car.",
        vocab: [["steep", "陡的"], ["overpriced", "要价过高的"]],
      },
      {
        zh: "尽管柜台员工很少，值机还是比我预想的快。",
        en: "Despite the short staff at the desk, check-in was quicker than I had expected.",
        vocab: [["short staff", "人手少"], ["quicker", "更快"]],
      },
      {
        zh: "尽管我带了厚袜子，石板路还是凉得明显。",
        en: "Despite the thick socks I packed, the stone streets still felt noticeably cold.",
        vocab: [["stone streets", "石板路"], ["noticeably", "明显地"]],
      },
      {
        zh: "尽管路边小吃很香，我还是先找有洗手处的店。",
        en: "Despite the tempting street snacks, I still looked for a place with a sink first.",
        vocab: [["tempting", "诱人的"], ["sink", "洗手处"]],
      },
    ],
  },
  {
    structure: "unless + 现在时",
    grammar: ["unless 排除唯一例外", "从句不用将来时"],
    tips: "unless the gate closes 比 if the gate does not close 更紧凑。",
    items: [
      {
        zh: "除非登机口改了，否则我们按屏幕上的编号走。",
        en: "We will follow the number on the screen unless the gate is changed.",
        vocab: [["unless", "除非"], ["gate", "登机口"]],
      },
      {
        zh: "除非风雨太大，否则我还是会走那段海边步道。",
        en: "I will still walk the coastal path unless the wind and rain get too strong.",
        vocab: [["coastal path", "海边步道"], ["unless", "除非"]],
      },
      {
        zh: "除非旅馆能推迟退房，否则我们中午前就得离开。",
        en: "We have to leave before noon unless the inn can delay check-out.",
        vocab: [["check-out", "退房"], ["delay", "推迟"]],
      },
      {
        zh: "除非我找到直达车，否则可能会在中转站再买票。",
        en: "I might buy another ticket at the junction unless I find a direct service.",
        vocab: [["junction", "中转站"], ["direct service", "直达车"]],
      },
      {
        zh: "除非海关要开箱，否则我不会把打包带剪开。",
        en: "I will not cut the packing strap unless customs asks me to open the case.",
        vocab: [["packing strap", "打包带"], ["customs", "海关"]],
      },
      {
        zh: "除非汇率突然变差，否则我落地后再换一部分现金。",
        en: "I will change some cash on arrival unless the rate suddenly worsens.",
        vocab: [["rate", "汇率"], ["worsen", "变差"]],
      },
      {
        zh: "除非巴士站没有座位，否则我不会改坐更贵的小巴。",
        en: "I will not switch to a pricier minibus unless the coach station has no seats left.",
        vocab: [["pricier", "更贵的"], ["minibus", "小巴"]],
      },
      {
        zh: "除非我确认了插座制式，否则不会把吹风机插上去。",
        en: "I will not plug in the hair dryer unless I have confirmed the socket type.",
        vocab: [["plug in", "插入电源"], ["socket type", "插座制式"]],
      },
    ],
  },
  {
    structure: "would rather + 原形 than + 原形",
    grammar: ["宁愿选更稳的出行方式", "两边都用原形"],
    tips: "I'd rather miss a shop than miss the last train。",
    items: [
      {
        zh: "我宁愿多走十分钟，也不想在地下通道里迷路。",
        en: "I would rather walk ten extra minutes than get lost in the underground passages.",
        vocab: [["underground passages", "地下通道"], ["get lost", "迷路"]],
      },
      {
        zh: "我宁愿坐慢一点的船，也不想在风浪里坐快艇。",
        en: "I would rather take the slower boat than sit in a speedboat on rough water.",
        vocab: [["speedboat", "快艇"], ["rough", "风浪大的"]],
      },
      {
        zh: "我宁愿提前一晚整理背包，也不想早晨把东西漏下。",
        en: "I would rather pack the backpack the night before than leave something behind in the morning.",
        vocab: [["pack", "收拾行李"], ["leave behind", "漏下"]],
      },
      {
        zh: "我宁愿住没有景观的房间，也不想走廊整夜嘈杂。",
        en: "I would rather take a room without a view than sleep beside a noisy corridor all night.",
        vocab: [["view", "景观"], ["corridor", "走廊"]],
      },
      {
        zh: "我宁愿自己看时刻表，也不想完全听车站广播。",
        en: "I would rather read the timetable myself than rely entirely on station announcements.",
        vocab: [["timetable", "时刻表"], ["announcements", "广播"]],
      },
      {
        zh: "我宁愿少逛一家店，也不想误了去机场的巴士。",
        en: "I would rather skip one shop than miss the bus to the airport.",
        vocab: [["skip", "少去、跳过"], ["miss", "误了"]],
      },
      {
        zh: "我宁愿带轻便的日用袋，也不想整天拖着拉杆箱。",
        en: "I would rather carry a light day bag than drag a suitcase around all day.",
        vocab: [["day bag", "日用袋"], ["drag", "拖着"]],
      },
      {
        zh: "我宁愿把明信片寄回家，也不想在行李箱里压坏。",
        en: "I would rather post the postcards home than crush them inside the suitcase.",
        vocab: [["post", "邮寄"], ["crush", "压坏"]],
      },
    ],
  },
  {
    structure: "so that / in case + 出行预防",
    grammar: ["so that 为了顺利", "in case 防止突发"],
    tips: "in case the train is cancelled，用现在时。",
    items: [
      {
        zh: "我把行程写在纸上，以便手机没电时还能找到旅馆。",
        en: "I wrote the plan on paper so that I could still find the inn if my phone died.",
        vocab: [["so that", "以便"], ["die", "没电"]],
      },
      {
        zh: "我多带一副眼镜，以防镜片在路上裂了。",
        en: "I packed a spare pair of glasses in case a lens cracks on the road.",
        vocab: [["spare", "备用的"], ["lens", "镜片"]],
      },
      {
        zh: "我们提前网上值机，以便把靠前的座位留下。",
        en: "We checked in online early so that we could keep the seats nearer the front.",
        vocab: [["check in", "值机"], ["nearer", "更靠前的"]],
      },
      {
        zh: "我把常用药分开放，以免托运箱被延误时手里没药。",
        en: "I split my usual pills so that I would still have medicine if the suitcase was delayed.",
        vocab: [["split", "分开"], ["pills", "药片"]],
      },
      {
        zh: "我截了列车车厢号，以防站台上临时找不到位置。",
        en: "I screenshot the coach number in case I cannot find my place on the platform.",
        vocab: [["screenshot", "截图"], ["coach number", "车厢号"]],
      },
      {
        zh: "我们把集合时间提前十五分钟，以免有人在地铁里耽搁。",
        en: "We brought the meeting time forward by fifteen minutes so that a metro delay would not scatter us.",
        vocab: [["bring forward", "提前"], ["scatter", "走散"]],
      },
      {
        zh: "我在包里放了复印件，以防原件要交给柜台保管。",
        en: "I kept photocopies in my bag in case the desk needs to hold the originals.",
        vocab: [["photocopies", "复印件"], ["originals", "原件"]],
      },
      {
        zh: "我把充电宝先充满，以便过安检后还能给相机充电。",
        en: "I fully charged the power bank so that I could still charge the camera after security.",
        vocab: [["power bank", "充电宝"], ["fully", "完全地"]],
      },
    ],
  },
];

const work: SentenceGroup[] = [
  {
    structure: "Although + 从句, 主句",
    grammar: ["although 承认困难", "主句给出仍采取的职场做法"],
    tips: "会上用 although 先承认限制，再提出仍要推进的一点。",
    items: [
      {
        zh: "虽然截止日期很紧，我还是先把范围写清楚。",
        en: "Although the deadline is tight, I still wrote the scope down first.",
        vocab: [["deadline", "截止日期"], ["scope", "范围"]],
      },
      {
        zh: "虽然客户改了两次需求，我们还是按原优先级排期。",
        en: "Although the client changed the brief twice, we still scheduled work by the original priorities.",
        vocab: [["brief", "需求说明"], ["priorities", "优先级"]],
      },
      {
        zh: "虽然会议室被占了，我们还是站着把决议对齐了。",
        en: "Although the meeting room was taken, we still aligned the decision while standing.",
        vocab: [["align", "对齐"], ["decision", "决议"]],
      },
      {
        zh: "虽然数据还不完整，我还是先发出了风险提示。",
        en: "Although the data is still incomplete, I still sent a risk note first.",
        vocab: [["incomplete", "不完整的"], ["risk note", "风险提示"]],
      },
      {
        zh: "虽然我不是主讲人，我还是把演示稿检查了一遍。",
        en: "Although I am not the main speaker, I still checked the slides once more.",
        vocab: [["main speaker", "主讲人"], ["slides", "演示稿"]],
      },
      {
        zh: "虽然加班申请还没批，我可能先把草稿存进共享盘。",
        en: "Although overtime has not been approved, I might save the draft to the shared drive first.",
        vocab: [["overtime", "加班"], ["shared drive", "共享盘"]],
      },
      {
        zh: "虽然跨部门邮件很长，我还是只回复了需要我拍板的部分。",
        en: "Although the cross-team email was long, I still replied only to the part that needed my call.",
        vocab: [["cross-team", "跨部门的"], ["call", "拍板"]],
      },
      {
        zh: "虽然打印机又卡纸，我还是赶在会前把一页摘要打出来了。",
        en: "Although the printer jammed again, I still printed a one-page summary before the meeting.",
        vocab: [["jam", "卡纸"], ["summary", "摘要"]],
      },
    ],
  },
  {
    structure: "Even though + 从句, 主句",
    grammar: ["even though 强调已知阻力", "职场里常接 still / anyway"],
    tips: "已知人手不足、系统慢，用 even though 比 if 更准确。",
    items: [
      {
        zh: "即便预算被砍了一截，我们还是保住了测试时间。",
        en: "Even though the budget was cut, we still protected time for testing.",
        vocab: [["budget", "预算"], ["protect time", "保住时间"]],
      },
      {
        zh: "即便我已经抄送了经理，我还是当面又说了一遍风险。",
        en: "Even though I had already copied my manager, I still stated the risk in person.",
        vocab: [["copy", "抄送"], ["in person", "当面"]],
      },
      {
        zh: "即便系统响应很慢，客服还是把工单记完整了。",
        en: "Even though the system responded slowly, support still logged the ticket in full.",
        vocab: [["respond", "响应"], ["log", "登记"]],
      },
      {
        zh: "即便周会可以线上开，我还是带了纸质议程。",
        en: "Even though the weekly meeting can be online, I still brought a paper agenda.",
        vocab: [["weekly meeting", "周会"], ["agenda", "议程"]],
      },
      {
        zh: "即便对方语气很冲，我还是把事实和请求分开写。",
        en: "Even though the other side sounded sharp, I still separated facts from requests.",
        vocab: [["sharp", "冲、尖刻"], ["separate A from B", "把 A 和 B 分开"]],
      },
      {
        zh: "即便我可以稍后签字，我还是先确认了数字来源。",
        en: "Even though I could sign later, I still confirmed where the numbers came from.",
        vocab: [["sign", "签字"], ["confirm", "确认"]],
      },
      {
        zh: "即便实习生也能做初稿，我还是会抽查关键段落。",
        en: "Even though an intern can draft the first version, I still spot-check the key paragraphs.",
        vocab: [["intern", "实习生"], ["spot-check", "抽查"]],
      },
      {
        zh: "即便会议室隔音不好，我们还是把敏感数字改口头说。",
        en: "Even though the room is poorly soundproofed, we still switched sensitive figures to a spoken update.",
        vocab: [["soundproofed", "隔音的"], ["figures", "数字"]],
      },
    ],
  },
  {
    structure: "Rather than + doing, 主句",
    grammar: ["rather than 用来避开无效动作", "后接 doing"],
    tips: "职场里 rather than 常对比“争论/承诺”和“先对齐”。",
    items: [
      {
        zh: "与其在群里来回猜，我宁愿开一个十五分钟的短会。",
        en: "Rather than guessing back and forth in the group chat, I would rather hold a fifteen-minute huddle.",
        vocab: [["back and forth", "来回"], ["huddle", "短会"]],
      },
      {
        zh: "与其把附件再发一遍，我倾向于给一个带权限的链接。",
        en: "Rather than sending the attachment again, I tend to share a link with the right access.",
        vocab: [["attachment", "附件"], ["access", "权限"]],
      },
      {
        zh: "与其口头答应周五，我宁愿先看日历再回。",
        en: "Rather than promising Friday out loud, I would rather check the calendar first.",
        vocab: [["promise", "答应"], ["calendar", "日历"]],
      },
      {
        zh: "与其把所有意见揉进一稿，我们先标出必须改的三处。",
        en: "Rather than folding every comment into one draft, we marked the three required changes first.",
        vocab: [["fold into", "揉进"], ["required", "必须的"]],
      },
      {
        zh: "与其让新同事猜流程，我写了半页交接说明。",
        en: "Rather than letting the new colleague guess the process, I wrote a half-page handover note.",
        vocab: [["handover", "交接"], ["process", "流程"]],
      },
      {
        zh: "与其在截止日期当天加班堆功能，我可能先砍掉次要项。",
        en: "Rather than cramming features on the due date, I might cut the secondary items first.",
        vocab: [["cram", "硬塞"], ["secondary", "次要的"]],
      },
      {
        zh: "与其把批评写进公开频道，我选择私下先问一句。",
        en: "Rather than posting criticism in a public channel, I chose to ask one question privately first.",
        vocab: [["criticism", "批评"], ["privately", "私下"]],
      },
      {
        zh: "与其等完美数据，我们先用抽样结果做决策。",
        en: "Rather than waiting for perfect data, we made the call with a sample first.",
        vocab: [["perfect data", "完美数据"], ["sample", "抽样"]],
      },
    ],
  },
  {
    structure: "tend to / might + 职场习惯",
    grammar: ["tend to 降低绝对化", "might 表示尚未决定"],
    tips: "汇报时用 tend to / might，比 we always / we will 更稳。",
    items: [
      {
        zh: "周一早上我往往先处理隔夜工单，再看新邮件。",
        en: "On Monday mornings I tend to clear overnight tickets before I open new mail.",
        vocab: [["clear", "处理完"], ["tickets", "工单"]],
      },
      {
        zh: "如果议题超过三个，我可能会建议拆成两次会。",
        en: "If there are more than three topics, I might suggest splitting them into two meetings.",
        vocab: [["topics", "议题"], ["split", "拆开"]],
      },
      {
        zh: "我倾向于把行动项写成谁、何时、做什么。",
        en: "I tend to write action items as who, when, and what needs doing.",
        vocab: [["action items", "行动项"], ["need doing", "需要完成"]],
      },
      {
        zh: "跨时区协作时，我可能把结论放在邮件最前面。",
        en: "When working across time zones, I might put the conclusion at the top of the email.",
        vocab: [["time zones", "时区"], ["conclusion", "结论"]],
      },
      {
        zh: "我往往在会后十分钟内把纪要发掉。",
        en: "I tend to send the minutes within ten minutes after the meeting.",
        vocab: [["minutes", "会议纪要"], ["within", "在……之内"]],
      },
      {
        zh: "如果供应商报价差很大，我可能会先问交货期。",
        en: "If the vendor quotes differ widely, I might ask about delivery dates first.",
        vocab: [["vendor", "供应商"], ["quotes", "报价"]],
      },
      {
        zh: "我倾向于把敏感数字放进加密表格，而不是聊天窗口。",
        en: "I tend to put sensitive figures in an encrypted sheet rather than in the chat window.",
        vocab: [["encrypted", "加密的"], ["figures", "数字"]],
      },
      {
        zh: "周五下午我可能先把下周的阻塞项标红。",
        en: "On Friday afternoons I might mark next week's blockers in red first.",
        vocab: [["blockers", "阻塞项"], ["mark", "标出"]],
      },
    ],
  },
  {
    structure: "in the long run + 工作取舍",
    grammar: ["长期成本/信任/质量", "对比短期交差"],
    tips: "说服同事时 in the long run 比 simply better 更具体。",
    items: [
      {
        zh: "从长期看，把接口写清楚比这周多赶一个功能更值。",
        en: "In the long run, documenting the interface is worth more than shipping one extra feature this week.",
        vocab: [["document", "写清楚、记录"], ["ship", "交付上线"]],
      },
      {
        zh: "从长期看，培训新人可能比反复代做更省时间。",
        en: "In the long run, training the newcomer might save more time than doing the task for them.",
        vocab: [["newcomer", "新人"], ["save time", "省时间"]],
      },
      {
        zh: "从长期看，拒绝不切实际的档期能保护团队信誉。",
        en: "In the long run, refusing an unrealistic slot protects the team's credibility.",
        vocab: [["unrealistic", "不切实际的"], ["credibility", "信誉"]],
      },
      {
        zh: "从长期看，统一文件名会减少大量找文档的时间。",
        en: "In the long run, consistent file names cut a lot of time spent hunting for documents.",
        vocab: [["consistent", "统一的"], ["hunt for", "寻找"]],
      },
      {
        zh: "从长期看，把错误公开复盘，比私下抱怨更有用。",
        en: "In the long run, reviewing mistakes openly is more useful than complaining in private.",
        vocab: [["review", "复盘"], ["in private", "私下"]],
      },
      {
        zh: "从长期看，少接一个含糊项目，可能让核心工作更稳。",
        en: "In the long run, turning down one vague project might keep the core work steadier.",
        vocab: [["turn down", "少接、拒绝"], ["vague", "含糊的"]],
      },
      {
        zh: "从长期看，给客户一个可检查的节点，比一次交成品更安全。",
        en: "In the long run, giving the client a checkpoint is safer than delivering everything at the end.",
        vocab: [["checkpoint", "可检查节点"], ["deliver", "交付"]],
      },
      {
        zh: "从长期看，把权限收紧，能减少不少误删风险。",
        en: "In the long run, tightening access rights reduces quite a few accidental-deletion risks.",
        vocab: [["tighten", "收紧"], ["accidental", "误操作的"]],
      },
    ],
  },
  {
    structure: "If + had done, would + 原形（混合条件）",
    grammar: ["过去沟通不足导致现在被动", "主句谈现在"],
    tips: "复盘时用混合条件，比单纯道歉更准确。",
    items: [
      {
        zh: "要是我们上周就锁定需求，现在就不会还在改表格。",
        en: "If we had locked the requirements last week, we wouldn't still be revising the spreadsheet now.",
        vocab: [["lock", "锁定"], ["revise", "修改"]],
      },
      {
        zh: "要是我把权限提前开通，同事现在就不用干等。",
        en: "If I had granted access earlier, my colleague wouldn't be waiting around now.",
        vocab: [["grant access", "开通权限"], ["wait around", "干等"]],
      },
      {
        zh: "要是我把会议纪要当晚发出，今天就不会有两套说法。",
        en: "If I had sent the minutes that night, we wouldn't have two versions of the story today.",
        vocab: [["minutes", "纪要"], ["versions", "说法、版本"]],
      },
      {
        zh: "要是测试用例写全了，我们现在就不必紧急回滚。",
        en: "If the test cases had been complete, we wouldn't be rolling the release back now.",
        vocab: [["test cases", "测试用例"], ["roll back", "回滚"]],
      },
      {
        zh: "要是我把报价单位问清，此刻就不会在会上卡住。",
        en: "If I had clarified the quote unit, I wouldn't be stuck in the meeting now.",
        vocab: [["clarify", "问清"], ["stuck", "卡住"]],
      },
      {
        zh: "要是我备份了那份合同，现在就不用找法务重寄。",
        en: "If I had backed up the contract, I wouldn't be asking legal to resend it now.",
        vocab: [["back up", "备份"], ["legal", "法务"]],
      },
      {
        zh: "要是我提前拒了那个冲突会议，我就不会一边听一边回消息。",
        en: "If I had declined the clashing meeting earlier, I wouldn't be listening and messaging at once.",
        vocab: [["decline", "拒绝"], ["clashing", "时间冲突的"]],
      },
      {
        zh: "要是我把示例数据洗干净，演示现在就不会被笑场打断。",
        en: "If I had cleaned the sample data, the demo wouldn't be getting interrupted by laughter now.",
        vocab: [["sample data", "示例数据"], ["demo", "演示"]],
      },
    ],
  },
  {
    structure: "whereas / while + 协作对比",
    grammar: ["对比角色或方法", "whereas 适合书面纪要"],
    tips: "说明分工时，whereas 比 but 更中性。",
    items: [
      {
        zh: "我负责对外口径，而同事盯着内部排期。",
        en: "I handle the external wording, whereas my colleague watches the internal schedule.",
        vocab: [["external", "对外的"], ["wording", "口径、措辞"]],
      },
      {
        zh: "设计倾向于先出草图，而工程更想先定接口。",
        en: "Design tends to sketch first, while engineering would rather fix the interface first.",
        vocab: [["sketch", "出草图"], ["interface", "接口"]],
      },
      {
        zh: "我可能把风险写进邮件，而经理更想在会上口头说。",
        en: "I might put the risks in an email, whereas the manager would rather mention them verbally.",
        vocab: [["verbally", "口头地"], ["mention", "提到"]],
      },
      {
        zh: "销售看重签约速度，而财务更在意付款条款。",
        en: "Sales values signing speed, while finance cares more about the payment terms.",
        vocab: [["signing speed", "签约速度"], ["payment terms", "付款条款"]],
      },
      {
        zh: "我喜欢会前发材料，而有人习惯到场再看。",
        en: "I prefer circulating materials beforehand, whereas some people read them only in the room.",
        vocab: [["circulate", "分发"], ["beforehand", "会前"]],
      },
      {
        zh: "远程同事异步更新，而驻场团队仍保持每日站会。",
        en: "Remote colleagues update asynchronously, while the on-site team still keeps a daily standup.",
        vocab: [["asynchronously", "异步地"], ["standup", "站会"]],
      },
      {
        zh: "我把错误记进日志，而他更想立刻热修复。",
        en: "I log the error first, whereas he would rather ship a hotfix immediately.",
        vocab: [["log", "记入日志"], ["hotfix", "热修复"]],
      },
      {
        zh: "我倾向少承诺多交付，而客户常希望相反。",
        en: "I tend to promise less and deliver more, while clients often hope for the opposite.",
        vocab: [["promise", "承诺"], ["opposite", "相反的情况"]],
      },
    ],
  },
  {
    structure: "as long as / provided that + 工作条件",
    grammar: ["只要边界清楚就可推进", "从句用现在时"],
    tips: "谈授权和范围时，provided that 显得更严谨。",
    items: [
      {
        zh: "只要范围不再扩大，我们周五前可以交出初稿。",
        en: "We can deliver a first draft by Friday as long as the scope does not grow again.",
        vocab: [["first draft", "初稿"], ["grow", "扩大"]],
      },
      {
        zh: "只要法务点头，我就可以把合同发回去。",
        en: "I can send the contract back, provided that legal has signed off.",
        vocab: [["sign off", "点头批准"], ["legal", "法务"]],
      },
      {
        zh: "只要数据不涉及个人身份，我们或许能用外部工具。",
        en: "We might use an external tool as long as the data includes no personal identities.",
        vocab: [["external tool", "外部工具"], ["identities", "身份信息"]],
      },
      {
        zh: "只要供应商能按周供货，生产线就不必停。",
        en: "The line need not stop, provided that the supplier can deliver weekly.",
        vocab: [["supplier", "供应商"], ["line", "生产线"]],
      },
      {
        zh: "只要把验收标准写进邮件，后续争执会少很多。",
        en: "Later disputes will drop as long as we put the acceptance criteria in the email.",
        vocab: [["disputes", "争执"], ["acceptance criteria", "验收标准"]],
      },
      {
        zh: "只要我拿到最终数字，下午就可以更新看板。",
        en: "I can update the board this afternoon, provided that I receive the final numbers.",
        vocab: [["board", "看板"], ["final numbers", "最终数字"]],
      },
      {
        zh: "只要会议不超过半小时，我可以改到午饭前。",
        en: "I can move it before lunch as long as the meeting stays under thirty minutes.",
        vocab: [["move", "改期"], ["stay under", "不超过"]],
      },
      {
        zh: "只要备份成功，我们今晚就可以切换系统。",
        en: "We can switch systems tonight, provided that the backup completes successfully.",
        vocab: [["backup", "备份"], ["switch", "切换"]],
      },
    ],
  },
  {
    structure: "despite + 名词 / 动名词",
    grammar: ["despite 接阻力名词", "不能直接接句子"],
    tips: "despite limited time 很常用；不要写成 despite we had little time。",
    items: [
      {
        zh: "尽管人手有限，我们还是按时交出了试点。",
        en: "Despite limited staff, we still delivered the pilot on schedule.",
        vocab: [["limited staff", "人手有限"], ["pilot", "试点"]],
      },
      {
        zh: "尽管网络波动，远程同事还是把演示讲完了。",
        en: "Despite the unstable network, the remote colleague still finished the presentation.",
        vocab: [["unstable", "不稳定的"], ["presentation", "演示"]],
      },
      {
        zh: "尽管反馈刺耳，产品还是留下了两条真正有用的。",
        en: "Despite the harsh feedback, the product team still kept two genuinely useful points.",
        vocab: [["harsh", "刺耳的"], ["genuinely", "真正地"]],
      },
      {
        zh: "尽管我只有二十分钟，我还是把清单过了一遍。",
        en: "Despite having only twenty minutes, I still walked through the checklist.",
        vocab: [["walk through", "过一遍"], ["checklist", "清单"]],
      },
      {
        zh: "尽管供应商改期，我们还是保住了对外口径。",
        en: "Despite the supplier's date change, we still kept the external message consistent.",
        vocab: [["date change", "改期"], ["consistent", "一致的"]],
      },
      {
        zh: "尽管会议室没有投屏，我们还是用纸把流程画清了。",
        en: "Despite the missing projector, we still sketched the process clearly on paper.",
        vocab: [["projector", "投屏"], ["sketch", "画出"]],
      },
      {
        zh: "尽管我很想立刻回复，我还是先核对了合同条款。",
        en: "Despite wanting to reply at once, I still checked the contract clause first.",
        vocab: [["clause", "条款"], ["at once", "立刻"]],
      },
      {
        zh: "尽管季度目标已经很高，我们还是拒绝了无边界的追加。",
        en: "Despite an already high quarterly target, we still refused open-ended extras.",
        vocab: [["quarterly target", "季度目标"], ["open-ended", "无边界的"]],
      },
    ],
  },
  {
    structure: "unless + 现在时",
    grammar: ["unless 设红线", "从句不用 will"],
    tips: "unless the client signs 比 if the client does not sign 更干脆。",
    items: [
      {
        zh: "除非客户书面确认，否则我们不会开始定制开发。",
        en: "We will not start custom development unless the client confirms it in writing.",
        vocab: [["custom", "定制的"], ["in writing", "书面"]],
      },
      {
        zh: "除非备份完成，否则今晚不能切换数据库。",
        en: "We cannot switch the database tonight unless the backup has finished.",
        vocab: [["database", "数据库"], ["unless", "除非"]],
      },
      {
        zh: "除非议题真正紧急，否则我不会把人从休假里拉回来。",
        en: "I will not pull anyone back from leave unless the issue is genuinely urgent.",
        vocab: [["leave", "休假"], ["urgent", "紧急的"]],
      },
      {
        zh: "除非报价含税说明清楚，否则采购可能拒签。",
        en: "Procurement might refuse to sign unless the quote states the tax clearly.",
        vocab: [["procurement", "采购"], ["tax", "税"]],
      },
      {
        zh: "除非我看到日志，否则没法判断是权限问题还是缓存。",
        en: "I cannot tell whether it is access or cache unless I see the logs.",
        vocab: [["logs", "日志"], ["cache", "缓存"]],
      },
      {
        zh: "除非会议室能用，否则我们改在开放工位短会。",
        en: "We will huddle at the open desks unless a meeting room becomes free.",
        vocab: [["huddle", "短会"], ["open desks", "开放工位"]],
      },
      {
        zh: "除非翻译校对完，否则宣传页不能上线。",
        en: "The brochure cannot go live unless the translation has been proofread.",
        vocab: [["brochure", "宣传页"], ["proofread", "校对"]],
      },
      {
        zh: "除非老板明确授权，否则我不会对外承诺折扣。",
        en: "I will not promise an external discount unless the boss clearly authorizes it.",
        vocab: [["authorize", "授权"], ["discount", "折扣"]],
      },
    ],
  },
  {
    structure: "would rather + 原形 than + 原形",
    grammar: ["宁愿承担短期不便", "两边原形"],
    tips: "提出更稳妥方案时，would rather 比 we must 更合作。",
    items: [
      {
        zh: "我宁愿把发布推迟一天，也不想带着已知缺陷上线。",
        en: "I would rather delay the release by one day than go live with a known defect.",
        vocab: [["defect", "缺陷"], ["go live", "上线"]],
      },
      {
        zh: "我宁愿少写形容词，也要把数字写准。",
        en: "I would rather use fewer adjectives than get the numbers wrong.",
        vocab: [["adjectives", "形容词"], ["get ... wrong", "写错"]],
      },
      {
        zh: "我宁愿当面解释一次，也不想让邮件被断章取义。",
        en: "I would rather explain it once in person than let the email be taken out of context.",
        vocab: [["in person", "当面"], ["out of context", "断章取义"]],
      },
      {
        zh: "我宁愿把任务拆小，也不想一个人扛整周。",
        en: "I would rather break the task into smaller pieces than carry the whole week alone.",
        vocab: [["break into", "拆成"], ["carry", "扛"]],
      },
      {
        zh: "我宁愿现在标红风险，也不想周五再解释延误。",
        en: "I would rather flag the risk now than explain a delay on Friday.",
        vocab: [["flag", "标出"], ["delay", "延误"]],
      },
      {
        zh: "我宁愿拒绝模糊表扬，也想要一条可执行的反馈。",
        en: "I would rather skip vague praise than miss one actionable comment.",
        vocab: [["vague praise", "模糊表扬"], ["actionable", "可执行的"]],
      },
      {
        zh: "我宁愿多抄送一个人，也不想信息只停在我这里。",
        en: "I would rather copy one extra person than keep the information only with me.",
        vocab: [["copy", "抄送"], ["keep ... with", "只留在"]],
      },
      {
        zh: "我宁愿把演示缩短，也不想超时占下个会的时间。",
        en: "I would rather shorten the demo than overrun into the next meeting.",
        vocab: [["shorten", "缩短"], ["overrun", "超时占用"]],
      },
    ],
  },
  {
    structure: "so that / in case + 协作目的",
    grammar: ["so that 保证对齐", "in case 预防失误"],
    tips: "写邮件目的句时，so that 比 for 更清楚。",
    items: [
      {
        zh: "我把版本号写进标题，以便大家打开的是同一份。",
        en: "I put the version number in the subject so that everyone opens the same file.",
        vocab: [["version number", "版本号"], ["subject", "标题"]],
      },
      {
        zh: "我备份了客户名单，以防表格被误覆盖。",
        en: "I backed up the client list in case the sheet gets overwritten by mistake.",
        vocab: [["back up", "备份"], ["overwrite", "覆盖"]],
      },
      {
        zh: "我们提前十分钟进会，以便测试麦克风和投屏。",
        en: "We joined ten minutes early so that we could test the microphone and the screen share.",
        vocab: [["screen share", "投屏"], ["microphone", "麦克风"]],
      },
      {
        zh: "我把关键数字标黄，以免扫邮件的人漏掉。",
        en: "I highlighted the key figures so that people skimming the email would not miss them.",
        vocab: [["highlight", "标出"], ["skim", "扫读"]],
      },
      {
        zh: "我准备了备用链接，以防主会议室系统掉线。",
        en: "I prepared a backup link in case the main room system drops.",
        vocab: [["backup link", "备用链接"], ["drop", "掉线"]],
      },
      {
        zh: "我把职责写成表格，以便新人第一周就能对上人。",
        en: "I put the roles in a table so that newcomers can match names in week one.",
        vocab: [["roles", "职责"], ["match", "对上"]],
      },
      {
        zh: "我先问清时区，以免把晨会开到别人半夜。",
        en: "I confirmed the time zone first so that the morning meeting would not land at midnight for someone.",
        vocab: [["time zone", "时区"], ["land", "落到"]],
      },
      {
        zh: "我把合同草稿设成只读，以防别人直接在原文件上改。",
        en: "I set the contract draft to read-only in case someone edits the original file directly.",
        vocab: [["read-only", "只读"], ["original file", "原文件"]],
      },
    ],
  },
];

const study: SentenceGroup[] = [
  {
    structure: "Although + 从句, 主句",
    grammar: ["although 承认学习障碍", "主句仍坚持有效方法"],
    tips: "学习场景里 although 常用来承认累、难，但方法不改。",
    items: [
      {
        zh: "虽然这篇阅读很长，我还是先标出了作者的立场。",
        en: "Although the reading was long, I still marked the writer's position first.",
        vocab: [["reading", "阅读材料"], ["position", "立场"]],
      },
      {
        zh: "虽然我已经听过这课，我还是把例词重新抄了一遍。",
        en: "Although I had already heard the lesson, I still copied the example words again.",
        vocab: [["lesson", "课"], ["example words", "例词"]],
      },
      {
        zh: "虽然单词表很熟，默写时我还是漏了两个搭配。",
        en: "Although the word list felt familiar, I still missed two collocations in the dictation.",
        vocab: [["collocations", "搭配"], ["dictation", "默写"]],
      },
      {
        zh: "虽然图书馆座位少，我还是提前到了二十分钟。",
        en: "Although library seats were limited, I still arrived twenty minutes early.",
        vocab: [["limited", "有限的"], ["arrive", "到达"]],
      },
      {
        zh: "虽然听力语速偏快，我还是先抓问题再听细节。",
        en: "Although the listening was fast, I still read the questions before catching details.",
        vocab: [["listening", "听力"], ["details", "细节"]],
      },
      {
        zh: "虽然我今晚很困，我可能还是把错题原因写完。",
        en: "Although I am sleepy tonight, I might still write down why I got those items wrong.",
        vocab: [["sleepy", "困的"], ["items", "题目"]],
      },
      {
        zh: "虽然小组讨论跑题了，我还是把结论记进笔记本。",
        en: "Although the group discussion drifted, I still put the conclusion in my notebook.",
        vocab: [["drift", "跑题"], ["conclusion", "结论"]],
      },
      {
        zh: "虽然这道题能蒙对，我还是把推导写了出来。",
        en: "Although I could guess the item, I still wrote the reasoning out.",
        vocab: [["guess", "蒙"], ["reasoning", "推导"]],
      },
    ],
  },
  {
    structure: "Even though + 从句, 主句",
    grammar: ["even though 强调已知困难仍继续", "后接完整从句"],
    tips: "even though the exam is close 比 even the exam 正确。",
    items: [
      {
        zh: "即便答案已经公布，我还是先自己做完再对照。",
        en: "Even though the answers were posted, I still finished the set before checking.",
        vocab: [["posted", "公布"], ["set", "一套题"]],
      },
      {
        zh: "即便老师说可以查词典，我还是先靠上下文猜。",
        en: "Even though the teacher allowed a dictionary, I still guessed from context first.",
        vocab: [["dictionary", "词典"], ["context", "上下文"]],
      },
      {
        zh: "即便这章我读过，复习时我还是画出了新的疑问。",
        en: "Even though I had read the chapter, I still circled new questions while reviewing.",
        vocab: [["chapter", "章"], ["circle", "圈出"]],
      },
      {
        zh: "即便口语搭档迟到，我们还是把三分钟独白练完了。",
        en: "Even though my speaking partner was late, we still finished the three-minute monologue.",
        vocab: [["speaking partner", "口语搭档"], ["monologue", "独白"]],
      },
      {
        zh: "即便公式我背得下来，我还是又做了两道应用题。",
        en: "Even though I can recite the formula, I still worked two applied problems.",
        vocab: [["recite", "背出"], ["applied", "应用的"]],
      },
      {
        zh: "即便教室很热，我还是把手机收进袋子以免分心。",
        en: "Even though the classroom was hot, I still put my phone in the bag to avoid distraction.",
        vocab: [["distraction", "分心"], ["avoid", "以免"]],
      },
      {
        zh: "即便翻译软件很方便，我还是先自己写再对照。",
        en: "Even though the translation app is convenient, I still draft the sentence myself first.",
        vocab: [["draft", "先写一稿"], ["convenient", "方便的"]],
      },
      {
        zh: "即便期末还早，我可能每周都把笔记压缩一页。",
        en: "Even though finals are still distant, I might compress my notes onto one page each week.",
        vocab: [["finals", "期末"], ["compress", "压缩"]],
      },
    ],
  },
  {
    structure: "Rather than + doing, 主句",
    grammar: ["rather than 对比低效学法", "后接 doing"],
    tips: "学习建议里 rather than 用来替换刷题量、死记硬背。",
    items: [
      {
        zh: "与其把生词抄三遍，我更想把它们放进一句自己的话。",
        en: "Rather than copying new words three times, I would rather put them into a sentence of my own.",
        vocab: [["copy", "抄"], ["of my own", "自己的"]],
      },
      {
        zh: "与其通宵赶论文，我倾向于提前两天写完主体。",
        en: "Rather than staying up all night for the paper, I tend to finish the main part two days early.",
        vocab: [["stay up", "熬夜"], ["main part", "主体"]],
      },
      {
        zh: "与其只看解析，我先把错因分成粗心和不会。",
        en: "Rather than only reading the explanation, I first sort errors into carelessness and gaps.",
        vocab: [["explanation", "解析"], ["gaps", "不会的部分"]],
      },
      {
        zh: "与其同时开五个资料，我宁愿只精读其中一份。",
        en: "Rather than opening five sources at once, I would rather study one of them closely.",
        vocab: [["sources", "资料"], ["closely", "精读地"]],
      },
      {
        zh: "与其把听力倍速开到最快，我可能先把生词扫一遍。",
        en: "Rather than playing the audio at top speed, I might scan the new words first.",
        vocab: [["audio", "音频"], ["scan", "扫一遍"]],
      },
      {
        zh: "与其背完整范文，我抽出可迁移的三句框架。",
        en: "Rather than memorizing a whole model essay, I pulled out three transferable frames.",
        vocab: [["model essay", "范文"], ["transferable", "可迁移的"]],
      },
      {
        zh: "与其在书桌前干坐，我站起来把论点口述一遍。",
        en: "Rather than sitting idle at the desk, I stood up and talked the argument through.",
        vocab: [["idle", "空坐着"], ["talk through", "口述理清"]],
      },
      {
        zh: "与其等灵感，我先写下最笨的开头再改。",
        en: "Rather than waiting for inspiration, I wrote the clumsiest opening and then revised it.",
        vocab: [["inspiration", "灵感"], ["clumsiest", "最笨的"]],
      },
    ],
  },
  {
    structure: "tend to / might + 学习习惯",
    grammar: ["tend to 描述稳定学法", "might 表示视材料调整"],
    tips: "谈方法用 tend to，避免说成唯一正确做法。",
    items: [
      {
        zh: "读议论文时我往往先找转折词，再看例子。",
        en: "When I read an argument, I tend to find the contrast markers before the examples.",
        vocab: [["contrast markers", "转折词"], ["argument", "议论文"]],
      },
      {
        zh: "如果一段里生词太多，我可能会先跳过专有名词。",
        en: "If a paragraph has too many new words, I might skip the proper names first.",
        vocab: [["paragraph", "段落"], ["proper names", "专有名词"]],
      },
      {
        zh: "我倾向于把难句拆成主谓宾，再补修饰语。",
        en: "I tend to break a hard sentence into subject, verb, and object, then add the modifiers.",
        vocab: [["break into", "拆成"], ["modifiers", "修饰语"]],
      },
      {
        zh: "复习语法时我可能先自己造句，再对照书上的例子。",
        en: "When reviewing grammar, I might make my own sentence before checking the book's example.",
        vocab: [["review", "复习"], ["example", "例子"]],
      },
      {
        zh: "早晨我往往先做听力，因为那时更清醒。",
        en: "In the morning I tend to do listening first, because I am more alert then.",
        vocab: [["alert", "清醒的"], ["listening", "听力"]],
      },
      {
        zh: "遇到长阅读，我可能先写一行大意再细读。",
        en: "With a long text I might jot one line of the main idea before a close reading.",
        vocab: [["jot", "随手写下"], ["close reading", "细读"]],
      },
      {
        zh: "小组作业里我倾向于先问清评分标准。",
        en: "In group assignments I tend to ask for the marking criteria first.",
        vocab: [["marking criteria", "评分标准"], ["assignment", "作业"]],
      },
      {
        zh: "背完一组词，我可能会隔一天再测自己。",
        en: "After learning a set of words, I might test myself again a day later.",
        vocab: [["set", "一组"], ["test myself", "自测"]],
      },
    ],
  },
  {
    structure: "in the long run + 学习效果",
    grammar: ["长期记忆/能力", "对比短期分数"],
    tips: "劝自己别只刷题时，in the long run 很自然。",
    items: [
      {
        zh: "从长期看，能口头解释一个概念比再做十道选择题更值。",
        en: "In the long run, explaining a concept aloud is worth more than ten extra multiple-choice items.",
        vocab: [["aloud", "口头、出声"], ["multiple-choice", "选择题"]],
      },
      {
        zh: "从长期看，睡够再复习，可能比熬夜多记两页更牢。",
        en: "In the long run, reviewing after enough sleep might stick better than two extra pages at midnight.",
        vocab: [["stick", "记得住"], ["review", "复习"]],
      },
      {
        zh: "从长期看，建立错题本会减少同一类失误。",
        en: "In the long run, keeping an error notebook reduces the same kind of mistakes.",
        vocab: [["error notebook", "错题本"], ["reduce", "减少"]],
      },
      {
        zh: "从长期看，每周写一段反馈，比考前突击作文更稳。",
        en: "In the long run, writing one paragraph of feedback each week is steadier than a last-minute essay rush.",
        vocab: [["feedback", "反馈作文"], ["last-minute", "考前突击的"]],
      },
      {
        zh: "从长期看，主动提问能把含糊点变成可练习的句子。",
        en: "In the long run, asking questions turns vague points into sentences you can practise.",
        vocab: [["vague", "含糊的"], ["practise", "练习"]],
      },
      {
        zh: "从长期看，少换参考书，可能比不断买新资料更有效。",
        en: "In the long run, switching textbooks less often might work better than buying new materials constantly.",
        vocab: [["textbooks", "参考书"], ["constantly", "不断地"]],
      },
      {
        zh: "从长期看，把听力原文跟读，会比只对答案更有帮助。",
        en: "In the long run, shadowing the listening script helps more than only checking answers.",
        vocab: [["shadow", "跟读"], ["script", "原文"]],
      },
      {
        zh: "从长期看，接受暂时的慢速度，才能把准确度抬上去。",
        en: "In the long run, accepting a temporarily slower pace is what raises accuracy.",
        vocab: [["pace", "速度"], ["accuracy", "准确度"]],
      },
    ],
  },
  {
    structure: "If + had done, would + 原形（混合条件）",
    grammar: ["过去没准备导致现在被动", "主句谈此刻"],
    tips: "考前复盘用混合条件，比 I should have 更完整。",
    items: [
      {
        zh: "要是我昨晚把提纲写完，现在就不会对着空白页发呆。",
        en: "If I had finished the outline last night, I wouldn't be staring at a blank page now.",
        vocab: [["outline", "提纲"], ["blank page", "空白页"]],
      },
      {
        zh: "要是我把充电线带进教室，这会儿就不用借移动电源。",
        en: "If I had brought the charging cable, I wouldn't be borrowing a power bank now.",
        vocab: [["charging cable", "充电线"], ["power bank", "移动电源"]],
      },
      {
        zh: "要是我提前标好页码，小组汇报现在就不会翻错章节。",
        en: "If I had marked the page numbers earlier, our group would not be flipping to the wrong section now.",
        vocab: [["page numbers", "页码"], ["flip", "翻"]],
      },
      {
        zh: "要是我把公式抄进小卡片，我现在就不必整本翻书。",
        en: "If I had copied the formula onto a card, I wouldn't be flipping through the whole book now.",
        vocab: [["formula", "公式"], ["flip through", "翻找"]],
      },
      {
        zh: "要是我昨天问清了作业格式，此刻就不用重排目录。",
        en: "If I had asked about the format yesterday, I wouldn't be reformatting the contents page now.",
        vocab: [["format", "格式"], ["reformat", "重排"]],
      },
      {
        zh: "要是我把听力文本打印出来，现在就不会在屏幕上缩小放大。",
        en: "If I had printed the transcript, I wouldn't be zooming in and out on the screen now.",
        vocab: [["transcript", "听力文本"], ["zoom", "缩放"]],
      },
      {
        zh: "要是我早点预约辅导，我现在就不用排队等空位。",
        en: "If I had booked the tutorial earlier, I wouldn't be waiting for a free slot now.",
        vocab: [["tutorial", "辅导"], ["slot", "空位"]],
      },
      {
        zh: "要是我把引用页码记下，论文现在就不会缺参考文献。",
        en: "If I had noted the citation pages, the paper wouldn't be missing references now.",
        vocab: [["citation", "引用"], ["references", "参考文献"]],
      },
    ],
  },
  {
    structure: "whereas / while + 学习对比",
    grammar: ["对比两种学法或两类题", "whereas 适合书面"],
    tips: "比较精读与泛读、口头与笔头时很好用。",
    items: [
      {
        zh: "我先做阅读，而室友总是先刷语法选择。",
        en: "I start with reading, whereas my roommate always drills grammar choices first.",
        vocab: [["drill", "刷、反复练"], ["choices", "选择题"]],
      },
      {
        zh: "我喜欢纸质笔记，而她几乎全记在白板软件里。",
        en: "I prefer paper notes, while she keeps almost everything on a whiteboard app.",
        vocab: [["paper notes", "纸质笔记"], ["whiteboard", "白板"]],
      },
      {
        zh: "听力我求大意，而精读课上我更抠指代。",
        en: "In listening I aim for the gist, whereas in close reading I track the references more carefully.",
        vocab: [["gist", "大意"], ["references", "指代"]],
      },
      {
        zh: "我可能把生词放进例句，而有人只写中文释义。",
        en: "I might put a new word into an example, while some people only write a Chinese gloss.",
        vocab: [["gloss", "释义"], ["example", "例句"]],
      },
      {
        zh: "早上我记新材料，而晚上我只复习旧错题。",
        en: "I learn new material in the morning, whereas at night I only review old errors.",
        vocab: [["material", "材料"], ["errors", "错题"]],
      },
      {
        zh: "口头练习我求流利，而写作时我更在意衔接。",
        en: "In speaking I aim for fluency, while in writing I care more about cohesion.",
        vocab: [["fluency", "流利"], ["cohesion", "衔接"]],
      },
      {
        zh: "我倾向于限时做完，而他做题时几乎不看表。",
        en: "I tend to finish under a time limit, whereas he hardly watches the clock.",
        vocab: [["time limit", "限时"], ["hardly", "几乎不"]],
      },
      {
        zh: "我把难点标红，而老师建议先标出已经会的部分。",
        en: "I mark the hard parts in red, while the teacher suggests highlighting what I already know.",
        vocab: [["hard parts", "难点"], ["highlight", "标出"]],
      },
    ],
  },
  {
    structure: "as long as / provided that + 学习条件",
    grammar: ["只要方法到位就可推进", "从句现在时"],
    tips: "as long as I check the answers 不要加 will。",
    items: [
      {
        zh: "只要我每天开口五分钟，口语就不会完全生疏。",
        en: "My speaking will not go completely rusty as long as I talk for five minutes a day.",
        vocab: [["rusty", "生疏的"], ["as long as", "只要"]],
      },
      {
        zh: "只要把出处写上，我就可以把那段引文放进草稿。",
        en: "I can put the quotation into the draft, provided that I add the source.",
        vocab: [["quotation", "引文"], ["source", "出处"]],
      },
      {
        zh: "只要耳机还能用，我可能继续在通勤时听讲解。",
        en: "I might keep listening to the explanation on my commute as long as the earphones work.",
        vocab: [["commute", "通勤"], ["earphones", "耳机"]],
      },
      {
        zh: "只要小组能在周三前交大纲，我来负责排版。",
        en: "I will handle the layout, provided that the group submits the outline by Wednesday.",
        vocab: [["layout", "排版"], ["outline", "大纲"]],
      },
      {
        zh: "只要词典给出搭配，我就不会只背单个词。",
        en: "I will not memorize isolated words as long as the dictionary shows a collocation.",
        vocab: [["isolated", "单个的"], ["collocation", "搭配"]],
      },
      {
        zh: "只要教室灯还亮着，我就可以再核对一遍计算。",
        en: "I can check the calculations once more, provided that the classroom lights stay on.",
        vocab: [["calculations", "计算"], ["stay on", "还亮着"]],
      },
      {
        zh: "只要我把手机调静音，图书馆学习就会稳很多。",
        en: "Library study gets much steadier as long as I silence my phone.",
        vocab: [["silence", "调静音"], ["steadier", "更稳"]],
      },
      {
        zh: "只要老师允许查笔记，这道应用题我也许能做完。",
        en: "I might finish this applied problem, provided that notes are allowed.",
        vocab: [["applied problem", "应用题"], ["allowed", "允许的"]],
      },
    ],
  },
  {
    structure: "despite + 名词 / 动名词",
    grammar: ["despite 接干扰或疲劳", "不接完整从句"],
    tips: "despite the noise in the hall 很常用。",
    items: [
      {
        zh: "尽管走廊很吵，我还是把这段跟读完了。",
        en: "Despite the noise in the corridor, I still finished shadowing the passage.",
        vocab: [["corridor", "走廊"], ["shadow", "跟读"]],
      },
      {
        zh: "尽管时间只剩十分钟，我还是先检查了单位。",
        en: "Despite having only ten minutes left, I still checked the units first.",
        vocab: [["units", "单位"], ["left", "剩下"]],
      },
      {
        zh: "尽管这本教材偏旧，里面的句型仍然很实用。",
        en: "Despite the dated textbook, the sentence patterns are still practical.",
        vocab: [["dated", "偏旧的"], ["patterns", "句型"]],
      },
      {
        zh: "尽管我很想查手机，我还是把这一页先读完。",
        en: "Despite wanting to check my phone, I still finished the page first.",
        vocab: [["despite doing", "尽管……"], ["page", "一页"]],
      },
      {
        zh: "尽管分数不理想，我还是把老师的评语抄进笔记本。",
        en: "Despite a disappointing score, I still copied the teacher's comments into my notebook.",
        vocab: [["disappointing", "不理想的"], ["comments", "评语"]],
      },
      {
        zh: "尽管打印机缺墨，我还是把提纲手写了一份。",
        en: "Despite the printer being low on ink, I still wrote a handwritten outline.",
        vocab: [["ink", "墨"], ["handwritten", "手写的"]],
      },
      {
        zh: "尽管同桌在聊天，我还是把听力题涂完了。",
        en: "Despite my deskmate chatting, I still filled in the listening answers.",
        vocab: [["deskmate", "同桌"], ["fill in", "涂写"]],
      },
      {
        zh: "尽管第一遍听不懂，我还是没有立刻看文本。",
        en: "Despite not understanding the first time, I still did not look at the script at once.",
        vocab: [["script", "文本"], ["at once", "立刻"]],
      },
    ],
  },
  {
    structure: "unless + 现在时",
    grammar: ["unless 设学习底线", "从句现在时"],
    tips: "unless I check the verb 比 if I do not check 更紧。",
    items: [
      {
        zh: "除非我先看题目，否则不会开始听第二遍。",
        en: "I will not start the second listening unless I have read the questions first.",
        vocab: [["second listening", "第二遍听力"], ["unless", "除非"]],
      },
      {
        zh: "除非引用格式统一，否则这篇论文不能交。",
        en: "This paper cannot be submitted unless the citation style is consistent.",
        vocab: [["citation style", "引用格式"], ["consistent", "统一的"]],
      },
      {
        zh: "除非我把生词放进句子，否则第二天多半会忘。",
        en: "I will probably forget the word the next day unless I put it into a sentence.",
        vocab: [["probably", "多半"], ["put into", "放进"]],
      },
      {
        zh: "除非小组先分工，否则我不会擅自写完整章。",
        en: "I will not write a whole chapter on my own unless the group assigns roles first.",
        vocab: [["on my own", "擅自、独自"], ["assign", "分配"]],
      },
      {
        zh: "除非计算器允许，否则这道统计题我得手算。",
        en: "I will have to calculate this statistics item by hand unless calculators are allowed.",
        vocab: [["statistics", "统计"], ["by hand", "手算"]],
      },
      {
        zh: "除非我真正理解例题，否则我不会继续往下做。",
        en: "I will not move on unless I genuinely understand the worked example.",
        vocab: [["move on", "继续往下"], ["worked example", "例题"]],
      },
      {
        zh: "除非图书馆今晚延长，否则我九点前就得离开。",
        en: "I have to leave by nine unless the library extends its hours tonight.",
        vocab: [["extend", "延长"], ["hours", "开放时间"]],
      },
      {
        zh: "除非老师明确说可以讨论，否则我考试时不说话。",
        en: "I will not talk in the exam unless the teacher clearly allows discussion.",
        vocab: [["exam", "考试"], ["discussion", "讨论"]],
      },
    ],
  },
  {
    structure: "would rather + 原形 than + 原形",
    grammar: ["宁愿选更慢但更清楚的学法", "两边原形"],
    tips: "I'd rather reread than pretend I understood。",
    items: [
      {
        zh: "我宁愿少做两套卷，也要把错因写清楚。",
        en: "I would rather do two fewer papers than leave the error causes vague.",
        vocab: [["error causes", "错因"], ["vague", "含糊"]],
      },
      {
        zh: "我宁愿把录音听慢，也不想假装听懂了大意。",
        en: "I would rather slow the recording down than pretend I caught the gist.",
        vocab: [["recording", "录音"], ["pretend", "假装"]],
      },
      {
        zh: "我宁愿手写提纲，也不想直接在电脑上东改西改。",
        en: "I would rather write the outline by hand than keep patching it on the computer.",
        vocab: [["by hand", "手写"], ["patch", "东改西改"]],
      },
      {
        zh: "我宁愿问一个笨问题，也不想把误会带到考试里。",
        en: "I would rather ask a clumsy question than carry a misunderstanding into the exam.",
        vocab: [["clumsy", "笨的"], ["misunderstanding", "误会"]],
      },
      {
        zh: "我宁愿今晚只攻一种题型，也不想五种都浅尝。",
        en: "I would rather practise one question type tonight than sample five of them thinly.",
        vocab: [["question type", "题型"], ["thinly", "浅浅地"]],
      },
      {
        zh: "我宁愿把笔记压缩，也不想考前抱着三本讲义。",
        en: "I would rather condense the notes than carry three handouts into the final week.",
        vocab: [["condense", "压缩"], ["handouts", "讲义"]],
      },
      {
        zh: "我宁愿重读难段，也不想靠翻译软件直接跳过。",
        en: "I would rather reread the hard paragraph than skip it with a translation app.",
        vocab: [["reread", "重读"], ["skip", "跳过"]],
      },
      {
        zh: "我宁愿把口头答案先录音，也不想只在脑子里过一遍。",
        en: "I would rather record a spoken answer than only rehearse it in my head.",
        vocab: [["record", "录音"], ["rehearse", "过一遍"]],
      },
    ],
  },
  {
    structure: "so that / in case + 学习目的",
    grammar: ["so that 为了记住/交卷", "in case 防止遗忘或设备问题"],
    tips: "in case the file will not open 错，要用现在时。",
    items: [
      {
        zh: "我把定义改成自己的话，以便真正记得住。",
        en: "I rewrote the definition in my own words so that it would actually stick.",
        vocab: [["definition", "定义"], ["stick", "记得住"]],
      },
      {
        zh: "我另存了一份作业，以防教室电脑突然死机。",
        en: "I saved a second copy of the assignment in case the classroom computer crashed.",
        vocab: [["second copy", "另一份"], ["crash", "死机"]],
      },
      {
        zh: "我把页码写在卡片上，以便提问时能立刻翻到。",
        en: "I wrote the page numbers on a card so that I could turn to them at once when asking.",
        vocab: [["turn to", "翻到"], ["at once", "立刻"]],
      },
      {
        zh: "我提前打印答题卡样例，以免考试时填错区域。",
        en: "I printed a sample answer sheet so that I would not fill the wrong section in the exam.",
        vocab: [["answer sheet", "答题卡"], ["section", "区域"]],
      },
      {
        zh: "我把电池换成新的，以防录音笔在访谈中途停。",
        en: "I put in a new battery in case the recorder stopped halfway through the interview.",
        vocab: [["recorder", "录音笔"], ["interview", "访谈"]],
      },
      {
        zh: "我列了三个口头开场，以便卡住时还有退路。",
        en: "I listed three spoken openings so that I would still have a way forward if I froze.",
        vocab: [["openings", "开场"], ["freeze", "卡住"]],
      },
      {
        zh: "我把公式旁边写了限制条件，以免套错题型。",
        en: "I wrote the limits next to the formula so that I would not apply it to the wrong type.",
        vocab: [["limits", "限制条件"], ["apply", "套用"]],
      },
      {
        zh: "我把参考书放进包里，以防自习室电脑不能上网。",
        en: "I packed the reference book in case the study-room computers had no internet.",
        vocab: [["reference book", "参考书"], ["study-room", "自习室"]],
      },
    ],
  },
];

const social: SentenceGroup[] = [
  {
    structure: "Although + 从句, 主句",
    grammar: ["although 承认社交顾虑", "主句仍给出得体做法"],
    tips: "社交里 although 常用来承认尴尬，但仍把话说清楚。",
    items: [
      {
        zh: "虽然我今天话不多，我还是认真听完了她讲的事。",
        en: "Although I said little today, I still listened carefully to her story.",
        vocab: [["although", "虽然"], ["carefully", "认真地"]],
      },
      {
        zh: "虽然聚会很吵，我还是把祝福说完整了。",
        en: "Although the gathering was noisy, I still finished my good wishes.",
        vocab: [["gathering", "聚会"], ["good wishes", "祝福"]],
      },
      {
        zh: "虽然我们很久没见，我还是先问了近况而不是诉苦。",
        en: "Although we had not met for ages, I still asked about recent news rather than complaining.",
        vocab: [["for ages", "很久"], ["recent news", "近况"]],
      },
      {
        zh: "虽然我有点紧张，我还是把名字又介绍了一遍。",
        en: "Although I felt nervous, I still introduced my name one more time.",
        vocab: [["nervous", "紧张的"], ["introduce", "介绍"]],
      },
      {
        zh: "虽然他回得慢，我还是没有连续追问。",
        en: "Although he replied slowly, I still did not send a string of follow-up questions.",
        vocab: [["follow-up", "追问的"], ["string", "一连串"]],
      },
      {
        zh: "虽然我可以找借口离开，我还是多坐了十分钟。",
        en: "Although I could have used an excuse to leave, I still stayed another ten minutes.",
        vocab: [["excuse", "借口"], ["stay", "多坐"]],
      },
      {
        zh: "虽然话题有点敏感，我还是先确认她是否愿意谈。",
        en: "Although the topic was a bit sensitive, I still checked whether she wanted to talk.",
        vocab: [["sensitive", "敏感的"], ["check", "确认"]],
      },
      {
        zh: "虽然我不太会开玩笑，我还是对大家的幽默点了头。",
        en: "Although I am not good at jokes, I still nodded at other people's humor.",
        vocab: [["jokes", "玩笑"], ["nod", "点头"]],
      },
    ],
  },
  {
    structure: "Even though + 从句, 主句",
    grammar: ["even though 强调已知情况仍礼貌回应", "后接从句"],
    tips: "even though I was tired 比 even I was tired 正确。",
    items: [
      {
        zh: "即便我已经吃过，我还是尝了一小口她带的点心。",
        en: "Even though I had already eaten, I still tried a small bite of the snack she brought.",
        vocab: [["bite", "一小口"], ["snack", "点心"]],
      },
      {
        zh: "即便邀请来得很突然，我还是当天回了消息。",
        en: "Even though the invitation came suddenly, I still replied the same day.",
        vocab: [["invitation", "邀请"], ["suddenly", "突然"]],
      },
      {
        zh: "即便我不太熟那些朋友，我还是先打招呼。",
        en: "Even though I barely knew those friends, I still said hello first.",
        vocab: [["barely", "几乎不"], ["say hello", "打招呼"]],
      },
      {
        zh: "即便他说话很快，我还是请他把关键点再说一遍。",
        en: "Even though he spoke quickly, I still asked him to repeat the key point.",
        vocab: [["repeat", "再说一遍"], ["key point", "关键点"]],
      },
      {
        zh: "即便聚会可以不去，我可能还是会露个面。",
        en: "Even though I could skip the gathering, I might still show up for a while.",
        vocab: [["skip", "不去"], ["show up", "露脸"]],
      },
      {
        zh: "即便我当时有点尴尬，我还是把杯子递给了她。",
        en: "Even though I felt awkward then, I still passed her the glass.",
        vocab: [["awkward", "尴尬的"], ["pass", "递给"]],
      },
      {
        zh: "即便我们意见不同，我还是先承认他有合理之处。",
        en: "Even though we disagreed, I still admitted that part of his view was fair.",
        vocab: [["disagree", "意见不同"], ["admit", "承认"]],
      },
      {
        zh: "即便时间不早了，我还是把她送到地铁站。",
        en: "Even though it was getting late, I still walked her to the metro station.",
        vocab: [["getting late", "不早了"], ["walk ... to", "送到"]],
      },
    ],
  },
  {
    structure: "Rather than + doing, 主句",
    grammar: ["rather than 避开生硬社交动作", "后接 doing"],
    tips: "拒绝或改约时，rather than 显得更体贴。",
    items: [
      {
        zh: "与其在群里已读不回，我宁愿私聊一句我稍后回。",
        en: "Rather than leaving the group chat on read, I would rather message privately that I will reply later.",
        vocab: [["on read", "已读"], ["privately", "私聊"]],
      },
      {
        zh: "与其当众纠正他的发音，我倾向结束后轻轻提一句。",
        en: "Rather than correcting his pronunciation in public, I tend to mention it gently afterwards.",
        vocab: [["in public", "当众"], ["gently", "轻轻地"]],
      },
      {
        zh: "与其空泛说有空再聚，我提出了下周三晚饭。",
        en: "Rather than saying we should meet sometime, I suggested dinner next Wednesday.",
        vocab: [["sometime", "有空再说"], ["suggest", "提出"]],
      },
      {
        zh: "与其把照片直接发朋友圈，我先问她介不介意。",
        en: "Rather than posting the photo at once, I asked whether she minded first.",
        vocab: [["post", "发到网上"], ["mind", "介意"]],
      },
      {
        zh: "与其突然取消，我可能先问能不能改到周末。",
        en: "Rather than cancelling suddenly, I might ask whether we can move it to the weekend.",
        vocab: [["cancel", "取消"], ["move", "改期"]],
      },
      {
        zh: "与其用玩笑掩饰拒绝，我把原因说得很短、很清楚。",
        en: "Rather than hiding a refusal behind a joke, I stated a short, clear reason.",
        vocab: [["refusal", "拒绝"], ["state", "说出"]],
      },
      {
        zh: "与其让整桌人等我选餐厅，我先给出两个选项。",
        en: "Rather than making the whole table wait, I offered two restaurant options first.",
        vocab: [["whole table", "整桌人"], ["options", "选项"]],
      },
      {
        zh: "与其把旧矛盾翻出来，我先问今晚我们想聊什么。",
        en: "Rather than reopening an old argument, I asked what we wanted to talk about tonight.",
        vocab: [["reopen", "翻出来"], ["argument", "矛盾"]],
      },
    ],
  },
  {
    structure: "tend to / might + 社交习惯",
    grammar: ["tend to 描述一贯分寸", "might 表示视场合调整"],
    tips: "谈自己的社交风格时，tend to 比 always 更得体。",
    items: [
      {
        zh: "刚认识的人面前，我往往先问共同朋友，而不是私事。",
        en: "With new people I tend to ask about mutual friends rather than private matters.",
        vocab: [["mutual friends", "共同朋友"], ["private matters", "私事"]],
      },
      {
        zh: "如果气氛有点冷，我可能会提一件房间里看得见的事。",
        en: "If the atmosphere feels cold, I might mention something visible in the room.",
        vocab: [["atmosphere", "气氛"], ["visible", "看得见的"]],
      },
      {
        zh: "收到长语音时，我倾向于先文字确认我听懂了重点。",
        en: "When I get a long voice note, I tend to confirm the key point in text first.",
        vocab: [["voice note", "语音"], ["confirm", "确认"]],
      },
      {
        zh: "朋友迟到时，我可能先自己点杯水，而不是连续催。",
        en: "When a friend is late, I might order water first rather than sending several reminders.",
        vocab: [["reminders", "催促"], ["order", "点"]],
      },
      {
        zh: "告别时我往往把下次见面说具体一点。",
        en: "When saying goodbye I tend to make the next meeting a little more specific.",
        vocab: [["specific", "具体的"], ["next meeting", "下次见面"]],
      },
      {
        zh: "有人开玩笑过火时，我可能会笑一下再把话题转开。",
        en: "When a joke goes too far, I might smile once and then steer the topic away.",
        vocab: [["go too far", "过火"], ["steer", "转开"]],
      },
      {
        zh: "我倾向于把群公告先看完，再在群里问问题。",
        en: "I tend to read the group notice first before asking a question in the chat.",
        vocab: [["notice", "公告"], ["chat", "群聊"]],
      },
      {
        zh: "周末若两边都累，我可能改成散步而不是再吃饭。",
        en: "If we are both tired at the weekend, I might suggest a walk rather than another meal.",
        vocab: [["suggest", "提议"], ["meal", "一顿饭"]],
      },
    ],
  },
  {
    structure: "in the long run + 关系判断",
    grammar: ["长期关系质量", "对比眼前客气"],
    tips: "谈边界和诚实时，in the long run 比 you should 温和。",
    items: [
      {
        zh: "从长期看，及时回一句“我看到了”，比已读不回更省误会。",
        en: "In the long run, a quick “I saw this” reduces more misunderstanding than staying on read.",
        vocab: [["on read", "已读不回"], ["misunderstanding", "误会"]],
      },
      {
        zh: "从长期看，偶尔直说累了，可能比硬撑着陪聊更健康。",
        en: "In the long run, sometimes saying you are tired might be healthier than forcing small talk.",
        vocab: [["small talk", "陪聊、闲聊"], ["force", "硬撑"]],
      },
      {
        zh: "从长期看，把钱的事说清楚，比事后觉得被占便宜更轻松。",
        en: "In the long run, stating money matters clearly is easier than later feeling used.",
        vocab: [["state", "说清楚"], ["used", "被占便宜"]],
      },
      {
        zh: "从长期看，少参加自己讨厌的局，能保住真正想见的人。",
        en: "In the long run, skipping gatherings you dislike protects time for people you actually want to see.",
        vocab: [["skip", "少参加"], ["protect", "保住"]],
      },
      {
        zh: "从长期看，记住别人提过的小事，比送贵礼物更有用。",
        en: "In the long run, remembering a small detail someone mentioned helps more than an expensive gift.",
        vocab: [["detail", "小事、细节"], ["mention", "提过"]],
      },
      {
        zh: "从长期看，把道歉说完整，比用表情包敷衍更修复关系。",
        en: "In the long run, a complete apology repairs more than a sticker used as a shortcut.",
        vocab: [["apology", "道歉"], ["sticker", "表情包"]],
      },
      {
        zh: "从长期看，允许朋友拒绝邀请，会让下次邀约更轻松。",
        en: "In the long run, letting a friend decline an invitation makes the next invite easier.",
        vocab: [["decline", "拒绝"], ["invite", "邀约"]],
      },
      {
        zh: "从长期看，少在背后议论，可能比当场幽默更安全。",
        en: "In the long run, gossiping less might be safer than sounding funny in the moment.",
        vocab: [["gossip", "背后议论"], ["in the moment", "当场"]],
      },
    ],
  },
  {
    structure: "If + had done, would + 原形（混合条件）",
    grammar: ["过去没说清导致现在别扭", "主句谈现在"],
    tips: "社交复盘用混合条件，避免只说 I feel bad。",
    items: [
      {
        zh: "要是我昨天就把改期说清，现在就不会还在猜她生不生气。",
        en: "If I had explained the change yesterday, I wouldn't still be guessing whether she is upset.",
        vocab: [["explain", "说清"], ["upset", "生气、难受"]],
      },
      {
        zh: "要是我提前问清着装，这会儿就不会穿得太正式。",
        en: "If I had asked about the dress code earlier, I wouldn't be overdressed now.",
        vocab: [["dress code", "着装"], ["overdressed", "穿得过正"]],
      },
      {
        zh: "要是我把地址发对，朋友现在就不会在隔壁小区转。",
        en: "If I had sent the correct address, my friend wouldn't be circling the next compound now.",
        vocab: [["compound", "小区"], ["circle", "转圈"]],
      },
      {
        zh: "要是我记得她不吃香菜，这道凉菜现在就不会显得失礼。",
        en: "If I had remembered she avoids coriander, this cold dish wouldn't feel inconsiderate now.",
        vocab: [["coriander", "香菜"], ["inconsiderate", "欠考虑的"]],
      },
      {
        zh: "要是我先确认人数，此刻就不用再加椅子。",
        en: "If I had confirmed the headcount, I wouldn't be adding extra chairs now.",
        vocab: [["headcount", "人数"], ["extra", "额外的"]],
      },
      {
        zh: "要是我把玩笑收住，桌上现在就不会这么安静。",
        en: "If I had held that joke back, the table wouldn't be this quiet now.",
        vocab: [["hold back", "收住"], ["quiet", "安静"]],
      },
      {
        zh: "要是我早十分钟出门，我就不会一边走路一边道歉。",
        en: "If I had left ten minutes earlier, I wouldn't be apologizing while still on the way.",
        vocab: [["apologize", "道歉"], ["on the way", "在路上"]],
      },
      {
        zh: "要是我把礼物收据留下，现在换尺码就不会这么麻烦。",
        en: "If I had kept the gift receipt, exchanging the size wouldn't be this inconvenient now.",
        vocab: [["receipt", "收据"], ["exchange", "换"]],
      },
    ],
  },
  {
    structure: "whereas / while + 社交对比",
    grammar: ["对比不同人的社交习惯", "whereas 更书面"],
    tips: "描述朋友差异时，while 很口语、很常用。",
    items: [
      {
        zh: "我喜欢提前十分钟到，而他几乎每次都踩点。",
        en: "I like arriving ten minutes early, whereas he almost always arrives on the dot.",
        vocab: [["on the dot", "踩点"], ["arrive", "到达"]],
      },
      {
        zh: "我倾向小范围吃饭，而她办活动就想把人都叫齐。",
        en: "I tend to prefer a small dinner, while she wants everyone included in a gathering.",
        vocab: [["small dinner", "小范围吃饭"], ["included", "叫齐"]],
      },
      {
        zh: "我可能先听完再评，而有人会中途接话。",
        en: "I might listen to the end first, whereas some people jump in halfway.",
        vocab: [["jump in", "接话"], ["halfway", "中途"]],
      },
      {
        zh: "我发消息会先问好，而他直接说事。",
        en: "I start a message with a greeting, while he goes straight to the point.",
        vocab: [["greeting", "问好"], ["straight to the point", "直接说事"]],
      },
      {
        zh: "我把合照先发给本人，而有人会直接发到群里。",
        en: "I send a group photo to the person first, whereas some people post it in the chat at once.",
        vocab: [["group photo", "合照"], ["at once", "直接马上"]],
      },
      {
        zh: "周末我更想散步聊天，而朋友们想去唱通宵。",
        en: "At weekends I would rather walk and talk, while my friends want to sing all night.",
        vocab: [["all night", "通宵"], ["would rather", "更想"]],
      },
      {
        zh: "我拒绝时会给替代时间，而他只说不行。",
        en: "When I refuse, I offer another time, whereas he only says no.",
        vocab: [["offer", "给出"], ["refuse", "拒绝"]],
      },
      {
        zh: "我记得别人的忌口，而自己点菜时常常忘了问。",
        en: "I remember other people's avoidances, while I often forget to ask when I order.",
        vocab: [["avoidances", "忌口"], ["order", "点菜"]],
      },
    ],
  },
  {
    structure: "as long as / provided that + 社交条件",
    grammar: ["只要边界被尊重就可参加", "从句现在时"],
    tips: "答应邀约时加上 as long as，能把条件说清。",
    items: [
      {
        zh: "只要不吸烟，我就可以在阳台再坐一会儿。",
        en: "I can stay on the balcony a bit longer as long as nobody smokes.",
        vocab: [["balcony", "阳台"], ["as long as", "只要"]],
      },
      {
        zh: "只要提前告诉我有新朋友，我就能做好心理准备。",
        en: "I can prepare myself, provided that you tell me in advance there will be new people.",
        vocab: [["prepare myself", "做好准备"], ["in advance", "提前"]],
      },
      {
        zh: "只要晚上十点前结束，我或许能来这个工作日聚餐。",
        en: "I might join this weekday dinner as long as it ends before ten.",
        vocab: [["weekday", "工作日"], ["join", "来参加"]],
      },
      {
        zh: "只要大家轮流说话，这场讨论就不会变成一个人演讲。",
        en: "The discussion will not become one speech, provided that people take turns.",
        vocab: [["take turns", "轮流"], ["speech", "演讲"]],
      },
      {
        zh: "只要不拍照发网，我可以分享这件事。",
        en: "I can share this story as long as it is not posted online.",
        vocab: [["share", "分享"], ["post online", "发到网上"]],
      },
      {
        zh: "只要把AA算清楚，我并不介意为大家先买单。",
        en: "I do not mind paying first, provided that we split the bill clearly afterwards.",
        vocab: [["split the bill", "AA"], ["afterwards", "之后"]],
      },
      {
        zh: "只要孩子能早点回家，我们或许把聚餐改到下午茶。",
        en: "We might change the dinner to afternoon tea as long as the children can get home earlier.",
        vocab: [["afternoon tea", "下午茶"], ["get home", "回家"]],
      },
      {
        zh: "只要语气还尊重，我可以继续听不同意见。",
        en: "I can keep listening to a different view, provided that the tone stays respectful.",
        vocab: [["tone", "语气"], ["respectful", "尊重的"]],
      },
    ],
  },
  {
    structure: "despite + 名词 / 动名词",
    grammar: ["despite 接尴尬或疲劳", "不接从句"],
    tips: "despite the awkward pause 很适合描述场面。",
    items: [
      {
        zh: "尽管开场有点冷，我们还是慢慢聊开了。",
        en: "Despite an awkward start, we still eased into the conversation.",
        vocab: [["awkward", "冷场的"], ["ease into", "慢慢进入"]],
      },
      {
        zh: "尽管我很困，我还是把祝酒词说完了。",
        en: "Despite feeling sleepy, I still finished the birthday toast without rushing.",
        vocab: [["toast", "祝酒词"], ["despite doing", "尽管……"]],
      },
      {
        zh: "尽管路上堵，她还是准时出现在门口。",
        en: "Despite the traffic jam, she still appeared at the door on time.",
        vocab: [["traffic jam", "堵车"], ["on time", "准时"]],
      },
      {
        zh: "尽管我们很少联系，见面时还是很自然。",
        en: "Despite the little contact, it still felt natural when we met.",
        vocab: [["contact", "联系"], ["natural", "自然的"]],
      },
      {
        zh: "尽管笑话没成功，他还是没有再硬圆。",
        en: "Despite the failed joke, he still did not force another one.",
        vocab: [["failed", "没成功的"], ["force", "硬圆"]],
      },
      {
        zh: "尽管房间很挤，主人还是给每个人倒了水。",
        en: "Despite the crowded room, the host still poured water for everyone.",
        vocab: [["host", "主人"], ["pour", "倒"]],
      },
      {
        zh: "尽管我忘了带礼物，我还是当面承认并约了补送。",
        en: "Despite forgetting the gift, I still admitted it and arranged to bring one later.",
        vocab: [["admit", "承认"], ["arrange", "约好"]],
      },
      {
        zh: "尽管意见不合，我们还是把下次再聊的时间定了。",
        en: "Despite the disagreement, we still fixed a time to continue later.",
        vocab: [["disagreement", "意见不合"], ["fix a time", "定时间"]],
      },
    ],
  },
  {
    structure: "unless + 现在时",
    grammar: ["unless 设社交边界", "从句现在时"],
    tips: "拒绝时 unless 能把唯一例外说清。",
    items: [
      {
        zh: "除非她先开口，否则我不会在饭桌上提那件事。",
        en: "I will not bring that up at dinner unless she raises it first.",
        vocab: [["bring up", "提起"], ["raise", "开口提"]],
      },
      {
        zh: "除非大家同意，否则我不会把聊天记录截图发出去。",
        en: "I will not send a screenshot of the chat unless everyone agrees.",
        vocab: [["screenshot", "截图"], ["agree", "同意"]],
      },
      {
        zh: "除非真的病了，否则我不会在出发前一小时取消。",
        en: "I will not cancel an hour before we set off unless I am genuinely ill.",
        vocab: [["set off", "出发"], ["genuinely", "真正地"]],
      },
      {
        zh: "除非把钱转清楚，否则这次聚餐我可能先不订座。",
        en: "I might not book the table unless we have clarified who is transferring what.",
        vocab: [["transfer", "转账"], ["book", "订座"]],
      },
      {
        zh: "除非有人主动让座，否则我不会挤到已经坐满的那桌。",
        en: "I will not squeeze into the full table unless someone offers a seat.",
        vocab: [["squeeze into", "挤进"], ["offer", "让出"]],
      },
      {
        zh: "除非孩子先睡下，否则我们没法开视频聊天。",
        en: "We cannot start the video call unless the children are in bed first.",
        vocab: [["video call", "视频聊天"], ["in bed", "睡下"]],
      },
      {
        zh: "除非语气还平和，否则我建议我们明天再谈。",
        en: "I suggest we talk tomorrow unless the tone stays calm.",
        vocab: [["tone", "语气"], ["calm", "平和的"]],
      },
      {
        zh: "除非你真的想去，否则我们不必为了面子答应。",
        en: "We need not accept just to save face unless you genuinely want to go.",
        vocab: [["save face", "面子"], ["accept", "答应"]],
      },
    ],
  },
  {
    structure: "would rather + 原形 than + 原形",
    grammar: ["宁愿选更体贴的做法", "两边原形"],
    tips: "提出替代方案时，would rather 比 I don't want 柔和。",
    items: [
      {
        zh: "我宁愿早走十分钟，也不想在门口大声道别吵醒邻居。",
        en: "I would rather leave ten minutes early than say a loud goodbye that wakes the neighbors.",
        vocab: [["loud goodbye", "大声道别"], ["wake", "吵醒"]],
      },
      {
        zh: "我宁愿把冲突私下谈，也不想在群里互怼。",
        en: "I would rather talk the conflict through privately than argue in the group chat.",
        vocab: [["conflict", "冲突"], ["argue", "互怼"]],
      },
      {
        zh: "我宁愿带一盒点心，也不想空手又迟到。",
        en: "I would rather bring a box of snacks than arrive empty-handed and late.",
        vocab: [["empty-handed", "空手"], ["snacks", "点心"]],
      },
      {
        zh: "我宁愿少喝一杯，也想把人安全送到车站。",
        en: "I would rather have one drink fewer than fail to get someone to the station safely.",
        vocab: [["fewer", "更少"], ["safely", "安全地"]],
      },
      {
        zh: "我宁愿明确说今晚不行，也不想含糊到对方一直等。",
        en: "I would rather say tonight does not work than stay vague while the other person waits.",
        vocab: [["vague", "含糊"], ["does not work", "不行"]],
      },
      {
        zh: "我宁愿听完再给建议，也不想中途打断她。",
        en: "I would rather hear her out before advising than interrupt her halfway.",
        vocab: [["hear out", "听完"], ["interrupt", "打断"]],
      },
      {
        zh: "我宁愿改成下午咖啡，也不想让两边都熬夜。",
        en: "I would rather switch to afternoon coffee than keep both of us up late.",
        vocab: [["switch to", "改成"], ["keep ... up", "让……熬夜"]],
      },
      {
        zh: "我宁愿把合照修一下再发，也不想把别人拍得很尴尬。",
        en: "I would rather edit the group photo first than post a shot that embarrasses someone.",
        vocab: [["edit", "修一下"], ["embarrass", "让人尴尬"]],
      },
    ],
  },
  {
    structure: "so that / in case + 社交目的",
    grammar: ["so that 让对方好接", "in case 防止误会"],
    tips: "邀约和改期时，so that 能把好意说清楚。",
    items: [
      {
        zh: "我把地铁站出口写清楚，以便她不用在广场上找我。",
        en: "I specified the metro exit so that she would not have to look for me in the square.",
        vocab: [["specify", "写清楚"], ["exit", "出口"]],
      },
      {
        zh: "我另发了定位，以防原信息被聊天记录淹没。",
        en: "I sent the location again in case the first message got buried in the chat.",
        vocab: [["location", "定位"], ["bury", "淹没"]],
      },
      {
        zh: "我提前说了结束时间，以便有人安排末班车。",
        en: "I mentioned the end time in advance so that people could plan the last train.",
        vocab: [["end time", "结束时间"], ["last train", "末班车"]],
      },
      {
        zh: "我把过敏写在邀请里，以免主人准备错点心。",
        en: "I put the allergy in the invitation so that the host would not prepare the wrong snacks.",
        vocab: [["allergy", "过敏"], ["host", "主人"]],
      },
      {
        zh: "我带了备用雨伞，以防有人回家时突然下雨。",
        en: "I brought a spare umbrella in case it started raining on someone's way home.",
        vocab: [["spare", "备用的"], ["way home", "回家路上"]],
      },
      {
        zh: "我先问她今天方不方便接电话，以免开会时打扰。",
        en: "I asked whether she could take a call today so that I would not interrupt a meeting.",
        vocab: [["take a call", "接电话"], ["interrupt", "打扰"]],
      },
      {
        zh: "我把礼金数目发在家庭群，以便大家不用当面问。",
        en: "I posted the gift amount in the family chat so that nobody had to ask in person.",
        vocab: [["gift amount", "礼金数目"], ["in person", "当面"]],
      },
      {
        zh: "我抄送了共同朋友，以防两头约定不一致。",
        en: "I copied a mutual friend in case the two of us had booked different times.",
        vocab: [["copy", "抄送"], ["book", "约好"]],
      },
    ],
  },
];

const shopping: SentenceGroup[] = [
  {
    structure: "Although + 从句, 主句",
    grammar: ["although 承认价格或外观", "主句仍坚持功能判断"],
    tips: "购物时 although 常用来承认便宜/好看，但仍检查实用。",
    items: [
      {
        zh: "虽然这双鞋很轻，我还是先走了两圈才决定。",
        en: "Although the shoes felt light, I still walked two loops before deciding.",
        vocab: [["loops", "两圈"], ["decide", "决定"]],
      },
      {
        zh: "虽然标价已经打折，我还是问了能否再少一点。",
        en: "Although the ticket price was already reduced, I still asked whether it could come down a little.",
        vocab: [["ticket price", "标价"], ["come down", "再少"]],
      },
      {
        zh: "虽然包装很精致，我更在意里面的保修卡。",
        en: "Although the packaging looked refined, I cared more about the warranty card inside.",
        vocab: [["packaging", "包装"], ["warranty card", "保修卡"]],
      },
      {
        zh: "虽然店员很热情，我还是先自己看了成分表。",
        en: "Although the clerk was enthusiastic, I still read the ingredient list myself first.",
        vocab: [["clerk", "店员"], ["ingredient list", "成分表"]],
      },
      {
        zh: "虽然颜色很衬我，袖长可能还是得改一改。",
        en: "Although the color suits me, the sleeves might still need a small alteration.",
        vocab: [["suit", "衬"], ["alteration", "改衣"]],
      },
      {
        zh: "虽然网上更便宜，我还是想当面看做工。",
        en: "Although it is cheaper online, I still want to inspect the workmanship in person.",
        vocab: [["workmanship", "做工"], ["in person", "当面"]],
      },
      {
        zh: "虽然购物车已经满了，我还是把重复的洗衣液删了。",
        en: "Although the cart was already full, I still removed the duplicate detergent.",
        vocab: [["cart", "购物车"], ["detergent", "洗衣液"]],
      },
      {
        zh: "虽然这款耳机降噪强，佩戴久了还是有点夹。",
        en: "Although these earphones cancel noise well, they still pinch a little after a long wear.",
        vocab: [["cancel noise", "降噪"], ["pinch", "夹"]],
      },
    ],
  },
  {
    structure: "Even though + 从句, 主句",
    grammar: ["even though 强调已知信息仍核查", "后接从句"],
    tips: "even though it is on sale 不等于可以不看尺码。",
    items: [
      {
        zh: "即便已经是季末折扣，我还是先试了肩线。",
        en: "Even though it was already an end-of-season sale, I still tried the shoulder line.",
        vocab: [["end-of-season", "季末"], ["shoulder line", "肩线"]],
      },
      {
        zh: "即便店里写着不可退，我还是把政策拍了下来。",
        en: "Even though the sign said no returns, I still photographed the policy.",
        vocab: [["returns", "退货"], ["policy", "政策"]],
      },
      {
        zh: "即便我很喜欢这个颜色，我还是问了有没有更耐脏的。",
        en: "Even though I liked the color, I still asked whether a more stain-resistant option existed.",
        vocab: [["stain-resistant", "耐脏的"], ["option", "选项"]],
      },
      {
        zh: "即便会员能积分，我可能仍选更合适的那双。",
        en: "Even though members earn points, I might still choose the pair that fits better.",
        vocab: [["earn points", "积分"], ["fit", "合适"]],
      },
      {
        zh: "即便导购说这是今年新款，我还是对比了鞋底厚度。",
        en: "Even though the assistant called it this year's model, I still compared the sole thickness.",
        vocab: [["assistant", "导购"], ["sole", "鞋底"]],
      },
      {
        zh: "即便运费看起来不高，我还是把总价算了一遍。",
        en: "Even though the shipping looked small, I still added up the total once more.",
        vocab: [["shipping", "运费"], ["add up", "加总"]],
      },
      {
        zh: "即便我带了旧小票，柜台还是要核对序列号。",
        en: "Even though I brought the old receipt, the desk still needed to check the serial number.",
        vocab: [["receipt", "小票"], ["serial number", "序列号"]],
      },
      {
        zh: "即便商场快打烊，我还是把拉链拉上拉下试了几次。",
        en: "Even though the mall was closing, I still zipped and unzipped the jacket several times.",
        vocab: [["mall", "商场"], ["zip", "拉拉链"]],
      },
    ],
  },
  {
    structure: "Rather than + doing, 主句",
    grammar: ["rather than 避开冲动购买", "后接 doing"],
    tips: "购物决策里 rather than 很适合对比“被吸引”和“先核对”。",
    items: [
      {
        zh: "与其被橱窗灯效吸引，我更想先摸一摸面料厚度。",
        en: "Rather than being drawn by the window lighting, I would rather feel the fabric thickness first.",
        vocab: [["drawn by", "被吸引"], ["fabric", "面料"]],
      },
      {
        zh: "与其一次买三件同款，我倾向于先买一件穿一周。",
        en: "Rather than buying three of the same style, I tend to get one and wear it for a week.",
        vocab: [["style", "款式"], ["tend to", "倾向于"]],
      },
      {
        zh: "与其在结账时才比价，我出门前先截了两家的价格。",
        en: "Rather than comparing prices at the till, I screenshot two shops' prices before leaving home.",
        vocab: [["till", "结账处"], ["screenshot", "截图"]],
      },
      {
        zh: "与其把积分当免费，我先看清兑换门槛。",
        en: "Rather than treating points as free, I checked the redemption threshold first.",
        vocab: [["points", "积分"], ["redemption", "兑换"]],
      },
      {
        zh: "与其被满减牵着走，我可能把不需要的东西移出购物车。",
        en: "Rather than following the spend-more offer, I might remove what I do not need from the cart.",
        vocab: [["spend-more offer", "满减"], ["remove", "移出"]],
      },
      {
        zh: "与其只看明星同款，我先问这双是否防滑。",
        en: "Rather than chasing a celebrity pair, I asked first whether these shoes are non-slip.",
        vocab: [["celebrity", "明星"], ["non-slip", "防滑"]],
      },
      {
        zh: "与其当场办信用卡，我宁愿回家再看费率。",
        en: "Rather than opening a store card on the spot, I would rather check the fees at home.",
        vocab: [["store card", "店内信用卡"], ["on the spot", "当场"]],
      },
      {
        zh: "与其把旧锅继续凑合，我对比了涂层和重量后下单。",
        en: "Rather than making do with the old pan, I ordered after comparing the coating and the weight.",
        vocab: [["make do", "凑合"], ["coating", "涂层"]],
      },
    ],
  },
  {
    structure: "tend to / might + 消费习惯",
    grammar: ["tend to 一贯买法", "might 视库存/尺码调整"],
    tips: "描述自己怎么买东西时，tend to 比 I always 更像 B2。",
    items: [
      {
        zh: "买裤子时我往往先看裤脚能否改短。",
        en: "When I buy trousers I tend to check whether the hems can be shortened.",
        vocab: [["hems", "裤脚"], ["shorten", "改短"]],
      },
      {
        zh: "如果只有试穿码，我可能会先问补货日期。",
        en: "If only the display size is left, I might ask when they will restock.",
        vocab: [["display size", "试穿码"], ["restock", "补货"]],
      },
      {
        zh: "我倾向于把洗标拍下来，以免回家后找不到护理说明。",
        en: "I tend to photograph the care label so I do not lose the washing instructions later.",
        vocab: [["care label", "洗标"], ["instructions", "说明"]],
      },
      {
        zh: "超市里我可能先看单位价格，而不是只看包装大小。",
        en: "In the supermarket I might check the unit price rather than only the pack size.",
        vocab: [["unit price", "单位价格"], ["pack size", "包装大小"]],
      },
      {
        zh: "买电器时我往往先问保修是否含上门。",
        en: "When buying appliances I tend to ask whether the warranty includes a home visit.",
        vocab: [["appliances", "电器"], ["home visit", "上门"]],
      },
      {
        zh: "如果两件只差一个颜色，我可能会选更好搭配的那件。",
        en: "If two items differ only in color, I might pick the one that matches more outfits.",
        vocab: [["differ", "只差"], ["outfits", "搭配"]],
      },
      {
        zh: "我倾向于避开通道尽头的促销堆，先写购物清单。",
        en: "I tend to avoid the end-of-aisle piles and write a shopping list first.",
        vocab: [["end-of-aisle", "通道尽头"], ["piles", "促销堆"]],
      },
      {
        zh: "结账前我可能再扫一眼冷藏区，看牛奶日期。",
        en: "Before checkout I might glance at the chilled section to check the milk dates.",
        vocab: [["chilled section", "冷藏区"], ["checkout", "结账"]],
      },
    ],
  },
  {
    structure: "in the long run + 消费判断",
    grammar: ["长期耐用/维修", "对比眼前折扣"],
    tips: "劝自己别买便宜货时，in the long run 很合适。",
    items: [
      {
        zh: "从长期看，一双能修鞋底的靴子比每年换新更省。",
        en: "In the long run, boots whose soles can be repaired save more than replacing a pair every year.",
        vocab: [["soles", "鞋底"], ["replace", "换新"]],
      },
      {
        zh: "从长期看，多花一点买可替换滤芯，可能比一次性壶更值。",
        en: "In the long run, paying extra for replaceable filters might beat a disposable jug.",
        vocab: [["replaceable", "可替换的"], ["disposable", "一次性的"]],
      },
      {
        zh: "从长期看，把尺码记在手机里能减少退货来回。",
        en: "In the long run, saving your measurements on your phone reduces return trips.",
        vocab: [["measurements", "尺码数据"], ["return trips", "退货来回"]],
      },
      {
        zh: "从长期看，少买印花快时尚，衣柜会更好搭配。",
        en: "In the long run, buying fewer printed fast-fashion pieces makes the wardrobe easier to match.",
        vocab: [["fast-fashion", "快时尚"], ["wardrobe", "衣柜"]],
      },
      {
        zh: "从长期看，问清零件是否停产，能避免买到孤品电器。",
        en: "In the long run, asking whether spare parts are still made helps you avoid orphan appliances.",
        vocab: [["spare parts", "零件"], ["orphan", "无配件可修的"]],
      },
      {
        zh: "从长期看，会员费只有你真的常用才划算。",
        en: "In the long run, a membership fee pays off only if you actually use the service often.",
        vocab: [["membership fee", "会员费"], ["pay off", "划算"]],
      },
      {
        zh: "从长期看，把收据拍照存档，保修时会少很多争执。",
        en: "In the long run, photographing receipts reduces a lot of arguments at warranty desks.",
        vocab: [["warranty desks", "保修柜台"], ["arguments", "争执"]],
      },
      {
        zh: "从长期看，选中性颜色可能比跟一季流行更耐看。",
        en: "In the long run, a neutral color might wear better than this season's trend.",
        vocab: [["neutral", "中性的"], ["trend", "流行"]],
      },
    ],
  },
  {
    structure: "If + had done, would + 原形（混合条件）",
    grammar: ["过去没核对导致现在被动", "主句谈现在"],
    tips: "退换复盘用混合条件，比 I regret 更具体。",
    items: [
      {
        zh: "要是我出门前量过腰围，现在就不会拿着两件来回换。",
        en: "If I had measured my waist at home, I wouldn't be swapping two sizes back and forth now.",
        vocab: [["waist", "腰围"], ["swap", "换来换去"]],
      },
      {
        zh: "要是我看清了退货截止日，此刻就不用求店员通融。",
        en: "If I had read the return deadline, I wouldn't be asking the clerk for an exception now.",
        vocab: [["deadline", "截止日"], ["exception", "通融"]],
      },
      {
        zh: "要是我把吊牌留着，现在退货就不会被拒。",
        en: "If I had kept the tag on, the return wouldn't be getting refused now.",
        vocab: [["tag", "吊牌"], ["refuse", "拒绝"]],
      },
      {
        zh: "要是我对比过功率，这台灯现在就不会在桌上太亮。",
        en: "If I had compared the wattage, this lamp wouldn't be too bright on the desk now.",
        vocab: [["wattage", "功率"], ["bright", "亮"]],
      },
      {
        zh: "要是我问过是否含电池，我就不会还在找配件区。",
        en: "If I had asked whether batteries were included, I wouldn't still be hunting in the accessories aisle.",
        vocab: [["included", "包含"], ["accessories", "配件"]],
      },
      {
        zh: "要是我把优惠码复制对，结账现在就不会少一截折扣。",
        en: "If I had copied the promo code correctly, I wouldn't be missing a chunk of the discount now.",
        vocab: [["promo code", "优惠码"], ["chunk", "一截"]],
      },
      {
        zh: "要是我试过爬楼梯，这双鞋现在就不会磨后跟。",
        en: "If I had tried them on the stairs, these shoes wouldn't be rubbing my heels now.",
        vocab: [["rub", "磨"], ["heels", "后跟"]],
      },
      {
        zh: "要是我看了洗涤符号，这件毛衣现在就不会起球成这样。",
        en: "If I had checked the wash symbols, this sweater wouldn't be pilling like this now.",
        vocab: [["wash symbols", "洗涤符号"], ["pill", "起球"]],
      },
    ],
  },
  {
    structure: "whereas / while + 购物对比",
    grammar: ["对比品牌、渠道或买法", "whereas 较正式"],
    tips: "比较线上看和店里看时，while 很自然。",
    items: [
      {
        zh: "我先看做工，而我弟弟几乎只看标牌。",
        en: "I check the workmanship first, whereas my brother almost only looks at the label.",
        vocab: [["workmanship", "做工"], ["label", "标牌"]],
      },
      {
        zh: "我倾向实体店试鞋，而她更相信网上评价里的尺码。",
        en: "I tend to try shoes in a store, while she trusts the size notes in online reviews.",
        vocab: [["reviews", "评价"], ["trust", "相信"]],
      },
      {
        zh: "我可能买基础款，而朋友专挑限定配色。",
        en: "I might buy a basic style, whereas my friends go for limited colorways.",
        vocab: [["basic", "基础的"], ["colorways", "配色"]],
      },
      {
        zh: "超市里我看单位价，而有人只被大包装打动。",
        en: "In the supermarket I watch unit prices, while some people are only impressed by bulk packs.",
        vocab: [["unit prices", "单位价"], ["bulk packs", "大包装"]],
      },
      {
        zh: "我把旧物卖掉再买新的，而他直接添置第二件。",
        en: "I sell the old item before buying a new one, whereas he simply adds a second.",
        vocab: [["sell", "卖掉"], ["add", "添置"]],
      },
      {
        zh: "我问保修细节，而店员更想强调折扣百分比。",
        en: "I ask about warranty details, while the clerk would rather stress the discount percentage.",
        vocab: [["warranty", "保修"], ["stress", "强调"]],
      },
      {
        zh: "我喜欢中午人少时逛，而周末夜场总是更挤。",
        en: "I prefer browsing at midday, whereas weekend evenings are always more crowded.",
        vocab: [["browse", "逛"], ["midday", "中午"]],
      },
      {
        zh: "我把比价表格发给家人，而他们只看我圈出的那一款。",
        en: "I send a comparison table to the family, while they only look at the one I circled.",
        vocab: [["comparison table", "比价表"], ["circle", "圈出"]],
      },
    ],
  },
  {
    structure: "as long as / provided that + 购买条件",
    grammar: ["只要退换/尺码/预算满足", "从句现在时"],
    tips: "谈下单条件时，provided that 显得更谨慎。",
    items: [
      {
        zh: "只要能免费改裤长，我就可以买这条稍微长的。",
        en: "I can take this slightly long pair as long as the hems can be altered for free.",
        vocab: [["altered", "改"], ["for free", "免费"]],
      },
      {
        zh: "只要七天内可退，我或许会先下单再慢慢看颜色。",
        en: "I might order first and judge the color later, provided that returns are allowed within seven days.",
        vocab: [["returns", "退货"], ["judge", "判断"]],
      },
      {
        zh: "只要总价不超过预算，我可以加上那双袜子。",
        en: "I can add those socks as long as the total stays inside the budget.",
        vocab: [["budget", "预算"], ["total", "总价"]],
      },
      {
        zh: "只要发票抬头能开公司，财务就不会拒这份报销。",
        en: "Finance will not reject the claim, provided that the invoice can be issued to the company.",
        vocab: [["invoice", "发票"], ["issued", "开具"]],
      },
      {
        zh: "只要这台风扇噪音可接受，我就不再看更贵的型号。",
        en: "I will not look at a pricier model as long as this fan's noise is acceptable.",
        vocab: [["pricier", "更贵的"], ["acceptable", "可接受的"]],
      },
      {
        zh: "只要导购把缺货写进小票，我可以先付定金。",
        en: "I can pay a deposit, provided that the clerk writes the shortage on the receipt.",
        vocab: [["deposit", "定金"], ["shortage", "缺货"]],
      },
      {
        zh: "只要成分里没有那味香精，我就可以买这瓶乳液。",
        en: "I can buy this lotion as long as that fragrance is not in the ingredients.",
        vocab: [["fragrance", "香精"], ["lotion", "乳液"]],
      },
      {
        zh: "只要运费险还在，我可能先买两个尺码回去试。",
        en: "I might order two sizes to try, provided that shipping insurance still applies.",
        vocab: [["shipping insurance", "运费险"], ["apply", "仍有效"]],
      },
    ],
  },
  {
    structure: "despite + 名词 / 动名词",
    grammar: ["despite 接折扣或拥挤", "不接从句"],
    tips: "despite the discount 后仍可接谨慎决定。",
    items: [
      {
        zh: "尽管折扣很大，我还是把不需要的赠品放下了。",
        en: "Despite the deep discount, I still put back the free extra I did not need.",
        vocab: [["deep discount", "很大折扣"], ["put back", "放下"]],
      },
      {
        zh: "尽管试衣间排队，我还是坚持先试再买。",
        en: "Despite the fitting-room queue, I still insisted on trying it on first.",
        vocab: [["fitting-room", "试衣间"], ["insist on", "坚持"]],
      },
      {
        zh: "尽管广告很响，货架上的说明还是写得很清楚。",
        en: "Despite the loud advertising, the shelf notes were still clearly written.",
        vocab: [["advertising", "广告"], ["shelf notes", "货架说明"]],
      },
      {
        zh: "尽管我很想立刻付款，我还是先算了单价。",
        en: "Despite wanting to pay at once, I still calculated the unit price first.",
        vocab: [["unit price", "单价"], ["calculate", "计算"]],
      },
      {
        zh: "尽管下雨，市场里的布料摊还是照常开着。",
        en: "Despite the rain, the fabric stalls in the market still stayed open.",
        vocab: [["stalls", "摊位"], ["fabric", "布料"]],
      },
      {
        zh: "尽管尺码表看起来准，实际腰围还是偏紧。",
        en: "Despite an accurate-looking size chart, the waist still felt tight.",
        vocab: [["size chart", "尺码表"], ["waist", "腰围"]],
      },
      {
        zh: "尽管店员一再推荐，我还是选了更朴素的那一款。",
        en: "Despite the clerk's repeated recommendations, I still chose the plainer model.",
        vocab: [["recommendations", "推荐"], ["plainer", "更朴素的"]],
      },
      {
        zh: "尽管包装已经拆过，只要功能完好我仍可能接受。",
        en: "Despite the opened packaging, I might still accept it provided the function is intact.",
        vocab: [["intact", "完好的"], ["packaging", "包装"]],
      },
    ],
  },
  {
    structure: "unless + 现在时",
    grammar: ["unless 设购买红线", "从句现在时"],
    tips: "unless it fits 比 if it does not fit 更干脆。",
    items: [
      {
        zh: "除非肩线服帖，否则这件外套我不会买。",
        en: "I will not buy this coat unless the shoulder line sits properly.",
        vocab: [["shoulder line", "肩线"], ["sit", "服帖"]],
      },
      {
        zh: "除非能开发票，否则这笔办公用品我可能先不买。",
        en: "I might not buy these office supplies unless an invoice can be issued.",
        vocab: [["office supplies", "办公用品"], ["invoice", "发票"]],
      },
      {
        zh: "除非看清退换规则，否则我不会付定金。",
        en: "I will not pay a deposit unless I have read the exchange rules clearly.",
        vocab: [["deposit", "定金"], ["exchange rules", "退换规则"]],
      },
      {
        zh: "除非袜子是独立包装，否则我不会买超市散装那一筐。",
        en: "I will not take the loose supermarket socks unless they are individually wrapped.",
        vocab: [["loose", "散装的"], ["wrapped", "包装的"]],
      },
      {
        zh: "除非导购量过我的脚，否则我不会只听“你该买大一码”。",
        en: "I will not just accept “buy a size up” unless the assistant has measured my foot.",
        vocab: [["size up", "大一码"], ["measure", "量"]],
      },
      {
        zh: "除非电池可换，否则这个遥控器我不会考虑。",
        en: "I will not consider this remote unless the batteries can be replaced.",
        vocab: [["remote", "遥控器"], ["replaced", "可更换"]],
      },
      {
        zh: "除非把运费算进去仍更便宜，否则我还是去附近超市。",
        en: "I will still go to the nearby supermarket unless online is cheaper after shipping.",
        vocab: [["shipping", "运费"], ["nearby", "附近的"]],
      },
      {
        zh: "除非成分表完整，否则我不会买无标签的瓶装清洁剂。",
        en: "I will not buy an unlabeled cleaner unless the ingredient list is complete.",
        vocab: [["unlabeled", "无标签的"], ["cleaner", "清洁剂"]],
      },
    ],
  },
  {
    structure: "would rather + 原形 than + 原形",
    grammar: ["宁愿多问少买", "两边原形"],
    tips: "I'd rather wait for restock than take the wrong size。",
    items: [
      {
        zh: "我宁愿等补货，也不想硬穿小一码。",
        en: "I would rather wait for a restock than force a size that is too small.",
        vocab: [["restock", "补货"], ["force", "硬穿"]],
      },
      {
        zh: "我宁愿少买一件，也要把面料成分看完。",
        en: "I would rather buy one item fewer than skip the fabric composition.",
        vocab: [["composition", "成分"], ["skip", "跳过"]],
      },
      {
        zh: "我宁愿走去另一家店，也不想在这一家被催单。",
        en: "I would rather walk to another shop than be rushed at the till here.",
        vocab: [["rushed", "被催"], ["till", "收银台"]],
      },
      {
        zh: "我宁愿付一点改衣费，也不想袖子老是盖住手。",
        en: "I would rather pay a small alteration fee than keep sleeves covering my hands.",
        vocab: [["alteration fee", "改衣费"], ["sleeves", "袖子"]],
      },
      {
        zh: "我宁愿把购物车放一夜，也不想凌晨下单后后悔。",
        en: "I would rather leave the cart overnight than order at midnight and regret it.",
        vocab: [["overnight", "放一夜"], ["regret", "后悔"]],
      },
      {
        zh: "我宁愿买可加水的墨水，也不想每次都换整支笔。",
        en: "I would rather buy refillable ink than replace the whole pen every time.",
        vocab: [["refillable", "可加水的"], ["replace", "更换"]],
      },
      {
        zh: "我宁愿问清是否含安装，也不想货到了才发现要另付。",
        en: "I would rather ask whether installation is included than discover an extra fee on delivery.",
        vocab: [["installation", "安装"], ["on delivery", "货到时"]],
      },
      {
        zh: "我宁愿把旧耳机修好，也不想再买一副只会用三个月的。",
        en: "I would rather repair the old earphones than buy another pair I might use for three months.",
        vocab: [["repair", "修好"], ["pair", "一副"]],
      },
    ],
  },
  {
    structure: "so that / in case + 购物预防",
    grammar: ["so that 方便退换", "in case 防止买错"],
    tips: "in case the size is wrong 用现在时。",
    items: [
      {
        zh: "我把吊牌装进信封，以便退货时能对上款号。",
        en: "I put the tag in an envelope so that I could match the style number if I returned it.",
        vocab: [["style number", "款号"], ["return", "退货"]],
      },
      {
        zh: "我拍了货架价签，以防结账时价格对不上。",
        en: "I photographed the shelf tag in case the till price did not match.",
        vocab: [["shelf tag", "价签"], ["match", "对上"]],
      },
      {
        zh: "我量了书桌宽度，以便柜子推回家能放得下。",
        en: "I measured the desk width so that the cabinet would actually fit when I got it home.",
        vocab: [["width", "宽度"], ["cabinet", "柜子"]],
      },
      {
        zh: "我要了备用纽扣，以防第一颗在通勤时掉了。",
        en: "I asked for a spare button in case the first one fell off on my commute.",
        vocab: [["spare button", "备用纽扣"], ["fall off", "掉"]],
      },
      {
        zh: "我把电池型号写在盒子上，以便下次不用再拆机看。",
        en: "I wrote the battery type on the box so that I would not need to open the device next time.",
        vocab: [["battery type", "电池型号"], ["device", "设备"]],
      },
      {
        zh: "我先问清是否能开箱验货，以免回家才发现划痕。",
        en: "I asked whether I could inspect it on opening so that I would not find scratches only at home.",
        vocab: [["inspect", "验货"], ["scratches", "划痕"]],
      },
      {
        zh: "我把快递柜取件码转发家人，以防自己加班取不了。",
        en: "I forwarded the locker code to my family in case I worked late and could not collect it.",
        vocab: [["locker code", "取件码"], ["collect", "取"]],
      },
      {
        zh: "我留了纸质小票，以便没有信号时也能办理保修。",
        en: "I kept the paper receipt so that I could still start a warranty claim without a signal.",
        vocab: [["paper receipt", "纸质小票"], ["warranty claim", "保修申请"]],
      },
    ],
  },
];

const dining: SentenceGroup[] = [
  {
    structure: "Although + 从句, 主句",
    grammar: ["although 承认餐厅限制", "主句仍提出具体请求"],
    tips: "点餐时 although 常用来接受没有某菜，再换一种。",
    items: [
      {
        zh: "虽然厨房已经停了热菜，我们还是点了两份凉面。",
        en: "Although the kitchen had stopped hot dishes, we still ordered two cold noodle plates.",
        vocab: [["hot dishes", "热菜"], ["cold noodle", "凉面"]],
      },
      {
        zh: "虽然菜单没有英文，我还是靠照片点到了想吃的那碗。",
        en: "Although the menu had no English, I still ordered the bowl I wanted from the photos.",
        vocab: [["menu", "菜单"], ["bowl", "那碗"]],
      },
      {
        zh: "虽然座位靠过道，我们还是先坐下把水要了。",
        en: "Although the seats were by the aisle, we still sat down and asked for water first.",
        vocab: [["aisle", "过道"], ["ask for", "要"]],
      },
      {
        zh: "虽然我不太能吃辣，我还是要了微辣好对比口味。",
        en: "Although I cannot handle much heat, I still asked for mild spice to compare the flavor.",
        vocab: [["heat", "辣度"], ["mild", "微辣"]],
      },
      {
        zh: "虽然服务员很忙，我还是把过敏原说清楚了。",
        en: "Although the waiter was busy, I still stated the allergen clearly.",
        vocab: [["allergen", "过敏原"], ["state", "说清楚"]],
      },
      {
        zh: "虽然套餐看起来划算，我可能还是单点汤。",
        en: "Although the set looks good value, I might still order the soup separately.",
        vocab: [["set", "套餐"], ["separately", "单点"]],
      },
      {
        zh: "虽然面包已经上桌，我还是等汤来了一起吃。",
        en: "Although the bread was already on the table, I still waited for the soup before eating.",
        vocab: [["already", "已经"], ["wait for", "等"]],
      },
      {
        zh: "虽然店里在放很响的歌，我们还是把账单对清楚了。",
        en: "Although the shop was playing loud music, we still checked the bill carefully.",
        vocab: [["bill", "账单"], ["carefully", "清楚地"]],
      },
    ],
  },
  {
    structure: "Even though + 从句, 主句",
    grammar: ["even though 强调已知情况仍礼貌点餐", "后接从句"],
    tips: "even though the restaurant is full 仍可排队或改时间。",
    items: [
      {
        zh: "即便已经客满，前台还是让我们先在吧台等。",
        en: "Even though the restaurant was full, the host still let us wait at the bar first.",
        vocab: [["full", "客满"], ["host", "前台"]],
      },
      {
        zh: "即便我点过这道菜，我还是问了今天的辣度。",
        en: "Even though I had ordered this dish before, I still asked about today's spice level.",
        vocab: [["spice level", "辣度"], ["dish", "这道菜"]],
      },
      {
        zh: "即便套餐含米饭，我还是换成了小份面条。",
        en: "Even though the set included rice, I still swapped it for a small serving of noodles.",
        vocab: [["swap ... for", "换成"], ["serving", "一份"]],
      },
      {
        zh: "即便外面在下雨，露台的灯还是亮着等人。",
        en: "Even though it was raining outside, the terrace lights were still on for guests.",
        vocab: [["terrace", "露台"], ["guests", "客人"]],
      },
      {
        zh: "即便甜品车很诱人，我可能先把主菜吃完再决定。",
        en: "Even though the dessert trolley looks tempting, I might finish the main course first.",
        vocab: [["dessert trolley", "甜品车"], ["main course", "主菜"]],
      },
      {
        zh: "即便刀叉放错了，我还是先用餐巾擦了手。",
        en: "Even though the cutlery was set wrongly, I still wiped my hands on the napkin first.",
        vocab: [["cutlery", "刀叉"], ["napkin", "餐巾"]],
      },
      {
        zh: "即便我赶时间，我还是把骨头和壳分开放。",
        en: "Even though I was in a hurry, I still kept the bones and shells on a separate plate.",
        vocab: [["in a hurry", "赶时间"], ["shells", "壳"]],
      },
      {
        zh: "即便服务员推荐了酒，我还是只要了一壶热茶。",
        en: "Even though the waiter recommended wine, I still asked only for a pot of hot tea.",
        vocab: [["recommend", "推荐"], ["pot", "一壶"]],
      },
    ],
  },
  {
    structure: "Rather than + doing, 主句",
    grammar: ["rather than 对比点餐策略", "后接 doing"],
    tips: "rather than ordering everything at once 很常用。",
    items: [
      {
        zh: "与其一开始把菜点满，我们先要了两道再看份量。",
        en: "Rather than filling the table at once, we ordered two dishes first and judged the portions.",
        vocab: [["portions", "份量"], ["fill the table", "点满一桌"]],
      },
      {
        zh: "与其猜菜有多咸，我宁愿先问能否少放酱油。",
        en: "Rather than guessing how salty it is, I would rather ask whether they can use less soy.",
        vocab: [["salty", "咸"], ["soy", "酱油"]],
      },
      {
        zh: "与其在门口争论吃什么，我们先坐下看今日特供。",
        en: "Rather than arguing about the food at the door, we sat down and read the daily specials.",
        vocab: [["specials", "特供"], ["argue", "争论"]],
      },
      {
        zh: "与其把汤和主菜一起上，我请厨房先上汤。",
        en: "Rather than serving the soup with the mains, I asked the kitchen to bring the soup first.",
        vocab: [["mains", "主菜"], ["bring", "上"]],
      },
      {
        zh: "与其默默忍受空调太冷，我可能先借一条披肩。",
        en: "Rather than silently enduring the cold air, I might ask to borrow a shawl first.",
        vocab: [["endure", "忍受"], ["shawl", "披肩"]],
      },
      {
        zh: "与其整瓶点酒，我们更想按杯试两种。",
        en: "Rather than ordering a whole bottle, we would rather try two wines by the glass.",
        vocab: [["by the glass", "按杯"], ["bottle", "整瓶"]],
      },
      {
        zh: "与其把剩下的硬塞进冰箱，我请店员帮忙打包分开。",
        en: "Rather than forcing leftovers into one box, I asked the staff to pack them separately.",
        vocab: [["leftovers", "剩下的"], ["pack", "打包"]],
      },
      {
        zh: "与其只看评分最高的店，我倾向选走路能到的那家。",
        en: "Rather than chasing the highest-rated place, I tend to choose one I can walk to.",
        vocab: [["highest-rated", "评分最高的"], ["walk to", "走路能到"]],
      },
    ],
  },
  {
    structure: "tend to / might + 用餐习惯",
    grammar: ["tend to 固定点餐习惯", "might 视场合调整"],
    tips: "描述自己怎么点菜时，tend to 比 I always 更自然。",
    items: [
      {
        zh: "点火锅时我往往先问清锅底能不能减辣。",
        en: "When I order hotpot I tend to ask whether the base can be made less spicy.",
        vocab: [["hotpot", "火锅"], ["base", "锅底"]],
      },
      {
        zh: "如果面包是现烤的，我可能会先要半份。",
        en: "If the bread is baked to order, I might ask for a half portion first.",
        vocab: [["baked to order", "现烤"], ["portion", "一份"]],
      },
      {
        zh: "我倾向于把酱料先尝一点，再决定要不要全倒。",
        en: "I tend to taste a little of the sauce before I pour all of it.",
        vocab: [["sauce", "酱料"], ["pour", "倒"]],
      },
      {
        zh: "人多的时候我可能先让别人点主食，我来补蔬菜。",
        en: "In a large group I might let others pick the mains while I add the vegetables.",
        vocab: [["mains", "主食/主菜"], ["add", "补上"]],
      },
      {
        zh: "午餐我往往避开最油的那道，以免下午犯困。",
        en: "At lunch I tend to avoid the greasiest dish so I do not get sleepy in the afternoon.",
        vocab: [["greasiest", "最油的"], ["sleepy", "犯困"]],
      },
      {
        zh: "如果茶位费写得不清楚，我可能会先问一句。",
        en: "If the tea charge is unclear, I might ask about it before we sit down.",
        vocab: [["tea charge", "茶位费"], ["unclear", "不清楚"]],
      },
      {
        zh: "我倾向于把骨头吐在小碟里，而不是放回公盘。",
        en: "I tend to put bones on a side plate rather than back on the shared dish.",
        vocab: [["side plate", "小碟"], ["shared dish", "公盘"]],
      },
      {
        zh: "甜点如果份量很大，我可能建议两个人分。",
        en: "If a dessert is huge, I might suggest splitting it between two people.",
        vocab: [["dessert", "甜点"], ["split", "分"]],
      },
    ],
  },
  {
    structure: "in the long run + 用餐选择",
    grammar: ["长期口味/花费/身体", "对比眼前热闹"],
    tips: "选常去的店时，in the long run 谈稳定比谈网红更B2。",
    items: [
      {
        zh: "从长期看，常去一家口味稳定的店，比每周追新店更省心。",
        en: "In the long run, returning to a consistent kitchen is easier than chasing a new place every week.",
        vocab: [["consistent", "稳定的"], ["chase", "追"]],
      },
      {
        zh: "从长期看，少点含糖饮料可能比偶尔节食更有效。",
        en: "In the long run, ordering fewer sugary drinks might work better than the occasional diet.",
        vocab: [["sugary", "含糖的"], ["occasional", "偶尔的"]],
      },
      {
        zh: "从长期看，把过敏说清楚，能减少很多次尴尬退菜。",
        en: "In the long run, stating allergies clearly prevents a lot of awkward sent-back dishes.",
        vocab: [["allergies", "过敏"], ["sent-back", "退回去的"]],
      },
      {
        zh: "从长期看，午餐带便当，聚餐时就可以点得更宽松。",
        en: "In the long run, packing weekday lunches lets you order more freely when you eat out.",
        vocab: [["pack", "带"], ["eat out", "在外吃"]],
      },
      {
        zh: "从长期看，给服务员具体反馈，比只打星更有用。",
        en: "In the long run, giving the waiter specific feedback helps more than only leaving stars.",
        vocab: [["feedback", "反馈"], ["stars", "星级"]],
      },
      {
        zh: "从长期看，学会看菜单里的烹饪方式，点菜会少踩雷。",
        en: "In the long run, learning cooking methods on the menu reduces a lot of disappointing orders.",
        vocab: [["cooking methods", "烹饪方式"], ["disappointing", "踩雷的"]],
      },
      {
        zh: "从长期看，把常点的忌口存进备注，外卖会顺利很多。",
        en: "In the long run, saving usual avoidances in the notes makes takeaway much smoother.",
        vocab: [["avoidances", "忌口"], ["takeaway", "外卖"]],
      },
      {
        zh: "从长期看，选能看清后厨的店，可能比装修更让人放心。",
        en: "In the long run, a kitchen you can see might feel safer than stylish decoration.",
        vocab: [["kitchen", "后厨"], ["decoration", "装修"]],
      },
    ],
  },
  {
    structure: "If + had done, would + 原形（混合条件）",
    grammar: ["过去没问清导致现在被动", "主句谈此刻用餐"],
    tips: "点错复盘用混合条件：要是我问了，现在就不会……",
    items: [
      {
        zh: "要是我先问清是否含坚果，现在就不会把这道甜品推开。",
        en: "If I had asked about nuts, I wouldn't be pushing this dessert away now.",
        vocab: [["nuts", "坚果"], ["push away", "推开"]],
      },
      {
        zh: "要是我预订了靠窗位，我们就不会挤在空调出风口。",
        en: "If I had booked a window table, we wouldn't be sitting under the air vent now.",
        vocab: [["window table", "靠窗位"], ["air vent", "出风口"]],
      },
      {
        zh: "要是我看了今日售罄，现在就不会还在等那道鱼。",
        en: "If I had checked today's sold-out list, I wouldn't still be waiting for that fish.",
        vocab: [["sold-out", "售罄"], ["wait for", "等"]],
      },
      {
        zh: "要是我把人数说对，桌子现在就不用再拼一张。",
        en: "If I had given the right headcount, we wouldn't be joining an extra table now.",
        vocab: [["headcount", "人数"], ["join", "拼"]],
      },
      {
        zh: "要是我提前说少盐，这汤现在就不会这么咸。",
        en: "If I had asked for less salt earlier, this soup wouldn't taste this salty now.",
        vocab: [["less salt", "少盐"], ["salty", "咸"]],
      },
      {
        zh: "要是我带了现金，我们就不会因为只收卡而换店。",
        en: "If I had brought cash, we wouldn't be changing restaurants because they are card-only.",
        vocab: [["card-only", "只收卡"], ["cash", "现金"]],
      },
      {
        zh: "要是我看清营业时间，现在就不会站在拉上的卷帘前。",
        en: "If I had read the opening hours, I wouldn't be standing in front of a closed shutter now.",
        vocab: [["opening hours", "营业时间"], ["shutter", "卷帘"]],
      },
      {
        zh: "要是我把儿童椅提前要了，孩子现在就不会坐得不稳。",
        en: "If I had requested a high chair earlier, the child wouldn't be sitting so unsteadily now.",
        vocab: [["high chair", "儿童椅"], ["unsteadily", "不稳地"]],
      },
    ],
  },
  {
    structure: "whereas / while + 用餐对比",
    grammar: ["对比口味或点餐方式", "while 很口语"],
    tips: "描述同桌差异时，whereas 比 but 更整齐。",
    items: [
      {
        zh: "我喜欢清淡的汤底，而她几乎每餐都要辣。",
        en: "I prefer a light broth, whereas she wants chili with almost every meal.",
        vocab: [["broth", "汤底"], ["chili", "辣"]],
      },
      {
        zh: "我先看素菜，而同事总是先点肉。",
        en: "I look at the vegetable dishes first, while my colleagues always start with meat.",
        vocab: [["vegetable dishes", "素菜"], ["start with", "先点"]],
      },
      {
        zh: "我可能只要 tap water，而有人会点气泡水。",
        en: "I might just ask for tap water, whereas some people order sparkling water.",
        vocab: [["tap water", "自来水"], ["sparkling", "气泡的"]],
      },
      {
        zh: "我把酱料分碟，而他喜欢全部拌进面里。",
        en: "I keep the sauce in a side dish, while he likes mixing all of it into the noodles.",
        vocab: [["side dish", "分碟"], ["mix", "拌"]],
      },
      {
        zh: "午餐我吃得快，而晚饭我会把每道菜都尝完再评。",
        en: "I eat quickly at lunch, whereas at dinner I taste every dish before commenting.",
        vocab: [["taste", "尝"], ["comment", "评"]],
      },
      {
        zh: "我倾向拼桌省位，而朋友想要安静的卡座。",
        en: "I tend to share a table to save space, while my friends want a quiet booth.",
        vocab: [["share a table", "拼桌"], ["booth", "卡座"]],
      },
      {
        zh: "我看重量点海鲜，而菜单只写了市场价。",
        en: "I order seafood by weight, whereas the menu only lists a market price.",
        vocab: [["by weight", "按重量"], ["market price", "市场价"]],
      },
      {
        zh: "我把骨头放到自己碟里，而有人会堆回公盘边缘。",
        en: "I keep bones on my own plate, while some people pile them back on the shared rim.",
        vocab: [["rim", "边缘"], ["pile", "堆"]],
      },
    ],
  },
  {
    structure: "as long as / provided that + 用餐条件",
    grammar: ["只要口味/过敏/时间允许", "从句现在时"],
    tips: "点菜附加条件用 provided that 很清楚。",
    items: [
      {
        zh: "只要能把香菜去掉，这道凉菜我就可以点。",
        en: "I can order this cold dish as long as the coriander can be left out.",
        vocab: [["coriander", "香菜"], ["leave out", "去掉"]],
      },
      {
        zh: "只要厨房还能做小份，我们或许不点第二道主食。",
        en: "We might skip a second staple, provided that the kitchen can still do a small portion.",
        vocab: [["staple", "主食"], ["small portion", "小份"]],
      },
      {
        zh: "只要座位不靠音箱，我就可以接受大厅中央。",
        en: "I can accept a table in the middle as long as it is not beside the speakers.",
        vocab: [["speakers", "音箱"], ["in the middle", "中央"]],
      },
      {
        zh: "只要账单能分开，我们五个人可以继续坐一桌。",
        en: "The five of us can stay at one table, provided that the bill can be split.",
        vocab: [["split", "分开"], ["bill", "账单"]],
      },
      {
        zh: "只要汤不要太烫，孩子就可以先喝一口。",
        en: "The child can take a sip first as long as the soup is not too hot.",
        vocab: [["sip", "一口"], ["too hot", "太烫"]],
      },
      {
        zh: "只要能换成糙米，我可能接受这份套餐。",
        en: "I might take the set, provided that the rice can be swapped for brown rice.",
        vocab: [["brown rice", "糙米"], ["swap", "换成"]],
      },
      {
        zh: "只要门口能停自行车，我们就不用再找停车位。",
        en: "We will not need a car space as long as bikes can be left by the entrance.",
        vocab: [["entrance", "门口"], ["car space", "停车位"]],
      },
      {
        zh: "只要服务员把过敏写进单子，我就比较放心。",
        en: "I feel safer, provided that the waiter writes the allergy on the ticket.",
        vocab: [["allergy", "过敏"], ["ticket", "点菜单"]],
      },
    ],
  },
  {
    structure: "despite + 名词 / 动名词",
    grammar: ["despite 接嘈杂、等待、价格", "不接从句"],
    tips: "despite the wait 后仍可说食物值得。",
    items: [
      {
        zh: "尽管排队四十分钟，这碗汤面还是值得。",
        en: "Despite the forty-minute wait, the bowl of noodle soup was still worth it.",
        vocab: [["wait", "排队等待"], ["worth it", "值得"]],
      },
      {
        zh: "尽管店里很吵，服务员还是把要求记准确了。",
        en: "Despite the noise, the waiter still wrote the request down accurately.",
        vocab: [["request", "要求"], ["accurately", "准确地"]],
      },
      {
        zh: "尽管我已经很饱，我还是尝了一口朋友的甜点。",
        en: "Despite already feeling full, I still tried a bite of my friend's dessert.",
        vocab: [["full", "饱"], ["bite", "一口"]],
      },
      {
        zh: "尽管菜单印错了价格，柜台还是按低价收了。",
        en: "Despite the misprinted price, the counter still charged the lower amount.",
        vocab: [["misprinted", "印错的"], ["charge", "收取"]],
      },
      {
        zh: "尽管风很大，我们还是把热汤端到了露台。",
        en: "Despite the strong wind, we still carried the hot soup out to the terrace.",
        vocab: [["carry", "端"], ["terrace", "露台"]],
      },
      {
        zh: "尽管我赶火车，我还是把骨头剔干净了再走。",
        en: "Despite rushing for a train, I still took the bones out before I left.",
        vocab: [["rush for", "赶"], ["take out", "剔出"]],
      },
      {
        zh: "尽管灯光很暗，我还是看清了账单上的服务费。",
        en: "Despite the dim lighting, I still spotted the service charge on the bill.",
        vocab: [["dim", "暗的"], ["service charge", "服务费"]],
      },
      {
        zh: "尽管第一次来，我还是按习惯先问了最清淡的汤。",
        en: "Despite it being my first visit, I still asked for the lightest soup as usual.",
        vocab: [["first visit", "第一次来"], ["lightest", "最清淡的"]],
      },
    ],
  },
  {
    structure: "unless + 现在时",
    grammar: ["unless 设点餐底线", "从句现在时"],
    tips: "unless it is vegetarian 比一长串 if not 更利落。",
    items: [
      {
        zh: "除非能确认没有花生，否则我不会点这道沙司。",
        en: "I will not order this sauce unless they confirm there are no peanuts.",
        vocab: [["peanuts", "花生"], ["confirm", "确认"]],
      },
      {
        zh: "除非厨房还能做，否则我们改点已经做好的冷盘。",
        en: "We will switch to a ready cold plate unless the kitchen can still cook that dish.",
        vocab: [["cold plate", "冷盘"], ["switch to", "改点"]],
      },
      {
        zh: "除非把茶位费写明白，否则我可能换一家。",
        en: "I might go elsewhere unless the tea charge is written clearly.",
        vocab: [["tea charge", "茶位费"], ["elsewhere", "换一家"]],
      },
      {
        zh: "除非孩子先吃完主食，否则我不会上甜品。",
        en: "I will not order dessert unless the child has finished the main food first.",
        vocab: [["dessert", "甜品"], ["main food", "主食"]],
      },
      {
        zh: "除非能坐无烟区，否则我们不会在一楼留下来。",
        en: "We will not stay on the ground floor unless a non-smoking section is available.",
        vocab: [["non-smoking", "无烟的"], ["ground floor", "一楼"]],
      },
      {
        zh: "除非汤能少油，否则我改喝清汤。",
        en: "I will switch to a clear soup unless they can make this one less oily.",
        vocab: [["oily", "油的"], ["clear soup", "清汤"]],
      },
      {
        zh: "除非把人数算进最低消费，否则我先不点酒。",
        en: "I will not order wine first unless the cover charge already counts our headcount.",
        vocab: [["cover charge", "最低消费"], ["count", "算进"]],
      },
      {
        zh: "除非刀叉干净，否则我会再要一套。",
        en: "I will ask for another set unless the cutlery is clean.",
        vocab: [["cutlery", "刀叉"], ["set", "一套"]],
      },
    ],
  },
  {
    structure: "would rather + 原形 than + 原形",
    grammar: ["宁愿选更稳妥的吃法", "两边原形"],
    tips: "I'd rather share a dessert than order two heavy ones。",
    items: [
      {
        zh: "我宁愿把辣酱另上，也不想一口就被呛到。",
        en: "I would rather have the chili served separately than get overwhelmed in one bite.",
        vocab: [["separately", "另上"], ["overwhelmed", "被呛到、受不了"]],
      },
      {
        zh: "我宁愿多等五分钟，也不想吃回锅的油条。",
        en: "I would rather wait five more minutes than eat reheated dough sticks.",
        vocab: [["reheated", "回锅的"], ["dough sticks", "油条"]],
      },
      {
        zh: "我宁愿两人分一份肉，也不想剩半盘带回家。",
        en: "I would rather split one meat dish than take half a plate home.",
        vocab: [["split", "分"], ["take home", "带回家"]],
      },
      {
        zh: "我宁愿坐角落，也不想整晚对着厨房门。",
        en: "I would rather sit in the corner than face the kitchen door all evening.",
        vocab: [["corner", "角落"], ["face", "对着"]],
      },
      {
        zh: "我宁愿先问清是否含酒，也不想误点进儿童套餐。",
        en: "I would rather ask whether it contains alcohol than put it in a child's set by mistake.",
        vocab: [["contain", "含有"], ["by mistake", "误"]],
      },
      {
        zh: "我宁愿把汤喝完再上炒饭，也不想两道一起凉。",
        en: "I would rather finish the soup before the fried rice arrives than let both go cold.",
        vocab: [["fried rice", "炒饭"], ["go cold", "变凉"]],
      },
      {
        zh: "我宁愿自己倒茶，也不想让壶嘴对着别人。",
        en: "I would rather pour the tea myself than point the pot spout at someone else.",
        vocab: [["pour", "倒"], ["spout", "壶嘴"]],
      },
      {
        zh: "我宁愿把评价写具体，也不想只丢一句“还行”。",
        en: "I would rather write a specific review than leave only a vague “it was okay.”",
        vocab: [["review", "评价"], ["vague", "含糊的"]],
      },
    ],
  },
  {
    structure: "so that / in case + 用餐目的",
    grammar: ["so that 让上菜顺利", "in case 防止过敏或点错"],
    tips: "in case someone is allergic 用现在时。",
    items: [
      {
        zh: "我把过敏写在纸条上，以便服务员转给后厨时不漏。",
        en: "I wrote the allergy on a slip so that the waiter would not drop it when telling the kitchen.",
        vocab: [["slip", "纸条"], ["drop", "漏掉"]],
      },
      {
        zh: "我们先点了不辣的菜，以防有人完全吃不了辣椒。",
        en: "We ordered a mild dish first in case someone cannot handle chili at all.",
        vocab: [["mild", "不辣的"], ["handle", "吃得了"]],
      },
      {
        zh: "我把儿童餐具提前要了，以便孩子一坐下就能吃。",
        en: "I asked for children's cutlery early so that the child could start as soon as we sat down.",
        vocab: [["cutlery", "餐具"], ["as soon as", "一……就"]],
      },
      {
        zh: "我拍了菜单上的编号，以免口音让店员听错。",
        en: "I photographed the menu number in case my accent made the staff hear the wrong item.",
        vocab: [["accent", "口音"], ["item", "那一道"]],
      },
      {
        zh: "我们把位置留给先到的人，以便后来者不用站着点。",
        en: "We saved seats for those who arrived first so that latecomers would not order while standing.",
        vocab: [["latecomers", "后来者"], ["save seats", "留座"]],
      },
      {
        zh: "我带了便携筷子，以防店里只有一次性的。",
        en: "I brought travel chopsticks in case the restaurant only had disposable ones.",
        vocab: [["travel chopsticks", "便携筷子"], ["disposable", "一次性的"]],
      },
      {
        zh: "我先确认是否能打包热汤，以免外卖洒在包里。",
        en: "I checked whether hot soup could be packed so that it would not spill inside my bag.",
        vocab: [["pack", "打包"], ["spill", "洒"]],
      },
      {
        zh: "我把停车票放进钱包，以便结账时能顺便盖章。",
        en: "I put the parking ticket in my wallet so that we could get it stamped when paying.",
        vocab: [["parking ticket", "停车票"], ["stamp", "盖章"]],
      },
    ],
  },
];

const health: SentenceGroup[] = [
  {
    structure: "Although + 从句, 主句",
    grammar: ["although 承认不适仍采取稳妥行动", "主句给出具体做法"],
    tips: "健康话题里 although 常用来承认还能撑，但仍去处理。",
    items: [
      {
        zh: "虽然喉咙只是有点紧，我还是把今天的训练减半了。",
        en: "Although my throat only felt tight, I still cut today's training in half.",
        vocab: [["tight", "发紧的"], ["cut ... in half", "减半"]],
      },
      {
        zh: "虽然药盒还剩两片，我还是先约了复查。",
        en: "Although two tablets were left, I still booked a follow-up first.",
        vocab: [["tablets", "药片"], ["follow-up", "复查"]],
      },
      {
        zh: "虽然我不太想抽血，我还是把空腹要求记下来了。",
        en: "Although I disliked the blood test, I still wrote down the fasting instructions.",
        vocab: [["blood test", "抽血"], ["fasting", "空腹"]],
      },
      {
        zh: "虽然酸痛还在，我还是坚持把拉伸做完。",
        en: "Although the soreness was still there, I still finished the stretches.",
        vocab: [["soreness", "酸痛"], ["stretches", "拉伸"]],
      },
      {
        zh: "虽然天气转暖，我可能还是戴着薄围巾出门。",
        en: "Although the weather has turned warmer, I might still wear a light scarf outside.",
        vocab: [["light scarf", "薄围巾"], ["turn warmer", "转暖"]],
      },
      {
        zh: "虽然夜班结束了，我还是先补水再睡觉。",
        en: "Although the night shift was over, I still drank water before I slept.",
        vocab: [["night shift", "夜班"], ["drink water", "补水"]],
      },
      {
        zh: "虽然我能走路，我还是让同事扶了一下楼梯。",
        en: "Although I could walk, I still let a colleague steady me on the stairs.",
        vocab: [["steady", "扶稳"], ["colleague", "同事"]],
      },
      {
        zh: "虽然结果还没出，我还是把症状按时间写进笔记。",
        en: "Although the results were not ready, I still logged the symptoms by time.",
        vocab: [["results", "结果"], ["log", "记下"]],
      },
    ],
  },
  {
    structure: "Even though + 从句, 主句",
    grammar: ["even though 强调已知不适仍遵守医嘱", "后接从句"],
    tips: "even though I feel better 不等于可以停药。",
    items: [
      {
        zh: "即便我已经不发烧，我还是按医嘱把疗程吃完。",
        en: "Even though the fever had gone, I still finished the course as instructed.",
        vocab: [["fever", "发烧"], ["course", "疗程"]],
      },
      {
        zh: "即便诊所很近，我还是提前十分钟到，免得填表匆忙。",
        en: "Even though the clinic is nearby, I still arrived ten minutes early to avoid rushing the forms.",
        vocab: [["clinic", "诊所"], ["forms", "表格"]],
      },
      {
        zh: "即便膝盖只是隐隐作痛，我还是换了平路散步。",
        en: "Even though my knee only ached faintly, I still switched to a flat walk.",
        vocab: [["faintly", "隐隐地"], ["flat", "平的"]],
      },
      {
        zh: "即便护士说可以喝水，我还是再确认了检查项目。",
        en: "Even though the nurse said I could drink, I still confirmed which tests were booked.",
        vocab: [["confirm", "确认"], ["tests", "检查项目"]],
      },
      {
        zh: "即便口罩有点闷，我在候诊室还是戴着。",
        en: "Even though the mask felt stuffy, I still kept it on in the waiting room.",
        vocab: [["stuffy", "闷的"], ["waiting room", "候诊室"]],
      },
      {
        zh: "即便我能忍受轻微头晕，我还是没开车去医院。",
        en: "Even though I could tolerate slight dizziness, I still did not drive to the hospital.",
        vocab: [["tolerate", "忍受"], ["dizziness", "头晕"]],
      },
      {
        zh: "即便理疗要自费一部分，我可能还是把次数排满。",
        en: "Even though physiotherapy is partly self-paid, I might still book the full set of sessions.",
        vocab: [["physiotherapy", "理疗"], ["sessions", "次数"]],
      },
      {
        zh: "即便晚上睡得好些了，我还是把咖啡留到上午。",
        en: "Even though I slept a bit better, I still kept coffee for the morning only.",
        vocab: [["slept better", "睡得好些"], ["keep ... for", "留到"]],
      },
    ],
  },
  {
    structure: "Rather than + doing, 主句",
    grammar: ["rather than 避开不稳妥的自处理", "后接 doing"],
    tips: "健康建议里 rather than 常对比“硬撑/乱停药”和“去问”。",
    items: [
      {
        zh: "与其把止痛片加量，我更想先问药剂师间隔时间。",
        en: "Rather than increasing the painkillers, I would rather ask the pharmacist about the interval.",
        vocab: [["painkillers", "止痛片"], ["interval", "间隔"]],
      },
      {
        zh: "与其忍着牙痛开会，我倾向先挂一个急诊号。",
        en: "Rather than sitting through a meeting with toothache, I tend to book an urgent dental slot first.",
        vocab: [["toothache", "牙痛"], ["dental slot", "牙科号"]],
      },
      {
        zh: "与其夜里反复量体温，我先把室温调低一点。",
        en: "Rather than taking my temperature all night, I lowered the room temperature a little first.",
        vocab: [["temperature", "体温/室温"], ["lower", "调低"]],
      },
      {
        zh: "与其自己停药，我把漏服的情况写给医生看。",
        en: "Rather than stopping the medicine myself, I wrote down the missed doses for the doctor.",
        vocab: [["missed doses", "漏服"], ["medicine", "药"]],
      },
      {
        zh: "与其继续用旧眼镜凑合，我可能先做一次验光。",
        en: "Rather than making do with old glasses, I might get my eyes tested first.",
        vocab: [["make do", "凑合"], ["eyes tested", "验光"]],
      },
      {
        zh: "与其把扭伤当成普通酸痛，我先用冰敷并抬高。",
        en: "Rather than treating the sprain as ordinary soreness, I iced it and kept it raised first.",
        vocab: [["sprain", "扭伤"], ["ice", "冰敷"]],
      },
      {
        zh: "与其在网上对比偏方，我把问题列成三条带去问诊。",
        en: "Rather than comparing home remedies online, I listed three questions for the appointment.",
        vocab: [["home remedies", "偏方"], ["appointment", "问诊"]],
      },
      {
        zh: "与其饭后立刻躺下，我宁愿先慢走十分钟。",
        en: "Rather than lying down right after a meal, I would rather walk slowly for ten minutes.",
        vocab: [["lie down", "躺下"], ["right after", "立刻在……之后"]],
      },
    ],
  },
  {
    structure: "tend to / might + 健康习惯",
    grammar: ["tend to 稳定习惯", "might 视症状调整"],
    tips: "描述身体反应用 tend to，避免说成绝对规律。",
    items: [
      {
        zh: "久坐之后我往往先站起来转转脚踝。",
        en: "After sitting for a long time I tend to stand up and roll my ankles first.",
        vocab: [["roll", "转转"], ["ankles", "脚踝"]],
      },
      {
        zh: "如果午睡超过四十分钟，我下午可能会更困。",
        en: "If a nap lasts more than forty minutes, I might feel sleepier in the afternoon.",
        vocab: [["nap", "午睡"], ["sleepier", "更困"]],
      },
      {
        zh: "换季时我倾向于把润喉糖放进包里，而不是等嗓子哑了再找。",
        en: "In the changing season I tend to keep lozenges in my bag rather than hunt when my voice goes.",
        vocab: [["lozenges", "润喉糖"], ["voice goes", "嗓子哑"]],
      },
      {
        zh: "量血压前我可能先坐五分钟，以免数字虚高。",
        en: "Before I measure blood pressure I might sit for five minutes so the reading is not inflated.",
        vocab: [["blood pressure", "血压"], ["inflated", "虚高"]],
      },
      {
        zh: "我往往把药和早餐放在一起，免得漏服。",
        en: "I tend to keep the pills next to breakfast so I do not miss a dose.",
        vocab: [["pills", "药"], ["miss a dose", "漏服"]],
      },
      {
        zh: "天气干燥时我可能会把加湿器开到低档。",
        en: "When the air is dry I might run the humidifier on a low setting.",
        vocab: [["humidifier", "加湿器"], ["setting", "档位"]],
      },
      {
        zh: "运动后我倾向于先补水，再考虑蛋白饮。",
        en: "After exercise I tend to drink water first rather than reaching for a protein drink.",
        vocab: [["protein drink", "蛋白饮"], ["reach for", "去拿"]],
      },
      {
        zh: "眼睛发酸时我可能先把屏幕亮度调低，而不是再刷一小时。",
        en: "When my eyes ache I might dim the screen rather than scrolling for another hour.",
        vocab: [["dim", "调低"], ["scroll", "刷"]],
      },
    ],
  },
  {
    structure: "in the long run + 健康判断",
    grammar: ["长期恢复/习惯", "对比眼前痛快"],
    tips: "谈锻炼和睡眠时，in the long run 比 you must 温和。",
    items: [
      {
        zh: "从长期看，把午睡限在二十分钟，晚上可能睡得更实。",
        en: "In the long run, keeping naps to twenty minutes might make night sleep more solid.",
        vocab: [["naps", "午睡"], ["solid", "更实的"]],
      },
      {
        zh: "从长期看，走路通勤比周末一次暴练更可持续。",
        en: "In the long run, walking to work is more sustainable than one brutal weekend workout.",
        vocab: [["sustainable", "可持续的"], ["brutal", "暴的、过猛的"]],
      },
      {
        zh: "从长期看，把诱因记下来，比每次只处理症状更有用。",
        en: "In the long run, noting the triggers helps more than only treating each symptom.",
        vocab: [["triggers", "诱因"], ["symptom", "症状"]],
      },
      {
        zh: "从长期看，牙结石定期清理能减少不少突然疼痛。",
        en: "In the long run, regular tartar cleaning prevents quite a few sudden aches.",
        vocab: [["tartar", "牙结石"], ["aches", "疼痛"]],
      },
      {
        zh: "从长期看，少把加班当常态，血压管理会轻松一些。",
        en: "In the long run, treating overtime as unusual makes blood-pressure management easier.",
        vocab: [["overtime", "加班"], ["management", "管理"]],
      },
      {
        zh: "从长期看，把拉伸放进日程，可能比买新跑鞋更关键。",
        en: "In the long run, putting stretches on the calendar might matter more than new running shoes.",
        vocab: [["stretches", "拉伸"], ["matter", "更关键"]],
      },
      {
        zh: "从长期看，学会描述疼痛性质，问诊会准确很多。",
        en: "In the long run, learning to describe the type of pain makes appointments far more accurate.",
        vocab: [["type of pain", "疼痛性质"], ["accurate", "准确"]],
      },
      {
        zh: "从长期看，把复查日期写进日历，比靠记忆更稳。",
        en: "In the long run, putting the follow-up date on the calendar is more reliable than memory.",
        vocab: [["follow-up", "复查"], ["reliable", "稳妥的"]],
      },
    ],
  },
  {
    structure: "If + had done, would + 原形（混合条件）",
    grammar: ["过去没处理导致现在被动", "主句谈此刻身体/安排"],
    tips: "健康复盘用混合条件，比 I should have 更完整。",
    items: [
      {
        zh: "要是我昨晚把药吃了，现在头就不会这么沉。",
        en: "If I had taken the medicine last night, my head wouldn't feel this heavy now.",
        vocab: [["medicine", "药"], ["heavy", "沉"]],
      },
      {
        zh: "要是我提前禁食，这会儿就不用改预约。",
        en: "If I had fasted in advance, I wouldn't be changing the appointment now.",
        vocab: [["fast", "禁食"], ["appointment", "预约"]],
      },
      {
        zh: "要是我把冰袋准备好，脚踝现在就不会肿成这样。",
        en: "If I had prepared an ice pack, my ankle wouldn't be this swollen now.",
        vocab: [["ice pack", "冰袋"], ["swollen", "肿的"]],
      },
      {
        zh: "要是我把病历复印件带着，护士现在就不用重问一遍。",
        en: "If I had brought a copy of the record, the nurse wouldn't be asking the history again now.",
        vocab: [["record", "病历"], ["history", "病史"]],
      },
      {
        zh: "要是我把隐形眼镜提前摘了，眼睛现在就不会这么干。",
        en: "If I had taken the contacts out earlier, my eyes wouldn't feel this dry now.",
        vocab: [["contacts", "隐形眼镜"], ["dry", "干"]],
      },
      {
        zh: "要是我按处方买对剂量，此刻就不用再排队。",
        en: "If I had bought the correct dose, I wouldn't be queuing at the pharmacy again now.",
        vocab: [["dose", "剂量"], ["pharmacy", "药房"]],
      },
      {
        zh: "要是我把过敏史写进表格，医生现在就不会反复确认。",
        en: "If I had written the allergy history on the form, the doctor wouldn't be double-checking it now.",
        vocab: [["allergy history", "过敏史"], ["double-check", "反复确认"]],
      },
      {
        zh: "要是我把跑量加得慢一点，膝盖现在就不会隐隐作痛。",
        en: "If I had increased the mileage more slowly, my knee wouldn't be aching faintly now.",
        vocab: [["mileage", "跑量"], ["ache", "隐痛"]],
      },
    ],
  },
  {
    structure: "whereas / while + 健康对比",
    grammar: ["对比不同恢复方式或症状", "while 口语"],
    tips: "对比休息与硬练时，whereas 很清楚。",
    items: [
      {
        zh: "我恢复期选择走路，而朋友一舒服就想恢复跑步。",
        en: "I walk during recovery, whereas my friend wants to run again as soon as he feels better.",
        vocab: [["recovery", "恢复期"], ["as soon as", "一……就"]],
      },
      {
        zh: "白天我尽量把咖啡停掉，而晚上有人还在喝茶。",
        en: "I try to stop coffee during the day, while some people still drink tea at night.",
        vocab: [["stop coffee", "停掉咖啡"], ["at night", "晚上"]],
      },
      {
        zh: "我可能先做热敷，而理疗师更建议先冰敷消肿。",
        en: "I might use a heat pack first, whereas the therapist would rather ice the swelling.",
        vocab: [["heat pack", "热敷"], ["swelling", "肿"]],
      },
      {
        zh: "我把药按顿分装，而家人喜欢整瓶带着走。",
        en: "I sort pills by dose, while my family prefer carrying the whole bottle.",
        vocab: [["sort", "分装"], ["dose", "一顿的量"]],
      },
      {
        zh: "感冒初期我多喝水，而有人一不舒服就吃一堆药。",
        en: "At the start of a cold I drink more water, whereas some people take a pile of pills at once.",
        vocab: [["cold", "感冒"], ["pile", "一堆"]],
      },
      {
        zh: "我约上午号，而医院下午往往更挤。",
        en: "I book morning slots, while the hospital is usually more crowded in the afternoon.",
        vocab: [["slots", "号"], ["crowded", "挤"]],
      },
      {
        zh: "拉伸时我求缓慢，而同组有人总想弹跳着拉。",
        en: "I stretch slowly, whereas some people in the group bounce through the stretch.",
        vocab: [["stretch", "拉伸"], ["bounce", "弹跳"]],
      },
      {
        zh: "我把睡眠问题写进日记，而医生更想看两周的规律。",
        en: "I jot sleep problems in a diary, while the doctor would rather see two weeks of patterns.",
        vocab: [["jot", "记下"], ["patterns", "规律"]],
      },
    ],
  },
  {
    structure: "as long as / provided that + 健康条件",
    grammar: ["只要指标/医嘱满足就可活动", "从句现在时"],
    tips: "复工、复跑时 provided that 很适合谈安全边界。",
    items: [
      {
        zh: "只要体温正常，我就可以回办公室坐半天。",
        en: "I can sit in the office for half a day as long as my temperature stays normal.",
        vocab: [["temperature", "体温"], ["normal", "正常"]],
      },
      {
        zh: "只要伤口保持干燥，护士说我可以洗澡。",
        en: "The nurse said I may shower, provided that the wound stays dry.",
        vocab: [["wound", "伤口"], ["shower", "洗澡"]],
      },
      {
        zh: "只要膝盖不肿，我或许能恢复慢跑十分钟。",
        en: "I might return to a ten-minute jog as long as the knee is not swollen.",
        vocab: [["jog", "慢跑"], ["swollen", "肿的"]],
      },
      {
        zh: "只要把药和食物一起吃，胃可能就不会那么刺激。",
        en: "The stomach might be less irritated, provided that I take the pills with food.",
        vocab: [["irritated", "受刺激的"], ["with food", "和食物一起"]],
      },
      {
        zh: "只要验单还在有效期内，我就不用重做抽血。",
        en: "I will not need another blood test as long as the form is still valid.",
        vocab: [["valid", "有效的"], ["form", "验单"]],
      },
      {
        zh: "只要室内通风，我们就可以继续做呼吸练习。",
        en: "We can continue the breathing drills, provided that the room stays ventilated.",
        vocab: [["breathing drills", "呼吸练习"], ["ventilated", "通风的"]],
      },
      {
        zh: "只要头晕不再加重，我可能先观察一晚。",
        en: "I might watch it overnight as long as the dizziness does not get worse.",
        vocab: [["dizziness", "头晕"], ["get worse", "加重"]],
      },
      {
        zh: "只要医生允许，我下午就可以把支具拆下来活动。",
        en: "I can take the brace off to move, provided that the doctor allows it.",
        vocab: [["brace", "支具"], ["allow", "允许"]],
      },
    ],
  },
  {
    structure: "despite + 名词 / 动名词",
    grammar: ["despite 接疼痛、忙碌、天气", "不接从句"],
    tips: "despite the discomfort 后接仍遵守的限制。",
    items: [
      {
        zh: "尽管有轻微不适，我还是把复健动作做完了。",
        en: "Despite slight discomfort, I still finished the rehab movements at a slower pace.",
        vocab: [["discomfort", "不适"], ["rehab", "复健"]],
      },
      {
        zh: "尽管工作日很满，我还是把体检安排在了早晨。",
        en: "Despite a packed weekday, I still booked the checkup for the morning.",
        vocab: [["packed", "很满的"], ["checkup", "体检"]],
      },
      {
        zh: "尽管外面很冷，我还是开窗换了五分钟气。",
        en: "Despite the cold outside, I still aired the room for five minutes.",
        vocab: [["air", "换气"], ["cold", "寒冷"]],
      },
      {
        zh: "尽管我很想加快进度，我还是按计划只加了五分钟。",
        en: "Despite wanting to speed up, I still added only five minutes as planned.",
        vocab: [["speed up", "加快"], ["as planned", "按计划"]],
      },
      {
        zh: "尽管队伍很长，药房还是把用法给我讲清楚了。",
        en: "Despite the long queue, the pharmacy still explained the dosage clearly.",
        vocab: [["dosage", "用法用量"], ["pharmacy", "药房"]],
      },
      {
        zh: "尽管口罩让呼吸发沉，候诊时我还是没摘。",
        en: "Despite the heavy breathing in a mask, I still kept it on while waiting.",
        vocab: [["heavy breathing", "呼吸发沉"], ["keep on", "没摘"]],
      },
      {
        zh: "尽管报告术语很多，我还是把关键值抄进了笔记。",
        en: "Despite the technical wording, I still copied the key values into my notes.",
        vocab: [["wording", "术语、措辞"], ["key values", "关键值"]],
      },
      {
        zh: "尽管我已经不咳了，我还是把复诊日期留着。",
        en: "Despite no longer coughing, I still kept the review appointment.",
        vocab: [["cough", "咳"], ["review appointment", "复诊"]],
      },
    ],
  },
  {
    structure: "unless + 现在时",
    grammar: ["unless 设健康红线", "从句现在时"],
    tips: "unless the swelling goes down 比 if it does not 更利落。",
    items: [
      {
        zh: "除非肿胀消退，否则我不会恢复跳跃训练。",
        en: "I will not return to jumping drills unless the swelling goes down.",
        vocab: [["jumping drills", "跳跃训练"], ["swelling", "肿胀"]],
      },
      {
        zh: "除非医生改医嘱，否则我不会自行加剂量。",
        en: "I will not increase the dose myself unless the doctor changes the instructions.",
        vocab: [["dose", "剂量"], ["instructions", "医嘱"]],
      },
      {
        zh: "除非空腹要求取消，否则我早晨只喝水。",
        en: "I will only drink water in the morning unless the fasting rule is cancelled.",
        vocab: [["fasting", "空腹"], ["cancelled", "取消"]],
      },
      {
        zh: "除非体温再升，否则我可能先观察到明天。",
        en: "I might just watch it until tomorrow unless the temperature rises again.",
        vocab: [["temperature", "体温"], ["rise", "再升"]],
      },
      {
        zh: "除非伤口渗液停止，否则纱布我不会隔太久才换。",
        en: "I will not leave the dressing on too long unless the wound stops weeping.",
        vocab: [["dressing", "纱布"], ["weeping", "渗液"]],
      },
      {
        zh: "除非有人陪同，否则我头晕时不会自己去抽血。",
        en: "I will not go for a blood test alone unless someone can come with me when I am dizzy.",
        vocab: [["dizzy", "头晕"], ["alone", "自己"]],
      },
      {
        zh: "除非过敏测试完成，否则我不会换新的护肤膏。",
        en: "I will not switch to a new cream unless the allergy test is done.",
        vocab: [["cream", "护肤膏"], ["allergy test", "过敏测试"]],
      },
      {
        zh: "除非夜间呼吸平稳，否则我还是会侧睡并垫高枕头。",
        en: "I will still sleep on my side with a higher pillow unless my night breathing stays steady.",
        vocab: [["on my side", "侧睡"], ["steady", "平稳"]],
      },
    ],
  },
  {
    structure: "would rather + 原形 than + 原形",
    grammar: ["宁愿选更稳的恢复方式", "两边原形"],
    tips: "I'd rather skip a session than train through sharp pain。",
    items: [
      {
        zh: "我宁愿少练一次，也不想带着刺痛硬跑。",
        en: "I would rather skip one session than run through a sharp pain.",
        vocab: [["skip", "少练"], ["sharp pain", "刺痛"]],
      },
      {
        zh: "我宁愿把问题写下来问医生，也不想在诊室里忘词。",
        en: "I would rather write the questions down than go blank in the consulting room.",
        vocab: [["go blank", "忘词"], ["consulting room", "诊室"]],
      },
      {
        zh: "我宁愿早十分钟到医院，也不想填表时手忙脚乱。",
        en: "I would rather arrive ten minutes early than fumble through the forms.",
        vocab: [["fumble", "手忙脚乱"], ["forms", "表格"]],
      },
      {
        zh: "我宁愿把盐减一点，也不想下周血压又冲高。",
        en: "I would rather cut a little salt than see the blood pressure spike again next week.",
        vocab: [["cut", "减少"], ["spike", "冲高"]],
      },
      {
        zh: "我宁愿用温水泡脚，也不想再熬夜刷短视频。",
        en: "I would rather soak my feet in warm water than stay up scrolling again.",
        vocab: [["soak", "泡"], ["stay up", "熬夜"]],
      },
      {
        zh: "我宁愿把复查做完，也不想一直猜报告上的箭头。",
        en: "I would rather finish the follow-up than keep guessing at the arrows on the report.",
        vocab: [["follow-up", "复查"], ["arrows", "箭头"]],
      },
      {
        zh: "我宁愿把支具再戴两天，也不想消肿前就去爬山。",
        en: "I would rather wear the brace two more days than hike before the swelling settles.",
        vocab: [["brace", "支具"], ["settle", "消下去"]],
      },
      {
        zh: "我宁愿把药盒分格，也不想出差时漏带一整板。",
        en: "I would rather use a divided pill box than leave a whole blister pack behind on a trip.",
        vocab: [["pill box", "药盒"], ["blister pack", "整板药"]],
      },
    ],
  },
  {
    structure: "so that / in case + 健康预防",
    grammar: ["so that 方便就医或恢复", "in case 防止加重"],
    tips: "in case the pain returns 用现在时。",
    items: [
      {
        zh: "我把保险卡放进外套，以便挂号时不用翻包。",
        en: "I put the insurance card in my coat so that I would not search my bag at registration.",
        vocab: [["insurance card", "保险卡"], ["registration", "挂号"]],
      },
      {
        zh: "我带了备用口罩，以防候诊室要求更换。",
        en: "I packed a spare mask in case the waiting room asked me to change it.",
        vocab: [["spare", "备用的"], ["waiting room", "候诊室"]],
      },
      {
        zh: "我把用药时间设了闹钟，以免第二顿隔太久。",
        en: "I set an alarm for the dose so that the second tablet would not be too late.",
        vocab: [["dose", "用药"], ["tablet", "药片"]],
      },
      {
        zh: "我把冰袋冻在门口，以防脚踝晚上再肿。",
        en: "I froze an ice pack by the door in case the ankle swelled again at night.",
        vocab: [["ice pack", "冰袋"], ["swell", "肿"]],
      },
      {
        zh: "我把症状按小时记下，以便医生判断是阵发还是持续。",
        en: "I logged the symptoms by the hour so that the doctor could tell bursts from a constant ache.",
        vocab: [["bursts", "阵发"], ["constant", "持续的"]],
      },
      {
        zh: "我提前问清能否坐地铁，以免检查后头晕还挤车厢。",
        en: "I asked in advance whether I could take the metro so that I would not squeeze in if I felt dizzy.",
        vocab: [["in advance", "提前"], ["squeeze", "挤"]],
      },
      {
        zh: "我把旧处方拍下来，以防药房系统暂时对不上。",
        en: "I photographed the old prescription in case the pharmacy system could not match it.",
        vocab: [["prescription", "处方"], ["match", "对上"]],
      },
      {
        zh: "我把紧急联系人写在手机锁屏上，以便万一需要别人帮忙。",
        en: "I put an emergency contact on the lock screen so that someone could help if needed.",
        vocab: [["emergency contact", "紧急联系人"], ["lock screen", "锁屏"]],
      },
    ],
  },
];

export const B2_PACK: LevelPack = {
  daily,
  travel,
  work,
  study,
  social,
  shopping,
  dining,
  health,
};
