import type { Level, Scenario } from "../types";

export const LEVELS: { id: Level; title: string; short: string; blurb: string }[] = [
  { id: "A1", title: "入门 A1", short: "入门", blurb: "短句、现在时、日常用词" },
  { id: "A2", title: "初级 A2", short: "初级", blurb: "过去时、请求、简单描述" },
  { id: "B1", title: "中级 B1", short: "中级", blurb: "完成时、条件句、观点" },
  { id: "B2", title: "中高 B2", short: "中高", blurb: "复合句、对比、委婉表达" },
  { id: "C1", title: "高级 C1", short: "高级", blurb: "抽象、节奏、精确语气" },
];

export const SCENARIOS: { id: Scenario; title: string; hint: string }[] = [
  { id: "daily", title: "日常生活", hint: "起床、习惯、家里的小事" },
  { id: "travel", title: "旅行出行", hint: "问路、航班、住宿" },
  { id: "work", title: "职场办公", hint: "会议、报告、协作" },
  { id: "study", title: "学习考试", hint: "作业、语法、理解" },
  { id: "social", title: "社交闲聊", hint: "见面、邀约、礼貌回应" },
  { id: "shopping", title: "购物消费", hint: "询价、尺码、退换" },
  { id: "dining", title: "餐饮点餐", hint: "点菜、口味、服务" },
  { id: "health", title: "健康医疗", hint: "不适、预约、恢复" },
];

export const levelLabel = (id: Level) => LEVELS.find((item) => item.id === id)?.title ?? id;
export const scenarioLabel = (id: Scenario) =>
  SCENARIOS.find((item) => item.id === id)?.title ?? id;
