import { useEffect, useRef, useState } from 'react';
import type { Screenshot } from '../content';

type Props = { image: Screenshot | null; onClose: () => void };

export function ImageDialog({ image, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    setZoomed(false);
    const dialog = ref.current;
    if (!image || !dialog) return;
    const previous = document.activeElement;
    if (!dialog.open) dialog.showModal();
    return () => {
      dialog.close();
      if (previous instanceof HTMLElement) previous.focus();
    };
  }, [image]);

  return (
    <dialog ref={ref} className="image-dialog" aria-labelledby="image-caption" onCancel={onClose} onClose={onClose} onClick={(event) => {
      if (event.target === event.currentTarget) {
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
      }
    }}>
      {image && <div className="overflow-hidden rounded-xl bg-[#f6f5f0]">
        <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4">
          <p id="image-caption" className="w-full min-w-0 text-sm sm:w-auto sm:flex-1">{image.caption}</p>
          <button type="button" onClick={() => setZoomed((value) => !value)} aria-pressed={zoomed} className="min-h-11 shrink-0 rounded-full border border-black/20 px-4 py-2 text-sm hover:bg-black/5">{zoomed ? '适应屏幕' : '查看原尺寸'}</button>
          <button type="button" onClick={onClose} className="min-h-11 shrink-0 rounded-full border border-black/20 px-4 py-2 text-sm hover:bg-black/5" autoFocus>关闭 <span aria-hidden="true">×</span></button>
        </div>
        <div className="max-h-[75dvh] overflow-auto" role="region" aria-labelledby="image-caption" tabIndex={0}>
          <img src={image.src} alt={image.alt} className={zoomed ? 'block h-auto w-auto max-w-none' : 'block h-auto max-h-[75dvh] w-full object-contain'} />
        </div>
      </div>}
    </dialog>
  );
}
