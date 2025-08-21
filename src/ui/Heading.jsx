const Heading = ({ span, regular }) => {
  return (
    <div className="mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-bold my-8 inline-block relative">
        <span className="text-[var(--color-primary)]">{span}</span> {regular}
        <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] absolute -bottom-4 right-0 rounded-full"></div>
      </h2>
    </div>
  );
};

export default Heading;
