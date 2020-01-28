insert into USERS(name_first, name_last, phone_number, password, address, email, profile_pic, date_of_birth, first_security_answer, second_security_answer, third_security_answer)
values($1, $2, $3, $4, $5)
returning *;