
export default function Image(props) {

  let { src, height, width, alt } = props;

  if(!height && !width && src) {
    return <img src={src} alt={alt || ""}/>
  }

  if(!height && width) {
    height = width;
  } else if(!width && height) {
    width = height;
  }

  if(!src) src = "https://via.placeholder.com/" + height + "?text=This+image+seems+to+be+broken";

  return (
    <img src={src} alt={alt} height={height} width={width} style={{ 'borderRadius': '10%' }} />
  )
}
