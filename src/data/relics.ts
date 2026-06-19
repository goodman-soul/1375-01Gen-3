export interface RelicItem {
  id: string;
  title: string;
  era: string;
  source: string;
  description: string;
  imageUrl: string;
}

export const relics: RelicItem[] = [
  {
    id: "relic-1",
    title: "唐代驼队陶俑",
    era: "唐代（618–907年）",
    source: "新疆维吾尔自治区博物馆",
    description: "彩绘胡人驼队陶俑，刻画了丝路商旅牵着满载货物的骆驼前行场景，反映了唐代丝路贸易的繁荣。",
    imageUrl: "/images/relics/relic-1-tang-sancai-camel.jpg",
  },
  {
    id: "relic-2",
    title: "汉代铜镜",
    era: "汉代（前206–220年）",
    source: "甘肃省文物考古研究所",
    description: "草叶纹铜镜，背面铸有精致草叶纹饰，是汉代驿站商贸流通的重要物证。",
    imageUrl: "/images/relics/relic-2-han-bronze-mirror.jpg",
  },
  {
    id: "relic-3",
    title: "丝路钱币",
    era: "唐—宋代（7–13世纪）",
    source: "敦煌研究院",
    description: "出土于敦煌驿站遗址的开元通宝与萨珊银币，见证了东西方货币在古商道上的交汇流通。",
    imageUrl: "/images/relics/relic-3-silk-road-coins.jpg",
  },
  {
    id: "relic-4",
    title: "驿站木简",
    era: "魏晋时期（220–420年）",
    source: "甘肃省简牍博物馆",
    description: "记录驿站物资调拨与过境使节信息的木简，为研究古代驿站行政运作提供珍贵一手资料。",
    imageUrl: "/images/relics/relic-4-wooden-slip.jpg",
  },
  {
    id: "relic-5",
    title: "坎儿井出水口石构件",
    era: "清代（1644–1912年）",
    source: "吐鲁番博物馆",
    description: "砂岩凿制的坎儿井出水口构件，表面有长期水流侵蚀的痕迹，体现了干旱地区先民的智慧水利系统。",
    imageUrl: "/images/relics/relic-5-karez-stone.jpg",
  },
  {
    id: "relic-6",
    title: "防风民居夯土砖",
    era: "明清时期（1368–1912年）",
    source: "宁夏固原博物馆",
    description: "掺入麦草的夯土砖标本，展示了西北民居利用本地材料抵御风沙的传统建造技艺。",
    imageUrl: "/images/relics/relic-6-rammed-earth-brick.jpg",
  },
];
