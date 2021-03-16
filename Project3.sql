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
    `adminid` INTEGER PRIMARY KEY,
    `userid` INTEGER UNIQUE
);

CREATE TABLE `sports` (
  `id` integer PRIMARY KEY,
  `sport` varchar(255) UNIQUE,
  `competitorsid` string,
  `adminid` string,
  `governingBodyid` string
);

CREATE TABLE `AFL_scoring_stats` (
    `id` SERIAL,
    `sport` VARCHAR(255) UNIQUE,
    `hmteamid` VARCHAR(255) UNIQUE,
    `hmgoals` INTEGER,
    `hmbehinds` INTEGER,
    `hmtotal_score` INTEGER,
    `awayteamid` VARCHAR(255) UNIQUE,
    `awaygoals` INTEGER,
    `awaybehinds` INTEGER,
    `awaytotal_score` INTEGER
);

CREATE TABLE `Basketball_scoring_stats` (
    `id` SERIAL,
    `sport` VARCHAR(255) UNIQUE,
    `hmteamid` VARCHAR(255) UNIQUE,
    `hmtotal_score` INTEGER,
    `awayteamid` VARCHAR(255) UNIQUE,
    `awaytotal_score` INTEGER
);

CREATE TABLE `Tennis_scoring_stats` (
  `id` serial,
  `sport` varchar(255) UNIQUE,
  `winplayerid` [unique],
  `wintotal_score` integer,
  `losstotal_score` integer,
  `lossplayerid` [unique]
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
  `eventid` integer,
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
  `adminid` string,
  `governingBodyid` string
);

CREATE TABLE `League` (
    `id` INTEGER PRIMARY KEY,
    `email` VARCHAR(255) UNIQUE,
    `name` VARCHAR(255) UNIQUE,
    `adminid` INTEGER,
    `governingBodyid` INTEGER,
    `start_seasonid` INTEGER,
    `start_date_time` TIMESTAMP,
    `end_seasonid` INTEGER,
    `end_date_time` TIMESTAMP
);

CREATE TABLE `club` (
  `id` integer PRIMARY KEY,
  `members` [string],
  `email` varchar(255) UNIQUE,
  `name` varchar(255) UNIQUE,
  `adminid` integer,
  `governingBodyid` integer
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
    `userid` INTEGER,
    `locationid` INTEGER,
    `start_date` DATE,
    `end_date` DATE,
    `num_days` INTEGER,
    `adminid` INTEGER,
    `governingBodyid` INTEGER
);

CREATE TABLE `locations` (
  `id` integer PRIMARY KEY,
  `email` varchar(255) UNIQUE,
  `name` varchar(255) UNIQUE,
  `venueid` integer UNIQUE NOT NULL,
  `street_number` varchar(255) UNIQUE,
  `street` varchar(255) UNIQUE,
  `neighborhood` varchar(255) UNIQUE,
  `state` varchar(255) UNIQUE,
  `region` varchar(255) UNIQUE,
  `postal_code` varchar(255) UNIQUE,
  `country` varchar(255) UNIQUE,
  `adminid` string,
  `governingBodyid` string
);

ALTER TABLE `locations` ADD FOREIGN KEY (`venueid`) REFERENCES `locations` (`id`);

ALTER TABLE `events` ADD FOREIGN KEY (`userid`) REFERENCES `users` (`id`);

ALTER TABLE `events` ADD FOREIGN KEY (`locationid`) REFERENCES `locations` (`id`);

ALTER TABLE `admin` ADD FOREIGN KEY (`userid`) REFERENCES `users` (`id`);

ALTER TABLE `competitors` ADD FOREIGN KEY (`id`) REFERENCES `users` (`id`);

ALTER TABLE `competitors` ADD FOREIGN KEY (`sports`) REFERENCES `sports` (`sport`);

ALTER TABLE `sports` ADD FOREIGN KEY (`competitorsid`) REFERENCES `competitors` (`id`);

ALTER TABLE `sports` ADD FOREIGN KEY (`adminid`) REFERENCES `admin` (`adminid`);

ALTER TABLE `team` ADD FOREIGN KEY (`members`) REFERENCES `competitors` (`id`);

ALTER TABLE `club` ADD FOREIGN KEY (`members`) REFERENCES `competitors` (`id`);

ALTER TABLE `club` ADD FOREIGN KEY (`adminid`) REFERENCES `admin` (`adminid`);

ALTER TABLE `locations` ADD FOREIGN KEY (`adminid`) REFERENCES `admin` (`adminid`);

ALTER TABLE `Tennis_scoring_stats` ADD FOREIGN KEY (`winplayerid`) REFERENCES `competitors` (`id`);

ALTER TABLE `Tennis_scoring_stats` ADD FOREIGN KEY (`lossplayerid`) REFERENCES `competitors` (`id`);

ALTER TABLE `AFL_scoring_stats` ADD FOREIGN KEY (`hmteamid`) REFERENCES `competitors` (`id`);

ALTER TABLE `AFL_scoring_stats` ADD FOREIGN KEY (`awayteamid`) REFERENCES `competitors` (`id`);

ALTER TABLE `results` ADD FOREIGN KEY (`eventid`) REFERENCES `events` (`id`);

ALTER TABLE `League` ADD FOREIGN KEY (`governingBodyid`) REFERENCES `governingBody` (`id`);

ALTER TABLE `events` ADD FOREIGN KEY (`adminid`) REFERENCES `admin` (`adminid`);

ALTER TABLE `events` ADD FOREIGN KEY (`governingBodyid`) REFERENCES `governingBody` (`id`);

ALTER TABLE `AFL_scoring_stats` ADD FOREIGN KEY (`sport`) REFERENCES `sports` (`sport`);

ALTER TABLE `Equestrian_scoring_stats` ADD FOREIGN KEY (`sport`) REFERENCES `sports` (`sport`);

ALTER TABLE `Equestrian_scoring_stats` ADD FOREIGN KEY (`scores`) REFERENCES `results` (`results`);

ALTER TABLE `Equestrian_scoring_stats` ADD FOREIGN KEY (`placings_competitor`) REFERENCES `results` (`placings`);

ALTER TABLE `Equestrian_scoring_stats` ADD FOREIGN KEY (`percentages`) REFERENCES `results` (`percentages`);

ALTER TABLE `club` ADD FOREIGN KEY (`members`) REFERENCES `team` (`members`);
