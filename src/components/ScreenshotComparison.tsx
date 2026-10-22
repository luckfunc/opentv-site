import { useState } from 'react';
import { desktop } from '../content';

export function ScreenshotComparison() {
  const [position, setPosition] = useState(56);
  return (
    <section id="comparison" className="bg-[#222521] px-5 py-20 text-[#f6f5f0] sm:px-10 sm:py-28">
      <div className="mx-auto max-w-[1160px]">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl leading-tight tracking-tight sm:text-[46px]">桌面对比</h2>
          </div>
          <p className="max-w-[315px] text-sm leading-7 text-[#bdc0b6]">拖动分界线，对比原有桌面与 OpenTV。</p>
        </div>
        <div className="relative isolate aspect-video overflow-hidden rounded-lg border border-white/15 bg-black">
          <img src="/assets/stock.webp" srcSet="/assets/stock-960.webp 960w, /assets/stock.webp 1920w" sizes="(max-width: 768px) 100vw, 1160px" alt="原有电视桌面，头像、历史和搜索等个人信息已遮盖" width="1920" height="1080" loading="lazy" className="absolute inset-0 h-full w-full" />
          <div className="pointer-events-none absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
            <img src={desktop.src} srcSet="/assets/desktop-960.webp 960w, /assets/desktop.webp 1920w" sizes="(max-width: 768px) 100vw, 1160px" alt="OpenTV 桌面，秋日壁纸与应用网格" width="1920" height="1080" loading="lazy" className="absolute inset-0 h-full w-full" />
          </div>
          <span className="pointer-events-none absolute left-3 top-3 rounded bg-black/65 px-3 py-1.5 text-[11px] sm:left-5 sm:top-5 sm:text-xs">OpenTV</span>
          <span className="pointer-events-none absolute right-3 top-3 rounded bg-black/65 px-3 py-1.5 text-[11px] sm:right-5 sm:top-5 sm:text-xs">原有桌面</span>
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-px bg-white shadow-sm" style={{ left: `${position}%` }}>
            <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#f6f5f0] text-lg tracking-[.1em] text-[#222521] shadow-lg sm:h-12 sm:w-12">‹ ›</span>
          </div>
          <input id="comparison-range" type="range" min="0" max="100" value={position} onChange={(event) => setPosition(Number(event.target.value))} aria-label="调整 OpenTV 与原有桌面的对比范围" aria-valuetext={`OpenTV 展示 ${position}%`} className="comparison-range absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
        </div>
        <div className="mt-5 flex flex-col justify-between gap-2 text-xs leading-6 text-[#bdc0b6] sm:flex-row">
          <label htmlFor="comparison-range">拖动对比 <span className="ml-2 font-mono text-white">{position}%</span><span className="ml-3 hidden sm:inline">也可使用键盘方向键</span></label>
          <p>同一台电视实拍</p>
        </div>
      </div>
    </section>
  );
}
