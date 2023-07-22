import ClassLists from "@/components/ui/ClassLists";
import { pronunciationClasses, writingClasses } from "@/data/classes";

function ClassPage() {
  return (
    <div className="max-w-md mx-auto">
      <ClassLists title="Writing" items={writingClasses} />
      <ClassLists title="Pronunciation" items={pronunciationClasses} />
    </div>
  );
}

export default ClassPage;
