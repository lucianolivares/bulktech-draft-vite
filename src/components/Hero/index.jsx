import {
  FlexColumn,
  Title,
  Description,
  Img,
  LinkLabel
} from './styles'

export default function Hero ({
  title,
  description,
  link,
  img,
  altImage,
  dark,
  imgFirst,
  marginTop
}) {
  return (
    <FlexColumn dark={dark} marginTop={marginTop}>
      <Title>{title}</Title>
      <Description dark={dark}>{description}</Description>
      <LinkLabel to={link} imgFirst={imgFirst}>
        Ver más...
      </LinkLabel>
      <Img src={img} alt={altImage} imgFirst={imgFirst} />
    </FlexColumn>
  )
}
