import DownloadIcon from "@/components/icons/DownloadIcon";
import ViewIcon from "@/components/icons/ViewIcon";
import { files } from "@/data/files";

function FilesPage() {
  return (
    <div className="max-w-md mx-auto pt-6">
      <ul className="space-y-4">
        {files.map((file) => (
          <li className="bg-slate-900 rounded-xl px-4 py-4 flex justify-between items-center">
            <h3>{file.title}</h3>

            <div className="flex space-x-2 items-center">
              <a className="text-slate-400" target="_blank" href={file.view}>
                <ViewIcon />
              </a>
              <a
                className="inline-block text-primary cursor-pointer"
                download
                href={file.url}
              >
                <DownloadIcon />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilesPage;
