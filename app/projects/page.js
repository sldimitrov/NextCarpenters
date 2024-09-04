import ProjectsBrowser from "@/components/ProjectsBrowser";

import PLACES from "@/app/data";

export default function Projects() {
  return (
    <div className="mt-5 w-2/3 h-96 flex flex-col items-center  mx-auto">
      <h1 className="text-center text-4xl">Projects Section</h1>
      <ProjectsBrowser items={PLACES} />
    </div>
  );
}
