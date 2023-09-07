import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';

export default function Favorites() {
  const boxStyle = {
    p: '10px',
    bg: 'purple.400',
    filter: 'blur(7px)',
    ':hover': {
      color: 'black',
      bg: 'blue.200',
    },
  };
  return (
    <SimpleGrid spacing={10} columns={4} margin={10}>
      <Box bg={'white'} h={'200px'} border={'1px solid'}>
        {' '}
      </Box>
      <Box bg={'white'} h={'200px'} border={'1px solid'}>
        {' '}
      </Box>
      <Box bg={'white'} h={'200px'} border={'1px solid'}>
        {' '}
      </Box>
      <Box bg={'white'} h={'200px'} border={'1px solid'}>
        {' '}
      </Box>

      <Box bg={'white'} h={'200px'} border={'1px solid'}>
        {' '}
      </Box>
      <Box bg={'white'} h={'200px'} border={'1px solid'}>
        {' '}
      </Box>
      <Box bg={'white'} h={'200px'} border={'1px solid'}>
        {' '}
      </Box>
      <Box bg={'white'} h={'200px'} border={'1px solid'}>
        {' '}
      </Box>

      <Box bg={'white'} h={'200px'} border={'1px solid'}>
        {' '}
      </Box>
      <Box bg={'white'} h={'200px'} border={'1px solid'}>
        {' '}
      </Box>
      <Box bg={'white'} h={'200px'} border={'1px solid'}>
        {' '}
      </Box>
      <Box bg={'white'} h={'200px'} border={'1px solid'}>
        {' '}
      </Box>
    </SimpleGrid>
    // <Container as="section" maxWidth={"md"} py={"20px"}>
    //     <Heading>Chakra UI Component</Heading>
    //     <Text>fgdjndfjvn</Text>
    //     <Box my={"30px"} bg={"orange"} p={"30px"}>
    //         <Text color={"white"}>here is some text</Text>
    //     </Box>
    //     <Box sx={boxStyle}>
    //         trial
    //     </Box>
    // </Container>
  );
}
