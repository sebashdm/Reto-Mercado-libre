<div align="center">
 <h1>Reto Mercado libre</h1>
</div>
<br />

## Puesta en marcha

El proyecto cuenta con dos directorios principales, el server, que contiene los end point del back y front-meli, donde esta construido todo el front con React.js, React-redux para manejo de estado global de la app y react-testing-library para las pruebas unitarias.

link de repositorio en git hub:

```bash
git clone https://github.com/sebashdm/Reto-Mercado-libre.git
```

Se debe ingresar a ambos directorios por separado, para installar las dependencias con 'npm install' y luego ejecutar con npm start.

Realizado esto, el proyecto debe cargar sin nigun problema, ya que por comodidad, toda configuracion extra, esta arriba en este repositorio.

<br />

## React-redux

Por temas de escalabilidad, decidi implementar react-redux, mas especificamente Redux-toolkit. Aunque la aplicacion es pequeña, con la implementacion de Redux como gestor de estado global de la aplicacion, estaria preparada para recibir una mayor carga de items en cada consulta.

<br />

## Buenas practicas

Se creo una biblioteca de componentes tratando de implementar Atomic desing para la creacion de cada pantalla, desde lo mas pequeño como moleculas, hasta la pagina completa.

Se implemento Sass para el manejo de estilos, creando una Biblioteca de variables retulizable en la mayoria de componentes

Se realizaron pruebas unitarias a la gran mayoria de componentes.
