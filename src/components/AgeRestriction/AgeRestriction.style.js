import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  height: 100vh;
  max-width: 411px;
  background-color: rgba(0, 0, 0, 0.8);
  position: relative;

  .age-bg-video {
    /* max-width: 355px; */
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
    overflow: hidden;

    .age-bg-video-content {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .age-info-area {
    padding: 150px 32px 0;
  }

  h1 {
    margin-bottom: 23px;
    color: #ffe33f;
    /* font-family: Inter; */
    font-weight: 700;
    font-size: 36px;
  }

  p {
    margin-right: 35px;
    color: #ffffff;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 27px;
  }

  .logo-box {
    display: flex;
    justify-content: flex-end;
    margin-top: 20vh;

    figure {
      max-width: 78px;
      max-height: 70px;
      margin-right: 17px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const AgeCalendarForm = styled.div`
  .age-confirmation {
    display: flex;
    justify-content: space-between;
    margin-bottom: 19px;

    input {
      display: inline-block;
      padding: 0 15px;
      margin-right: 8px;
      border: none;
      border-radius: 4px;
      text-transform: uppercase;
      font-family: sans-serif;
      font-weight: 400;
      font-size: 12px;
      color: rgba(85, 35, 51, 0.3);

      flex-basis: 70%;

      &:focus {
        outline: none;
      }

      &::-webkit-datetime-edit-month-field {
        margin-right: 6px;
        margin-left: 6px;
      }

      &::-webkit-datetime-edit-day-field {
        margin-right: 6px;
      }

      &::-webkit-datetime-edit-year-field {
        margin-left: 6px;
      }
    }

    button {
      border: none;
      background-color: transparent;

      flex-basis: 30%;

      a:link,
      a:visited {
        display: inline-block;
        width: 100%;
        text-decoration: none;
        font-size: 12px;
        font-weight: 700;
        color: #0e0e0e;
        padding: 12.5px 27px;
        border-radius: 4px;
        background-color: #cccccc;

        transition: all 0.2s ease-in-out;
      }

      a:focus {
        box-shadow: 0px 0px 5px 4px rgba(255, 227, 63, 0.25);
      }
    }
  }

  .age-not-allowed-btn {
    border: none;
    width: 100%;
    background-color: transparent;
    cursor: pointer;

    a:link,
    a:visited {
      display: inline-block;
      width: 100%;
      text-decoration: none;
      font-size: 12px;
      font-weight: 700;
      color: #ffffff;
      padding: 12.5px 0;
      border-radius: 4px;
      background-color: rgba(244, 244, 244, 0.2);

      transition: all 0.2s ease-in-out;
    }

    a:focus {
      box-shadow: 0px 0px 5px 0 rgba(255, 227, 63, 0.25);
    }
  }

  .age-not-allowed-btn--1 {
    margin-bottom: 15px;

    a:link,
    a:visited {
      color: #0e0e0e;
      border-radius: 4px;
      background-color: #ffe33f;
    }
  }
`;

export default Wrapper;
