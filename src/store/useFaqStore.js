import axios from 'axios';
import { create } from 'zustand';

const useFaqStore = create((set) => ({
    faqs: [],
    loading: false,
    error: null,

    fetchFaqs: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get('https://scf-cms-be-360l.onrender.com/api/v1/web/qna/get-faqs');
            if (!response.data) throw new Error('Failed to fetch FAQs');
            const data = response.data
            set({ faqs: data?.data || [], loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    }
}));

export default useFaqStore;
