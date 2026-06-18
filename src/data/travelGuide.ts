export interface TravelGuideData {
  season: {
    title: string;
    recommended: string;
    avoid: string;
    tips: string[];
  };
  supplies: {
    title: string;
    stations: string[];
    essentials: string[];
  };
  safety: {
    title: string;
    boundaries: string[];
    warnings: string[];
    emergency: string;
  };
}

export const travelGuide: TravelGuideData = {
  season: {
    title: "最佳季节",
    recommended: "9月下旬至11月中旬，气温适中（15–25°C），风沙较少，胡杨林金黄。3月至5月初也可前往，但偶有沙尘天气。",
    avoid: "6–8月高温可达45°C以上，地表温度更高；12–2月夜间可降至-20°C，且部分驿站遗址冬季不开放。",
    tips: [
      "日出后两小时与日落前两小时为最佳拍摄时间",
      "随身携带防晒霜与遮阳帽，即便秋冬紫外线仍强烈",
      "沙漠昼夜温差大，务必携带保暖外套",
    ],
  },
  supplies: {
    title: "补给站点",
    stations: [
      "敦煌驿站遗址 — 最近城镇5km，有完整补给设施",
      "瓜州锁阳城驿站 — 最近城镇12km，有基础补给",
      "吐鲁番交河驿站 — 城区内，补给便利",
      "额济纳黑城驿站 — 最近城镇40km，需自备充足饮水",
      "民勤沙井驿站 — 最近城镇8km，有季节性补给点",
    ],
    essentials: [
      "饮水：每人每日至少4升，偏远线路加倍",
      "食物：高热量干粮，坚果与能量棒为佳",
      "通讯：卫星电话或对讲机，手机信号覆盖不稳定",
      "导航：GPS设备+纸质地图，不可仅依赖手机",
      "急救：蛇药、止血带、绷带、消毒用品",
    ],
  },
  safety: {
    title: "安全边界",
    boundaries: [
      "切勿偏离标记驿道超过500米，流沙区域无地标易迷失",
      "未开发驿站遗址可能存在坍塌风险，不可进入建筑内部",
      "戈壁区域手机信号覆盖有限，需提前报备行程",
      "沙尘暴预警期间绝对不可进入沙漠地带",
    ],
    warnings: [
      "流沙区：在无向导情况下严禁穿越",
      "高温区：正午12点至下午3点避免户外活动",
      "野生动物：荒漠中可能有毒蛇与蝎子，夜间务必穿封闭鞋",
      "古迹保护：遗址内禁止攀爬、刻划、取土",
    ],
    emergency: "紧急联络：当地文物局 + 救援电话119 — 出发前向当地文旅部门报备行程",
  },
};
