import React, { useState } from 'react';
import { Heart, X } from 'lucide-react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4 font-sans text-stone-900">
      <div className="max-w-lg w-full perspective-1000">
        <div
          className={`relative transition-all duration-1000 preserve-3d cursor-pointer ${isOpen ? 'rotate-y-180' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          style={{ height: '640px' }}
        >
          {/* Card Front - Minimalist Design */}
          <div className="absolute inset-0 backface-hidden bg-white rounded-lg shadow-sm border border-stone-200 flex flex-col items-center justify-center p-12 text-center">
            <div className="space-y-4">
              <div className="text-stone-300 tracking-[0.3em] uppercase text-xs">Message for</div>
              <h1 className="text-4xl font-light text-stone-800 tracking-tight">지은</h1>
              <div className="h-px w-12 bg-stone-200 mx-auto my-6" />
              <Heart className="w-5 h-5 text-stone-200 mx-auto" />
            </div>
            <p className="absolute bottom-12 text-stone-400 text-xs tracking-widest uppercase">Click to read</p>
          </div>

          {/* Card Inside */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-lg shadow-xl border border-stone-100 flex flex-col overflow-hidden">
            <div className="flex-1 p-8 md:p-12 overflow-y-auto custom-scrollbar bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
              <div className="flex justify-between items-baseline mb-8">
                <h2 className="text-xl font-medium text-stone-800">나의 듀오, 지은에게</h2>
                <span className="text-stone-400 text-xs tabular-nums">2026. 03. 26</span>
              </div>
              <div className="space-y-6 text-stone-700 leading-relaxed text-[15px] font-light">
                <p>
                  지은아, 우리가 함께 시간을 보낸 지도 벌써 꽤 흘렀네. 평소에 장난치며 게임하던 순간들이 사실은 나에게 얼마나 큰 의미였는지, 문득 진지하게 전하고 싶어졌어. 세상이라는 복잡한 아레나에서 수많은 사람과 일들이 스쳐 지나가지만, 내 시선은 언제나 너를 향해 있어. 마치 <strong>'최상급 조준경 부착'</strong> 증강을 얻은 것처럼, 멀리 떨어져 있을 때도 네가 어떤 마음일지 가장 먼저 선명하게 보이고, 내 모든 초점이 오직 너에게만 맞춰지는 기분이야.
                </p>
                <p>
                  누군가에게 내 본래의 모습을 보여주는 건 언제나 어려운 일이었어. 하지만 너와 있으면 신기하게도 내 모든 방어 기제가 무력해지더라. 마치 <strong>'취약'</strong> 상태에 걸린 것처럼, 네가 건네는 짧은 인사나 다정한 눈빛에 내 마음의 장벽은 너무나 쉽게 허물어지곤 해. 그런데 그게 전혀 위태롭게 느껴지지 않는 건, 네가 그만큼 단단한 신뢰를 주는 사람이기 때문일 거야.
                </p>
                <p>
                  너와 함께 웃고 대화하는 모든 일상은 나에게 <strong>'보석 건틀릿'</strong>과 같아. 남들에게는 평범하게 흘러갈 수 있는 시간들이 너라는 필터를 거치면 나에게는 하나하나 치명타 같은 감동으로 남거든. 브라움이 방패를 들어 아군을 보호하듯, 혹은 유미가 곁에 머물며 힘을 보태듯, 너는 내 삶의 가장 든든한 동료이자 유일한 안식처가 되어주었어.
                </p>
                <p>
                  가끔은 세상이 요구하는 복잡한 역할들에 지치고 길을 잃은 것 같을 때가 있어. 하지만 그럴 때마다 너를 만나면 다시 <strong>'기본으로 돌아가기'</strong>를 선택한 것처럼, 삶에서 가장 중요하고 순수한 감정들만 내 곁에 남게 돼. 화려한 꾸밈 없이도 나를 온전한 나로서 편안하게 존재할 수 있게 해주는 네가 있어서 참 다행이야.
                </p>
                <p>
                  지은아, 화려한 승리나 보상보다 중요한 건 우리가 같은 방향을 보고 나란히 걷고 있다는 사실 그 자체야. 2026년의 오늘뿐만 아니라 앞으로 다가올 수많은 라운드에서도 나는 기꺼이 너의 곁을 지키는 파트너이고 싶어. 나의 부족함까지 안아줘서 고마워.
                </p>
              </div>
              <div className="mt-12 pt-8 border-t border-stone-100 text-right">
                <p className="text-stone-400 text-xs mb-1">진심을 담아,</p>
                <p className="text-stone-800 font-medium">당신의 영원한 듀오로부터</p>
              </div>
            </div>
            <button
              className="h-12 bg-stone-50 flex items-center justify-center text-stone-400 hover:bg-stone-100 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            >
              <X className="w-4 h-4 mr-2" /> 닫기
            </button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e5e5;
          border-radius: 10px;
        }
      `}} />
    </div>
  );
};

export default App;
