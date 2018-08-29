drop table if exists users;
create table users (
    id serial primary key,
    user_name varchar(180),
    email varchar(180),
    phone text,
    auth_id text,
    user_id text
)







