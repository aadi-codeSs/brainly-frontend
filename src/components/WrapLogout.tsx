import { Navigate } from "react-router-dom";

interface LogoutRouteProps {
    children: React.ReactElement
}
export const LogoutRoute = (props: LogoutRouteProps) => {
    if()
        return <Navigate to="/signin" replace />;

}