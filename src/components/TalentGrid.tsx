/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { TALENTS } from '../data';
import { Sparkles, Info, Check, Filter, AlertCircle, RefreshCw, Layers } from 'lucide-react';

export default function TalentGrid() {
  const [pointLimit, setPointLimit] = useState<number>(35); // max 35 points based on rules
  const [selectedTalents, setSelectedTalents] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Define restricted groups for mutual exclusion
  const groups = useMemo(() => ({
    adaptability: ["箭無虛發", "鞍馬嫻熟", "固若金湯", "槍出如龍"],
    faction: ["魏武之志", "蜀漢棟梁", "東吳賢良", "亂世英雄"],
    tags: ["黃巾信徒", "南中勇士"]
  }), []);

  // Compute total cost
  const totalCost = useMemo(() => {
    return selectedTalents.reduce((acc, name) => {
      const talent = TALENTS.find(t => t.name === name);
      return acc + (talent ? talent.cost : 0);
    }, 0);
  }, [selectedTalents]);

  // Handle selection toggles with mutual exclusion constraints
  const handleToggleTalent = (name: string, cost: number) => {
    if (selectedTalents.includes(name)) {
      setSelectedTalents(selectedTalents.filter(item => item !== name));
    } else {
      let updated = [...selectedTalents];
      
      // Enforce the rule constraints
      if (groups.adaptability.includes(name)) {
        // Deselect any other active army adaptability
        updated = updated.filter(item => !groups.adaptability.includes(item));
      } else if (groups.faction.includes(name)) {
        // Deselect any other active faction
        updated = updated.filter(item => !groups.faction.includes(item));
      } else if (groups.tags.includes(name)) {
        // Deselect any other active tag
        updated = updated.filter(item => !groups.tags.includes(item));
      }

      setSelectedTalents([...updated, name]);
    }
  };

  // Reset simulator state
  const handleReset = () => {
    setSelectedTalents([]);
  };

  // Categorize talents
  const categorizedTalents = useMemo(() => {
    return TALENTS.map(t => {
      // Deduce category
      let category = 'other';
      let categoryName = '屬性與戰術';
      let restriction = '';
      
      if (groups.adaptability.includes(t.name)) {
        category = 'adaptability';
        categoryName = '兵種適性 S';
        restriction = '四選一';
      } else if (groups.faction.includes(t.name)) {
        category = 'faction';
        categoryName = '加入陣營';
        restriction = '四選一';
      } else if (groups.tags.includes(t.name)) {
        category = 'faction';
        categoryName = '加入標籤';
        restriction = '二選一';
      } else if (['身經百戰', '天賦昇稟', '融會貫通', '軍令如山', '生生不息'].includes(t.name)) {
        category = 'stats';
        categoryName = '基礎屬性特技';
      } else if (['得道多助', '勇往直前', '聞雞起舞', '馬革裹屍', '狹路相逢', '簞醪投川', '民心所望', '迎難而上', '敏而好學', '高朋滿座'].includes(t.name)) {
        category = 'campaign';
        categoryName = '部隊行軍/戰略';
      } else {
        category = 'tactics';
        categoryName = '配套專屬戰法';
      }
      return { ...t, category, categoryName, restriction };
    });
  }, [groups]);

  // Filter based on active category
  const filteredTalents = useMemo(() => {
    if (activeCategory === 'all') return categorizedTalents;
    return categorizedTalents.filter(t => t.category === activeCategory);
  }, [categorizedTalents, activeCategory]);

  return (
    <div className="space-y-6" id="talent-calculator">
      {/* Top Controller Panel */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row gap-6 items-stretch md:items-center justify-between shadow-xl" id="talent-status-bar">
        <div className="space-y-3">
          <div className="text-amber-400 text-sm font-semibold flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>【英雄世命】全新都尉天賦配置器</span>
          </div>
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            都尉天賦樹 & 點數計算器
          </h3>
          <p className="text-xs text-slate-400">
            初級都尉擁有 <strong>10點</strong> 初始天賦力，隨著官職晉升，最高可獲取 <strong>35點</strong> 天賦點上限。
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {/* Points cap selector */}
          <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 flex items-center gap-3">
            <span className="text-xs text-slate-400 font-mono">設定點數上限:</span>
            <div className="flex gap-1.5">
              {[10, 20, 30, 35].map((val) => (
                <button
                  key={val}
                  id={`btn-point-cap-${val}`}
                  onClick={() => setPointLimit(val)}
                  className={`px-3 py-1 text-xs font-bold rounded-md transition duration-200 cursor-pointer ${
                    pointLimit === val
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {val}點
                </button>
              ))}
            </div>
          </div>

          {/* Current progress indicator */}
          <div className="bg-slate-950/80 px-5 py-2.5 rounded-xl border border-slate-800 text-center flex flex-col justify-center min-w-36">
            <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono">
              <span className="uppercase tracking-wider">點數消耗：</span>
              <span>{totalCost} / {pointLimit}</span>
            </div>
            
            {/* Simple progress bar */}
            <div className="w-full bg-slate-800 rounded-full h-1.5 mt-1 overflow-hidden">
              <div
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  totalCost > pointLimit ? 'bg-rose-500' : 'bg-amber-400'
                }`}
                style={{ width: `${Math.min((totalCost / pointLimit) * 100, 100)}%` }}
              />
            </div>

            {totalCost > pointLimit && (
              <span className="text-[10px] text-rose-400 font-medium flex items-center justify-center gap-1 mt-1 animate-pulse">
                <AlertCircle className="w-3 h-3" />
                已超出點數上限進度！
              </span>
            )}
          </div>

          <button
            onClick={handleReset}
            id="reset-talents-btn"
            className="p-3 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 rounded-xl border border-slate-800 cursor-pointer flex items-center justify-center transition-all duration-200"
            title="全部重置"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Categories Tabs & Grid filter */}
      <div className="space-y-4" id="talent-grid-view">
        <div className="flex flex-wrap gap-1.5 border-b border-slate-800/80 pb-3">
          {[
            { id: 'all', label: '全部天賦 (30個)' },
            { id: 'adaptability', label: '兵種適性 🛡️' },
            { id: 'faction', label: '加入陣營 🚩' },
            { id: 'stats', label: '基礎加值 💪' },
            { id: 'tactics', label: '專屬戰法連動 ⚡' },
            { id: 'campaign', label: '行軍與發育 🗺️' }
          ].map((cat) => (
            <button
              key={cat.id}
              id={`cat-talent-tab-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition ${
                activeCategory === cat.id
                  ? 'bg-slate-800 text-amber-300 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 bg-transparent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Rule Restriction Info Banner */}
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-3 px-4 text-xs text-slate-300 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
          <div className="space-y-1">
            <div className="font-semibold text-slate-100 flex items-center gap-1.5">
              <span>配置規則限制：</span>
              <span className="text-[10px] text-slate-500 font-normal">（點擊同類型相衝突天賦時，將自動為您進行互斥替換）</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <strong>兵種適性 S</strong> 類（如箭無虛發、固若金湯等）：<span className="text-amber-400 font-semibold">四選一</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <strong>加入陣營</strong> 類（如魏武之志、蜀漢棟梁等）：<span className="text-amber-400 font-semibold">四選一</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <strong>增加特殊標籤</strong> 類（黃巾信徒、南中勇士）：<span className="text-amber-400 font-semibold">二選一</span>
              </span>
            </div>
          </div>
        </div>

        {/* The Grid of Talents */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4" id="talents-grid-container">
          {filteredTalents.map((t) => {
            const isSelected = selectedTalents.includes(t.name);
            return (
              <div
                key={t.name}
                id={`talent-card-${t.name}`}
                onClick={() => handleToggleTalent(t.name, t.cost)}
                className={`relative group p-4 rounded-xl border transition-all duration-200 cursor-pointer select-none flex flex-col justify-between ${
                  isSelected
                    ? 'bg-amber-950/20 border-amber-500/80 shadow-md shadow-amber-950/20'
                    : 'bg-slate-900/40 border-slate-850 hover:bg-slate-900/80 hover:border-slate-800'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 flex items-center gap-1.5">
                      {t.categoryName}
                      {t.restriction && (
                        <span className="bg-amber-500/10 text-amber-300 border border-amber-500/20 px-1 py-0.2 rounded text-[9px] font-semibold scale-90 origin-left">
                          {t.restriction}
                        </span>
                      )}
                    </span>
                    
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono font-bold ${
                      isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-950 text-slate-400 border border-slate-850'
                    }`}>
                      {t.cost} 點
                    </span>
                  </div>

                  <h4 className={`text-base font-semibold transition ${
                    isSelected ? 'text-amber-400' : 'text-slate-200 group-hover:text-amber-400'
                  }`}>
                    {t.name}
                  </h4>
                  
                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                    {t.effect}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-900 pt-2 text-[10px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <Info className="w-3 h-3 text-slate-600" />
                    點擊加載/刪減
                  </span>

                  {isSelected && (
                    <span className="text-amber-400 flex items-center gap-0.5 font-bold">
                      <Check className="w-3 h-3" />
                      已配置
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
