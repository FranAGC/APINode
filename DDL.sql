

CREATE TABLE mundial.Paises (
id_pais int AUTO_INCREMENT PRIMARY KEY,
id_grupo tinyint NOT NULL,
nombre_pais nvarchar(50) NOT NULL,
codigo_pais nvarchar(3) NOT NULL,
ranking_pais SMALLINT NOT NULL,
copas_pais SMALLINT NULL,
bandera_pais nvarchar(300) NOT NULL
);


CREATE TABLE `mundial2022`.`paises` (`id_pais` INT NOT NULL , `id_grupo` TINYINT NOT NULL , `nombre_pais` VARCHAR(50) NOT NULL , `codigo_pais` VARCHAR(3) NOT NULL , `ranking_pais` SMALLINT NOT NULL , `copas_pais` SMALLINT NULL , `bandera_pais` VARCHAR(300) NOT NULL , PRIMARY KEY (`id_pais`), UNIQUE `Uq_NombrePais` (`nombre_pais`)) ENGINE = InnoDB; 

INSERT INTO `paises` (`id_pais`, `id_grupo`, `nombre_pais`, `codigo_pais`, `ranking_pais`, `copas_pais`, `bandera_pais`) VALUES (1, 1, 'Alemania', 'ALM', '12', '2', 'https://flagcdn.com/qa.svg');


