const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (username === 'Ben' && password === 'Ben') {  // Hardcoded credentials
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};
