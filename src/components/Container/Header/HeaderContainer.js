function HeaderComponent({ title, children, className }) {
  return (
    <>
      <div className={className}>
        <div className="flex items-center px-3">
          <h1 className="lg:text-4xl text-2xl font-semibold">{title}</h1>
        </div>
        {children}
      </div>
    </>
  );
}

export default HeaderComponent;
