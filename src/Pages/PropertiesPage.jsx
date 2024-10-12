import React from 'react';
import {
  Box,
  Grid,
  Button,
  useDisclosure,
  Center,
  useBreakpointValue
} from '@chakra-ui/react';
import PropertyCard from '../Components/PropertyCard';
import AddProperty from '../Components/AddProperty';

// Sample properties array
const properties = [
  {
    id: 1,
    location: 'Unnao',
    priceRange: '₹5 Lakh - ₹10 Lakh',
    brokerContact: '+91 9876543210',
    description: 'Residential plot available at an affordable price in Unnao. Contact the broker for more details.',
  },
  {
    id: 2,
    location: 'Lucknow',
    priceRange: '₹25 Lakh - ₹40 Lakh',
    brokerContact: '+91 8765432109',
    description: 'Luxury apartment in the heart of the city with modern amenities.',
  },
  {
    id: 3,
    location: 'Kanpur',
    priceRange: '₹15 Lakh - ₹25 Lakh',
    brokerContact: '+91 7654321098',
    description: 'Spacious house in a peaceful neighborhood with great connectivity.',
  },
  {
    id: 4,
    location: 'Noida',
    priceRange: '₹35 Lakh - ₹50 Lakh',
    brokerContact: '+91 6543210987',
    description: 'Modern villa with garden space in a gated community.',
  },
  {
    id: 5,
    location: 'Delhi',
    priceRange: '₹45 Lakh - ₹70 Lakh',
    brokerContact: '+91 5432109876',
    description: 'Penthouse in the city center with panoramic views.',
  },
  {
    id: 6,
    location: 'Agra',
    priceRange: '₹10 Lakh - ₹15 Lakh',
    brokerContact: '+91 4321098765',
    description: 'Affordable residential plot near the main highway.',
  },
  // Add more properties here...
];

const PropertiesPage = () => {

  // Breakpoint for column count based on screen size
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <Box p={{ base: 4, md: 6 }} bg="gray.50" minH="100vh">
      <Box px={{ base: 2, md: '4rem', lg: '6rem' }}>
        <Grid
          templateColumns={`repeat(${columns}, 1fr)`} // Responsive columns
          gap={6}
        >
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              location={property.location}
              priceRange={property.priceRange}
              brokerContact={property.brokerContact}
              description={property.description}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PropertiesPage;
