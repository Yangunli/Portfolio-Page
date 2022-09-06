import { Link } from "react-router-dom";
import { data } from "../components/data";
import Header from "../components/Header";

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
                <td>{d.description}</td>
                {d?.lists && (
                  <ul>
                    {d.lists.map((li) => (
                      <li>{li.list}</li>
                    ))}
                  </ul>
                )}

                {d?.src && (
                  <Link to="/projectList">
                    有!!! <code>Side Projects</code>請按!!! 或是點選ABOUT
                  </Link>
                )}
              </tr>
            </tbody>
          </table>
        ))}
      </form>
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
