import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Avatar,
  Chip,
  IconButton,
  Tooltip,
  Snackbar,
  Alert,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';
import { logOut } from '../services/firebase';

interface LocationState {
  accessToken?: string;
  user?: {
    displayName?: string | null;
    email?: string | null;
    photoURL?: string | null;
    uid?: string;
  };
}

export const DashboardPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState | null;

  const accessToken = state?.accessToken || 'No accessToken found. Please log in via Google.';
  const user = state?.user;

  const [copied, setCopied] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCopyToken = () => {
    if (accessToken && accessToken !== 'No accessToken found. Please log in via Google.') {
      navigator.clipboard.writeText(accessToken);
      setCopied(true);
      setSnackbarOpen(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.error('Logout error', err);
    }
    navigate('/', { replace: true });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        py: { xs: 4, md: 8 },
        px: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: '24px',
            border: '1px solid #e2e8f0',
            backgroundColor: '#ffffff',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
          }}
        >
          {/* Header Status */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
            <CheckCircleOutlinedIcon sx={{ color: '#16a34a', fontSize: 32 }} />
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#0f172a' }}>
                Authentication Successful
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748b' }}>
                Firebase Google Login redirection page
              </Typography>
            </Box>
          </Box>

          {/* User Profile Card */}
          {user && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                p: 2,
                mb: 4,
                backgroundColor: '#f8fafc',
                borderRadius: '16px',
                border: '1px solid #f1f5f9',
              }}
            >
              <Avatar
                src={user.photoURL || undefined}
                alt={user.displayName || 'User'}
                sx={{ width: 56, height: 56, bgcolor: '#0f172a' }}
              >
                {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 600, color: '#0f172a' }}>
                  {user.displayName || 'Authenticated User'}
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b' }}>
                  {user.email || 'No email provided'}
                </Typography>
                {user.uid && (
                  <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                    UID: {user.uid}
                  </Typography>
                )}
              </Box>
              <Chip label="Google Verified" color="success" size="small" variant="outlined" />
            </Box>
          )}

          {/* Access Token Display Section */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
              <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a' }}>
                User Access Token (accessToken)
              </Typography>
              <Tooltip title={copied ? 'Copied!' : 'Copy to Clipboard'}>
                <IconButton onClick={handleCopyToken} size="small" sx={{ color: '#64748b' }}>
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>

            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                borderRadius: '12px',
                backgroundColor: '#0f172a',
                color: '#38bdf8',
                fontFamily: 'monospace',
                fontSize: '0.85rem',
                wordBreak: 'break-all',
                maxHeight: 220,
                overflowY: 'auto',
                border: '1px solid #1e293b',
              }}
            >
              {accessToken}
            </Paper>
            <Typography variant="caption" sx={{ display: 'block', mt: 1, color: '#94a3b8' }}>
              * This token was extracted from the Google Auth credential and forwarded to this page.
            </Typography>
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="outlined"
              startIcon={<ContentCopyIcon />}
              onClick={handleCopyToken}
              sx={{
                borderRadius: '24px',
                borderColor: '#cbd5e1',
                color: '#0f172a',
                px: 3,
                '&:hover': {
                  borderColor: '#94a3b8',
                  backgroundColor: '#f8fafc',
                },
              }}
            >
              {copied ? 'Copied to Clipboard!' : 'Copy Access Token'}
            </Button>

            <Button
              variant="contained"
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
              sx={{
                borderRadius: '24px',
                backgroundColor: '#000000',
                color: '#ffffff',
                px: 3,
                '&:hover': {
                  backgroundColor: '#1f2937',
                },
              }}
            >
              Log Out
            </Button>

            <Button
              variant="text"
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate('/')}
              sx={{
                borderRadius: '24px',
                color: '#64748b',
                '&:hover': {
                  color: '#0f172a',
                },
              }}
            >
              Back to Login
            </Button>
          </Box>
        </Paper>
      </Container>

      {/* Snackbar notification */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2500}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%', borderRadius: '12px' }}>
          Access token copied to clipboard!
        </Alert>
      </Snackbar>
    </Box>
  );
};
