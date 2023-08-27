const Footer = (props) => {
  const { jobs } = props
  return (
    <ul className="flex gap-x-8 text-sm justify-between text-darkCyan font-semibold w-max flex-wrap">
      <li
      className="li"
      >{ jobs.postedAt }</li>
      <li className="list-disc">{ jobs.contract }</li>
      <li className="list-disc">{ jobs.location }</li>
    </ul>
  )
} 
export default Footer;