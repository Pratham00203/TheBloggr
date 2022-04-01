CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE USERS(userid uuid DEFAULT uuid_generate_v1(), name TEXT NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL, bio TEXT, PRIMARY KEY(userid));

CREATE TABLE BLOGS(blogid uuid DEFAULT uuid_generate_v1(), userid uuid NOT NULL, title TEXT NOT NULL, description TEXT NOT NULL, author TEXT NOT NULL, category TEXT NOT NULL, createon TEXT NOT NULL, totalviews INT NOT NULL, PRIMARY KEY(blogid), FOREIGN KEY(userid) REFERENCES users(userid));

CREATE TABLE COMMENTS(commentid uuid DEFAULT uuid_generate_v1(), userid uuid NOT NULL,username TEXT NOT NULL, blogid uuid NOT NULL, commentbody TEXT NOT NULL,postedon TEXT NOT NULL,PRIMARY KEY(commentid), FOREIGN KEY (userid) REFERENCES users(userid), FOREIGN KEY (blogid) REFERENCES blogs(blogid));