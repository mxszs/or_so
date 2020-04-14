import React, { createContext, useRef, MutableRefObject, useState } from 'react';
import { Graph } from '@antv/g6';
import eventBus from '@/myDemo/util/eventBus';

type graphContextType = {
    ref: MutableRefObject<{
        graph: Graph;
    }>;
    state: MutableRefObject<{
        zoom?: number;
        isEdit?: boolean;
        setIsEdit?: (value: boolean) => void;
    }>,
    bus: any
}


export const graphContext = createContext<graphContextType>(null)

const GraphContextProvider:React.FC = ({ children }) => {
    const ref = useRef({
        graph: ''
    });
    const [isEdit, setIsEdit] = useState<boolean>(false)

    const state = useRef<{
        zoom?: number;
        isEdit?: boolean;
        setIsEdit?: (value: boolean) => void;
    }>({
        zoom: 1,
        isEdit: isEdit,
        setIsEdit,
    });
    state.current.isEdit = isEdit
    state.current.setIsEdit = setIsEdit
    
    const bus = useRef(eventBus)

    return <graphContext.Provider
        value={{
            ref,
            state,
            bus,
        }}
    >
        {children}
    </graphContext.Provider>
}
export default GraphContextProvider;