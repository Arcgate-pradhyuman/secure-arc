import { Text, List, ListItem, ListIcon, Box, Spacer } from '@chakra-ui/react';
import {
  CalendarIcon,
  EditIcon,
  AtSignIcon,
  DragHandleIcon,
} from '@chakra-ui/icons';

import Link from 'next/link';
import SideBarMenu from './SideBarMenu';

export default function Sidebar() {
  return (
    <>
      <Text as={'h1'} color="white" fontSize="2.5rem" marginBlockEnd={'50.5'}>
        SecureArc
      </Text>

      <List color="white" fontSize="1.2em" spacing={4}>
        <ListItem>
          <Link href="/profile">
            <ListIcon as={AtSignIcon} color="white" />
            Profile
          </Link>
        </ListItem>

        <Box bg={'white'} border={'1px solid'}>
          {' '}
        </Box>
        <ListItem>
          <Link href="/all-items">
            <ListIcon as={DragHandleIcon} color="white" />
            All Items
          </Link>
        </ListItem>

        <Box bg={'white'} border={'1px solid'}>
          {' '}
        </Box>

        <ListItem>
          <Link href="/favorites">
            <ListIcon as={EditIcon} color="white" />
            Favorites
          </Link>
        </ListItem>

        <Box bg={'white'} border={'1px solid'}>
          {' '}
        </Box>
      </List>
    </>
  );
}
