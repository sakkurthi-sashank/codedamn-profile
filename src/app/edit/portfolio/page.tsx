import { PortfolioPlaygroundCard } from "@/components/PortfolioEdit/PortfolioPlaygroundCard";
import { ProjectsCard } from "@/components/PortfolioEdit/ProjectsCard";

export default function Page() {
  return (
    <div className="w-full max-w-4xl space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Playgrounds</h2>
        <div className="mt-6 grid grid-cols-2 gap-10">
          <PortfolioPlaygroundCard isActive={true} />
          <PortfolioPlaygroundCard isActive={false} />
          <PortfolioPlaygroundCard isActive={false} />
          <PortfolioPlaygroundCard isActive={false} />
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-2xl font-semibold text-gray-800">Projects</h2>
        <div className="mt-6 grid w-full grid-cols-2 gap-10">
          <ProjectsCard isActive={true} />
          <ProjectsCard isActive={false} />
          <ProjectsCard isActive={false} />
          <ProjectsCard isActive={false} />
        </div>
      </div>

      <div className="flex items-center justify-end space-x-4 pt-4">
        <button className="rounded-md bg-gray-200 px-6 py-2 text-sm font-semibold text-gray-600 antialiased">
          Cancel
        </button>
        <button className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white antialiased">
          Save changes
        </button>
      </div>
    </div>
  );
}
