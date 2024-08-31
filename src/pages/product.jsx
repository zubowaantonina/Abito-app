import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
// import { SideItem } from "../components/sideItem/SideItem";
import { SideList } from "../components/SideList/SideList";


export const Product = () => {
    const {products}=useOutletContext()
    const { id } = useParams();
    const findProduct=products.find((p)=>p.id===+id)
  return (
    <>
      {/* <Header />
      <main>
        <section className="search">
          <div className="container">
            <div className="search-box">
              <input type="text" />
              <button className="btn btn-primary search-btn">
                <img
                  src="/img/search.svg"
                  alt="search"
                  className="search-btn_icon"/>
                <span className="search-btn_text">Найти</span>
              </button>
            </div>
          </div>
        </section> */}
        <section className="content">
          <div className="container">
            {findProduct?
              <div className="content-box">
              <div className="content-product">
                <div className="content-product__left">
                  <h2 className="content-product_title">{findProduct.title}</h2>
                  <img
                    className="content-product__img"
                    src={findProduct.img}
                    alt="product-img"/>
                  <p className="content-product__text">
                   {findProduct.description}
                  </p>
                </div>
                <div className="content-product__right">
                  <h2 className="content-product_price">{findProduct.price}</h2>
                  <button className="btn btn-primary btn-large">
                    Показать телефон
                  </button>
                </div>
              </div>
              <div className="content-side">
                <h3 className="content-side_title">Сервисы и услуги</h3>
                <div className="content-side_box">
                  <div className="content-side_list">
                    <SideList/>
                    {/* {sideArray.map((item) => (
                      <SideItem
                        key={item.id}
                        title={item.title}
                        img={item.img}
                        text={item.text}
                      />
                    ))} */}
                  </div>
                  <div className="content-side_footer">
                    <p className="content-side_footer-item">
                      © ООО «Абито», 2011–2021
                    </p>
                    <Link to={"/"}  className="content-side_footer-item">
                      Политика конфиденциальности
                    </Link>
                    <Link to={"/"}  className="content-side_footer-item">
                      Обработка данных
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            :
           <h2>такого товара не существует</h2>
        }
          
          </div>
        </section>
      {/* </main> */}
    </>
  );
};
