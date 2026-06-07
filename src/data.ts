/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Commandant, Talent, TeamBuild, CivilOfficial, WeatherSpell } from './types';

export const SYSTEM_RULES = {
  unlock: {
    title: "都尉開啟與等級",
    points: [
      "都尉在開服 30 小時後開啟，出生即為 20 級，滿級戰法狀態。",
      "30 小時過後一次性開拓全部都尉選項，領取後可從 12 名中選擇 3 名進行登庸和培養。",
      "都尉可以進行常規練兵，但不支持利用經驗值兌換兵書。"
    ]
  },
  teaching: {
    title: "登庸與拜師傳授",
    points: [
      "都尉傳授繼承星級（不包含動態和典藏版增加的星級），初始四維為 80-100% 隨機值，保持原有陣營。",
      "都尉天賦裡可提供『進階+1』額外星級，所以傳授時可直接挑選 4 星或滿星的將領。",
      "都尉官職最多可以提供額外 30 點自由支配的屬性加成。",
      "傳授過的武將（師傅與徒弟）可以一同上陣，例如『拜師 SP 郭嘉』的都尉可以和本體 SP 郭嘉一同出戰！"
    ]
  },
  growth: {
    title: "成長歷練與兵書",
    points: [
      "兵書與傳授的主將獨立，每個都尉都具有獨立的兵書類型，例如部分具有三軍，部分沒有，需進入遊戲查看細節。",
      "都尉的屬性成長率可在『歷練』中隨機調整。每次歷練需要消耗『軍望』值。",
      "軍望需要都尉隨同部隊參與地圖行軍活動、攻城破關，或者參與實戰獲取戰功。打戰功相對能更快獲取大量軍望值。"
    ]
  }
};

