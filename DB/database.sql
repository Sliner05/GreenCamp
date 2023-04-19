
-- -----------------------------------------------------
-- Schema SC_CampoDB
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS SC_CampoDB ;

-- -----------------------------------------------------
-- Schema SC_CampoDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS SC_CampoDB DEFAULT CHARACTER SET utf8mb4 ;
USE SC_CampoDB ;

-- -----------------------------------------------------
-- Table TAreas
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS TAreas (
  AreaId VARCHAR(6) NOT NULL,
  PRIMARY KEY (AreaId))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table TCamper
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS TCamper (
  CamperId INT NOT NULL AUTO_INCREMENT,
  CamperVorname VARCHAR(45) NULL,
  CamperNachname VARCHAR(45) NULL,
  CamperFzNr VARCHAR(15) NULL,
  CamperStrNr CHAR(5) NULL,
  CamperStrasse VARCHAR(30) NULL,
  CamperOrt VARCHAR(30) NULL,
  CamperLand VARCHAR(30) NULL,
  CamperKredNr CHAR(16) NULL,
  PRIMARY KEY (CamperId))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table TReservationen
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS TReservationen (
  ResId VARCHAR(45) NOT NULL,
  AreaId VARCHAR(6) NOT NULL,
  CamperId INT NOT NULL,
  PRIMARY KEY (ResId))
ENGINE = InnoDB;