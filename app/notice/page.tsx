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
      <div className="bg-slate-900 rounded-2xl px-6 py-4">
        <div className="flex justify-end">
          <button
            onClick={handleCopy}
            className="border border-primary px-4 py-1 rounded-full text-sm uppercase"
          >
            {value ? "Copied" : "Copy class link"}
          </button>
        </div>

        <div className="mb-4">
          <span className="block mb-2">Class days:</span>
          <p className="text-sm font-mono">Fri, Mon, Wed</p>
        </div>

        <div className="mb-4">
          <span className="block mb-2">Class time:</span>
          <p className="text-sm font-mono">6.00 AM</p>
        </div>

        <div className="mb-4">
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
