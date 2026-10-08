import ProductDetails from './product-details';
import ProductFamily from './product-family';
import { ProductComparison, EverydayMoments, PackagingStory, Traceability, FrequentlyAsked } from './brand-content';
import { SiteHeader, SiteFooter, PageMotion } from './site-chrome';

export function Packshot({kind, className = ''}: {kind: 'whole' | 'skim'; className?: string}) {
  return <img className={`packshot ${className}`} src={`/images/${kind}.png`} alt={kind === 'whole' ? '渥康全脂牛乳粉蓝色包装' : '渥康脱脂牛乳粉绿色包装'} width="206" height="239" />;
}

export default function Home() {
 return <>
  <a className="skip-link" href="#main">跳至主要内容</a><SiteHeader/><PageMotion/>
  <main id="main" tabIndex={-1}>
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy"><p className="eyebrow">WDOM / NATURALLY, EVERY DAY.</p><h1 id="hero-title">来自自然。<br/><span>融入日常。</span></h1><p className="hero-subtitle">从新西兰的一杯牛乳开始，<br/>把自然的好，带进每一天。</p><div className="actions"><a className="button blue" href="#products">找到你的那一杯</a><a className="text-link" href="#origin">认识渥康</a></div><div className="hero-copy-bottom"><span>NEW ZEALAND</span><span>好营养，有更多可能。</span></div></div>
      <div className="hero-visual"><img className="hero-landscape" src="/images/pasture.webp" width="1536" height="1024" alt="连绵的绿色牧场与远山，自然意境示意" fetchPriority="high"/><div className="hero-image-label"><span>从自然出发</span><span>01 / OUR ORIGIN</span></div><span className="hero-image-caption">自然意境示意图</span><div className="hero-product"><div className="hero-packshots"><Packshot kind="whole"/><Packshot kind="skim"/></div><div className="hero-product-note"><span>你的每日牛乳</span><span>全脂 / 脱脂 · 1kg</span></div></div></div>
    </section>
    <div className="brand-ribbon" aria-label="品牌理念"><span>源于新西兰</span><span className="ribbon-word">NATURALLY GOOD.</span><span>融入每一天</span></div>
    <section className="products-section section-shell" id="products"><div className="section-heading"><div><p className="eyebrow">01 / THE EVERYDAY ESSENTIALS</p><h2>两种口感。<br/><span>一样认真。</span></h2></div><p>浓郁或清爽，<br/>让每一天从喜欢的味道开始。</p></div><div className="product-grid">{(['whole','skim'] as const).map(kind=><article className={`product-card ${kind}`} key={kind}><div className="product-card-top"><p className="eyebrow">{kind==='whole'?'WHOLE MILK':'SKIM MILK'}</p><span className="product-card-index">{kind==='whole'?'01':'02'}</span></div><div className="product-card-title"><h3>渥康{kind==='whole'?'全脂':'脱脂'}牛乳粉</h3><p className="product-tagline">{kind==='whole'?'醇厚原香，享受浓郁。':'清爽轻盈，营养随行。'}</p></div><div className="product-stage"><span className="product-stage-word" aria-hidden="true">{kind==='whole'?'WHOLE':'SKIM'}</span><Packshot kind={kind}/></div><div className="product-stats"><div><strong>{kind==='whole'?'27.2':'33.7'}<small>g</small></strong><span>蛋白质 / 每100g</span></div><div><strong>{kind==='whole'?'900':'1220'}<small>mg</small></strong><span>钙 / 每100g</span></div><div><strong>1<small>kg</small></strong><span>每袋净含量</span></div></div><ProductDetails kind={kind}/></article>)}</div><a className="text-link compare-entry" href="#compare">两款产品，详细对比</a></section>
    <ProductFamily/>
    <section className="origin-section" id="origin" aria-labelledby="origin-title"><img className="pasture-image" src="/images/pasture.webp" alt="绿意连绵的牧场与远山，品牌自然意境示意图" width="1536" height="1024" loading="lazy"/><div className="origin-copy"><p className="eyebrow">03 / FROM NEW ZEALAND</p><h2 id="origin-title">自然的好。<br/>不必复杂。</h2><p>渥康牛乳粉，新西兰原装进口。<br/>将一杯牛乳的醇香，带到你的每一天。</p><a className="origin-link" href="/honors">探索品牌荣誉</a></div><span className="origin-word" aria-hidden="true">NATURALLY.</span><span className="scene-caption">自然意境示意图</span></section>
    <EverydayMoments/>
    <section className="quality-section section-shell" id="quality"><div className="section-heading"><div><p className="eyebrow">05 / THE LITTLE THINGS</p><h2>认真对待，<span>每一杯。</span></h2></div><p>从配料，到包装，再到来源。<br/>细节里，藏着我们的坚持。</p></div><div className="quality-grid"><article><span className="quality-number">01 / INGREDIENTS</span><h3>简单配料</h3><p>全脂牛乳粉：牛乳、大豆磷脂。<br/>脱脂牛乳粉：脱脂牛乳。</p></article><article><span className="quality-number">02 / PACKAGING</span><h3>密封守护</h3><p>自立袋搭配夹链封口，<br/>让每一次取用都更从容。</p></article><article><span className="quality-number">03 / TRACEABILITY</span><h3>源头可查</h3><p>通过产品包装底部的溯源码，<br/>了解对应货源与报关信息。</p></article></div></section>
    <PackagingStory/><ProductComparison/><Traceability/><FrequentlyAsked/>
    <section className="closing-section"><p className="eyebrow">NATURALLY, EVERY DAY.</p><h2>每一天，<br/><span>自然好营养。</span></h2><a className="button light" href="#series">探索渥康产品系列</a><span className="closing-word" aria-hidden="true">WDOM</span></section>
  </main><SiteFooter/>
 </>;
}
