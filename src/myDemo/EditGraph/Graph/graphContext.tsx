import React, { createContext, useRef } from 'react';
import { Graph } from '@antv/g6';

export const graphContext = createContext<{
    ref: {
        graph?: Graph, 
    },
    state: {
        zoom?: number;
    }
}>({
    ref: {
        graph: {} as Graph,
    },
    state: {
        zoom: 1
    }
})

const GraphContext:React.FC = ({ children }) => {
    const graphRef = useRef<Graph>({} as Graph);
    const graphRefState = useRef<{
        zoom?: number;
    }>({
        zoom: 1
    });
    return <graphContext.Provider
        value={{
            ref: {
                graph: graphRef.current
            },
            state: graphRefState.current,
        }}
    >
        {children}
    </graphContext.Provider>
}
export default GraphContext;