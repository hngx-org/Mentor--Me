import LoadingSpinner from "@/components/loaders/LoadingSpinner";

export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center relative">
      <p className="absolute top-2 left-4 text-3xl font-bold font-Gladiora text-Neutra20">
        Loading....
      </p>
      <div className="flex gap-6 items-center">
        <p className="sm:text-6xl text-3xl font-bold font-Gladiora">
          Mentor Me
        </p>
        <div className="scale-[3] animate-slideLeft opacity-0">
          <LoadingSpinner />
        </div>
      </div>
    </div>
  );
}
