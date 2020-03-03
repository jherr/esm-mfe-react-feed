import React from 'react';
import { Typography, Paper } from 'material-ui';

export default ({ title, body }) => (
  <Paper elevation={3} style={{ margin: '1em' }}>
    <Typography variant="h5">{title}</Typography>
    <Typography variant="body1">{body}</Typography>
  </Paper>
);
