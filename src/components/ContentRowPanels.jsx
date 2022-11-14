
import { useState, useEffect } from 'react'
import SmallCard from "./SmallCard";


function ContentRowPanels() {

  const [products, setProducts] = useState("")
  const [users, setUsers] = useState("")
  const [categories, setCategories] = useState("")
  
  
  useEffect(() => {
  
      fetch (`https://akmesprint8.herokuapp.com/api/products`)
      .then(res=> res.json())
      .then(data => {setProducts(data.count)})
      
  })

  useEffect(() => {
  
    fetch (`https://akmesprint8.herokuapp.com/api/products`)
    .then(res=> res.json())
    .then(data => {setCategories(data.countByCategory.total)})
    
})
  
  
    useEffect(() => {
  
      fetch (`https://akmesprint8.herokuapp.com/api/users`)
      .then(res=> res.json())
      .then(data => setUsers(data.count))
    })
  

    let productCard = {
      title: 'productos',
      total: products,
      color:   "primary",
      icon: "fa-film"
    }
  
    let categoriesCard = {
      title: 'categorías',
      total: categories,
      color:   "warning",
      icon: "fa-award",
    }

    let userCard = {
      title: 'usuarios',
      total: users,
      color:   "success",
      icon: "fa-user",
    }
  
    let cardProps = [productCard, categoriesCard, userCard]

  return (
    <div className="row">
      {cardProps.map((item, i) => {
        return <SmallCard {...item} key={i} />;
      })}
    </div>
  );
}

export default ContentRowPanels;