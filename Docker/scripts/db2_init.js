rs.initiate({
		_id: "mydb-rs2",
		members: [
			{ _id: 0, host: "mydb_db2_a:27017" },
			{ _id: 1, host: "mydb_db2_b:27017" },
			{ _id: 2, host: "mydb_db2_c:27017" }
		]
});
print('Replica Set mydb-rs2 Configured');