-- Table: intellego_funcionalities

DROP TABLE intellego_funcionalities;

CREATE TABLE intellego_funcionalities
(
  id serial NOT NULL,
  name character(200),
  "nodeType" integer,
  CONSTRAINT pk_funcionality PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE intellego_funcionalities
  OWNER TO alfresco;
