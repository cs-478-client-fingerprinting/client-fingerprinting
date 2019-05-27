db.createUser({
  user: "root",
  pwd: `${process.env.MONGO_INITDB_ROOT_PASSWORD}`,
  roles: [
    {
      role: "admin",
      db: "fingerprints"
    }
  ]
});
