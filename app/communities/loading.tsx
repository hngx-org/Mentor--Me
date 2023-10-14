import LoadingSpinner from "@/components/loaders/LoadingSpinner";

export default function loadingLogin() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <LoadingSpinner />
    </div>
  );
}
