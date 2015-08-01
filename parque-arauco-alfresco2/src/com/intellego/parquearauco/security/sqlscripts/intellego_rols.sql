-- Table: intellego_rols

DROP TABLE intellego_rols;

CREATE TABLE intellego_rols
(
  id serial NOT NULL,
  name character(100),
  "documentalRol" character(50),
  CONSTRAINT pk_rol PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE intellego_rols
  OWNER TO alfresco;
