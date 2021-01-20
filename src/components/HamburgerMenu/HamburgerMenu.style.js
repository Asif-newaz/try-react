import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  max-width: 411px;
  margin: 0 auto;
  background-color: #000000;
`;

export const LogoArea = styled.div`
  padding: 55px 0 40px 22px;

  figure {
    max-width: 75px;
    max-height: 35px;
    margin-bottom: 15px;
    cursor: pointer;

    img {
      height: 100%;
      width: 100%;
    }
  }

  p {
    font-weight: 400;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const HamburgerMenuList = styled.div`
  margin-bottom: 215px;

  ul {
    list-style: none;

    .item {
      display: flex;
      justify-content: space-between;
      position: relative;
      border-bottom: 1px solid rgba(255, 227, 63, 0.1);
      padding: 15px 0;
      cursor: pointer;

      .item-left {
        display: flex;
        align-items: center;
        margin-left: 15px;

        figure {
          max-width: 16px;
          max-height: 18px;

          img {
            height: 100%;
            width: 100%;
          }
        }

        span {
          margin-left: 15px;
          font-weight: 400;
          font-size: 12px;
          color: #ffffff;
        }
      }

      .arrow-icon {
        margin-right: 15px;
      }
    }

    .item-1 {
      border-top: 1px solid rgba(255, 227, 63, 0.1);
    }
  }
`;

export const HamburgerMenuButtonList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 40px;

  .btn-link:link,
  .btn-link:visited {
    display: inline-block;
    text-decoration: none;
    border: none;
    cursor: pointer;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 12px;
  }
`;

export const PartnerButton = styled.button`
  border: none;
  margin-bottom: 10px;
  background-color: transparent;

  a:link,
  a:visited {
    width: 100%;
    padding: 12.5px;
    border: 1px solid #000000;
    border-radius: 4px;
    box-shadow: 0px 0px 5px 4px rgba(255, 227, 63, 0.25);
    background-color: #ffffffff;
    color: #1b1a1a;
    font-weight: 700;
    font-size: 12px;
  }
`;

export const GetAppButton = styled.button`
  border: none;
  margin-bottom: 15px;
  background-color: transparent;

  a:link,
  a:visited {
    width: 100%;
    padding: 12.5px 0;
    background: #ffe33f;
    box-shadow: 0px 0px 5px 4px rgba(255, 227, 63, 0.25);
    border-radius: 4px;
    font-weight: 700;
    font-size: 12px;
    color: #1b1a1a;
  }
`;

export const LoginButton = styled.button`
  background-color: transparent;
  padding: 12.5px 0;
  border: 1px solid #230f0f;
  border-radius: 4px;
  cursor: pointer;

  a:link,
  a:visited {
    width: 100%;
    font-weight: 700;
    font-size: 14px;
    color: #ffffff;
  }
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  padding: 12.5px;
  border: 1px solid #ffaeae;
  border-radius: 4px;
  cursor: pointer;

  a:link,
  a:visited {
    width: 100%;
    font-size: 14px;
    font-weight: 700;
    color: #ffaeae;
  }
`;

export default Wrapper;
