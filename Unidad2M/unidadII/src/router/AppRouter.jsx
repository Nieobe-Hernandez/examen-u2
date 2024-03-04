import React, { useContext } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import SigInPage from '../modules/auth/SigInPage';
import AuthContext from '../config/context/auth-context';
import AdminLayout from '../components/layout/AdminLayout';

const AppRouter = () => {
    const { user } = useContext(AuthContext);

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                {user.signed ? (
                    <>
                        <Route path='/' element={<AdminLayout />}>
                            {user.roles?.name === "ADMIN_ROLE" && (
                                <Route
                                    path="admin"
                                    element={
                                        <>
                                            {`${user.user.person?.name} ${user.user.person?.surname} ${user.user.person?.lastname ?? ''} - ${user?.roles?.name}`}
                                        </>
                                    }
                                />
                            )}
                            {user.roles?.name === "CLIENT_ROLE" && (
                                <Route
                                    path="client"
                                    element={
                                        <>
                                            {`${user.user.person?.name} ${user.user.person?.surname} ${user.user.person?.lastname ?? ''} - ${user?.roles?.name}`}
                                        </>
                                    }
                                />
                            )}
                            {user.roles?.name === "USER_ROLE" && (
                                <Route
                                    path="user"
                                    element={
                                        <>
                                            {`${user.user.person?.name} ${user.user.person?.surname} ${user.user.person?.lastname ?? ''} - ${user?.roles?.name}`}
                                        </>
                                    }
                                />
                            )}
                        </Route>
                    </>
                ) : (
                    <Route path="/" element={<SigInPage />} />
                )}
                <Route path='/*' element={<>404 not found</>} />
            </>
        )
    );

    return <RouterProvider router={router} />;
};

export default AppRouter;