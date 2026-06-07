/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Compass, 
  ShieldCheck, 
  Award, 
  Users, 
  ScrollText, 
  Workflow, 
  Briefcase 
} from 'lucide-react';
import CommandantCardList from './components/CommandantCard';
import TalentGrid from './components/TalentGrid';
import TierListTable from './components/TierListTable';
import CivilProposals from './components/CivilProposals';
import WeatherMap from './components/WeatherMap';
import StarterGuideTable from './components/StarterGuideTable';

// Page 25 auxiliary specs
const STARTER_GUIDE = {
  header: "皇馬 48H 開荒發育與前期轉型 (勢力 15000+ 達成解密)",
  vehicleRequirements: {
    title: "攻城器械配置指標",
    items: [
      "● 配備主力：2 輛器械衝車，等級達至 20 級",
      "● 帶兵基準：至少 6000 攻城兵車數額",
      "● 戰法水準：配備 3 技能，且各戰法等級均達至 3 級以上",
      "● 器械適性：適性硬性標準必須達到 SSS 或 SSA 等級以上"
    ]
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('commandant');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/20 selection:text-amber-300" id="app-root">
      {/* Decorative Border & Ambient Glow */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-600 via-yellow-500 to-red-700" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Primary Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        
        {/* Navigation / Header Brand */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-slate-900 pb-8" id="app-header">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-500 font-mono tracking-widest uppercase">
              <Compass className="w-4 h-4 animate-spin-slow text-amber-500" />
              <span>《三國志·戰略版》賽季特刊</span>
            </div>
            
            <h1 className="text-3xl font-black text-slate-100 tracking-tight flex items-center gap-2">
              「英雄世命」賽季都尉與戰略資料庫
            </h1>
            
            <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
              本資料庫精準匹配「英雄世命」賽季，集都尉將領天賦分析、文臣策略提案、
              三大氣象计策玩法、天梯陣容推薦以及 48H 起兵極限開荒指南於一身。
            </p>
          </div>

          <div className="flex items-center gap-3 bg-slate-900/40 border border-slate-800/80 px-4 py-3 rounded-2xl" id="header-author-badge">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-black">
              秋
            </div>
            <div>
              <p className="text-xs font-bold text-slate-100 font-mono">推薦作者：【秋石小軍師】</p>
              <p className="text-[10px] text-slate-400">微信搜【秋石小軍師】關注領取白皮書</p>
            </div>
          </div>
        </header>

        {/* Dynamic Navigation Tabs Row */}
        <div className="bg-slate-900/20 p-2 rounded-2xl border border-slate-900 flex flex-wrap gap-1 shadow-lg" id="navigation-tabs">
          {[
            { id: 'commandant', label: '都尉武將一覽', icon: Users },
            { id: 'talent', label: '天賦配置計算器', icon: Workflow },
            { id: 'tier', label: '強勢天梯陣容', icon: Award },
            { id: 'civil', label: '政廳文臣提案', icon: ScrollText },
            { id: 'weather', label: '沙盤氣象與武將', icon: Compass },
            { id: 'starter', label: '48H 起兵開荒', icon: ShieldCheck }
          ].map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`nav-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[140px] px-4 py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-slate-950 font-bold shadow-md shadow-amber-950/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab content wrapper utilizing conditional rendering */}
        <main className="min-h-[500px]" id="main-content-view">
          {activeTab === 'commandant' && <CommandantCardList />}
          {activeTab === 'talent' && <TalentGrid />}
          {activeTab === 'tier' && <TierListTable />}
          {activeTab === 'civil' && <CivilProposals />}
          {activeTab === 'weather' && <WeatherMap />}
          
          {activeTab === 'starter' && (
            <div className="space-y-8 animate-fade-in" id="starter-guide-tab">
              {/* Top Banner with exact reference */}
              <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-3 shadow-xl">
                <span className="text-xs bg-amber-500/10 text-amber-400 px-2.5 py-1 rounded-sm font-semibold tracking-wider font-mono uppercase">
                  PAGE 25 • 秋石開荒特輯
                </span>
                <h3 className="text-xl font-bold text-slate-150">
                  秋石小軍師：霸王討逆專屬開荒控號打野配將指南
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  本板塊採用精美、高對比的現代數位網格（Modern Grid），全方位收錄、彙整攻略白皮書第 25 頁的核心精髓：解密速發開荒隊伍、48小時碰瓷極限打地發育，以及全新器械配組指標，助您前期發展暢行無阻。
                </p>
              </div>

              {/* Main table and vehicles dashboard view component */}
              <StarterGuideTable />
            </div>
          )}
        </main>

        {/* Footer info section */}
        <footer className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500" id="app-footer">
          <p>© 2026 《三國志·戰略版》「英雄世命」賽季百科. 保留所有戰術推薦資料權利。</p>
          <p className="font-mono text-[10px] uppercase tracking-wider">
            資料更新同步時間：2026-06-07 13:33:52Z • 賽季版本「英雄世命」
          </p>
        </footer>

      </div>
    </div>
  );
}
