sh.addShard("mydb-rs0/mydb_db0_a:27017,mydb_db0_b:27017,mydb_db0_c:27017");
sh.addShard("mydb-rs1/mydb_db1_a:27017,mydb_db1_b:27017,mydb_db1_c:27017");
sh.addShard("mydb-rs2/mydb_db2_a:27017,mydb_db2_b:27017,mydb_db2_c:27017");
sh.enableSharding("mydb");
print('Shard Environment Configured');