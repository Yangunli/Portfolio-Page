import { Link } from "react-router-dom";
import { data } from "../components/data";
import Header from "../components/Header";
import Footer from "../components/Footer";
import cursor from "../assets/cursor.png";

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
                <td>{d?.description}</td>
                {d?.lists && (
                  <ul>
                    {d?.lists.map((li) => (
                      <li>{li.list}</li>
                    ))}
                  </ul>
                )}
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

// {sliderItems.map((item) => (
//   <Slide bg={item.bg} key={item.id}>
//     <ImgContainer>
//       <Image src={item.img} />
//     </ImgContainer>
//     <InfoContainer>
//       <Title>{item.title}</Title>
//       <Desc>{item.desc}</Desc>
//       <Button>SHOW NOW!!!</Button>
//     </InfoContainer>
//   </Slide>
// ))}
