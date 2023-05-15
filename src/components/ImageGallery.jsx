import { LiList } from "./ImageGalleryItem";

export const ListGallery = ({mass}) => {
  return (
    <ul className="gallery" style={{
        display: 'flex',
        marginTop: 0,
        marginBottom: 0,
        padding: 0,
        width:'1200px',
        listStyle: 'none',
        marginLeft: 'auto',
        marginRight: 'auto'
    }}>
      {mass.map(item => (
        <LiList key={item.id} id={item.id} src={item.largeImageURL} alt={item.tags} />
      ))}
    </ul>
  );
}