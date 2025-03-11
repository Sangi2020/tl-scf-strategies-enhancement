import { create } from 'zustand';

const useTestimonialStore = create((set) => ({
    testimonials: [],
    loading: false,
    error: null,

    fetchTestimonials: async () => {
        set({ loading: true, error: null });
        try {
            const response = await fetch('https://scf-cms-be-360l.onrender.com/api/v1/web/contents/testimonials');
            if (!response.ok) throw new Error('Failed to fetch testimonials');
            const data = await response.json();
            set({ testimonials: data?.data || [], loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    }
}));

export default useTestimonialStore;
