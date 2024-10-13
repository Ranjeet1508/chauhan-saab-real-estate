// import React from 'react';
// import { Box, Flex, HStack, IconButton, useDisclosure, Stack, Heading, Link } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
// import { Link as RouterLink, useLocation } from 'react-router-dom';

// const themeColors = {
//   primary: '#00796b', // Teal
//   secondary: '#03a9f4', // Light Blue
//   accent: '#0288d1', // Darker Blue (similar to LinkedIn blue)
//   dark: '#01579b', // Dark Blue
//   newAccent: '#00bcd4' // Teal/Aquamarine
// };

// const Navbar = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const location = useLocation();

//   return (
//     <Box bg={themeColors.primary} px={4}>
//       <Flex h={16} alignItems="center" justifyContent="space-between">
//         <Heading as="h1" size="lg" color="white">
//           Chauhan Properties {/* Replace with your real estate brand name */}
//         </Heading>

//         <IconButton
//           size="md"
//           icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//           aria-label="Open Menu"
//           display={{ md: 'none' }}
//           onClick={isOpen ? onClose : onOpen}
//           color="white"
//         />

//         <HStack spacing={8} alignItems="center" display={{ base: 'none', md: 'flex' }}>
//           <Link
//             as={RouterLink}
//             to="/"
//             px={2}
//             py={1}
//             rounded={'md'}
//             _hover={{ bg: themeColors.accent, transition: 'background-color 0.2s' }}
//             color={location.pathname === "/" ? themeColors.secondary : "white"}
//             aria-current={location.pathname === "/" ? "page" : undefined}
//           >
//             Home
//           </Link>
//           <Link
//             as={RouterLink}
//             to="/properties"
//             px={2}
//             py={1}
//             rounded={'md'}
//             _hover={{ bg: themeColors.accent, transition: 'background-color 0.2s' }}
//             color={location.pathname === "/properties" ? themeColors.secondary : "white"}
//             aria-current={location.pathname === "/properties" ? "page" : undefined}
//           >
//             Properties
//           </Link>
//           <Link
//             as={RouterLink}
//             to="/services"
//             px={2}
//             py={1}
//             rounded={'md'}
//             _hover={{ bg: themeColors.accent, transition: 'background-color 0.2s' }}
//             color={location.pathname === "/services" ? themeColors.secondary : "white"}
//             aria-current={location.pathname === "/services" ? "page" : undefined}
//           >
//             Services
//           </Link>
//           <Link
//             as={RouterLink}
//             to="/login"
//             px={2}
//             py={1}
//             rounded={'md'}
//             _hover={{ bg: themeColors.accent, transition: 'background-color 0.2s' }}
//             color={location.pathname === "/login" ? themeColors.secondary : "white"}
//             aria-current={location.pathname === "/login" ? "page" : undefined}
//           >
//             Login
//           </Link>
//         </HStack>
//       </Flex>

//       {isOpen ? (
//         <Box pb={4} display={{ md: 'none' }}>
//           <Stack as={'nav'} spacing={4}>
//             <Link
//               as={RouterLink}
//               to="/"
//               px={2}
//               py={1}
//               rounded={'md'}
//               _hover={{ bg: themeColors.accent, transition: 'background-color 0.2s' }}
//               color={location.pathname === "/" ? themeColors.secondary : "white"}
//               aria-current={location.pathname === "/" ? "page" : undefined}
//             >
//               Home
//             </Link>
//             <Link
//               as={RouterLink}
//               to="/properties"
//               px={2}
//               py={1}
//               rounded={'md'}
//               _hover={{ bg: themeColors.accent, transition: 'background-color 0.2s' }}
//               color={location.pathname === "/properties" ? themeColors.secondary : "white"}
//               aria-current={location.pathname === "/properties" ? "page" : undefined}
//             >
//               Properties
//             </Link>
//             <Link
//               as={RouterLink}
//               to="/services"
//               px={2}
//               py={1}
//               rounded={'md'}
//               _hover={{ bg: themeColors.accent, transition: 'background-color 0.2s' }}
//               color={location.pathname === "/services" ? themeColors.secondary : "white"}
//               aria-current={location.pathname === "/services" ? "page" : undefined}
//             >
//               Services
//             </Link>
//             <Link
//               as={RouterLink}
//               to="/login"
//               px={2}
//               py={1}
//               rounded={'md'}
//               _hover={{ bg: themeColors.accent, transition: 'background-color 0.2s' }}
//               color={location.pathname === "/login" ? themeColors.secondary : "white"}
//               aria-current={location.pathname === "/login" ? "page" : undefined}
//             >
//               Login
//             </Link>
//           </Stack>
//         </Box>
//       ) : null}
//     </Box>
//   );
// };

