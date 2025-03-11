import axios from 'axios';
import { create } from 'zustand';

const useTestimonialStore = create((set) => ({
    testimonials: [],
    loading: false,
    error: null,

    fetchTestimonials: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get('https://scf-cms-be-360l.onrender.com/api/v1/web/contents/testimonials');
            if (!response.data) throw new Error('Failed to fetch testimonials');
            const data = response.data;
            set({ testimonials: data?.data || [], loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    }
}));

export default useTestimonialStore;
