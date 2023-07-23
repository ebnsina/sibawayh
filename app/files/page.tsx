import DownloadIcon from "@/components/icons/DownloadIcon";
import { files } from "@/data/files";

function FilesPage() {
  return (
    <div className="max-w-md mx-auto pt-6">
      <ul className="space-y-4">
        {files.map((file) => (
          <li className="bg-slate-900 rounded-xl px-4 py-4 flex justify-between items-center">
            <h3>{file.title}</h3>
            <a
              className="inline-block text-primary cursor-pointer"
              download
              href={file.url}
            >
              <DownloadIcon />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilesPage;
