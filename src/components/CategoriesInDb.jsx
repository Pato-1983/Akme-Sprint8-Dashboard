import {useEffect, useState} from 'react'

function CategoriesInDb() {

  const[categories,setCategories] = useState("")

  useEffect(() => {

    fetch (`https://akmesprint8.herokuapp.com/api/products`)
    .then(res=> res.json())
    .then(info => setCategories(info.countByCategory))
  }, [])

  const genres = [
    "Acción",
    "Animación",
    "Aventura",
    "Ciencia Ficción",
    "Comedia",
    "Documental",
    "Drama",
    "Fantasia",
    "Infantiles",
    "Musical",
  ];


  
  console.log (categories)

  let detectores = {
    name: 'Detectores',
    value: categories.detectores
  }

  let filtros = {
    name: 'Filtros',
    value: categories.filtros
  }

  let guantes = {
    name: 'Guantes',
    value: categories.guantes
  }

  let proteccionAuditiva = {
    name: 'Protección Auditiva',
    value: categories.proteccionAuditiva
  }

  let proteccionRespiratoria = {
    name: 'Protección Respiratora',
    value: categories.proteccionRespiratoria
  }

  let protecciónVisual = {
    name: 'Protección Visual',
    value: categories.protecciónVisual
  }

  let ropaDeTrabajo = {
    name: 'Ropa de trabajo',
    value: categories.ropaDeTrabajo
  }

  let cardProps = [detectores, filtros, guantes, proteccionAuditiva, proteccionRespiratoria, protecciónVisual, ropaDeTrabajo]

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Productos por categoría
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {cardProps.map((category, i) => (
              <div className="col-lg-6 mb-4" key={i}>
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">{category.name}:{category.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDb;
