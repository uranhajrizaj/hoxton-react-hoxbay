import { Link } from "react-router-dom";

export function Categories (){
    return (
 <main>
  <section className="categories-container main-wrapper">
    <ul className="categories-container__list">
      {/* <!-- Single category --> */}
      <li>
        {/* <!-- Use the Link component from React Router to create 
              the anchor tags
        --> */}
        <Link to="/categories/1">electronics</Link>
      </li>
      {/* <!--  --> */}
      <li>
        <a href="/categories/2">jewelery</a>
      </li>
      {/* <!--  --> */}
      <li>
        <a href="/categories/3">men's clothing</a>
      </li>
      {/* <!--  --> */}
      <li>
        <a href="/categories/4">women's clothing</a>
      </li>
      {/* <!--  --> */}
    </ul>
  </section>
</main>

    )
}