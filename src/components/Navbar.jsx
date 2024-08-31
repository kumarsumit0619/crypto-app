import React, { useState } from "react";
import { Button, Menu, Avatar, Typography } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import icon from "../images/crypto-logo.jpg";

const items = [
  {
    key: "home",
    label: <Link to="/">Home</Link>,
    icon: <HomeOutlined />,
  },
  {
    key: "cryptocurrencies",
    label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
    icon: <FundOutlined />,
  },
  {
    key: "exchanges",
    label: <Link to="/exchanges">Exchanges</Link>,
    icon: <MoneyCollectOutlined />,
  },
  {
    key: "news",
    label: <Link to="/news">News</Link>,
    icon: <BulbOutlined />,
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState("1");
  function clickHandler(e) {
    setCurrent(e.key);
  }
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        {/* <Button className="menu-control-container"></Button> */}
      </div>
      <Menu
        theme="dark"
        onClick={clickHandler}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      ></Menu>
    </div>
  );
};

export default Navbar;

{
  /* <Menu theme="dark"> */
}
{
  /* <Menu icon={HomeOutlined} key="home" className="menu-item">
        <Link to="/">Home</Link>
      </Menu>
      <Menu icon={FundOutlined} key="cryptocurrencies" className="menu-item">
        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
      </Menu>
      <Menu icon={MoneyCollectOutlined} key="exchanges" className="menu-item">
        <Link to="/exchanges">Exchanges</Link>
      </Menu>
      <Menu icon={BulbOutlined} key="news" className="menu-item">
        <Link to="/news">News</Link>
      </Menu> */
}
{
  /* </Menu> */
}
