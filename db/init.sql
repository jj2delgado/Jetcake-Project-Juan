create table USERS(
    id serial primary key,
    name_first text not null,
    name_last text not null,
    phone_number text not null,
    password varchar(70) not null,
    address text not null,
    email text not null,
    profile_pic text not null,
    date_of_birth text not null,
    first_security_answer text not null,
    second_security_answer text not null,
    third_security_answer text not null
)