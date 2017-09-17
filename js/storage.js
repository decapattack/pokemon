var UsuariosSite = {
    listaUsuarios : [],
    findUser:function(){
        for (var i = 0; i <  UsuariosSite.listaUsuarios.length; i++){
            if(UsuariosSite.listaUsuarios[i].login === user.login && UsuariosSite.listaUsuarios[i].senha === user.senha){
                return true;
            }
        }
        return false;
    },

    addUser:function(user){
        UsuariosSite.listaUsuarios.push(user);
    },

    hasUser:function(user){
        for (var i = 0; i <  UsuariosSite.listaUsuarios.length; i++){
            if(UsuariosSite.listaUsuarios[i].login === user.login){
                return true;
            }
        }
        return false;
    },

    getUser:function(login){
        for(var i = 0; i < UsuariosSite.listaUsuarios.length; i++){
            if(UsuariosSite.listaUsuarios[i].login === login){
                return UsuariosSite.listaUsuarios[i];
            }
        }
    }
};
/*
var db_name = 'pokemon';
var db_version = '1.0';
var db_describe = 'pokemon';
var db_size = 2 * 1024 * 1024;
var db = openDatabase(db_name, db_version, db_describe, db_size, function(db) {
    console.log(db);
    console.log("Database opened Successfully! Or created for the first time !");
    createTables(db);
});

function createTables(db){
    db.transaction(function(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS users(id integer primary key , login text, senha text)', [], function(transaction, result) {
            console.log(result);
            console.log('Table created Successfully!');
        }, function(transaction, error) {
            console.log(error);
        });
    }, transError, transSuccess);

    db.transaction(function(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS teams(id integer primary key , id_users, nome_time text)', [], function(transaction, result) {
            console.log(result);
            console.log('Table created Successfully!');
        }, function(transaction, error) {
            console.log(error);
        });
    }, transError, transSuccess);

    db.transaction(function(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS team_pokemon(id integer primary key , id_team, nome_pokemon text)', [], function(transaction, result) {
            console.log(result);
            console.log('Table created Successfully!');
        }, function(transaction, error) {
            console.log(error);
        });
    }, transError, transSuccess);

    db.transaction(function(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS pokemon_moves(id integer primary key , id_pokemon, nome_move text)', [], function(transaction, result) {
            console.log(result);
            console.log('Table created Successfully!');
        }, function(transaction, error) {
            console.log(error);
        });
    }, transError, transSuccess);

}

function addUser(user){
    db.transaction(function (tx) {
        tx.executeSql("INSERT INTO user (login,senha) values ('"+user.login+"','"+user.senha+"')");
    });

}

function findUser(user){

    db.transaction(function (tx) {
        tx.executeSql('SELECT id,login,senha FROM users where login = ? and senha = ?', [user.login, user.senha], function (tx, results) {

            console.log(results);
        });
    });
}


function transError(){
    console.log("erro");
}

function transSuccess(){
    console.log("ok");
}


var dbMoviesDatabase;
var dbName = "pokemon";
var dbVersion = 1;
var request = indexedDB.open(dbName, dbVersion);

request.onupgradeneeded = function(e) {
    var thisDB = e.target.result;
    var store = null;
    if (!thisDB.objectStoreNames.contains("users")) {
        store = thisDB.createObjectStore("users", {keyPath: "login" });
    }
};

request.onsuccess = function(e) {
    dbMoviesDatabase = e.target.result;
}


function addUser(user) {
    var tx = dbMoviesDatabase.transaction(["users"], "readwrite");
    var store = tx.objectStore("users");
    var request = store.add(user);
    return request;
};

function findUser(user){
    dbMoviesDatabase.transaction(["users"], "readonly").objectStore("users").openCursor().onsuccess = function(e) {
        var cursor = e.target.result;
        var login = false;
        var senha = false;
        if(cursor) {
            for(var field in cursor.value) {
                if (field == 'login' && cursor.value[field] == user.login){
                    login = true;
                }
                if(field == 'senha' && cursor.value[field] == user.senha){
                    senha = true;
                }
                if(login && senha){
                    window.sessionStorage.setItem("login",login);
                    return true;
                }
            }
            cursor.continue();
        }

    }
}
*/
