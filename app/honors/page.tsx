import type { Metadata } from 'next';
import { ArrowUpRight, ChevronLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: '奖项与荣誉 · 渥康 WDOM',
  description: '了解渥康品牌资料所列的 2017 至 2021 年国际食品与饮品奖项、金奖及提名记录。',
};

type Recognition = { event: string; place: string; gold?: string[]; nominated?: string[] };
const years: { year: string; items: Recognition[] }[] = [
  { year: '2021', items: [{ event: '世界乳品创新奖', place: '英国', gold: ['最佳乳基零食奖', '最佳无肠道负担乳品奖'], nominated: ['最佳乳制品饮品奖'] }] },
  { year: '2019', items: [{ event: '新西兰国家食品奖', place: '新西兰 · 奥克兰', gold: ['最佳无酒精饮品奖'] }] },
  { year: '2018', items: [
    { event: '世界乳品创新奖', place: '波兰 · 华沙', nominated: ['最佳乳品奖', '最佳无添加饮品奖'] },
    { event: '亚洲食品创新奖', place: '新加坡', nominated: ['最佳儿童食品奖', '最佳无添加食品奖', '最佳包装设计奖'] },
    { event: '国际饮料创新奖', place: '日本 · 东京', nominated: ['最佳品牌奖', '最佳饮品概念奖', '最佳无添加饮品奖'] },
    { event: '世界饮品创新奖', place: '德国 · 纽伦堡', nominated: ['最佳乳品奖', '最佳儿童饮品奖', '最佳包装设计奖'] },
    { event: '新西兰国家食品奖', place: '新西兰 · 奥克兰', nominated: ['最佳无酒精饮品奖'] },
  ] },
  { year: '2017', items: [{ event: '世界饮品创新奖', place: '德国 · 慕尼黑', gold: ['最佳儿童饮品奖'], nominated: ['最佳品牌奖', '最佳商业奖'] }] },
];

export default function HonorsPage() {
  return <>
    <a className="skip-link" href="#main">跳至主要内容</a>
    <header className="site-header"><nav className="nav-inner" aria-label="主导航">
      <a className="brand" href="/" aria-label="渥康首页"><img src="/images/brand.png" alt="WDOM 渥康" width="105" height="41" /></a>
      <div className="nav-links"><a href="/#series">产品系列</a><a href="/#products">牛乳粉</a><a href="/#origin">品牌与产地</a><a href="/honors" aria-current="page">奖项与荣誉</a><a href="/#faq">常见问题</a></div>
      <a className="nav-cta" href="/#series">探索系列 <ArrowUpRight size={14}/></a>
    </nav></header>
    <main id="main" className="honors-page">
      <section className="honors-hero"><div className="honors-hero-inner"><p className="eyebrow">WDOM / RECOGNITION</p><h1>奖项与荣誉<span>。</span></h1><p className="honors-lead">一份关于探索与认可的记录。以下按品牌资料列示的年份、奖项类别与结果整理。</p><a href="#honors-timeline" className="honors-jump">查看荣誉记录 <span aria-hidden="true">↓</span></a></div><p className="honors-hero-index">2017 — 2021</p></section>
      <section className="honors-list section-shell" id="honors-timeline" aria-labelledby="honors-title"><div className="honors-list-intro"><p className="eyebrow">AWARDS & NOMINATIONS</p><h2 id="honors-title">历年记录</h2><p>金奖与提名分别标示，便于查阅。</p></div>
        <div className="honors-timeline">{years.map(({year, items}) => <section className="honors-year" key={year} aria-labelledby={`year-${year}`}><h3 id={`year-${year}`}>{year}</h3><div className="honors-year-items">{items.map(item => <article className="honors-record" key={`${year}-${item.event}`}><div className="honors-event"><h4>{item.event}</h4><p>{item.place}</p></div><div className="honors-results">{item.gold?.map(name => <div className="honors-result" key={name}><span>{name}</span><strong className="honors-result-gold">金奖</strong></div>)}{item.nominated?.map(name => <div className="honors-result" key={name}><span>{name}</span><strong className="honors-result-nominated">提名</strong></div>)}</div></article>)}</div></section>)}</div>
        <div className="honors-source"><strong>资料说明</strong><p>以上信息依据《渥康品牌简介》“品牌荣誉”页（第 15 页）整理。该资料未标明每项荣誉对应的具体商品，本页不将其归属于网站展示的牛乳粉。奖项名称及结果以颁奖机构的正式记录和证书为准。</p></div>
      </section>
      <section className="honors-return"><p>继续认识渥康</p><a href="/" className="button blue"><ChevronLeft size={18}/> 返回首页</a></section>
    </main>
    <footer className="site-footer"><div className="footer-bottom"><a className="brand" href="/"><img src="/images/brand.png" alt="WDOM 渥康" width="105" height="41" /></a><p>每一天，自然好营养。</p><a href="#main">返回顶部 ↑</a></div></footer>
  </>;
}
