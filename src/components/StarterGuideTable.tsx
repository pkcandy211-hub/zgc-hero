import React, { useState } from 'react';
import { 
  Shield, 
  Sparkles, 
  CheckCircle, 
  RefreshCw, 
  Bookmark, 
  HelpCircle, 
  AlertTriangle, 
  Truck, 
  ListFilter 
} from 'lucide-react';

interface GeneralData {
  name: string;
  attr: string;
  tactic2: string;
  tactic3?: string;
  books?: string[];
  equip?: string;
}

interface TeamPhase {
  phase: string;
  rows: GeneralData[];
  desc: string;
}

export default function StarterGuideTable() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGeneral, setSelectedGeneral] = useState<string | null>(null);

  // Data for Phase 1: 開荒隊和轉型隊
  const phase1List: TeamPhase[] = [
    {
      phase: "20級前 (起跑發育)",
      rows: [
        { name: "法正", attr: "統", tactic2: "潛龍陣", tactic3: "" },
        { name: "SP馬超", attr: "武", tactic2: "摧鋒驟刃", tactic3: "" },
        { name: "諸葛恪", attr: "30速+智", tactic2: "解煩衛", tactic3: "" }
      ],
      desc: "敵人繳械震懾主動戰法多，使用「速乘其利」；其他使用「摧鋒驟刃 / 一騎當千」"
    },
    {
      phase: "20級後 (發力開荒)",
      rows: [
        { name: "法正", attr: "統", tactic2: "潛龍陣", tactic3: "解煩衛" },
        { name: "SP馬超", attr: "武", tactic2: "摧鋒驟刃", tactic3: "速乘其利" },
        { name: "諸葛恪", attr: "30速+智", tactic2: "臨機制勝", tactic3: "盛氣凌敵" }
      ],
      desc: "建議 25-26 級嘗試開 6 級地，開地優先打 曹彰騎 或 郭淮盾 最穩"
    },
    {
      phase: "黃金過渡期 (王元姬變陣)",
      rows: [
        { name: "王元姬", attr: "智最高", tactic2: "潛龍陣", tactic3: "暫避其鋒" },
        { name: "SP馬超", attr: "武", tactic2: "一騎當千", tactic3: "速乘其利" },
        { name: "諸葛恪", attr: "智", tactic2: "解煩衛", tactic3: "盛氣凌敵" }
      ],
      desc: "市政廳達到 7 本後，使用 王元姬 替換 法正。王元姬智力加點最高以吃滿暫避減傷保核心"
    },
    {
      phase: "打地皇馬槍 (頂配形態)",
      rows: [
        { name: "SP馬超", attr: "武", tactic2: "速乘其利", tactic3: "摧鋒驟刃", books: ["援其必攻", "速戰", "掩虛"], equip: "靈動" },
        { name: "SP皇甫嵩", attr: "統", tactic2: "鋒矢陣", tactic3: "草船借箭", books: ["審時度勢", "開闔", "分利"], equip: "援助" },
        { name: "許攸", attr: "智", tactic2: "解煩衛", tactic3: "臨危救主", books: ["惜兵愛民", "守勢", "防備"], equip: "靈動" }
      ],
      desc: "此陣容為打地皇者。若需進入打架(PVP)對決時，一騎當千換當鋒/虎踞，鋒矢陣換威謀靡亢"
    }
  ];

  // Data for Phase 3: 5隊共存
  const phase3List: TeamPhase[] = [
    {
      phase: "極限皇馬槍 (賽季大成型)",
      rows: [
        { name: "SP馬超", attr: "全武", tactic2: "虎踞鷹揚", tactic3: "摧鋒驟刃", books: ["援其必攻", "速戰", "掩虛"], equip: "神威 / 踩踏 / 暴躁" },
        { name: "SP皇甫嵩", attr: "統", tactic2: "萬軍奪帥", tactic3: "草船借箭", books: ["審時度勢", "開闔", "分利"], equip: "沉重" },
        { name: "許攸", attr: "智", tactic2: "解煩衛", tactic3: "臨危救主", books: ["惜兵愛民", "守勢", "防備"], equip: "無特技(白板即可)" }
      ],
      desc: "當鋒摧鋒與虎踞可以根據戰場敵人群體屬性環境隨時無干擾切換，只需點 1 級戰法即可。"
    }
  ];

  // Vehicles combinations (列車組合 1 & 組合 2)
  const vehicleCombinations = [
    {
      title: "攻城車隊 • 列車組合 1 (高傷害效率)",
      badge: "最速破城防",
      badgeColor: "bg-amber-500/15 text-amber-400 border border-amber-500/20",
      commanders: [
        { name: "甘寧", attr: "武/輸出", tactics: ["破軍威勝", "避實擊虛"] },
        { name: "樂進", attr: "武/高爆發", tactics: ["士爭先赴", "魯莽"] },
        { name: "SP黃月英", attr: "智/先攻", tactics: ["料事如神", "挾勢弄權"] }
      ]
    },
    {
      title: "攻城車隊 • 列車組合 2 (穩健干擾型)",
      badge: "多能控制攻堅",
      badgeColor: "bg-teal-500/15 text-teal-400 border border-teal-500/20",
      commanders: [
        { name: "SP袁紹", attr: "武·統/穩定", tactics: ["橫掃千軍", "疾風驟雨"] },
        { name: "呂蒙", attr: "統·智/防禦", tactics: ["火熾原燎", "焚輜營壘"] },
        { name: "張寶 (紫卡)", attr: "智/續航輔助", tactics: ["整裝待發", "臨機制勝"] }
      ]
    }
  ];

  const filteredPhase1 = phase1List.map(p => ({
    ...p,
    rows: p.rows.filter(r => 
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.tactic2.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (r.tactic3 && r.tactic3.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(p => p.rows.length > 0);

  const filteredPhase3 = phase3List.map(p => ({
    ...p,
    rows: p.rows.filter(r => 
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.tactic2.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (r.tactic3 && r.tactic3.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(p => p.rows.length > 0);

  return (
    <div className="space-y-8" id="starter-guide-main">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-900">
        <div className="flex items-center gap-2">
          <ListFilter className="w-4 h-4 text-amber-500" />
          <span className="text-xs font-semibold text-slate-300">數據篩檢與查詢</span>
        </div>

        <div className="w-full sm:w-auto relative">
          <input
            type="text"
            placeholder="搜尋武將、戰法或被動 (例如: SP馬超, 潛龍陣)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-96 px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-amber-500/50"
            id="search-input-field"
          />
        </div>
      </div>

      {/* ==================== SECTION 1: 開荒隊與轉型 ==================== */}
      <section className="space-y-4" id="section-starter-phases">
        <div className="flex items-center gap-2.5 border-b border-slate-900 pb-3">
          <Shield className="w-5 h-5 text-amber-500 animate-pulse" />
          <h4 className="text-base font-black text-slate-200">一、皇馬開荒階段與過渡核心隊</h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPhase1.map((p, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/30 border border-slate-900/80 rounded-2xl p-5 space-y-4 hover:border-slate-800/80 transition duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-slate-950 px-3.5 py-2 rounded-xl border border-slate-850">
                  <span className="text-xs font-bold text-amber-400 tracking-wider font-mono">{p.phase}</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Starter Core</span>
                </div>

                <div className="space-y-2.5">
                  {p.rows.map((row, rIdx) => (
                    <div 
                      key={rIdx} 
                      onClick={() => setSelectedGeneral(row.name)}
                      className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 rounded-xl border transition ${
                        selectedGeneral === row.name 
                          ? 'bg-amber-500/5 border-amber-500/40 text-amber-300' 
                          : 'bg-slate-950/40 border-slate-850 hover:bg-slate-900/40'
                      } cursor-pointer`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-slate-200">{row.name}</span>
                        <span className="px-1.5 py-0.5 bg-slate-900 text-[9px] text-slate-500 border border-slate-800 rounded font-mono font-bold">
                          {row.attr}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2 sm:mt-0 text-[10px]">
                        <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-505/10 rounded font-mono">
                          {row.tactic2}
                        </span>
                        {row.tactic3 && (
                          <span className="px-2 py-0.5 bg-teal-500/10 text-teal-400 border border-teal-505/10 rounded font-mono">
                            {row.tactic3}
                          </span>
                        )}
                        {row.books && (
                          <span className="px-2 py-0.5 bg-slate-900 text-slate-400 border border-slate-800 rounded">
                            兵書: {row.books.join('·')}
                          </span>
                        )}
                        {row.equip && (
                          <span className="px-2 py-0.5 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded font-mono">
                            裝備: {row.equip}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-850 text-xs text-slate-400 leading-relaxed mt-2 self-end w-full">
                <span className="font-bold text-slate-300">階段方針：</span>
                {p.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== SECTION 2: 碰瓷體系 ==================== */}
      <section className="space-y-4" id="section-starter-touch-and-go">
        <div className="flex items-center gap-2.5 border-b border-slate-900 pb-3">
          <RefreshCw className="w-5 h-5 text-amber-500" />
          <h4 className="text-base font-black text-slate-200">二、極致高收益碰瓷體系</h4>
        </div>

        <div className="bg-slate-900/20 border border-slate-900 rounded-2xl p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Combo 1: 賈詡混亂 */}
            <div className="bg-slate-950/40 border border-slate-850 p-4 rounded-xl space-y-3.5">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-amber-400">雙、三將自由切換</span>
                <span className="text-[10px] text-slate-500">賈詡核心</span>
              </div>
              <h5 className="text-sm font-bold text-slate-100">賈詡混亂體系</h5>
              <div className="space-y-2 text-xs leading-relaxed">
                <div className="bg-slate-900/50 p-2.5 rounded border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">三將完整版 (死士先攻拉滿)</span>
                  <span className="text-slate-300 font-medium">賈詡 (智) 偽書相間 + 太史慈 (武) 折衝禦侮 + 死士 白馬義從</span>
                </div>
                <div className="bg-slate-900/50 p-2.5 rounded border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">雙將極速版</span>
                  <span className="text-slate-300 font-medium">賈詡 (智) 偽書相間 + 呂蒙 白馬義從</span>
                </div>
              </div>
            </div>

            {/* Combo 2: 張讓法傷 */}
            <div className="bg-slate-950/40 border border-slate-850 p-4 rounded-xl space-y-3.5">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-teal-400">法術傷害爆發型</span>
                <span className="text-[10px] text-slate-500">張讓核心</span>
              </div>
              <h5 className="text-sm font-bold text-slate-100">張讓法傷碰瓷</h5>
              <div className="space-y-2 text-xs leading-relaxed">
                <div className="bg-slate-900/50 p-2.5 rounded border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">三將穩定版</span>
                  <span className="text-slate-300 font-medium">張讓 (智) 文武雙全 + 周泰 (統) 長者之風 + 黃月英 鋒矢陣</span>
                </div>
                <div className="bg-slate-900/50 p-2.5 rounded border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">雙將穩定版</span>
                  <span className="text-slate-300 font-medium">張讓 (智) 文武雙全 + 黃月英 鋒矢陣</span>
                </div>
              </div>
            </div>

            {/* Combo 3: 孫尚香/馬超 */}
            <div className="bg-slate-950/40 border border-slate-850 p-4 rounded-xl space-y-3.5">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-rose-400">極速武力突擊型</span>
                <span className="text-[10px] text-slate-500">物理雙核</span>
              </div>
              <h5 className="text-sm font-bold text-slate-100">突擊武力碰瓷</h5>
              <div className="space-y-2 text-xs leading-relaxed">
                <div className="bg-slate-900/50 p-2.5 rounded border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">孫尚香車隊</span>
                  <span className="text-slate-300 font-medium">孫尚香 (武) 裸衣血戰 + 凌統 (武) 虎豹騎</span>
                </div>
                <div className="bg-slate-900/50 p-2.5 rounded border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">馬超車隊</span>
                  <span className="text-slate-300 font-medium">馬超 (武) 裸衣血戰 + 黃月英 鋒矢陣</span>
                </div>
              </div>
            </div>

          </div>

          {/* Guidelines on Touch and Go */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-xl border border-slate-850 text-xs">
            <div className="flex gap-2 text-rose-400">
              <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-500" />
              <div>
                <span className="font-bold block text-rose-300">Tip 1: 先攻與控制</span>
                碰瓷主要是依靠先攻優勢，然後對高等級野怪進行混亂或者提供高容錯、穩定輸出，從而以白板或超低兵力磨掉野怪幾百到幾千守軍兵力，以便主力無傷收割！
              </div>
            </div>
            <div className="flex gap-2 text-slate-400">
              <HelpCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-500" />
              <div>
                <span className="font-bold block text-slate-250">Tip 2: 彈性更換將領</span>
                輔助武將起先攻、增傷、屬性增益。在不同碰瓷隊之間可根據野怪分布靈能調換（戰法不變）。例如 5 地守軍陳武盾有頓兵規避，這時把輔助換成凌統（必中、先攻）效果最穩健！
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: 共存主力 ==================== */}
      <section className="space-y-4" id="section-perfect-coexisting">
        <div className="flex items-center gap-2.5 border-b border-slate-900 pb-3">
          <Bookmark className="w-5 h-5 text-amber-500" />
          <h4 className="text-base font-black text-slate-200">三、終級 5 隊共存陣容 (主力精選)</h4>
        </div>

        {filteredPhase3.map((p, idx) => (
          <div 
            key={idx} 
            className="bg-gradient-to-br from-amber-950/10 to-slate-900/30 border border-slate-900 rounded-2xl p-6 space-y-5"
          >
            <div className="flex justify-between items-center border-b border-slate-850 pb-3">
              <div>
                <span className="text-xs font-bold text-amber-400 block tracking-widest uppercase font-mono">Season Peak Coexistence</span>
                <h5 className="text-base font-bold text-slate-150 mt-1">{p.phase}</h5>
              </div>
              <span className="text-[10px] bg-amber-500/10 text-amber-400 px-3 py-1 rounded-sm font-semibold border border-amber-500/20 font-mono tracking-wider font-bold">
                T0 頂配大作戰
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {p.rows.map((row, rIdx) => (
                <div key={rIdx} className="bg-slate-950/70 p-4 rounded-xl border border-slate-850 space-y-3 hover:border-amber-500/20 transition">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-black text-slate-100">{row.name}</span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase bg-slate-900 px-2 py-0.5 rounded font-mono">
                      {row.attr}
                    </span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-slate-400">
                      <span>第二戰法</span>
                      <span className="font-bold text-amber-400 font-mono">{row.tactic2}</span>
                    </div>
                    {row.tactic3 && (
                      <div className="flex justify-between text-slate-400">
                        <span>第三戰法</span>
                        <span className="font-bold text-teal-405 font-mono">{row.tactic3}</span>
                      </div>
                    )}
                    {row.books && (
                      <div className="text-slate-500 pt-1.5 border-t border-slate-900">
                        <span className="block text-[9px] uppercase font-bold tracking-widest mb-1 text-slate-550">推薦兵書系：</span>
                        <span className="text-[10px] text-slate-350">{row.books.join(' · ')}</span>
                      </div>
                    )}
                    {row.equip && (
                      <div className="text-slate-500 pt-1 border-t border-slate-900/50">
                        <span className="block text-[9px] uppercase font-bold tracking-widest mb-1 text-slate-550">賽季核心神裝：</span>
                        <span className="text-[10px] text-purple-400 font-mono font-bold bg-purple-500/5 px-1.5 py-0.5 rounded border border-purple-500/10 inline-block">
                          {row.equip}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 leading-relaxed text-xs text-slate-300">
              <span className="font-bold text-amber-400">戰術運用提示：</span>
              {p.desc}
            </div>
          </div>
        ))}
      </section>

      {/* ==================== NEW SECTION: 器械 (Siege Vehicles) ==================== */}
      <section className="space-y-4" id="section-vehicles-and-lineups">
        <div className="flex items-center gap-2.5 border-b border-slate-900 pb-3">
          <Truck className="w-5 h-5 text-amber-500" />
          <h4 className="text-base font-black text-slate-200">四、攻城器械隊：起兵核心指標與推薦列車組合</h4>
        </div>

        <div className="bg-slate-900/20 border border-slate-900/60 p-6 rounded-2xl space-y-6">
          {/* Header Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-950 p-5 rounded-xl border border-slate-850">
            <div className="space-y-1.5">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Core Vehicle Metrics</span>
              <p className="text-xs font-medium text-slate-300 leading-relaxed">
                ● 實操配置：<span className="text-amber-400 font-bold">2 輛</span>器械，等級提升至 <span className="text-amber-400 font-bold">20 級</span>左右
              </p>
              <p className="text-xs font-medium text-slate-300 leading-relaxed">
                ● 推薦兵力配額：部隊共計需要帶滿 <span className="text-teal-400 font-bold">6000 兵車</span>左右
              </p>
              <p className="text-xs font-medium text-slate-300 leading-relaxed">
                ● 戰法配置基準：解鎖 <span className="text-amber-400 font-bold">3 個戰法技能</span>，且均點升至 <span className="text-teal-400 font-bold">3 級</span>或以上
              </p>
            </div>
            <div className="space-y-1.5 border-t sm:border-t-0 sm:border-l border-slate-800 pt-4 sm:pt-0 sm:pl-6 flex flex-col justify-center">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Hard Requirements</span>
              <div className="bg-amber-500/5 border border-amber-500/10 p-3 rounded-lg mt-1 space-y-1">
                <p className="text-xs font-black text-amber-400">
                  器械兵種適性要求 : SSS / SSA 以上
                </p>
                <p className="text-[10px] text-slate-400">
                  器械適性直接對應攻城值高低。任何攻打大型關卡或城池的器械都必須嚴格遵守適性指標，以杜絕翻車、保證一次性拆遷通關！
                </p>
              </div>
            </div>
          </div>

          {/* Vehicle Combinations (組合1 & 組合2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vehicleCombinations.map((combo, idx) => (
              <div 
                key={idx} 
                className="bg-slate-950/40 border border-slate-850 p-5 rounded-xl space-y-4 hover:border-slate-800 transition duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <h5 className="text-xs font-black text-slate-200 tracking-wider">
                      {combo.title}
                    </h5>
                    <span className={`text-[9px] px-2 py-0.5 rounded font-black tracking-widest uppercase ${combo.badgeColor}`}>
                      {combo.badge}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {combo.commanders.map((comm, cIdx) => (
                      <div 
                        key={cIdx}
                        className="p-3 bg-slate-900/40 rounded-lg border border-slate-850 flex items-center justify-between gap-2"
                      >
                        <div className="flex items-center gap-2 w-1/3">
                          <span className="text-xs font-bold text-slate-200">{comm.name}</span>
                          <span className="text-[9px] font-mono text-slate-500 bg-slate-950 px-1 py-0.5 rounded">
                            {comm.attr}
                          </span>
                        </div>
                        <div className="flex gap-1.5 w-2/3 justify-end text-[10px]">
                          {comm.tactics.map((tac, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="px-2.5 py-1 bg-slate-950 text-slate-300 rounded border border-slate-800 font-mono truncate"
                              title={tac}
                            >
                              {tac}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-2 text-[10px] text-slate-500 leading-relaxed font-mono">
                  ※ 攻城時建議將此列車組合的器械部隊編入攻城攻堅列隊，保障戰略目標在攻城進度下無傷高效。
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Showcase Detail Drawer */}
      {selectedGeneral && (
        <div className="bg-gradient-to-r from-amber-950/20 to-slate-900/60 p-4 rounded-xl border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
          <div className="space-y-1">
            <h5 className="font-black text-sm text-amber-405">選中將領聚焦分析：{selectedGeneral}</h5>
            <p className="text-xs text-slate-400">在「英雄世命」賽季，登庸此拜師武將時，初始四維屬性解鎖高達 80%~100% 隨機屬性加護，完美的隊伍和陣營融合度。</p>
          </div>
          <button
            onClick={() => setSelectedGeneral(null)}
            className="px-3.5 py-1.5 bg-amber-500/20 border border-amber-500/30 rounded-lg text-xs hover:bg-amber-500/30 text-amber-300 transition"
          >
            關閉聚焦
          </button>
        </div>
      )}
    </div>
  );
}
