import { Card } from "../components/card/Card";
// import { SideItem } from "../components/sideItem/SideItem"
// import { cartArray } from "../constants";
// import { sideArray } from "../constants"
import { SideList } from "../components/SideList/SideList";
import { useOutletContext } from "react-router-dom";
export const Home = () => {
  const {products}=useOutletContext()
 
  
  return (
    <>
      <section className="content">
        <div className="container">
          <div className="content-box">
            <div className="content-main">
              <h2 className="content-main_title">Рекомендации для вас</h2>
              <div className="content-main_list">
                {products.map((card) => (
                  <Card
                    key={card.id}
                    id={card.id}
                    name={card.name}
                    title={card.title}
                    price={card.price}
                    img={card.img}
                    address={card.address}
                  />
                ))}
              
              </div>
            </div>
            <div className="content-side">
              <h3 className="content-side_title">Сервисы и услуги</h3>
              <div className="content-side_box">
                <div className="content-side_list">
                  <SideList />
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
    </>
  );
};
