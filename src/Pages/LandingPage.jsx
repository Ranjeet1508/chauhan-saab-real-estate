import React from 'react';
import { Box, Button, Heading, Text, Stack, Image, Flex, VStack, Input, Textarea, Link as ChakraLink } from '@chakra-ui/react';
import { motion } from 'framer-motion';  // Import motion from framer-motion for animation
import image0 from '../Assets/real-estate-0.jpg';
import image1 from '../Assets/real-estate-1.jpg';
import image2 from '../Assets/real-estate-2.jpg';
import image3 from '../Assets/real-estate-3.jpg';
import image4 from '../Assets/real-estate-4.jpg';
import image5 from '../Assets/real-estate-5.jpg';
import image6 from '../Assets/real-estate-6.jpg';
import image7 from '../Assets/real-estate-7.jpg';
import image8 from '../Assets/real-estate-8.jpg';
import FeatureProperty from '../Components/FeatureProperty';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);  // Create motion-enabled Box component

const LandingPage = () => {
    return (
        <Box>
            {/* Hero Section */}
            <Flex
                align="center"
                justify="center"
                bgImage={image0}
                bgPos="center"
                bgSize="cover"
                h="100vh"
                color="white"
                position="relative"
            >
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    w="100%"
                    h="100%"
                    bgGradient="linear(to-r, rgba(0,0,0,0.7), rgba(0,0,0,0.1))"
                    zIndex="1"
                />
                <VStack spacing={6} zIndex="2" textAlign="center" maxW="xl">
                    <Heading as="h1" size="2xl" fontWeight="bold" letterSpacing="wide" textTransform="uppercase">
                        Discover Your Dream Home
                    </Heading>
                    <Text fontSize="lg" color="gray.200">
                        Find the perfect property for you and your family. We provide the best properties with transparent deals and premium customer support.
                    </Text>
                    <ChakraLink as={RouterLink} to={'/properties'}>
                        <Button
                            size="lg"
                            colorScheme="teal"
                            color="white"
                            fontWeight="bold"
                            px={8}
                            py={6}
                        >
                            View Properties
                        </Button>

                    </ChakraLink>

                </VStack>
            </Flex>

            {/* Featured Properties Section */}
            <Box py={12} bg="gray.100">
                <Heading textAlign="center" mb={10} fontSize="3xl" color={'teal'} letterSpacing="wide">
                    Featured Properties
                </Heading>
                <Flex justify="center" wrap="wrap" maxW="1200px" mx="auto" gap={6}>
                    {/* Add a slight hover effect to property cards */}
                    <MotionBox whileHover={{ scale: 1.05 }}>
                        <FeatureProperty
                            homeImage={image0}
                            title="Home & Plot in Unnao"
                            price="₹10,00,000 - ₹25,00,000"
                            description="A beautiful home with stunning views of the city."
                        />
                    </MotionBox>
                    <MotionBox whileHover={{ scale: 1.05 }}>
                        <FeatureProperty
                            homeImage={image1}
                            title="Modern House in Chakalwansi"
                            price="₹2,300,000"
                            description="A sleek and modern house in the heart of the chakalwansi."
                        />
                    </MotionBox>
                    <MotionBox whileHover={{ scale: 1.05 }}>
                        <FeatureProperty
                            homeImage={image2}
                            title="Cozy House in Pooran Nagar Unnao"
                            price="₹1,900,000"
                            description="A charming house in a quiet neighborhood."
                        />
                    </MotionBox>
                    <MotionBox whileHover={{ scale: 1.05 }}>
                        <FeatureProperty
                            homeImage={image3}
                            title="Residential Plot near Abbaspur"
                            price="₹5,200,000"
                            description="A beautiful villa with stunning views of the city."
                        />
                    </MotionBox>
                    <MotionBox whileHover={{ scale: 1.05 }}>
                        <FeatureProperty
                            homeImage={image4}
                            roomImage={image5}
                            title="House in Lok Nagar"
                            price="₹5,200,000"
                            description="A beautiful house with stunning access of the city."
                        />
                    </MotionBox>
                    <MotionBox whileHover={{ scale: 1.05 }}>
                        <FeatureProperty
                            homeImage={image5}
                            title="Modern Apartment in Civil Line Unnao"
                            price="₹2,300,000"
                            description="A sleek and modern apartment in the heart of the city."
                        />
                    </MotionBox>
                    <MotionBox whileHover={{ scale: 1.05 }}>
                        <FeatureProperty
                            homeImage={image7}
                            title="Residential House in Bangarmau"
                            price="₹1,900,000"
                            description="A charming house in a quiet neighborhood."
                        />
                    </MotionBox>
                    <MotionBox whileHover={{ scale: 1.05 }}>
                        <FeatureProperty
                            homeImage={image8}
                            title="Residential Land in Unnao"
                            price="₹5,200,000"
                            description="A beautiful land with stunning views of the city."
                        />
                    </MotionBox>
                </Flex>
            </Box>

            {/* About Section */}
            <Box bg="white" py={12}>
                <Flex maxW="1200px" mx="auto" direction={{ base: 'column', md: 'row' }} align="center">
                    <Box flex="1">
                        <Image
                            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                            alt="About Us"
                            rounded="md"
                            objectFit="cover"
                            w="100%"
                            h={{ base: "300px", md: "400px" }}
                        />
                    </Box>
                    <Box flex="1" p={6}>
                        <Heading as="h2" size="xl" mb={4} color={'teal'} fontWeight="bold" letterSpacing="wide">
                            About Us
                        </Heading>
                        <Text fontSize="lg" mb={4} color="gray.600">
                            Welcome to our real estate platform! We offer a range of properties for **rent**, **purchase**, and **sale**, all at reasonable prices with minimum commission rates. Whether you're looking for your next home, a rental property, or want to sell your property, we are here to provide transparent and reliable services.
                        </Text>
                        <Button
                            size="md"
                            colorScheme='teal'
                            fontWeight="bold"
                        >
                            Learn More
                        </Button>
                    </Box>
                </Flex>
            </Box>

            {/* Contact Section */}
            <Box py={12} bg="gray.100">
                <Heading textAlign="center" mb={8} fontSize={{ base: "2xl", md: "3xl" }} color="teal" letterSpacing="wide">
                    Get in Touch
                </Heading>
                <Flex
                    justify="space-between"
                    maxW="1000px"
                    mx="auto"
                    direction={{ base: "column", md: "row" }}
                    align="flex-start"
                    p={8}
                    borderRadius="md"
                    bg="white"
                    boxShadow="lg"
                >
                    {/* Contact Details */}
                    <VStack
                        align="start"
                        spacing={4}
                        w={{ base: "100%", md: "45%" }}
                        mb={{ base: 8, md: 0 }}
                    >
                        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
                            We would love to hear from you! Reach out to us at:
                        </Text>
                        <Flex alignItems={'center'}>
                            <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>Phone:</Text>
                            <Text ms={2} color="gray.500" fontSize={{ base: "sm", md: "md" }}>+91 7860414267</Text>
                        </Flex>
                        <Flex alignItems={"center"}>
                            <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>Email:</Text>
                            <Text ms={2} color="gray.500" fontSize={{ base: "sm", md: "md" }}>contact@realestate.com</Text>
                        </Flex>
                        <Flex alignItems={"center"}>
                            <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>Address:</Text>
                            <Text ms={2} color="gray.500" fontSize={{ base: "sm", md: "md" }}>Village Makhi, Unnao, UttarPradesh</Text>
                        </Flex>
                    </VStack>

                    {/* Contact Form */}
                    <VStack
                        spacing={4}
                        w={{ base: "100%", md: "45%" }}
                        bg="gray.50"
                        p={{ base: 4, md: 6 }}
                        borderRadius="md"
                        boxShadow="md"
                    >
                        <Input placeholder="Your Name" size="md" bg="white" />
                        <Input placeholder="Your Email" size="md" bg="white" />
                        <Textarea placeholder="Your Message" size="md" bg="white" />
                        <Button
                            size="md"
                            w="100%"
                            colorScheme='teal'
                        >
                            Send Message
                        </Button>
                    </VStack>
                </Flex>
            </Box>
        </Box>
    );
};

export default LandingPage;

