import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button, Image, VStack, Text } from '@chakra-ui/react';
import qrCodeImage from '../Assets/qrcode.jpg'; // Replace with your QR code image

const DonateModal = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Support Us with a Donation</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack spacing={4}>
                        <Text fontSize="md" color="gray.600">
                            We appreciate your support! Please scan the QR code below to donate.
                        </Text>
                        <Image src={qrCodeImage} alt="QR Code for Donation" boxSize="200px" objectFit="contain" />
                        <Button
                            size="lg"
                            bg="#3182CE"
                            color="white"
                            _hover={{ bg: '#0077B5' }}
                            onClick={() => window.open('upi://pay?pa=your-upi@bank&pn=YourName&am=100&cu=INR', '_blank')} // Replace with your actual UPI link
                        >
                            Donate Now
                        </Button>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default DonateModal;
