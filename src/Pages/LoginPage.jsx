import React, { useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Text,
    Alert,
    AlertIcon,
    Spinner,
    useDisclosure,
    useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const LoginPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(''); // Error state
    const toast = useToast();
    console.log(API_BASE_URL)

    const onSubmit = async (data) => {
        setLoading(true); // Start loading
        setError(''); // Clear previous errors
        const {email, password} = data;
        
        console.log(API_BASE_URL)
        try {
            const response = await axios.post(`${API_BASE_URL}/auth/login`,{email, password} );
            const data = response.data;
            console.log(data);

            // You can use toast for a better UX
            toast({
                title: "Login Successful",
                description: "You have successfully logged in.",
                status: "success",
                duration: 4000,
                isClosable: true,
            });

            // Handle further navigation or saving token, etc.
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please try again.');
        } finally {
            setLoading(false); // Stop loading
        }
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
                                    {errors.email && (
                                        <Alert status="error">
                                            <AlertIcon />
                                            {errors.email.message}
                                        </Alert>
                                    )}
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        type="password"
                                        placeholder="********"
                                        {...register('password', { required: 'Password is required' })}
                                    />
                                    {errors.password && (
                                        <Alert status="error">
                                            <AlertIcon />
                                            {errors.password.message}
                                        </Alert>
                                    )}
                                </FormControl>

                                <Button
                                    mt={5}
                                    type="submit"
                                    colorScheme="teal"
                                    isLoading={loading} // Button shows spinner while loading
                                >
                                    {loading ? <Spinner size="sm" /> : 'Login'}
                                </Button>
                            </Stack>
                        </form>

                        {/* Error alert */}
                        {error && (
                            <Alert status="error" mt={4}>
                                <AlertIcon />
                                {error}
                            </Alert>
                        )}
                    </Box>
                </Stack>

                {/* Success alert */}
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
