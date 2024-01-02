rs.initiate({
		_id: "mydb-rsc",
		members: [
			{ _id: 0, host: "mydb_dbc_a:27017" },
			{ _id: 1, host: "mydb_dbc_b:27017" },
			{ _id: 2, host: "mydb_dbc_c:27017" }
		]
});
print('Replica Set mydb-rsc Configured');