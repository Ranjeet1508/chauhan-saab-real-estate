import React from "react";
import { Box, VStack, Heading, Text, Button, Icon } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons'; // Import the phone icon

const PropertyCard = ({ location, priceRange, brokerContact, description }) => {
    // Function to handle click and initiate a call
    const handleCall = () => {
        window.location.href = `tel:${brokerContact}`;
    };

    return (
        <Box
            bg="white"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="sm"
            maxW="400px"
            maxH="450px"
            _hover={{ transform: 'scale(1.05)', transition: '0.3s ease' }} // Slight scaling on hover
            transition="0.3s ease"
        >
            {/* Property details */}
            <VStack p={4} align="start" spacing={3}>
                <Heading as="h3" size="md" color="gray.700">
                    {location} - Residential Plot
                </Heading>

                <Text color="gray.600">
                    {description}
                </Text>
                
                <Text fontWeight="bold" color="teal.500">
                    Price Range: {priceRange}
                </Text>

                {/* Get Details button with call icon */}
                <Button
                    leftIcon={<PhoneIcon />} // Adds a phone icon on the left of the text
                    colorScheme="teal"
                    variant="solid"
                    size="md"
                    onClick={handleCall} // Initiates the call
                    _hover={{ bg: 'teal.600', transform: 'scale(1.05)' }} // Changes button color on hover
                    _active={{ transform: 'scale(1.03)' }} // Slight shrink effect on click
                >
                    Get Details
                </Button>
            </VStack>
        </Box>
    );
};

export default PropertyCard;
