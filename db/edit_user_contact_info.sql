update USERS    
set phone_number = $2, email = $3
where id = $1

returning*