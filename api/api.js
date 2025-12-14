export default async function handler(req, res) {
  // Autoriser les requêtes depuis ton site
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Répondre aux requêtes OPTIONS (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Vérifier que c'est une requête POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt } = req.body;

    // Appeler l'API Anthropic
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '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',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();
    
    // Renvoyer la réponse
    res.status(200).json(data);
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
```

4. **REMPLACE `TA_CLE_API_ICI`** par ta vraie clé API (celle que tu as payée)
5. **Sauvegarde le fichier** en tant que **"api.js"** (PAS .txt !)

---

# **ÉTAPE 3 : CRÉER LA STRUCTURE DE DOSSIERS**

1. **Sur ton Bureau, crée un nouveau dossier** appelé **"phantom-backend"**
2. **Dans ce dossier, crée un sous-dossier** appelé **"api"**
3. **Mets ton fichier "api.js"** DANS le dossier "api"

**Structure finale :**
```
phantom-backend/
  └── api/
      └── api.js
