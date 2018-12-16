--
-- PostgreSQL database dump
--

-- Dumped from database version 10.6 (Ubuntu 10.6-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.6 (Ubuntu 10.6-0ubuntu0.18.04.1)

-- Started on 2018-12-16 01:49:45 EST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 13039)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2918 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 197 (class 1259 OID 16855)
-- Name: Players; Type: TABLE; Schema: public; Owner: song_project
--

CREATE TABLE public."Players" (
    id integer NOT NULL,
    "playerName" character varying(255),
    tier character varying(255),
    "positionOne" character varying(255),
    "positionTwo" character varying(255),
    team character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Players" OWNER TO song_project;

--
-- TOC entry 196 (class 1259 OID 16853)
-- Name: Players_id_seq; Type: SEQUENCE; Schema: public; Owner: song_project
--

CREATE SEQUENCE public."Players_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Players_id_seq" OWNER TO song_project;

--
-- TOC entry 2919 (class 0 OID 0)
-- Dependencies: 196
-- Name: Players_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: song_project
--

ALTER SEQUENCE public."Players_id_seq" OWNED BY public."Players".id;


--
-- TOC entry 2785 (class 2604 OID 16858)
-- Name: Players id; Type: DEFAULT; Schema: public; Owner: song_project
--

ALTER TABLE ONLY public."Players" ALTER COLUMN id SET DEFAULT nextval('public."Players_id_seq"'::regclass);


--
-- TOC entry 2910 (class 0 OID 16855)
-- Dependencies: 197
-- Data for Name: Players; Type: TABLE DATA; Schema: public; Owner: song_project
--

COPY public."Players" (id, "playerName", tier, "positionOne", "positionTwo", team, "createdAt", "updatedAt") FROM stdin;
108	unknown player	unknown tier	fill	fill	demacia	2018-12-16 01:26:04.139-05	2018-12-16 01:26:11.224-05
110	unknown player	unknown tier	fill	fill	noxus	2018-12-16 01:26:06.326-05	2018-12-16 01:26:13.015-05
109	unknown player	unknown tier	fill	fill	ionia	2018-12-16 01:26:05.339-05	2018-12-16 01:26:14.969-05
111	unknown player	unknown tier	fill	fill	zaun	2018-12-16 01:26:07.867-05	2018-12-16 01:26:17.43-05
\.


--
-- TOC entry 2920 (class 0 OID 0)
-- Dependencies: 196
-- Name: Players_id_seq; Type: SEQUENCE SET; Schema: public; Owner: song_project
--

SELECT pg_catalog.setval('public."Players_id_seq"', 111, true);


--
-- TOC entry 2787 (class 2606 OID 16863)
-- Name: Players Players_pkey; Type: CONSTRAINT; Schema: public; Owner: song_project
--

ALTER TABLE ONLY public."Players"
    ADD CONSTRAINT "Players_pkey" PRIMARY KEY (id);


-- Completed on 2018-12-16 01:49:45 EST

--
-- PostgreSQL database dump complete
--

