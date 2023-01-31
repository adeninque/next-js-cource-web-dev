interface HeadingProps {
  tag?: any
  text: string
}


const Heading = ({tag, text} : HeadingProps) => {
  const Tag = tag || 'h1'
  return(
    <>
      <Tag>{text}</Tag>
    </>
  )
}

export default Heading;