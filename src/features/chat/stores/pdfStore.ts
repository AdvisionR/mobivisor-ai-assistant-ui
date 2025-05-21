import { create } from 'zustand';

type PdfState = {
  isOpen: boolean;
  file: string | null;
  page: number;
  part: number;  
  title: string | null;
  url: string | null;
  openPdf: (source: string) => void;
  closePdf: () => void;
};

const parseSource = (source: string) => {
  const [file_path, pageStr, partStr] = source.split(':');
  const file = file_path.split("/")[1];
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/static/${file}`;

  return {
    file,
    url,
    page: Number(pageStr),
    part: Number(partStr),
  };
}

export const usePdfStore = create<PdfState>((set) => ({
  isOpen: false,
  file: null,
  page: 1,
  part: 1,
  title: null,
  url: null,
  openPdf: (source) => {
    const { file, url, page, part } = parseSource(source);
    set({
      isOpen: true,
      file,
      page,
      part,
      url,
      title: file.split('/').pop() || 'PDF Document',
    });
  },
  closePdf: () => set({ isOpen: false }),
}));
