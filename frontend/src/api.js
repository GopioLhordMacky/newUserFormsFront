const BASE_URL = "http://localhost:8080"; // Replace with your backend's base URL

// Utility function to handle fetch requests
const apiFetch = async (url, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      headers: {
        "Content-Type": "application/json", // Ensure the backend accepts JSON
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      // Handle HTTP errors
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json(); // Parse JSON response
  } catch (error) {
    console.error("API fetch error:", error);
    throw error;
  }
};

// Register a user
export const registerUser = async (userData) => {
  return await apiFetch("/API/register", {  // Corrected the endpoint to /API/register
    method: "POST",
    body: JSON.stringify(userData),
  });
};

// Login a user
export const loginUser = async (credentials) => {
  return await apiFetch("/API/login", {  // Corrected the endpoint to /API/login
    method: "POST",
    body: JSON.stringify(credentials),
  });
};
