export const LiList = ({src,id,alt}) => {
    return(
        <li key={id} className="gallery-item">
  <img src={src} alt={alt} />
</li>
    )
}