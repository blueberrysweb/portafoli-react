export default function Home() {
  return (
    <>
      <div>
        <p className="titel">
          <b>!compra vende¡</b>
          <br />
          comparte conocimientos
        </p>
      </div>

      <div className="imgsection">
        <div className="item1">
          <div>
            <a className="boton-transparente" href="productos.html">
              Servicios
            </a>
          </div>
          <img
            className="imgcirculo"
            src="img/imgservicios.jpg"
            width="300"
            height="300"
          />
        </div>
        <div className="item1">
          <div>
            <a className="boton-transparente" href="productos.html">
              Perros
            </a>
          </div>
          <img
            className="imgcirculo"
            src="img/portada4.jpg"
            width="300"
            height="300"
          />
        </div>
        <div className="item1">
          <div>
            <a className="boton-transparente" href="productos.html">
              Pajaros
            </a>
          </div>
          <img
            className="imgcirculo"
            src="img/reproduccionbetta.jpeg"
            width="300"
            height="300"
          />
        </div>
      </div>
      <div className="imgsection">
        <div className="item1">
          <a className="boton-transparente" href="productos.html">
            Peces
          </a>
          <img
            className="imgcirculo"
            src="img/img3.jpg"
            width="300"
            height="300"
          />
        </div>
        <div className="item1">
          <a className="boton-transparente" href="productos.html">
            Gatos
          </a>
          <img
            className="imgcirculo"
            src="img/img1.jpg"
            width="300"
            height="300"
          />
        </div>
        <div className="item1">
          <a className="boton-transparente" href="productos.html">
            Adopciones
          </a>
          <img
            className="imgcirculo"
            src="img/img2.jpg"
            width="300"
            height="300"
          />
        </div>
      </div>
    </>
  );
}
