
import React, { useEffect, useState } from "react";
import { Box, Grid, Button, Center, Spinner } from "@chakra-ui/react";
import AdminPropertyCard from "../Components/AdminPropertyCard";
import EditProperty from "../Components/EditProperty"; // Import the EditProperty component
import AddProperty from "../Components/AddProperty";
import { useDisclosure } from "@chakra-ui/react";
import axios from "axios";



const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const AdminPage = () => {
  const [properties, setProperties] = useState([]);
  const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure(); // State for AddProperty modal
  const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure(); // State for EditProperty modal
  const [editingProperty, setEditingProperty] = useState(null); // State to hold the property being edited
  const [loading, setLoading] = useState(false);

  const getPropertiesFromApi = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/property`);
      console.log(response.data);
      setProperties(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getPropertiesFromApi();
  }, [])

  // Function to handle editing a property
  const handleEdit = (property) => {
    setEditingProperty(property); // Set the property to be edited
    onEditOpen(); // Open the EditProperty modal
  };


  // Function to handle deleting a property
  const handleDelete = async (id) => {
    try {
      let token = localStorage.getItem('real-estate-token');

      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      let response = await axios.delete(`${API_BASE_URL}/property/${id}`, config);
      console.log(response.data);
      getPropertiesFromApi();
    } catch (error) {
      console.log(error);
    }
  };

  // Function to refresh the property list after adding or editing a property
  const refreshProperties = () => {
    getPropertiesFromApi();
  };

  return (
    <Box p={6} bg="gray.50" minH="100vh">
      {/* Spinner displayed when loading is true */}
      {loading && (
        <Center>
          <Spinner size="xl" color="teal.500" />
        </Center>
      )}

      {/* Add Property Modal */}
      <AddProperty isOpen={isAddOpen} onClose={onAddClose} refresh={refreshProperties} />

      <Center mb={8}>
        <Button hidden={loading} colorScheme="teal" size="md" onClick={onAddOpen}>
          Add Property
        </Button>
      </Center>

      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
        {properties.map((property) => (
          <AdminPropertyCard
            key={property._id}
            property={property} // Pass the entire property object
            onEdit={() => handleEdit(property)} // Pass the edit handler
            onDelete={() => handleDelete(property._id)} // Pass the delete handler
          />
        ))}
      </Grid>

      {/* Edit Property Modal */}
      {editingProperty && (
        <EditProperty
          isOpen={isEditOpen}
          onClose={onEditClose}
          propertyData={editingProperty} // Pass the property data to the EditProperty component
          refresh={refreshProperties}
        />
      )}
    </Box>
  );
};

export default AdminPage;
