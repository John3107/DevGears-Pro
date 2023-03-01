import React from 'react';
import { Routing } from 'pages';
import { Box, makeStyles } from 'shared/ui/kit';

const useStyles = makeStyles({
  app: {
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell',
    position: 'relative',
    height: '100%',
    width: '100%',
  },
});

export const App: React.FC = () => {
  const { app } = useStyles();

  return (
    <Box className={app}>
      <Routing />
    </Box>
  );
};
