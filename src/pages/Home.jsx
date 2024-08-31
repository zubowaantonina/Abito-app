import { Header } from "../components/header/Header"
import { Card } from "../components/card/Card"
import { SideItem } from "../components/sideItem/SideItem"
import {cartArray} from '../constants'
import { sideArray } from "../constants"
export const Home=()=>{
    return(
<>
<Header/>

  <main>
    <section className="search">
      <div className="container">
        <div className="search-box">
          <input type="text" />
          <button className="btn btn-primary search-btn">
            <img src="/img/search.svg" alt="search" className="search-btn_icon" />
            <span className="search-btn_text">Найти</span>
          </button>
        </div>
      </div>
    </section>
    <section className="content">
      <div className="container">
        <div className="content-box">
          <div className="content-main">
            <h2 className="content-main_title">Рекомендации для вас</h2>
            <div className="content-main_list">
               {
                cartArray.map((card)=>(
                   <Card
                   key={card.id}
                   name={card.name}
                   title={card.title}
                   price={card.price}
                   img={card.img}
                   address={card.address}
                   />
                ))
               
               }
            {/* <Card/> */}
            </div>
          </div>
          <div className="content-side">
            <h3 className="content-side_title">Сервисы и услуги</h3>
            <div className="content-side_box">
              <div className="content-side_list">

               {
                sideArray.map((item)=>(
                  <SideItem
                  key={item.id}
                  title={item.title}
                  img={item.img}
                  text={item.text}
                  />
                ))
               }
               
              </div>
              <div className="content-side_footer">
                <p className="content-side_footer-item">
                  © ООО «Абито», 2011–2021
                </p>
                <a href="#!" className="content-side_footer-item">
                  Политика конфиденциальности
                </a>
                <a href="#!" className="content-side_footer-item">
                  Обработка данных
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</>
    )
}