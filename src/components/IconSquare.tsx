export default function IconSquare({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-fit rounded-[10px] border border-[#EAECF0] bg-white p-3 shadow-[0px_1px_2px_#10182805]">
      {children}
    </div>
  );
}
