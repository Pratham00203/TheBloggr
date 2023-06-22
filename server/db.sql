CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE USERS(userid uuid DEFAULT uuid_generate_v1(), name TEXT NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL, bio TEXT,profile_img TEXT, PRIMARY KEY(userid));

SELECT (userid,name,email,password,bio) FROM USERS;

CREATE TABLE BLOGS(blogid uuid DEFAULT uuid_generate_v1(), userid uuid NOT NULL, title TEXT NOT NULL, description TEXT NOT NULL, author TEXT NOT NULL, category TEXT NOT NULL, createdon TEXT NOT NULL, totalviews INT NOT NULL, blog_img TEXT, keywords TEXT NOT NULL,author_img TEXT,PRIMARY KEY(blogid));
