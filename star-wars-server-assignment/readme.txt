Create an http server that serves the below endpoints.
All the endpoints return json data. 
Data are stored in the files of the csv folder in csv format.

/api/people
-----------
[{"id":"1","name":"Luke Skywalker","height":"172","mass":"77","skin_color":"fair","hair_color":"blond","birth_year":"19BBY","gender":"male"},
{"id":"2","name":"C-3PO","height":"167","mass":"75","skin_color":"gold","hair_color":"n/a","birth_year":"112BBY","gender":"n/a"},
{"id":"3","name":"R2-D2","height":"96","mass":"32","skin_color":"white blue","hair_color":"n/a","birth_year":"33BBY","gender":"n/a"},
{"id":"4","name":"Darth Vader","height":"202","mass":"136","skin_color":"white","hair_color":"none","birth_year":"41.9BBY","gender":"male"},
{"id":"5","name":"Leia Organa","height":"150","mass":"49","skin_color":"light","hair_color":"brown","birth_year":"19BBY","gender":"female"},
{"id":"6","name":"Owen Lars","height":"178","mass":"120","skin_color":"light","hair_color":"brown grey","birth_year":"52BBY","gender":"male"},
{"id":"7","name":"Beru Whitesun lars","height":"165","mass":"75","skin_color":"light","hair_color":"brown","birth_year":"47BBY","gender":"female"},
{"id":"8","name":"R5-D4","height":"97","mass":"32","skin_color":"white red","hair_color":"n/a","birth_year":"unknown","gender":"n/a"}
... (all people data)

/api/planets
------------
[{"id":"1","name":"Tatooine","climate":"arid","diameter":"10465"},
{"id":"2","name":"Alderaan","climate":"temperate","diameter":"12500"},
{"id":"3","name":"Yavin IV","climate":"temperate tropical","diameter":"10200"},
{"id":"4","name":"Hoth","climate":"frozen","diameter":"7200"},
{"id":"5","name":"Dagobah","climate":"murky","diameter":"8900"},
{"id":"6","name":"Bespin","climate":"temperate","diameter":"118000"},
{"id":"7","name":"Endor","climate":"temperate","diameter":"4900"},
{"id":"8","name":"Naboo","climate":"temperate","diameter":"12120"},
{"id":"9","name":"Coruscant","climate":"temperate","diameter":"12240"},
... (all planet data)

/api/people?id=10
-----------------
[{"id":"10","name":"Obi-Wan Kenobi","height":"182","mass":"77","skin_color":"fair","hair_color":"auburn white","birth_year":"57BBY","gender":"male"}]

/api/planets?id=10
------------------
[{"id":"10","name":"Kamino","climate":"temperate","diameter":"19720"}]

/api/people?name=Luke%20Skywalker
---------------------------------
[{"id":"1","name":"Luke Skywalker","height":"172","mass":"77","skin_color":"fair","hair_color":"blond","birth_year":"19BBY","gender":"male"}]

/api/planets?name=Mustafar
--------------------------
[{"id":"13","name":"Mustafar","climate":"hot","diameter":"4200"}]

/api/residents?planetid=10
---------------------------
[{"id":"22","name":"Boba Fett","height":"183","mass":"78.2","skin_color":"fair","hair_color":"black","birth_year":"31.5BBY","gender":"male"},
{"id":"72","name":"Lama Su","height":"229","mass":"88","skin_color":"grey","hair_color":"none","birth_year":"unknown","gender":"male"},
{"id":"73","name":"Taun We","height":"213","mass":"unknown","skin_color":"grey","hair_color":"none","birth_year":"unknown","gender":"female"}]

Residents data references:

|people  |   |residents|    |planets  |   
|--------|   |---------|    |---------|
|id      | < |resident |    |...      |
|...     |   |planet   |  > |id       |