export const COMMANDANTS: Commandant[] = [
  {
    id: "zhou-shao",
    name: "周劭",
    starRating: 5,
    skillType: "主動",
    skillName: "流雲千變",
    skillRate: "70%",
    skillDescription: "隨機執行1-2次：施放因利制權，坐守孤城，淨化，智計，料事如神，杯蛇鬼車中的1個，無需準備和冷卻，效果等同對應戰法滿級效果。",
    specialEquip: "金錵筩",
    specialFeature: "千機",
    specialFeatureDesc: "周劭裝備時，【流雲千變】必定穩定執行 2 次效果。",
    equipBonus: "統率 +5.00, 智力 +5.00",
    analysis: "最高可一回合觸發 2 次戰法效果，集淨化、治療、屬性降低及謀略傷害於一身，是極其強大的萬能型武將。建議全智力加點，拜師推薦高智力、高統率的法系核心將領。",
    recommendedTeams: [
      "【騎兵】SP馬超 + 周劭 (拜師許攸) + 許攸",
      "【盾兵】張角 + 周劭 + 左慈",
      "//【弓兵】諸葛亮 + 龐統 + 周劭 (高智力穩定輔助)"
    ],
    recommendedClass: "諸葛亮、曹操、司馬懿、陸遜 等高智力武將",
    avatarColor: "from-amber-600 to-red-700"
  },
  {
    id: "yang-qi",
    name: "楊琪",
    starRating: 5,
    skillType: "指揮",
    skillName: "愈戰愈勇",
    skillRate: "100%",
    skillDescription: "戰鬥中，我軍全體每次發動主動戰法後，有 60% 機率（受智力影響）使其隨機戰鬥屬性提高 6（受智力影響），可疊加，持續到戰鬥結束；該效果每回合最多觸發 3 次，並治療我軍全體（治療率 72%）。",
    specialEquip: "鎖鐵重甲",
    specialFeature: "疾進",
    specialFeatureDesc: "楊琪裝備時，我方友軍群體主動戰法發動率額外提升 3%。",
    equipBonus: "統率 +5.00, 智力 +5.00",
    analysis: "擁有極為強大的屬性疊加光環。特別契合攜帶多個高機率主動戰法的隊伍，能一邊疊屬性一邊完成高效的全隊群體治療。推薦拜師高謀略武將。",
    recommendedTeams: [
      "賈詡 + 荀攸 + 楊琪 (雙主動戰法陣容，配合楊琪自帶戰法的戰鬥屬性提升，賈詡作為隊伍主力輸出 and 控制)",
      "【盾兵】張角 + 楊琪 + 左慈"
    ],
    recommendedClass: "賈詡、曹操、諸葛亮、荀攸 等法秒流中陣",
    avatarColor: "from-rose-500 to-pink-700"
  },
  {
    id: "xiao-zhi",
    name: "蕭芷",
    starRating: 5,
    skillType: "指揮",
    skillName: "堅如磐石",
    skillRate: "100%",
    skillDescription: "戰鬥中，每回合隨機造成 3-5 次傷害（傷害率 80%，受統率差影響，無視防禦，且 50% 轉化為『俘兵』。俘兵能抵擋後續傷害，持續 2 回合。與非玩家 NPC 戰鬥時，俘兵只抵擋 80% 傷害）。",
    specialEquip: "諸葛槍",
    specialFeature: "感心",
    specialFeatureDesc: "蕭芷裝備時，【堅如磐石】每回合執行次數上限提升為 4-6 次。",
    equipBonus: "統率 +5.00, 速度 +5.00",
    analysis: "極其驚人的防禦反擊與再生隊伍支柱。憑藉【堅如磐石】的無視防禦與多次傷害輸出，能將傷害轉化為極具韌性的俘兵（抵禦護盾）。配上諸葛槍，可以大幅拉長拉鋸戰優勢。",
    recommendedTeams: [
      "【盾兵】蕭芷 + SP盧植 + SP貂蟬 (防守反傷，兼顧強大的混亂硬控和俘兵自愈，是頂級的碰壁剋星！)",
      "【盾兵】蕭芷 + SP董卓 + SP紹蟬 (極致後期法傷吸血與高額減傷)"
    ],
    recommendedClass: "SP盧植、SP貂蟬、諸葛亮、左慈 等防守或功能性統率流核心",
    avatarColor: "from-teal-600 to-emerald-800"
  },
  {
    id: "huangfu-hong",
    name: "皇甫宏",
    starRating: 4,
    skillType: "指揮",
    skillName: "破釜沉舟",
    skillRate: "100%",
    skillDescription: "戰鬥中，使我軍統率最高單體嘲諷敵軍全體；偶數回合有 60% 機率（受統率影響）治療該武將（治療率 198%，受統率影響）。",
    specialEquip: "宛天馬",
    specialFeature: "鐵壁",
    specialFeatureDesc: "皇甫宏裝備時，我軍被嘲諷的、統率最高的主坦受到傷害降低 8%。",
    equipBonus: "武力 +5.00, 統率 +5.00",
    analysis: "極為經典的肉盾守衛戰術。嘲諷全體並給予大額治療。自身裝備宛天馬能進一步減傷，搭配戰法『魅惑』有著統率流的最完美閉環。",
    recommendedTeams: [
      "【盾兵】SP關羽 + 皇甫宏 + SP法正 (皇甫宏嘲諷並治療，保護副將，讓 SP 關羽能無憂積累水淹七軍傷害)"
    ],
    recommendedClass: "司馬懿、諸葛亮、滿寵、曹操 等高統率防守核心",
    avatarColor: "from-purple-600 to-indigo-900"
  },
  {
    id: "liu-qin",
    name: "柳沁",
    starRating: 4,
    skillType: "指揮",
    skillName: "杯弓蛇影",
    skillRate: "100%",
    skillDescription: "戰鬥前5回合，敵軍全體戰門屬性降低33（受智力影響），第4~6回合，敵軍群體（2~3人）每回合有40%機率（受智力影響）陷入恐懼狀態（造成傷害 or 施加控制時，有20%機率失敗，受智力影響，若處於叛逃或潰逃狀態，則基礎機率提升至40%），持續1回合。",
    specialEquip: "鵲畫弓",
    specialFeature: "懾敵",
    specialFeatureDesc: "柳沁裝備時，降低敵軍四維屬性的控場效果時長延長至整整 8 回合。",
    equipBonus: "統率 +5.00, 速度 +5.00",
    analysis: "驚人的全場屬性壓制與控制中斷器。對抗快攻及特技隊伍有不可多得的消減能力。契合持續作戰的毒物流或拉鋸隊。",
    recommendedTeams: [
      "【弓兵】許攸 + 柳沁 (拜師呂布) + 呂布",
      "【弓兵】甘寧 + 太史慈 + 柳沁 (配合奪魂、錦帆軍拉長戰局發揮)"
    ],
    recommendedClass: "諸葛亮、曹操、司馬懿、龐統",
    avatarColor: "from-amber-700 to-yellow-600"
  },
  {
    id: "xu-yan",
    name: "徐彥",
    starRating: 4,
    skillType: "主動",
    skillName: "緩兵之計",
    skillRate: "70%",
    skillDescription: "對敵我全體隨機武將施加 1 次抵禦，共執行 4 次。被施加目標：若為我軍，則受擊傷害降低 30%（受智力影響）；若為敵軍，則使其造成的傷害降低 30%（受智力影響），持續 1 回合。",
    specialEquip: "汗血寶馬",
    specialFeature: "鐵陣",
    specialFeatureDesc: "徐彥裝備時，戰鬥中我軍全體獲得『嚴密』狀態（抵禦盾層可有效疊加）。",
    equipBonus: "統率 +5.00, 智力 +5.00",
    analysis: "防禦能力拉滿。超高的 70% 主動發動機率，利用無死角的多重抵禦與減傷控場，能以最輕微的損兵代價，刷滿戰功！",
    recommendedTeams: [
      "【配置】張角 + 徐彥 (拜師左慈/諸葛亮) + 左慈 (多重抵禦循環，配合張角天公五雷轟頂雷擊群控)"
    ],
    recommendedClass: "諸葛亮、司馬懿、曹操 等頂級輔助法師",
    avatarColor: "from-sky-500 to-cyan-700"
  },
  {
    id: "shen-heng",
    name: "沈姮",
    starRating: 4,
    skillType: "指揮",
    skillName: "風始相形",
    skillRate: "100%",
    skillDescription: "戰鬥中，自身成功發動主動或突擊戰法時，有 35% 機率（受智力影響）治療我軍單體（治療率 48%，受智力影響），並有 60% 機率（受自身速度影響）再次發動同一個剛發動的戰法（無需準備，且不計入冷卻）。",
    specialEquip: "赤血刀",
    specialFeature: "遞機",
    specialFeatureDesc: "沈姮裝備時，自帶戰法【風始相形】機率判定算法改為：直接受自身最高的單項屬性影響！",
    equipBonus: "武力 +5.00, 速度 +5.00",
    analysis: "多重無限套娃連發流！發動主動或突擊戰法有巨大機率當場重播，直接將單回合爆發提升 100%。強力推薦配合多主動突擊將領。",
    recommendedTeams: [
      "【騎兵】SP荀彧 + SP郭嘉 + 沈姮 (沈姮高速高頻觸發，持續激活 SP 郭嘉的『經天緯地』機制的恐怖疊加傷害)"
    ],
    recommendedClass: "SP郭嘉、郭嘉、太史慈、馬超",
    avatarColor: "from-red-600 to-orange-500"
  },
  {
    id: "su-xin",
    name: "蘇信",
    starRating: 4,
    skillType: "指揮",
    skillName: "技高一籌",
    skillRate: "100%",
    skillDescription: "戰鬥中，敵軍全體發動『主動戰法』時，我軍智力最高者有 70% 機率（受智力影響）對其造成一次大額謀略打擊（傷害率 128%）；發動『突擊戰法』時，我軍武力最高者有 70% 機率（受武力影響）對其進行一次兵刃回擊（傷害率 128%）。",
    specialEquip: "白龍",
    specialFeature: "洞玄",
    specialFeatureDesc: "蘇信裝備時，自帶戰法【技高一籌】反制傷害全方位提升 10%。",
    equipBonus: "武力 +5.00, 統率 +5.00",
    analysis: "天生的戰法反制回響器。不論敵方使出魔法還是菜刀，只要發動戰法就會激發我軍主力的物理/法術巨量反噬。極致防守反擊戰術。",
    recommendedTeams: [
      "【弓兵】周瑜 + 蘇信 (拜師呂蒙或陸遜) + 呂蒙 (精準補充反擊傷害，配合呂蒙的控場限制敵方發揮)"
    ],
    recommendedClass: "周瑜、諸葛亮、司馬懿、陸遜",
    avatarColor: "from-neutral-600 to-stone-800"
  },
  {
    id: "ma-chan",
    name: "馬嬋",
    starRating: 4,
    skillType: "指揮",
    skillName: "運籌帷幄",
    skillRate: "100%",
    skillDescription: "戰鬥前 3 回合，友軍群體（2人）受到傷害降低 20%（受智力影響），並獲得『急救』狀態：受傷時有 35% 機率（受我軍全體智力和影響）獲得一定量治療（治療率 50%，受智力影響）。",
    specialEquip: "銀龍甲",
    specialFeature: "磐石",
    specialFeatureDesc: "馬嬋裝備時，自帶戰法的保護減傷及急救目標改為：【我軍全體 3 人】。",
    equipBonus: "武力 +5.00, 智力 +5.00",
    analysis: "全體 3 回合的高強度急救護盾，這在面對暴力速攻速秒陣容（如三勢呂、吳騎、爆頭騎）時是絕對的歎息之牆。拜師推薦法系核心。",
    recommendedTeams: [
      "【蜀騎】姜維 + 關銀屏 + 馬嬋 (提供前期無傷減益與高保鮮，拖延戰局到中後期陣型爆發)",
      "【吳騎】孫權 + 周泰 + 馬嬋 (配合急救保護孫權暖機)"
    ],
    recommendedClass: "郭嘉、諸葛亮、司馬懿、法正",
    avatarColor: "from-green-600 to-emerald-800"
  },
  {
    id: "chen-zhao",
    name: "陳照",
    starRating: 3,
    skillType: "指揮",
    skillName: "針鋒相對",
    skillRate: "100%",
    skillDescription: "戰鬥中，自身無法造成傷害；第2回合起，友軍單體受到普通攻擊後，有40%機率（受其統率影響）發動一次反擊（傷害率70%，可觸發普通攻擊類效果）。",
    specialEquip: "呂氏鏡",
    specialFeature: "決守",
    specialFeatureDesc: "陳照裝備時，【針鋒相對】的反擊援助目標，將強制鎖定為我方【統率最高】的承傷主坦武將。",
    equipBonus: "統率 +5.00, 速度 +5.00",
    analysis: "特異型物理協戰都尉。雖然不能親自動手，但能把隊友武將（如呂布、SP關羽、張飛）變成自帶強烈反擊突擊傷害的怪物。在專屬特技配合下有極高戰術套路空間。",
    recommendedTeams: [
      "【弓隊】陸遜 + 呂布 + 陳照 (當陳照手握呂氏鏡時，必定讓呂布受普攻後高頻疊加反擊，進一步多輪觸發手裏的當鋒 and 折衝戰法)"
    ],
    recommendedClass: "諸葛亮、周瑜、曹操、法正",
    avatarColor: "from-zinc-500 to-gray-700"
  },
  {
    id: "qin-xi",
    name: "秦溪",
    starRating: 3,
    skillType: "主動",
    skillName: "先聲奪人",
    skillRate: "55%",
    skillDescription: "偷取敵軍武力最高武將20武力和速度（受武力最高友軍的武力影響）賦予我軍武力最高武將，偷取敵軍智力最高武將20智力和統率（受智力最高友軍的智力影響）賦予我軍智力最高武將，可疊加，持續2回合。",
    specialEquip: "大葉青銅甲",
    specialFeature: "星移",
    specialFeatureDesc: "秦溪裝備時，【先聲奪人】屬性偷取的霸道增強，其持續時間從 2 回合變更延長至整整 3 回合！",
    equipBonus: "統率 +5.00, 智力 +5.00",
    analysis: "完美的屬性偷取跟轉化戰術。能夠偷取對手智力或武力，並全額賦予我方主力。推薦拜師法政或魏蜀吳群各系核心副將。",
    recommendedTeams: [
      "【九宮盾】張角 + 秦溪 + 曹操 (張角五雷重擊觸發，秦溪偷屬性製造壓制，曹操提供穩定增傷護衛)"
    ],
    recommendedClass: "曹操、諸葛亮、周瑜、司馬懿",
    avatarColor: "from-fuchsia-600 to-purple-800"
  }
];

