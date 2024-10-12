import React from 'react';
import { Box, Heading, Text, VStack, Image, Button, Flex } from '@chakra-ui/react';
import qrCodeImage from '../Assets/qrcode.jpg'; // Replace with your actual QR code image

const Services = () => {
    return (
        <Box py={12} px={6} bg="gray.50">
            {/* Main Content */}
            <VStack spacing={8} maxW="800px" mx="auto" textAlign="center">
                <Heading as="h1" size="2xl" color="#0077B5" fontWeight="bold">
                    Our Services
                </Heading>
                <VStack spacing={6} align="stretch">
                    <Text textAlign={'left'} fontSize="md" color="gray.700">
                        <strong>Rent Properties:</strong> Browse a variety of rental homes and apartments tailored to your preferences.
                    </Text>
                    <Text textAlign={'left'} fontSize="md" color="gray.700">
                        <strong>Buy Properties:</strong> We offer premium listings at competitive market prices to help you find your dream home.
                    </Text>
                    <Text textAlign={'left'} fontSize="md" color="gray.700">
                        <strong>Sell Properties:</strong> List your property with us and get the best price with minimal commission.
                    </Text>
                </VStack>
            </VStack>

            {/* Donation Section (Side by Side Layout) */}
            <Box py={12} px={6} maxW="1000px" mx="auto" mt={12} bg="white" borderRadius="md" boxShadow="lg">
                <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
                    {/* Left: Text Section */}
                    <VStack align="start" spacing={4} w={{ base: '100%', md: '50%' }} textAlign={{ base: 'center', md: 'left' }}>
                        <Heading as="h2" size="lg" color="#0077B5" fontWeight="bold">
                            Support Us
                        </Heading>
                        <Text fontSize="md" color="gray.600">
                            If you find this website helpful, please consider supporting us by making a small donation. Your generosity will help us continue improving our services and keeping this platform operational.
                        </Text>
                        <Button
                            size="lg"
                            bg="#3182CE"
                            color="white"
                            _hover={{ bg: '#0077B5' }}
                            onClick={() => window.open('upi://pay?pa=ranjeetramdulare1999@oksbi&pn=Ramdulare&am=100&cu=INR', '_blank')}  // Replace with actual payment link
                        >
                            Donate Now
                        </Button>
                        
                    </VStack>

                    {/* Right: QR Code Section */}
                    <Flex justify="center" w={{ base: '100%', md: '40%' }} mt={{ base: 8, md: 0 }}>
                        <Image
                            src={qrCodeImage}
                            alt="QR Code for Donation"
                            boxSize={{ base: '300px', md: '350px' }}  // Increased size for larger display
                            objectFit="contain"
                        />
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};

export default Services;
