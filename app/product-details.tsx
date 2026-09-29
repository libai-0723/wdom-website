'use client';
import { ChevronRight } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
export default function ProductDetails({kind}: {kind: 'whole'|'skim'}) {
 const whole=kind==='whole';
 return <Dialog><DialogTrigger className="text-link product-more">进一步了解 <ChevronRight size={17}/></DialogTrigger><DialogContent className="product-dialog"><DialogTitle className="detail-title">渥康{whole?'全脂':'脱脂'}牛乳粉</DialogTitle><DialogDescription className="detail-description">{whole?'醇香浓郁，适合喜欢浓厚奶香的你。':'口感清淡，适合偏爱清爽牛乳的你。'}</DialogDescription><img className="detail-image" src={`/images/${kind}.png`} alt={whole?'全脂牛乳粉实物包装':'脱脂牛乳粉实物包装'} width="206" height="239"/><dl className="detail-list"><div><dt>配料</dt><dd>{whole?'牛乳（99.5%）、大豆磷脂（0.5%）':'脱脂牛乳（100%）'}</dd></div><div><dt>净含量</dt><dd>1kg / 袋</dd></div><div><dt>蛋白质</dt><dd>{whole?'27.2':'33.7'}g / 每100g</dd></div><div><dt>钙</dt><dd>{whole?'900':'1220'}mg / 每100g</dd></div><div><dt>保质期</dt><dd>24个月（未开封）</dd></div><div><dt>原产地</dt><dd>新西兰</dd></div></dl><p className="detail-note">依据2026年8月产品资料。请以实物包装标示为准，按包装说明冲调与储存。含乳{whole?'及大豆':''}成分，不适用于相关成分过敏人群；乳糖不耐受者请留意产品适用说明。</p></DialogContent></Dialog>;
}
