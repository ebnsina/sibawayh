import Logo from "@/components/common/Logo";
import ClassLists from "@/components/ui/ClassLists";
import { pronunciationClasses, writingClasses } from "@/data/classes";

function Home() {
  return (
    <div className="max-w-md mx-auto">
      <div className="flex justify-center items-center">
        <Logo />
      </div>

      <ClassLists title="Writing Classes" items={writingClasses} />
      <ClassLists title="Pronunciation" items={pronunciationClasses} />
    </div>
  );
}

export default Home;
