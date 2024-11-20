import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/requests';

export const fetchRequests = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const createRequest = async (request) => {
  const response = await axios.post(API_BASE_URL, request);
  return response.data;
};

export const updateRequest = async (id, updatedRequest) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, updatedRequest);
  return response.data;
};

export const deleteRequest = async (id) => {
  await axios.delete(`${API_BASE_URL}/${id}`);
};
