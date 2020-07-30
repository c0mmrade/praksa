const mysql=require("mysql2");

const connection=mysql.createConnection({

    host:'localhost',
    user:'aplikacija',
    password:'aplikacija',
    database:'aplikacija'
});

connection.query(
    'SELECT * FROM category WHERE parent_category_id IS NULL;',
prikaziKategorije

    );
    function prikaziKategorije(error,categories,fields){
        if (error){
    console.log("Doslo je do greske:", error);
    return;
    }

for (let category of categories){
    console.log("Ucitana kategorija:", category.name);

}

    }