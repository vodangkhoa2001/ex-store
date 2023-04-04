function HeaderComponent({ title, children, className }) {
  return (
    <>
      <div className={className}>
        <div className="flex items-center">
          <h1 className="text-4xl font-semibold">{title}</h1>
        </div>
        {children}
      </div>
    </>
  );
}

export default HeaderComponent;
