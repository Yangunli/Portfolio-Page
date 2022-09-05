import React from "react";
import { data } from "../components/data";
import Header from "../components/Header";
import image from "../components/frameworks.svg";
const Form = () => {
  return (
    <>
      <Header />
      <form className="form">
        <img className="form-img" src={image} alt="" />
        {data.map((d) => (
          <table className="table" key={d.id}>
            <tbody>
              <tr className="items">
                <th>{d.title}</th>
                <td>{d.description}</td>
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