// export default Navbar;


import React from 'react';
import { Box, Flex, HStack, IconButton, useDisclosure, Stack, Heading, Link } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const themeColors = {
  primary: '#00796b', // Teal
  secondary: '#03a9f4', // Light Blue
  accent: '#0288d1', // Darker Blue (similar to LinkedIn blue)
  dark: '#01579b', // Dark Blue
  newAccent: '#00bcd4' // Teal/Aquamarine
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  
  // Check if user is logged in by checking for the presence of real-estate-token in local storage
  const isLoggedIn = Boolean(localStorage.getItem('real-estate-token'));

  return (
    <Box bg={themeColors.primary} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading as="h1" size="lg" color="white">
          Chauhan Properties {/* Replace with your real estate brand name */}
        </Heading>

        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          color="white"
        />

        <HStack spacing={8} alignItems="center" display={{ base: 'none', md: 'flex' }}>
          <Link
            as={RouterLink}
            to="/"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{ bg: themeColors.accent, transition: 'background-color 0.2s' }}
            color={location.pathname === "/" ? themeColors.secondary : "white"}
            aria-current={location.pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>
          <Link
            as={RouterLink}
            to="/properties"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{ bg: themeColors.accent, transition: 'background-color 0.2s' }}
            color={location.pathname === "/properties" ? themeColors.secondary : "white"}
            aria-current={location.pathname === "/properties" ? "page" : undefined}
          >
            Properties
          </Link>
          <Link
            as={RouterLink}
            to="/services"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{ bg: themeColors.accent, transition: 'background-color 0.2s' }}
            color={location.pathname === "/services" ? themeColors.secondary : "white"}
            aria-current={location.pathname === "/services" ? "page" : undefined}
          >
            Services
          </Link>
          {isLoggedIn ? (
            <Link
              as={RouterLink}
              to="/admin"
              px={2}
              py={1}
              rounded={'md'}
              _hover={{ bg: themeColors.accent, transition: 'background-color 0.2s' }}
              color={location.pathname === "/admin" ? themeColors.secondary : "white"}
              aria-current={location.pathname === "/admin" ? "page" : undefined}
            >
              Admin
            </Link>
          ) : (
            <Link
              as={RouterLink}
              to="/login"
              px={2}
              py={1}
              rounded={'md'}
              _hover={{ bg: themeColors.accent, transition: 'background-color 0.2s' }}
              color={location.pathname === "/login" ? themeColors.secondary : "white"}
              aria-current={location.pathname === "/login" ? "page" : undefined}
            >
              Login
            </Link>
          )}
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <Link
              as={RouterLink}
              to="/"
              px={2}
              py={1}
              rounded={'md'}
              _hover={{ bg: themeColors.accent, transition: 'background-color 0.2s' }}
              color={location.pathname === "/" ? themeColors.secondary : "white"}
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              Home
            </Link>
            <Link
              as={RouterLink}
              to="/properties"
              px={2}
              py={1}
              rounded={'md'}
              _hover={{ bg: themeColors.accent, transition: 'background-color 0.2s' }}
              color={location.pathname === "/properties" ? themeColors.secondary : "white"}
              aria-current={location.pathname === "/properties" ? "page" : undefined}
            >
              Properties
            </Link>
            <Link
              as={RouterLink}
              to="/services"
              px={2}
              py={1}
              rounded={'md'}
              _hover={{ bg: themeColors.accent, transition: 'background-color 0.2s' }}
              color={location.pathname === "/services" ? themeColors.secondary : "white"}
              aria-current={location.pathname === "/services" ? "page" : undefined}
            >
              Services
            </Link>
            {isLoggedIn ? (
              <Link
                as={RouterLink}
                to="/admin"
                px={2}
                py={1}
                rounded={'md'}
                _hover={{ bg: themeColors.accent, transition: 'background-color 0.2s' }}
                color={location.pathname === "/admin" ? themeColors.secondary : "white"}
                aria-current={location.pathname === "/admin" ? "page" : undefined}
              >
                Admin
              </Link>
            ) : (
              <Link
                as={RouterLink}
                to="/login"
                px={2}
                py={1}
                rounded={'md'}
                _hover={{ bg: themeColors.accent, transition: 'background-color 0.2s' }}
                color={location.pathname === "/login" ? themeColors.secondary : "white"}
                aria-current={location.pathname === "/login" ? "page" : undefined}
              >
                Login
              </Link>
            )}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
