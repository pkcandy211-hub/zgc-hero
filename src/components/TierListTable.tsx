/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { TEAM_BUILDS } from '../data';
import { Shield, Sparkles, Filter, Award, Search, HelpCircle, BadgeCheck } from 'lucide-react';

export default function TierListTable() {
  const [selectedFaction, setSelectedFaction] = useState<string>('全部');
  const [selectedTier, setSelectedTier] = useState<string>('全部');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Factions mapping
  const factionsList = ['全部', '混合', '魏', '蜀', '吳', '群'];
  const tiersList = ['全部', 'T0', 'T0.5'];

  // Filter lineups
  const filteredTeams = useMemo(() => {
    return TEAM_BUILDS.filter(team => {
      const matchesFaction = selectedFaction === '全部' || team.faction === selectedFaction;
      const matchesTier = selectedTier === '全部' || team.tier === selectedTier;
      const matchesSearch = searchQuery === '' || 
        team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        team.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        team.commanders.some(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFaction && matchesTier && matchesSearch;
    });
  }, [selectedFaction, selectedTier, searchQuery]);

  return (
    <div className="space-y-6" id="tier-list-container">
      {/* Search and Filters bar */}
      <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-800 flex flex-col md:flex-row gap-4 items-center justify-between" id="tier-filters">
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            選擇陣營：
          </span>
          <div className="flex flex-wrap gap-1">
            {factionsList.map((faction) => (
              <button
                key={faction}
                id={`faction-${faction}`}
                onClick={() => setSelectedFaction(faction)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition cursor-pointer ${
                  selectedFaction === faction
                    ? 'bg-amber-500 text-slate-950 font-bold shadow'
                    : 'bg-slate-850 text-slate-350 hover:bg-slate-800'
                }`}
              >
                {faction}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {/* Strength Filter */}
          <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
            <Award className="w-3.5 h-3.5" />
            強度評級：
          </span>
          <div className="flex gap-1">
            {tiersList.map((tier) => (
              <button
                key={tier}
                id={`tier-${tier}`}
                onClick={() => setSelectedTier(tier)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition cursor-pointer ${
                  selectedTier === tier
                    ? 'bg-amber-500 text-slate-950 font-bold shadow'
                    : 'bg-slate-850 text-slate-350 hover:bg-slate-800'
                }`}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>

        {/* Input box */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            id="search-lineup-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜尋武將、編隊..."
            className="w-full pl-9 pr-3 py-1.5 bg-slate-950 rounded-lg text-xs text-slate-200 border border-slate-800 focus:outline-none focus:border-amber-500 transition"
          />
        </div>
      </div>

      {/* Grid of Team Lineups */}
      <div className="space-y-6" id="tier-builds-list">
        {filteredTeams.map((team) => (
          <div
            key={team.id}
            id={`team-build-card-${team.id}`}
            className="bg-slate-950/40 rounded-2xl border border-slate-800/80 overflow-hidden shadow-lg hover:border-slate-700/80 transition-all duration-300"
          >
            {/* Header part */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-950 px-6 py-4 border-b border-slate-855 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <span className={`px-2.5 py-1 text-xs font-black rounded font-mono ${
                  team.tier === 'T0' ? 'bg-amber-500 text-slate-950' : 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                }`}>
                  {team.tier}
                </span>

                <h4 className="text-lg font-bold text-slate-50">{team.name}</h4>
                <span className="text-xs bg-slate-800/80 px-2 py-0.5 rounded text-slate-400 border border-slate-700/50">
                  {team.faction === '混合' ? '混合陣營' : team.faction + '國'}天梯
                </span>
              </div>

              <span className="text-[10px] text-slate-500 font-mono">賽季天梯推薦 • 配都尉專屬玩法</span>
            </div>

            {/* Row details */}
            <div className="p-6 space-y-6">
              {/* Commanders List Table */}
              <div className="overflow-x-auto" id={`table-commanders-${team.id}`}>
                <table className="w-full min-w-[700px] text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-[10px] text-slate-500 uppercase tracking-wider font-mono">
                      <th className="pb-3 pl-2">武將名</th>
                      <th className="pb-3">培養/加點</th>
                      <th className="pb-3">第二戰法</th>
                      <th className="pb-3">第三戰法</th>
                      <th className="pb-3">兵書/特技係</th>
                      <th className="pb-3 pr-2">信符或特技裝</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-900 text-sm">
                    {team.commanders.map((comm, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/20 transition-all">
                        <td className="py-4 pl-2">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <span className="font-semibold text-slate-100">{comm.name}</span>
                            {comm.teaching && (
                              <span className="text-[10px] bg-sky-500/10 text-sky-400 px-1.5 py-0.5 rounded font-medium border border-sky-500/20">
                                {comm.teaching}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-4 font-mono text-xs text-slate-300">{comm.points}</td>
                        <td className="py-4 text-emerald-400 font-medium">{comm.tactic2}</td>
                        <td className="py-4 text-emerald-400 font-medium">{comm.tactic3}</td>
                        <td className="py-4 text-xs font-mono text-slate-300">{comm.militaryBook}</td>
                        <td className="py-4 text-xs text-amber-300 pr-2">{comm.equipment}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* General Description Box */}
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-850 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1 font-mono">團隊戰術分析 & 運作邏輯：</h5>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {team.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {filteredTeams.length === 0 && (
          <div className="text-center py-10 bg-slate-900/10 border border-slate-800 rounded-2xl">
            <p className="text-slate-400">當前篩選條件下，暫無推薦天梯隊伍搭配。</p>
          </div>
        )}
      </div>
    </div>
  );
}
