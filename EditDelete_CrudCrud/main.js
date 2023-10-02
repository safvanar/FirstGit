// main.js

// Function to fetch and display user details
async function fetchAndDisplayUserDetails() {
    const userList = document.getElementById('userList');
  
    try {
      const response = await axios.get('https://crudcrud.com/api/235e778bb65e4c3b9b4679bf7b534bc7/appointmentData');
  
      if (response.status !== 200) {
        throw new Error('Failed to fetch data');
      }
  
      const users = response.data;
  
      // Clear the existing list items
      userList.innerHTML = '';
  
      // Iterate through the retrieved users and create list items with delete buttons
      users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name}:${user.email}`;
        
        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteUser(user._id)); // Pass the user ID to the delete function

        // Create an Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit'
        editButton.addEventListener('click', () => {
            deleteUser(user._id);
            document.getElementById('name').value = user.name;
            document.getElementById('email').value = user.email;
        })
        
        // Append the delete button to the list item
        listItem.appendChild(deleteButton);

        // Append the edit button to the list item
        listItem.appendChild(editButton);
  
        // Append the list item to the user list
        userList.appendChild(listItem);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Function to delete a user by ID
  async function deleteUser(userId) {
    try {
      await axios.delete(`https://crudcrud.com/api/235e778bb65e4c3b9b4679bf7b534bc7/appointmentData/${userId}`);
      fetchAndDisplayUserDetails(); // Refresh the list after deleting
    } catch (error) {
      console.error('Error deleting user:', error.message);
    }
  }

  
  // Event listener for form submission
  document.getElementById('my-form').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    try {
      // Send user data to your API endpoint for storage
      await axios.post('https://crudcrud.com/api/235e778bb65e4c3b9b4679bf7b534bc7/appointmentData', { name, email });
  
      // Fetch and display updated user details
      fetchAndDisplayUserDetails();
  
      // Clear the form fields
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  });
  
  // Call the fetchAndDisplayUserDetails function when the page loads
  window.addEventListener('DOMContentLoaded', fetchAndDisplayUserDetails);
  