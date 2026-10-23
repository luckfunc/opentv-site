import { useState } from 'react';
import { desktop, diagnosticRelease, faqs, release } from './content';
import type { Screenshot } from './content';
import { ImageDialog } from './components/ImageDialog';
import { InstallGuide } from './components/InstallGuide';
import { ScreenshotComparison } from './components/ScreenshotComparison';

const downloadSize = `${(release.bytes / 1024 / 1024).toFixed(2)} MB`;
const diagnosticSize = `${(diagnosticRelease.bytes / 1024 / 1024).toFixed(2)} MB`;

export default function App() {
  const [image, setImage] = useState<Screenshot | null>(null);
  return (
    <>
      <a href="#main" className="fixed left-4 top-4 z-50 -translate-y-24 rounded-lg bg-[#262a23] px-5 py-3 text-white focus:translate-y-0">跳转至正文</a>
      <header className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-6 sm:px-10 sm:py-7">
        <a href="#" aria-label="OpenTV 首页" className="flex items-center gap-2.5"><img src="/assets/logo-wordmark.svg" alt="OpenTV" className="block h-7 w-auto sm:h-8" /></a>
        <nav aria-label="主导航" className="flex items-center gap-5 text-xs sm:gap-8 sm:text-sm"><a className="hidden text-[#65695d] hover:text-black sm:block" href="#comparison">桌面对比</a><a className="text-[#65695d] hover:text-black" href="#install">安装指南</a><a className="hidden text-[#65695d] hover:text-black sm:inline-flex" href="https://github.com/luckfunc/open-tv" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a className="rounded-full border border-[#c9ccbf] px-4 py-2 hover:border-[#262a23] sm:px-5" href="#download">下载 APK <span aria-hidden="true" className="ml-1">↗</span></a></nav>
      </header>
      <main id="main">
        <section className="px-5 pb-16 pt-10 sm:px-10 sm:pb-24 sm:pt-14">
          <div className="mx-auto max-w-[1160px]">
            <div className="mb-10 flex flex-col items-center text-center sm:mb-14">
              <p className="eyebrow mb-5 flex items-center gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-[#76815d]" />OpenTV</p>
              <h1 className="text-[40px] font-medium leading-[1.3] tracking-[-.055em] sm:text-[66px] lg:text-[76px]">优先适配雷鸟电视</h1>
              <p className="mt-6 max-w-[520px] text-[15px] leading-8 text-[#65695d] sm:text-[17px]">第三方 Android TV 桌面。<br />下载 APK，安装到电视，按引导完成设置。</p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-4 sm:gap-6"><a href={release.downloadUrl} download={release.filename} className="inline-flex items-center gap-5 rounded-full bg-[#292d25] px-6 py-3.5 text-sm text-white transition-colors hover:bg-[#48513b]">下载 APK <span aria-hidden="true">↓</span></a><a href="#install" className="px-2 py-3 text-sm text-[#4b5142] underline decoration-[#bec3b1] underline-offset-4 hover:decoration-current">安装步骤 <span aria-hidden="true">↗</span></a></div>
              <p className="mt-4 text-[11px] tracking-wide text-[#7a806e]">Android TV · v{release.version} 测试版</p>
              <a href="#diagnostics" className="mt-4 px-2 py-3 text-sm text-[#4b5142] underline decoration-[#bec3b1] underline-offset-4 hover:decoration-current">ADB 连不上或设置卡住？下载诊断版 ↗</a>
            </div>
            <figure>
              <div className="tv-frame relative mx-auto">
                <img src={desktop.src} srcSet="/assets/desktop-960.webp 960w, /assets/desktop.webp 1920w" sizes="(max-width: 768px) 100vw, 1160px" width="1920" height="1080" alt={desktop.alt} fetchPriority="high" className="block aspect-video w-full rounded-[5px]" />
              </div>
              <figcaption className="mt-6 flex items-center justify-between gap-4 text-[10px] tracking-wide text-[#777d6d] sm:text-xs"><span>OpenTV 实机截图</span><button type="button" onClick={() => setImage(desktop)} className="min-h-11 rounded-full px-3 py-2 hover:bg-[#e7e8df]">查看实机大图 <span aria-hidden="true">↗</span></button></figcaption>
            </figure>
          </div>
        </section>
        <ScreenshotComparison />
        <InstallGuide onEnlarge={setImage} />
        <section id="download" className="scroll-mt-8 bg-[#e9ebdf] px-5 py-16 sm:px-10 sm:py-20">
          <div className="mx-auto grid max-w-[1160px] items-center gap-8 md:grid-cols-[1fr_auto]">
            <div><h2 className="text-3xl tracking-tight sm:text-[44px]">下载 OpenTV</h2><p className="mt-5 max-w-[550px] text-sm leading-7 text-[#65695d]">已在雷鸟鹏 7 Plus 上测试。<br />其他雷鸟电视预计也可使用，尚未逐一验证。</p></div>
            <div className="md:text-center"><a href={release.downloadUrl} download={release.filename} className="inline-flex items-center gap-8 rounded-full bg-[#292d25] px-7 py-4 text-sm text-white hover:bg-[#48513b]">下载 APK <span aria-hidden="true">↓</span></a><p className="mt-4 text-xs leading-6 text-[#65695d]">v{release.version}-guard · {release.channel} · {downloadSize}</p></div>
          </div>
          <div id="diagnostics" className="mx-auto mt-10 max-w-[1160px] scroll-mt-8 rounded-2xl border border-[#c9ccbf] bg-[#f6f7ef] p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
              <div className="max-w-[650px]">
                <p className="text-xs font-medium tracking-wide text-[#65695d]">问题反馈专用 · v{diagnosticRelease.version}</p>
                <h3 className="mt-2 text-2xl tracking-tight">诊断版下载（Debug）</h3>
                <p className="mt-4 text-sm leading-7 text-[#65695d]">适合 ADB 已开启但连接不上、授权等待或设置无法继续的用户。此版本会记录检查阶段和错误原因，方便反馈；安装后仍需复现问题，不能保证直接修复。</p>
                <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-[#4b5142]">
                  <li>下载下方 v{diagnosticRelease.version} 诊断版，覆盖安装，保留原有数据。</li>
                  <li>回到 OpenTV 设置向导，重新检查一次，再打开「查看诊断」。</li>
                  <li>手机连接同一局域网，扫码复制或下载报告，发给协助排查的人。</li>
                </ol>
                <p className="mt-4 text-xs leading-6 text-[#65695d]">报告不会自动上传。若卡在电视系统设置面板，请先返回 OpenTV 再导出。此下载与上方 v{release.version} 普通测试版不同。</p>
              </div>
              <div className="shrink-0 md:text-center">
                <a href={diagnosticRelease.downloadUrl} download={diagnosticRelease.filename} className="inline-flex items-center gap-5 rounded-full bg-[#292d25] px-6 py-4 text-sm text-white hover:bg-[#48513b]">下载 v{diagnosticRelease.version} 诊断版 <span aria-hidden="true">↓</span></a>
                <p className="mt-3 text-xs leading-6 text-[#65695d]">雷鸟版 · {diagnosticSize}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-5 py-20 sm:px-10 sm:py-24">
          <div className="mx-auto grid max-w-[1160px] gap-8 lg:grid-cols-[1fr_2fr]"><div><h2 className="text-3xl tracking-tight">常见问题</h2></div><div>{faqs.map((faq) => <details key={faq.question} className="group border-b border-[#d4d7ca] first:border-t"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-[15px] [&::-webkit-details-marker]:hidden">{faq.question}<span aria-hidden="true" className="text-xl font-light text-[#747c65] group-open:rotate-45">+</span></summary><p className="max-w-[670px] pb-6 pr-6 text-sm leading-7 text-[#65695d]">{faq.answer}</p></details>)}</div></div>
        </section>
      </main>
      <footer className="border-t border-[#d4d7ca] px-5 py-8 sm:px-10"><div className="mx-auto flex max-w-[1160px] flex-col justify-between gap-6 sm:flex-row sm:items-center"><div className="flex items-center gap-3"><span className="font-semibold tracking-tight">OpenTV</span><span className="text-xs text-[#777d6d]">Android TV 桌面</span></div><nav aria-label="项目与许可证" className="flex flex-wrap gap-x-5 gap-y-3 text-[11px] text-[#65695d]"><a href="https://github.com/luckfunc/open-tv" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub ↗</a><a href="/legal/LICENSE.txt" className="hover:underline">项目许可证</a><a href="/legal/NOTICE.txt" className="hover:underline">第三方声明</a><a href="/legal/FONT-LICENSE-OFL.txt" className="hover:underline">字体许可证</a></nav></div></footer>
      <ImageDialog image={image} onClose={() => setImage(null)} />
    </>
  );
}
