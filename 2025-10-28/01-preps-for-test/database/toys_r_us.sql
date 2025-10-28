-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Oct 28, 2025 at 08:03 AM
-- Server version: 9.5.0
-- PHP Version: 8.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `toys_r_us`
--
CREATE DATABASE IF NOT EXISTS `toys_r_us` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `toys_r_us`;

-- --------------------------------------------------------

--
-- Table structure for table `audiences`
--

CREATE TABLE `audiences` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `audiences`
--

INSERT INTO `audiences` (`id`, `name`, `created_at`, `updated_at`) VALUES
('589de178-0bd2-4798-9684-16750ae3b7dd', 'youth', '2025-10-28 07:57:47', '2025-10-28 07:57:47'),
('6ea97228-5231-4528-b139-74fe8c211895', 'adults', '2025-10-28 07:58:05', '2025-10-28 07:58:05'),
('bcca07fe-3aef-4227-8b92-2c292212d051', 'kids', '2025-10-28 07:57:29', '2025-10-28 07:57:29');

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `audience_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `audience_id`, `name`, `description`, `price`, `created_at`, `updated_at`) VALUES
('3820d3c9-b3d4-11f0-ba7c-3a2189f18bc6', '6ea97228-5231-4528-b139-74fe8c211895', 'elias', 'elias long', 10, '2025-10-28 07:59:08', '2025-10-28 07:59:08'),
('3820eeba-b3d4-11f0-ba7c-3a2189f18bc6', '589de178-0bd2-4798-9684-16750ae3b7dd', 'poker', 'poker', 5, '2025-10-28 07:59:08', '2025-10-28 07:59:08'),
('3820fd09-b3d4-11f0-ba7c-3a2189f18bc6', '589de178-0bd2-4798-9684-16750ae3b7dd', 'rolette', 'rolette long', 12, '2025-10-28 07:59:08', '2025-10-28 07:59:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `audiences`
--
ALTER TABLE `audiences`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`),
  ADD KEY `audience_id` (`audience_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `games`
--
ALTER TABLE `games`
  ADD CONSTRAINT `games_ibfk_1` FOREIGN KEY (`audience_id`) REFERENCES `audiences` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
