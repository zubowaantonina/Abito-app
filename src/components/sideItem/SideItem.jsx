import './sideItem.css'

export const SideItem = ({ img, title, text }) => {
    return (
        <div className="content-side_list-item">
            <img src={img} alt="delivery-truck" className="content-side_list-item--img" />
            <h5 className="content-side_list-item--title">{title}</h5>
            <p className="content-side_list-item--text">
                {text}
            </p>
        </div>
    )
}