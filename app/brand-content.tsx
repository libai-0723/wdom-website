'use client';

import { ScanLine, ShieldCheck, Coffee, Sunrise, Utensils } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from '@/components/ui/table';

const comparison = [
  ['口感', '浓郁醇厚', '清淡爽口'],
  ['配料', '牛乳（99.5%）、大豆磷脂（0.5%）', '脱脂牛乳（100%）'],
  ['蛋白质 / 每100g', '27.2g', '33.7g'],
  ['钙 / 每100g', '900mg', '1220mg'],
  ['净含量', '1kg / 袋', '1kg / 袋'],
  ['原产地', '新西兰', '新西兰'],
];

const questions = [
  { question: '全脂和脱脂，哪一款更适合我？', answer: '喜欢浓郁奶香，可以从全脂牛乳粉开始；偏爱清淡口感，可以了解脱脂牛乳粉。两款的配料与营养数值不同，你可以结合口味偏好和实际饮食需求查看上方对比。不同人对口感的感受也会有所差异。' },
  { question: '配料中有蔗糖吗？', answer: '现有产品资料中，全脂款配料为牛乳（99.5%）、大豆磷脂（0.5%）；脱脂款配料为脱脂牛乳（100%），均未列出蔗糖。配料中没有添加蔗糖，不等于产品“无糖”；请以所购包装的配料表和营养成分表为准。' },
  { question: '一杯需要放多少奶粉、用多少水？', answer: '请按照所购产品包装上的冲调说明，确认奶粉用量、水量和水温，再量取、搅拌。不同产品或包装版本的说明可能有所不同，页面展示的每100g营养数值也不等于每杯的营养含量。' },
  { question: '开封后可以保存多久？', answer: '资料中的24个月为未开封产品的参考保质期，不代表开封后的可食用期限。使用后请将夹链重新封好，具体储存条件、开封后使用期限以及生产日期，以实际购买的包装标示为准。' },
  { question: '怎样查看产品的溯源信息？', answer: '找到产品包装底部的溯源码，用手机扫描后，查看对应页面提供的货源、报关等信息。如果无法打开或信息有疑问，可以保留包装和订单，向原购买店铺客服核实。' },
  { question: '购买前，需要留意哪些适用说明？', answer: '产品资料标注适用3岁以上人群。两款均含乳成分，全脂款另含大豆成分；资料同时提示乳糖不耐受、牛奶过敏人群不适用。请先核对实物包装上的年龄、配料和过敏原信息，避免忽略个人饮食限制。' },
];

export function ProductComparison() {
  return <section className="comparison-section section-shell" id="compare" aria-labelledby="compare-title">
    <div className="section-heading"><div><p className="eyebrow">06 / FIND YOUR EVERYDAY</p><h2 id="compare-title">每一项，<br/><span>都看清楚。</span></h2></div><p>从口感到配料，<br/>放在一起，更好选择。</p></div>
    <div className="comparison-wrap"><Table className="comparison-table"><TableCaption>数值依据2026年8月产品资料，按每100g奶粉计，并非每杯含量。最终以实物包装为准。</TableCaption><TableHeader><TableRow><TableHead scope="col">产品信息</TableHead><TableHead scope="col"><span className="compare-dot whole-dot"/>全脂牛乳粉<span className="compare-label">浓郁之选</span></TableHead><TableHead scope="col"><span className="compare-dot skim-dot"/>脱脂牛乳粉<span className="compare-label">清爽之选</span></TableHead></TableRow></TableHeader><TableBody>{comparison.map(([label,whole,skim])=><TableRow key={label}><TableHead scope="row">{label}</TableHead><TableCell>{whole}</TableCell><TableCell>{skim}</TableCell></TableRow>)}</TableBody></Table></div>
    <p className="comparison-tip">不确定从哪一款开始？先从你偏爱的奶香与口感出发。</p>
  </section>;
}

