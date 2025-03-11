import axios from 'axios';
import { create } from 'zustand';

const useCompanyStore = create((set) => ({
    logoUrl: '',
    location: '',
    companymail: '',
    phone: '',
    mapUrl: '',

    setCompanyData: (data) => set({
        logoUrl: data.logo,
        location: data.location,
        companymail: data.email,
        phone: data.phone,
        mapUrl: data.mapUrl,
    }),

    fetchCompanyDetails: async () => {
        try {
            const response = await axios.get("https://scf-cms-be-360l.onrender.com/api/v1/admin/company/settings");           
            if (!response.data) {
                throw new Error("Failed to fetch company details");
            }
            
            const { data } = response.data
            set({
                logoUrl: data.logo,  
                location: data.location,
                companymail: data.email,
                phone: data.phone,
                mapUrl: data.mapUrl,
            });
        } catch (error) {
            console.error("Error fetching company details:", error);
        }
    }
}));

export default useCompanyStore;
