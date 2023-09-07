import {
  Flex,
  Heading,
  Box,
  Text,
  Button,
  Spacer,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" alignItems="center" bg={'#f96332'}>
      <Heading as="h1">Welcome , Arcgate Secure</Heading>
      <Spacer />

      <HStack spacing="20px">
        <Icon as={MoonIcon} />
        <Box bg="gray.200" p="10px">
          P
        </Box>
        <Text>pradhyuman@arcgate.com</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>

    // <Flex bg="gray.200" justify="space-between" wrap="wrap" gap={2}>
    //   <Box w="150px" h="50px" bg="red">1</Box>
    //   <Box w="150px" h="50px" bg="blue">2</Box>
    //   <Box w="150px" flexGrow="1" h="50px" bg="green">3</Box>
    //   <Box w="150px" flexGrow="2" h="50px" bg="yellow">4</Box>
    // </Flex>
  );
}
