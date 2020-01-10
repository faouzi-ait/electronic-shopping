import React, { useContext } from "react";
import { DataContext } from "../../context/context";
import { RightNavContainer } from "./SidebarRightStyles";
import { Image, ItemTitle, ItemCount } from "./SidebarRightStyles";

export default function SidebarRight() {
  const [, , menuToggles] = useContext(DataContext);
  const url_image = "./resources/product-images/img/";

  console.log(menuToggles.cart.get);

  return (
    <RightNavContainer>
      {menuToggles.cart.get.map((item, index) => (
        <div key={index}>
          <Image
            src={`${url_image}${item.fields.image.fields.file.url}`}
            alt="stuff"
          />
          <ItemTitle>{item.fields.title}</ItemTitle>
          <ItemCount>amount: 1</ItemCount>
        </div>
      ))}
    </RightNavContainer>
  );
}
