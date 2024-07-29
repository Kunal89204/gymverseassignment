import axios from 'axios';

export const createAuthSlice = (set) => ({
    userState: JSON.parse(localStorage.getItem('userState')) || false,
    setUser: (userData, role) => {
        // Update local storage only if userData is provided and different from existing userState

        if (!userData) {
            set({ userState: false })
            localStorage.removeItem('userState');
        } else {
            if (!localStorage.getItem('userState')) {

                localStorage.setItem('userState', JSON.stringify(userData));
                axios.post(`https://gymverseassignment.onrender.com/auth`, {
                    authId: userData.id,
                    fullname: userData.fullName,
                    email: userData.emailAddresses[0].emailAddress,
                    role:role
                })
                    .then((response) => {
                        console.log('User data:', response.data);
                        set({ userState: userData });
                    })
                    .catch((error) => {
                        console.error('Error updating user data:', error);
                    });
            }
        }
    },
    clearUser: () => {
       
        set({ userState: false });
    }
});
