import { useState } from 'react';
import { installSteps } from '../content';
import type { Screenshot } from '../content';

type InstallGuideProps = { onEnlarge: (image: Screenshot) => void };

export function InstallGuide(props: InstallGuideProps) {
  const { onEnlarge } = props;
  const [selectedId, setSelectedId] = useState(installSteps[0].id);
  const selected = installSteps.find((step) => step.id === selectedId)!;
  return (
    <section id="install" className="scroll-mt-8 border-t border-[#dcded3] px-5 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-[1160px]">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="text-3xl tracking-tight sm:text-[44px]">安装步骤</h2>
        </div>
        <ol className="mb-10 grid gap-4 text-sm sm:grid-cols-3">
          <li>1. 下载 APK</li>
          <li>2. 将 APK 安装到电视</li>
          <li>3. 打开 OpenTV，按引导完成设置</li>
        </ol>
        <details open>
          <summary className="mb-6 cursor-pointer text-sm text-[#65695d]">查看应用内引导截图</summary>
          <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
            <div>
              <div className="grid grid-cols-2 gap-2 lg:grid-cols-1" role="group" aria-label="安装步骤">
                {installSteps.map((step, index) => <button key={step.id} type="button" aria-pressed={selectedId === step.id} aria-controls="install-panel" onClick={() => setSelectedId(step.id)} className={`flex items-center gap-3 rounded-lg border px-4 py-4 text-left text-sm transition-colors ${selectedId === step.id ? 'border-[#262a23] bg-[#262a23] text-white' : 'border-[#dcded3] hover:border-[#818776] hover:bg-white/40'}`}><span className={`font-mono text-xs ${selectedId === step.id ? 'text-[#d9e0bf]' : 'text-[#777d6d]'}`}>0{index + 1}</span>{step.title}<span aria-hidden="true" className="ml-auto">↗</span></button>)}
              </div>
              <p className="mt-5 text-sm leading-7 text-[#65695d]" aria-live="polite">{selected.detail}</p>
            </div>
            <figure id="install-panel" aria-label={selected.title}>
              <div className="overflow-hidden rounded-xl border border-black/10 bg-[#1e211d] p-1.5 shadow-sm">
                <img src={selected.screenshot.src} alt={selected.screenshot.alt} width="1920" height="1080" loading="lazy" className="aspect-video w-full rounded-lg object-contain" />
              </div>
              <figcaption className="mt-4 flex items-center justify-between gap-3 text-xs text-[#65695d]"><span>{selected.screenshot.caption}</span><button type="button" onClick={() => onEnlarge(selected.screenshot)} className="min-h-11 shrink-0 rounded-full border border-[#c9ccbf] px-4 py-2 hover:bg-white">放大查看 <span aria-hidden="true">↗</span></button></figcaption>
            </figure>
          </div>
        </details>
      </div>
    </section>
  );
}
