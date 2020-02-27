const controller = {};

controller.list = (req, res)=>{
    req.getConnection( ( err, conn ) => {
        conn.query("SELECT * FROM candidatos ORDER BY nameCandidato DESC", (err, candidatos) => {
            if(err){
                res.json(err);
            }
            res.render('index',{
                data:candidatos
            })

        })

    })

}

// controller.votar = (req, res) =>{
//    res.render('votar2');
//     req.getConnection( ( err, conn ) => {
//         conn.query("SELECT * FROM votante WHERE IDcNADIDATO = ''", (err, votantes) => {
//              if(err){
//                  res.json(err);
//              }
//              res.render('votar',{
//                  data:votantes
//              })
 
//          })
 
//      })
   
// }

controller.result = (req, res)=>{
    req.getConnection( ( err, conn ) => {
       conn.query("SELECT voto, COUNT(*) AS conteoVotos from votante GROUP BY voto ORDER BY conteoVotos DESC ", (err, votos) => {
            if(err){
                res.json(err);
            }
            res.render('resultados',{
                data:votos
            })
            console.log(votos);
        })


    })
    

}

controller.save = (req, res) => {

                    const data = req.body;
                    req.getConnection((err, conn) => {
                        conn.query("INSERT INTO votante set ? ", [data], (err, votos) => {
                            
                            res.redirect('resultados');                                       
                        })
                    })   
   
};



controller.edit = (req, res) => {
    const id = req.params.id; // le asignamos id al valor de parametro id
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM candidatos WHERE idCandidato = ?', [id], (err, candidato) => {
            res.render('votar2', { // renderisa productos edit con los datos del producto actualizar
                data: candidato[0]
            })
        })

    })
}

// controller.update = (req, res) => {
//     const id = req.params.id; // capturametro su id para ectualizar sus datos
//     const newvoto = req.body; // guradamos datos actualizados dobtenidos del formulario
//     req.getConnection((err, conn) => {
//         conn.query('UPDATE candidatos  set ? WHERE idCandidato= ?', [newvoto, id], (err, votos) => {
//             res.redirect('/');
//         })
//     })

// }





/*
controller.listZapatillas = (req, res) =>{
    req.getConnection((err, conn ) => {
        conn.query("SELECT * FROM producto WHERE categoria ='polos'", (err, productos) => {
            if(err){
                res.json(err);
            }
            res.render('productos', {
                data:productos
            });
        })
    })
}



controller.save = (req, res) =>{ // ejecuta en la ruta especificada
    const data = req.body; // capturamos los datos del formulario
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO productos set ?', [data], (err, productos) => { // [data] contieene los datos de formulario
            console.log(productos);
            res.redirect('/'); // redieccion al index despues de guardar los datos
        })
    })

}

controller.edit = (req, res) => {
    const id = req.params.id; // le asignamos id al valor de parametro id
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM productos WHERE idUser = ?', [id], (err, producto) => {
            res.render('productos_edit', { // renderisa productos edit con los datos del producto actualizar
                data: producto[0]
            })
        })

    })
}


controller.update = (req, res) => {
    const id = req.params.id; // capturametro su id para ectualizar sus datos
    const newproducto = req.body; // guradamos datos actualizados dobtenidos del formulario
    req.getConnection((err, conn) => {
        conn.query('UPDATE productos set ? WHERE idProducto = ?', [newUsuario, id], (err, producto) => {
            res.redirect('/');
        })
    })

}

controller.delete = (req, res) => {
   // const id = req.params.id; // esta es igual a la liena de abajo
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM productos WHERE idProducto = ?', [id], (err, rows) => {
            res.redirect('/');
        })
    })
}
controller.prueba = (req, res) => {
    // const id = req.params.id; // esta es igual a la liena de abajo
    
             res.render('prueba');
        
 }
 

 */


module.exports = controller;