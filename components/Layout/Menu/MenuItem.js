import Link from "next/link";
import { Menu } from "semantic-ui-react";
import { MenuItemLink } from "../../Layout/Menu/MenuItemLink";

export default ({ handleToggle }) => {
  return MenuItemLink.map(menuItem => {
    return (
      <Link href={`${menuItem.link}`} key={menuItem.text}>
        <Menu.Item header onClick={handleToggle}>
          {menuItem.text}
        </Menu.Item>
      </Link>
    );
  });
};
