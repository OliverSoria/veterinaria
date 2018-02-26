-- phpMyAdmin SQL Dump
-- version 4.2.12deb2+deb8u2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 26, 2018 at 12:17 AM
-- Server version: 5.5.59-0+deb8u1
-- PHP Version: 5.6.33-0+deb8u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `veterinaria`
--

-- --------------------------------------------------------

--
-- Table structure for table `catalogo_usuarios`
--

CREATE TABLE IF NOT EXISTS `catalogo_usuarios` (
`id_usuario` int(10) NOT NULL,
  `alias_usuario` varchar(16) COLLATE utf8_spanish_ci NOT NULL,
  `nombre_usuario` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `paterno_usuario` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `materno_usuario` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `password_usuario` varchar(64) COLLATE utf8_spanish_ci NOT NULL,
  `fecha_alta_usuario` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `fecha_baja_usuario` timestamp NULL DEFAULT NULL,
  `tipo_usuario` varchar(1) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `catalogo_usuarios`
--

INSERT INTO `catalogo_usuarios` (`id_usuario`, `alias_usuario`, `nombre_usuario`, `paterno_usuario`, `materno_usuario`, `password_usuario`, `fecha_alta_usuario`, `fecha_baja_usuario`, `tipo_usuario`) VALUES
(1, 'oliver666', 'Oliver', 'Soria', 'Peláez', 'sdgfsd', '2018-01-01 06:00:00', NULL, 'A');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `catalogo_usuarios`
--
ALTER TABLE `catalogo_usuarios`
 ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `catalogo_usuarios`
--
ALTER TABLE `catalogo_usuarios`
MODIFY `id_usuario` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
