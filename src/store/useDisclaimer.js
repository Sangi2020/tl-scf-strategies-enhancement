import { create } from 'zustand';
import axios from 'axios';

const useDisclaimer = create((set) => ({
    title: '',
    content: '',
    fetchDisclaimer: async () => {
        try {
            const response = await axios.get('https://scf-cms-be-360l.onrender.com/api/v1/web/document/get-desclaimer');
            const { title, content } = response.data.document;
            set({ title, content });
        } catch (error) {
            console.error('Error fetching terms:', error);
        }
    }
}));

export default useDisclaimer;
