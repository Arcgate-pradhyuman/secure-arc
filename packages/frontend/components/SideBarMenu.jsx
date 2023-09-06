import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';

export default function SideBarMenu() {
  return (
    <Menu>
      <MenuButton
        colorScheme="white"
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        SecureArc
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
}
