const Description = ({picture, movie}) => {
  return (
    <div className="description-container">
      <img src={picture} alt="NASA Picture of the day" className="picture-of-the-day"/>
    </div>
  )
}

export default Description;