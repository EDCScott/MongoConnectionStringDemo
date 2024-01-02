rs.initiate({
		_id: "mydb-rs1",
		members: [
			{ _id: 0, host: "mydb_db1_a:27017" },
			{ _id: 1, host: "mydb_db1_b:27017" },
			{ _id: 2, host: "mydb_db1_c:27017" }
		]
});
print('Replica Set mydb-rs1 Configured');