import React from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Heading,
    useBreakpointValue,
    useDisclosure,
    Alert,
    AlertIcon,
    Text,
    Link as ChakraLink
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';

const LoginPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle the login logic here
        onOpen(); // Show success alert on submit
    };

    return (
        <Box bg='gray.50' h={'90vh'}>
            <Box maxW="lg" mx="auto" py={8} px={4}>
                <Stack spacing={6} align="center">
                    <Text fontSize={'2xl'} mt={4}>
                        This page is only for Admin                        
                    </Text>
                    <Box mt={6} minW={'30vw'} minH={'50vh'} p={6} borderWidth={1} borderRadius="md" boxShadow="md">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Stack spacing={4}>
                                <FormControl isRequired>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        type="email"
                                        placeholder="john.doe@example.com"
                                        {...register('email', { required: 'Email is required' })}
                                    />
                                    {errors.email && <Alert status="error"><AlertIcon />{errors.email.message}</Alert>}
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        type="password"
                                        placeholder="********"
                                        {...register('password', { required: 'Password is required' })}
                                    />
                                    {errors.password && <Alert status="error"><AlertIcon />{errors.password.message}</Alert>}
                                </FormControl>

                                <Button mt={5} type="submit" colorScheme="teal">
                                    Login
                                </Button>

                                {/* <Text mt={4}>
                                    Don't have an account?{' '}
                                    <ChakraLink as={RouterLink} to="/signup" color="teal.500" fontWeight="bold">
                                        sign up
                                    </ChakraLink>
                                </Text> */}
                            </Stack>
                        </form>
                    </Box>
                    {/* <Text mt={4}>
                        forgot password?{' '}
                        <ChakraLink as={RouterLink} to="/forgot-password" color="teal.500" fontWeight="bold">
                            click here
                        </ChakraLink>
                    </Text> */}
                </Stack>

                {isOpen && (
                    <Alert status="success" mt={4}>
                        <AlertIcon />
                        Login successful!
                    </Alert>
                )}
            </Box>
        </Box>
    );
};

export default LoginPage;

