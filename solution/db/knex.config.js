module.exports = {
    sqlite: {
        client: "sqlite3",
        connection: {
            filename: "./db/star-wars.sqlite"
        },
        useNullAsDefault: true,
        debug: true
    }
}