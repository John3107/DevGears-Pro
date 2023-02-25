import React from 'react';
import { Routing } from 'pages/routes';
import { Box, makeStyles } from 'shared/ui/kit';
import { Header } from 'app/header';
import { Sidebar } from 'app/sidebar';

const useStyles = makeStyles({
  app: {
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell',
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  root: {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100%',
    width: '100%',
  },
  main: {
    position: 'fixed',
    top: '60px',
    left: '211px',
    right: '0',
    bottom: '0',
    height: '100%',
    padding: '30px 90px',
  },
});

export const App: React.FC = () => {
  const { app, root, main } = useStyles();

  return (
    <Box className={app}>
      <Box className={root}>
        <Header />
        <Sidebar />
      </Box>
      <Box className={main}>
        <Routing />
      </Box>
    </Box>
  );
};
