import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Divider,
  Alert,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { SocialButtons } from './SocialButtons';
import { signInWithGoogle, isFirebaseConfigured } from '../services/firebase';

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  // Form State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Validation & Error State
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [generalError, setGeneralError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Loading State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  // Dialog for Firebase Missing Config
  const [firebaseDialogOpen, setFirebaseDialogOpen] = useState(false);

  // Validation Logic
  const validateForm = (): boolean => {
    let isValid = true;

    // Validate Username / Email
    if (!username.trim()) {
      setUsernameError('Username or email is required');
      isValid = false;
    } else if (username.includes('@')) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(username.trim())) {
        setUsernameError('Please enter a valid email address');
        isValid = false;
      } else {
        setUsernameError('');
      }
    } else if (username.trim().length < 3) {
      setUsernameError('Username must be at least 3 characters');
      isValid = false;
    } else {
      setUsernameError('');
    }

    // Validate Password
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError('');

    if (validateForm()) {
      setIsSubmitting(true);
      // Per requirements: "No need to implement actual login functionality with the backend."
      setTimeout(() => {
        setIsSubmitting(false);
        setLoginSuccess(true);
      }, 600);
    }
  };

  const handleGoogleLogin = async () => {
    setGeneralError('');

    // Check if Firebase keys are set up in .env
    if (!isFirebaseConfigured()) {
      setFirebaseDialogOpen(true);
      return;
    }

    setIsGoogleLoading(true);
    try {
      const result = await signInWithGoogle();
      // Redirect to new page with accessToken
      navigate('/dashboard', {
        state: {
          accessToken: result.accessToken,
          user: result.user,
        },
      });
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'Google sign-in was cancelled or failed.';
      setGeneralError(errorMessage);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  // Allow simulated token redirect for quick testing when Firebase keys aren't set yet
  const handleSimulatedLogin = () => {
    setFirebaseDialogOpen(false);
    navigate('/dashboard', {
      state: {
        accessToken:
          'mock_oauth2_token_' +
          Math.random().toString(36).substring(2) +
          Date.now().toString(36) +
          '_eyJhbGciOiJSUzI1NiIsImtpZCI6IjEyMzQ1Njc4OTAifQ',
        user: {
          displayName: 'Test Intern User',
          email: 'intern@code3x.tech',
          photoURL: null,
          uid: 'demo_user_123',
        },
      },
    });
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 400,
        mx: 'auto',
        py: { xs: 2, md: 4 },
        px: { xs: 1, sm: 2 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Header */}
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '1.75rem', sm: '2rem' },
            color: '#0f172a',
            mb: 1,
            letterSpacing: '-0.02em',
          }}
        >
          Welcome back!
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#64748b',
            lineHeight: 1.5,
            fontSize: '0.9rem',
          }}
        >
          Simplify your workflow and boost your productivity with Tuga's App. Get started for free.
        </Typography>
      </Box>

      {/* General error alert */}
      {generalError && (
        <Alert severity="error" sx={{ mb: 2, borderRadius: 2 }} onClose={() => setGeneralError('')}>
          {generalError}
        </Alert>
      )}

      {/* Form success notice (client-side validation passed) */}
      {loginSuccess && (
        <Alert severity="success" sx={{ mb: 2, borderRadius: 2 }} onClose={() => setLoginSuccess(false)}>
          Form validation passed successfully! (To view token redirect, use the Google login button below).
        </Alert>
      )}

      {/* Form Elements */}
      <Box component="form" onSubmit={handleFormSubmit} noValidate>
        {/* Username / Email */}
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              if (usernameError) setUsernameError('');
            }}
            error={Boolean(usernameError)}
            helperText={usernameError}
            size="medium"
            disabled={isSubmitting}
            slotProps={{
              htmlInput: { 'aria-label': 'Username' },
            }}
          />
        </Box>

        {/* Password */}
        <Box sx={{ mb: 1 }}>
          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (passwordError) setPasswordError('');
            }}
            error={Boolean(passwordError)}
            helperText={passwordError}
            size="medium"
            disabled={isSubmitting}
            slotProps={{
              htmlInput: { 'aria-label': 'Password' },
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      size="small"
                      sx={{ color: '#94a3b8' }}
                    >
                      {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>

        {/* Forgot Password Link */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2.5 }}>
          <Link
            href="#forgot-password"
            underline="hover"
            sx={{
              fontSize: '0.8rem',
              color: '#64748b',
              fontWeight: 500,
              '&:hover': { color: '#0f172a' },
            }}
          >
            Forgot Password?
          </Link>
        </Box>

        {/* Login Button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={isSubmitting}
          sx={{
            py: 1.4,
            fontSize: '0.95rem',
            borderRadius: '24px',
            backgroundColor: '#000000',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#1e293b',
            },
          }}
        >
          {isSubmitting ? <CircularProgress size={22} color="inherit" /> : 'Login'}
        </Button>
      </Box>

      {/* Divider */}
      <Box sx={{ display: 'flex', alignItems: 'center', my: 2.5 }}>
        <Divider sx={{ flex: 1, borderColor: '#e2e8f0' }} />
        <Typography sx={{ px: 2, fontSize: '0.78rem', color: '#94a3b8', fontWeight: 500 }}>
          or continue with
        </Typography>
        <Divider sx={{ flex: 1, borderColor: '#e2e8f0' }} />
      </Box>

      {/* Social Login Buttons */}
      <SocialButtons onGoogleClick={handleGoogleLogin} isLoading={isGoogleLoading} />

      {/* Register Footer Link */}
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Typography variant="body2" sx={{ fontSize: '0.85rem', color: '#64748b' }}>
          Not a member?{' '}
          <Link
            href="#register"
            underline="hover"
            sx={{
              color: '#0f172a',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Register now
          </Link>
        </Typography>
      </Box>

      {/* Firebase Config Notice Dialog */}
      <Dialog
        open={firebaseDialogOpen}
        onClose={() => setFirebaseDialogOpen(false)}
        slotProps={{
          paper: { sx: { borderRadius: '16px', p: 1 } },
        }}
      >
        <DialogTitle sx={{ fontWeight: 700 }}>Firebase Configuration Required</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ color: '#475569', mb: 2 }}>
            To use live Google Sign-In, please add your Firebase credentials from the Firebase Console to your{' '}
            <code>.env</code> file.
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748b' }}>
            Would you like to continue with <strong>Simulated Demo Mode</strong> to view the post-login Access
            Token redirect page right away?
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setFirebaseDialogOpen(false)} sx={{ color: '#64748b' }}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSimulatedLogin}
            sx={{ backgroundColor: '#000000', color: '#ffffff', '&:hover': { backgroundColor: '#1e293b' } }}
          >
            Open Demo Token Page
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
