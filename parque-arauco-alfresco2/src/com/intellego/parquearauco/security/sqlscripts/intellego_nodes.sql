-- Table: intellego_nodes

DROP TABLE intellego_nodes;

CREATE TABLE intellego_nodes
(
  id serial NOT NULL,
  parent integer,
  name character(200),
  "nodeType" integer,
  CONSTRAINT pk_nodes PRIMARY KEY (id),
  CONSTRAINT parent_node FOREIGN KEY (id)
      REFERENCES intellego_nodes (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE intellego_nodes
  OWNER TO alfresco;
