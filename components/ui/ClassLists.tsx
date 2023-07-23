import Link from "next/link";
import DownloadIcon from "../icons/DownloadIcon";
import PlayIcon from "../icons/PlayIcon";

interface Props {
  title: string;
  items: {
    id: string;
    name: string;
  }[];
}

function ClassLists({ title, items }: Props) {
  return (
    <div className="mb-6">
      <h3 className="text-base lg:text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-4">
        {items.map((c) => (
          <li
            key={c.id}
            className="flex justify-between items-center w-full text-lg px-4 py-3 bg-slate-900 rounded-xl capitalize transition hover:bg-slate-700"
          >
            <span className="inline-block text-sm lg:text-base">{c.name}</span>

            <div className="flex items-center space-x-3">
              <Link
                className="inline-block text-primary"
                href={`/classes/${c.id}`}
              >
                <PlayIcon />
              </Link>
              <span className="inline-block text-slate-400" title="coming soon">
                <DownloadIcon />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClassLists;
