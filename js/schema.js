var Schema = {
    schemaBuilder : null,
    initialize: function(schemaBuilder){
        this.schemaBuilder = schemaBuilder;
        this.users();
    },

    users: function(){
        this.schemaBuilder.createTable('Users').
        addColumn('id', lf.Type.INTEGER).
        addColumn('login', lf.Type.STRING).
        addColumn('senha', lf.Type.STRING).
        addPrimaryKey(['id'],true);
    }
};
