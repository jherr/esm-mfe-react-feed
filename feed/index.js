import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { AppBar, Toolbar, Typography, Container } from 'material-ui';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container fixed>
          <Typography variant="h6">
            Social Feed in React
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

const App = () => {
  const [feed, setFeed] = useState([]);
  const [components, setComponents] = useState({});

  useEffect(() => {
    fetch('/feed.json')
      .then(resp => resp.json())
      .then(data => setFeed(data));
    
    const comps = {};
    import('http://localhost:2002/bundle.js')
      .then((mod) => {
        comps.Image = mod.default;
        setComponents({ ...comps });
      });
    import('http://localhost:2001/bundle.js')
      .then((mod) => {
        comps.Post = mod.default;
        setComponents({ ...comps });
      });
  }, []);

  return (
    <div>
      <Header />
      <Container fixed>
        {feed.map((item) => {
          const Comp = components[item.component];
          return Comp ? <Comp {...item} /> : null;
        })}
      </Container>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
