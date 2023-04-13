
USE `GreenCamp` ;

-- -----------------------------------------------------
-- Table `GreenCamp`.`Tareas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GreenCamp`.`Tareas` (
  `areaId` VARCHAR(6) NOT NULL,
  PRIMARY KEY (`areaId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GreenCamp`.`Tcamper`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GreenCamp`.`Tcamper` (
  `camperId` INT NOT NULL AUTO_INCREMENT,
  `camperVorname` VARCHAR(45) NULL,
  `CamperNachname` VARCHAR(45) NULL,
  `camperFzNr` VARCHAR(15) NULL,
  PRIMARY KEY (`camperId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GreenCamp`.`Treservationen`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GreenCamp`.`Treservationen` (
  `reservationId` VARCHAR(45) NOT NULL,
  `Tareas.areaId` VARCHAR(6) NOT NULL,
  `Tareas_areaId` VARCHAR(6) NOT NULL,
  `Tcamper_camperId` INT NOT NULL,
  PRIMARY KEY (`reservationId`))
ENGINE = InnoDB;
