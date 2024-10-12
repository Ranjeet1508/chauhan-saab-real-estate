import React from 'react';
import {
  Box,
  Flex,
  Grid,
  Heading,
  Button,
  useDisclosure,
  Center
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'; // Importing RouterLink
import PropertyCard from '../Components/PropertyCard';
import AddProperty from '../Components/AddProperty';
import image1 from '../Assets/real-estate-1.jpg';
import image2 from '../Assets/real-estate-2.jpg';
import image3 from '../Assets/real-estate-3.jpg'

// Sample properties array
const properties = [
  {
    id: 1,
    homeImage: image1,
    roomImage: image2,
    title: 'Luxury Villa in Beverly Hills',
    price: '$5,200,000',
    description: 'A beautiful villa with stunning views of the city.',
  },
  {
    id: 2,
    homeImage: image2,
    roomImage: image3,
    title: 'Modern Apartment in New York',
    price: '$2,300,000',
    description: 'A sleek and modern apartment in the heart of the city.',
  },
  {
    id: 3,
    homeImage: image3,
    roomImage: image1,
    title: 'Cozy House in San Francisco',
    price: '$1,900,000',
    description: 'A charming house in a quiet neighborhood.',
  },
  {
    id: 4,
    homeImage: image1,
    roomImage: image2,
    title: 'Luxury Villa in Beverly Hills',
    price: '$5,200,000',
    description: 'A beautiful villa with stunning views of the city.',
  },
  {
    id: 5,
    homeImage: image2,
    roomImage: image3,
    title: 'Modern Apartment in New York',
    price: '$2,300,000',
    description: 'A sleek and modern apartment in the heart of the city.',
  },
  {
    id: 6,
    homeImage: image3,
    roomImage: image1,
    title: 'Cozy House in San Francisco',
    price: '$1,900,000',
    description: 'A charming house in a quiet neighborhood.',
  },
  // Add more properties here...
];

const PropertiesPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box p={6} bg="gray.50" minH="100vh">
      <Center mb={8}>
        <Button colorScheme="teal" size="md" onClick={onOpen}>
          Add Property
        </Button>
      </Center>

      <AddProperty isOpen={isOpen} onClose={onClose} />

      <Box px={'6rem'}>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              homeImage={property.homeImage}
              roomImage={property.roomImage}
              title={property.title}
              price={property.price}
              description={property.description}
            />
          ))}
        </Grid>
      </Box>

    </Box>
  );
};


export default PropertiesPage;
