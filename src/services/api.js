import axios from "axios";

const api = axios.create({
  baseURL: "https://pcn662vet2.execute-api.us-east-1.amazonaws.com/dev/disciplina",
});

export default api; 