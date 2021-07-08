import Product from './Product'
import './Home.css'

function Home () {
    return (
        <div className="home">
            <image className="home__image"
            src="./images/637607302308923604_F-C1_1200x300" alt ="logo"  />
              <h2>SẢN PHẨM KHUYẾN MÃI</h2>
           <div className="home__row">
              <Product
                 id="121314"
                 title="Dell G3 15 3500B i7 10750H"
                 price_sale="30.990.000đ"  
                 price="31.990.000₫"         
                 rating="***"
                 image="https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/9/9/637352595657145902_dell-g3500-den-dd.png"                           
               />
               <Product
                 id="121314"
                 title="Laptop ASUS Gaming TUF FX516PE HN005T i7 11370H"
                 price_sale="29.290.000₫" 
                 price="29.990.000₫"
                 rating="****"
                 image="https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/1/637607742719191819_asus-tuf-gaming-fx516-xam-dd.jpg"
               />
               <Product
                 id="121314"
                 title="Laptop IdeaPad Slim 3 15ITL6 i5 1135G7"
                 price_sale="17.290.000₫" 
                 price="17.990.000₫"
                 rating="****"
                 image="https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/3/19/637517684143067081_hp-envy-13-ba-vang-dd-icon.jpg"               
               />
               <Product
                 id="121314"
                 title="Laptop Acer Nitro Gaming AN515 56 51N4 i5 11300H"
                 price_sale="21.990.000₫" 
                 price="23.990.000₫"
                 rating="****"
                 image="https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/25/637602410593977135_acer-nitro-an515-55-den-dd.jpg"               
               />
               
           </div>
           <h2>SẢN PHẨM HOT NHẤT</h2>
           <div className="home__row">
              <Product
                 id="121314"
                 title="Laptop Dell Inspiron N5405 R5 4500U"
                 price_sale="17.090.000₫"
                 rating="****"
                 image="https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/20/637597845539022507_DELL%20Inspiron%20N5405%20dd.jpg"               
               />
               <Product
                 id="121314"
                 title="Laptop Asus TUF Gaming FX506LH HN002T i5 10300"
                 price_sale="21.990.000₫"
                 rating="***"
                 image="https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/2/25/637498497194722384_FA506LH-LI-dd.jpg"               
               />
               <Product
                   id="121314"
                   title="Laptop Acer Swift 3 SF314 59 568P i5 1135G7"
                   price_sale="19.990.000₫"
                   rating=""
                   image="https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/3/15/637514152445385296_acer-swift-3-sf314-59-bac-dd.jpg"
                 />
               <Product
                   id="121314"
                   title="Lenovo Legion 5 15IMH05 i5 10300H"
                   price_sale="23.490.000đ"
                   rating=""
                 image="https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/1/637371843730399179_lenovo-legion-5-15imh05-den-dd.png"
               />
               </div>
           <h2>SẢN PHẨM BÁN TRẢ GÓP</h2>
           <div className="home__row">
           <Product
                 id="121314"
                 title="Laptop Dell Vostro V5502 i5 1135G7"
                 price_sale="21.890.000₫"               
                 rating="****"
                 image="https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/12/9/637431275535493793_dell-vostro-v5502-xam-dd.png"
                   />
                 <Product
                  id="121314"
                  title="Laptop Asus Vivobook D515DA EJ711T R3 3250U"
                  price_sale="12.490.000₫"
                  rating="****"
                 image="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/9/9/637352595657145902_dell-g3500-den-dd.png"               
               />
               <Product
                   id="121314"
                   title="Laptop Acer Swift 3x SF314 510G 57MR i5 1135G7"
                   price_sale="22.990.000₫"
                   rating=""
                 image="https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/2/24/637497626702516153_acer-swift-3-sf314-510g-vang-dd.jpg"
                 />
               <Product
                 id="121314"
                 title="Laptop Lenovo Legion 5 15ACH6 R5 5600H"
                 price_sale="32.990.000₫"
                 rating=""
                 image="https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/2/637608341262426434_lenovo-legion-5-15ach6-dd-logo.jpg"
             />
             </div>
        </div>
    )
}
export default Home