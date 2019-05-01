

/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
*/

const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const Visualization = require('./schema');
const bodyParser = require('body-parser');
/*
 |--------------------------------------
 | Authentication Middleware
 |--------------------------------------
*/

module.exports = function(app, config) {
    // Authentication middleware
    const jwtCheck = jwt({
        secret: jwks.expressJwtSecret({
            cache: true,
            rateLimit: true,
            jwksRequestsPerMinute: 5,
            jwksUri: `https://${config.AUTH0_DOMAIN}/.well-known/jwks.json`
          }),
        audience: config.AUTH0_API_AUDIENCE,
        issuer: `https://${config.AUTH0_DOMAIN}/`,
        algorithm: 'RS256'
    });

    /*
    |--------------------------------------
    | API Routes
    |--------------------------------------
    */

   const eventListProjection = 'title';
   
   // Saving visualization API
   app.post('/api/save', (req, res) => {
     console.log(req.body)
     const visual = new Visualization(req.body);
     console.log(visual)
     visual.save((err, thisVisual) => {
       if (err) {
         console.log("Error: ", err)
       }
       res.send(thisVisual);
     })
   });

   // GET list of public events starting in the future
   app.get('/api/visualizations', (req, res) => {
     Visualization.find({}, (err, events) => {
       let eventsArr = [];
       if (err) { return res.status(500).send({message: err.message}); }
       if (events) {
         events.forEach(event => {
           eventsArr.push(event);
         });
       }
       res.send(eventsArr);
     });
   });


    // GET event by event ID
    app.get('/api/visualizations/:id', (req, res) => {
        Visualization.findById(req.params.id, (err, event) => {
        if (err) {
            return res.status(500).send({message: err.message});
        }
        if (!event) {
            return res.status(400).send({message: 'Diagram not found.'});
        }
        res.send(event);
        });
    });

    // Get user visualizations
    app.get('/api/myvisual', jwtCheck, (req, res) => {
      Visualization.find({}, (err, events) => {
        let eventsArr = [];
        if (err) { return res.status(500).send({message: err.message}); }
        if (events) {
          events.forEach(event => {
            eventsArr.push(event);
          });
        }
        res.send(eventsArr);
      });
    });


    // API for visualization-interactions
    app.post('/api/create', bodyParser.text(), (req, res) => {
      const str = req.body;
      conole.log(str);
      res.send('Ok');
    })
}
