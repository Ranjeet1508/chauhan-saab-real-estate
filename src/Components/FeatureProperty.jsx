import React, { useState, useEffect } from "react";
import { Box, Image, VStack, Heading, Text } from '@chakra-ui/react';

const FeatureProperty = ({ homeImage, title, price, description }) => {

    return (
        <Box
            bg="white"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="sm"
            maxW="400px" // Fixed max width for the card
            maxH="450px" // Fixed height for the card
            _hover={{ transform: 'scale(1.02)' }}
        >
            {/* Image Slider with sliding transition */}
            <Box position="relative" height="200px" overflow="hidden">
                <Image
                    src={homeImage}
                    alt={title}
                    position="absolute"
                    w="100%"
                    h="250px"
                    objectFit="cover"
                />
            </Box>

            {/* Property details */}
            <VStack p={4} align="start" spacing={3}>
                <Heading as="h3" size="md" color="gray.700">
                    {title}
                </Heading>
                <Text fontWeight="bold" color="teal.500">
                    {price}
                </Text>
                <Text noOfLines={1} color="gray.600">{description}</Text>
            </VStack>
        </Box>
    );
};

export default FeatureProperty;
