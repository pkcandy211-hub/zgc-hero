/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Commandant } from '../types';
import { COMMANDANTS } from '../data';
import { Search, ShieldAlert, BadgeCheck, Sword, Star, Sparkles, BookOpen, UserCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function CommandantCardList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStar, setSelectedStar] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>("zhou-shao"); // default expanded to zhou-shao

  // Filter commandants
  const filteredCommandants = COMMANDANTS.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.skillName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.analysis.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStar = selectedStar
      ? selectedStar === 4
        ? (c.starRating >= 4 && c.starRating < 5)
        : c.starRating === selectedStar
      : true;
    const matchesType = selectedType ? c.skillType === selectedType : true;
    return matchesSearch && matchesStar && matchesType;
  });

  return (
    <div className="space-y-6" id="commandant-section">
      {/* Filters Area */}
      <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800/80 backdrop-blur-md space-y-4 shadow-xl" id="commandant-filters">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              id="search-commandant-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜尋都尉姓名、戰法或分析..."
              className="w-full pl-10 pr-4 py-2 border border-slate-800 rounded-xl bg-slate-950 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-sm transition"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 w-full md:w-auto items-center">
            <span className="text-xs text-slate-400 mr-2 font-mono uppercase tracking-wider">星級：</span>
            {[5, 4, 3].map((star) => (
              <button
                key={star}
                id={`star-filter-${star}`}
                onClick={() => setSelectedStar(selectedStar === star ? null : star)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition cursor-pointer flex items-center gap-1 ${
                  selectedStar === star
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-transparent'
                }`}
              >
                {star} ★
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto items-center">
            <span className="text-xs text-slate-400 mr-2 font-mono uppercase tracking-wider">戰法：</span>
            {['指揮', '主動'].map((type) => (
              <button
                key={type}
                id={`type-filter-${type}`}
                onClick={() => setSelectedType(selectedType === type ? null : type)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition cursor-pointer ${
                  selectedType === type
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-transparent'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        
        {filteredCommandants.length === 0 && (
          <p className="text-sm text-slate-500 text-center py-4">無符合當前篩選條件的都尉武將。</p>
        )}
      </div>

      {/* Grid Layout containing Interactive Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="commandants-display-grid">
        {/* Left Side: Summary List (4 cols) */}
        <div className="lg:col-span-4 space-y-2.5 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar" id="commandants-list-panel">
          {filteredCommandants.map((item) => {
            const isSelected = expandedId === item.id;
            return (
              <div
                key={item.id}
                id={`commandant-item-${item.id}`}
                onClick={() => setExpandedId(item.id)}
                className={`group p-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-950/40 to-slate-900 border-amber-500/50 shadow-md shadow-amber-950/20'
                    : 'bg-slate-900/40 border-slate-800/60 hover:bg-slate-900/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Faction Representative Icon with initial text */}
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${item.avatarColor} flex items-center justify-center text-sm font-bold text-slate-100 shadow-inner group-hover:scale-105 transition-transform duration-300`}>
                    {item.name[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-100 text-base">{item.name}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-sm font-semibold ${
                        item.starRating >= 4.5 ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                        item.starRating >= 4 ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                        'bg-zinc-500/10 text-zinc-400 border border-zinc-500/20'
                      }`}>
                        {item.starRating}星/★
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 truncate max-w-[150px]">{item.skillName}</p>
                  </div>
                </div>
                
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                  item.skillType === '主動' ? 'bg-amber-500/10 text-amber-400' : 'bg-blue-500/10 text-blue-400'
                }`}>
                  {item.skillType}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right Side: Detailed View Panel (8 cols) */}
        <div className="lg:col-span-8 bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between" id="commandant-detail-panel">
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />
          
          <AnimatePresence mode="wait">
            {(() => {
              const selected = COMMANDANTS.find((c) => c.id === expandedId);
              if (!selected) {
                return (
                  <div className="flex flex-col items-center justify-center h-80 text-slate-500 text-sm">
                    <Sword className="w-12 h-12 mb-3 text-slate-600 animate-pulse" />
                    <span>請點擊左側列表選擇都尉武將查看詳細攻略</span>
                  </div>
                );
              }
              
              return (
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {/* Top Header Card */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-5">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${selected.avatarColor} flex-shrink-0 flex items-center justify-center font-bold text-white shadow-lg shadow-black/35 whitespace-nowrap px-1 ${
                        selected.name.length > 2 ? 'text-sm tracking-tighter' : 'text-xl'
                      }`}>
                        {selected.name}
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-2xl font-semibold text-slate-50">{selected.name}</h3>
                          <div className="flex gap-0.5 items-center">
                            {Array.from({ length: Math.floor(selected.starRating) }).map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                            ))}
                            {selected.starRating % 1 !== 0 && (
                              <div className="relative w-4 h-4 flex-shrink-0">
                                <Star className="absolute top-0 left-0 w-4 h-4 text-slate-700 fill-slate-700" />
                                <div className="absolute top-0 left-0 w-2 h-4 overflow-hidden">
                                  <Star className="w-4 h-4 text-amber-400 fill-amber-400 max-w-none" />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 font-mono uppercase tracking-wider">
                          專屬兵權都尉 • 初始級別 20級 • 滿級戰法搭載
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2.5">
                      <div className="bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800 text-center">
                        <p className="text-[10px] text-slate-500 font-mono">戰法種類</p>
                        <p className="text-xs font-semibold text-amber-400 mt-0.5">{selected.skillType}</p>
                      </div>
                      <div className="bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800 text-center">
                        <p className="text-[10px] text-slate-500 font-mono">發動概率</p>
                        <p className="text-xs font-semibold text-sky-400 mt-0.5">{selected.skillRate}</p>
                      </div>
                    </div>
                  </div>

                  {/* Body Info Sections */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column: Tactic & Equipment */}
                    <div className="space-y-5">
                      {/* Tactic Card */}
                      <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800/80 relative">
                        <div className="flex items-center gap-2 mb-2 text-slate-300 font-medium">
                          <Sparkles className="w-4 h-4 text-amber-500" />
                          <span>自帶戰法：{selected.skillName}</span>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line pl-1">
                          {selected.skillDescription}
                        </p>
                      </div>

                      {/* Equipment Card */}
                      <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800/80 border-l-3 border-l-amber-500">
                        <div className="flex items-center justify-between mb-2">
                          <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                            <ShieldAlert className="w-4 h-4 text-amber-400" />
                            專屬特技裝備
                          </span>
                          <span className="text-xs font-bold font-mono px-2 py-0.5 bg-amber-500/10 text-amber-400 rounded-md">
                            {selected.specialEquip}
                          </span>
                        </div>
                        <div className="space-y-2 text-sm">
                          <p className="text-slate-300">
                            <span className="text-slate-500">特技技能：</span>
                            <span className="font-semibold text-slate-200">【{selected.specialFeature}】</span>
                          </p>
                          <p className="text-slate-300 leading-relaxed bg-slate-900/60 p-2.5 rounded border border-slate-800/50">
                            {selected.specialFeatureDesc}
                          </p>
                          <p className="text-xs text-amber-300 font-mono bg-amber-950/20 px-2 py-1 rounded inline-block">
                            裝備特技加成：{selected.equipBonus}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Analysis & Lineups */}
                    <div className="space-y-5">
                      {/* Tactical Analysis */}
                      <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800/80">
                        <div className="flex items-center gap-2 mb-2.5 text-slate-300 font-medium">
                          <BookOpen className="w-4 h-4 text-emerald-500" />
                          <span>都尉解析與培養思路</span>
                        </div>
                        <p className="text-[#d1d5db] text-sm leading-relaxed">
                          {selected.analysis}
                        </p>
                      </div>

                      {/* Recommendation details */}
                      <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800/80">
                        <div className="flex items-center gap-2 mb-2 text-slate-300 font-medium">
                          <UserCheck className="w-4 h-4 text-sky-500" />
                          <span>拜師/傳授推薦</span>
                        </div>
                        <p className="text-slate-200 text-sm font-medium bg-sky-950/15 p-2 rounded border border-sky-900/30">
                          {selected.recommendedClass}
                        </p>
                        
                        <div className="mt-4">
                          <p className="text-xs text-slate-500 font-mono mb-2 uppercase tracking-wide">本賽季推薦搭檔組合：</p>
                          <div className="space-y-1.5">
                            {selected.recommendedTeams.map((team, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                                <BadgeCheck className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                                <span className="font-sans leading-relaxed">{team}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