export const TALENTS: Talent[] = [
  // 兵種
  { name: "箭無虛發", effect: "弓兵適性提升至 S 級", cost: 4 },
  { name: "鞍馬嫻熟", effect: "騎兵適性提升至 S 級", cost: 4 },
  { name: "固若金湯", effect: "盾兵適性提升至 S 級", cost: 4 },
  { name: "槍出如龍", effect: "槍兵適性提升至 S 級", cost: 4 },
  // 陣營
  { name: "魏武之志", effect: "加入「魏」陣營，享受魏國陣營屬性加成", cost: 2 },
  { name: "蜀漢棟梁", effect: "加入「蜀」陣營，享受蜀國陣營屬性加成", cost: 2 },
  { name: "東吳賢良", effect: "加入「吳」陣營，享受吳國陣營屬性加成", cost: 2 },
  { name: "亂世英雄", effect: "加入「群」陣營，享受群雄陣營屬性加成", cost: 2 },
  { name: "黃巾信徒", effect: "添加「黃巾」隊武將標籤，可激活特殊黃巾戰術", cost: 1 },
  { name: "南中勇士", effect: "添加「南蠻」隊武將標籤，可激活獨特蠻兵連動", cost: 1 },
  // 屬性與特殊
  { name: "身經百戰", effect: "自身統御(C)值直接提升 1，基礎四維戰鬥屬性提高 5%", cost: 8 },
  { name: "天賦昇稟", effect: "自身進階等級自由 +1 (多額外 10 點自由加點屬性及減傷)", cost: 10 },
  { name: "融會貫通", effect: "戰鬥中，自身謀略奇謀機率與物理會心幾率平衡至兩者之間的最高數值", cost: 8 },
  { name: "軍令如山", effect: "戰鬥中，自身永久獲得「嚴密」狀態（抵禦多次傷害，可層層疊加）", cost: 6 },
  { name: "生生不息", effect: "戰鬥中，自身造成及承受的治療總量提升 5%", cost: 3 },
  // 特定戰法特技
  { name: "濟危定軍", effect: "自身攜帶兵種或陣法【武鋒陣】時，武鋒陣戰鬥治療目標改為我軍兵力最低的單體", cost: 6 },
  { name: "旌旗蔽日", effect: "自身攜帶【錦帆軍】時，錦帆軍突擊受擊額外促發機率硬性提升至 55%", cost: 10 },
  { name: "百計迭出", effect: "自身攜帶【奇計良謀】時，奇計良謀全場降低敵軍傷害特效時長延長至 6 回合", cost: 5 },
  { name: "挫銳分勢", effect: "自身攜帶【挫銳】時，挫銳虛弱判定目標改為：精確鎖定敵軍群體 2 人", cost: 6 },
  { name: "陣走龍蛇", effect: "自身攜帶任意陣法時，減傷抵抗加護收益者，直接擴散至我軍全體 3 人", cost: 9 },
  // 團隊行軍與戰略
  { name: "得道多助", effect: "當部隊處於「駐守」狀態時，我軍全體武將各獲得 800 鄉勇力防護阻擊敵人", cost: 6 },
  { name: "勇往直前", effect: "在敵方所有城池、營帳等敵對建築格領地戰鬥時，我軍造成兵刃/謀略傷害提升 5%", cost: 4 },
  { name: "聞雞起舞", effect: "現實時間 08-10 點造成傷害提高 5%；現實時間 22-24 點造成傷害降低 5%", cost: 2 },
  { name: "馬革裹屍", effect: "本都尉部隊戰損兵死比例降低 8%（戰後可重傷動員返還更多兵力）", cost: 12 },
  { name: "狹路相逢", effect: "本都尉部隊戰鬥時「無視兵種相克」（即雙方不互相克制，消除負面克制減益）", cost: 15 },
  { name: "簞醪投川", effect: "部隊當被玩家(PVP)擊敗時，即時安全返還 10% 陣亡兵力所需的木鐵糧征兵資源", cost: 4 },
  { name: "民心所望", effect: "在中立玩家營地、高級碼頭、城池內就地征兵時，絕不消耗任何一文銅幣", cost: 1 },
  { name: "迎難而上", effect: "和進階星級不低於自身的玩家戰鬥，我方獲得功勳戰功+5%（對方多一星再加送+2%）", cost: 10 },
  { name: "敏而好學", effect: "部隊行軍及交戰時，獲得的武將經驗極速提升 8%", cost: 4 },
  { name: "高朋滿座", effect: "若同隊武將具有關係羈絆，觸發隊伍緣分屬性所需的羈絆人數名額減少 2 人", cost: 2 }
];

