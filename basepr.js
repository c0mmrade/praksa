const mysql=require("mysql2");

const connection=mysql.createConnection({

    host:'localhost',
    user:'aplikacija',
    password:'aplikacija',
    database:'aplikacija'
});

connection.promise()
    .query(
    'SELECT * FROM category WHERE parent_category_id IS NULL;')
    .then( prikaziKategorije)
    .catch(error=>
        {
            console.log("Doslo je do greske:",error);
        });
        function prikaziKategorije([categories,fields]){

for(let category of categories)
        {
console.log("Ucitana kategorija:", category.name);

        }
        }
