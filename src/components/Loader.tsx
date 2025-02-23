export default function DashBoardLoadingSpinner({
  loaderDimensions,
}: {
  loaderDimensions: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center ${loaderDimensions}`}>
      <span className="loader"></span>
    </div>
  );
}
