'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';

const navigation = [
  { id: 'series', label: '产品系列', en: 'THE COLLECTION' },
  { id: 'products', label: '牛乳粉', en: 'EVERYDAY MILK' },
  { id: 'origin', label: '品牌与产地', en: 'OUR ORIGIN' },
  { id: 'honors', label: '奖项与荣誉', en: 'RECOGNITION' },
  { id: 'faq', label: '常见问题', en: 'GOOD TO KNOW' },
];

export function SiteHeader({ honors = false }: { honors?: boolean }) {
  const [active, setActive] = useState(honors ? 'honors' : '');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const href = (id: string) => id === 'honors' ? '/honors' : `${honors ? '/' : ''}#${id}`;
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    if (honors || !('IntersectionObserver' in window)) return () => window.removeEventListener('scroll', update);
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
    navigation.forEach(item => { const section = document.getElementById(item.id); if (section) observer.observe(section); });
    return () => { observer.disconnect(); window.removeEventListener('scroll', update); };
  }, [honors]);
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
    <nav className="nav-inner" aria-label="主导航">
      <a className="brand" href="/" aria-label="渥康首页"><img src="/images/brand.png" alt="WDOM 渥康" width="210" height="82" /></a>
      <div className="nav-links">{navigation.map(item => <a key={item.id} href={href(item.id)} data-active={active === item.id ? 'true' : undefined} aria-current={honors && item.id === 'honors' ? 'page' : undefined}>{item.label}</a>)}</div>
      <a className="nav-cta" href={href('series')}>探索渥康</a>
      <Dialog open={open} onOpenChange={setOpen}><DialogTrigger className="menu-toggle" aria-label="打开导航菜单"><Menu size={23}/></DialogTrigger>
        <DialogContent className="mobile-nav-dialog" showCloseButton={false}>
          <div className="mobile-nav-top"><DialogTitle>探索渥康</DialogTitle><DialogClose className="menu-close" aria-label="关闭导航菜单"><X size={24}/></DialogClose></div>
          <DialogDescription className="mobile-nav-description">每一天，自然好营养。</DialogDescription>
          <nav aria-label="移动端导航">{navigation.map((item,i) => <a key={item.id} href={href(item.id)} aria-current={honors && item.id === 'honors' ? 'page' : undefined} onClick={() => setOpen(false)}><span className="mobile-nav-index">0{i+1}</span><span>{item.label}<small>{item.en}</small></span></a>)}</nav>
          <p className="mobile-nav-signoff">WDOM / NATURALLY, EVERY DAY.</p>
        </DialogContent>
      </Dialog>
    </nav>
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-top"><a className="brand" href="/" aria-label="渥康首页"><img src="/images/brand.png" alt="WDOM 渥康" width="210" height="82" /></a><p>把自然的好，<br/>带进每一天。</p></div>
    <nav className="footer-navigation" aria-label="页脚导航">
      <div><h3>探索渥康</h3><a href="/#series">产品系列</a><a href="/#products">牛乳粉</a><a href="/#compare">产品对比</a></div>
      <div><h3>关于品质</h3><a href="/#origin">品牌与产地</a><a href="/honors">奖项与荣誉</a><a href="/#quality">品质坚持</a><a href="/#traceability">了解溯源</a></div>
      <div><h3>选购与使用</h3><a href="/#faq">常见问题</a><p>具体商品信息与售后服务，<br/>请咨询原购买店铺。</p></div>
    </nav>
    <div className="footer-notes"><p>牛乳粉产品信息依据渥康2026年8月产品资料，营养数值均按每100g奶粉计。配料、营养成分及食用方法以实际购买产品包装为准。</p><p>产品含乳成分，全脂产品含大豆成分。乳糖不耐受或对相关成分过敏者，请留意包装上的适用说明。</p></div>
    <div className="footer-bottom"><p>WDOM · 每一天，自然好营养。</p><a href="#main">返回顶部</a></div>
  </footer>;
}

export function PageMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const targets = document.querySelectorAll('.section-heading, .series-intro, .product-card, .quality-grid article, .packaging-inner, .moments-list article, .trace-heading, .trace-steps li, .faq-heading, .honors-year, .honors-list-intro, .origin-copy');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px 35px 0px' });
    targets.forEach(target => { target.classList.add('reveal'); observer.observe(target); });
    document.documentElement.classList.add('motion-ready');
    return () => { observer.disconnect(); document.documentElement.classList.remove('motion-ready'); targets.forEach(target => target.classList.remove('reveal', 'is-visible')); };
  }, []);
  return null;
}
