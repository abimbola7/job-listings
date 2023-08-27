const Card = (props) => {
  return (
    <div className={`${props.className} max-w-6xl bg-white rounded-lg px-2 py-2 mx-auto shadow-xl`}>
      { props.children }
    </div>
  )
}

export default Card;