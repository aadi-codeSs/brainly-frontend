import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: React.ReactElement
}
export const ProtectedRoute = (props: ProtectedRouteProps) => {
    const token = localStorage.getItem("token");

    if(!token){
        return <Navigate to="/signin" replace />;
    }

    return props.children
}