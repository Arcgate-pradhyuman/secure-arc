import React, { useState } from 'react';
import { Box, Image, Text, Stack, Flex, Button } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';

const CompanyCard = ({ company, onSelect }) => (
  <Flex
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    alignItems="center"
    p={4}
    spacing={4}
    cursor="pointer"
    onClick={() => onSelect(company)}
  >
    <Box boxSize="60px">
      <Image
        src={company.image}
        alt={company.name}
        objectFit="cover"
        boxSize="full"
      />
    </Box>
    <Stack spacing={2} ml={4}>
      <Text fontWeight="bold">{company.name}</Text>
      <Text fontSize="sm">{company.email}</Text>
    </Stack>
  </Flex>
);

const CompanyDetails = ({ company, onBack }) => (
  <Box p={4} borderWidth="1px" borderRadius="lg">
    <Image
      src={company.image}
      alt={company.name}
      objectFit="cover"
      w="full"
      maxH="200px"
    />
    <Text fontWeight="bold" mt={2}>
      {company.name}
    </Text>
    <Text mt={2}>{company.email}</Text>
    {/* <Button mt={4} onClick={onBack}>
            Back to List
        </Button> */}
  </Box>
);

const CompanyList = ({ companies }) => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem as="main" colSpan="2" p="40px">
        {companies.map((company) => (
          <CompanyCard
            key={company.id}
            company={company}
            onSelect={setSelectedCompany}
          />
        ))}
      </GridItem>

      <GridItem as="aside" colSpan="4" bg="white" minHeight="100vh" p="30px">
        {selectedCompany ? (
          <CompanyDetails
            company={selectedCompany}
            onBack={() => setSelectedCompany(null)}
          />
        ) : (
          <div></div>
        )}
      </GridItem>
    </Grid>
  );
};

export default CompanyList;
