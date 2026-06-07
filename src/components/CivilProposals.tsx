/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CIVIL_OFFICIALS } from '../data';
import { User, Award, Calendar, BadgeAlert, Coins, HelpCircle } from 'lucide-react';

export default function CivilProposals() {
  const [selectedOfficialName, setSelectedOfficialName] = useState<string>("陳群");

  const currentOfficial = CIVIL_OFFICIALS.find(o => o.name === selectedOfficialName) || CIVIL_OFFICIALS[0];

  return (
    <div className="space-y-6" id="civil-proposals-panel">
      {/* Introduction text */}
      <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 flex flex-col md:flex-row gap-4 items-center justify-between shadow-xl" id="civil-intro">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-slate-100">政廳文臣提案系統</h3>
          <p className="text-xs text-slate-400">
            全賽季共有三位內政文臣隨時待命。開服發育與後期大督查大會戰各具神效，可花費 50 金銖重置採納方針。
          </p>
        </div>
        <div className="text-xs font-mono text-slate-500 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-805">
          解鎖對應期：第 3 天 / 第 7 天 / 第 13 天
        </div>
      </div>

      {/* Main Grid: Left Selector List, Right Detailed Proposal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="civil-officials-grid">
        {/* Left selector */}
        <div className="lg:col-span-4 space-y-3" id="civil-officials-list">
          {CIVIL_OFFICIALS.map((official) => {
            const isSelected = selectedOfficialName === official.name;
            return (
              <div
                key={official.name}
                id={`official-item-${official.name}`}
                onClick={() => setSelectedOfficialName(official.name)}
                className={`group p-5 rounded-xl border cursor-pointer transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? 'bg-slate-900/80 border-amber-500 shadow-md shadow-slate-950'
                    : 'bg-slate-950 border-slate-850 hover:bg-slate-900/40 hover:border-slate-800'
                }`}
              >
                <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${official.avatarColor}`} />
                
                <div className="pl-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold text-slate-50">{official.name}</h4>
                    <span className="text-xs text-amber-400 font-medium bg-amber-950/20 px-2 py-0.5 rounded border border-amber-900/30">
                      {official.name === '陳群' ? '大師' : official.name === '程昱' ? '改革' : '國戰'}
                    </span>
                  </div>
                  
                  <p className="text-xs font-mono text-slate-400">{official.title}</p>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                    {official.unlockInfo}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Details */}
        <div className="lg:col-span-8 bg-slate-900/30 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-6" id="civil-official-detail">
          {/* Adviser Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${currentOfficial.avatarColor} flex items-center justify-center text-xl font-bold text-white shadow`}>
                {currentOfficial.name}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100">{currentOfficial.name}提案詳解</h3>
                <p className="text-xs text-slate-400 mt-0.5">{currentOfficial.title}</p>
              </div>
            </div>

            <span className="text-xs font-mono text-slate-500">
              {currentOfficial.name === '陳群' ? '【開荒期解鎖】' : currentOfficial.name === '程昱' ? '【年中發展解鎖】' : '【後會戰階段解鎖】'}
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/40 p-3 rounded-lg border border-slate-850">
            <strong className="text-amber-400">解鎖定位：</strong>{currentOfficial.unlockInfo}
          </p>

          {/* Proposals Stack */}
          <div className="space-y-4" id="official-proposals-stack">
            <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold font-mono">採納提案與成效：</h4>
            
            {currentOfficial.proposals.map((prop, index) => (
              <div
                key={index}
                id={`proposal-item-${prop.name}`}
                className="bg-slate-950/50 rounded-xl p-5 border border-slate-800/80 hover:border-slate-700/80 transition space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-900 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs font-mono font-bold">
                      {index + 1}
                    </span>
                    <h5 className="font-bold text-slate-200 text-base">{prop.name}</h5>
                  </div>
                  
                  <span className="text-xs font-bold text-amber-500 bg-amber-950/30 px-2.5 py-0.5 rounded border border-amber-900/20">
                    優先順序：{prop.priority}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mt-3">
                  <div className="space-y-1 bg-slate-900/30 p-3 rounded border border-slate-850">
                    <span className="text-slate-500 font-mono block">提案效果：</span>
                    <p className="text-slate-250 font-medium leading-relaxed">
                      {prop.effect}
                    </p>
                  </div>

                  <div className="space-y-1 bg-slate-900/30 p-3 rounded border border-slate-850">
                    <span className="text-slate-500 font-mono block">採納時機路徑：</span>
                    <p className="text-sky-305 font-medium">
                      {prop.timeline}
                    </p>
                  </div>
                </div>

                <div className="bg-amber-950/10 border border-amber-900/15 p-3 rounded-lg flex items-start gap-2 text-xs">
                  <BadgeAlert className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-amber-200 leading-relaxed">
                    <strong className="text-amber-400 font-semibold font-mono">專家提示：</strong>{prop.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
