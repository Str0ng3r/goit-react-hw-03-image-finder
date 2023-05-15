export const LiList = ({src,id,alt}) => {
    return(
        <li key={id} className="gallery-item" style={{
            listStyleType:'none',
            borderRadius: '2px',
            boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2)0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
        }}>
  <img src={src} alt={alt} style={{
       width: '300px',
       height: '260px',
       objectFit: 'cover',
       transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)'
  }}/>
</li>
    )
}