import React from "react";
import Wrapper from "./HamburgerMenu.style";
import {
  LogoArea,
  HamburgerMenuList,
  HamburgerMenuButtonList,
  PartnerButton,
  GetAppButton,
  LoginButton,
  LogoutButton,
} from "./HamburgerMenu.style";

import HamburgerLogo from "./assets/hamburger-logo.svg";
import Categories from "./assets/categories.svg";
import MyOrders from "./assets/package.svg";
import Profile from "./assets/user.svg";
import ForwardArrow from "./assets/forward-arrow.svg";

const HamburgerMenu = () => {
  return (
    <Wrapper>
      <LogoArea>
        <figure>
          <img src={HamburgerLogo} alt="Hamburger logo" />
        </figure>
        <p>a product of Shimahin Ltd.</p>
      </LogoArea>
      <HamburgerMenuList>
        <ul>
          <li className="item item-1">
            <div className="item-left">
              <figure>
                <img src={Categories} alt="menu icon" />
              </figure>

              <span>All Categories</span>
            </div>
            <figure className="arrow-icon">
              <img src={ForwardArrow} alt="arrow icon" />
            </figure>
          </li>
          <li className="item item-2">
            <div className="item-left">
              <figure>
                <img src={MyOrders} alt="menu icon" />
              </figure>
              <span>My Orders</span>
            </div>
            <figure className="arrow-icon">
              <img src={ForwardArrow} alt="arrow icon" />
            </figure>
          </li>
          <li className="item item-3">
            <div className="item-left">
              <figure>
                <img src={Profile} alt="menu icon" />
              </figure>
              <span>My Profile</span>
            </div>
            <figure className="arrow-icon">
              <img src={ForwardArrow} alt="arrow icon" />
            </figure>
          </li>
        </ul>
      </HamburgerMenuList>
      <HamburgerMenuButtonList>
        <PartnerButton>
          <a className="btn-link" href="#">Partner with DeliveryHobe!</a>
        </PartnerButton>
        <p>Want offers & discounts?</p>
        <GetAppButton>
          <a className="btn-link" href="#">Install App!</a>
        </GetAppButton>
        <LoginButton>
          <a className="btn-link" href="#">Login / Sign Up</a>
        </LoginButton>
        {/* <LogoutButton>
          <a className="btn-link" href="#">Logout</a>
        </LogoutButton> */}
      </HamburgerMenuButtonList>
    </Wrapper>
  );
};

export default HamburgerMenu;
