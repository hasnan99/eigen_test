-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 14, 2024 at 03:28 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eigen`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `id` int(250) NOT NULL,
  `code` varchar(250) NOT NULL,
  `title` varchar(250) NOT NULL,
  `author` varchar(250) NOT NULL,
  `stock` int(250) NOT NULL,
  `borrowed_date` date NOT NULL,
  `memberId` int(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id`, `code`, `title`, `author`, `stock`, `borrowed_date`, `memberId`) VALUES
(1, 'JK-45', 'Harry Potter', 'J.K Rowling', 1, '2024-09-14', NULL),
(2, 'SHR-1', 'A Study in Scarlet', 'Arthur Conan Doyle', 1, '0000-00-00', NULL),
(3, 'TW-11', 'Twilight', 'Stephenie Meyer', 1, '0000-00-00', NULL),
(4, 'HOB-83', 'The Hobbit, or There and Back Again', 'J.R.R. Tolkien', 1, '0000-00-00', NULL),
(5, 'NRN-7', 'The Lion, the Witch and the Wardrobe', 'C.S. Lewis', 1, '0000-00-00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `id` int(250) NOT NULL,
  `code` varchar(250) NOT NULL,
  `name` varchar(250) NOT NULL,
  `booksBorrowed` int(250) NOT NULL,
  `penaltyUntil` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`id`, `code`, `name`, `booksBorrowed`, `penaltyUntil`) VALUES
(1, 'M001', 'Angga', 0, '0000-00-00'),
(2, 'M002', 'Ferry', 0, '0000-00-00'),
(3, 'M003', 'Putri', 0, '0000-00-00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`),
  ADD KEY `memberId` (`memberId`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
