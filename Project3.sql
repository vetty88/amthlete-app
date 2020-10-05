CREATE TABLE `users` (
    `id` INTEGER PRIMARY KEY,
    `email` VARCHAR(255) UNIQUE,
    `full_name` VARCHAR(255) UNIQUE,
    `country_code` INT
);

CREATE TABLE `competitors` (
  `id` integer PRIMARY KEY,
  `sports` string
);

CREATE TABLE `admin` (
    `admin_id` INTEGER PRIMARY KEY,
    `user_id` INTEGER UNIQUE
);

CREATE TABLE `sports` (
  `id` integer PRIMARY KEY,
  `sport` varchar(255) UNIQUE,
  `competitors_id` string,
  `admin_id` string,
  `governingBody_id` string
);

CREATE TABLE `AFL_scoring_stats` (
    `id` SERIAL,
    `sport` VARCHAR(255) UNIQUE,
    `hmteam_id` VARCHAR(255) UNIQUE,
    `hmgoals` INTEGER,
    `hmbehinds` INTEGER,
    `hmtotal_score` INTEGER,
    `awayteam_id` VARCHAR(255) UNIQUE,
    `awaygoals` INTEGER,
    `awaybehinds` INTEGER,
    `awaytotal_score` INTEGER
);

CREATE TABLE `Basketball_scoring_stats` (
    `id` SERIAL,
    `sport` VARCHAR(255) UNIQUE,
    `hmteam_id` VARCHAR(255) UNIQUE,
    `hmtotal_score` INTEGER,
    `awayteam_id` VARCHAR(255) UNIQUE,
    `awaytotal_score` INTEGER
);

CREATE TABLE `Tennis_scoring_stats` (
  `id` serial,
  `sport` varchar(255) UNIQUE,
  `winplayer_id` [unique],
  `wintotal_score` integer,
  `losstotal_score` integer,
  `lossplayer_id` [unique]
);

CREATE TABLE `Equestrian_scoring_stats` (
  `id` serial,
  `sport` varchar(255) UNIQUE,
  `discipline` varchar(255) UNIQUE,
  `placings_competitor` string,
  `scores` string,
  `percentages` string
);

CREATE TABLE `results` (
  `id` integer PRIMARY KEY,
  `event_id` integer,
  `results` tinyint,
  `wintotal_score` integer,
  `losstotal_score` integer,
  `placings` string,
  `percentages` tinyint,
  `results_body` text
);

CREATE TABLE `governingBody` (
  `id` integer PRIMARY KEY,
  `email` varchar(255) UNIQUE,
  `name` varchar(255) UNIQUE,
  `admin_id` string,
  `governingBody_id` string
);

CREATE TABLE `League` (
    `id` INTEGER PRIMARY KEY,
    `email` VARCHAR(255) UNIQUE,
    `name` VARCHAR(255) UNIQUE,
    `admin_id` INTEGER,
    `governingBody_id` INTEGER,
    `start_season_id` INTEGER,
    `start_date_time` TIMESTAMP,
    `end_season_id` INTEGER,
    `end_date_time` TIMESTAMP
);

CREATE TABLE `club` (
  `id` integer PRIMARY KEY,
  `members` [string],
  `email` varchar(255) UNIQUE,
  `name` varchar(255) UNIQUE,
  `admin_id` integer,
  `governingBody_id` integer
);

CREATE TABLE `team` (
  `id` integer PRIMARY KEY,
  `members` [string],
  `email` varchar(255) UNIQUE,
  `name` varchar(255) UNIQUE
);

CREATE TABLE `events` (
    `id` INTEGER PRIMARY KEY,
    `email` VARCHAR(255) UNIQUE,
    `name` VARCHAR(255) UNIQUE,
    `user_id` INTEGER,
    `location_id` INTEGER,
    `start_date` DATE,
    `end_date` DATE,
    `num_days` INTEGER,
    `admin_id` INTEGER,
    `governingBody_id` INTEGER
);

CREATE TABLE `locations` (
  `id` integer PRIMARY KEY,
  `email` varchar(255) UNIQUE,
  `name` varchar(255) UNIQUE,
  `venue_id` integer UNIQUE NOT NULL,
  `street_number` varchar(255) UNIQUE,
  `street` varchar(255) UNIQUE,
  `neighborhood` varchar(255) UNIQUE,
  `state` varchar(255) UNIQUE,
  `region` varchar(255) UNIQUE,
  `postal_code` varchar(255) UNIQUE,
  `country` varchar(255) UNIQUE,
  `admin_id` string,
  `governingBody_id` string
);

ALTER TABLE `locations` ADD FOREIGN KEY (`venue_id`) REFERENCES `locations` (`id`);

ALTER TABLE `events` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `events` ADD FOREIGN KEY (`location_id`) REFERENCES `locations` (`id`);

ALTER TABLE `admin` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `competitors` ADD FOREIGN KEY (`id`) REFERENCES `users` (`id`);

ALTER TABLE `competitors` ADD FOREIGN KEY (`sports`) REFERENCES `sports` (`sport`);

ALTER TABLE `sports` ADD FOREIGN KEY (`competitors_id`) REFERENCES `competitors` (`id`);

ALTER TABLE `sports` ADD FOREIGN KEY (`admin_id`) REFERENCES `admin` (`admin_id`);

ALTER TABLE `team` ADD FOREIGN KEY (`members`) REFERENCES `competitors` (`id`);

ALTER TABLE `club` ADD FOREIGN KEY (`members`) REFERENCES `competitors` (`id`);

ALTER TABLE `club` ADD FOREIGN KEY (`admin_id`) REFERENCES `admin` (`admin_id`);

ALTER TABLE `locations` ADD FOREIGN KEY (`admin_id`) REFERENCES `admin` (`admin_id`);

ALTER TABLE `Tennis_scoring_stats` ADD FOREIGN KEY (`winplayer_id`) REFERENCES `competitors` (`id`);

ALTER TABLE `Tennis_scoring_stats` ADD FOREIGN KEY (`lossplayer_id`) REFERENCES `competitors` (`id`);

ALTER TABLE `AFL_scoring_stats` ADD FOREIGN KEY (`hmteam_id`) REFERENCES `competitors` (`id`);

ALTER TABLE `AFL_scoring_stats` ADD FOREIGN KEY (`awayteam_id`) REFERENCES `competitors` (`id`);

ALTER TABLE `results` ADD FOREIGN KEY (`event_id`) REFERENCES `events` (`id`);

ALTER TABLE `League` ADD FOREIGN KEY (`governingBody_id`) REFERENCES `governingBody` (`id`);

ALTER TABLE `events` ADD FOREIGN KEY (`admin_id`) REFERENCES `admin` (`admin_id`);

ALTER TABLE `events` ADD FOREIGN KEY (`governingBody_id`) REFERENCES `governingBody` (`id`);

ALTER TABLE `AFL_scoring_stats` ADD FOREIGN KEY (`sport`) REFERENCES `sports` (`sport`);

ALTER TABLE `Equestrian_scoring_stats` ADD FOREIGN KEY (`sport`) REFERENCES `sports` (`sport`);

ALTER TABLE `Equestrian_scoring_stats` ADD FOREIGN KEY (`scores`) REFERENCES `results` (`results`);

ALTER TABLE `Equestrian_scoring_stats` ADD FOREIGN KEY (`placings_competitor`) REFERENCES `results` (`placings`);

ALTER TABLE `Equestrian_scoring_stats` ADD FOREIGN KEY (`percentages`) REFERENCES `results` (`percentages`);

ALTER TABLE `club` ADD FOREIGN KEY (`members`) REFERENCES `team` (`members`);
