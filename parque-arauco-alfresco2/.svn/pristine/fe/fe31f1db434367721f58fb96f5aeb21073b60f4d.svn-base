-- Table: "intellego_ACLs"

DROP TABLE "intellego_ACLs";

CREATE TABLE "intellego_ACLs"
(
  id serial NOT NULL,
  node integer,
  username character(50),
  rol integer,
  CONSTRAINT pk_acl PRIMARY KEY (id),
  CONSTRAINT acl_node FOREIGN KEY (node)
      REFERENCES intellego_nodes (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT acl_rol FOREIGN KEY (rol)
      REFERENCES intellego_rols (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "intellego_ACLs"
  OWNER TO alfresco;












