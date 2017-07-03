CREATE TABLE dishes(
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400),
  image_url TEXT
);

INSERT INTO dishes(name, image_url) VALUES ('pudding', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/');

INSERT INTO dishes(name, image_url) VALUES ('cake', 'https://s-media-cache-ak0.pinimg.com/originals/1b/22/ee/1b22ee097681dd59991f389f763fe461.jpg');

CREATE TABLE comments(
  id SERIAL4 PRIMARY KEY,
  body TEXT,
  dish_id INTEGER
);

CREATE TABLE users(
  id SERIAL4 PRIMARY KEY,
  email VARCHAR(400),
  password_digest TEXT
);

CREATE TABLE dish_types(
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400)
);

ALTER TABLE dishes ADD COLUMN dish_type_id INTEGER;











