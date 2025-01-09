// import React, { createContext, useReducer } from "react";
// // import { initialState, reducer } from "../../Utility/reducer";

// export const DataContext = createContext();

// export const DataProvider = ({ children, reducer, initialState }) => {
//     return (
//         <DataContext.Provider value={useReducer(reducer, initialState)}>
//             {children}
//         </DataContext.Provider>
//     );
// };

// import {reducer, initialState} from '../../Utility/reducer';
import React, { createContext, useReducer } from "react";

export const DataContext = createContext();

const DataProvider = ({ children, reducer, initialState }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;

// export default DataProvider;


