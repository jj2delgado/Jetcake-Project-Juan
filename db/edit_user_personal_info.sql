update USERS    
set name_first = $2, name_last = $3, date_of_birth = $4
where id = $1

returning *