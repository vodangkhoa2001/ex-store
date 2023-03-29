function Title({ title }) {
  return (
    <div className=" h-10 relative flex items-center mt-[80px] ">
      <div className="before:absolute before:left-0 before:top-0 before:w-5 before:h-[100%] before:bg-[#DB4444] before:rounded"></div>
      <span className="text-[#DB4444] font-semibold ml-10">{title}</span>
    </div>
  );
}

export default Title;
