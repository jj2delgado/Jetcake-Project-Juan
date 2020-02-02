update USERS
set password = $2, first_security_answer = $3, second_security_answer = $4, third_security_answer = $5
where id = $1

returning *