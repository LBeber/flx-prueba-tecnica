--1 
SELECT nombres FROM empleados
order by nombres desc;

--2 
SELECT e.nombres, p.puesto, l.localidad
from empleados e
join puestos p on e.puesto_id = p.id
join departamentos on e.departamento_id = d.id
join localidades l on d.localidad_id = l.id
where p.puesto = 'Soporte';

--3
SELECT nombres from empleados
where nombres like '%o';

--4
SELECT e.nombre, e.sueldo, l.localidad,
from empleados e
join departamentos d on e.departamento_id = d.id
join localidades l on d.localidad_id = l.id
where l.localidad = 'Carlos Paz';

--5
SELECT e.nombres, e.sueldo, l.localidad,
from empleados e
join departamentos d on e.departamento_id = d.id
join localidades l on d.localidad_id = l.id
where e.sueldo between 10000 and 13000;

--6
SELECT d.denominacion, count(e.id) as cant_empleados
from departamentos d
join empleados e on d.id = e.departamento_id
group by d.denominacion
having count(e.id) > 5;

--7
SELECT e.nombres
from empleados d
join departamentos d on e.departamento_id = d.id
join puestos p on e.puesto_id = p.id
where p.puesto = 'Analista' OR p.puesto = 'Programador';


--8
SELECT AVG(sueldo) as sueldo_medio
from empleados;

--9
SELECT MAX(sueldo) as sueldo_maximo
from empleados
where departamento_id = 10;

--10
SELECT MIN(e.sueldo) as sueldo_minimo
from empleados e
join departamentos d on e.departamento_id = d.id
where d.denominacion = 'Soporte';

--11
SELECT p.puesto, SUM(e.sueldo) as sueldo_puesto
from empleados e
join puestos p on e.puesto_id = p.id
group by p.puesto;