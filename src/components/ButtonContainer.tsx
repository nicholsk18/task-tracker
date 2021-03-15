import React, { FunctionComponent, ReactChildren } from 'react';
import { Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface IProps {
  to: string;
  children: string | string[];
  fullWidth: boolean;
}

const ButtonContainer: FunctionComponent<IProps> = (props) => {
  return (
    <Box m={3}>
      <Button
        variant='contained'
        color='primary'
        component={Link}
        fullWidth={props.fullWidth}
        to={props.to}
      >
        {props.children}
      </Button>
    </Box>
  );
};

export default ButtonContainer;
