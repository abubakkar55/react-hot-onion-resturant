import React, { createContext } from 'react'
import useFirebase from './../../Hooks/useFirebase';
import useOthers from './../../Hooks/useOthers';

export const AllContext = createContext();

const AllProvider = ({ children }) => {
    const fireBaseContext = useFirebase();
    const othersContext = useOthers();
    return (
        <AllContext.Provider value={{ fireBaseContext, othersContext }}>
            {children}
        </AllContext.Provider>
    )
}

export default AllProvider
