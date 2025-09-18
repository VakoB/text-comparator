import styled from "styled-components";
import logo from "../assets/logo.svg";
import widthShrinkerArror from "../assets/width-shrinker-arrow.svg";
import checkIcon from "../assets/check.svg";
import textDiffIcon from "../assets/text-difference.svg";
import arrowRight from "../assets/arrow-right.svg";
import microphoneIcon from "../assets/mic.svg";
import bookIcon from "../assets/book.svg";
import volumeIcon from "../assets/volume.svg";
import type NavItemProps from "../types/NavItemProps";
import userImage from "../assets/user-image.svg";
import dotsMenu from "../assets/dots-menu.svg";
import burgerMenu from "../assets/burger-menu.svg";
import expandArrow from "../assets/expand-arrow.svg";
import checkIconBlack from "../assets/check-black.svg";

const HeaderWrapper = styled.header`
  background-color: #132450;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    height: 60px;
    width: 100%;
    flex-direction: row;
  }
`;

const Burger = styled.div`
  display: none;
  cursor: pointer;
  text-align: end;
  align-content: center;
  margin-right: 18px;
  margin-left: auto;
  @media (max-width: 768px) {
    display: block;
  }
`;

const MainHeaderItems = styled.div`
  background-color: #132450;
  width: 240px;
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  padding-left: 13px;
  align-items: start;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: unset;
  }
`;

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 51px;
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ArrowImage = styled.img`
  align-self: flex-end;
  margin-right: 27px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const CustomList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const CustomListItem = styled.li<NavItemProps>`
  position: relative;
  display: flex;
  color: white;
  align-content: center;
  gap: 9px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0%;
  vertical-align: middle;
  align-items: center;
  padding-block: 14px;
  padding-left: 11px;
  border-radius: 25px 0 0 25px;
  ${(props) =>
    props.selected &&
    `background-color: white;
     color: #132450;

     &::before {
      content: "";
      position: absolute;
      top: -10px;
      right: 0;
      background-color: #132450;
      width: 16px;
      height: 10px;
      border-radius: 0 0 100% 0;
      z-index: 1;
    }

    &::after {
      content: "";
      position: absolute;
      top: -10px;
      right: 0;
      background-color: white;
      width: 16px;
      height: 10px;
    }
   `}
  &:hover {
    cursor: pointer;
  }
`;

const CustomListItemWrapper = styled.div<NavItemProps>`
  position: relative;
  ${(props) =>
    props.selected &&
    `
     &::before {
      content: "";
      position: absolute;
      bottom: -10px;
      right: 0;
      background-color: #132450;
      width: 16px;
      height: 10px;
      border-radius: 0 100% 0 0;
      z-index: 1;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      right: 0;
      background-color: white;
      width: 16px;
      height: 10px;
    }
   `}
`;

const Logo = styled.img`
  margin-left: 11px;
`;

const Account = styled.div`
  border-top: 1px solid #9eb9ff33;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 12px 0 14px;
  justify-content: space-between;
  margin-top: auto;
  padding-block: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const UsernameAndImage = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const MobileMenu = styled.div`
  background-color: white;
  display: none;
  height: 72px;
  border-bottom: 1px solid #ededed;
  align-items: center;
  padding-inline: 16px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export default function NavBar() {
  return (
    <>
      <HeaderWrapper>
        <MainHeaderItems>
          <ArrowImage
            src={widthShrinkerArror}
            alt="width shrinker arrow"
          ></ArrowImage>
          <Logo src={logo} alt="logo" />

          <Navbar>
            <CustomList>
              <CustomListItemWrapper>
                <CustomListItem>
                  <img src={checkIcon} alt="check" />
                  მართლმწერი
                </CustomListItem>
              </CustomListItemWrapper>

              <CustomListItemWrapper selected>
                <CustomListItem selected>
                  <img src={textDiffIcon} alt="text difference" />
                  ტექსტის შედარება
                </CustomListItem>
              </CustomListItemWrapper>

              <CustomListItemWrapper>
                <CustomListItem>
                  <img src={microphoneIcon} alt="check" />
                  ხმა <img src={arrowRight} alt="right arrow" /> ტექსტი
                </CustomListItem>
              </CustomListItemWrapper>

              <CustomListItemWrapper>
                <CustomListItem>
                  <img src={volumeIcon} alt="check" />
                  ტექსტი <img src={arrowRight} alt="right arrow" /> ხმა
                </CustomListItem>
              </CustomListItemWrapper>

              <CustomListItemWrapper>
                <CustomListItem>
                  <img src={bookIcon} alt="check" />
                  PDF კონვერტაცია
                </CustomListItem>
              </CustomListItemWrapper>
            </CustomList>
          </Navbar>
        </MainHeaderItems>
        <Account>
          <UsernameAndImage>
            <img src={userImage} alt="user image" />
            <p>თამარ ონიანი</p>
          </UsernameAndImage>

          <img src={dotsMenu} alt="dots menu" />
        </Account>
        <Burger>
          <img src={burgerMenu} alt="burger menu" />
        </Burger>
      </HeaderWrapper>
      <MobileMenu>
        <MobileMenuItem>
          <img src={checkIconBlack} alt="check icon" />
          <span>ტექსტის შედარება</span>
          <img src={expandArrow} alt="expand arrow" />
        </MobileMenuItem>
      </MobileMenu>
    </>
  );
}
