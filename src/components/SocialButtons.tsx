import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';

interface SocialButtonsProps {
  onGoogleClick: () => void;
  isLoading?: boolean;
}

export const SocialButtons: React.FC<SocialButtonsProps> = ({ onGoogleClick, isLoading = false }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 1.5 }}>
      {/* Google Sign-in */}
      <Tooltip title="Sign in with Google">
        <IconButton
          onClick={onGoogleClick}
          disabled={isLoading}
          aria-label="Continue with Google"
          sx={{
            width: 48,
            height: 48,
            border: '1px solid #e2e8f0',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: '#f8fafc',
              borderColor: '#cbd5e1',
              transform: 'translateY(-1px)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
            },
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
        </IconButton>
      </Tooltip>

      {/* Apple Sign-in */}
      <Tooltip title="Continue with Apple">
        <IconButton
          aria-label="Continue with Apple"
          sx={{
            width: 48,
            height: 48,
            border: '1px solid #e2e8f0',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: '#f8fafc',
              borderColor: '#cbd5e1',
              transform: 'translateY(-1px)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
            },
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#000000">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.65-.8 1.09-1.92.97-3.04-1 .04-2.2 0.67-2.91 1.48-.62.72-1.16 1.86-1.02 2.96 1.12.09 2.26-.59 2.96-1.4z" />
          </svg>
        </IconButton>
      </Tooltip>

      {/* Facebook Sign-in */}
      <Tooltip title="Continue with Facebook">
        <IconButton
          aria-label="Continue with Facebook"
          sx={{
            width: 48,
            height: 48,
            border: '1px solid #e2e8f0',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: '#f8fafc',
              borderColor: '#cbd5e1',
              transform: 'translateY(-1px)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
            },
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </IconButton>
      </Tooltip>
    </Box>
  );
};
