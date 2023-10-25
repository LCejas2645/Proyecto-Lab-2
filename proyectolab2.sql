-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-10-2023 a las 07:34:49
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectolab2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admistrativo`
--

CREATE TABLE `admistrativo` (
  `id` int(11) NOT NULL,
  `pass` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bioquimico`
--

CREATE TABLE `bioquimico` (
  `id` int(11) NOT NULL,
  `pass` int(4) NOT NULL,
  `updateAt` date NOT NULL,
  `createAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `determinacion`
--

CREATE TABLE `determinacion` (
  `id` int(11) NOT NULL,
  `examenId` int(11) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `unidadMedida` varchar(10) NOT NULL,
  `valorMin` double NOT NULL,
  `valorMax` int(11) NOT NULL,
  `valorReferencia` double NOT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `determinacion`
--

INSERT INTO `determinacion` (`id`, `examenId`, `descripcion`, `unidadMedida`, `valorMin`, `valorMax`, `valorReferencia`, `activo`) VALUES
(2, 13, 'nueva deter', 'ml', 1, 2, 3, 0),
(3, 22, '23', '', 0, 0, 0, 0),
(4, 22, 'determin 2', '', 0, 0, 0, 0),
(5, 23, 'new 1', '', 0, 0, 0, 0),
(6, 24, 'new 2', '', 0, 0, 0, 0),
(7, 25, 'new 3', '', 0, 0, 0, 0),
(8, 7, '', '', 1, 2, 0, 0),
(9, 7, '', '', 1, 2, 0, 0),
(11, 26, '26', '', 0, 0, 0, 0),
(13, 27, '27', '', 0, 0, 0, 0),
(14, 27, '27', '', 0, 0, 0, 0),
(15, 28, '28', '', 0, 0, 0, 0),
(16, 29, '29', '', 0, 0, 0, 0),
(18, 30, '30', '', 0, 0, 0, 0),
(19, 31, '31', '', 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `examen`
--

CREATE TABLE `examen` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `tiempoPromedio` int(100) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `createAt` date NOT NULL,
  `updateAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `examen`
--

INSERT INTO `examen` (`id`, `descripcion`, `tiempoPromedio`, `activo`, `createAt`, `updateAt`) VALUES
(5, 'examen 1', 2, 0, '0000-00-00', '0000-00-00'),
(6, 'examen 2', 4, 1, '0000-00-00', '0000-00-00'),
(7, 'nuevo exame', 1, 1, '0000-00-00', '0000-00-00'),
(8, 'nuevo examen 3', 1, 1, '0000-00-00', '0000-00-00'),
(9, 'nuevo examen 5', 0, 1, '0000-00-00', '0000-00-00'),
(10, 'nuevo examen 6', 0, 1, '0000-00-00', '0000-00-00'),
(11, 'nuevo examen 10', 0, 1, '0000-00-00', '0000-00-00'),
(12, 'nueva muestra 2', 0, 1, '0000-00-00', '0000-00-00'),
(13, 'nuevo examen 10', 0, 1, '0000-00-00', '0000-00-00'),
(14, 'nuevo examen 14', 0, 1, '0000-00-00', '0000-00-00'),
(15, 'nuevo examen 15', 0, 1, '0000-00-00', '0000-00-00'),
(16, 'nuevo examen 16', 0, 1, '0000-00-00', '0000-00-00'),
(17, 'nuevo 17', 0, 1, '0000-00-00', '0000-00-00'),
(18, 'nuevo 18', 0, 1, '0000-00-00', '0000-00-00'),
(19, 'nuevo 19', 0, 1, '0000-00-00', '0000-00-00'),
(20, 'nuevo 22', 0, 1, '0000-00-00', '0000-00-00'),
(21, '21', 0, 1, '0000-00-00', '0000-00-00'),
(22, '23', 0, 1, '0000-00-00', '0000-00-00'),
(23, 'new 1', 0, 1, '0000-00-00', '0000-00-00'),
(24, 'new 2', 0, 1, '0000-00-00', '0000-00-00'),
(25, 'new 3', 0, 1, '0000-00-00', '0000-00-00'),
(26, '26', 0, 1, '0000-00-00', '0000-00-00'),
(27, '27', 0, 1, '0000-00-00', '0000-00-00'),
(28, '28', 0, 1, '0000-00-00', '0000-00-00'),
(29, '29', 0, 1, '0000-00-00', '0000-00-00'),
(30, '30', 0, 1, '0000-00-00', '0000-00-00'),
(31, '31', 0, 1, '0000-00-00', '0000-00-00'),
(32, '26', 0, 1, '0000-00-00', '0000-00-00'),
(33, '22', 0, 1, '0000-00-00', '0000-00-00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `muestra`
--

CREATE TABLE `muestra` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `idExamen` int(11) NOT NULL,
  `detalles` varchar(100) NOT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `muestra`
--

INSERT INTO `muestra` (`id`, `descripcion`, `idExamen`, `detalles`, `activo`) VALUES
(1, 'asd', 5, '', 0),
(3, 'wqeqw', 11, '', 0),
(4, 'nueva meustra 3', 14, '', 0),
(5, 'neuva muestra 15', 15, '', 0),
(6, 'neuva muestra 15', 15, '', 0),
(7, 'nueva muestra 16', 16, '', 0),
(8, 'nuevo 17', 17, '', 0),
(9, 'neuvo 18', 18, '', 0),
(10, 'nuevo 18', 18, '', 0),
(11, 'nuevo 19', 19, '', 0),
(12, 'nuevo 19', 19, '', 0),
(13, 'nuevo 22', 20, '', 0),
(14, '21', 21, '', 0),
(15, '23', 22, '', 0),
(16, 'new 1', 23, '', 0),
(17, 'new 1', 23, '', 0),
(18, 'new 2', 24, '', 0),
(19, 'new 3', 25, '', 0),
(20, '26', 26, '', 0),
(21, '27', 27, '', 0),
(22, '28', 28, '', 0),
(23, '29', 29, '', 0),
(24, '30', 30, '', 0),
(25, '31', 31, '', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orden`
--

CREATE TABLE `orden` (
  `id` int(11) NOT NULL,
  `id_Paciente` int(11) NOT NULL,
  `id_Administrativo` int(11) NOT NULL,
  `id_Examen` int(11) NOT NULL,
  `id_Tecnico` int(11) NOT NULL,
  `id_Bioquimico` int(11) NOT NULL,
  `diagnostico` varchar(50) NOT NULL,
  `estado` enum('esperando toma de muestra','Analitica','Para Validar','Informada') NOT NULL,
  `createAt` date NOT NULL,
  `fechaOut` date NOT NULL,
  `updateAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `id` int(11) NOT NULL,
  `edad` int(11) NOT NULL,
  `nombreCompleto` varchar(50) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `dni` int(8) NOT NULL,
  `sexo` enum('Masculino','Femenino','Otro') NOT NULL,
  `embarazo` tinyint(1) NOT NULL,
  `patologiaPre` varchar(100) NOT NULL,
  `createAt` date DEFAULT NULL,
  `updateAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`id`, `edad`, `nombreCompleto`, `mail`, `dni`, `sexo`, `embarazo`, `patologiaPre`, `createAt`, `updateAt`) VALUES
(1, 22, 'aaaaaaaaaaaqq', 'ff', 1111, 'Femenino', 1, 'no', NULL, NULL),
(2, 5555555, 'luciano cejas edit final', 'lucasuoda@sadas.com', 334, 'Masculino', 0, '', NULL, NULL),
(3, 44, 'Maxi ferrer', 'assasfasfa', 3443535, 'Otro', 0, '', NULL, NULL),
(4, 44, 'lauti litke', '', 22222222, '', 0, '', NULL, NULL),
(5, 0, 'gil gomes', '', 1111111111, '', 0, '', NULL, NULL),
(6, 0, 'hernan gil', '', 444444444, '', 0, '', NULL, NULL),
(7, 0, 'zofia sssss', '', 999999, '', 0, '', NULL, NULL),
(8, 0, 'aaaaaaaa', '', 0, 'Masculino', 0, '', NULL, NULL),
(9, 0, 'aaaaaaaa', '', 0, 'Masculino', 0, '', NULL, NULL),
(10, 0, 'aaaaaaaa', '', 0, 'Masculino', 0, '', NULL, NULL),
(11, 0, 'aaaaaaaa', '', 0, 'Masculino', 0, '', NULL, NULL),
(12, 0, 'marcos gil', '', 39993664, 'Masculino', 0, '', NULL, NULL),
(13, 22, 'aaaaaaaaaaaaaaaa', '', 0, 'Masculino', 0, '', NULL, NULL),
(14, 22, 'gfffffffff', '', 0, 'Masculino', 0, '', NULL, NULL),
(15, 0, '', '', 0, 'Masculino', 0, '', NULL, NULL),
(16, 0, '', '', 0, 'Masculino', 0, '', NULL, NULL),
(17, 0, '', '', 0, 'Masculino', 0, '', NULL, NULL),
(18, 0, 'easy', '', 0, 'Masculino', 0, '', NULL, NULL),
(19, 33, 'Roberto Carlos', 'asdasdasd', 345454545, 'Masculino', 0, 'best', NULL, NULL),
(20, 666, 'Buena Vibra', 'ff', 28988988, 'Masculino', 0, '', NULL, NULL),
(21, 0, 'new', '', 0, 'Masculino', 0, '', NULL, NULL),
(22, 0, 'new 2', '', 0, 'Femenino', 1, '', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tecnico`
--

CREATE TABLE `tecnico` (
  `id` int(11) NOT NULL,
  `pass` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tecnico`
--

INSERT INTO `tecnico` (`id`, `pass`) VALUES
(1, 'asda'),
(2, 'asda'),
(3, 'sisi');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `valoresreferencia`
--

CREATE TABLE `valoresreferencia` (
  `id` int(11) NOT NULL,
  `determinacionId` int(11) NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `valorMin` double NOT NULL,
  `valorMax` double NOT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `valoresreferencia`
--

INSERT INTO `valoresreferencia` (`id`, `determinacionId`, `categoria`, `valorMin`, `valorMax`, `activo`) VALUES
(1, 11, 'h', 1, 2, 0),
(2, 19, 'hombre', 1, 2, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admistrativo`
--
ALTER TABLE `admistrativo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `bioquimico`
--
ALTER TABLE `bioquimico`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `determinacion`
--
ALTER TABLE `determinacion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `examenId` (`examenId`) USING BTREE;

--
-- Indices de la tabla `examen`
--
ALTER TABLE `examen`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `muestra`
--
ALTER TABLE `muestra`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idExamen` (`idExamen`);

--
-- Indices de la tabla `orden`
--
ALTER TABLE `orden`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_Administrativo` (`id_Administrativo`),
  ADD KEY `id_Bioquimico` (`id_Bioquimico`),
  ADD KEY `id_Examen` (`id_Examen`),
  ADD KEY `id_Paciente` (`id_Paciente`),
  ADD KEY `id_Tecnico` (`id_Tecnico`);

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tecnico`
--
ALTER TABLE `tecnico`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `valoresreferencia`
--
ALTER TABLE `valoresreferencia`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `determinacionId` (`determinacionId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `admistrativo`
--
ALTER TABLE `admistrativo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `bioquimico`
--
ALTER TABLE `bioquimico`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `determinacion`
--
ALTER TABLE `determinacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `examen`
--
ALTER TABLE `examen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `muestra`
--
ALTER TABLE `muestra`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `orden`
--
ALTER TABLE `orden`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `paciente`
--
ALTER TABLE `paciente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `tecnico`
--
ALTER TABLE `tecnico`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `valoresreferencia`
--
ALTER TABLE `valoresreferencia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `determinacion`
--
ALTER TABLE `determinacion`
  ADD CONSTRAINT `determinacion_ibfk_3` FOREIGN KEY (`examenId`) REFERENCES `examen` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `muestra`
--
ALTER TABLE `muestra`
  ADD CONSTRAINT `muestra_ibfk_1` FOREIGN KEY (`idExamen`) REFERENCES `examen` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `orden`
--
ALTER TABLE `orden`
  ADD CONSTRAINT `orden_ibfk_1` FOREIGN KEY (`id_Administrativo`) REFERENCES `admistrativo` (`id`),
  ADD CONSTRAINT `orden_ibfk_2` FOREIGN KEY (`id_Bioquimico`) REFERENCES `bioquimico` (`id`),
  ADD CONSTRAINT `orden_ibfk_3` FOREIGN KEY (`id_Examen`) REFERENCES `examen` (`id`),
  ADD CONSTRAINT `orden_ibfk_4` FOREIGN KEY (`id_Paciente`) REFERENCES `paciente` (`id`),
  ADD CONSTRAINT `orden_ibfk_5` FOREIGN KEY (`id_Tecnico`) REFERENCES `tecnico` (`id`);

--
-- Filtros para la tabla `valoresreferencia`
--
ALTER TABLE `valoresreferencia`
  ADD CONSTRAINT `valoresreferencia_ibfk_1` FOREIGN KEY (`determinacionId`) REFERENCES `determinacion` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
