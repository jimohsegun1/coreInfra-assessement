export default function DashBoardLoadingSpinner({
  loaderDimensions,
}: {
  loaderDimensions: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center rounded-xl border border-[#E2E2E2] bg-white ${loaderDimensions}`}>
      <span className="loader"></span>
    </div>
  );
}
