-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 12 Mar 2024 pada 00.25
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `matkuls`
--

CREATE TABLE `matkuls` (
  `id` int(11) NOT NULL,
  `tanggal` varchar(255) DEFAULT NULL,
  `matkul` varchar(255) DEFAULT NULL,
  `tugas` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `matkuls`
--

INSERT INTO `matkuls` (`id`, `tanggal`, `matkul`, `tugas`, `status`, `createdAt`, `updatedAt`) VALUES
(1, '2024-03-01', 'Pemrograman Web', 'Latihan JS', 'Belum Selesai', '2024-03-10 14:15:22', '2024-03-11 18:18:23'),
(3, '2024-03-03', 'Komunikasi Data', 'Critical Book', 'Selesai', '2024-03-10 14:42:41', '2024-03-11 18:18:13'),
(4, '2024-03-19', 'PKN', 'CJR', 'Selesai', '2024-03-11 17:01:32', '2024-03-11 18:18:31'),
(5, '2024-03-12', 'Kewirausahaan', 'Buat Video', 'Belum Selesai', '2024-03-11 18:17:33', '2024-03-11 18:19:34');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `matkuls`
--
ALTER TABLE `matkuls`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `matkuls`
--
ALTER TABLE `matkuls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
