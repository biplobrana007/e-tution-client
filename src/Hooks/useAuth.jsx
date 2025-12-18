import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const useAuth = () => {
    const appInfo = use(AuthContext)
    return appInfo
};

export default useAuth;