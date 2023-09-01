// pages/companies.js

import { ChakraProvider } from '@chakra-ui/react';
import CompanyList from '../components/CompanyList';

const companies = [
  {
    id: 1,
    name: 'Azure',
    email: 'azure@example.com',
    image: `https://source.unsplash.com/random?${encodeURIComponent(
      'Azure Devops'
    )}`,
  },
  {
    id: 2,
    name: 'Gmail',
    email: 'gmail@example.com',
    image: `https://source.unsplash.com/random?${encodeURIComponent('Gmail')}`,
  },
  // ... add more companies as needed.
];

const CompaniesPage = () => (
  <ChakraProvider>
    <CompanyList companies={companies} />
  </ChakraProvider>
);

export default CompaniesPage;
