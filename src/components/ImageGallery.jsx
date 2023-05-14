import { LiList } from "./ImageGalleryItem"
export const ListGallery = ({mass}) => {
    return(
        <ul className="gallery">
            {mass.map(item => (
            <LiList id={item.id} src={item.userImageURL} alt={item.description}></LiList>
            ))}
</ul>
    )
}