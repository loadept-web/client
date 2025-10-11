const PageIndicator = ({ title }) => {
  return (
    <div className='flex items-center gap-3'>
      <span className='text-3xl text-[#56b6c2]'></span>
      <code className='text-[#c678dd]'>{title}</code>
    </div>
  )
}

export default PageIndicator
