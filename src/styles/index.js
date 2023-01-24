import { styled } from '@mui/system';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,
  textTransform: 'capitalize',
  fontSize: '1rem',
  minWidth: '100px',
  marginTop: '1em',

  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
}));
