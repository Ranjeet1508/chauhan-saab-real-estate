import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Spinner,
  Center,
  useBreakpointValue
} from '@chakra-ui/react';
import PropertyCard from '../Components/PropertyCard';
import axios from 'axios';



const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPropertiesFromApi = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/property`);
      setProperties(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getPropertiesFromApi();
  }, [])

  // Breakpoint for column count based on screen size
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <Box p={{ base: 4, md: 6 }} bg="gray.50" minH="100vh">
      {/* Spinner displayed when loading is true */}
      {loading && (
        <Center>
          <Spinner size="xl" color="teal.500" />
        </Center>
      )}
      
      <Box px={{ base: 2, md: '4rem', lg: '6rem' }}>
        <Grid
          templateColumns={`repeat(${columns}, 1fr)`} // Responsive columns
          gap={6}
        >
          {properties.map((property) => (
            <PropertyCard
              key={property._id}
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
