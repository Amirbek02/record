import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ComponentType } from 'react';

const checkAuth = (): boolean => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    return !!token;
  }
  return false;
};

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const WithAuthWrapper: React.FC<P> = (props) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const auth = checkAuth();
      setIsAuthenticated(auth);

      if (!auth) {
        router.replace('/sign-in');
      }

      setIsLoading(false);
    }, [router]);

    if (isLoading) {
      return 'Loading...';
    }

    if (!isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthWrapper;
};

export default withAuth;
