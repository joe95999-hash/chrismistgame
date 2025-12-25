import React from 'react';
import { IconBall, IconHat, IconTrophy, IconCourt } from './Icons';
import { THEME } from '../constants';

interface ContentAreaProps {
  currentTab: number;
}

const MemeCard: React.FC<{ src: string; caption: string }> = ({ src, caption }) => (
  <div className="mt-8 mx-auto max-w-[90%] sm:max-w-[80%] transform hover:scale-[1.02] transition-transform duration-300">
    <div className="bg-white p-3 rounded-lg shadow-lg border-2 border-dashed rotate-1 hover:rotate-0 transition-all" style={{ borderColor: THEME.red }}>
      <div className="bg-gray-100 rounded overflow-hidden relative min-h-[150px] flex items-center justify-center">
        <img src={src} alt="Meme" className="w-full h-auto object-cover max-h-[250px]" loading="lazy" />
      </div>
      <p className="text-center mt-3 text-sm font-bold text-gray-700 bg-gray-50 p-2 rounded">
        {caption}
      </p>
    </div>
  </div>
);

const ContentArea: React.FC<ContentAreaProps> = ({ currentTab }) => {
  // Common styles
  const h2Style = "text-[#165B33] border-l-[5px] border-[#D42426] pl-[10px] mt-0 text-[1.4rem] flex items-center gap-[10px] mb-4";
  const listStyle = "list-disc pl-[20px] leading-[1.6]";
  const listItemStyle = "mb-[10px]";
  const illustrationStyle = "text-center my-[15px] p-[10px] rounded-[10px] bg-[rgba(22,91,51,0.05)]";
  const noteStyle = "text-[0.9rem] text-[#666] italic bg-[#f0f0f0] p-[10px] rounded-[8px] border-l-[3px] border-[#999] mt-4";
  const highlightStyle = "bg-[rgba(255,215,0,0.2)] px-[5px] py-[2px] rounded-[4px] font-bold text-[#D42426]";

  const renderContent = () => {
    switch (currentTab) {
      case 0:
        return (
          <div className="animate-fade-in">
            <h2 className={h2Style}>
              <IconBall /> 一、隊伍編制
            </h2>
            <div className={illustrationStyle}>
              <div className="flex justify-center gap-[20px] text-[3rem]">
                <span>🟥</span><span>🟩</span><span>🟦</span>
              </div>
              <p className="mt-[5px] text-[0.8rem] text-[#555]">北隊 / 中隊 / 南隊</p>
            </div>
            <ul className={listStyle}>
              <li className={listItemStyle}>本次活動分為三隊：<strong>北隊／中隊／南隊</strong>。</li>
              <li className={listItemStyle}>分隊依「家鄉（籍貫/主要成長地）」判定。</li>
              <li className={listItemStyle}>若某隊人數不足或分配失衡，由老師進行調整，以維持比賽公平與可執行性。</li>
            </ul>
            <MemeCard 
              src="https://media.giphy.com/media/l36kU80xPf0ojG0Erg/giphy.gif" 
              caption="北中南三隊見面時：『欸你也是？』" 
            />
          </div>
        );
      case 1:
        return (
          <div className="animate-fade-in">
            <h2 className={h2Style}>
              <IconCourt /> 二、賽制與場次
            </h2>
            <ul className={listStyle}>
              <li className={listItemStyle}>本次共計 <strong>6 場</strong>。</li>
              <li className={listItemStyle}>每隊共出賽 <strong>4 場</strong>。</li>
              <li className={listItemStyle}>任兩隊彼此對戰 2 次（同一對手打兩次）。</li>
            </ul>
            <div className={noteStyle}>
              場次安排與先攻/先發等細節，以當日管理者與紀錄台公告為準。
            </div>
            <MemeCard 
              src="https://media.giphy.com/media/cpUAhGb2Xk8npqw572/giphy.gif" 
              caption="當你發現又要打同一個對手... 『Ah Shit, Here We Go Again.』" 
            />
          </div>
        );
      case 2:
        return (
          <div className="animate-fade-in">
            <h2 className={h2Style}>
              <IconBall /> 三、得分規格
            </h2>
            <p className="mb-4">本次採用「<strong>聖誕大戰計分制</strong>」，與一般籃球規則不同，請注意！</p>
            
            <div className="flex justify-around my-[20px]">
              <div className="text-center w-[60%] p-[10px] border-[2px] border-[#666] bg-[#eee] rounded-[10px]">
                <span className="font-bold block mb-[5px]">特殊計分</span>
                <div className="text-left pl-[10px] space-y-2">
                  <p>三分球：<b className="text-red-600">2分</b></p>
                  <p>兩分球：<b className="text-red-600">1分</b></p>
                  <p>罰球：僅1次機會 <br/><span className="text-sm text-gray-600">(進算1分)</span></p>
                </div>
              </div>
            </div>

            <div className={noteStyle}>
              ※若觸發「聖誕帽加成」（見第五條），則依加成規則改回一般籃球得分與兩罰。
            </div>
            <MemeCard 
              src="https://media.giphy.com/media/APqEbxBsVlkWSuFpth/giphy.gif" 
              caption="紀錄台：『我現在看起來像愛因斯坦嗎？』" 
            />
          </div>
        );
      case 3:
        return (
          <div className="animate-fade-in">
            <h2 className={h2Style}>
              <IconHat /> 四、聖誕帽配置
            </h2>
            <p className="mb-2">帽子分配採<strong>回合制</strong>：</p>
            
            <h3 className="font-bold mt-4 mb-2 text-lg">(A) 第一輪：固定一頂／隊</h3>
            <ul className={listStyle}>
              <li className={listItemStyle}>第一輪開始時，每隊各有 1 頂聖誕帽。</li>
              <li className={listItemStyle}>由抽籤決定該隊本輪由誰配戴。</li>
            </ul>

            <hr className="border-dashed border-[#ccc] my-4" />

            <h3 className="font-bold mt-4 mb-2 text-lg">(B) 第二輪起：依戰績分配</h3>
            <ul className={listStyle}>
              <li className={listItemStyle}><strong>戰績最差：</strong>3 頂帽子 (抽籤配戴)</li>
              <li className={listItemStyle}><strong>戰績中間：</strong>2 頂帽子 (抽籤配戴)</li>
              <li className={listItemStyle}><strong>戰績第一：</strong>維持 1 頂帽子</li>
            </ul>

            <h3 className="font-bold mt-4 mb-2 text-lg">(C) 戰績平手處理</h3>
            <ul className={listStyle}>
              <li className={listItemStyle}>戰績持平：以「上一場勝負」決定，敗者帽子多。</li>
              <li className={listItemStyle}>完全平手：兩隊各分配 2 頂聖誕帽（公平分配）。</li>
            </ul>
            <MemeCard 
              src="https://media.giphy.com/media/y8Mz1yj13s3kI/giphy.gif" 
              caption="戰績差的隊伍：『帽子！帽子！大家都有帽子！』" 
            />
          </div>
        );
      case 4:
        return (
          <div className="animate-fade-in">
            <h2 className={h2Style}>
              <IconHat /> 五、聖誕帽加成
            </h2>
            <div className={illustrationStyle} style={{ backgroundColor: '#FFF0F0', borderColor: THEME.red, borderWidth: '1px', borderStyle: 'solid' }}>
              <strong>🎅 聖誕老人效果 (幸運Buff)</strong>
            </div>
            
            <h3 className="font-bold mt-4 mb-2 text-lg">(A) 加成內容</h3>
            <p className="mb-2">配戴者視為「聖誕老人」，得分<strong>改採一般籃球規則</strong>：</p>
            <ul className={listStyle}>
              <li className={listItemStyle}>三分球：<span className={highlightStyle}>3 分</span></li>
              <li className={listItemStyle}>兩分球：<span className={highlightStyle}>2 分</span></li>
              <li className={listItemStyle}>罰球：改為兩球（2 罰制度）</li>
            </ul>
            <div className={noteStyle}>※未配戴者仍依本賽事特殊計分制（3分算2分、2分算1分...）。</div>

            <h3 className="font-bold mt-6 mb-2 text-lg">(B) 佩戴義務 (違規規則)</h3>
            <p className="mb-2"><strong>「聖誕老人不能沒有帽子」</strong></p>
            <ul className={listStyle}>
              <li className={listItemStyle}>比賽中必須全程戴好。</li>
              <li className={listItemStyle}>若掉落或取下，視為<strong>違規</strong>。</li>
              <li className={listItemStyle}><strong>處置：</strong>立即暫停要求恢復。若刻意或多次，追加球權判給對方或依裁定處理。</li>
            </ul>
            <p className="text-[0.9rem] text-[#D42426] text-center mt-4 italic font-medium">
                "帽子掉了可以立刻撿起戴回，但不得藉此拖延或影響攻防。"
            </p>
            <MemeCard 
              src="https://media.giphy.com/media/l3q2JCu9lep6dAmyY/giphy.gif" 
              caption="戴上帽子後的我：『簡單啦，投就對了。』" 
            />
          </div>
        );
      case 5:
        return (
          <div className="animate-fade-in">
            <h2 className={h2Style}>
              <IconTrophy /> 六、結算與最終勝負
            </h2>
            <ul className={listStyle}>
              <li className={listItemStyle}>以各隊總勝場（或公告的戰績計算方式）決定名次。</li>
              <li className={listItemStyle}>若三隊戰績完全一致：進行 <strong>罰球大賽</strong> 決定最終勝負。</li>
            </ul>
            <div className={noteStyle}>
              罰球大賽規則細節由當日管理者公告，原則上以「可快速決勝」為準。
            </div>
            
            <div className="text-center mt-[30px]">
              <button 
                className="py-[10px] px-[20px] bg-yellow-400 border-none rounded-[5px] font-bold cursor-pointer hover:bg-yellow-300 transform hover:scale-105 transition-all text-gray-800 shadow-md"
                onClick={() => alert('🎄 Merry Christmas & Happy Basketball! 🏀')}
              >
                準備好開戰了嗎？
              </button>
            </div>
            <MemeCard 
              src="https://media.giphy.com/media/32mC2kXYWCsg0/giphy.gif" 
              caption="平手罰球時的全場氣氛..." 
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-[20px] min-h-[400px] relative">
       {renderContent()}
    </div>
  );
};

export default ContentArea;