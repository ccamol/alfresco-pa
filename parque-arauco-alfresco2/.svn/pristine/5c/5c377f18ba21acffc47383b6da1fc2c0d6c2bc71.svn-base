-- Table: intellego_rolfuncionalities

DROP TABLE intellego_rolfuncionalities;

CREATE TABLE intellego_rolfuncionalities
(
  id serial NOT NULL,
  rol integer,
  funcionality integer,
  value boolean,
  CONSTRAINT pk_rolfuncionalities PRIMARY KEY (id),
  CONSTRAINT funcionality_funcionality FOREIGN KEY (funcionality)
      REFERENCES intellego_funcionalities (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT rol_rolfuncionality FOREIGN KEY (rol)
      REFERENCES intellego_rols (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE intellego_rolfuncionalities
  OWNER TO alfresco;
