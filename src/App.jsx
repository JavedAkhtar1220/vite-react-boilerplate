import { Box, Typography } from '@mui/material';

function App() {
  return (
    <Box>
      <Typography sx={{ color: '#fff', fontSize: '2rem' }}>
        React + Vite + MUI 5 + Redux - Boilerplate
      </Typography>

      <Box
        sx={{
          background: 'rgba(0, 0, 0, 0.5)',
          mt: 2,
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'left',
        }}
      >
        <Typography sx={{ color: 'lightgreen', fontSize: '1rem', mb: 1 }}>
          1. Prettier{' '}
          <span style={{ fontSize: '11px', color: 'white' }}>
            complete prettier rules
          </span>
        </Typography>
        <Typography sx={{ color: 'lightgreen', fontSize: '1rem', mb: 1 }}>
          2. Eslint{' '}
          <span style={{ fontSize: '11px', color: 'white' }}>
            complete eslint config & rules
          </span>
        </Typography>
        <Typography sx={{ color: 'lightgreen', fontSize: '1rem', mb: 1 }}>
          3. Commit lint{' '}
          <span style={{ fontSize: '11px', color: 'white' }}>
            commitlint fror better commit messages
          </span>
        </Typography>
        <Typography sx={{ color: 'lightgreen', fontSize: '1rem', mb: 1 }}>
          4. Redux Toolkit
        </Typography>
        <Typography sx={{ color: 'lightgreen', fontSize: '1rem', mb: 1 }}>
          5. MUI v5
        </Typography>
      </Box>

      <Typography sx={{ color: '#fff', mt: 2 }}>
        Made with &#x1F49C; by{' '}
        <a style={{ color: 'lightgreen' }} href="https://github.com/imohib168">
          Mohib Ismail
        </a>
      </Typography>
    </Box>
  );
}

export default App;
