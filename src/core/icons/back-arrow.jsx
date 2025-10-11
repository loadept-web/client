import { Link } from 'preact-router/match'

const BackArrow = ({ text, href }) => {
  return (
    <Link
      href={href}
      className='inline-flex items-center text-[#61afef] mb-8 hover:text-[#528bff] transition-colors'
    >
      <span className='text-2xl mr-1'></span>
      {text}
    </Link>
  )
}

export default BackArrow
