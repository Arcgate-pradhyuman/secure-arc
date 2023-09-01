import {
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Icon,
  Button,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

export default function Profile({ user }) {
  return (
    <VStack spacing={4} align="center" m={4}>
      <Image
        borderRadius="full"
        boxSize="150px"
        src={user.profileImage}
        alt={`${user.name}'s profile picture`}
      />
      <VStack spacing={1}>
        <Text fontSize="2xl">{user.name}</Text>
        <Text color="gray.600">@{user.username}</Text>
        <Text color="gray.500">{user.email}</Text>
      </VStack>
      <Button leftIcon={<EditIcon />} colorScheme="teal">
        Edit Profile
      </Button>
    </VStack>
  );
}

export const getServerSideProps = async () => {
  let user = {
    profileImage:
      'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    name: 'pradhyuman',
    email: 'pradhyuman@arcgate.com',
    username: 'pradhyuman',
  };

  return { props: { user } };
};
