/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Commandant {
  id: string;
  name: string;
  starRating: number;
  skillType: '主動' | '指揮' | '被動' | '突擊';
  skillName: string;
  skillRate: string;
  skillDescription: string;
  specialEquip: string;
  specialFeature: string;
  specialFeatureDesc: string;
  equipBonus: string;
  analysis: string;
  recommendedTeams: string[];
  recommendedClass: string;
  avatarColor: string; // TailWind color representative of faction/vibes
}

export interface Talent {
  name: string;
  effect: string;
  cost: number;
}

export interface TeamBuild {
  id: string;
  faction: '魏' | '蜀' | '吳' | '群' | '混合';
  tier: 'T0' | 'T0.5' | 'T1';
  name: string;
  description: string;
  commanders: {
    name: string;
    teaching?: string; // e.g. "拜師郭嘉"
    points: string; // e.g. "智力"
    tactic2: string;
    tactic3: string;
    militaryBook: string;
    equipment: string;
  }[];
}

export interface CivilOfficial {
  name: string;
  title: string;
  unlockInfo: string;
  avatarColor: string;
  proposals: {
    name: string;
    priority: string;
    effect: string;
    timeline: string;
    tip: string;
  }[];
}

export interface WeatherSpell {
  name: string;
  type: string;
  effect: string;
  duration: string;
  strategy: string;
  icon: string;
}
