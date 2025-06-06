const express = require('express');
const app = express();
const path = require('path');

// Serve arquivos estáticos (index.html, style.css, etc.)
app.use(express.static(path.join(__dirname, '.')));

// Rota padrão
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
