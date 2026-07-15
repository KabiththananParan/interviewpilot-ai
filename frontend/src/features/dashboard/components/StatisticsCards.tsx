import React from 'react';
import { FileText, BarChart2, Mic, Map } from 'lucide-react';
import type { StatisticItem } from '../types';

const stats: StatisticItem[] = [
  { label: 'ATS Score', value: '92%', badgeText: '+4% increase', type: 'blue' },
  { label: 'Match Score', value: '87%', badgeText: 'Strong Fit', type: 'green' },
  { label: 'Interview Score', value: '84%', badgeText: 'Ready', type: 'purple' },
  { label: 'Roadmap Progress', value: '3/8 Weeks', badgeText: 'On Track', type: 'orange' },
];

export default function StatisticsCards() {
  const getStyles = (type: string) => {
    switch(type) {
      case 'blue': return { bg: 'bg-[#adc6ff]/10', text: 'text-[#adc6ff]', glow: 'hover:shadow-[0_0_30px_-5px_rgba(77,142,255,0.2)]' };
      case 'green': return { bg: 'bg-[#4ae176]/10', text: 'text-[#4ae176]', glow: 'hover:shadow-[0_0_30px_-5px_rgba(74,225,118,0.2)]' };
      case 'purple': return { bg: 'bg-[#d0bcff]/10', text: 'text-[#d0bcff]', glow: 'hover:shadow-[0_0_30px_-5px_rgba(173,198,255,0.2)]' };
      default: return { bg: 'bg-[#ffb4ab]/10', text: 'text-[#ffb4ab]', glow: 'hover:shadow-[0_0_30px_-5px_rgba(255,180,171,0.2)]' };
    }
  };

  const getIcon = (type: string) => {
    switch(type) {
      case 'blue': return <FileText className="w-5 h-5" />;
      case 'green': return <BarChart2 className="w-5 h-5" />;
      case 'purple': return <Mic className="w-5 h-5" />;
      default: return <Map className="w-5 h-5" />;
    }
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((item, idx) => {
        const styles = getStyles(item.type);
        return (
          <div 
            key={idx} 
            className={`bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border border-white/10 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:border-white/25 hover:shadow-2xl ${styles.glow}`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2 rounded-lg ${styles.bg} ${styles.text}`}>
                {getIcon(item.type)}
              </div>
              <span className={`${styles.text} text-[12px] font-mono tracking-wider font-medium`}>
                {item.badgeText}
              </span>
            </div>
            <p className="text-[#c2c6d6] text-sm">{item.label}</p>
            <h3 className="text-3xl font-bold tracking-tight text-[#dae2fd] mt-1">
              {item.value.includes('Weeks') ? (
                <>
                  3/8 <span className="text-base font-normal text-[#c2c6d6]">Weeks</span>
                </>
              ) : item.value}
            </h3>
          </div>
        );
      })}
    </section>
  );
}