import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://duet-cdn.vox-cdn.com/thumbor/0x0:1320x880/750x500/filters:focal(660x440:661x441):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt="GmailLogo"
        />
      </div>
      <div className="header_middle">
        <SearchIcon />
        <input placeholder="Search Mail" type="text" />
        <ArrowDropDownIcon className="header__inputCaret" />
      </div>
      <div className="header_right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
