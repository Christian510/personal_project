insert into users
    (user_name, email, phone, auth_id, user_id)
values
    ($1, $2, $3, $4, $5)
returning *;
 