export const TEAM_BUILDS: TeamBuild[] = [
  {
    id: "mix-1",
    faction: "混合",
    tier: "T0",
    name: "圓夢弓 (SP紹蟬 / SP周瑜 / 曹操)",
    description: "SP紹蟬可以幫友軍在受到治療後減少6%-8%的傷害，5次可以減少30%-40%之間，所以友軍也要帶回復兵力的裝備特性。久戰可以為踩踏增加1次回復兵力機會。本賽季最強防禦、多核控制及完美回復天花板隊體！",
    commanders: [
      {
        name: "SP紹蟬",
        teaching: "拜師郭嘉",
        points: "智",
        tactic2: "深藏若虛",
        tactic3: "剛柔並濟",
        militaryBook: "三軍之眾/久戰/統軍",
        equipment: "妖氣/踩踏/佳人/長健"
      },
      {
        name: "SP周瑜",
        points: "智",
        tactic2: "文武雙全",
        tactic3: "上兵伐謀",
        militaryBook: "應機立斷/久戰/統軍",
        equipment: "妖氣/踩踏/樂奏"
      },
      {
        name: "曹操",
        points: "智",
        tactic2: "潛龍陣",
        tactic3: "草船借箭",
        militaryBook: "援其必攻/勵軍/馳援",
        equipment: "妖氣/踩踏/援助/弓寶物"
      }
    ]
  },
  {
    id: "mix-2",
    faction: "混合",
    tier: "T0",
    name: "圓夢弓 (普通周瑜替代款)",
    description: "常規五星周瑜替代SP周瑜配置，周瑜帶奪魂挾魄和上兵伐謀。防禦能力和穩定控場依然是一流，久戰與踩踏的連攜回復與震盪打擊觸發機率達極限點。",
    commanders: [
      {
        name: "SP紹蟬",
        teaching: "拜師郭嘉",
        points: "智",
        tactic2: "深藏若虛",
        tactic3: "剛柔並濟",
        militaryBook: "三軍之眾/久戰/統軍",
        equipment: "妖氣/踩踏/佳人/長健"
      },
      {
        name: "周瑜",
        points: "智",
        tactic2: "奪魂挾魄",
        tactic3: "上兵伐謀",
        militaryBook: "枕戈坐甲/久戰/遠謀",
        equipment: "樂奏/妖氣/踩踏"
      },
      {
        name: "曹操",
        points: "智",
        tactic2: "潛龍陣",
        tactic3: "草船借箭",
        militaryBook: "援其必攻/勵軍/馳援",
        equipment: "妖氣/踩踏/援助/弓寶物"
      }
    ]
  },
  {
    id: "mix-3",
    faction: "混合",
    tier: "T0.5",
    name: "超姬槍",
    description: "如果馬超武將卡片繁多，則我方馬超可以全加速度屬性；否則根據敵人的防護與招架程度，調整速度至比對手快即可，其餘屬性全點武力增傷，充當極致頻率的突擊與兵刃爆發收割！",
    commanders: [
      {
        name: "王元姬",
        points: "智",
        tactic2: "臨危救主",
        tactic3: "潛龍陣",
        militaryBook: "援其必攻/速戰/掩虛",
        equipment: "妖氣"
      },
      {
        name: "SP馬超",
        points: "武",
        tactic2: "虎踞鷹揚/當鋒摧決",
        tactic3: "摧鋒驟刃",
        militaryBook: "一鼓作氣/勝戰/執銳",
        equipment: "神威/踩踏/奇正相生"
      },
      {
        name: "SP呂蒙",
        points: "智",
        tactic2: "解煩衛",
        tactic3: "草船借箭",
        militaryBook: "奇正相生/文韜/執銳",
        equipment: "踩踏"
      }
    ]
  },
  {
    id: "mix-4",
    faction: "混合",
    tier: "T0.5",
    name: "皇冠槍",
    description: "長安劇本專屬，SP皇甫嵩領地治軍【礪兵秣馬+巧計退敵】。SP皇甫嵩的行動速度必須精調到比SP關羽快整整 1 點度，保障先手解除控制，給SP關羽製造完美的爆發、疊加水淹七軍空間。",
    commanders: [
      {
        name: "SP關羽",
        points: "武",
        tactic2: "忠勇義烈",
        tactic3: "疾風驟雨",
        militaryBook: "分而疾戰/百戰/掩虛",
        equipment: "武聖/沉重"
      },
      {
        name: "SP皇甫嵩",
        points: "速+統",
        tactic2: "三勢陣",
        tactic3: "草船借箭",
        militaryBook: "臨敵不亂/速戰/救主",
        equipment: "幽影/援助"
      },
      {
        name: "SP荀彧",
        points: "智",
        tactic2: "威謀靡亢/乘敵不虞",
        tactic3: "非攻制勝",
        militaryBook: "後發先至/占卜/妙算",
        equipment: "槍寶物/防備"
      }
    ]
  },
  {
    id: "mix-5",
    faction: "混合",
    tier: "T0.5",
    name: "渡江槍 (SP皇甫反震控場)",
    description: "長安副本下發揮極佳。SP皇甫嵩的速度維持比SP關羽快 1 點提供先手解控，SP呂蒙則攜帶突擊戰法與連擊兵書，提高普攻和控制頻率，攻防壓制力極深。",
    commanders: [
      {
        name: "SP關羽",
        points: "武",
        tactic2: "忠勇義烈",
        tactic3: "疾風驟雨",
        militaryBook: "分而疾戰/百戰/掩虛",
        equipment: "武聖/沉重"
      },
      {
        name: "SP皇甫嵩",
        points: "速+統",
        tactic2: "三勢陣",
        tactic3: "草船借箭",
        militaryBook: "臨敵不亂/速戰/救主",
        equipment: "幽影/援助"
      },
      {
        name: "SP呂蒙",
        points: "10速+智",
        tactic2: "威謀靡亢/乘敵不虞",
        tactic3: "非攻制勝",
        militaryBook: "後發先至/占卜/援助",
        equipment: "援助/踩踏"
      }
    ]
  },
  {
    id: "mix-6",
    faction: "混合",
    tier: "T0.5",
    name: "狗官槍 (反彈盛氣極速隊)",
    description: "程普的速度調整至比SP關羽快 1 點進行先解控。SP荀彧加 30 速度點，使其速度高於周泰或黃月英等帶盛氣凌敵的經典輔助將，從而能將敵方的盛氣凌敵效果百分百反彈回去！",
    commanders: [
      {
        name: "程普",
        points: "速+統",
        tactic2: "潛龍陣",
        tactic3: "草船借箭",
        militaryBook: "臨敵不亂/速戰/勵軍",
        equipment: "援助"
      },
      {
        name: "SP關羽",
        points: "武",
        tactic2: "忠勇義烈",
        tactic3: "疾風驟雨",
        militaryBook: "分而疾戰/百戰/掩虛",
        equipment: "武聖/沉重"
      },
      {
        name: "SP荀彧",
        points: "30速+智",
        tactic2: "威謀靡亢/非攻制勝",
        tactic3: "非攻制勝",
        militaryBook: "後發先至/占卜/妙算",
        equipment: "疾馳/槍寶物"
      }
    ]
  },
  {
    id: "mix-7",
    faction: "混合",
    tier: "T0.5",
    name: "周劭國之棟才",
    description: "高朋滿座特技可以使本隊僅需 2 人即可完整激活強大的國之棟才緣分！周劭拜師司馬懿，發動主技能時，可以高頻連續施放因利制權、坐守孤城、淨化、智計、料事如神、杯蛇鬼車，極具防衛厚度。",
    commanders: [
      {
        name: "周劭",
        teaching: "拜師司馬懿",
        points: "智",
        tactic2: "潛龍陣",
        tactic3: "盛氣凌敵",
        militaryBook: "三軍之眾/錘鍊/統軍",
        equipment: "高朋滿座"
      },
      {
        name: "SP周瑜",
        points: "智",
        tactic2: "士別三日",
        tactic3: "眾志成城",
        militaryBook: "三軍之眾/久戰/遠謀",
        equipment: "樂奏"
      },
      {
        name: "諸葛亮",
        points: "智",
        tactic2: "刮骨療毒",
        tactic3: "先登死士",
        militaryBook: "援其必攻/掩虛/勵軍",
        equipment: "防備"
      }
    ]
  },
  {
    id: "mix-8",
    faction: "混合",
    tier: "T0.5",
    name: "馬嬋國之棟才",
    description: "五合天梯高階配置。高朋滿座特技使2人激活緣分，馬嬋自身充當高頻急救與防守支點，能穩定回復4000兵力以上，並給周瑜、諸葛亮前3回合提供高達48%的穩定減傷，堅如磐石！",
    commanders: [
      {
        name: "馬嬋",
        teaching: "拜師司馬懿",
        points: "智",
        tactic2: "潛龍陣",
        tactic3: "盛氣凌敵",
        militaryBook: "三軍之眾/錘鍊/統軍",
        equipment: "高朋滿座"
      },
      {
        name: "周瑜",
        points: "智",
        tactic2: "奪魂挾魄",
        tactic3: "風助火勢",
        militaryBook: "勝而益強/勝戰/文韜",
        equipment: "樂奏"
      },
      {
        name: "諸葛亮",
        points: "智",
        tactic2: "刮骨療毒",
        tactic3: "先登死士",
        militaryBook: "援其必攻/掩虛/勵軍",
        equipment: "防備"
      }
    ]
  },
  {
    id: "mix-9",
    faction: "混合",
    tier: "T0.5",
    name: "核彈張 (陳翊高爆盾)",
    description: "陳翊或張飛高星輸出，張飛的極致物理爆發在陳翊的克己與臨危加持下，配合SP袁紹一速震懾封印。對戰絕大多數主流隊伍時都能打出毀滅般的AOE傷害。",
    commanders: [
      {
        name: "陳翊",
        teaching: "拜師馬超",
        points: "智",
        tactic2: "知己知彼",
        tactic3: "陪陣營營",
        militaryBook: "臨敵不亂/掩虛/防備",
        equipment: "力盾"
      },
      {
        name: "張飛",
        points: "武",
        tactic2: "剛勇無前",
        tactic3: "疾風驟雨",
        militaryBook: "以直報怨/精密/善戰",
        equipment: "雄烈/刺繞/灼裂"
      },
      {
        name: "SP袁紹",
        points: "一速+武",
        tactic2: "避實擊虛",
        tactic3: "橫掃千軍",
        militaryBook: "蠻勇非勇/勝戰/執銳",
        equipment: "號令/盾寶物"
      }
    ]
  },
  {
    id: "qun-1",
    faction: "群",
    tier: "T0",
    name: "蕭芷拒馬弓",
    description: "群雄天梯天花板！SP貂蟬可以幫友軍在受到治療後額外減少6-8%傷害，5次連攜最高削減30-40%！所以全隊必須配備妖氣、踩踏等高頻回復特技。久戰兵書與踩踏形成神級回兵聯動。",
    commanders: [
      {
        name: "SP盧植",
        points: "統",
        tactic2: "雁形陣",
        tactic3: "先登死士",
        militaryBook: "三軍之眾/久戰/歸心",
        equipment: "妖氣/踩踏"
      },
      {
        name: "蕭芷",
        teaching: "拜師諸葛亮",
        points: "統",
        tactic2: "因利制權",
        tactic3: "剛柔並濟",
        militaryBook: "三軍之眾/久戰/統軍",
        equipment: "妖氣/踩踏/佳人/長健"
      },
      {
        name: "SP紹蟬",
        points: "智",
        tactic2: "深藏若虛",
        tactic3: "戮力同心",
        militaryBook: "三軍之眾/久戰/統軍",
        equipment: "妖氣/踩踏/佳人/長健"
      }
    ]
  },
  {
    id: "qun-2",
    faction: "群",
    tier: "T0",
    name: "蕭芷太帝弓",
    description: "蕭芷拜師諸葛亮尾速因利，SP董卓頂在前方並攜帶先登。高朋滿座特技僅需2人即可以觸發太帝頂級法傷與吸血緣分，是極為霸道、難纏的中後期會戰尖刀！",
    commanders: [
      {
        name: "SP董卓",
        points: "統",
        tactic2: "先登死士",
        tactic3: "三軍之眾",
        militaryBook: "三軍之眾/久戰/歸心",
        equipment: "妖氣/踩踏"
      },
      {
        name: "蕭芷",
        teaching: "拜師諸葛亮",
        points: "統",
        tactic2: "剛柔並濟",
        tactic3: "因利制權",
        militaryBook: "三軍之眾/久戰/高朋滿座",
        equipment: "妖氣/踩踏/佳人/長健"
      },
      {
        name: "SP紹蟬",
        points: "智",
        tactic2: "深藏若虛",
        tactic3: "戮力同心",
        militaryBook: "三軍之眾/久戰/統軍",
        equipment: "妖氣/踩踏/佳人/長健"
      }
    ]
  },
  {
    id: "qun-3",
    faction: "群",
    tier: "T0",
    name: "皇甫宏群皇馬槍",
    description: "群雄大成皇馬槍！皇甫宏拜師諸葛恪並進行尾速調速，使其在每回合的最末尾出手給SP馬超精準解控清狀態，保障SP馬超在下回合一開始立刻安全輸出，前期野戰摧枯拉朽！",
    commanders: [
      {
        name: "SP馬超",
        points: "全武",
        tactic2: "當鋒摧決/速乘其利",
        tactic3: "摧鋒驟刃",
        militaryBook: "一鼓作氣/勝戰/執銳",
        equipment: "神威/踩踏/奇正相生"
      },
      {
        name: "皇甫宏",
        teaching: "拜師諸葛恪",
        points: "統",
        tactic2: "草船借箭",
        tactic3: "魅惑",
        militaryBook: "後發先至/妙算/占卜",
        equipment: "雍雅/勢勢"
      },
      {
        name: "許攸",
        points: "智",
        tactic2: "解煩衛",
        tactic3: "臨危救主",
        militaryBook: "惜兵愛民/剛柔/防備",
        equipment: "槍寶物/防備"
      }
    ]
  },
  {
    id: "qun-4",
    faction: "群",
    tier: "T0",
    name: "通用皇馬槍",
    description: "通用皇馬槍。英雄使命劇本的經典高強度常青樹，SP馬超依賴極高點數的武力和連擊速度高頻擊落對方破綻，SP皇甫嵩和許攸全保輔助使其無往不利。",
    commanders: [
      {
        name: "SP馬超",
        points: "全武",
        tactic2: "當鋒摧決/速乘其利",
        tactic3: "摧鋒驟刃",
        militaryBook: "一鼓作氣/勝戰/執銳",
        equipment: "神威/踩踏/奇正相生"
      },
      {
        name: "SP皇甫嵩",
        points: "統",
        tactic2: "威謀靡亢/草船借箭",
        tactic3: "後發先至",
        militaryBook: "後發先至/妙算/占卜",
        equipment: "雍雅/勢勢"
      },
      {
        name: "許攸",
        points: "智",
        tactic2: "解煩衛",
        tactic3: "臨危救主",
        militaryBook: "惜兵愛民/剛柔/防備",
        equipment: "槍寶物/防備"
      }
    ]
  },
  {
    id: "qun-5",
    faction: "群",
    tier: "T0.5",
    name: "周劭三仙盾 (武鋒極其穩實)",
    description: "高朋滿座可以2人就直接激活三仙羈絆緣分。武鋒周劭可以完美嘲諷吸收馬超/呂布等人的當鋒及折衝，從而完美保證張角五當雷霆轟炸！若敵多灼熱周劭可改用挫銳抗衡。",
    commanders: [
      {
        name: "周劭",
        teaching: "拜師左慈",
        points: "統",
        tactic2: "武鋒陣",
        tactic3: "藤甲兵/撫輯軍民",
        militaryBook: "三軍之眾/錘鍊/統軍",
        equipment: "高朋滿座"
      },
      {
        name: "張角",
        points: "智",
        tactic2: "太平道法",
        tactic3: "士別三日",
        militaryBook: "攻其不備/鬼謀/將威",
        equipment: "天公/道綱/疾風突進"
      },
      {
        name: "左慈",
        points: "一速+智",
        tactic2: "蓄勢待發",
        tactic3: "刮骨療毒",
        militaryBook: "援其必攻/勵軍/散仙",
        equipment: "奇門/青綃衣"
      }
    ]
  },
  {
    id: "shu-1",
    faction: "蜀",
    tier: "T0",
    name: "皇甫宏法官盾",
    description: "鋼鐵防線代表。皇甫宏拜師SP關羽，且配裝智力須刻意控制比SP關羽稍低，以精準替關羽分擔敵方的謀略單向傷害。關羽自帶以寡和擊其，在大範圍戰役中穩健如山、水淹一切阻礙！",
    commanders: [
      {
        name: "SP關羽",
        points: "武",
        tactic2: "以寡敵眾",
        tactic3: "擊其惰歸",
        militaryBook: "惜兵愛民/靜心/勇毅",
        equipment: "武聖/盾寶物"
      },
      {
        name: "皇甫宏",
        teaching: "拜師SP關羽",
        points: "統",
        tactic2: "魅惑",
        tactic3: "魚鱗陣",
        militaryBook: "無戰而勝/靜心/勇毅",
        equipment: "出奇"
      },
      {
        name: "SP法正",
        points: "智",
        tactic2: "非攻制勝",
        tactic3: "蓄勢待發",
        militaryBook: "三軍之眾/久戰/速防",
        equipment: "出奇"
      }
    ]
  },
  {
    id: "shu-2",
    faction: "蜀",
    tier: "T0",
    name: "周劭蜀智",
    description: "龐統帶疾風驟雨，諸葛亮帶潛龍，周劭拜師郭嘉。高朋滿座特技使得此隊只需2人即擁有頂級蜀智奇算護甲加成。周劭靈活發動主技能，連續2次打出高額回复與虛弱威懾！",
    commanders: [
      {
        name: "諸葛亮",
        points: "統+智",
        tactic2: "潛龍陣/已知己彼",
        tactic3: "刮骨療毒",
        militaryBook: "三軍之眾/久戰/統軍",
        equipment: "高朋滿座/佳人"
      },
      {
        name: "龐統",
        points: "智",
        tactic2: "太平道法",
        tactic3: "士別三日",
        militaryBook: "後發先至/鬼謀/將威",
        equipment: "疾風突進/連環"
      },
      {
        name: "周劭",
        teaching: "拜師郭嘉",
        points: "智",
        tactic2: "當鋒摧決",
        tactic3: "乘敵不虞",
        militaryBook: "三軍之眾/銳利/幻心",
        equipment: "高朋滿座/奇正相生"
      }
    ]
  },
  {
    id: "wu-1",
    faction: "吳",
    tier: "T0",
    name: "周劭神火弓 (三師神火流)",
    description: "周劭拜師諸葛亮。依靠高朋滿座特技，全隊僅2人就能完美享有神功聯動。周瑜和陸遜多重灼燒與多段兵刃引發戰場連環爆炸，周劭在尾速度給出極高治愈 and 干擾，威風八面。",
    commanders: [
      {
        name: "周瑜",
        points: "智力",
        tactic2: "眾志成城",
        tactic3: "士別三日",
        militaryBook: "避其銳氣/靜心/鐵甲",
        equipment: "靈動"
      },
      {
        name: "陸遜",
        points: "智力",
        tactic2: "功不唐捐",
        tactic3: "萬軍奪帥",
        militaryBook: "出奇制勝/精密/善戰",
        equipment: "靈動"
      },
      {
        name: "周劭",
        teaching: "拜師諸葛亮",
        points: "一速+智",
        tactic2: "雁形陣",
        tactic3: "刮骨療毒",
        militaryBook: "三軍之眾/錘鍊/統軍",
        equipment: "靈動/疾馳/高朋滿座"
      }
    ]
  },
  {
    id: "wei-3",
    faction: "魏",
    tier: "T0",
    name: "楊琪五謀騎",
    description: "本賽季第一魏系天花板。楊琪拜師郭嘉，高朋滿座可以激活五謀緣分！荀攸技能具有強效驅散，能適應複雜的防線環境。楊琪與賈詡依靠戮力同心和奪魂挾魄高頻降低敵軍四維，場均回血與震盪壓制達巔峰！",
    commanders: [
      {
        name: "楊琪",
        teaching: "拜師郭嘉",
        points: "智",
        tactic2: "竭力佐謀",
        tactic3: "刮骨療毒",
        militaryBook: "三軍之眾/久戰/統軍",
        equipment: "高朋滿座/佳人"
      },
      {
        name: "荀攸",
        points: "智",
        tactic2: "奪魂挾魄",
        tactic3: "上兵伐謀",
        militaryBook: "三軍之眾/久戰/統軍",
        equipment: "妖氣/踩踏/樂奏"
      },
      {
        name: "賈詡",
        points: "智",
        tactic2: "盟友行動",
        tactic3: "戮力同心",
        militaryBook: "三軍之眾/久戰/馳援",
        equipment: "妖氣/踩踏/援助/弓寶物"
      }
    ]
  },
  {
    id: "wei-4",
    faction: "魏",
    tier: "T0",
    name: "周劭五謀騎",
    description: "英雄劇本特有，周劭拜師郭嘉。初始屬性極佳，高朋滿座直接觸發五謀謀略增傷. SP荀彧刻意速度拉高30點，用以完克、反彈對手任何周泰/黃月英輔助帶來的盛氣凌敵，打法決截威猛！",
    commanders: [
      {
        name: "SP荀彧",
        points: "30速+智",
        tactic2: "竭力佐謀",
        tactic3: "刮骨療毒",
        militaryBook: "三軍之眾/久戰/疾馳",
        equipment: "妖氣/踩踏/佳人"
      },
      {
        name: "SP郭嘉",
        points: "智",
        tactic2: "奪魂挾魄",
        tactic3: "上兵伐謀",
        militaryBook: "大謀不謀/鬼謀/將威",
        equipment: "專屬寶物"
      },
      {
        name: "周劭",
        teaching: "拜師郭嘉",
        points: "智",
        tactic2: "靈機一動",
        tactic3: "當鋒摧決",
        militaryBook: "奇正相生/文韜/遠謀",
        equipment: "高朋滿座/奇正相生"
      }
    ]
  }
];

