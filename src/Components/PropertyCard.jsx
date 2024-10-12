// import React, { useState, useEffect } from "react";
// import { Box, Image, VStack, Heading, Text } from '@chakra-ui/react';

// const PropertyCard = ({ homeImage, roomImage, title, price, description }) => {
//     // State to track the current image being displayed
//     const [currentImage, setCurrentImage] = useState(homeImage);
//     const [fade, setFade] = useState(true); // To control the fade-in effect

//     // Function to switch between images with a fade effect
//     const toggleImage = () => {
//         setFade(false); // Start fade-out effect
//         setTimeout(() => {
//             setCurrentImage((prevImage) => (prevImage === homeImage ? roomImage : homeImage));
//             setFade(true); // Start fade-in effect
//         }, 500); // 500ms for fade-out before switching
//     };

//     // Automatically slide the images every 5 seconds
//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             toggleImage();
//         }, 5000); // Switch image every 5 seconds

//         // Cleanup the interval on component unmount
//         return () => clearInterval(intervalId);
//     }, []); // Empty dependency array ensures this effect runs only once on mount

//     return (
//         <Box
//             bg="white"
//             borderWidth="1px"
//             borderRadius="lg"
//             overflow="hidden"
//             boxShadow="sm"
//             maxW="400px" // Fixed max width for the card
//             maxH="450px" // Fixed height for the card
//             transition="transform 0.2s"
//             _hover={{ transform: 'scale(1.02)' }}
//         >
//             {/* Image Slider with smooth transition */}
//             <Image
//                 src={currentImage}
//                 alt={title}
//                 w="100%"
//                 h="200px" // Fixed height for the image
//                 objectFit="cover" // Maintain aspect ratio
//                 cursor="pointer"
//                 onClick={toggleImage} // Allow manual toggle on click
//                 transition="opacity 0.5s ease-in-out" // Smooth fade transition
//                 opacity={fade ? 1 : 0} // Apply fade-in and fade-out
//             />

//             {/* Property details */}
//             <VStack p={4} align="start" spacing={3}>
//                 <Heading as="h3" size="md" color="gray.700">
//                     {title}
//                 </Heading>
//                 <Text fontWeight="bold" color="teal.500">
//                     {price}
//                 </Text>
//                 <Text noOfLines={1} color="gray.600">{description}</Text>
//             </VStack>
//         </Box>
//     );
// };

// export default PropertyCard;


import React, { useState, useEffect } from "react";
import { Box, Image, VStack, Heading, Text } from '@chakra-ui/react';

const PropertyCard = ({ homeImage, roomImage, title, price, description }) => {
    // State to track the current image being displayed
    const [currentImage, setCurrentImage] = useState(homeImage);

    // Function to switch between images
    const toggleImage = () => {
        setCurrentImage((prevImage) => (prevImage === homeImage ? roomImage : homeImage));
    };

    // Automatically slide the images every 5 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            toggleImage();
        }, 5000); // Switch image every 5 seconds

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <Box
            bg="white"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="sm"
            maxW="400px" // Fixed max width for the card
            maxH="450px" // Fixed height for the card
            transition="transform 0.2s"
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
                    transition="transform 0.5s ease-in-out"
                    style={{ transform: currentImage === homeImage ? 'translateX(0)' : 'translateX(-100%)' }}
                />
                <Image
                    src={roomImage}
                    alt={title}
                    position="absolute"
                    w="100%"
                    h="250px"
                    objectFit="cover"
                    transition="transform 0.5s ease-in-out"
                    style={{ transform: currentImage === roomImage ? 'translateX(0)' : 'translateX(100%)' }}
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

export default PropertyCard;
