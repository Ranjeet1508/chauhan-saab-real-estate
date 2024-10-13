import React from "react";
import { Box, VStack, Heading, Text, Button, Icon, HStack } from '@chakra-ui/react';
import { PhoneIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'; // Import the necessary icons

const AdminPropertyCard = ({ property, onEdit, onDelete }) => {
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
                    {property.location} - Residential Plot
                </Heading>

                <Text color="gray.600">
                    {property.description}
                </Text>

                <Text fontWeight="bold" color="teal.500">
                    Price Range: {property.priceRange}
                </Text>

                <Text fontWeight="bold" color="teal.500">
                    Mobile: {property.brokerContact}
                </Text>

                {/* Button Container */}
                <HStack spacing={4} mt={4}>
                    {/* Edit button with edit icon */}
                    <Button
                        leftIcon={<EditIcon />} // Adds an edit icon
                        colorScheme="blue"
                        variant="outline"
                        size="md"
                        onClick={onEdit} // Calls the onEdit function passed as a prop
                        _hover={{ bg: 'blue.100', transform: 'scale(1.05)' }} // Changes button color on hover
                    >
                        Edit
                    </Button>

                    {/* Delete button with delete icon */}
                    <Button
                        leftIcon={<DeleteIcon />} // Adds a delete icon
                        colorScheme="red"
                        variant="outline"
                        size="md"
                        onClick={onDelete} // Calls the onDelete function passed as a prop
                        _hover={{ bg: 'red.100', transform: 'scale(1.05)' }} // Changes button color on hover
                    >
                        Delete
                    </Button>
                </HStack>
            </VStack>
        </Box>
    );
};

export default AdminPropertyCard;
