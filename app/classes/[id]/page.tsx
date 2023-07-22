import VideoPlayer from "@/components/ui/VideoPlayer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Class Detail | Sibawayh`,
};

interface Props {
  params: {
    id: string;
  };
}

function ClassDetail({ params }: Props) {
  const { id } = params;
  if (!id) return null;

  return (
    <div className="max-w-md mx-auto">
      <Link className="inline-block text-base font-medium mb-4" href="/">
        <span className="transition hover:bg-primary flex justify-center items-center bg-slate-800 w-10 h-10 p-2 text-lg rounded-full mr-2">
          &#8592;
        </span>
      </Link>

      <VideoPlayer videoId={id} />
    </div>
  );
}

export default ClassDetail;
