import style from './About.module.css'

export default function About() {
	return (
		<div className={style.container}>
			<h1 style={{fontSize: '25px'}}>Hola! Mi nombre es Carlos Narvaez</h1>
			<p>Esta sección está reservada para comentarle a usted, señor usuario, los detalles del desarollo de esta sencilla página web.
				"RICK AND MORTY app" es un proyecto individual e integrador que fue realizado (aún sin terminar) durante el cursado del Módulo 2 en el bootcamp <strong>#SoyHenry</strong>. Está realizado enteramente con <strong>REACT</strong>, haciendo uso de la herramienta <strong>REDUX</strong> y mostrando mis  conocimientos adquiridos  en CSS.
			<hr />
				El principal objetivo detrás de esta aplicación web es poder demostrar mis conocimientos en <strong>FRONTEND</strong> con las ya mencionadas herramientas empleadas.
			<hr />
				Muchas Gracias !
			</p>
		</div>
	);
}
