interface SectionHeaderProps {
  title: string;
  description: string;
}

export default function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <section>
      <h1 className="font-satoshi mb-2 text-[18px] leading-7 font-bold text-[#101828]">
        {title}
      </h1>
      <p className="font-satoshi text-[14px] leading-[20px] font-normal text-[#475467]">
        {description}
      </p>
    </section>
  );
}
