const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const url = 'mongodb://admin:password@localhost:27017';
const client = new MongoClient(url);
const dbName = 'proiect_pi';

// --- RUTA POST: Primește temperatura și o salvează ---
app.post('/api/temperatura', async (req, res) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        
        // Luăm datele trimise din "corp" (body)
        const nouaInregistrare = {
            valoare: req.body.temperatura,
            unitate: "Celsius",
            data: new Date()
        };

        const result = await db.collection('istoric_temp').insertOne(nouaInregistrare);
        console.log("Salvat în DB:", nouaInregistrare);
        
        res.status(201).json({ mesaj: "Succes!", id: result.insertedId });
    } catch (error) {
        res.status(500).json({ eroare: error.message });
    }
});

// --- RUTA GET: Ia toate temperaturile din DB ---
app.get('/api/temperatura', async (req, res) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        
        // Sortăm după dată (-1 înseamnă cele mai recente primele)
        const date = await db.collection('istoric_temp').find().sort({ data: -1 }).toArray();
        
        res.json(date);
    } catch (error) {
        res.status(500).json({ eroare: error.message });
    }
});
const PORT = 3000
const HOST = '0.0.0.0'

app.listen(PORT, HOST, () => {
    console.log('Serverul rulează pe http://0.0.0.0:3000');
});
