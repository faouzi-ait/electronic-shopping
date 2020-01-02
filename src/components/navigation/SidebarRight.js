import React from "react";
import { RightNavContainer } from "./SidebarRightStyles";
import { Image, ItemTitle, ItemCount } from "./SidebarRightStyles";

export default function SidebarRight() {
  return (
    <RightNavContainer>
      <div>
        <Image src="resources/product-images/img/product-0.png" alt="stuff" />
        <ItemTitle>google pixel - black</ItemTitle>
        <ItemCount>amount: 1</ItemCount>
      </div>
      <div>
        <Image src="resources/product-images/img/product-1.png" alt="stuff" />
        <ItemTitle>samsung- silver</ItemTitle>
        <ItemCount>amount: 1</ItemCount>
      </div>
      <div>
        <Image src="resources/product-images/img/product-2.png" alt="stuff" />
        <ItemTitle>htc - dark night</ItemTitle>
        <ItemCount>amount: 1</ItemCount>
      </div>
    </RightNavContainer>
  );
}
