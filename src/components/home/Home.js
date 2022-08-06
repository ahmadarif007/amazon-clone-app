import React from "react";
import "./Home.css";
import Product from "../product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          // src="https://media-exp1.licdn.com/dms/image/C4E1BAQHlVnB8lpLufA/company-background_10000/0/1598436487176?e=2159024400&v=beta&t=WGp5i8-tPPAG740MJyiR1CkFdu9VaZ24T2Id8ywrIFY"
          // src="https://penji.co/wp-content/uploads/2020/01/amazon-facebook-cover-photo.jpg"
          // src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?w=2000"
          src="https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg"
          alt="cover img"
        />
        <div className="home__row">
          <Product
            title=" After we receive the item at our fulfillment center, allow up to seven business days for the refund amount to show up in your account."
            price={20.12}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg"
          />
          <Product
            title="You can return items within 30 days of receipt of delivery in Your Orders."
            price={20.12}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
          />
          <Product
            title="After we receive the item at our fulfillment center, allow up to seven business days for the refund amount to show up in your account."
            price={20.12}
            rating={5}
            img="https://m.media-amazon.com/images/I/81A40fe4mtL._AC_SY200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="You can return items within 30 days of receipt of delivery in Your Orders. It can take up to 25 days for an item to reach us once you return it."
            price={20.12}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
          />
          <Product
            title="You can return items within 30 days of receipt of delivery in Your Orders. It can take up to 25 days for an item to reach us once you return it."
            price={20.12}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="You can return items within 30 days of receipt of delivery in Your Orders. It can take up to 25 days for an item to reach us once you return it. After we receive the item at our fulfillment center, allow up to seven business days for the refund amount to show up in your account. You can return items within 30 days of receipt of delivery in Your Orders. It can take up to 25 days for an item to reach us once you return it. After we receive the item at our fulfillment center, allow up to seven business days for the refund amount to show up in your account."
            price={20.12}
            rating={5}
            img="https://m.media-amazon.com/images/I/81yovBQqGgL._AC_SY200_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
