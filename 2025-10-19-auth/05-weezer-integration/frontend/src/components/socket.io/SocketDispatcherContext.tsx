import { createContext } from "react";

interface SocketDispatcherContextInterface {
    clientId: string
}

const SocketDispatcherContext = createContext<SocketDispatcherContextInterface | null>(null);
export default SocketDispatcherContext;
