update USERS    
set profile_pic = $2
where id = $1

returning *