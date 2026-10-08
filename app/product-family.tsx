const planned = [
  { key: 'whey', number: '02', english: 'WHEY PROTEIN', name: '乳清蛋白粉' },
  { key: 'lactoferrin', number: '03', english: 'LACTOFERRIN', name: '乳铁蛋白' },
  { key: 'colostrum', number: '04', english: 'COLOSTRUM', name: '牛初乳粉' },
] as const;

export default function ProductFamily() {
  return <section className="series-section" id="series" aria-labelledby="series-title"><div className="series-inner">
    <div className="series-intro"><div><p className="eyebrow">02 / THE WDOM FAMILY</p><h2 id="series-title">好营养，<br/><span>有更多可能。</span></h2></div><p>从日常牛乳，到更多营养选择。<br/>认识渥康的产品家族。</p></div>
    <div className="series-grid">
      <a href="#products" className="series-tile milk-series" aria-label="了解渥康牛乳粉系列"><div className="series-tile-top"><span className="series-number">01</span><span className="series-status">日常之选</span></div><div className="series-tile-content"><p className="series-en">MILK POWDER</p><h3>牛乳粉</h3><p>全脂与脱脂，两种日常选择。</p></div><div className="series-tile-bottom"><span>了解产品</span><span className="milk-series-colors" aria-hidden="true"><i/><i/></span></div></a>
      {planned.map(item => <article className={`series-tile ${item.key}-series`} key={item.key}><div className="series-tile-top"><span className="series-number">{item.number}</span><span className="series-status">筹备中</span></div><div className="series-tile-content"><p className="series-en">{item.english}</p><h3>{item.name}</h3><p>期待更多营养可能。</p></div><div className="series-tile-bottom"><span>COMING SOON</span><span aria-hidden="true">WDOM</span></div></article>)}
    </div><p className="series-note">筹备中系列的包装、配料与产品信息，将在正式推出时更新。</p>
  </div></section>;
}
