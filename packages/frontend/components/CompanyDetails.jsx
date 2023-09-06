const CompanyDetails = ({ company }) => (
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
  </Box>
);
