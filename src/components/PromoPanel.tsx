import React from 'react';
import { Box, Typography, Paper, Chip } from '@mui/material';

export const PromoPanel: React.FC = () => {
  return (
    <Box
      sx={{
        height: '100%',
        minHeight: { md: 620 },
        backgroundColor: '#eef6f2',
        borderRadius: '24px',
        p: { xs: 3, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Soft Glow / Floating Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: -50,
          right: -50,
          width: 200,
          height: 200,
          borderRadius: '50%',
          backgroundColor: 'rgba(167, 243, 208, 0.3)',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />

      {/* Main Illustration Area with Floating Badges */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: 380,
          mt: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        {/* Floating Avatar 1 - Top Left */}
        <Paper
          elevation={2}
          sx={{
            position: 'absolute',
            top: 24,
            left: 20,
            width: 44,
            height: 44,
            borderRadius: '50%',
            p: '2px',
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              backgroundColor: '#a7f3d0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
            }}
          >
            🧑‍💼
          </Box>
        </Paper>

        {/* Floating Avatar 2 - Right */}
        <Paper
          elevation={2}
          sx={{
            position: 'absolute',
            bottom: 70,
            right: 16,
            width: 44,
            height: 44,
            borderRadius: '50%',
            p: '2px',
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              backgroundColor: '#fecdd3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
            }}
          >
            👩‍💻
          </Box>
        </Paper>

        {/* Central Illustration (SVG) */}
        <Box
          component="svg"
          viewBox="0 0 320 320"
          sx={{
            width: '100%',
            maxWidth: 300,
            height: 'auto',
            zIndex: 1,
          }}
        >
          {/* Subtle zen aura circles */}
          <circle cx="160" cy="155" r="110" fill="none" stroke="#d1fae5" strokeWidth="2.5" strokeDasharray="6 6" />
          <circle cx="160" cy="155" r="85" fill="none" stroke="#a7f3d0" strokeWidth="1.5" />

          {/* Plant Leaves / Calm vibe accents */}
          <path d="M70 190 C60 170 80 150 95 165 C85 185 75 190 70 190 Z" fill="#6ee7b7" opacity="0.7" />
          <path d="M250 190 C260 170 240 150 225 165 C235 185 245 190 250 190 Z" fill="#6ee7b7" opacity="0.7" />

          {/* Meditating / Working figure body */}
          {/* Legs folded in lotus position */}
          <path
            d="M95 245 C95 210 135 230 160 230 C185 230 225 210 225 245 C225 260 195 265 160 265 C125 265 95 260 95 245 Z"
            fill="#e2e8f0"
            stroke="#0f172a"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Torso / Green shirt */}
          <path
            d="M135 155 C120 165 118 190 125 232 C145 235 175 235 195 232 C202 190 200 165 185 155 Z"
            fill="#a7f3d0"
            stroke="#0f172a"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Heart icon on shirt */}
          <path
            d="M160 188 C158 184 152 178 147 182 C142 186 145 193 160 202 C175 193 178 186 173 182 C168 178 162 184 160 188 Z"
            fill="none"
            stroke="#059669"
            strokeWidth="2.5"
          />

          {/* Left Arm in relaxed pose */}
          <path
            d="M130 165 C110 180 100 205 110 225 C115 232 125 232 128 225"
            fill="none"
            stroke="#0f172a"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Right Arm in relaxed pose */}
          <path
            d="M190 165 C210 180 220 205 210 225 C205 232 195 232 192 225"
            fill="none"
            stroke="#0f172a"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Neck */}
          <rect x="153" y="135" width="14" height="22" rx="4" fill="#fed7aa" stroke="#0f172a" strokeWidth="3" />

          {/* Head */}
          <ellipse cx="160" cy="115" rx="20" ry="24" fill="#fed7aa" stroke="#0f172a" strokeWidth="3.5" />

          {/* Hair */}
          <path
            d="M138 115 C136 85 184 85 182 115 C178 105 170 100 160 100 C150 100 142 105 138 115 Z"
            fill="#0f172a"
          />
          <ellipse cx="160" cy="85" rx="14" ry="12" fill="#0f172a" />

          {/* Peaceful closed eyes & calm smile */}
          <path d="M150 114 Q154 118 157 114" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
          <path d="M163 114 Q166 118 170 114" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
          <path d="M156 126 Q160 130 164 126" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
        </Box>

        {/* Floating Canva Design Task Card - Bottom Left */}
        <Paper
          elevation={3}
          sx={{
            position: 'absolute',
            bottom: 12,
            left: 10,
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            p: 1.5,
            width: 140,
            zIndex: 3,
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Box>
              <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a' }}>
                Canva Design
              </Typography>
              <Typography sx={{ fontSize: '0.68rem', color: '#64748b' }}>
                10 Task
              </Typography>
            </Box>
            {/* Circular Progress Badge */}
            <Box
              sx={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                border: '2.5px solid #22c55e',
                borderTopColor: '#e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.55rem',
                fontWeight: 700,
                color: '#15803d',
              }}
            >
              84%
            </Box>
          </Box>
          <Box sx={{ mt: 1 }}>
            <Chip
              label="Design"
              size="small"
              sx={{
                height: 18,
                fontSize: '0.62rem',
                backgroundColor: '#f1f5f9',
                color: '#475569',
                fontWeight: 600,
              }}
            />
          </Box>
        </Paper>
      </Box>

      {/* Footer Area: Carousel Dots + Slogan */}
      <Box sx={{ textAlign: 'center', zIndex: 1, mt: 3, mb: 1 }}>
        {/* Pagination Dots */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 0.8, mb: 2 }}>
          <Box
            sx={{
              width: 24,
              height: 6,
              borderRadius: 3,
              backgroundColor: '#0f172a',
            }}
          />
          <Box
            sx={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              backgroundColor: '#cbd5e1',
            }}
          />
          <Box
            sx={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              backgroundColor: '#cbd5e1',
            }}
          />
        </Box>

        {/* Slogan */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '1rem', md: '1.15rem' },
            color: '#0f172a',
            maxWidth: 280,
            mx: 'auto',
            lineHeight: 1.4,
          }}
        >
          Make your work easier and organized with Tuga's App
        </Typography>
      </Box>
    </Box>
  );
};