export function EverydayMoments() {
  return <section className="everyday-section section-shell" id="everyday" aria-labelledby="everyday-title">
    <div className="section-heading"><div><p className="eyebrow">04 / A LITTLE EVERYDAY JOY</p><h2 id="everyday-title">日常的小事。<br/><span>也值得认真。</span></h2></div><p>用你喜欢的方式，<br/>把牛乳融入生活。</p></div>
    <div className="everyday-grid"><figure className="breakfast-figure"><img src="/images/breakfast.webp" width="1536" height="1024" loading="lazy" alt="牛乳、燕麦与面包组成的早餐搭配示意"/><figcaption>食用搭配示意</figcaption></figure><div className="moments-list"><article><Sunrise aria-hidden="true" size={26}/><div><p className="moment-time">早晨 · 为新一天留点时间</p><h3>和早餐，一起上桌。</h3><p>搭配面包，或将冲调好的牛乳加入燕麦。让喜欢的味道，成为早晨的小习惯。</p></div></article><article><Coffee aria-hidden="true" size={26}/><div><p className="moment-time">午后 · 换一种喜欢的味道</p><h3>给咖啡，一点奶香。</h3><p>把冲调好的牛乳加入咖啡或茶中，按个人喜好调整风味，慢慢享受这一杯。</p></div></article><article><Utensils aria-hidden="true" size={26}/><div><p className="moment-time">厨房 · 把灵感带进生活</p><h3>做一道，有奶香的美味。</h3><p>制作松饼或烘焙点心时，可按照食谱加入奶粉或冲调好的牛乳，探索新的日常搭配。</p></div></article></div></div>
    <p className="section-footnote">以上为食用搭配灵感；具体冲调方法及用量请遵循产品包装，烹饪时按食谱调整。</p>
  </section>;
}

export function PackagingStory() {
 return <section className="packaging-section" aria-labelledby="packaging-title"><div className="packaging-inner"><div className="packaging-copy"><p className="eyebrow">DETAILS THAT MATTER</p><h2 id="packaging-title">好包装。<br/><span>不止是好看。</span></h2><p className="packaging-intro">从多层复合材料到夹链封口，<br/>每个细节，都围绕日常使用。</p><div className="packaging-points"><article><h3>多层复合，各尽其职。</h3><p>包装资料介绍，袋体由PET聚酯、铝箔、尼龙薄膜与PE聚乙烯等材料组成，分别承担外层防护、遮光阻隔、结构增强和内层封合的作用。</p></article><article><h3>自立袋型，夹链再封。</h3><p>八边封自立结构，方便放置与取用。取用后重新封好夹链，具体保存方式请按包装说明执行。</p></article></div><a className="text-link" href="#traceability">继续了解产品溯源</a></div><figure className="packaging-figure"><img src="/images/packaging-layers.png" alt="品牌资料中的多层复合包装结构示意" width="600" height="326" loading="lazy"/><figcaption><ShieldCheck aria-hidden="true" size={20}/><div><strong>多层结构，细节守护。</strong><span>包装结构示意，摘自品牌产品资料。</span></div></figcaption></figure></div></section>;
}

export function Traceability() {
 return <section className="trace-section section-shell" id="traceability" aria-labelledby="trace-title"><div className="trace-heading"><ScanLine size={38} strokeWidth={1.4} aria-hidden="true"/><p className="eyebrow">07 / KNOW YOUR MILK</p><h2 id="trace-title">关于这一袋，<br/><span>多了解一点。</span></h2><p>从包装上的溯源码开始，查看对应产品信息。</p></div><ol className="trace-steps"><li><span className="step-index">01</span><h3>找到包装底部</h3><p>拿起你购买的产品，找到袋底的溯源码。</p></li><li><span className="step-index">02</span><h3>使用手机扫码</h3><p>扫描实物包装上的码，打开对应的溯源页面。</p></li><li><span className="step-index">03</span><h3>查看来源信息</h3><p>阅读页面提供的货源、报关等信息；有疑问时向购买店铺核实。</p></li></ol><p className="section-footnote">请使用实物包装上的溯源码，具体可查询内容以对应页面为准。</p></section>;
}

export function FrequentlyAsked() {
 return <section className="faq-section section-shell" id="faq" aria-labelledby="faq-title"><div className="faq-heading"><p className="eyebrow">08 / GOOD TO KNOW</p><h2 id="faq-title">你关心的。<br/><span>我们说清楚。</span></h2><p>选购与日常使用中的常见问题。</p><a className="text-link" href="#compare">回看两款产品对比</a></div><Accordion className="faq-list">{questions.map(({question,answer},i)=><AccordionItem key={question} value={`faq-${i}`} className="faq-item"><AccordionTrigger className="faq-question">{question}</AccordionTrigger><AccordionContent className="faq-answer"><p>{answer}</p></AccordionContent></AccordionItem>)}</Accordion></section>;
}
