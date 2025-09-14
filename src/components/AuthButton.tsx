import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';

const AuthButton = () => {
  const { user, signOut, loading } = useAuth();

  if (loading) {
    return (
      <Button variant="ghost" disabled>
        Loading...
      </Button>
    );
  }

  if (user) {
    return (
      <Button variant="ghost" onClick={signOut} className="flex items-center gap-2">
        <User className="h-4 w-4" />
        Sign Out
        <LogOut className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button asChild variant="default">
      <Link to="/auth">Sign In</Link>
    </Button>
  );
};

export default AuthButton;