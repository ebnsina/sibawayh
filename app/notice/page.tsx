"use client";

import { useCopyToClipboard } from "@/hooks/useClipboard";

function NoticePage() {
  const [value, copy] = useCopyToClipboard();

  const handleCopy = () => {
    copy(
      "https://us06web.zoom.us/j/2132460993?pwd=YUNXOXRjWGsycG1JeDJ0UkFEUjV3Zz09"
    );
  };

  return (
    <div className="max-w-md mx-auto pt-10">
      <div className="bg-slate-700 rounded-2xl px-6 py-4">
        <div className="flex justify-end">
          <button
            onClick={handleCopy}
            className="border border-primary px-4 py-2 rounded-xl text-sm uppercase font-medium"
          >
            {value ? "Copied" : "Copy"}
          </button>
        </div>

        <div className="flex flex-col justify-center items-center mt-6">
          <span className="block mb-2">Zoom class link:</span>
          <p className="text-sm font-mono">
            https://us06web.zoom.us/j/2132460993?pwd=YUNXOXRjWGsycG1JeDJ0UkFEUjV3Zz09
          </p>
        </div>
      </div>
    </div>
  );
}

export default NoticePage;
