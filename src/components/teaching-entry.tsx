import { Teaching } from "@/data/teaching";

export function TeachingEntry({ teaching }: { teaching: Teaching }) {
  return (
    // <div className="flex flex-row gap-6">
    //   <div className="flex flex-col flex-1">
    //     <p className="text-xs text-zinc-500 mb-2">{teaching.date}</p>
    //     <h3 className="font-serif text-md mb-3">
    //         {teaching.title}
    //     </h3>
    //     <p className="text-sm text-zinc-600">{teaching.description}</p>
    //   </div>
    // </div>

    <div className="grid grid-cols-4 gap-x-2">
      <span className="text-xs text-zinc-500 mt-1">{teaching.date}</span>
      <div className="col-span-3 flex flex-col">
        <h3 className="text-base font-serif">
          {teaching.title} —{" "}
          {teaching.institution}
        </h3>
        {teaching.description && (
          <p className="text-sm text-zinc-600 leading-relaxed mt-2">
            {teaching.description}
          </p>
        )}
      </div>
    </div>
  );
}
