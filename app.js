const express = require('express');
const app = express();
const port = 3303;
const path = require('path');
const morgan = require('morgan');
app.use(morgan('dev'));
const dataservice = require('./services/data-service');
app.set('views', './views');
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});


//app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, '/public/css')));
app.use('/css', express.static(path.join(__dirname,
    '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname,
    '/node_modules/jquery/dist')));


app.get('/', (req, resp) => {
    console.log(path.join(__dirname, 'public', 'index.html'));
    resp.sendFile(path.join(__dirname, 'public', 'index.html'));
    //resp.end();
})



function renderPeople(err, data, resp) {
    if (err) {
        console.error(err);
        resp.sendStatus(500);
    } else {
        resp.render('people', { people: data });
    }
    resp.end();
}


app.get('/people', (req, resp) => {
    if (req.query.planet) {
        dataservice.getResidents(req.query.planet, (err, data) => {
            renderPeople(err, data, resp);
        })
    } else {
        dataservice.getAll('people', (err, data) => {
            renderPeople(err, data, resp);
        })
    }
})

app.get('/planet', (req, resp) => {
    dataservice.getAll('planets', (err, data) => {
        if (err) {
            console.error(err);
            resp.sendStatus(500);
        } else {
            resp.render('planets', { planets: data });
        }
        resp.end();
    })

})

app.get('/people/:id', (req, resp) => {
    dataservice.getById(req.params.id, 'people', (err, data) => {
        if (err) {
            console.error(err);
            resp.status(500);
        } else {
            if (data.length == 0) {
                resp.status(404);
            } else {
                resp.render('person', { person: data[0] })
            }
        }
        resp.end();
    })
})

app.get('/planet/:id', (req, resp) => {
    dataservice.getById(req.params.id, 'planets', (err, data) => {
        if (err) {
            console.error(err);
            resp.status(500);
        } else {
            if (data.length == 0) {
                resp.status(404);
            } else {
                resp.render('planet', { planet: data[0] })
            }
        }
        resp.end();
    })
})

app.get('/folk', (req, resp) => {
    resp.redirect('/people');
    resp.end();
})