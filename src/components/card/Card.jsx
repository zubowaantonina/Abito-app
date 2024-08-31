import './Card.css'
export const Card=({title, price,address, date, img})=>{
    return(
      <a href="/product.html" class="card">
      <div class="card--img">
        <img src={img} alt="card" />
      </div>
      <h5 class="card--title">
       {title}
      </h5>
      <strong class="card--price">{price}</strong>
      <div class="card--desc-box">
        <span class="card--desc">
        {address}
        </span>
        <span class="card--desc">{date}</span>
      </div>
  </a>
              
    )
}