export const CIVIL_OFFICIALS: CivilOfficial[] = [
  {
    name: "陳群",
    title: "開荒與內政大師",
    unlockInfo: "第 3 天上線即解鎖。起兵快速發育的首選，降低發展難度，緩解『憋本』升級大本營。開荒期不可或缺。",
    avatarColor: "from-amber-700 via-yellow-600 to-amber-900",
    proposals: [
      {
        name: "征調兵糧",
        priority: "最優先 (極星級 ★★★★★)",
        effect: "1級木牛流馬增加 600 預備兵及 2W 資源。升級後效果達 1000 預備兵、4W 資源；最高限 1450 兵及 5.8W 資源。",
        timeline: "開服第 3 天上線直接採納。",
        tip: "有效降低開荒前期兵力受損造成的資源損耗，能大幅提前開闢大本營的進度，打地發育兩不誤！"
      },
      {
        name: "開山採石",
        priority: "次優先 (四星級 ★★★★☆)",
        effect: "石料產量每小時直接暴增 +5000 點；且對內各項特產貿易比例顯著提升 15%",
        timeline: "發育陷入缺石石料危機或升大本營（軍營、四兵營等高消費）時實時更改調轉。",
        tip: "石料是前期點核心軍事建築、快速攀升兵營等級最主要的物資。不打仗時切換，發育速度翻倍。"
      },
      {
        name: "訓練士兵",
        priority: "後期調整 (三星級 ★★★☆☆)",
        effect: "武將體力消耗降低 20%；部隊整體大地圖行軍、調度速度大張旗鼓暴升 100%！",
        timeline: "開荒完成、過度至大規模國戰與跨州破關搶關卡時切回適用。",
        tip: "在國戰階段方便長途奔襲、重振旗鼓和高強度集體開火作戰。"
      }
    ]
  },
  {
    name: "程昱",
    title: "資源開拓與稅改家",
    unlockInfo: "第 7 天、11 天上線解鎖。核心目標在於開闢高階資源上限，尤其是大名鼎鼎的銅礦，極受普通及白板玩家追捧。",
    avatarColor: "from-emerald-700 via-teal-600 to-indigo-900",
    proposals: [
      {
        name: "稅賦改革",
        priority: "最優級 (極星級 ★★★★★)",
        effect: "主城耕墾高級領土限額暴升 4 塊，在特權下，最高可以擁有 8 塊頂尖『耕墾銅礦 8 級』！",
        timeline: "中期核心發育期，特別需要銅幣來抽取戰法點以及馴養良馬駿獸。",
        tip: "對於不氪金儲值的普通玩家來說，點滿此天賦是維持二隊、三隊迅速成型與戰法點源源不斷唯一的解藥！"
      },
      {
        name: "大興土木",
        priority: "發育中 (四星級 ★★★★☆)",
        effect: "分城建造與主城分部拆遷營造所需資源和耗時集體下調 25%。",
        timeline: "開服前期到中期建立分城大本營熱潮時段。",
        tip: "如果盟內要求玩家快速建立拒馬、箭塔並組建強防禦前沿陣線，此技能有無上之妙用。"
      }
    ]
  },
  {
    name: "鍾繇",
    title: "中後期國戰與軍功將領",
    unlockInfo: "第 13 天、16 天解鎖。此時大局基本定型，進入與敵對同盟激烈的焦土大戰與長焦戰作戰，為前方部隊注入鐵血靈魂。",
    avatarColor: "from-blue-700 via-slate-600 to-gray-900",
    proposals: [
      {
        name: "標記宿敵",
        priority: "戰力回饋 (最熱門 ★★★★★)",
        effect: "可任意向敵方大盟的死敵戰將進行『宿敵』標記。與該宿敵發生對戰且戰平/獲勝時，全體額外反饋 30% 傷兵救助，或直接贈送 5% 額外重返部隊！",
        timeline: "大會戰在關卡前線、碼頭阻擊戰或主力焦灼時使用。",
        tip: "完全打破戰鬥殘兵消耗限制，特別適合跟強敵展開連環平局的多輪苦戰，堪稱皇馬盾等隊的福音。"
      },
      {
        name: "擴編親衛",
        priority: "續航主力 (五星級 ★★★★★)",
        effect: "部隊親衛守衛營能直接擴編，提升主力部隊單體帶兵上限 +1500 兵力！同時獲得極速原地招募恢復效果。",
        timeline: "在需要單挑推土、大縱深長距離突破或敵方高星橫行戰場時挑選。",
        tip: "高帶兵量最直接、無腦的提升就是傷害基礎增加和容錯加成，在 45 級至 50 級玩家頂峰對決時能取得莫大決定優勢。"
      }
    ]
  }
];

