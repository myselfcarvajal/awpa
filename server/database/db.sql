INSERT INTO administradores(id, nombreUsuario, passwd, email, nombre, apellido) VALUES
('4567','pabloguerra','password','pabloguerra@unicesar.edu.co','Pablo','Guerra');

INSERT INTO facultades VALUES
('ACE','Administrativas, Contables y Económicas'),
('DCPS','Derecho, Ciencias Políticas y Sociales'),
('IT','Ingenierías Tecnológicas'),
('BA','Bellas Artes'),
('CBE','Ciencias Básicas y de la Educación'),
('CS','Ciencias de la Salud');


INSERT INTO docentes(id, nombreUsuario, passwd, email, nombre, apellido, idFacultad) VALUES
('353645','mariolopez','password', 'mariolopez@unicesar.edu.co','Mario','Lopez','IT'),
('974737','carlosdaza','password', 'carlosdaza@unicesar.edu.co','Carlos','Daza','CS'),
('780146','diegogill','password', 'diegogill@unicesar.edu.co','Diego','Gill','ACE');

INSERT INTO publicaciones(tituloPublicacion, autor, descripcionPub, urlPublicacion, idDocente) VALUES
('100 años de soledad','Gabriel Garcia Marquez','Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez, ganador del Premio Nobel de Literatura en 1982. Es considerada una obra maestra de la literatura hispanoamericana y universal, así como una de las obras más traducidas y leídas en español.','http://www.secst.cl/upfiles/documentos/19072016_1207am_578dc39115fe9.pdf','780146'),
('Un Conjunto de Métricas para Proyectos de 
Transición de Software Offshore','Natacha Lascano','El presente trabajo de tesis tiene como objetivo desarrollar la definición de un conjunto de métricas 
para medir el avance y éxito de un proyecto de transición de software a locaciones offshore. 
El análisis se realizó por medio de una encuesta destinada a administradores de proyectos, gerentes de 
ingeniería y desarrolladores de software de proyectos de transición. Los resultados permitieron definir 
dichas métricas y desarrollar también una herramienta que permita la correcta recolección y control de 
las mismas durante el proceso de transición.','http://sedici.unlp.edu.ar/bitstream/handle/10915/32513/Documento_completo__.4.4)%20Un%20Conjunto%20de%20M%C3%A9tricas%20para%20Proyectos%20de%20Transici%C3%B3n%20de%20Software%20Offshore.pdf?sequence=1&isAllowed=y','353645'),
('Manual de Tesis y Trabajos de 
Investigación','Lizbeth Alejandra Guevara','Debido a que no hay una forma univoca de generar conocimientos a través de 
la investigación ya que existe una diversidad de posturas argumentativas desde 
donde concebir el conocimiento y la forma de producirlo, el contenido y desarrollo de 
la tesis es una responsabilidad que recae principalmente en el Tesista y el Director 
de tesis, son ellos quienes en última instancia definen los alcances, técnicas y 
metodologías adecuadas considerando el objeto de estudio que se pretende abordar, 
así como el grado académico al que se aspir','https://www.lasallevictoria.edu.mx/descargas/alumnos/Manual_de_Tesis_y_Trabajos_de_Inv.pdf','974737');



select * from facultades;
select * from docentes;
select * from publicaciones;

##delete from docentes where id='4321'; 
##delete from facultades where CodigoFacultad='IT'; 
