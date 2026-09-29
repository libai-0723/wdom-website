import { ArrowUpRight, ChevronRight } from 'lucide-react';
import ProductDetails from './product-details';
import ProductFamily from './product-family';
import { ProductComparison, EverydayMoments, PackagingStory, Traceability, FrequentlyAsked } from './brand-content';

export function Packshot({kind, className = ''}: {kind: 'whole' | 'skim'; className?: string}) {
  return <img className={`packshot ${className}`} src={`/images/${kind}.png`} alt={kind === 'whole' ? '渥康全脂牛乳粉蓝色包装' : '渥康脱脂牛乳粉绿色包装'} width="206" height="239" />;
}

export default function Home() {
 return <>
  <a className="skip-link" href="#main">跳至主要内容</a>
  <header className="site-header"><nav className="nav-inner" aria-label="主导航"><a className="brand" href="#main" aria-label="渥康首页"><img src="/images/brand.png" alt="WDOM 渥康" width="105" height="41"/></a><div className="nav-links"><a href="#series">产品系列</a><a href="#products">牛乳粉</a><a href="#origin">品牌与产地</a><a href="/honors">奖项与荣誉</a><a href="#faq">常见问题</a></div><a className="nav-cta" href="#series">探索系列 <ArrowUpRight size={14}/></a></nav></header>
  <main id="main">
   <section className="hero" aria-labelledby="hero-title"><div className="hero-copy"><p className="eyebrow">WDOM 渥康 · 自然好营养</p><h1 id="hero-title">好营养，有更多可能。<br/><span>每一天，都有适合的选择。</span></h1><p className="hero-subtitle">从一杯牛乳开始，认识渥康不断延展的营养产品家族。</p><div className="actions"><a className="button blue" href="#series">探索产品系列</a><a className="text-link" href="#products">查看牛乳粉 <ChevronRight size={18}/></a></div></div><div className="hero-product"><Packshot kind="whole"/><Packshot kind="skim"/></div><div className="hero-bottom"><span>WDOM</span><span className="hero-line"/><span>每一天，自然好营养</span></div></section>
   <ProductFamily/>
   <section className="products-section section-shell" id="products"><div className="section-heading"><div><p className="eyebrow">01 / 牛乳粉系列</p><h2>两种选择。<br/><span>都是你的好日常。</span></h2></div><p>醇厚，或清爽。<br/>找到合你口味的那一杯。</p></div><div className="product-grid">{(['whole','skim'] as const).map(kind=><article className={`product-card ${kind}`} key={kind}><p className="eyebrow">{kind==='whole'?'醇厚原香':'清爽轻盈'}</p><h3>渥康{kind==='whole'?'全脂':'脱脂'}牛乳粉</h3><p className="product-tagline">{kind==='whole'?'保留醇香，享受浓郁。':'口感清淡，营养随行。'}</p><Packshot kind={kind}/><div className="product-stats"><div><strong>{kind==='whole'?'27.2':'33.7'}<small>g</small></strong><span>蛋白质 / 每100g</span></div><div><strong>{kind==='whole'?'900':'1220'}<small>mg</small></strong><span>钙 / 每100g</span></div><div><strong>1<small>kg</small></strong><span>每袋净含量</span></div></div><ProductDetails kind={kind}/></article>)}</div><a className="text-link compare-entry" href="#compare">两款产品，详细对比 <ChevronRight size={18}/></a></section>
   <ProductComparison/>
   <section className="origin-section section-shell" id="origin"><img className="pasture-image" src="/images/pasture.png" alt="绿意连绵的牧场与远山，品牌自然意境示意图" width="1536" height="1024" loading="lazy"/><div className="origin-copy"><p className="eyebrow">FROM NEW ZEALAND</p><h2>从自然出发。<br/>让好营养，回归日常。</h2><p>渥康牛乳粉，新西兰原装进口。<br/>将一杯牛乳的醇香，带到你的每一天。</p></div><span className="scene-caption">自然意境示意图</span></section>
   <EverydayMoments/>
   <section className="quality-section section-shell" id="quality"><div className="section-heading"><h2>认真对待，<span>每一杯。</span></h2></div><div className="quality-grid"><article><span className="quality-number">01</span><h3>简单配料</h3><p>全脂牛乳粉：牛乳、大豆磷脂。<br/>脱脂牛乳粉：脱脂牛乳。</p></article><article><span className="quality-number">02</span><h3>密封守护</h3><p>自立袋搭配夹链封口，<br/>让每一次取用都更从容。</p></article><article><span className="quality-number">03</span><h3>源头可查</h3><p>通过产品包装底部的溯源码，<br/>了解对应货源与报关信息。</p></article></div></section>
   <PackagingStory/>
   <Traceability/>
   <FrequentlyAsked/>
   <section className="closing-section"><p className="eyebrow">WDOM 渥康</p><h2>每一天，<span>自然好营养。</span></h2><p>从你喜欢的那一杯开始。</p><a className="button blue" href="#series">回到产品系列 <ChevronRight size={18}/></a></section>
  </main><footer className="site-footer"><nav className="footer-navigation" aria-label="页脚导航"><div><h3>探索渥康</h3><a href="#series">产品系列</a><a href="#products">牛乳粉</a><a href="#compare">产品对比</a></div><div><h3>关于品质</h3><a href="#origin">品牌与产地</a><a href="/honors">奖项与荣誉</a><a href="#quality">品质坚持</a><a href="#traceability">了解溯源</a></div><div><h3>选购与使用</h3><a href="#faq">常见问题</a><p>具体商品信息与售后服务，<br/>请咨询原购买店铺。</p></div></nav><div className="footer-notes"><p>目前牛乳粉产品信息依据渥康2026年8月产品资料，营养数值均按每100g奶粉计。配料、营养成分及食用方法以实际购买产品包装为准。</p><p>产品含乳成分，全脂产品含大豆成分。乳糖不耐受或对相关成分过敏者，请留意包装上的适用说明。</p></div><div className="footer-bottom"><a className="brand" href="#main"><img src="/images/brand.png" alt="WDOM 渥康" width="105" height="41"/></a><p>每一天，自然好营养。</p><a href="#main">返回顶部 ↑</a></div></footer>
 </>;
}
