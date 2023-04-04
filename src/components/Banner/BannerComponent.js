function Banner({ children, image, alt, className }) {
  return (
    <>
      <img src={image} alt={alt} className={className} />
      {children}
    </>
  );
}

export default Banner;
