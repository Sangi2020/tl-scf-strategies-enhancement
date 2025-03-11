import { create } from 'zustand';
import axios from 'axios';

const usePrivacyStore = create((set) => ({
    title: '',
    content: '',
    fetchPrivacy: async () => {
        try {
            const response = await axios.get('https://scf-cms-be-360l.onrender.com/api/v1/web/document/get-privacy');
            const { title, content } = response.data.document;
            set({ title, content });
        } catch (error) {
            console.error('Error fetching terms:', error);
        }
    }
}));

export default usePrivacyStore;
