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
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Tang%20dynasty%20camel%20caravan%20terracotta%20figurine%20museum%20artifact%20warm%20lighting%20white%20background&image_size=square",
  },
  {
    id: "relic-2",
    title: "汉代铜镜",
    era: "汉代（前206–220年）",
    source: "甘肃省文物考古研究所",
    description: "草叶纹铜镜，背面铸有精致草叶纹饰，是汉代驿站商贸流通的重要物证。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Han%20dynasty%20bronze%20mirror%20with%20floral%20patterns%20museum%20artifact%20antique%20patina%20white%20background&image_size=square",
  },
  {
    id: "relic-3",
    title: "丝路钱币",
    era: "唐—宋代（7–13世纪）",
    source: "敦煌研究院",
    description: "出土于敦煌驿站遗址的开元通宝与萨珊银币，见证了东西方货币在古商道上的交汇流通。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Silk%20Road%20coins%20Kaiyuan%20Tongbao%20Sasanian%20silver%20drachm%20museum%20artifact%20close%20up&image_size=square",
  },
  {
    id: "relic-4",
    title: "驿站木简",
    era: "魏晋时期（220–420年）",
    source: "甘肃省简牍博物馆",
    description: "记录驿站物资调拨与过境使节信息的木简，为研究古代驿站行政运作提供珍贵一手资料。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20wooden%20slip%20with%20calligraphy%20Wei%20Jin%20dynasty%20museum%20artifact%20aged%20wood&image_size=square",
  },
  {
    id: "relic-5",
    title: "坎儿井出水口石构件",
    era: "清代（1644–1912年）",
    source: "吐鲁番博物馆",
    description: "砂岩凿制的坎儿井出水口构件，表面有长期水流侵蚀的痕迹，体现了干旱地区先民的智慧水利系统。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Karez%20well%20stone%20component%20water%20outlet%20sandstone%20museum%20artifact%20desert%20heritage&image_size=square",
  },
  {
    id: "relic-6",
    title: "防风民居夯土砖",
    era: "明清时期（1368–1912年）",
    source: "宁夏固原博物馆",
    description: "掺入麦草的夯土砖标本，展示了西北民居利用本地材料抵御风沙的传统建造技艺。",
    imageUrl:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20rammed%20earth%20brick%20with%20straw%20traditional%20Chinese%20desert%20dwelling%20museum%20artifact%20texture&image_size=square",
  },
];