export const WEATHER_SPELLS: WeatherSpell[] = [
  {
    name: "寒潮",
    type: "群體控線 / 水路結冰",
    effect: "州內部分河面30分後結冰，結冰後冰面可攻佔、行軍。且發動同盟解鎖加固指合：可臨時提高同盟成員主城耐久。",
    duration: "冷卻/發動時間：約 2-4 小時",
    strategy: "突破江漢、河南等被對手用海量拒馬堵死港口碼頭的險要關隘時，悄然使用寒潮全體渡河奇襲對手防線大後方！",
    icon: "CloudSnow"
  },
  {
    name: "風砂",
    type: "視野干擾 / 降耗衝鋒",
    effect: "同盟成員部隊在對應州內攻城時無視2層九宮圖、八卦陣效果，該州敵對陳營主城視野降低至3格。",
    duration: "冷卻/發動時間：4 小時",
    strategy: "長途奔襲、跨州強攻對方防守工事集中的主力大後方時。點燃風沙阻斷敵方斥候視野，頂著 100 士氣滿屬性狀態瞬間破其陣！",
    icon: "Wind"
  },
  {
    name: "驟雨",
    type: "持續削戰 / 守土防線",
    effect: "在對應州內同盟成員主城周圍兩格（非玩家城池上）作戰或解救同盟主城時部隊獲淂6%增減傷效果。",
    duration: "冷卻/發動時間：6 小時",
    strategy: "己方處於少打多、弱防守強敵高星壓迫之境時。用暴雨在己方碼頭大門前建起沼澤，強迫對方用人命與病體前來送死，以逸待勞。",
    icon: "CloudRain"
  }
];

