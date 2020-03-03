var index = (function (_ref) {
  var title = _ref.title,
      body = _ref.body;
  return window.React.createElement(window.MaterialUI.Paper, {
    elevation: 3,
    style: {
      margin: '1em'
    }
  }, window.React.createElement(window.MaterialUI.Typography, {
    variant: "h5"
  }, title), window.React.createElement(window.MaterialUI.Typography, {
    variant: "body1"
  }, body));
});

export default index;
