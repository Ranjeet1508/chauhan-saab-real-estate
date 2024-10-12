import React from 'react'
import {
    Box,
    Heading,
    Flex,
    VStack,
    Text,
    Input,
    Textarea,
    Button
} from '@chakra-ui/react'

const Contact = () => {
    return (
        <Box py={12} px={6} bg="gray.50" h={'90vh'}>
            <Heading textAlign="center" mb={8} fontSize={{ base: "2xl", md: "3xl" }} color="#0077B5" letterSpacing="wide">
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
                        <Text ms={2} color="gray.500" fontSize={{ base: "sm", md: "md" }}>+1 123-456-7890</Text>
                    </Flex>
                    <Flex alignItems={"center"}>
                        <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>Email:</Text>
                        <Text ms={2} color="gray.500" fontSize={{ base: "sm", md: "md" }}>contact@realestate.com</Text>
                    </Flex>
                    <Flex alignItems={"center"}>
                        <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>Address:</Text>
                        <Text ms={2} color="gray.500" fontSize={{ base: "sm", md: "md" }}>123 Real Estate St, Beverly Hills, CA 90210</Text>
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
                        bg="#3182CE"  // Light Blue
                        _hover={{ bg: '#0077B5' }}  // Hover to LinkedIn Blue
                        color="white"
                    >
                        Send Message
                    </Button>
                </VStack>
            </Flex>
        </Box>
    )
}

export default Contact
