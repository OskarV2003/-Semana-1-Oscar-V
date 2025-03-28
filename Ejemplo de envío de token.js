import axios from 'axios';

const fetchHabits = async () => {
    const token = localStorage.getItem('token'); // Obtener el token desde localStorage
    const response = await axios.get('/api/habits', {
        headers: {
            Authorization: `Bearer ${token}`, // Enviar el token en el encabezado
        },
    });

    console.log(response.data);
};
