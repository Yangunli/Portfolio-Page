import { Link } from "react-router-dom";
import { data } from "../components/data";
import Header from "../components/Header";
import cursor from "../assets/cursor.png";
import Footer from "../components/Footer";

const Form = () => {
  return (
    <>
      <Header />
      <form className="form">
        {data.map((d) => (
          <table className="table" key={d.id}>
            <tbody>
              <tr className="items">
                <th>{d.title}</th>
                {d?.src && (
                  <Link to="/projectList">
                    連結到<code>Side Projects</code>
                    <img src={cursor} alt="" />
                  </Link>
                )}
                {d?.lists && (
                  <ul>
                    {d?.lists.map((li) => (
                      <li>{li.list}</li>
                    ))}
                  </ul>
                )}

                <td>{d?.description}</td>
              </tr>
            </tbody>
          </table>
        ))}
      </form>
      <Footer />
    </>
  );
};

export default Form;
