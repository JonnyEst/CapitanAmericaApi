const express = require('express')
const routes =  express.Router()

//Patrocinadores--------------------
routes.get('/patrocinadores', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT * FROM patrocinadores', (err, rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/patrocinadores', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
     
      conn.query('INSERT INTO patrocinadores set ?',[req.body ], (err, rows) => {
            if(err) return res.send(err)

            res.send('patrocinador added')
        })
    })
})

routes.delete('/patrocinadores/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
     
      conn.query('DELETE FROM patrocinadores WHERE id = ?',[req.params.id], (err, rows) => {
            if(err) return res.send(err)

            res.send('patrocinador deleted')
        })
    })
})

routes.put('/patrocinadores/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
     
      conn.query('UPDATE patrocinadores set ? WHERE id = ?',[req.body, req.params.id], (err, rows) => {
            if(err) return res.send(err)

            res.send('patrocinador update')
        })
    })
})

// Aliados------------------------------------
routes.get('/aliados', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT * FROM aliados', (err, rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/aliados', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
     
      conn.query('INSERT INTO aliados set ?',[req.body ], (err, rows) => {
            if(err) return res.send(err)

            res.send('aliados added')
        })
    })
})

routes.delete('/aliados/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
     
      conn.query('DELETE FROM aliados WHERE id = ?',[req.params.id], (err, rows) => {
            if(err) return res.send(err)

            res.send('aliados deleted')
        })
    })
})

routes.put('/aliados/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
     
      conn.query('UPDATE aliados set ? WHERE id = ?',[req.body, req.params.id], (err, rows) => {
            if(err) return res.send(err)

            res.send('aliados update')
        })
    })
})


//Compañeros de equipo
routes.get('/companeros', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT * FROM compañeros', (err, rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/companeros', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
     
      conn.query('INSERT INTO compañeros set ?',[req.body ], (err, rows) => {
            if(err) return res.send(err)

            res.send('compañeros added')
        })
    })
})

routes.delete('/companeros/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
     
      conn.query('DELETE FROM compañeros WHERE id = ?',[req.params.id], (err, rows) => {
            if(err) return res.send(err)

            res.send('compañeros deleted')
        })
    })
})

routes.put('/companeros/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
     
      conn.query('UPDATE compañeros set ? WHERE id = ?',[req.body, req.params.id], (err, rows) => {
            if(err) return res.send(err)

            res.send('compañeros update')
        })
    })
})

//personas salvadas
routes.get('/personas-salvadas', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT * FROM personas_salvadas', (err, rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/personas-salvadas', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
     
      conn.query('INSERT INTO personas_salvadas set ?',[req.body ], (err, rows) => {
            if(err) return res.send(err)

            res.send('personas salvadas added')
        })
    })
})

routes.delete('/personas-salvadas/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
     
      conn.query('DELETE FROM personas_salvadas WHERE id = ?',[req.params.id], (err, rows) => {
            if(err) return res.send(err)

            res.send('personas salvadas deleted')
        })
    })
})

routes.put('/personas-salvadas/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
     
      conn.query('UPDATE personas_salvadas set ? WHERE id = ?',[req.body, req.params.id], (err, rows) => {
            if(err) return res.send(err)

            res.send('personas salvadas update')
        })
    })
})

// enemigos
routes.get('/enemigos', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT * FROM enemigos', (err, rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/enemigos', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
     
      conn.query('INSERT INTO enemigos set ?',[req.body ], (err, rows) => {
            if(err) return res.send(err)

            res.send('enemigos added')
        })
    })
})

routes.delete('/enemigos/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
     
      conn.query('DELETE FROM enemigos WHERE id = ?',[req.params.id], (err, rows) => {
            if(err) return res.send(err)

            res.send('enemigos deleted')
        })
    })
})

routes.put('/enemigos/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
     
      conn.query('UPDATE enemigos set ? WHERE id = ?',[req.body, req.params.id], (err, rows) => {
            if(err) return res.send(err)

            res.send('enemigos update')
        })
    })
})

//proximas misiones
routes.get('/misiones', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT * FROM misiones', (err, rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/misiones', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
     
      conn.query('INSERT INTO misiones set ?',[req.body ], (err, rows) => {
            if(err) return res.send(err)

            res.send('misiones added')
        })
    })
})

routes.delete('/misiones/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
     
      conn.query('DELETE FROM misiones WHERE id = ?',[req.params.id], (err, rows) => {
            if(err) return res.send(err)

            res.send('misiones deleted')
        })
    })
})

routes.put('/misiones/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
     
      conn.query('UPDATE misiones set ? WHERE id = ?',[req.body, req.params.id], (err, rows) => {
            if(err) return res.send(err)

            res.send('misiones update')
        })
    })
})


module.exports = routes