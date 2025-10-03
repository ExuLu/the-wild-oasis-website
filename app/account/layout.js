const layout = ({ children }) => {
  return (
    <div className='grid grid-cols-[16rem_1fr] h-full gap-12'>
      <div>Navigation</div>
      <div className="py-1">{children}</div>
    </div>
  );
};

export default layout;
