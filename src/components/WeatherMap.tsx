/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { WEATHER_SPELLS, REGIONS_INFO, NEW_HEROES } from '../data';
import { CloudSnow, Wind, CloudRain, Swords, ShieldAlert, Zap, Compass, Star, MapPin } from 'lucide-react';

export default function WeatherMap() {
  const [activeSpellName, setActiveSpellName] = useState<string>("寒潮");

  const currentSpell = WEATHER_SPELLS.find(w => w.name === activeSpellName) || WEATHER_SPELLS[0];

  // Helper to map icon components
  const renderSpellIcon = (iconName: string) => {
    switch (iconName) {
      case 'CloudSnow': return <CloudSnow className="w-8 h-8 text-sky-400" />;
      case 'Wind': return <Wind className="w-8 h-8 text-teal-400" />;
      case 'CloudRain': return <CloudRain className="w-8 h-8 text-blue-400" />;
      default: return <Compass className="w-8 h-8 text-amber-400" />;
    }
  };

  return (
    <div className="space-y-8" id="weather-and-maps-view">
      {/* 2-Column layout: 1 for Weather Spells & Map Rules, 1 for New Heroes & Tactics */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        
        {/* Left Column: Weather and Map */}
        <div className="space-y-6">
          <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-850 space-y-4 shadow-xl">
            <div className="space-y-1">
              <span className="text-xs text-teal-400 font-bold tracking-wider font-mono uppercase">戰場計策系統</span>
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                順天應時 • 三大自然氣象法術
              </h3>
              <p className="text-xs text-slate-400">
                玩家可在特定的作戰階段和資源關卡中發動氣象神技，強行阻斷、干預大地圖的地貌或兵士屬性。
              </p>
            </div>

            {/* Selector Grid */}
            <div className="grid grid-cols-3 gap-2" id="weather-selectors">
              {WEATHER_SPELLS.map((spell) => {
                const isSelected = activeSpellName === spell.name;
                return (
                  <button
                    key={spell.name}
                    id={`spell-btn-${spell.name}`}
                    onClick={() => setActiveSpellName(spell.name)}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-2 transition cursor-pointer select-none ${
                      isSelected
                        ? 'bg-slate-900 border-amber-500/80 shadow text-amber-300 font-bold'
                        : 'bg-slate-950 border-slate-850 text-slate-400 hover:bg-slate-900/30 hover:border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    {spell.name === '寒潮' && <CloudSnow className="w-5 h-5" />}
                    {spell.name === '風砂' && <Wind className="w-5 h-5" />}
                    {spell.name === '驟雨' && <CloudRain className="w-5 h-5" />}
                    <span className="text-xs">{spell.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Spell Detailed Card */}
            <div className="bg-slate-950/80 p-5 rounded-xl border border-slate-800/60 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-900 rounded-lg">
                  {renderSpellIcon(currentSpell.icon)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-100">天氣秘策：{currentSpell.name}</h4>
                  <p className="text-xs text-slate-500 font-mono">戰略類型：{currentSpell.type}</p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-slate-300">
                <p className="leading-relaxed bg-slate-900/40 p-3 rounded border border-slate-850/50">
                  <span className="text-slate-400 block mb-1 font-mono text-xs">氣象戰場成效：</span>
                  {currentSpell.effect}
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-xs mt-2 pt-2 border-t border-slate-900">
                  <div>
                    <span className="text-slate-500 font-mono">調度冷卻時長：</span>
                    <p className="text-slate-200 font-medium mt-0.5">{currentSpell.duration}</p>
                  </div>
                  <div>
                    <span className="text-slate-500 font-mono">推薦使用妙計：</span>
                    <p className="text-amber-400 font-medium mt-0.5">{currentSpell.strategy}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Geography Details */}
          <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-850 space-y-4 shadow-xl">
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-500" />
              全新開荒地圖模式：上三對下三
            </h3>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              本次劇本地圖顛覆以往傳統 <strong>6-4-1 模式</strong>，轉向 6個出生州、4個資源州，其中2個資源州是完全重合碰撞爆發區，2個資源州近乎屬於完美獨享：
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3" id="map-regions-grid">
              {REGIONS_INFO.map((reg, idx) => (
                <div key={idx} className="bg-slate-950/60 p-4 rounded-xl border border-slate-850/80">
                  <span className="text-[10px] text-amber-400 font-mono uppercase tracking-wider block mb-1">
                    {reg.type}
                  </span>
                  <h4 className="font-bold text-slate-200 text-sm mb-1.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {reg.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {reg.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: New Heroes & Tactics */}
        <div className="space-y-6">
          {/* New General SP Yue Jin Detail */}
          <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-850 space-y-5 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 bg-red-600/10 text-red-400 font-black font-mono text-[10px] border-l border-b border-red-500/20 rounded-bl-xl uppercase tracking-wider">
              NEW GENERAL
            </div>

            <div className="space-y-1">
              <span className="text-xs text-amber-400 font-bold tracking-wider font-mono">賽季名將搶先看</span>
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-1.5">
                <Swords className="w-5 h-5 text-red-500" />
                全新武將：{NEW_HEROES.general.name}
              </h3>
              <p className="text-xs text-slate-400">
                強度評定：{NEW_HEROES.general.rarity}。高概率主動系，帶領抵禦與普攻連攜的恐怖戰法。
              </p>
            </div>

            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-850 space-y-3 text-xs leading-relaxed">
              <div className="flex justify-between items-center bg-slate-900/60 p-2 rounded border border-slate-800">
                <span className="font-bold text-amber-400">自帶戰法：【{NEW_HEROES.general.skill}】</span>
                <span className="text-slate-500 font-mono">機率 70% 主動</span>
              </div>
              <p className="text-slate-300 pl-1 leading-relaxed">
                {NEW_HEROES.general.skillDesc}
              </p>

              <div className="flex justify-between items-center bg-slate-900/60 p-2 rounded border border-slate-800 mt-2">
                <span className="font-bold text-sky-400">傳承戰法：【{NEW_HEROES.general.legacySkill}】</span>
                <span className="text-slate-500 font-mono">機率 35% 突擊</span>
              </div>
              <p className="text-slate-300 pl-1 leading-relaxed">
                {NEW_HEROES.general.legacyDesc}
              </p>
            </div>
          </div>

          {/* New Event Tactic Inherent Potential Detail */}
          <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-850 space-y-5 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 bg-purple-600/10 text-purple-400 font-black font-mono text-[10px] border-l border-b border-purple-500/20 rounded-bl-xl uppercase tracking-wider">
              NEW EVENT TACTIC
            </div>

            <div className="space-y-1">
              <span className="text-xs text-purple-400 font-bold tracking-wider font-mono">事件戰法研磨</span>
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-1.5">
                <Zap className="w-5 h-5 text-purple-500" />
                新增事件戰法：【{NEW_HEROES.eventTactic.name}】
              </h3>
              <p className="text-xs text-slate-400">
                完美解決法坦、防反流最畏懼的「負面技窮狀態」，具有極佳的自我凈化及屬性爆發加值。
              </p>
            </div>

            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-850 space-y-3">
                <p className="font-semibold text-slate-200">
                  <span className="text-slate-500 font-mono">兌換條件：</span>
                  {NEW_HEROES.eventTactic.exchange}
                </p>
                
                <p className="leading-relaxed bg-slate-900 p-3 rounded border border-slate-850">
                  <span className="text-purple-400 font-semibold block mb-1">戰法具体詳解 (100% 被動穩定發動)：</span>
                  {NEW_HEROES.eventTactic.desc}
                </p>
              </div>

              <div className="bg-purple-950/20 border border-purple-500/20 p-3.5 rounded-lg">
                <p className="font-semibold text-purple-300 flex items-center gap-1.5 mb-1">
                  <ShieldAlert className="w-4 h-4" />
                  實戰戰術定位推薦
                </p>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  {NEW_HEROES.eventTactic.strategy}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
