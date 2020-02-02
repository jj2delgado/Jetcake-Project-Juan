update USERS
set street_address = $2, city = $3, us_state = $4, zipcode = $5
where id = $1

returning*