export const REGIONS_INFO = [
  {
    name: "司隸 / 馮翊 / 江漢 / 河南",
    type: "資源核心州",
    desc: "地圖包含 8 個邊哨前哨與 9 級、10 級強勢雄關壁壘 (如虎牢關)。每天下午一點發起交戰，不容有失的戰略要塞。"
  },
  {
    name: "巴郡 / 起兵州",
    type: "後方休養區",
    desc: "起兵州具備天然的安全防護與快速動員，提供給同方聯盟源源不斷兵員支援。配合民心所望和馬革裹屍能讓傷兵極致回補。"
  }
];

export const NEW_HEROES = {
  general: {
    name: "SP樂進",
    rarity: "5星賽季限定",
    skill: "同踐身先 (主動, 發動率 70%)",
    skillDesc: "使我軍全體獲得1次抵禦，並使我軍隨機武將1回合內受到普通攻擊後有17.5%->35%概率（受統率影響）對敵軍單體造成一次兵刃傷害（傷害率10%->20%，可觸發由普通攻擊觸發的效果）；該戰法每次發動後發動率降低10%但自身提升速度10%。",
    legacySkill: "止戈為武 (主動, 35%)",
    legacyDesc: "普通攻擊之後，對目標發動一次兵刃攻擊（傷害率97.5%一195%）並對其施加1回合繳械。"
  },
  eventTactic: {
    name: "深藏若虛",
    type: "被動戰法 (100% 觸發)",
    exchange: "需要 4 個5星名將（吳·周瑜、吳·甘寧、蜀·曹植 等中4個名將）進行事件兌換。",
    desc: "戰鬥中，每回合治療自身1-3次（治療率19.5%->39%，受智力影響）並有17.5%->35%機率（受智力影響）使自身1回合內受到傷害降低10%->20%（受智力影響，若自身行動時處於控制狀態，基礎值提升至17.5%->35%）。",
    strategy: "最契合全能或自帶被動疊加流的猛將，在長回合戰鬥中，徹底擺脫打斷主動被套控制的威脅！"
  }
};
