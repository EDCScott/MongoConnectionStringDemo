rs.initiate({
		_id: "mydb-rs0",
		members: [
			{ _id: 0, host: "mydb_db0_a:27017" },
			{ _id: 1, host: "mydb_db0_b:27017" },
			{ _id: 2, host: "mydb_db0_c:27017" }
		]
});
print('Replica Set mydb-rs0 Configured');