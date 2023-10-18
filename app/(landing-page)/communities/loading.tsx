import { LoadingSpinner } from "@/components";

export default function loadingLogin() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <LoadingSpinner />
    </div>
  );
}
