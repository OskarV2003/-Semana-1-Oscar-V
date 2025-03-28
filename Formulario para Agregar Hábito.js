import { useState } from 'react';
import axios from 'axios';

const AddHabit = () => {
    const [habitName, setHabitName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        
        await axios.post('/api/habits', { name: habitName }, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        // Reiniciar el formulario
        setHabitName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Habit Name"
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
                required
            />
            <button type="submit">Add Habit</button>
        </form>
    );
};

export default AddHabit;
