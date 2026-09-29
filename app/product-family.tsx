import { ChevronRight } from 'lucide-react';

const planned = [
  { key: 'whey', number: '02', english: 'WHEY PROTEIN', name: '乳清蛋白粉', color: '赤陶橙' },
  { key: 'lactoferrin', number: '03', english: 'LACTOFERRIN', name: '乳铁蛋白', color: '莓紫' },
  { key: 'colostrum', number: '04', english: 'COLOSTRUM', name: '牛初乳粉', color: '麦金' },
] as const;

export default function ProductFamily() {
  return <section className="series-section section-shell" id="series" aria-labelledby="series-title">
    <div className="series-intro"><div><p className="eyebrow">THE WDOM FAMILY</p><h2 id="series-title">一个渥康，<br/><span>多种营养选择。</span></h2></div><p>以黑色承载品牌，以专属颜色识别系列。当前可了解牛乳粉产品，更多系列正在筹备。</p></div>
    <div className="series-grid">
      <a href="#products" className="series-tile milk-series" aria-label="了解渥康牛乳粉系列">
        <div className="series-tile-top"><span className="series-number">01 / 已有产品</span><span className="series-brand">WDOM</span></div>
        <div className="series-tile-content"><p className="series-en">MILK POWDER</p><h3>牛乳粉</h3><p>全脂与脱脂，两种日常选择。</p><span className="series-link">了解产品 <ChevronRight size={18}/></span></div>
        <div className="milk-series-bars" aria-hidden="true"><span>全脂 · 蓝</span><span>脱脂 · 绿</span></div>
      </a>
      {planned.map(item => <article className={`series-tile ${item.key}-series`} key={item.key}>
        <div className="series-tile-top"><span className="series-number">{item.number} / 产品筹备中</span><span className="series-brand">WDOM</span></div>
        <div className="series-tile-content"><p className="series-en">{item.english}</p><h3>{item.name}</h3><p>产品信息将在正式推出时更新。</p></div>
        <div className="series-color"><span>系列识别色</span><strong>{item.color}</strong></div>
      </article>)}
    </div>
    <p className="series-note">系列颜色用于网站视觉识别，未来实际包装及产品信息以正式发布为准。</p>
  </section>;
}
