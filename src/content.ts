export type Screenshot = {
  id: string;
  src: string;
  alt: string;
  caption: string;
};

export type InstallStep = {
  id: string;
  title: string;
  detail: string;
  screenshot: Screenshot;
};

export type Release = {
  version: string;
  channel: string;
  downloadUrl: string;
  filename: string;
  bytes: number;
};

export type Faq = { question: string; answer: string };

export const desktop: Screenshot = {
  id: 'desktop',
  src: '/assets/desktop.webp',
  alt: 'OpenTV 真实电视桌面，秋日山林壁纸上排列着常用应用',
  caption: 'OpenTV 实机桌面 · 秋日山林壁纸',
};

export const release: Release = {
  version: '0.3.15',
  channel: '测试版',
  downloadUrl: '/downloads/OpenTV-0.3.15-guard.apk',
  filename: 'OpenTV-0.3.15-guard.apk',
  bytes: 1833477,
};

export const diagnosticRelease: Release = {
  version: '0.3.17',
  channel: '诊断版 · Debug',
  downloadUrl: '/downloads/OpenTV-0.3.17-guard-diagnostics.apk',
  filename: 'OpenTV-0.3.17-guard-diagnostics.apk',
  bytes: 1867273,
};

export const installSteps: InstallStep[] = [
  {
    id: 'connect', title: '开启 ADB',
    detail: '在电视设置中开启 ADB 调试，再回到 OpenTV 连接。入口因机型而异。',
    screenshot: { id: 'connect', src: '/assets/setup-connect.webp', alt: 'OpenTV 连接引导，提示开启 ADB 调试', caption: '01 / 开启 ADB，连接电视' },
  },
  {
    id: 'authorize', title: '允许调试',
    detail: '电视弹出调试授权提示后，用遥控器选择允许。',
    screenshot: { id: 'authorize', src: '/assets/setup-authorize.webp', alt: '电视的调试授权确认提示，设备指纹已遮盖', caption: '02 / 在电视上确认调试授权' },
  },
  {
    id: 'enable', title: '开启桌面',
    detail: '按引导开启桌面功能，完成系统授权。',
    screenshot: { id: 'enable', src: '/assets/setup-enable.webp', alt: 'OpenTV 开启桌面功能的设置引导', caption: '03 / 按引导开启桌面功能' },
  },
  {
    id: 'complete', title: '完成设置',
    detail: '完成设置后，按遥控器 Home 键检查能否返回 OpenTV。',
    screenshot: { id: 'complete', src: '/assets/setup-complete.webp', alt: 'OpenTV 首次引导完成画面', caption: '04 / 完成引导，回到桌面' },
  },
];

export const faqs: Faq[] = [
  { question: '支持哪些电视？', answer: '主要面向雷鸟电视，目前已在鹏 7 Plus 上测试。其他雷鸟电视预计也可使用，尚未逐一验证。请保留原有桌面。' },
  { question: '设置时需要什么权限？', answer: '需要在电视上手动开启 ADB 调试，并按应用内引导确认系统授权。' },
  { question: '桌面有广告吗？', answer: 'OpenTV 桌面不插入广告，第三方应用内的广告不受 OpenTV 控制。' },
];
