import React from 'react';
import { Box, Container, Paper, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoginForm } from '../components/LoginForm';
import { PromoPanel } from '../components/PromoPanel';

export const LoginPage: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f5f9',
        p: { xs: 1.5, sm: 3, md: 4 },
      }}
    >
      <Container maxWidth="lg" sx={{ p: { xs: 0, sm: 1 } }}>
        {/* Outer Browser Window Mockup Frame matching design reference */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: { xs: '16px', md: '24px' },
            overflow: 'hidden',
            border: '1px solid #e2e8f0',
            boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.08)',
            backgroundColor: '#ffffff',
          }}
        >
          {/* Mock Browser Header Bar */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              px: 2.5,
              py: 1.5,
              borderBottom: '1px solid #f1f5f9',
              backgroundColor: '#ffffff',
            }}
          >
            {/* macOS Window Controls */}
            <Box sx={{ display: 'flex', gap: 1, mr: 2 }}>
              <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ef4444' }} />
              <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#f59e0b' }} />
              <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#10b981' }} />
            </Box>

            {/* Mock Address Bar */}
            <Box
              sx={{
                mx: 'auto',
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'center',
                gap: 1,
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '20px',
                px: 2,
                py: 0.5,
                width: { sm: 260, md: 320 },
              }}
            >
              <LockOutlinedIcon sx={{ fontSize: 13, color: '#64748b' }} />
              <Typography sx={{ fontSize: '0.75rem', color: '#64748b', userSelect: 'none' }}>
                https://tugas-task-management.com
              </Typography>
            </Box>
          </Box>

          {/* Main Card Content: Split Layout */}
          <Box sx={{ p: { xs: 2.5, sm: 3, md: 4 } }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: { xs: 3, md: 4 },
                alignItems: 'stretch',
              }}
            >
              {/* Left Column: Form */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <LoginForm />
              </Box>

              {/* Right Column: Illustration Panel (hidden on mobile, visible on desktop) */}
              <Box
                sx={{
                  display: { xs: 'none', md: 'block' },
                  height: '100%',
                }}
              >
                <PromoPanel />
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
