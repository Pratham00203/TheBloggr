import Navbar from "./Navbar";
import Footer from "./Footer";
import noResultIcon from "../images/search-magnifier-with-a-cross.png";
import { Link } from "react-router-dom";

export default function NoResult() {
  return (
    <>
      <Navbar />
      <section id='main'>
        <div className='no-results-found d-flex align-center justify-center flex-col'>
          <img src={noResultIcon} alt='' />
          <h1>No Results Found</h1>
          <Link to='/home'>Back to HomePage</Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
