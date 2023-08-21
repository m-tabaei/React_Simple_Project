import { Link } from "react-router-dom";

const Home = () => {
    return (  
        <div className="col-6 bg-dark offset-3 p-5 text-white mt-3">
            <h1 className="text-text-capitalize" >this page is home</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae neque qui, veritatis eveniet voluptates id placeat. Quia corporis quas voluptates atque in possimus sunt, et facere, eum repudiandae nihil voluptate!
            Praesentium voluptatibus, reiciendis itaque repellendus sed est officiis consequuntur, amet veritatis fuga a. Dolores at odit veniam non quae. Ad dolorem molestiae inventore delectus tempora dicta quae, dolores officiis nostrum?</p>
            <Link to="/posts" className="btn btn-success text-white text-capitalize mx-2 ">posts</Link>
            <Link to="/users" className="btn btn-primary text-white text-capitalize mx-2 ">users</Link>
        </div>
    );
}
 
export default Home;