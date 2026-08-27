import axios from 'axios';
import { create } from 'zustand';

const COMPANY_PHONE = '2394015310';

const useCompanyStore = create((set) => ({
    logoUrl: '',
    location: '',
    companymail: '',
    phone: COMPANY_PHONE,
    mapUrl: '',

    setCompanyData: (data) => set({
        logoUrl: data.logo,
        location: data.location,
        companymail: data.email,
        phone: COMPANY_PHONE,
        mapUrl: data.mapUrl,
    }),

    fetchCompanyDetails: async () => {
        try {
            const response = await axios.get("https://scf-cms-be-360l.onrender.com/api/v1/admin/company/settings");
            if (!response.data) {
                throw new Error("Failed to fetch company details");
            }

            const { data } = response.data;
            set({
                logoUrl: data.logo,
                location: data.location,
                companymail: data.email,
                phone: COMPANY_PHONE,
                mapUrl: data.mapUrl,
            });
        } catch (error) {
            console.error("Error fetching company details:", error);
            set({
                logoUrl: '',
                location: '',
                companymail: '',
                phone: COMPANY_PHONE,
                mapUrl: '',
            });
        }
    }
}));

export default useCompanyStore;
