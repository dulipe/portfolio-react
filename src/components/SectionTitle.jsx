const SectionTitle = ({ icon, title, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="flex items-center gap-3 text-3xl font-bold">
        {icon}
        {title}
      </h2>

      {subtitle && <p className="mt-4 text-neutral-400">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
